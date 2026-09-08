(() => {
  'use strict';
  const musicURL = new URL('island-canon-v3.m4a', document.currentScript.src).href;
  const audio = document.getElementById('islandMusic');
  const toggle = document.getElementById('musicToggle');
  const slider = document.getElementById('musicVolume');
  const status = document.getElementById('musicStatus');
  if (!audio || !toggle || !slider || !status) return;

  let context, gain, mediaSource;
  let wanted = false, loading = false, failed = false;
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
    const playing = wanted && !audio.paused && !loading && !document.hidden;
    toggle.textContent = failed ? '♫ 重试音乐' : loading ? '♫ 取消加载' : wanted ? '♫ 关闭音乐' : '♫ 开启音乐';
    toggle.setAttribute('aria-pressed', String(wanted));
    toggle.setAttribute('aria-label', failed ? '重试播放背景音乐' : loading ? '取消加载背景音乐' : wanted ? '关闭背景音乐' : '开启背景音乐');
    toggle.setAttribute('aria-busy', String(loading));
    status.textContent = failed ? '音乐暂未加载，请点击重试' : loading ? '配乐加载中，小岛可以继续玩' : playing ? '微风卡农 · 正在播放' : '微风卡农 · 慢柔版';
  }

  function fail() {
    playbackAttempt++;
    wanted = false; loading = false; failed = true;
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
    }
    if (!audio.hasAttribute('src')) audio.src = musicURL;
    applyVolume();
  }

  function play() {
    const attempt = ++playbackAttempt;
    try {
      prepare();
      const resume = context && context.state !== 'running' ? context.resume() : Promise.resolve();
      // Both calls occur in the click handler, preserving Safari's user gesture.
      const start = audio.play();
      Promise.all([resume, start]).then(() => {
        if (attempt !== playbackAttempt) return;
        if (!wanted || document.hidden) audio.pause();
        loading = false;
        update();
      }).catch(() => { if (attempt === playbackAttempt && wanted && !document.hidden) fail(); });
    } catch (_) { fail(); }
  }

  toggle.addEventListener('click', () => {
    if (wanted) {
      playbackAttempt++;
      wanted = false; loading = false;
      audio.pause();
      update();
      return;
    }
    wanted = true; failed = false; loading = audio.readyState < 3;
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
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { audio.pause(); update(); }
    else if (wanted) play();
  });
  window.addEventListener('pagehide', () => audio.pause());
  window.addEventListener('pageshow', () => { if (wanted && !document.hidden) play(); });
  applyVolume();
  update();
})();
