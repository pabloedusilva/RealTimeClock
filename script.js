// Função para criar o céu estrelado hiper-realista
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 800; // Mais estrelas para maior realismo

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Variação de tamanho e brilho
        const size = Math.random() * 2.5 + 0.5;
        const brightness = Math.random();

        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // Posição aleatória
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // Brilho inicial aleatório
        star.style.opacity = (Math.random() * 0.5) + 0.2;

        // Adiciona efeito de brilho às estrelas maiores
        if (size > 1.5) {
            star.classList.add('star-bright');
        }

        // Diferentes velocidades de piscar para maior realismo
        const animationClass = Math.random() < 0.33 ? 'twinkle-slow' :
            Math.random() < 0.66 ? 'twinkle-medium' : 'twinkle-fast';
        star.classList.add(animationClass);

        // Atraso na animação para evitar que todas pisquem juntas
        star.style.animationDelay = Math.random() * 5 + 's';

        starsContainer.appendChild(star);
    }
}

// Função para criar constelações
function createConstellations() {
    const constellationsContainer = document.getElementById('constellations');

    // Algumas constelações simples
    const constellations = [
        { name: 'Ursa Maior', stars: [[10, 10], [15, 15], [20, 20], [25, 15], [30, 20], [35, 25], [40, 30]] },
        { name: 'Orion', stars: [[60, 25], [65, 15], [70, 20], [65, 30], [60, 35], [70, 35], [75, 30]] },
        { name: 'Cassiopeia', stars: [[80, 10], [85, 15], [90, 10], [95, 15], [100, 10]] }
    ];

    constellations.forEach(constellation => {
        const container = document.createElement('div');
        container.className = 'constellation';
        container.id = constellation.name;

        // Adiciona linhas SVG para conectar as estrelas
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.position = "absolute";
        svg.style.top = "0";
        svg.style.left = "0";

        // Conecta as estrelas com linhas
        for (let i = 0; i < constellation.stars.length - 1; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", constellation.stars[i][0] + "%");
            line.setAttribute("y1", constellation.stars[i][1] + "%");
            line.setAttribute("x2", constellation.stars[i + 1][0] + "%");
            line.setAttribute("y2", constellation.stars[i + 1][1] + "%");
            line.classList.add("constellation-line");
            svg.appendChild(line);
        }

        container.appendChild(svg);

        // Adiciona estrelas brilhantes nos pontos da constelação
        constellation.stars.forEach(coord => {
            const star = document.createElement('div');
            star.className = 'star star-bright';
            star.style.width = '2px';
            star.style.height = '2px';
            star.style.left = coord[0] + '%';
            star.style.top = coord[1] + '%';
            container.appendChild(star);
        });

        constellationsContainer.appendChild(container);
    });
}

// Função para criar crateras na lua
function createMoonCraters() {
    const moonCraters = document.getElementById('moon-craters');
    const craterCount = 12;

    for (let i = 0; i < craterCount; i++) {
        const crater = document.createElement('div');
        crater.className = 'moon-crater';

        // Tamanho variável das crateras
        const size = Math.random() * 15 + 5;
        crater.style.width = size + 'px';
        crater.style.height = size + 'px';

        // Posição aleatória na lua
        crater.style.left = Math.random() * 70 + '%';
        crater.style.top = Math.random() * 70 + '%';

        moonCraters.appendChild(crater);
    }
}

// Função para criar nuvens
function createClouds() {
    const cloudsContainer = document.getElementById('clouds');
    const cloudCount = 20;

    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';

        // Tamanho variável das nuvens
        const width = Math.random() * 200 + 100;
        const height = Math.random() * 50 + 30;
        cloud.style.width = width + 'px';
        cloud.style.height = height + 'px';

        // Posição aleatória
        cloud.style.left = Math.random() * 100 + '%';
        cloud.style.top = Math.random() * 50 + '%';

        // Velocidade de movimento
        cloud.dataset.speed = Math.random() * 0.05 + 0.01;
        cloud.dataset.initialLeft = parseFloat(cloud.style.left);

        cloudsContainer.appendChild(cloud);
    }
}

// Função para criar estrelas cadentes
function createShootingStar() {
    const sky = document.querySelector('.sky');
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';

    // Posição inicial aleatória no céu
    const startX = Math.random() * 80 + 10;
    const startY = Math.random() * 40 + 5;
    shootingStar.style.left = startX + '%';
    shootingStar.style.top = startY + '%';

    // Adiciona cauda à estrela cadente
    const tail = document.createElement('div');
    tail.className = 'shooting-star-tail';
    shootingStar.appendChild(tail);

    // Duração aleatória da animação
    const duration = Math.random() * 2 + 1;
    shootingStar.style.animation = `shootingStar ${duration}s linear forwards`;

    sky.appendChild(shootingStar);

    // Remove a estrela cadente após a animação
    setTimeout(() => {
        sky.removeChild(shootingStar);
    }, duration * 1000);
}

// Função para criar estrelas cadentes aleatórias
function setupShootingStars() {
    setInterval(() => {
        // Só cria estrelas cadentes durante a noite
        const hour = new Date().getHours();
        if (hour >= 19 || hour < 6) {
            // Maior probabilidade de não criar estrela cadente
            if (Math.random() < 0.1) {
                createShootingStar();
            }
        }
    }, 3000);
}

// Função para criar montanhas
function createMountains() {
    const mountains = document.getElementById('mountains');

    // Cria SVG para as montanhas
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = "absolute";

    // Camada de montanhas de fundo
    const bgMountains = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let bgPath = "M0,100 ";
    for (let i = 0; i < 10; i++) {
        const x = i * 10 + Math.random() * 5;
        const y = 70 - Math.random() * 30;
        bgPath += `L${x},${y} `;
    }
    bgPath += "L100,70 L100,100 Z";
    bgMountains.setAttribute("d", bgPath);
    bgMountains.setAttribute("fill", "#2a3b4c");

    // Camada de montanhas da frente
    const fgMountains = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let fgPath = "M0,100 ";
    for (let i = 0; i < 15; i++) {
        const x = i * 7 + Math.random() * 3;
        const y = 80 - Math.random() * 40;
        fgPath += `L${x},${y} `;
    }
    fgPath += "L100,80 L100,100 Z";
    fgMountains.setAttribute("d", fgPath);
    fgMountains.setAttribute("fill", "#1a2634");

    svg.appendChild(bgMountains);
    svg.appendChild(fgMountains);
    mountains.appendChild(svg);
}

// Calcula a posição do sol/lua com base na hora atual
function calculatePosition(hour, minute, second) {
    // Adiciona os segundos para movimento mais suave
    const dayProgress = (hour + minute / 60 + second / 3600) / 24;

    // Calcula o ângulo para uma trajetória elíptica mais realista
    const angle = (dayProgress * 2 * Math.PI) - (Math.PI / 2);

    // Raio do arco ajustado para ser mais elíptico
    const horizontalRadius = Math.min(window.innerWidth, window.innerHeight) * 0.45;
    const verticalRadius = Math.min(window.innerWidth, window.innerHeight) * 0.3;

    // Calcula as coordenadas X e Y
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight + 100;

    const x = centerX + horizontalRadius * Math.cos(angle);
    const y = centerY + verticalRadius * Math.sin(angle) * -1;

    return { x, y };
}

// Calcula a cor do céu com gradientes hiper-realistas
function calculateSkyColor(hour, minute, second) {
    const dayProgress = (hour + minute / 60 + second / 3600) / 24;

    // Cores para diferentes períodos do dia com muitas gradações
    const times = [
        { time: 0.0, color: "rgb(5, 5, 20)" },       // Meio da noite (0h)
        { time: 0.15, color: "rgb(10, 10, 30)" },    // Madrugada (3h36)
        { time: 0.20, color: "rgb(25, 25, 50)" },    // Antes do amanhecer (4h48)
        { time: 0.22, color: "rgb(40, 40, 80)" },    // Início do amanhecer (5h17)
        { time: 0.23, color: "rgb(70, 60, 120)" },   // Amanhecer (5h31)
        { time: 0.24, color: "rgb(120, 80, 150)" },  // Início do nascer do sol (5h46)
        { time: 0.25, color: "rgb(200, 120, 80)" },  // Nascer do sol (6h)
        { time: 0.26, color: "rgb(250, 160, 90)" },  // Durante o nascer do sol (6h14)
        { time: 0.27, color: "rgb(255, 190, 125)" }, // Final do nascer do sol (6h29)
        { time: 0.28, color: "rgb(200, 180, 170)" }, // Após o nascer do sol (6h43)
        { time: 0.30, color: "rgb(135, 206, 235)" }, // Manhã cedo (7h12)
        { time: 0.35, color: "rgb(100, 180, 255)" }, // Manhã (8h24)
        { time: 0.45, color: "rgb(70, 150, 245)" },  // Final da manhã (10h48)
        { time: 0.50, color: "rgb(50, 130, 230)" },  // Meio-dia (12h)
        { time: 0.55, color: "rgb(70, 150, 245)" },  // Início da tarde (13h12)
        { time: 0.65, color: "rgb(100, 180, 255)" }, // Tarde (15h36)
        { time: 0.70, color: "rgb(135, 206, 235)" }, // Final da tarde (16h48)
        { time: 0.72, color: "rgb(200, 180, 170)" }, // Início do pôr do sol (17h17)
        { time: 0.73, color: "rgb(255, 190, 125)" }, // Durante o pôr do sol (17h31)
        { time: 0.74, color: "rgb(250, 160, 90)" },  // Pôr do sol (17h46)
        { time: 0.75, color: "rgb(200, 120, 80)" },  // Final do pôr do sol (18h)
        { time: 0.76, color: "rgb(120, 80, 150)" },  // Após o pôr do sol (18h14)
        { time: 0.77, color: "rgb(70, 60, 120)" },   // Crepúsculo (18h29)
        { time: 0.78, color: "rgb(40, 40, 80)" },    // Final do crepúsculo (18h43)
        { time: 0.80, color: "rgb(25, 25, 50)" },    // Início da noite (19h12)
        { time: 0.85, color: "rgb(10, 10, 30)" },    // Noite (20h24)
        { time: 1.0, color: "rgb(5, 5, 20)" }        // Meio da noite (0h)
    ];

    // Encontra os dois pontos de tempo mais próximos
    let startIndex = 0;
    for (let i = 0; i < times.length; i++) {
        if (times[i].time <= dayProgress) {
            startIndex = i;
        } else {
            break;
        }
    }

    let endIndex = (startIndex + 1) % times.length;

    // Calcula a interpolação entre os dois pontos
    let startTime = times[startIndex].time;
    let endTime = times[endIndex].time;

    // Ajuste para o ciclo de 24 horas
    if (endTime < startTime) endTime += 1.0;

    const progress = (dayProgress - startTime) / (endTime - startTime);

    // Retorna o gradiente para um céu mais realista
    return `linear-gradient(to bottom, ${times[startIndex].color}, ${times[endIndex].color})`;
}

// Calcula o gradiente de sobreposição para efeitos especiais
function calculateOverlayGradient(hour, minute, second) {
    const dayProgress = (hour + minute / 60 + second / 3600) / 24;

    // Nascer do sol
    if (dayProgress >= 0.24 && dayProgress <= 0.27) {
        const progress = (dayProgress - 0.24) / 0.03;
        const intensity = Math.sin(progress * Math.PI) * 0.7;
        return {
            gradient: `radial-gradient(circle at 50% 100%, rgba(255,170,0,${intensity}), transparent 70%)`,
            opacity: 1
        };
    }

    // Pôr do sol
    if (dayProgress >= 0.73 && dayProgress <= 0.76) {
        const progress = (dayProgress - 0.73) / 0.03;
        const intensity = Math.sin(progress * Math.PI) * 0.7;
        return {
            gradient: `radial-gradient(circle at 50% 100%, rgba(255,100,0,${intensity}), transparent 70%)`,
            opacity: 1
        };
    }

    return {
        gradient: '',
        opacity: 0
    };
}

// Calcula o efeito de raios de sol
function calculateSunRays(hour, minute, second, sunPosition) {
    const dayProgress = (hour + minute / 60 + second / 3600) / 24;

    // Raios de sol durante o nascer do sol e pôr do sol
    if ((dayProgress >= 0.24 && dayProgress <= 0.28) || (dayProgress >= 0.72 && dayProgress <= 0.76)) {
        // Determina a intensidade com base na proximidade ao nascer/pôr do sol
        let intensity = 0;

        if (dayProgress >= 0.24 && dayProgress <= 0.28) {
            intensity = 1 - Math.abs((dayProgress - 0.26) / 0.02);
        } else {
            intensity = 1 - Math.abs((dayProgress - 0.74) / 0.02);
        }

        // Calcula o ângulo dos raios
        const angle = (dayProgress > 0.5 ? 70 : 110);

        // Cria o elemento de raios de sol
        const sunRaysElement = document.getElementById('sun-rays');
        sunRaysElement.style.background = `radial-gradient(circle at ${sunPosition.x}px ${sunPosition.y}px, rgba(255,255,255,0.1), transparent 70%)`;
        sunRaysElement.style.width = '100%';
        sunRaysElement.style.height = '100%';
        sunRaysElement.style.opacity = intensity * 0.8;
        sunRaysElement.style.filter = `brightness(1.5) contrast(1.2)`;

        return true;
    }

    return false;
}

// Atualiza a posição e aparência das nuvens
function updateClouds(hour, minute) {
    const clouds = document.querySelectorAll('.cloud');
    const isDayTime = hour >= 6 && hour < 18;

    clouds.forEach(cloud => {
        // Move as nuvens de acordo com a velocidade
        const speed = parseFloat(cloud.dataset.speed);
        const initialLeft = parseFloat(cloud.dataset.initialLeft);
        const currentLeft = (parseFloat(cloud.style.left) + speed) % 120;
        cloud.style.left = currentLeft + '%';

        // Ajusta a cor das nuvens de acordo com a hora do dia
        if (isDayTime) {
            // Nuvens brancas durante o dia
            cloud.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            cloud.style.opacity = '0.8';
        } else {
            // Nuvens mais escuras durante a noite
            const nightTime = hour >= 19 || hour < 5;
            if (nightTime) {
                cloud.style.backgroundColor = 'rgba(40, 40, 60, 0.5)';
                cloud.style.opacity = '0.6';
            } else {
                // Transição ao amanhecer/anoitecer
                const transition = hour >= 5 && hour < 6 ? (hour - 5 + minute / 60) : (19 - hour - minute / 60);
                const brightnessFactor = transition;

                const r = Math.floor(40 + brightnessFactor * 215);
                const g = Math.floor(40 + brightnessFactor * 215);
                const b = Math.floor(60 + brightnessFactor * 195);

                cloud.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.7)`;
                cloud.style.opacity = '0.7';
            }
        }
    });
}

function updateClock() {
    const now = new Date();

    // Atualiza o tempo
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

    // Atualiza a data
    const day = now.getDate().toString().padStart(2, '0');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    document.getElementById('date').textContent = `${day} ${month} ${year}`;

    // Atualiza o indicador de período
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Determina se é dia ou noite
    let period = '';
    if (hour >= 5 && hour < 12) {
        period = 'Manhã';
    } else if (hour >= 12 && hour < 18) {
        period = 'Tarde';
    } else if (hour >= 18 && hour < 22) {
        period = 'Noite';
    } else {
        period = 'Madrugada';
    }
    document.getElementById('period').textContent = period;

    // Atualiza o estilo do relógio com base na hora do dia
    const clockContainer = document.getElementById('clock-container');
    if (hour >= 6 && hour < 18) {
        // Dia
        clockContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        clockContainer.style.color = 'rgba(0, 0, 0, 0.8)';
        document.getElementById('time').style.color = 'rgba(0, 0, 0, 0.9)';
        document.getElementById('date').style.color = 'rgba(0, 0, 0, 0.7)';
        document.getElementById('period').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        document.getElementById('period').style.color = 'rgba(0, 0, 0, 0.8)';
    } else {
        // Noite
        clockContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        clockContainer.style.color = 'rgba(255, 255, 255, 0.8)';
        document.getElementById('time').style.color = 'rgba(255, 255, 255, 0.9)';
        document.getElementById('date').style.color = 'rgba(255, 255, 255, 0.7)';
        document.getElementById('period').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('period').style.color = 'rgba(255, 255, 255, 0.8)';
    }

    // Atualiza a posição dos corpos celestes
    const sunPosition = calculatePosition(hour, minute, second);
    const moonPosition = calculatePosition((hour + 12) % 24, minute, second);

    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    sun.style.left = sunPosition.x + 'px';
    sun.style.top = sunPosition.y + 'px';

    moon.style.left = moonPosition.x + 'px';
    moon.style.top = moonPosition.y + 'px';

    // Define a visibilidade do sol e da lua com base na hora do dia
    if (hour >= 6 && hour < 18) {
        sun.style.opacity = '1';
        moon.style.opacity = '0';
    } else {
        sun.style.opacity = '0';
        moon.style.opacity = '1';
    }

    // Atualiza as cores do céu
    document.getElementById('sky').style.background = calculateSkyColor(hour, minute, second);

    // Atualiza o gradiente de sobreposição
    const overlay = calculateOverlayGradient(hour, minute, second);
    const overlayElement = document.getElementById('gradient-overlay');
    overlayElement.style.background = overlay.gradient;
    overlayElement.style.opacity = overlay.opacity;

    // Atualiza os raios de sol
    const sunRaysVisible = calculateSunRays(hour, minute, second, sunPosition);

    // Atualiza a visibilidade das estrelas
    const starsContainer = document.getElementById('stars-container');
    const constellations = document.querySelectorAll('.constellation');

    if (hour >= 19 || hour < 5) {
        // Noite escura
        starsContainer.style.opacity = '1';
        constellations.forEach(constellation => {
            constellation.style.opacity = '1';
        });
    } else if ((hour >= 5 && hour < 6) || (hour >= 18 && hour < 19)) {
        // Amanhecer/Anoitecer
        const transitionProgress = (hour >= 5 && hour < 6) ?
            1 - (hour - 5 + minute / 60) :
            (hour - 18 + minute / 60);

        starsContainer.style.opacity = transitionProgress.toString();
        constellations.forEach(constellation => {
            constellation.style.opacity = transitionProgress.toString();
        });
    } else {
        // Dia
        starsContainer.style.opacity = '0';
        constellations.forEach(constellation => {
            constellation.style.opacity = '0';
        });
    }

    // Atualiza as nuvens
    updateClouds(hour, minute);
}

// Inicializa todos os elementos do céu
function initializeSky() {
    createStars();
    createConstellations();
    createMoonCraters();
    createClouds();
    createMountains();
    setupShootingStars();

    // Inicia o relógio
    updateClock();
    setInterval(updateClock, 1000);
}

// Inicia o aplicativo quando a página for carregada
window.addEventListener('load', initializeSky);

// Atualiza os elementos ao redimensionar a janela
window.addEventListener('resize', () => {
    // Atualiza a posição dos corpos celestes
    updateClock();
});

// Responsividade
window.addEventListener('resize', () => {
    // Atualiza a posição dos corpos celestes
    updateClock();
});
