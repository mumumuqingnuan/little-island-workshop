(() => {
  'use strict';
  const musicURL = new URL('island-canon-v3.m4a', document.currentScript.src).href;
  const audio = document.getElementById('islandMusic');
  const toggle = document.getElementById('musicToggle');
  const slider = document.getElementById('musicVolume');
  const status = document.getElementById('musicStatus');
  if (!audio || !toggle || !slider || !status) return;

  let context, gain, mediaSource;
  let wanted = true, loading = false, failed = false, awaitingGesture = false;
  let playbackAttempt = 0;
  let volume = 0.35;
  try {
    const saved = localStorage.getItem('little-island-music-volume');
    if (saved !== null && Number.isFinite(Number(saved))) volume = Math.max(0, Math.min(1, Number(saved)));
  } catch (_) { /* Music also works when storage is unavailable. */ }
  slider.value = String(Math.round(volume * 100));

  function applyVolume() {
    slider.setAttribute('aria-valuetext', Math.round(volume * 100) + '%');
    if (gain) gain.gain.setTargetAtTime(volume, context.currentTime, 0.06);
    else audio.volume = volume;
  }

  function update() {
    const playing = wanted && !audio.paused && !loading && !awaitingGesture && !document.hidden;
    toggle.textContent = failed ? '♫ 重试音乐' : awaitingGesture ? '♫ 开启音乐' : loading ? '♫ 取消加载' : wanted ? '♫ 关闭音乐' : '♫ 开启音乐';
    toggle.setAttribute('aria-pressed', String(wanted && !awaitingGesture));
    toggle.setAttribute('aria-label', failed ? '重试播放背景音乐' : awaitingGesture ? '开启背景音乐' : loading ? '取消加载背景音乐' : wanted ? '关闭背景音乐' : '开启背景音乐');
    toggle.setAttribute('aria-busy', String(loading && !awaitingGesture));
    status.textContent = failed ? '音乐暂未加载，请点击重试' : awaitingGesture ? '轻触小岛，音乐就会响起' : loading ? '配乐加载中，小岛可以继续玩' : playing ? '微风卡农 · 正在播放' : '微风卡农 · 慢柔版';
  }

  function fail() {
    playbackAttempt++;
    wanted = false; loading = false; failed = true; awaitingGesture = false;
    audio.pause(); update();
  }

  function prepare() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!context && AudioCtx) {
      context = new AudioCtx();
      gain = context.createGain();
      gain.gain.value = volume;
      mediaSource = context.createMediaElementSource(audio);
      mediaSource.connect(gain);
      gain.connect(context.destination);
      audio.volume = 1;
      context.addEventListener('statechange', () => {
        if (context.state === 'running') { awaitingGesture = false; update(); }
      });
    }
    if (!audio.hasAttribute('src')) audio.src = musicURL;
    applyVolume();
  }

  function play() {
    const attempt = ++playbackAttempt;
    try {
      prepare();
      awaitingGesture = !!context && context.state !== 'running';
      loading = audio.readyState < 3;
      update();
      const resume = context && context.state !== 'running' ? context.resume() : Promise.resolve();
      // Retry both calls synchronously inside a real gesture if autoplay is blocked.
      const start = audio.play();
      Promise.all([resume, start]).then(() => {
        if (attempt !== playbackAttempt) return;
        if (!wanted || document.hidden) audio.pause();
        loading = false; awaitingGesture = false;
        update();
      }).catch(error => {
        if (attempt !== playbackAttempt || !wanted || document.hidden) return;
        if (error && error.name === 'NotAllowedError') {
          // A normal browser policy decision is not a broken audio file.
          awaitingGesture = true; loading = false;
          audio.pause(); update();
        } else fail();
      });
    } catch (_) { fail(); }
  }

  toggle.addEventListener('click', () => {
    if (wanted && !awaitingGesture) {
      playbackAttempt++;
      wanted = false; loading = false; awaitingGesture = false;
      audio.pause();
      update();
      return;
    }
    wanted = true; failed = false; awaitingGesture = false; loading = audio.readyState < 3;
    if (audio.error) { audio.removeAttribute('src'); audio.load(); }
    update();
    play();
  });
  slider.addEventListener('input', () => {
    volume = Math.max(0, Math.min(1, Number(slider.value) / 100));
    applyVolume();
    try { localStorage.setItem('little-island-music-volume', String(volume)); } catch (_) {}
  });
  audio.addEventListener('playing', () => { loading = false; failed = false; update(); });
  audio.addEventListener('waiting', () => { if (wanted && !document.hidden) { loading = true; update(); } });
  audio.addEventListener('pause', update);
  audio.addEventListener('error', () => { if (wanted) fail(); });
  function unlockFromGame(event) {
    if (!wanted || !awaitingGesture || failed || document.hidden) return;
    if (event.target && event.target.closest && event.target.closest('.music-player')) return;
    if (event.type === 'keydown' && (event.repeat || event.ctrlKey || event.metaKey || event.altKey)) return;
    play();
  }
  document.addEventListener('pointerup', unlockFromGame);
  document.addEventListener('click', unlockFromGame);
  document.addEventListener('keydown', unlockFromGame);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { playbackAttempt++; audio.pause(); update(); }
    else if (wanted) play();
  });
  window.addEventListener('pagehide', () => { playbackAttempt++; audio.pause(); });
  window.addEventListener('pageshow', event => { if (event.persisted && wanted && !document.hidden) play(); });
  // Start the request immediately; downloading never waits for autoplay permission.
  audio.preload = 'auto';
  audio.src = musicURL;
  audio.load();
  applyVolume();
  update();
  if (!document.hidden) play();
})();
