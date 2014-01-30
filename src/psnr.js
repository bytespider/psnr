var mse = require('mse');
var max = 255 * 255;

module.exports = function psnr(original, noisy, step) {
    return 10 * (Math.log(max / mse(original, noisy, step)) / Math.LN10);
};