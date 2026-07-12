/* Aphex Lab — comportamento compartilhado (header, carrinho, cards) */

const ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r=".5" fill="currentColor"/></svg>`,
  chip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>`,
  flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6M10 3v6l-5.5 9.5A1.6 1.6 0 0 0 6 21h12a1.6 1.6 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="6" width="14" height="11"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="2" y="13" width="5" height="7" rx="1.5"/><rect x="17" y="13" width="5" height="7" rx="1.5"/></svg>`,
  percent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 5 5 19"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>`,
  wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 8.5a17 17 0 0 1 20 0"/><path d="M5.5 12.5a12 12 0 0 1 13 0"/><path d="M9 16.5a7 7 0 0 1 6 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>`
};

const CART_KEY = "aphexlab_cart";

function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function addToCart(product, qty){
  const cart = getCart();
  const existing = cart.find(i => i.slug === product.slug);
  if (existing){ existing.qty += qty; }
  else { cart.push({ slug: product.slug, name: product.name, price: product.price, image: imgPath(product, product.images[0]), qty }); }
  saveCart(cart);
  showToast(`${product.name} adicionado ao carrinho`);
  renderCartDrawer();
  openCart();
}
function removeFromCart(slug){
  saveCart(getCart().filter(i => i.slug !== slug));
  renderCartDrawer();
}
function cartTotal(){
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}
function updateCartCount(){
  const count = getCart().reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function showToast(message){
  let toast = document.querySelector(".toast");
  if (!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${ICONS.check}<span>${message}</span>`;
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openCart(){
  document.querySelector(".cart-overlay")?.classList.add("open");
  document.querySelector(".cart-drawer")?.classList.add("open");
}
function closeCart(){
  document.querySelector(".cart-overlay")?.classList.remove("open");
  document.querySelector(".cart-drawer")?.classList.remove("open");
}

function renderCartDrawer(){
  const itemsEl = document.querySelector(".cart-items");
  const footEl = document.querySelector(".cart-foot");
  if (!itemsEl) return;
  const cart = getCart();
  if (cart.length === 0){
    itemsEl.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.</div>`;
    footEl.style.display = "none";
    return;
  }
  footEl.style.display = "block";
  itemsEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.image}" alt="${i.name}">
      <div>
        <div class="name">${i.name}</div>
        <div class="price">${i.qty}x ${formatBRL(i.price)}</div>
        <button class="remove" data-remove="${i.slug}">Remover</button>
      </div>
    </div>
  `).join("");
  footEl.innerHTML = `
    <div class="cart-total"><span>Total</span><span>${formatBRL(cartTotal())}</span></div>
    <div class="cart-pix-note">ou ${formatBRL(pixPrice(cartTotal()))} pagando no Pix (10% OFF)</div>
    <button class="btn btn-primary btn-block">Finalizar Compra</button>
  `;
  itemsEl.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(btn.dataset.remove));
  });
}

function siteHeader(active){
  const link = (href, label) => `<a href="${href}" class="${active===href?'active':''}">${label}</a>`;
  return `
  <div class="topbar">
    <div class="container">
      <span>Frete grátis para todo o Brasil em compras acima de R$1.500,00</span>
      <span>Laboratório de Hardware · Captura de Movimento</span>
    </div>
  </div>
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="assets/img/brand/logo-dark-bg.png" alt="Aphex Lab">
      </a>
      <nav class="main-nav">
        <ul>
          <li>${link("index.html","Início")}</li>
          <li>${link("produtos.html","Produtos")}</li>
          <li>${link("faq.html","FAQ")}</li>
          <li>${link("contato.html","Contato")}</li>
        </ul>
      </nav>
      <div class="search-box">
        ${ICONS.search}
        <input type="text" placeholder="Buscar produtos...">
      </div>
      <div class="header-actions">
        <button aria-label="Carrinho" id="cart-toggle">${ICONS.cart}<span class="cart-count">0</span></button>
        <button aria-label="Menu" class="nav-toggle" id="nav-toggle">${ICONS.menu}</button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav">
      <ul>
        <li>${link("index.html","Início")}</li>
        <li>${link("produtos.html","Produtos")}</li>
        <li>${link("faq.html","FAQ")}</li>
        <li>${link("contato.html","Contato")}</li>
      </ul>
    </nav>
  </header>
  <div class="cart-overlay"></div>
  <aside class="cart-drawer">
    <div class="cart-head">
      <h3>Seu Carrinho</h3>
      <button id="cart-close">${ICONS.close}</button>
    </div>
    <div class="cart-items"></div>
    <div class="cart-foot"></div>
  </aside>
  `;
}

function siteFooter(){
  return `
  <div class="newsletter">
    <div class="container">
      <h3>Assine nossa newsletter</h3>
      <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Inscrição confirmada!');">
        <input type="email" placeholder="Seu melhor e-mail" required>
        <button type="submit">Assinar</button>
      </form>
    </div>
  </div>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <img src="assets/img/brand/logo-dark-bg.png" alt="Aphex Lab" class="footer-logo">
          <p>Laboratório de hardware especializado em tecnologia de captura de movimento (mocap) e dispositivos inovadores para criadores, desenvolvedores e entusiastas de realidade virtual.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="produtos.html">Produtos</a></li>
            <li><a href="contato.html">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4>Categorias</h4>
          <ul>
            <li><a href="produtos.html?cat=Full+Body+Trackers">Full Body Trackers</a></li>
            <li><a href="produtos.html?cat=Acess%C3%B3rios">Acessórios</a></li>
            <li><a href="produtos.html?linha=Full+Body+Y">Linha Y — LSM6DSR</a></li>
            <li><a href="produtos.html?linha=Full+Body+X">Linha X — ICM45686</a></li>
          </ul>
        </div>
        <div>
          <h4>Suporte</h4>
          <ul>
            <li><a href="faq.html">Perguntas Frequentes</a></li>
            <li><a href="contato.html">Fale conosco</a></li>
            <li><a href="contato.html">Configuração e Setup</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Copyright Aphex Lab - 2026. Todos os direitos reservados.</span>
        <span>Precisão · Tecnologia · Inovação · Experimentação</span>
      </div>
    </div>
  </footer>
  `;
}

function mountLayout(active){
  document.getElementById("site-header").innerHTML = siteHeader(active);
  document.getElementById("site-footer").innerHTML = siteFooter();
  updateCartCount();
  renderCartDrawer();
  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.querySelector(".cart-overlay").addEventListener("click", closeCart);
  document.getElementById("nav-toggle").addEventListener("click", () => {
    document.getElementById("mobile-nav").classList.toggle("open");
  });

  mountBackToTop();
  initHeaderScrollState();
  refreshReveal();
}

/* ---------------------------- Header scroll state ---------------------------- */
function initHeaderScrollState(){
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* -------------------------------- Back to top --------------------------------- */
function mountBackToTop(){
  let btn = document.querySelector(".back-to-top");
  if (!btn){
    btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Voltar ao topo");
    btn.innerHTML = ICONS.arrowUp;
    document.body.appendChild(btn);
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
}

/* -------------------------------- Scroll reveal -------------------------------- */
let _revealObserver;
function refreshReveal(){
  if (!("IntersectionObserver" in window)){
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }
  if (!_revealObserver){
    _revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          _revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => _revealObserver.observe(el));
}

/* -------------------------------- Product cards -------------------------------- */
function productCard(p){
  const cover = imgPath(p, p.images[0]);
  const hover = p.images[1] ? imgPath(p, p.images[1]) : cover;
  return `
  <a class="product-card reveal" href="produto.html?slug=${p.slug}">
    <div class="thumb">
      ${p.oldPrice ? `<span class="badge">${Math.round((1 - p.price/p.oldPrice)*100)}% OFF</span>` : ""}
      <span class="badge-outline">${p.trackers > 1 ? p.trackers + " un." : "Acessório"}</span>
      <img src="${cover}" data-default="${cover}" data-hover="${hover}" alt="${p.name}" loading="lazy">
    </div>
    <div class="info">
      <span class="cat">${p.category}</span>
      <span class="name">${p.name}</span>
      <div class="price-row">
        ${p.oldPrice ? `<span class="price-old">${formatBRL(p.oldPrice)}</span>` : ""}
        <span class="price">${formatBRL(pixPrice(p.price))}</span>
      </div>
      <div class="price-note">no Pix · ou ${formatBRL(p.price)} em até 10x</div>
    </div>
  </a>`;
}

function renderProductGrid(container, products){
  if (!container) return;
  container.innerHTML = products.map(productCard).join("");
  container.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.setProperty("--d", i % 4);
    const img = card.querySelector(".thumb img");
    if (img.dataset.hover && img.dataset.hover !== img.dataset.default){
      card.addEventListener("mouseenter", () => { img.src = img.dataset.hover; });
      card.addEventListener("mouseleave", () => { img.src = img.dataset.default; });
    }
  });
  refreshReveal();
}
