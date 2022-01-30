// @ts-check
const five = require('johnny-five');
const { getMoonPhase } = require('./moon-phase');
const board = new five.Board();

const moonPhaseLEDIndex = {
  'New Moon': null,
  'Waxing Crescent': 0,
  'First Quarter': 1,
  'Waxing Gibbous': 2,
  'Full Moon': 3,
  'Waning Gibbous': 4,
  'Last Quarter': 5,
  'Waning Crescent': 6,
};

function getLeds() {
  /** @type {five.Led[]} */
  const leds = [];
  for (let i = 7; i < 14; i++) {
    leds.push(new five.Led(i));
  }
  return leds;
}

/**
 * @param {five.Led[]} leds
 */
function highlightMoonPhase(leds) {
  const phase = getMoonPhase();
  const index = moonPhaseLEDIndex[phase];
  leds.forEach((led) => led.off());
  if (index !== null) {
    leds[index].on();
  }
}

board.on('ready', () => {
  const sixHoursInMillis = 21600000;
  const leds = getLeds();
  highlightMoonPhase(leds);
  setInterval(() => {
    highlightMoonPhase(leds);
  }, sixHoursInMillis);
});
