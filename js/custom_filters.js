currentBlur = 0;
currentBrightness = 0.5;
currentContrast = 100;
currentGrayScale = 0;
currentHue = 0;
currentOpacity = 100;
currentInvert = 0;
currentSaturate = 100;
currentSepia = 0;

image = document.getElementById('image');

function setBlur(value)
{
    currentBlur = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function setContrast(value)
{
    currentContrast = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function setBrightness(value)
{
    currentBrightness = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function setGrayScale(value)
{
    currentGrayScale = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function setHue(value)
{
    currentHue = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function setInvert(value)
{
    currentInvert = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function setOpacity(value)
{
    currentOpacity = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function setSaturate(value)
{
    currentSaturate = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function setSepia(value) 
{
    currentSepia = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};