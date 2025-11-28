<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Máfia da Graxa - Oficial</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
<!-- NAVBAR -->
<nav class="navbar">
  <div class="logo">Máfia da Graxa</div>
  <div class="links">
    <a href="#inicio">Início</a>
    <a href="#produtos">Produtos</a>
    <a href="#contato">Contato</a>
  </div>
</nav>

<!-- HERO AO ESTILO LUMI.ING -->
<header class="hero" id="inicio">
  <h1 class="title">A Revolução da Lubrificação</h1>
  <p class="subtitle">Produtos de alta performance para quem exige o máximo.</p>
  <a class="btn" href="#produtos">Explorar Produtos</a>
</header>

<!-- SEÇÃO DE PRODUTOS ESTILO LUMI -->
<section class="produtos" id="produtos">
  <h2 class="section-title">Produtos em Destaque</h2>

  <div class="product-grid">
    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Produto" />
      <h3>Graxa Laranja Pro</h3>
      <p>Máxima resistência e durabilidade.</p>
      <button class="card-btn">Comprar</button>
    </div>

    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Produto" />
      <h3>Graxa Ultra</h3>
      <p>Lubrificação incomparável.</p>
      <button class="card-btn">Comprar</button>
    </div>

    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="Produto" />
      <h3>Óleo Industrial Premium</h3>
      <p>Proteção extrema.</p>
      <button class="card-btn">Comprar</button>
    </div>
  </div>
</section>

<!-- SEÇÃO ANIMADA COMO NO LUMI.ING -->
<section class="info-section">
  <div class="info-box">
    <h2>Performance Máxima</h2>
    <p>Nossos produtos são desenvolvidos para suportar as condições mais extremas.</p>
  </div>

  <div class="info-box">
    <h2>Qualidade Garantida</h2>
    <p>Testes rigorosos e tecnologia de ponta para entregar o melhor.</p>
  </div>
</section>

<!-- FOOTER -->
<footer id="contato">
  <p>Máfia da Graxa © 2025 — Todos os direitos reservados.</p>
</footer>

<script src="script.js"></script>
</body>
</html>

<script>
// ===== Scroll Suave =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Animação ao aparecer na tela =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.product-card, .info-box').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
</script>

<style>
/* ===== RESET ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background: #0f0f0f;
  color: #fff;
  overflow-x: hidden;
}

/* ===== NAVBAR ===== */
.navbar {
  width: 100%;
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(15,15,15,0.8);
  backdrop-filter: blur(10px);
  z-index: 999;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.navbar .logo {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ff6a00;
}

.navbar .links a {
  margin-left: 25px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: 0.3s;
}

.navbar .links a:hover {
  color: #ff6a00;
}

/* ===== HERO ===== */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background: linear-gradient(160deg, #ff6a00, #ff4600);
  color: #fff;
  margin-top: 60px;
}

.hero .title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.hero .subtitle {
  font-size: 1.3rem;
  margin-bottom: 25px;
  opacity: 0.9;
}

.btn {
  background: #fff;
  color: #ff4600;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(1.05);
  background: #ffe3d1;
}

/* ===== PRODUTOS ===== */
.produtos {
  padding: 100px 40px;
  max-width: 1200px;
  margin: auto;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: #ff6a00;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.product-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: 0.3s;
  border: 1px solid rgba(255,255,255,0.06);
}

.product-card img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 15px;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 20px rgba(255, 106, 0, 0.3);
}

.card-btn {
  margin-top: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #ff6a00;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.card-btn:hover {
  background: #ff4600;
  transform: scale(1.05);
}

/* ===== INFO BOXES ===== */
.info-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 100px 40px;
  background: #141414;
}

.info-box {
  padding: 40px;
  border-radius: 15px;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.06);
  transition: 0.3s;
}

.info-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 15px rgba(255,106,0,0.25);
}

/* ===== FOOTER ===== */
footer {
  background: #000;
  padding: 30px;
  text-align: center;
  opacity: 0.7;
}
</style>
