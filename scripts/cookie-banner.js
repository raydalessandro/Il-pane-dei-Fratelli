(function(){
  const KEY = 'consent-v1';
  if (localStorage.getItem(KEY)) return;

  const bar = document.createElement('div');
  bar.setAttribute('role','dialog');
  bar.setAttribute('aria-live','polite');
  bar.style.position = 'fixed';
  bar.style.insetInline = '0';
  bar.style.bottom = '0';
  bar.style.background = '#111';
  bar.style.color = '#fff';
  bar.style.padding = '14px 16px';
  bar.style.display = 'flex';
  bar.style.gap = '12px';
  bar.style.justifyContent = 'space-between';
  bar.style.alignItems = 'center';
  bar.style.zIndex = '10000';
  bar.style.borderTop = '1px solid #333';

  bar.innerHTML = `
    <span style="max-width:720px; font-size:14px; line-height:1.5;">
      Usiamo solo cookie tecnici essenziali. Analytics opzionali verranno attivati solo con il tuo consenso.
      <a href="/privacy.html" style="color:#D4AF37; text-decoration:underline;">Privacy</a>
    </span>
    <span style="display:flex; gap:8px;">
      <button id="c-deny" style="background:#333;color:#fff;border:1px solid #444;border-radius:6px;padding:8px 12px;cursor:pointer;">Rifiuta</button>
      <button id="c-accept" style="background:#25D366;color:#fff;border:none;border-radius:6px;padding:8px 12px;cursor:pointer;font-weight:600;">Accetta</button>
    </span>
  `;
  document.body.appendChild(bar);

  function save(v){ localStorage.setItem(KEY, v); bar.remove(); if (v==='accepted'){ /* qui potrai caricare analytics */ } }
  document.getElementById('c-deny').addEventListener('click', ()=>save('denied'));
  document.getElementById('c-accept').addEventListener('click', ()=>save('accepted'));
})();
