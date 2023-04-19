const imageBig = document.querySelector('.big__img');
const imageSmall = document.querySelectorAll('.small__img');

console.log('holaa')

imageSmall.forEach( small => {
    small.addEventListener('click', function(){
        const active = document.querySelector('.active');
        active.classList.remove('active');
        small.classList.add('active');
        imageBig.src = small.src;
    })
})

const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
let num = 0;

function next() {
    num++;
    if(num >= images.length){
    num = 0;
    imageBig.src = images[num];
    }else{
        imageBig.src = images[num];
    }
};

function back() {
    num--;
    if(num < 0){
        num = images.length -1;
        imageBig.src = images[num]
    }else{
        imageBig.src = images[num]
    }
}
