// Dinamic viewport unit per mobile
function setVH() {
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}
setVH();
window.addEventListener('resize', setVH);

// Ora corrente
function updateTime() {
  const el = document.getElementById('current-time');
  if (!el) return;
  const now = new Date();
  el.textContent = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
}
updateTime();
setInterval(updateTime, 60000);

// Aperti/chiusi (24/7 per ora, hook per festività)
function isOpenNow() {
  // Hook futuri: chiusure straordinarie, etc.
  return true;
}
function updateOpenBadge() {
  const badge = document.getElementById('open-badge');
  if (!badge) return;
  const always = document.querySelectorAll('.sempre-aperti, .sempre-aperti-hero');
  const open = isOpenNow();
  if (open) {
    badge.textContent = '● SEMPRE APERTI ORA';
    badge.style.color = 'var(--accent-green)';
    always.forEach(el => {
      el.style.background = 'rgba(76, 175, 80, 0.2)';
      el.style.borderColor = 'var(--accent-green)';
    });
  } else {
    badge.textContent = '○ CHIUSI';
    badge.style.color = '#999';
    always.forEach(el => {
      el.style.background = 'rgba(153,153,153,0.2)';
      el.style.borderColor = '#999';
    });
  }
}
updateOpenBadge();
setInterval(updateOpenBadge, 60000);

// Menu mobile robusto
const toggleBtn = document.querySelector('.mobile-menu-toggle');
const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('mobileOverlay');

function openMobileMenu() {
  menu.classList.add('active');
  overlay.classList.add('active');
  toggleBtn.classList.add('active');
  toggleBtn.setAttribute('aria-expanded', 'true');
  menu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  toggleBtn.classList.remove('active');
  toggleBtn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active');
    if (isOpen) closeMobileMenu(); else openMobileMenu();
  });
}
if (overlay) overlay.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.nav-menu a').forEach(a => a.addEventListener('click', closeMobileMenu));

// WhatsApp float — click apre chat
const waButton = document.querySelector('.whatsapp-float');
if (waButton) {
  waButton.addEventListener('click', () => window.open('https://wa.me/393286104777','_blank','noopener'));
}
