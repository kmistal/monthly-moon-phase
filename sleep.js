// @ts-check

/**
 * @param {number} ms
 * @returns Promise<void>
 */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

exports.sleep = sleep;
