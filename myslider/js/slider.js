const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

const sideBar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');

const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('.slide').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount -1) * 100}vh`;

upBtn.addEventListener('click',(event) => {
	changeSlide('up');
});

downBtn.addEventListener('click',(event) => {
	changeSlide('down');
});

document.addEventListener('keyup',(event) => {
	if(event.keyCode === 38)
	{
		changeSlide('up');
	}else if(event.keyCode === 	40)
	{
		changeSlide('down');
	}
});

document.addEventListener('wheel',(event) => {
	if (event.wheelDelta >= 0) {
		changeSlide('up');
    }
    else {
    	changeSlide('down');
    }
});

function changeSlide(direction){
	if(direction === 'up')
	{
		activeSlideIndex++
		if(activeSlideIndex === slidesCount)
		{
			activeSlideIndex = 0;
		}
	}else if(direction === 'down')
	{
		activeSlideIndex--
		if(activeSlideIndex < 0){
			activeSlideIndex = slidesCount - 1;
		}
	}

	const height = container.clientHeight;

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

	sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}