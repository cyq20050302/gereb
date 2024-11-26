
// 轮播图
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showImage(index) {
  const carousel = document.querySelector('.carousel-images');
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

// Optional: 自动切换图片
setInterval(() => {
  currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
}, 3000);  // 每3秒切换一次

