const createAnimation = function(element,animation){
    window.addEventListener('scroll', () => {
        let myElem = document.querySelectorAll(element);
        myElem.forEach((elem) => {
            let windowheight = window.innerHeight;
            let revealTop = elem.getBoundingClientRect().top;
            let revealBottom = elem.getBoundingClientRect().bottom;
    
            revealTop < windowheight - 100 && revealBottom > windowheight - 800 ? elem.classList.add(animation) : elem.classList.remove(animation)
        })
    });
}

createAnimation('.hidden','fadeIn');
createAnimation('.fromZoomOut','toZoomIn');
createAnimation('.fromUp','toPosition');
createAnimation('.fromDown','toPosition');
createAnimation('.fromRight','toPosition');
createAnimation('.fromLeft','toPosition');

document.querySelectorAll(".card").forEach((card) => card.addEventListener('click', () => card.classList.toggle('isFlipped')))

console.log(window.outerWidth);
console.log(window.outerHeight);