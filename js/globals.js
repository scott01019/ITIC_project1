//  A canvas object and canvas context for the image layer.
var canvasImg = document.getElementById('canvas-layer-img');
var ctxImg = canvasImg.getContext('2d');

//  A canvas object and canvas context for the text layer.
var canvasText = document.getElementById('canvas-layer-text');
var ctxText = canvasText.getContext('2d');

//  A canvas object and canvas context for the title layer.
var canvasTitle = document.getElementById('canvas-layer-title');
var ctxTitle = canvasTitle.getContext('2d');

//  A CanvasText object to hold the specifications for the title.
var cardTitle = new CanvasText('', '', '', '', 10, 50);

//  A CanvasText object to hold the specifications for the text.
var cardText = new CanvasText('', '', '', '', 10, 100);

var currentBlur = 0;                //  Initialize current blur of the custom image canvas.
var currentBrightness = 0.5;        //  Initialize current brightness of the custom image canvas.
var currentContrast = 100;          //  Initialize current contrast of the custom image canvas.
var currentGrayScale = 0;           //  Initialize current gray-scale of the custom image canvas.
var currentHue = 0;                 //  Initialize current hue of the custom image canvas.
var currentOpacity = 100;           //  Initialize current opacity of the custom image canvas.
var currentInvert = 0;              //  Initialize current invert of the custom image canvas.
var currentSaturate = 100;          //  Initialize current saturate of the custom image canvas.
var currentSepia = 0;               //  Initialize current sepia of the custom image canvas.

//  A CanvasText class to hold specifications for text on a canvas. 
function CanvasText(text, font, fontSize, color, x, y)
{
    this.text = text;
    this.font = font;
    this.fontSize = fontSize;
    this.color = color;
    this.x = x;
    this.y = y;

    //  setCanvasText
    //  Arguments: string text - text to be written
    //             string font - font name
    //             string fontSize - font size in pixel format
    //             string color - hex or rgb value for color
    //             string x - x position on canvas
    //             string y - y position on canvas
    //  PreCondition: CanvasText object exists and arugments are intialized to proper values.
    //  PostCondition: Fields of CanvasText object will be set to corresponding arugments. 
    this.setCanvasText = function(text, font, fontSize, color, x, y)
    {
        this.text = text;
        this.font = font;
        this.fontSize = fontSize;
        this.color = color;
        this.x = x;
        this.y = y;
    }
}