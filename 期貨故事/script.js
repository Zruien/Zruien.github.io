// 下頁
function nextPage(nextPageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    const nextPageElement = document.getElementById(nextPageId);
    nextPageElement.style.display = 'flex';
    // 打雷動畫
    if (nextPageId == 'page3') {
        startLightning(); 
    } else {
        stopLightning(); 
    }
    // 雨天動畫
    if (nextPageElement.querySelector('#rainBox')) {
        boxHeight = nextPageElement.querySelector('#rainBox').clientHeight;
        boxWidth = nextPageElement.querySelector('#rainBox').clientWidth;
    }
    // 樹葉動畫
    if (nextPageId == 'page5') {
        setInterval(createLeaf, 1200);
    }
}

// 上頁
function prePage(prevPageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    const prevPageElement = document.getElementById(prevPageId);
    prevPageElement.style.display = 'flex';
    // 打雷動畫
    if (prevPageId == 'page3') {
        startLightning(); 
    } else {
        stopLightning(); 
    }
    // 雨天動畫
    if (prevPageElement.querySelector('#rainBox')) {
        boxHeight = prevPageElement.querySelector('#rainBox').clientHeight;
        boxWidth = prevPageElement.querySelector('#rainBox').clientWidth;
    }
    if (prevPageId == 'page5') {
    setInterval(createLeaf, 1200);
    }
}

// 打雷動畫
let lightningInterval;

function triggerLightning() {
    const container = document.getElementById('page3');
    const containerRect = container.getBoundingClientRect(); // 獲取容器的大小和位置
    const lightningEffect = document.getElementById('lightningEffect');
    lightningEffect.style.opacity = 1;
    setTimeout(() => {
        lightningEffect.style.opacity = 0;
    }, 120); // 閃電的持續時間

    // 創建閃電效果
    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    const startX = Math.random() * window.innerWidth;
    const startY = 0;
    const endX = startX + (Math.random() * 200 - 100);
    const endY = window.innerHeight;

    const numberOfSegments = 10;
    const segmentHeight = endY / numberOfSegments;

    for (let i = 0; i < numberOfSegments; i++) {
        const segment = document.createElement('div');
        segment.className = 'lightning';
        segment.style.height = `${segmentHeight}px`;
        segment.style.left = `${startX + (Math.random() * 20 - 10)}px`;
        segment.style.top = `${startY + segmentHeight * i}px`;
        segment.style.position = 'absolute'; // 確保閃電在容器內部顯示
        document.body.appendChild(segment);

        setTimeout(() => {
            segment.remove();
        }, 1000); // 與動畫持續時間一致
    }
}

function startLightning() {
    triggerLightning();
    lightningInterval = setTimeout(startLightning, Math.random() * 2000 + 1000); // 下次閃電的隨機間隔 (1-3 秒)
}

function stopLightning() {
    clearTimeout(lightningInterval);
    const lightningElements = document.querySelectorAll('.lightning');
    lightningElements.forEach(element => element.remove());
}

// 樹葉動畫
function createLeaf() {
    const page5 = document.getElementById('page5');
    if (page5.style.display === 'flex') {
        const leaf = document.createElement('img');
        leaf.className = 'leaf';
        leaf.src = 'https://cdn3.iconfinder.com/data/icons/spring-23/32/leaf-spring-plant-ecology-green-512.png';
        page5.appendChild(leaf); // 修改為添加到 page5
        // 設置隨機位置和動畫
        leaf.style.top = `${Math.random() * -20}%`; // 確保樹葉從視窗上方飄落
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animation = `drift ${Math.random() * 10 + 10}s linear infinite`; // 增加動畫持續時間以放慢飄落速度
        leaf.style.setProperty('--x', Math.random() * 2 - 1); // 隨機水平移動範圍
        leaf.style.setProperty('--y', Math.random() * 2 + 1); // 隨機垂直移動範圍
        leaf.style.setProperty('--r', Math.random() * 2); // 隨機旋轉範圍
        // 讓樹葉飄動後自動移除
        setTimeout(() => page5.removeChild(leaf), 10000); // 根據需要調整
    }
}



