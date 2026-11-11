/*
 * VocabTrack · Illustration „Lehrer sehen, wer gelernt hat“
 *
 * Einbinden: mountLehrerIllustration(element) – gibt eine Aufräumfunktion zurück.
 *
 * Ohne Bibliothek. Steht sofort im Ausgangszustand und spielt einmal ab, sobald sie die Bildschirmmitte erreicht,
 * danach schwebt alles nur noch. Bei „Bewegung reduzieren“ steht sofort das fertige Bild.
 */
var NS = 'http://www.w3.org/2000/svg';
var OR = '#F39443', OR_TIEF = '#D4772A', GRUEN = '#5FA857', ROT = '#EE6A5A';
var RAND = '#E4E2DE', RAND2 = '#D9D4C8', TINTE = '#2A2724', GRAU = '#CFCAC0', LEER = '#F1EEE8', BLAU = '#A9D3F5';
var FONT = 'font-family="-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif"';
// Prozent richtig, Länge des Namensbalkens, Punktzahl; null = fehlt
var DATEN = [
  { p: 75, n: 70, s: '1' }, { p: 58, n: 58, s: '3.5' }, { p: 40, n: 66, s: '2' },
  { p: 20, n: 52, s: '1.5' }, { p: 10, n: 60, s: '2' }, { p: null, n: 64 }, { p: null, n: 50 }
];
// Das Board ist um WINKEL Grad um (MX, MY) gekippt.
var WINKEL = 4, MX = 412, MY = 250;
var instanz = 0;

function farbe(p) { return p >= 60 ? GRUEN : p >= 40 ? OR : ROT; }

function el(tag, attrs, inner) {
  var e = document.createElementNS(NS, tag);
  for (var k in attrs || {}) e.setAttribute(k, attrs[k]);
  if (inner) e.innerHTML = inner;
  return e;
}

function dreh(x, y) {
  var w = WINKEL * Math.PI / 180, dx = x - MX, dy = y - MY;
  return [MX + dx * Math.cos(w) - dy * Math.sin(w), MY + dx * Math.sin(w) + dy * Math.cos(w)];
}

function stilEinfuegen() {
  if (document.getElementById('vt-lehrer-stil')) return;
  var s = document.createElement('style');
  s.id = 'vt-lehrer-stil';
  s.textContent =
    '[data-vt-lehrer] svg{width:100%;height:auto;display:block;overflow:visible}' +
    '.vt-an{transform-box:fill-box;transform-origin:center}' +
    '@keyframes vt-schweben{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
    '@keyframes vt-wippen{0%,100%{transform:none}25%{transform:translateY(-1.5px) rotate(.75deg)}50%{transform:translateY(-3px)}75%{transform:translateY(-1.5px) rotate(-.75deg)}}' +
    '@keyframes vt-funkeln{0%,100%{transform:scale(.3);opacity:0}50%{transform:scale(1);opacity:1}}' +
    '@media (prefers-reduced-motion:reduce){[data-vt-lehrer] .vt-an{animation:none!important}}';
  document.head.appendChild(s);
}

function Illustration(box) {
  var pre = 'vtl' + (instanz++) + '-';
  var nid = 0, lauf = 0;
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function t(ms) { return still ? 0 : ms; }
  function warte(ms) { return new Promise(function (r) { setTimeout(r, t(ms)); }); }
  function anim(e, frames, opts) {
    if (still) { opts = Object.assign({}, opts, { duration: 0, delay: 0 }); }
    return e.animate(frames, opts);
  }

  function karte() {
    var id = pre + 'k' + (nid++);
    return '<g transform="translate(-75 -52.5)"><defs><clipPath id="' + id + '"><rect width="150" height="105" rx="14"/></clipPath></defs>' +
      '<rect y="6" width="150" height="105" rx="14" fill="' + TINTE + '" opacity=".09"/><rect width="150" height="105" rx="14" fill="#fff"/>' +
      '<rect width="150" height="25" fill="' + BLAU + '" clip-path="url(#' + id + ')"/>' +
      '<rect x="18" y="46" width="72" height="11" rx="5.5" fill="' + TINTE + '"/><rect x="18" y="66" width="48" height="8" rx="4" fill="' + GRAU + '"/>' +
      '<rect x="18" y="83" width="30" height="6" rx="3" fill="' + GRAU + '" opacity=".7"/>' +
      '<rect x=".75" y=".75" width="148.5" height="103.5" rx="13.25" fill="none" stroke="' + RAND2 + '" stroke-width="1.5"/></g>';
  }

  function ring(cx, cy, r, p, o) {
    o = o || {};
    var breite = o.breite || 3.5, gross = o.gross || 8.5, text = o.text != null ? o.text : p;
    var u = 2 * Math.PI * r, g = el('g');
    g.innerHTML = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fff" stroke="' + LEER + '" stroke-width="' + breite + '"/>' +
      '<circle class="bogen" cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + (p == null ? LEER : farbe(p)) + '" stroke-width="' + breite +
      '" stroke-linecap="round" stroke-dasharray="' + u + '" stroke-dashoffset="' + u + '" transform="rotate(-90 ' + cx + ' ' + cy + ')"/>' +
      '<text x="' + cx + '" y="' + (cy + gross * 0.36) + '" text-anchor="middle" ' + FONT + ' font-weight="700" font-size="' + gross + '" fill="' + TINTE + '">' + text + '</text>';
    g.fuellen = function (anteil, ms, von) {
      return anim(g.querySelector('.bogen'), [{ strokeDashoffset: u * (1 - (von || 0)) }, { strokeDashoffset: u * (1 - anteil) }],
        { duration: t(ms || 650), easing: 'cubic-bezier(.3,.8,.3,1)', fill: 'forwards' });
    };
    return g;
  }

  function funkel(x, y, s, d, v, f) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path class="vt-an" style="animation:vt-funkeln ' + d + 's ease-in-out ' + (-v) +
      's infinite" d="M0 -8C1 -2 2 -1 8 0C2 1 1 2 0 8C-1 2 -2 1 -8 0C-2 -1 -1 -2 0 -8Z" fill="' + (f || '#F8B26B') + '"/></g>';
  }

  function pop(g, s, ms) {
    g.style.transformBox = 'fill-box';
    g.style.transformOrigin = 'center';
    return anim(g, [{ transform: 'scale(1)' }, { transform: 'scale(' + (s || 1.06) + ')' }, { transform: 'scale(1)' }],
      { duration: t(ms || 320), easing: 'cubic-bezier(.3,1.4,.5,1)' });
  }

  function funken(ziel, x, y, n) {
    if (still) return;
    for (var i = 0; i < n; i++) {
      var c = el('circle', { cx: x, cy: y, r: 2 + Math.random() * 1.6, fill: [OR, '#F8B26B', GRUEN][i % 3] });
      ziel.appendChild(c);
      var w = i / n * Math.PI * 2 + Math.random() * 0.4, r = 22 + Math.random() * 14;
      c.style.transformBox = 'view-box';
      c.animate([{ transform: 'translate(0,0)', opacity: 1 }, { transform: 'translate(' + Math.cos(w) * r + 'px,' + Math.sin(w) * r + 'px)', opacity: 0 }],
        { duration: 600 + Math.random() * 200, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = (function (c) { return function () { c.remove(); }; })(c);
    }
  }

  // Startsignal: die Szene steht sofort, der Ablauf beginnt erst im Fokus
  var losgehen;
  var gestartet = new Promise(function (r) { losgehen = r; });

  async function spielen() {
    var id = ++lauf;
    function ok() { return id === lauf; }
    box.innerHTML = '';
    var svg = el('svg', { viewBox: '0 0 560 480', role: 'img',
      'aria-label': 'Vokabelkarten der Klasse landen auf dem Klemmbrett des Lehrers: fünf Schüler mit Ergebnis, zwei fehlen.' });
    box.appendChild(svg);
    svg.innerHTML = funkel(70, 70, 1, 3.2, 1.1) + funkel(250, 40, 0.7, 2.6, 0.4, BLAU) + funkel(40, 400, 0.9, 3.6, 2.2) + funkel(545, 250, 0.7, 2.9, 1.7, BLAU) +
      '<g transform="rotate(' + WINKEL + ' ' + MX + ' ' + MY + ')"><g class="brettSchwebe"><g class="brett">' +
      '<rect x="290" y="56" width="244" height="400" rx="22" fill="' + TINTE + '" opacity=".07"/>' +
      '<rect x="290" y="50" width="244" height="400" rx="22" fill="#fff"/>' +
      '<clipPath id="' + pre + 'brett"><rect x="290" y="50" width="244" height="400" rx="22"/></clipPath>' +
      '<rect x="290" y="50" width="244" height="50" fill="' + BLAU + '" clip-path="url(#' + pre + 'brett)"/>' +
      '<rect x="290.75" y="50.75" width="242.5" height="398.5" rx="21.25" fill="none" stroke="' + RAND2 + '" stroke-width="1.5"/>' +
      '<rect x="306" y="66" width="78" height="9" rx="4.5" fill="#fff"/><rect x="306" y="81" width="48" height="6" rx="3" fill="#fff" opacity=".75"/>' +
      '<rect x="380" y="40" width="64" height="24" rx="10" fill="' + OR_TIEF + '"/><rect x="380" y="36" width="64" height="24" rx="10" fill="' + OR + '"/>' +
      '<rect x="398" y="44" width="28" height="7" rx="3.5" fill="#fff" opacity=".85"/>' +
      '<g class="zaehler"></g><g class="zeilen"></g><g class="brettFunken"></g></g></g></g>' +
      '<g transform="translate(150 150)"><g class="klasse vt-an" style="animation:vt-schweben 4.6s ease-in-out -1s infinite">' +
      '<rect x="-82" y="-14" width="164" height="36" rx="18" fill="' + RAND + '"/><rect x="-82" y="-18" width="164" height="36" rx="18" fill="#fff"/>' +
      '<rect x="-81.25" y="-17.25" width="162.5" height="34.5" rx="17.25" fill="none" stroke="' + RAND + '" stroke-width="1.5"/>' +
      '<clipPath id="' + pre + 'flagge"><circle cx="-60" cy="0" r="13"/></clipPath>' +
      '<g clip-path="url(#' + pre + 'flagge)"><rect x="-73" y="-13" width="26" height="26" fill="#22468E"/>' +
      '<path d="M-73 -13L-47 13M-47 -13L-73 13" stroke="#fff" stroke-width="5"/><path d="M-73 -13L-47 13M-47 -13L-73 13" stroke="#D8343A" stroke-width="1.6"/>' +
      '<path d="M-60 -13V13M-73 0H-47" stroke="#fff" stroke-width="7.5"/><path d="M-60 -13V13M-73 0H-47" stroke="#D8343A" stroke-width="4"/></g>' +
      '<text x="-40" y="5" ' + FONT + ' font-weight="800" font-size="13" letter-spacing="1.2" fill="#6F6A64">ENGLISCH · 10B</text></g></g>' +
      '<g class="stapel"></g><g class="oben"></g>';

    var q = function (s) { return svg.querySelector(s); };
    var zaehler = ring(503, 75, 17, null, { breite: 4.5, gross: 13, text: '0' });
    zaehler.querySelector('.bogen').setAttribute('stroke', OR);
    q('.zaehler').appendChild(zaehler);
    var ztext = zaehler.querySelector('text');

    var reihen = DATEN.map(function (d, i) {
      var y = 112 + i * 46, g = el('g');
      g.innerHTML = '<rect class="platz" x="304" y="' + y + '" width="216" height="36" rx="12" fill="#FBF9F6" stroke="' + GRAU + '" stroke-width="1.4" stroke-dasharray="4 5"/>';
      q('.zeilen').appendChild(g);
      return { g: g, y: y, d: d };
    });

    var lagen = [[170, 330, -8], [182, 312, 5], [164, 294, -3], [178, 276, 8], [168, 258, -6]], karten = [];
    lagen.forEach(function (l, i) {
      var k = el('g');
      k.innerHTML = karte();
      k.style.transformBox = 'view-box';
      k.style.transformOrigin = '0 0';
      k.lage = 'translate(' + l[0] + 'px,' + l[1] + 'px) rotate(' + l[2] + 'deg) scale(.95)';
      k.style.transform = k.lage;
      q('.stapel').appendChild(k);
      karten.push(k);
    });
    await gestartet; if (!ok()) return;
    await warte(300); if (!ok()) return;

    // Die Karten fliegen nacheinander aufs Board und werden zur Zeile.
    for (var i = 0; i < 5; i++) {
      if (!ok()) return;
      var k = karten[4 - i], z = reihen[i], ziel = dreh(412, z.y + 18);
      q('.oben').appendChild(k);
      await anim(k, [{ transform: k.lage },
        { transform: 'translate(255px,' + (z.y - 70) + 'px) rotate(-10deg) scale(.8)', offset: 0.45 },
        { transform: 'translate(' + ziel[0] + 'px,' + ziel[1] + 'px) rotate(' + WINKEL + 'deg) scale(.24)', opacity: 0.3 }],
        { duration: t(640), easing: 'cubic-bezier(.45,0,.35,1)', fill: 'forwards' }).finished;
      if (!ok()) return;
      k.remove();
      var g = z.g, d = z.d;
      g.innerHTML = '<rect x="304" y="' + (z.y + 3) + '" width="216" height="36" rx="12" fill="' + RAND + '"/>' +
        '<rect x="304" y="' + z.y + '" width="216" height="36" rx="12" fill="#fff"/>' +
        '<rect x="304.75" y="' + (z.y + 0.75) + '" width="214.5" height="34.5" rx="11.25" fill="none" stroke="' + RAND + '" stroke-width="1.5"/>' +
        '<rect x="346" y="' + (z.y + 10) + '" width="' + d.n + '" height="7" rx="3.5" fill="' + TINTE + '"/>' +
        '<rect x="346" y="' + (z.y + 21) + '" width="' + d.n * 0.65 + '" height="5" rx="2.5" fill="' + GRAU + '"/>' +
        '<text x="506" y="' + (z.y + 23) + '" text-anchor="end" ' + FONT + ' font-weight="700" font-size="14" fill="' + TINTE + '">' + d.s + '</text>';
      var rg = ring(326, z.y + 18, 11, d.p);
      g.appendChild(rg);
      rg.fuellen(d.p / 100);
      pop(g, 1.06);
      funken(q('.brettFunken'), 326, z.y + 18, 8);
      zaehler.fuellen((i + 1) / 10, 420, i / 10);
      ztext.textContent = i + 1;
      pop(zaehler, 1.18, 300);
      await warte(160);
    }
    await warte(350); if (!ok()) return;

    // Wer fehlt, fällt auf.
    reihen.slice(5).forEach(function (z, i) {
      var platz = z.g.querySelector('.platz');
      setTimeout(function () { platz.setAttribute('stroke', ROT); platz.setAttribute('fill', '#FFF6F4'); }, t(i * 180));
      var tag = el('g');
      tag.innerHTML = '<rect x="370" y="' + (z.y + 6) + '" width="84" height="24" rx="12" fill="#FDEDEA" stroke="' + ROT + '" stroke-width="1.5"/>' +
        '<text x="412" y="' + (z.y + 22.5) + '" text-anchor="middle" ' + FONT + ' font-weight="800" font-size="12.5" letter-spacing="1.4" fill="' + ROT + '">FEHLT</text>';
      z.g.appendChild(tag);
      tag.style.transformBox = 'fill-box';
      tag.style.transformOrigin = 'center';
      anim(tag, [{ transform: 'scale(.3)', opacity: 0 }, { transform: 'scale(1.25)', opacity: 1, offset: 0.6 }, { transform: 'none', opacity: 1 }],
        { duration: t(460), delay: t(i * 180), easing: 'ease-out', fill: 'backwards' });
      if (!still) z.g.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(-2px)' }, { transform: 'translateX(0)' }],
        { duration: 400, delay: 320 + i * 180 });
    });
    await warte(650); if (!ok()) return;

    var pill = el('g');
    pill.innerHTML = '<rect x="-62" y="-14" width="124" height="34" rx="17" fill="' + RAND + '"/><rect x="-62" y="-17" width="124" height="34" rx="17" fill="#fff"/>' +
      '<rect x="-61.25" y="-16.25" width="122.5" height="32.5" rx="16.25" fill="none" stroke="' + RAND + '" stroke-width="1.5"/>' +
      '<text x="-46" y="5" ' + FONT + ' font-weight="700" font-size="11" letter-spacing="1" fill="#9A948A">Ø</text>' +
      '<text x="2" y="6" text-anchor="middle" ' + FONT + ' font-weight="800" font-size="16" fill="' + OR + '">41 %</text><circle cx="44" cy="0" r="5" fill="' + OR + '"/>';
    pill.style.transformBox = 'view-box';
    pill.style.transformOrigin = '0 0';
    // Die Ø-Pille hängt unter „Englisch · 10B“ und schwebt mit ihr
    q('.klasse').appendChild(pill);
    anim(pill, [{ transform: 'translate(0px,85px) scale(.4)', opacity: 0 }, { transform: 'translate(0px,51px) scale(1.08)', opacity: 1, offset: 0.7 },
      { transform: 'translate(0px,55px) scale(1)', opacity: 1 }], { duration: t(520), easing: 'ease-out', fill: 'forwards' });
    if (still) return;

    await warte(500); if (!ok()) return;
    var schwebe = q('.brettSchwebe');
    schwebe.classList.add('vt-an');
    schwebe.style.animation = 'vt-schweben 5.4s ease-in-out infinite';
    // Jede Zeile wippt leicht, jede in ihrem eigenen Takt
    reihen.forEach(function (z, i) {
      z.g.classList.add('vt-an');
      z.g.style.animation = 'vt-wippen ' + (2.8 + (i % 3) * 0.4) + 's ease-in-out ' + (i * 0.25) + 's infinite';
    });
  }

  // Einmal spielen, sobald die Mitte der Illustration im oberen Teil des Bildschirms ist.
  // Auf dem Handy steht sie unter dem Text und wäre sonst schon lange sichtbar, bevor es losgeht:
  // dort reicht es, wenn sie größtenteils im Bild ist.
  function pruefen() {
    var r = box.getBoundingClientRect();
    var mitte = (r.top + r.bottom) / 2;
    var grenze = window.innerWidth <= 900 ? 0.85 : 0.65;
    if (r.bottom > 0 && mitte < window.innerHeight * grenze) {
      aufhoeren();
      losgehen();
    }
  }
  function aufhoeren() {
    window.removeEventListener('scroll', pruefen);
    window.removeEventListener('resize', pruefen);
  }
  spielen();
  if (still) {
    losgehen();
  } else {
    window.addEventListener('scroll', pruefen, { passive: true });
    window.addEventListener('resize', pruefen);
    pruefen();
  }

  // Aufräumen, wenn React die Illustration entfernt
  return function () {
    lauf++;
    aufhoeren();
    box.innerHTML = '';
  };
}

export function mountLehrerIllustration(box) {
  box.setAttribute('data-vt-lehrer', '');
  stilEinfuegen();
  return Illustration(box);
}
