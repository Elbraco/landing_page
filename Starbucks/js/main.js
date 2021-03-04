function imgSlider(anything) {
    document.querySelector('.content__img').src = 'img/'+anything;

}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


const imgIcon = document.querySelectorAll('.content__img-icon')
console.log(imgIcon);

for(i = 0; i < imgIcon.length; i++) {
    console.log(imgIcon[i]);
}


