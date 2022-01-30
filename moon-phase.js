// @ts-check
const suncalc = require('suncalc');

function getMoonPhase() {
  const date = new Date();
  let { phase } = suncalc.getMoonIllumination(date);
  phase = Math.round(phase * 1000) / 1000;
  if (phase < 0.125) {
    return 'New Moon';
  }
  if (phase < 0.25) {
    return 'Waxing Crescent';
  }
  if (phase < 0.375) {
    return 'First Quarter';
  }
  if (phase < 0.5) {
    return 'Waxing Gibbous';
  }
  if (phase < 0.625) {
    return 'Full Moon';
  }
  if (phase < 0.75) {
    return 'Waning Gibbous';
  }
  if (phase < 0.875) {
    return 'Last Quarter';
  }

  return 'Waning Crescent';
}

module.exports = {
  getMoonPhase,
};
