import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioCtx = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  };

  const playBeep = useCallback((freq: number, type: OscillatorType, duration: number, volume: number = 0.1) => {
    initAudio();
    if (!audioCtx.current) return;

    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime);
    
    gain.gain.setValueAtTime(volume, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.current.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.current.destination);

    osc.start();
    osc.stop(audioCtx.current.currentTime + duration);
  }, []);

  const playSuccess = useCallback(() => {
    playBeep(523.25, 'sine', 0.1); // C5
    setTimeout(() => playBeep(659.25, 'sine', 0.15), 50); // E5
  }, [playBeep]);

  const playError = useCallback(() => {
    playBeep(220, 'sawtooth', 0.3);
    playBeep(110, 'sine', 0.3);
  }, [playBeep]);

  const playClick = useCallback(() => {
    playBeep(660, 'square', 0.05, 0.05);
  }, [playBeep]);

  const playSwordAttack = useCallback(() => {
    initAudio();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, audioCtx.current.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.current.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.current.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 0.2);
  }, []);

  const playMagicAttack = useCallback(() => {
    initAudio();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const lfo = audioCtx.current.createOscillator();
    const lfoGain = audioCtx.current.createGain();
    const gain = audioCtx.current.createGain();
    osc.type = 'sine';
    lfo.type = 'square';
    lfo.frequency.value = 15;
    lfoGain.gain.value = 300;
    osc.frequency.value = 440;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    gain.gain.setValueAtTime(0.1, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.current.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    lfo.start();
    osc.start();
    lfo.stop(audioCtx.current.currentTime + 0.4);
    osc.stop(audioCtx.current.currentTime + 0.4);
  }, []);

  const playPunchAttack = useCallback(() => {
    initAudio();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, audioCtx.current.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.current.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.current.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 0.15);
  }, []);

  const playEnemyAttack = useCallback(() => {
    initAudio();
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, audioCtx.current.currentTime);
    osc.frequency.linearRampToValueAtTime(50, audioCtx.current.currentTime + 0.3);
    gain.gain.setValueAtTime(0.08, audioCtx.current.currentTime);
    gain.gain.linearRampToValueAtTime(0.0001, audioCtx.current.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);
    osc.start();
    osc.stop(audioCtx.current.currentTime + 0.3);
  }, []);

  return { 
    playSuccess, 
    playError, 
    playClick, 
    playSwordAttack, 
    playMagicAttack, 
    playPunchAttack, 
    playEnemyAttack 
  };
};
