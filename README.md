# psnr

Peak signal-to-noise ratio, often abbreviated PSNR, is an engineering term for the ratio between the maximum possible power of a signal and the power of corrupting noise that affects the fidelity of its representation. 

Because many signals have a very wide dynamic range, PSNR is usually expressed in terms of the logarithmic decibel scale.

PSNR is most commonly used to measure the quality of reconstruction of lossy compression codecs (e.g., for image compression). The signal in this case is the original data, and the noise is the error introduced by compression. When comparing compression codecs, PSNR is an approximation to human perception of reconstruction quality.

http://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio  

# example

```
var psnr = require('psnr');
var data_1 = [
    188, 100, 114, 171, 171, 173, 230, 149,
    191,  81,  61,  62, 127, 217,  62,  81, 
    178, 159, 245,  18,   9,  86, 201, 166,
    122, 210,   4, 182,  15,  18, 135, 203,
    222, 134, 154,  21,  71, 217,  48, 153,
    113, 234, 207, 119,  51,  61, 149, 222, 
    186,  38, 158,  79, 185,   1, 118, 222,
     22, 137, 110, 206,  94, 120, 163, 241
]; 

var data_2 = [
    188, 100, 114, 171, 171, 173, 230, 149,
    191,  81,  61,  62, 127, 217,  62,  81, 
    178, 159, 245,  18,   9,  86, 201, 166,
    122, 210,   4, 182,  15,  18, 135, 203,
    222, 134, 154,  21,  71, 217,  48, 153,
    113, 234, 207, 119,  51,  61, 149, 222, 
    186,  38, 158,  79, 185,   1, 118, 222,
     22, 137, 110, 206,  94, 120, 163, 241
];

var result = psnr(data_1, data_2);
if (result == Infinity) {
    console.log('results are identical');
}

```

# license

MIT
