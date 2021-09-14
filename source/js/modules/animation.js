// Получаем нужный элемент
var element = document.querySelectorAll('.animated');
var elPreload = document.querySelectorAll('.animated--preloader');
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

// Функция получения координат элемента
// function getCoords(elem) {

//     let box = elem.getBoundingClientRect();

//     return {
//         top: Math.round(box.top + scrollProgress),
//         bottom: Math.round(box.bottom + scrollProgress)
//     };

// }

// // Получение координат для панорамы
// function getCoordsStatic(elem) {
//     let box = elem.getBoundingClientRect();

//     return {

//         left: Math.round(box.left),
//         right: Math.round(box.right),
//         top: Math.round(box.top),
//         bottom: Math.round(box.bottom)
//     };
// }


let scrollProgress = 0;

// function parallax(layer) {
//     // let layers = items;
//     let speed;
//     let yPos;
//     let top;
//     // for (let i = 0; i < layers.length; i++) {
//     // let layer = layers[i];

//     let layerFirstTop = getCoordsStatic(layer).top;
//     let layerTop = getCoords(layer).top;

//     speed = layer.getAttribute('data-speed');
//     top = scrollProgress - layerFirstTop;
//     // topFirst = scrollProgress - layerFirstTop;
//     yPos = -(top * speed / 100);

//     // if (scrollProgress >= layerFirstTop) {
//     layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
//     // }
// }



let oldScrollTopPosition = 0;




window.addEventListener('load', function(){
    // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function() {
        
        scrollProgress = Math.round(pageYOffset);
        Visible(element);
    
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const scrollTopPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (oldScrollTopPosition > scrollTopPosition) {

            document.querySelector('.header').style.transform = "translateY(0%)";


        } else {
            document.querySelector('.header').style.transform = "translateY(-100%)";


        }
        if (winScroll == 0) {
            document.querySelector('.header').style.transform = "translateY(0%)";
        }
        oldScrollTopPosition = scrollTopPosition;

        if (scrollProgress > 1000) {
            document.querySelector('.btn-up--flow').classList.add('active');
        } else {
            document.querySelector('.btn-up--flow').classList.remove('active');
        }

    
    });
    Visible(element);
    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    setTimeout(function(){
        Visible(elPreload);
    }, 500)


})






