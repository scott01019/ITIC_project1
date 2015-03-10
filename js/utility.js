$(document).ready(function() {

	//	Purpose: Loads uploaded image file to canvas. 
	//	PreCondition: User has uploaded a new image file.
	//	PostCondiiton: Image file will be drawn to canvas.
	$('#upload').change(function(e) {
		var reader = new FileReader();
		reader.onload = function(event)
		{
		    var img = new Image();
		    img.onload = function()
		    {
		        canvasImg.width = img.width;
		        canvasImg.height = img.height;
		        setCanvasResolution();
		        ctxImg.drawImage(img, 0, 0);
		    }
		    img.src = event.target.result;
		}
		reader.readAsDataURL(e.target.files[0]);   
	});

	//	Purpose: Redraw title when user updates title input.
	//	PreCondition: User changes title input.
	//	PostCondition: Title will be updated on title canvas.
	$('#title').on('change', updateTitle);

	//	Purpose: Redraw title when user updates title font size.
	//	PreCondition: User changes title font-size input.
	//	PostCondition: Title will be updated on title canvas.
	$('#title-font-size').on('change', updateTitle);

	//	Purpose: Redraw title when user updates title font.
	//	PreCondition: User changes title font input.
	//	PostCondition: Title will be updated on title canvas.
	$('#title-font').on('change', updateTitle);

	//	Purpose: Redraw title when user updates title color.
	//	PreCondition: User changes title color input.
	//	PostCondition: Title will be updated on title canvas.
	$('#title-color').on('change', updateTitle);

	//	A variable to hold timeout for user input.
	var timeoutId = 0;

	//	Purpose: Moves title to the left when title-left glyphicon is clicked.
	//	PreCondition: Title-left glyphicon is clicked.
	//	PostCondition: Title will move to the left by 1 pixel per 15ms on mousedown. 
	$('#title-left').mousedown(function() {
		timeoutId = setInterval(function() {
			cardTitle.x -= 1;
			updateTitle();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Moves title to the right when title-right glyphicon is clicked.
	//	PreCondition: Title-right glyphicon is clicked.
	//	PostCondition: Title will move to the right by 1 pixel per 15ms on mousedown. 
	$('#title-right').mousedown(function() {
		timeoutId = setInterval(function() {
			cardTitle.x += 1;
			updateTitle();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Moves title down when title-down glyphicon is clicked.
	//	PreCondition: Title-down glyphicon is clicked.
	//	PostCondition: Title will move down by 1 pixel per 15ms on mousedown. 
	$('#title-down').mousedown(function() {
		timeoutId = setInterval(function() {
			cardTitle.y += 1;
			updateTitle();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Moves title up when title-up glyphicon is clicked.
	//	PreCondition: Title-up glyphicon is clicked.
	//	PostCondition: Title will move up by 1 pixel per 15ms on mousedown. 
	$('#title-up').mousedown(function() {
		timeoutId = setInterval(function() {
			cardTitle.y -= 1;
			updateTitle();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Redraw text when user updates text input.
	//	PreCondition: User changes text input.
	//	PostCondition: text will be updated on text canvas.
	$('#text').on('change', updateText);

	//	Purpose: Redraw text when user updates text font-size.
	//	PreCondition: User changes font-size input.
	//	PostCondition: text will be updated on text canvas.
	$('#text-font-size').on('change', updateText);

	//	Purpose: Redraw text when user updates text font.
	//	PreCondition: User changes font input.
	//	PostCondition: text will be updated on text canvas.
	$('#text-font').on('change', updateText);

	//	Purpose: Redraw text when user updates text color.
	//	PreCondition: User changes color input.
	//	PostCondition: text will be updated on text canvas.
	$('#text-color').on('change', updateText);

	//	Purpose: Moves text to the left when text-left glyphicon is clicked.
	//	PreCondition: Text-left glyphicon is clicked.
	//	PostCondition: Text will move to the left by 1 pixel per 15ms on mousedown. 
	$('#text-left').mousedown(function() {
		timeoutId = setInterval(function() {
			cardText.x -= 1;
			updateText();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Moves text to the right when text-right glyphicon is clicked.
	//	PreCondition: Text-right glyphicon is clicked.
	//	PostCondition: Text will move to the right by 1 pixel per 15ms on mousedown. 
	$('#text-right').mousedown(function() {
		timeoutId = setInterval(function() {
			cardText.x += 1;
			updateText();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Moves text down when text-down glyphicon is clicked.
	//	PreCondition: Text-down glyphicon is clicked.
	//	PostCondition: Text will move down by 1 pixel per 15ms on mousedown. 
	$('#text-down').mousedown(function() {
		timeoutId = setInterval(function() {
			cardText.y += 1;
			updateText();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Moves text up when text-up glyphicon is clicked.
	//	PreCondition: Text-up glyphicon is clicked.
	//	PostCondition: Text will move up by 1 pixel per 15ms on mousedown. 
	$('#text-up').mousedown(function() {
		timeoutId = setInterval(function() {
			cardText.y -= 1;
			updateText();
		}, 15);
	}).bind('mouseup mouseleave', function() {
		clearTimeout(timeoutId);
	});

	//	Purpose: Adjusts canvas resolutions and sizes. 
	//	PreCondition: A new size is selected by the user. 
	//	PostCondition: Canvas' will be adjusted to specified size and resolution.
	$('#sizeSelect').change(function() {
		setCanvasResolution();
		switch($('#sizeSelect option:selected').val()) {
			case '1':
				$('canvas').css('width', '540px');				
				$('canvas').css('height', '360px');
				$('.canvas-container').css('width', '540px');
				$('.canvas-container').css('height', '360px');
			break;
			case '2':
				$('canvas').css('width', '546px');				
				$('canvas').css('height', '390px');
				$('.canvas-container').css('width', '540px');
				$('.canvas-container').css('height', '390px');
			break;			
			case '3':
				$('canvas').css('width', '640px');				
				$('canvas').css('height', '480px');
				$('.canvas-container').css('width', '650px');
				$('.canvas-container').css('height', '480px');
			break;
			case '4':
				$('canvas').css('width', '960px');				
				$('canvas').css('height', '768px');
				$('.canvas-container').css('width', '960px');
				$('.canvas-container').css('height', '768px');
			break;			
			case '5':
				$('canvas').css('width', '980px');				
				$('canvas').css('height', '770px');
				$('.canvas-container').css('width', '980px');
				$('.canvas-container').css('height', '770px');
			break;
			case '6':
				$('canvas').css('width', '1050px');				
				$('canvas').css('height', '750px');
				$('.canvas-container').css('width', '1050px');
				$('.canvas-container').css('height', '750px');
			break;
		}
		updateText();
		updateTitle();
	});

	//	Purpose: Changes filter when user selects new filter.
	//	PreCondition: User selects new filter.
	//	PostCondition: Applies new filter to Image canvas.
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

	//	Purpose: Hides custom filter properties onload.
	$('.property-container').hide();
});

//	Purpose: Sets the resolution of the text and title canvas'.
//	PreCondition: None.
//	PostCondition: Text and Title canvas' will have resolution adjusted to proper size setting selected by user.
function setCanvasResolution()
{
    switch($('#sizeSelect option:selected').val()) {
        case '1':
            canvasTitle.width = canvasText.width = 540;
            canvasTitle.height = canvasText.height = 360;
        break;
        case '2':
            canvasTitle.width = canvasText.width = 546;
            canvasTitle.width = canvasText.width = 390;
        break;          
        case '3':
            canvasTitle.width = canvasText.width = 640;
            canvasTitle.width = canvasText.width = 480;
        break;
        case '4':
            canvasTitle.width = canvasText.width = 960;
            canvasTitle.width = canvasText.width = 768;
        break;          
        case '5':
            canvasTitle.width = canvasText.width = 980;
            canvasTitle.width = canvasText.width = 770;
        break;
        case '6':
            canvasTitle.width = canvasText.width = 1050;
            canvasTitle.width = canvasText.width = 750;
        break;
    }
}

//	Purpose: Redraws an updated title to title canvas.
//	PreCondition: None. 
//	PostCondition: Updated title will be draw to title canvas.
function updateTitle()
{
	clearTitle();
	addTitle();
}

//	Purpose: Sets updated specifcations for title.
//	PreCondition: None.
//	PostCondition: Specification for title will be updated and is ready to be redrawn.
function addTitle()
{
    cardTitle.setCanvasText($('#title').val(),
                            $('#title-font').val(),
                            $('#title-font-size').val(),
                            $('#title-color').val(),
                            cardTitle.x,
                            cardTitle.y);
    drawTitle();
}

//	Purpose: Draws title to canvas.
//	PreCondition: None.
//	PostCondition: Draws title to canvas.
function drawTitle()
{
    ctxTitle.font = cardTitle.fontSize + ' ' + cardTitle.font;
    ctxTitle.fillStyle = cardTitle.color;
    ctxTitle.fillText(cardTitle.text, cardTitle.x, cardTitle.y);    
}

//	Purpose: Redraws an updated text to text canvas.
//	PreCondition: None. 
//	PostCondition: Updated text will be draw to text canvas.
function updateText()
{
	clearText();
	addText();
}

//	Purpose: Sets updated specifcations for text.
//	PreCondition: None.
//	PostCondition: Specification for text will be updated and is ready to be redrawn.
function addText()
{
    cardText.setCanvasText($('#text').val(),
							$('#text-font').val(),
							$('#text-font-size').val(),
							$('#text-color').val(),
							cardText.x,
							cardText.y);
    drawText();
}

//	Purpose: Draws text to canvas.
//	PreCondition: None.
//	PostCondition: Draws text to canvas.
function drawText()
{
    ctxText.font = cardText.fontSize + ' ' + cardText.font;
    ctxText.fillStyle = cardText.color;
    ctxText.fillText(cardText.text, cardText.x, cardText.y);    
}

//	Purpose: Clears the title canvas.
//	PreCondition: None.
//	PostCondition: Title canvas is cleared.
function clearTitle()
{
	ctxTitle.clearRect(0, 0, canvasTitle.width, canvasTitle.height);
}

//	Purpose: Clears the text canvas.
//	PreCondition: None.
//	PostCondition: Text canvas is cleared.
function clearText()
{
    ctxText.clearRect(0, 0, canvasText.width, canvasText.height);
}

//	Purpose: Clear image canvas.
//	PreCondition: None.
//	PostCondition: Image canvas will be cleared.
function clearImg()
{
    ctxImg.clearRect(0, 0, canvasImg.width, canvasImg.height);
}