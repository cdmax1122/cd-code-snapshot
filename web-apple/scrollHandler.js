function part1() {
    const part1 = document.querySelector('.part1');
    const wrapper = document.querySelector('.part1-wrapper');
    const img = wrapper.querySelector('img');

    // 获取part1相对于视口的top
    const rect = part1.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // part1的滚动总高度
    const scrollRange = part1.offsetHeight - windowHeight;

    // 当前滚动距离（0 ~ scrollRange）
    let scrolled = Math.min(Math.max(-rect.top, 0), scrollRange);

    // 计算进度（0~1）
    let progress = scrolled / scrollRange;

    // 计算缩放比例（1~1.5）
    let scale = 1 + 0.5 * progress;

    // matrix(a, b, c, d, tx, ty) 其中 a=scaleX, d=scaleY
    img.style.transform = `matrix(${scale}, 0, 0, ${scale}, 0, 0)`;
}

function part2() {
    const part2 = document.querySelector('.part2');
    const video = part2.querySelector('video');
    const rect = part2.getBoundingClientRect();

    const enterPx = window.innerHeight - rect.bottom;

    if (enterPx < 0) {
        // 1. 底部未进入，完全展示
        video.style.clipPath = 'none';
    } else if (enterPx < 60) {
        // 2. 底部进入小于60px，clip-path动画
        // 进度 0~1
        let progress = enterPx / 60;
        let inset = (1 - progress) * 50; // 50%~0%
        let borderRadius = 20;
        video.style.clipPath = `inset(${inset}% round ${borderRadius}px)`;
    }
}
window.addEventListener('scroll', () => {
    part1();
    part2();
});
window.addEventListener('resize', () => {
    part2();
});