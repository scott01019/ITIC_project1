//  Purpose: Set the current value of blur.
//  Argument: string value - value of blur
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated blur value.
function setBlur(value)
{
    currentBlur = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
};

//  Purpose: Set the current value of constrast.
//  Argument: string value - value of contrast
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated contrast value.
function setContrast(value)
{
    currentContrast = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
};

//  Purpose: Set the current value of brightness.
//  Argument: string value - value of brightness
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated brightness value.
function setBrightness(value)
{
    currentBrightness = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
};

//  Purpose: Set the current value of gray-scale.
//  Argument: string value - value of gray-scale
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated gray-scale value.
function setGrayScale(value)
{
    currentGrayScale = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
};

//  Purpose: Set the current value of hue.
//  Argument: string value - value of hue
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated hue value.
function setHue(value)
{
    currentHue = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
}

//  Purpose: Set the current value of invert.
//  Argument: string value - value of invert
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated invert value.
function setInvert(value)
{
    currentInvert = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
}

//  Purpose: Set the current value of opacity.
//  Argument: string value - value of opacity
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated opacity value.
function setOpacity(value)
{
    currentOpacity = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
}

//  Purpose: Set the current value of saturate.
//  Argument: string value - value of saturate
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated saturate value.
function setSaturate(value)
{
    currentSaturate = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
}

//  Purpose: Set the current value of sepia.
//  Argument: string value - value of sepia
//  Precondition: None.
//  Postcondition: Filter for image canvas will have updated sepia value.
function setSepia(value) 
{
    currentSepia = value;
    var filter = 'blur(' + currentBlur + 'px)' + 'brightness(' + currentBrightness + ')' + 'contrast(' + currentContrast + '%)' 
                    + 'grayscale(' + currentGrayScale + '%)' + 'hue-rotate(' + currentHue + 'deg)' + 'invert(' + currentInvert + '%)'
                    + 'opacity(' + currentOpacity + '%)' + 'saturate(' + currentSaturate + '%)' + 'sepia(' + currentSepia + '%)';
    setFilter(filter);
};