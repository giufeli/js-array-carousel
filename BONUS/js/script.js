const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);
}


const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;


eleBtnDown.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');

	activeIndex++;

	listEleImg[activeIndex].classList.add('active');

	
	if (activeIndex === listEleImg.length - 1) {
		listEleImg[activeIndex].classList.remove('active')

		activeIndex = 0;

		listEleImg[activeIndex].classList.add('active');
	}
});

eleBtnUp.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

	activeIndex--;

	listEleImg[activeIndex].classList.add('active');

	if (activeIndex === 0) {
		listEleImg[activeIndex].classList.remove('active')

		activeIndex=4

		listEleImg[activeIndex].classList.add('active');
	}
	
});
