let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let dots = document.querySelectorAll('.dots .dot');

//config param
let countDots = dots.length;
let dotActive = 0;
let countItem = items.length;
let itemActive = 0;

//function next button
next.onclick = function() {
    itemActive = itemActive + 1;
    dotActive = dotActive + 1;
    if(itemActive >= countItem) {
        itemActive = 0;
        dotActive = 0;
    }
    showSlider();
    showDot();
}

//function prev button
prev.onclick = function() {
    itemActive = itemActive - 1;
    dotActive = dotActive - 1;
    if(itemActive < 0) {
        itemActive = countItem - 1;
        dotActive = countDots - 1;
    }
    showSlider();
    showDot();
}

function showSlider() {
    let itemActioveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActioveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active'); 

    //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

//dots animation


function showDot(){
    let dotActiveOld = document.querySelector('.dots .dot.active');
    dotActiveOld.classList.remove('active');
    dots[dotActive].classList.add('active');

    let itemActioveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActioveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active'); 

        //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        itemActive = index;
        dotActive = index;
        showDot();
    })
})