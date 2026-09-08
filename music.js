(() => {
  'use strict';
  const musicURL = new URL('island-canon-fast-v1.m4a', document.currentScript.src).href;
  const audio = document.getElementById('islandMusic');
  const toggle = document.getElementById('musicToggle');
  const slider = document.getElementById('musicVolume');
  const status = document.getElementById('musicStatus');
  if (!audio || !toggle || !slider || !status) return;

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
    audio.volume = volume;
    audio.muted = volume === 0;
  }

  function update() {
    const playing = wanted && !audio.paused && !loading && !awaitingGesture && !document.hidden;
    const active = wanted && (loading || !audio.paused) && !awaitingGesture;
    toggle.textContent = failed ? '♫ 重试音乐' : awaitingGesture ? '♫ 点击播放音乐' : loading ? '♫ 取消加载' : active ? '♫ 关闭音乐' : '♫ 开启音乐';
    toggle.setAttribute('data-awaiting-gesture', String(awaitingGesture));
    toggle.setAttribute('aria-pressed', String(active));
    toggle.setAttribute('aria-label', failed ? '重试播放背景音乐' : awaitingGesture ? '开启背景音乐' : loading ? '取消加载背景音乐' : active ? '关闭背景音乐' : '开启背景音乐');
    toggle.setAttribute('aria-busy', String(loading && !awaitingGesture));
    status.textContent = failed ? '音乐暂未加载，请点击重试' : awaitingGesture ? (audio.readyState >= 3 ? '音乐已就绪，点击上方按钮开启声音' : '请点击上方按钮开启声音') : loading ? '配乐加载中，小岛可以继续玩' : playing ? (volume === 0 ? '当前音量为零，调高即可听到' : '微风卡农 · 正在播放') : '微风卡农 · 慢柔版';
  }

  function fail() {
    playbackAttempt++;
    wanted = false; loading = false; failed = true; awaitingGesture = false;
    audio.pause(); update();
  }

  function prepare() {
    if (!audio.hasAttribute('src')) audio.src = musicURL;
    applyVolume();
  }

  function play() {
    const attempt = ++playbackAttempt;
    try {
      prepare();
      awaitingGesture = false;
      loading = audio.readyState < 3;
      update();
      // Use the browser's native audio output; no second AudioContext gate.
      Promise.resolve(audio.play()).then(() => {
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
    if (wanted && !awaitingGesture && (loading || !audio.paused)) {
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
    if (volume > 0 && wanted && (awaitingGesture || audio.paused) && !document.hidden) play();
    update();
  });
  audio.addEventListener('canplay', update);
  audio.addEventListener('playing', () => { loading = false; failed = false; awaitingGesture = false; update(); });
  audio.addEventListener('waiting', () => { if (wanted && !document.hidden) { loading = true; update(); } });
  audio.addEventListener('pause', update);
  audio.addEventListener('error', () => { if (wanted) fail(); });
  function unlockFromGame(event) {
    // Capture the first real interaction, including one before the first frame.
    if (!wanted || (!awaitingGesture && !audio.paused) || failed || document.hidden) return;
    if (event.target && event.target.closest && event.target.closest('.music-player')) return;
    if (event.type === 'keydown' && (event.repeat || event.ctrlKey || event.metaKey || event.altKey)) return;
    play();
  }
  document.addEventListener('pointerup', unlockFromGame, true);
  document.addEventListener('click', unlockFromGame, true);
  document.addEventListener('keydown', unlockFromGame, true);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { playbackAttempt++; audio.pause(); update(); }
    else if (wanted) play();
  });
  window.addEventListener('pagehide', () => { playbackAttempt++; audio.pause(); });
  window.addEventListener('pageshow', event => { if (event.persisted && wanted && !document.hidden) play(); });
  // Keep the startup bandwidth for the island; start music on its first frame.
  applyVolume();
  update();
  const beginMusic = () => {
    audio.preload = 'auto';
    if (!audio.hasAttribute('src')) {
      audio.src = musicURL;
      audio.load();
    }
    if (wanted && !document.hidden && (audio.paused || awaitingGesture)) play();
  };
  const gameLoading = document.getElementById('loading');
  if (gameLoading && !gameLoading.hidden && gameLoading.style.opacity !== '0') {
    document.addEventListener('island-ready', beginMusic, {once: true});
  } else beginMusic();
})();
