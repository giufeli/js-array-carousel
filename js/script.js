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

	eleBtnUp.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleBtnDown.classList.add('hidden');
	}
});

eleBtnUp.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

	activeIndex--;

	listEleImg[activeIndex].classList.add('active');

	eleBtnDown.classList.remove('hidden');
	if (activeIndex === 0) {
		eleBtnUp.classList.add('hidden');
	}
});