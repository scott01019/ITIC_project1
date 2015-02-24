upload = document.getElementById('upload');
image = document.getElementById('image');

function uploadImage(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            image.setAttribute('src', e.target.result);
            $('#image').show();
        }

        reader.readAsDataURL(input.files[0]);
    }
};

$('#image').hide();
$('.property-container').hide();

$("#upload").change(function(){
    uploadImage(this);
});

function submit()
{
     // Read values from form
    var title = document.getElementById("title").value;
    //document.getElementById("debug").innerHTML = title;
    
    var text = document.getElementById("text").value;
    //document.getElementById("debug").innerHTML = text;
    
    // Save filtered image in a variable
    var filteredImage = image;
    // document.getElementById("debug").appendChild(filteredImage); 

    // Manipulate DOM:
    // 1. Clean up (remove) old stuff
    var parent = form.parentElement;
    while (form.firstChild) {
        form.removeChild(form.firstChild);
    }
        
    // 2. Make room for new stuff: formatted title & text + filtered image
    parent.innerHTML = '<h2>' + title + '</h2><p>' + text + '</p>';
    parent.appendChild(filteredImage);
}