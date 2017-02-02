//Global Variables with values
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) { //Step 12 Run this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.

    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR); //Gets query of element DETAIL_IMAGE_SELECTOR and passes into detailImage
    detailImage.setAttribute('src', imageUrl); //Sets attribute of 'src' to imageURL parameter

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR); //Gets query of element DETAIL_TITLE_SELECTOR and passes into detailTitle
    detailTitle.textContent = titleText; //Passes titleText parameter into detailTitle.textContext
}

function imageFromThumb(thumbnail) { //Step 10 Runs this function
    'use strict';//strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    return thumbnail.getAttribute('data-image-url'); // returns the attribute from element data-image-url
}

function titleFromThumb(thumbnail) { //Step 11 Run this function
    'use strict';//strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    return thumbnail.getAttribute('data-image-title') // returns the attribute from element data-image-tile
}

function setDetailsFromThumb(thumbnail) { //Step 8 Run this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail)); //Step 9 Call imageFromThumb, passing thumbnail into it then call titleFromThumb, passing thumbnail into it; Then call setDetails with the respective parameters
}

function addThumbClickHandler(thumb) { //Step 6 Run this function with element from thumbnails
    thumb.addEventListener('click', function (event) { //adds Event listener that will listen for a click and then run function(event) when it hears a click
        event.preventDefault(); //the preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        setDetailsFromThumb(thumb); //Step 7 call setDetailsFromThumb and pass thumb into it
        showDetails(); //Step 13 Calls showDetails
    });
}

function getThumbnailsArray() { //Step 4 Runs this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR); //document.querySelectorall returns a list of elements from THUMBNAIL_LINK_SELECTOR then passes that value into var thumbnails
    var thumbnailArray = [].slice.call(thumbnails); //slice.call(thumbnails) creates an array of thumbnails then passes the value it into thumbnailArray
    return thumbnailArray; //thumbnailArray is returned
}

function hideDetails() { //Step 17 Run this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    document.body.classList.add(HIDDEN_DETAIL_CLASS); //adds HIDDEN_DETAIL_CLASS to the document body class list
}

function showDetails() { //Step 14 Run this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR); //Gets query of element DETAIL_FRAME_SELECTOR then passes into frame
    document.body.classList.remove(HIDDEN_DETAIL_CLASS); //Removes HIDDEN_DETAIL_CLASS from the document body
    frame.classList.add(TINY_EFFECT_CLASS); //add TINY_EFFECT_CLASS to the frame.classList
    setTimeout(function () { //Removes TINY_EFFECT_CLASS from frame.classList after 50ms
        frame.classList.remove(TINY_EFFECT_CLASS);//removes TINY_EFFECT_CLASS FROM frame.classList
    }, 50); //50ms
}

function addKeyPressHandler() { //Step 15 Runs this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    document.body.addEventListener('keyup', function(event) { //Adds event listener to document body to listen for 'keyup'
        event.preventDefault(); //the preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        console.log(event.keyCode); //prints out the keyCode of the keyboard
        if (event.keyCode === ESC_KEY) { //Checks to see if the keyCode is ESC_KEY
            hideDetails(); //Step 16 if true call hideDetails
        }
    });
}

function initializeEvents() { //Step 2 Runs this function
    'use strict'; //strict mode, Strict mode changes previously accepted "bad syntax" into real errors.
    var thumbnails = getThumbnailsArray(); //Step 3 Calls getThumbnails, to pass into var thumbnails
    thumbnails.forEach(addThumbClickHandler); //Step 5 addThumbClickHandler is called for thumbnails.forEach() for a callback for each element in the array
    addKeyPressHandler(); //Step 14 Call addKeyPressHandler
}

initializeEvents();//Step 1 calls initializeEvents()