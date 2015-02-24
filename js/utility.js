$(document).ready(function() {
	$('a').click(function() {
		event.preventDefault();
		switch($(this).parent().attr('id')) 
		{
			case 'step1': $('.progress-bar').css('width', '0%');
			break;
			case 'step2': $('.progress-bar').css('width', '20%');
			break;
			case 'step3': $('.progress-bar').css('width', '40%');
			break;
			case 'step4': $('.progress-bar').css('width', '60%');
			break;
			case 'step5': $('.progress-bar').css('width', '80%');
			break;
			case 'step6': $('.progress-bar').css('width', '100%');
			break;
		}
	});

	$('#sizeSelect').change(function() {
		switch($('#sizeSelect option:selected').val()) {
			case '1':
				$('#image-container').css('width', '540px');				
				$('#image-container').css('height', '360px');
			break;
			case '2':
				$('#image-container').css('width', '546px');				
				$('#image-container').css('height', '390px');
			break;			
			case '3':
				$('#image-container').css('width', '640px');				
				$('#image-container').css('height', '480px');
			break;
			case '4':
				$('#image-container').css('width', '960px');				
				$('#image-container').css('height', '768px');
			break;			
			case '5':
				$('#image-container').css('width', '980px');				
				$('#image-container').css('height', '770px');
			break;
			case '6':
				$('#image-container').css('width', '1050px');				
				$('#image-container').css('height', '750px');
			break;
		}
	});

	$('#filterSelect').change(function() {
		$('.property-container').hide();
		applyOriginal();
		switch($('#filterSelect option:selected').val()) {
			case 'original': applyOriginal();
			break;
			case 'custom': $('.property-container').show();
			break;
			case '1977': apply1977();
			break;
			case 'Amaro': applyAmaro();
			break;
			case 'Brannan': applyBrannan();
			break;
			case 'Earlybird': applyEarlybird();
			break;
			case 'Grayscale': applyGrayscale();
			break;
			case 'Hefe': applyHefe();
			break;
			case 'Hudson': applyHudson();
			break;
			case 'Inkwell': applyInkwell();
			break;
			case 'Kelvin': applyKelvin();
			break;
			case 'LoFi': applyLoFi();
			break;
			case 'Mayfair': applyMayfair();
			break;
			case 'NashVille': applyNashVille();
			break;
			case 'Nostalgia': applyNostalgia();
			break;
			case 'Rise': applyRise();
			break;
			case 'Sierra': applySierra();
			break;
			case 'Sutro': applySutro();
			break;
			case 'Toaster': applyToaster();
			break;
			case 'Valencia': applyValencia();
			break;
			case 'Walden': applyWalden();
			break;
			case 'Willow': applyWillow();
			break;
			case 'XPro2': applyXPro2();
			break;
		}
	});

	$('#reset').click(function() {
		$('.progress-bar').css('width', '0%');
	});
});

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