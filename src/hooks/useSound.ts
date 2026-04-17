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
    playBeep(440, 'sine', 0.1);
    setTimeout(() => playBeep(880, 'sine', 0.15), 100);
  }, [playBeep]);

  const playError = useCallback(() => {
    playBeep(220, 'sawtooth', 0.2);
  }, [playBeep]);

  const playClick = useCallback(() => {
    playBeep(660, 'square', 0.05, 0.05);
  }, [playBeep]);

  return { playSuccess, playError, playClick };
};
