/* ===================================================
   Shared includes — nav, footer & head scripts
   Add <script src="js/includes.js"></script> to <head>
   =================================================== */

(function () {
  'use strict';

  /* ---------- Meta Pixel ---------- */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2684268808623111');
  fbq('track', 'PageView');

  // noscript pixel fallback
  var ns = document.createElement('noscript');
  var img = document.createElement('img');
  img.height = 1; img.width = 1;
  img.style.display = 'none';
  img.src = 'https://www.facebook.com/tr?id=2684268808623111&ev=PageView&noscript=1';
  ns.appendChild(img);
  document.head.appendChild(ns);

  /* ---------- helpers ---------- */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  var navLinks = [
    { href: '/',         label: 'Home' },
    { href: '/jewelry',  label: 'Jewelry' },
    { href: '/services', label: 'Services' },
    { href: '/gem',      label: 'Gem of Month' },
    { href: '/videos',   label: 'Videos' },
    { href: '/about',    label: 'About' },
    { href: '/contact',  label: 'Contact' }
  ];

  function isActive(href) {
    if (href === '/') return path === '/' || path === '/index' || path === '/index.html';
    return path === href || path === href + '.html';
  }

  /* ---------- Navigation ---------- */
  function buildNav() {
    var linksHTML = navLinks.map(function (l) {
      var cls = isActive(l.href) ? ' class="active"' : '';
      return '<li><a href="' + l.href + '"' + cls + '>' + l.label + '</a></li>';
    }).join('\n        ');

    return '<nav class="nav">\n' +
      '    <div class="nav__inner container">\n' +
      '      <a href="/" class="nav__logo"><span>Davidas Design Concepts</span></a>\n' +
      '      <ul class="nav__links">\n' +
      '        ' + linksHTML + '\n' +
      '      </ul>\n' +
      '      <button class="nav__toggle" aria-label="Toggle menu">\n' +
      '        <span></span>\n' +
      '        <span></span>\n' +
      '        <span></span>\n' +
      '      </button>\n' +
      '    </div>\n' +
      '  </nav>';
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    return '<footer class="footer">\n' +
      '    <div class="container">\n' +
      '      <div class="footer__inner">\n' +
      '        <div>\n' +
      '          <div class="footer__brand"><span>Davidas Design Concepts</span></div>\n' +
      '          <p class="footer__tagline">The fusion of art, craftsmanship and technology. Custom jewelry design in Greensboro, NC since 1995.</p>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <div class="footer__heading">Explore</div>\n' +
      '          <ul class="footer__links">\n' +
      '            <li><a href="/">Home</a></li>\n' +
      '            <li><a href="/jewelry">Jewelry</a></li>\n' +
      '            <li><a href="/services">Services</a></li>\n' +
      '            <li><a href="/gem">Gem of Month</a></li>\n' +
      '          </ul>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <div class="footer__heading">Connect</div>\n' +
      '          <ul class="footer__links">\n' +
      '            <li><a href="/videos">Videos</a></li>\n' +
      '            <li><a href="/about">About</a></li>\n' +
      '            <li><a href="/contact">Contact</a></li>\n' +
      '          </ul>\n' +
      '        </div>\n' +
      '        <div>\n' +
      '          <div class="footer__heading">Contact</div>\n' +
      '          <ul class="footer__links">\n' +
      '            <li><a href="tel:+13367908214">(336) 790-8214</a></li>\n' +
      '            <li><a href="mailto:davidas.design@yahoo.com">davidas.design@yahoo.com</a></li>\n' +
      '            <li><span style="color: var(--color-text-dim); font-size: 0.9rem;">220 S. Swing Rd, Unit #1<br>Greensboro, NC 27409</span></li>\n' +
      '          </ul>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="footer__bottom">\n' +
      '        <span>&copy; ' + new Date().getFullYear() + ' Davidas Design Concepts. All rights reserved.</span>\n' +
      '        <span>Est. July 8, 1995</span>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </footer>';
  }

  /* ---------- Inject into page ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    var navPlaceholder = document.getElementById('site-nav');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = buildNav();
    }

    var footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = buildFooter();
    }
  });

})();
