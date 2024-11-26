// 动态添加留言
document.querySelector('.message-form button').addEventListener('click', function () {
  const message = document.querySelector('.message-form textarea').value;
  if (message) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>新用户：</strong>${message}`;
    document.querySelector('.message-list ul').appendChild(li);
    document.querySelector('.message-form textarea').value = '';  // 清空输入框
  }
});
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
}, 3000);  // 每53秒切换一次

