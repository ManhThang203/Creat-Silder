let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('slider .list .item');
let dost= document.querySelectorAll('slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length -1;
next.onclick = () =>{
    if(active + 1 > lengthItems){
        active = 0;
    }
    else{
        active = active + 1;
    }
    reloadSlider();
}

function reloadSlider(){
    // [ ] nội suy 
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}