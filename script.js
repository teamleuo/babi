// Variáveis globais
let player;
let isMusicPlaying = false;

// Mensagens
const messages = [
  "Nosso 'quase algo' tem mais história que muitos amores por aí",
  "Já somos veteranos na arte de nos gostar sem pressa",
  "Você é meu porto seguro não-oficial (e talvez oficial em breve)",
  "Nossa sintonia é tão natural que nem precisa de manual",
  "Nosso estágio probatório já virou contrato vitalício",
  "Seu jeito de se encolher no abraço já tem lugar cativo na minha memória",
  "Entre idas e vindas, a gente foi ficando... e ficando bom demais",
  "Se isso é só 'ficar', tô começando a desconfiar que é meu lugar preferido",
  "Nosso contrato verbal de 'sem rótulos' já venceu faz tempo, só falta oficializar",
  "A química é tanta que se fosse fórmula, era patenteada",
  "Nem GPS explica como você virou meu destino favorito",
  "Se fosse pra definir, diria que somos um bug no sistema dos relacionamentos padrão",
  "Seu sorriso já tá no meu atalho de favoritos",
  "De 'só uma ficada' pra 'não te largo nem se travar tudo'",
  "Nosso rolê aleatório virou meu lugar de paz"
];

// Atualizar contador
function updateCounter() {
  // Verificar se é dia 16 (mesmo se já tiver verificado no load)
  const today = new Date();
  if (today.getDate() === 16) {
    const startDate = new Date('2025-03-16T19:00:00');
    const monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 + 
                      (today.getMonth() - startDate.getMonth());
    if (monthsDiff >= 1) {
      showBalloons(monthsDiff);
    }
  }

  const startDate = new Date('2025-03-16T19:00:00');
  
  if (today < startDate) {
    const diffTime = startDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('counter').textContent = `Faltam ${diffDays} dias para nosso primeiro encontro!`;
    return;
  }
  
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  
  let message = `${diffDays} Dias, ${diffHours} Horas, ${diffMinutes} Minutos, ${diffSeconds} Segundos`;
  
  if (diffDays < 30) {
    message += " - ainda é novidade!";
  } else if (diffDays < 90) {
    message += " - já pode ser considerado um estágio";
  } else if (diffDays < 102) {
    message += " - Se tivesse me dado uma chance em 2020, nós já tinhamos casado";
  } else if (diffDays < 110) {
    message += " - isso tá ficando sério!";
  } else if (diffDays < 120) {
    message += " - você desbloqueou o modo 'tô sentindo coisas'";
  } else if (diffDays < 130) {
    message += " - se fosse um filme, já tava na parte do 'eu te amo' meio sem querer";
  } else if (diffDays < 140) {
    message += " - 130 dias e ainda tô aqui, meio bobo, meio teu";
  } else if (diffDays < 150) {
    message += " - não sei se é destino ou teimosia, mas tamo firme";
  } else if (diffDays < 160) {
    message += " - ♥";
  } else if (diffDays < 170) {
    message += " - oficialmente mais constante que minha academia";
  } else if (diffDays < 180) {
    message += " - se fosse um curso, já era formação completa";
  } else if (diffDays < 190) {
    message += " - 180 dias de história e zero vontade de pular capítulos";
  } else if (diffDays < 200) {
    message += " - 190 dias tentando não me apegar… spoiler: falhei";
  } else if (diffDays < 220) {
    message += " - 200 DIAS! Tá virando pós-graduação emocional";
  } else if (diffDays < 240) {
    message += " - 220 dias e eu ainda travo quando cê sorri";
  } else if (diffDays < 260) {
    message += " - 240 dias! Já daria pra escrever um livro… fitness e de romance";
  } else if (diffDays < 280) {
    message += " - 260 dias e o coração ainda acelera do nada";
  } else if (diffDays < 300) {
    message += " - 280 dias sem saber onde isso vai dar, mas gostando do caminho";
  } else if (diffDays < 301) {
    message += " - 300 dias. Isso não é crush, é patrimônio afetivo já";
  } else if (diffDays < 366) {
    const diasFaltando = 365 - diffDays;
    if (diasFaltando === 0) {
      message += " - UM ANO! Já ta na hora de aceitar namorar comigo, não?";
    } else if (diasFaltando === 1) {
      message += " - só mais 1 dia pro marco épico!";
    } else if (diasFaltando === 2) {
      message += " - só mais 2 dias pra comemorar de verdade!";
    } else {
      message += ` - faltam ${diasFaltando} dias pro marco épico!`;
    }
  }
  
  document.getElementById('counter').textContent = message;
}

// Balões para celebrar meses completos
function checkMonthAnniversary() {
  const today = new Date();
  const startDate = new Date('2025-03-16T19:00:00');
  
  // Verificar se é dia 16
  if (today.getDate() === 16) {
    // Verificar se já passou pelo menos 1 mês
    const monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 + 
                      (today.getMonth() - startDate.getMonth());
    
    if (monthsDiff >= 1) {
      showBalloons(monthsDiff);
    }
  }
}

function showBalloons(months) {
  const container = document.getElementById('balloonsContainer');
  const balloonColors = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🎈', '🎉', '🎊'];
  const messages = [
    "Mais um mês de nós!",
    `${months} meses de felicidade!`,
    "Celebrando nosso amor!",
    "Mais um mês juntos!",
    "Nosso amor cresce a cada dia!",
    "Parabéns pra gente!",
    "Mais um capítulo da nossa história!"
  ];
  
  container.style.display = 'block';
  
  // Criar balões
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.innerHTML = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      
      // Posição aleatória
      balloon.style.left = `${Math.random() * 100}vw`;
      
      // Tamanho aleatório
      const size = Math.random() * 20 + 30;
      balloon.style.fontSize = `${size}px`;
      
      // Duração aleatória
      const duration = Math.random() * 10 + 10;
      balloon.style.animationDuration = `${duration}s`;
      
      container.appendChild(balloon);
      
      // Remover após animação
      setTimeout(() => {
        balloon.remove();
      }, duration * 1000);
    }, i * 300);
  }
  
  // Mostrar mensagem especial
  const message = document.createElement('div');
  message.className = 'balloon-message';
  message.textContent = messages[Math.floor(Math.random() * messages.length)];
  message.style.position = 'fixed';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  message.style.padding = '20px';
  message.style.borderRadius = '15px';
  message.style.fontSize = '1.5rem';
  message.style.color = 'var(--primary-color)';
  message.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  message.style.zIndex = '1001';
  message.style.textAlign = 'center';
  message.style.fontWeight = 'bold';
  
  container.appendChild(message);
  
  // Remover mensagem após alguns segundos
  setTimeout(() => {
    message.style.transition = 'opacity 1s';
    message.style.opacity = '0';
    setTimeout(() => {
      message.remove();
    }, 1000);
  }, 5000);
  
  // Esconder container após todos os balões desaparecerem
  setTimeout(() => {
    container.style.display = 'none';
  }, 35000);
}

// Mostrar resultado
function showResult(option) {
  const resultDiv = document.getElementById('result');
  let message = "";
  
  switch(option) {
    case 1:
      message = "Se eu fosse fazer um post sobre você, seria aquele que fica 24h no ar e depois vira print salvo na galeria.";
      break;
    case 2:
      message = "Vamos combinar: a gente curte o momento sem inventar muito nome pra isso, que tal?";
      break;
    case 3:
      message = "Daqui a 50 anos, vamos rir desse período em que a gente não sabia definir o que era.";
      break;
    case 4:
      message = "Quando a conexão é boa, nem precisa de manual de instruções - só vai fluindo naturalmente.";
      break;
  }
  
  resultDiv.innerHTML = `<p>${message}</p>`;
  resultDiv.style.display = 'block';
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Efeito de corações ao selecionar uma opção
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const x = resultDiv.getBoundingClientRect().left + Math.random() * resultDiv.offsetWidth;
      const y = resultDiv.getBoundingClientRect().top + Math.random() * resultDiv.offsetHeight;
      createBlueHearts(x, y);
    }, i * 150);
  }
}

// Mensagem aleatória
function randomMessage() {
  const resultDiv = document.getElementById('result');
  const randomIndex = Math.floor(Math.random() * messages.length);
  resultDiv.innerHTML = `<p>${messages[randomIndex]}</p>`;
  resultDiv.style.display = 'block';
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Efeito especial para mensagem aleatória
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const x = resultDiv.getBoundingClientRect().left + Math.random() * resultDiv.offsetWidth;
      const y = resultDiv.getBoundingClientRect().top + Math.random() * resultDiv.offsetHeight;
      createBlueHearts(x, y);
    }, i * 100);
  }
}

// Criar corações
function createBlueHearts(x, y) {
  const hearts = ["💙", "💠", "🔵", "🔷"];
  const heart = document.createElement('div');
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.className = 'blue-heart';
  
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  
  const size = Math.random() * 25 + 15;
  const duration = Math.random() * 3 + 2;
  const delay = Math.random() * 0.5;
  const rotation = Math.random() * 360;
  
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.transform = `rotate(${rotation}deg)`;
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Criar corações flutuantes de fundo
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  const hearts = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];
  
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      
      // Posição aleatória
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${100 + Math.random() * 20}vh`;
      
      // Configurações aleatórias
      const size = Math.random() * 20 + 10;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.4 + 0.3;
      
      heart.style.fontSize = `${size}px`;
      heart.style.animationDuration = `${duration}s`;
      heart.style.animationDelay = `${delay}s`;
      heart.style.opacity = opacity;
      
      container.appendChild(heart);
      
      // Remover após animação
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }, i * 1000);
  }
}

// Funções do YouTube Player
function playYouTubeMusic() {
  if (!player) {
    loadYouTubePlayer();
  } else {
    player.playVideo();
    isMusicPlaying = true;
    updateMusicButton();
    showMusicMessage();
  }
}

function stopYouTubeMusic() {
  if (player) {
    player.pauseVideo();
    isMusicPlaying = false;
    updateMusicButton();
  }
}

function updateMusicButton() {
  const toggleBtn = document.getElementById('musicToggle');
  if (isMusicPlaying) {
    toggleBtn.classList.add('playing');
  } else {
    toggleBtn.classList.remove('playing');
  }
}

function showMusicMessage() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<p>❤️🎵 Música especial tocando! 🎵❤️</p>';
  resultDiv.style.display = 'block';
  
  // Efeito especial para música
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createBlueHearts(x, y);
    }, i * 100);
  }
}

function loadYouTubePlayer() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    height: '0',
    width: '0',
    videoId: 'i0p1bmr0EmE', // ID para MÚSICA!
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'disablekb': 1,
      'fs': 0,
      'loop': 1,
      'modestbranding': 1,
      'playsinline': 1,
      'rel': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  console.log("Player pronto");
  
  player.seekTo(1);
  updateMusicButton();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isMusicPlaying = true;
    updateMusicButton();
  } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
    isMusicPlaying = false;
    updateMusicButton();
  }
}

// Inicialização do Carrossel
let currentSlide = 0;
let carouselInterval;

function initCarousel() {
  const carousel = document.getElementById('carousel');
  const nav = document.getElementById('carousel-nav');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');
  
  // Criar navegação
  nav.innerHTML = '';
  items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    nav.appendChild(dot);
  });
  
  // Event listeners para navegação
  prevBtn.addEventListener('click', () => moveCarousel(-1));
  nextBtn.addEventListener('click', () => moveCarousel(1));
  
  // Iniciar auto-avanço
  startCarouselInterval();
}

function startCarouselInterval() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);
}

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.carousel-dot');
  const totalItems = items.length;
  
  currentSlide = (currentSlide + direction + totalItems) % totalItems;
  updateCarouselPosition();
  
  // Atualizar navegação
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
  
  // Reiniciar intervalo
  startCarouselInterval();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarouselPosition();
  
  // Atualizar navegação
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
  
  // Reiniciar intervalo
  startCarouselInterval();
}

function updateCarouselPosition() {
  const carousel = document.getElementById('carousel');
  const itemWidth = carousel.offsetWidth;
  carousel.scrollTo({
    left: currentSlide * itemWidth,
    behavior: 'smooth'
  });
}

// Ativar Matrix Mode
function activateMatrixMode() {
  const matrixMode = document.getElementById('matrixMode');
  matrixMode.style.display = 'block';
  document.querySelector('.container').style.opacity = '0.8';
  
  if (window.matrixInterval) {
    clearInterval(window.matrixInterval);
  }
  
  window.matrixInterval = setInterval(() => {
    for (let i = 0; i < 15; i++) {
      setTimeout(() =>{
        const x = Math.random() * window.innerWidth;
        const y = -50;
        createMatrixHeart(x,y);
      }, i *100);
    }
  }, 200);
  
  setTimeout(() => {
    clearInterval(matrixInterval);
    matrixMode.style.display = 'none';
    document.querySelector('.container').style.opacity = '1';
  }, 15000);
}

// Função especial para criar corações do Matrix
function createMatrixHeart(x, y) {
  const heart = document.createElement('div');
  heart.innerHTML = "💙";
  heart.className = 'matrix-heart';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  
  // Configurações aleatórias para cada coração
  const size = Math.random() * 30 + 20;
  const duration = Math.random() * 3 + 5;
  const delay = Math.random() * 2;
  const rotation = Math.random() * 360;
  const opacity = Math.random() * 0.7 + 0.3;
  
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.opacity = opacity;
  heart.style.transform = `rotate(${rotation}deg)`;
  
  // Posição inicial aleatória
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  
  document.getElementById('matrixMode').appendChild(heart);
  
  // Remove o coração após a animação
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  updateCounter();
  initCarousel();
  setInterval(updateCounter, 1000);
  createFloatingHearts();
  setInterval(createFloatingHearts, 20000);
  checkMonthAnniversary(); // Verificar se é dia 16
  
  // Controle de música pelo botão no canto
  document.getElementById('musicToggle').addEventListener('click', function() {
    if (!isMusicPlaying) {
      playYouTubeMusic();
    } else {
      stopYouTubeMusic();
    }
  });

  // Coração principal
  document.querySelector('.heart').addEventListener('click', function(e) {
    this.style.transform = 'scale(1.5)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 300);

    // Efeito de corações
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const x = e.clientX + (Math.random() * 100 - 50);
        const y = e.clientY + (Math.random() * 100 - 50);
        createBlueHearts(x, y);
      }, i * 80);
    }
  });
  
  // Botão proibido
  document.getElementById('forbiddenButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.style.transform = 'scale(1.2) rotate(10deg)';
    this.style.background = 'linear-gradient(135deg, #cc0000, #990000)';
    this.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.9), 0 0 50px rgba(255, 255, 0, 0.8) inset';
    this.textContent = 'VOCÊ CLICOU!';
    
    setTimeout(() => {
      activateMatrixMode();
      
      setTimeout(() => {
        this.style.transform = '';
        this.style.background = 'linear-gradient(135deg, #ff0000, #cc0000)';
        this.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 255, 0, 0.4) inset';
        this.textContent = 'NÃO CLIQUE AQUI';
      }, 10000);
    }, 1000);
  });
});

// Otimização para iOS
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});

// Melhorar performance de toque
document.addEventListener('touchstart', function() {}, {passive: true});

function handleImageError(img) {
  img.style.display = 'none';
}




