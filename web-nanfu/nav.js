// 监听滚动
window.addEventListener('scroll', () => {
    // 计算滚动百分比
    // 根据part1高度设置滚动百分比
    const navPanel = document.querySelector('.nav-panel');
    if (window.scrollY > 10) {
        navPanel.style.width = '100%'
        navPanel.style.height = '40px'
        navPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        navPanel.style.borderRadius = '12px'
    } else {
        navPanel.style.width = '80%'
        navPanel.style.height = '60px'
        navPanel.style.backgroundColor = 'black'
    }
});