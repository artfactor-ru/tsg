'use strict';


import { event } from 'jquery';


import "magnific-popup";


var $ = require("jquery");
window.jQuery = $;


var fancybox = require("@fancyapps/fancybox");

$('[data-fancybox]').fancybox({
    buttons: [
        'slideShow',
        'fullScreen',
        'thumbs',
        //'share',
        'download',
        //'zoom',
        'close'
    ],
    thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        // parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
    },
    

});




// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var element = document.querySelectorAll('.animated');

// var element2 = document.querySelectorAll('.shine');
var Visible = function(target) {

    for (let i = 0; i < target.length; i++) {
        // Все позиции элемента
        var targetPosition = {
                top: window.pageYOffset + target[i].getBoundingClientRect().top,
                left: window.pageXOffset + target[i].getBoundingClientRect().left,
                right: window.pageXOffset + target[i].getBoundingClientRect().right,
                bottom: window.pageYOffset + target[i].getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            target[i].classList.add('anitrigger');

       
        } else {
            // Если элемент не видно, то запускаем этот код

        };
    }

};

window.addEventListener('scroll', function() {
    Visible(element);
});

Visible(element);