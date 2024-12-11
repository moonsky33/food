// 轮播图控制
let currentIndex = 0;
const images = document.getElementById('carousel-images');
const totalImages = images.children.length;

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 打开菜谱弹窗
function openModal(title, description) {
    document.getElementById('recipe-modal-title').textContent = title;
    document.getElementById('recipe-modal-description').textContent = description;
    document.getElementById('recipe-modal-overlay').style.display = 'flex';
}

// 关闭菜谱弹窗
function closeModal() {
    document.getElementById('recipe-modal-overlay').style.display = 'none';
}

// 打开排行榜弹窗
function openRankingModal() {
    document.getElementById('ranking-modal-overlay').style.display = 'flex';
}

// 关闭排行榜弹窗
function closeRankingModal() {
    document.getElementById('ranking-modal-overlay').style.display = 'none';
}

// 打开联系我们弹窗
function openContactModal() {
    document.getElementById('contact-modal-overlay').style.display = 'flex';
}

// 关闭联系我们弹窗
function closeContactModal() {
    document.getElementById('contact-modal-overlay').style.display = 'none';
}