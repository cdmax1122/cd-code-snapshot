// 监听滚动，动态设置clip-path，支持.part2内部的所有图片
function updateClipPath() {
    // 获取.part2区域
    const part2 = document.querySelector('.part2');
    if (!part2) return;

    // 获取所有.part2的子元素（包括所有图片容器）
    const children = Array.from(part2.querySelectorAll('.part2-bg-img'));
    if (children.length === 0) return;

    // 获取.part2的高度和顶部位置
    const part2Height = part2.offsetHeight - part2.offsetHeight / children.length;
    const part2Top = part2.offsetTop;
    const scrollTop = window.scrollY || window.pageYOffset;

    // 根据.part2的高度计算滚动百分比
    let percent = 0;
    if (scrollTop >= part2Top && scrollTop <= part2Top + part2Height) {
        percent = (scrollTop - part2Top) / part2Height;
        percent = Math.min(Math.max(percent, 0), 1);
    } else if (scrollTop > part2Top + part2Height) {
        percent = 1;
    } else {
        percent = 0;
    }

    // 第一张不设置clip-path，后面每一张设置clip-path
    children.forEach((img, idx) => {
        if (idx === 0) {
            // 设置img子元素.label的 classList
            const label = img.querySelector('.label');
            if (label) {
                label.style.cssText += 'opacity: 1;';
            }
        } else {
            // 计算每一张的本地百分比
            const total = children.length - 1;
            const seg = 1 / total;
            const segStart = (idx - 1) * seg;
            const segEnd = idx * seg;
            let localPercent = 0;

            if (percent >= segStart && percent <= segEnd) {
                localPercent = (percent - segStart) / seg;
                localPercent = Math.min(Math.max(localPercent, 0), 1);
            } else if (percent > segEnd) {
                localPercent = 1;
            } else {
                localPercent = 0;
            }
            // 右侧收缩
            const rightInset = (1 - localPercent) * 100;
            img.setAttribute('data-x', rightInset);
            img.style.clipPath = `inset(0% ${rightInset}% 0% 0%)`;
        }
    });
}

window.addEventListener('scroll', updateClipPath);
window.addEventListener('resize', updateClipPath);
window.addEventListener('DOMContentLoaded', updateClipPath);