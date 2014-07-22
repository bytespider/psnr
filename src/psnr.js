var mse = require('mse');
var max = 255 * 255;

module.exports = function psnr(original, noisy, step) {
    return 10 * log10(max / mse(original, noisy, step));
};

function log10(value) {
    return Math.log(value) / Math.LN10;
}