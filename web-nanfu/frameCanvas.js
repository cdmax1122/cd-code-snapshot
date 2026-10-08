const frameCount = 120;
const imgPrefix = 'https://www.nanfu.global/templates/assets/home/bannerFm/';
const imgSuffix = '.jpg.webp?v=2';

function getFrameSrc(index) {
  const num = String(index).padStart(5, '0');
  return `${imgPrefix}${num}${imgSuffix}`;
}

const canvas = document.getElementById('frameCanvas');
const ctx = canvas.getContext('2d');
let images = [];
let loaded = 0;

// 设置canvas尺寸为父容器尺寸
function resizeCanvas() {
  const { width, height } = canvas.parentElement.getBoundingClientRect();
  canvas.width = width
  canvas.height = height
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 预加载所有图片
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = getFrameSrc(i);
  img.onload = () => {
    loaded++;
  };
  images.push(img);
}

// 绘制带圆角clip的帧
function drawFrame(index, percent = 0) {
  const img = images[index];
  if (img && img.complete) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const clipWidth = canvas.width * (1 - 0.6 * percent);
    const clipHeight = canvas.height * (1 - 0.2 * percent);
    const clipX = percent * 100;
    const clipY = (canvas.height - clipHeight) / 2;

    // 先填充白色背景
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    // 设置clip区域
    ctx.save();
    ctx.beginPath();
    ctx.rect(clipX, clipY, clipWidth, clipHeight);
    ctx.clip();

    // 绘制图片
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.restore();
  }
}

// 监听滚动
window.addEventListener('scroll', () => {
  // 计算滚动百分比
  // 根据part1高度设置滚动百分比
  const part1 = document.querySelector('.part1');
  let percent = 0;
  if (part1) {
    const part1Top = part1.offsetTop;
    const part1Height = part1.offsetHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    percent = (scrollTop - part1Top) / part1Height;
  }
  // 计算当前帧
  const frameIndex = Math.floor(percent * (frameCount - 1));
  // percent用于clip动画
  drawFrame(frameIndex, percent);
});