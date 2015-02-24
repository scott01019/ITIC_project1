image = document.getElementById('image');

function applyOriginal()
{
    image.style.filter = '';
    image.style.webkitFilter = '';
}

function applyNostalgia() 
{   
    var filter = 'saturate(40%) grayscale(100%) contrast(45%) sepia(100%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyGrayscale() 
{   
    var filter = 'grayscale(100%)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyXPro2() 
{
    var filter = 'contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyWillow()
{
    var filter = 'saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyWalden()
{
    var filter = 'sepia(0.35) contrast(0.9) brightness(1.1) hue-rotate(-10deg) saturate(1.5)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyValencia()
{
    var filter = 'sepia(0.15) saturate(1.5) contrast(0.9)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyToaster()
{
    var filter = 'sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applySutro()
{
    var filter = 'brightness(0.75) contrast(1.3) sepia(0.5) hue-rotate(-25deg)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applySierra()
{
    var filter = 'contrast(0.8) saturate(1.2) sepia(0.15)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyRise()
{
    var filter = 'saturate(1.4) sepia(0.25) hue-rotate(-15deg) contrast(0.8) brightness(1.1)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyNashVille()
{
    var filter = 'sepia(0.4) saturate(1.5) contrast(0.9) brightness(1.1) hue-rotate(-15deg)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyMayfair()
{
    var filter = 'saturate(1.4) contrast(1.1)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
}

function applyLoFi() 
{   
    var filter = 'contrast(1.4) brightness(0.9) sepia(0.05)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyKelvin() 
{   
    var filter = 'sepia(0.4) saturate(2.4) brightness(1.3) contrast(1)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyInkwell() 
{   
    var filter = 'grayscale(1) brightness(1.2) contrast(1.05)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyHudson() 
{   
    var filter = 'contrast(1.3) sepia(0.3) saturate(1.3) hue-rotate(-10deg) brightness(0.95)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyEarlybird() 
{   
    var filter = 'sepia(0.4) saturate(1.6) contrast(1.1) brightness(0.9) hue-rotate(-10deg)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyHefe() 
{   
    var filter = 'contrast(1.2) brightness(0.9) hue-rotate(-10deg)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyBrannan() 
{   
    var filter = 'sepia(0.5) contrast(1.4)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function applyAmaro() 
{   
    var filter = 'hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function apply1977() 
{   
    var filter = 'sepia(0.5) hue-rotate(-30deg) saturate(1.2) contrast(0.8)';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};

function revertToOriginal() 
{   
    var filter = '';
    image.style.filter = filter;
    image.style.webkitFilter = filter;
};