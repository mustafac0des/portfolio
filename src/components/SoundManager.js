// Note: For a real app we would host an actual UI blip mp3 or wav. 
// I'll provide a minimal working sound generator using Web Audio API instead of a base64 MP3 to ensure it actually makes a cool retro sound.

let audioCtx = null;

export const playBlip = () => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Create a very short square wave blip (8-bit style)
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
    oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // Pitch up quickly
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    console.error('Audio play failed', e);
  }
};

export const playStartSound = () => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch(e) {
    console.error(e);
  }
}
