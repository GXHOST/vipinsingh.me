/* vipinsingh.me — site behaviour
   Nav, theme, scroll reveal, vCard download + QR contact code. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Single source of truth for contact details.
     Update here and the vCard, the QR code and nothing else changes.
     ------------------------------------------------------------------ */
  var CONTACT = {
    firstName: 'Vipin',
    lastName:  'Singh',
    title:     'Founder & CEO',
    org:       'Gen X Web Hosting',
    email:     'vipin@genxwhosting.com',
    phone:     '+919429692542',
    phoneLabel:'+91 94296 92542',
    site:      'https://vipinsingh.me',
    company:   'https://genxwhosting.com',
    linkedin:  'https://www.linkedin.com/in/bestvipin',
    instagram: 'https://www.instagram.com/vipinsi/',
    street:    '27/1A, Gokhale Marg, 3rd Floor, Riz Building',
    city:      'Lucknow',
    region:    'Uttar Pradesh',
    zip:       '226001',
    country:   'India',
    note:      'Domains & hosting made simple.'
  };

  function vcard() {
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:' + CONTACT.lastName + ';' + CONTACT.firstName + ';;;',
      'FN:' + CONTACT.firstName + ' ' + CONTACT.lastName,
      'ORG:' + CONTACT.org,
      'TITLE:' + CONTACT.title,
      'EMAIL;TYPE=INTERNET,WORK:' + CONTACT.email,
      'TEL;TYPE=WORK,VOICE:' + CONTACT.phone,
      'TEL;TYPE=CELL:' + CONTACT.phone,
      'ADR;TYPE=WORK:;;' + CONTACT.street + ';' + CONTACT.city + ';' +
        CONTACT.region + ';' + CONTACT.zip + ';' + CONTACT.country,
      'URL:' + CONTACT.site,
      'URL;TYPE=WORK:' + CONTACT.company,
      'X-SOCIALPROFILE;TYPE=linkedin:' + CONTACT.linkedin,
      'X-SOCIALPROFILE;TYPE=instagram:' + CONTACT.instagram,
      'NOTE:' + CONTACT.note,
      'REV:' + new Date().toISOString().replace(/\.\d{3}/, ''),
      'END:VCARD'
    ].join('\r\n');
  }

  /* ---------------- Theme ---------------- */
  var root = document.documentElement;

  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    try { localStorage.setItem('vs-theme', mode); } catch (e) {}
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      var sun = btn.querySelector('[data-icon="sun"]');
      var moon = btn.querySelector('[data-icon="moon"]');
      if (sun) sun.style.display = mode === 'dark' ? 'block' : 'none';
      if (moon) moon.style.display = mode === 'dark' ? 'none' : 'block';
    });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-theme-toggle]');
    if (!t) return;
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  setTheme(root.getAttribute('data-theme') || 'light');

  /* ---------------- Mobile nav ---------------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var panel  = document.querySelector('[data-nav-panel]');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = (entry.target.dataset.delay || 0) + 'ms';
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------------- Toast ---------------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(function () { toastEl.classList.add('is-visible'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-visible'); }, 2600);
  }

  /* ---------------- vCard download ---------------- */
  document.querySelectorAll('[data-vcard]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var blob = new Blob([vcard()], { type: 'text/vcard;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'vipin-singh.vcf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      toast('Contact card downloaded — open it to save Vipin to your phone.');
    });
  });

  /* ---------------- Copy buttons ---------------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(function () { toast('Copied: ' + value); });
      } else {
        var ta = document.createElement('textarea');
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        toast('Copied: ' + value);
      }
    });
  });

  /* ---------------- QR: scan to save contact ----------------
     Encodes a compact vCard so a phone camera offers "Add contact" with no
     network round-trip. Kept deliberately short: fewer characters means fewer
     modules, which means it still scans from a phone screen or a printed card.
     The full card, including the postal address, is in the .vcf download.   */
  function qrPayload() {
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:' + CONTACT.lastName + ';' + CONTACT.firstName + ';;;',
      'FN:' + CONTACT.firstName + ' ' + CONTACT.lastName,
      'ORG:' + CONTACT.org,
      'TITLE:' + CONTACT.title,
      'TEL;TYPE=CELL:' + CONTACT.phone,
      'EMAIL;TYPE=WORK:' + CONTACT.email,
      'URL:' + CONTACT.site,
      'X-SOCIALPROFILE;TYPE=linkedin:' + CONTACT.linkedin,
      'END:VCARD'
    ].join('\r\n');
  }

  var qrHost = document.querySelector('[data-qr]');
  if (qrHost && typeof qrcode === 'function') {
    var payload = qrPayload();
    var qr = null;
    for (var version = 8; version <= 20; version++) {
      try {
        var candidate = qrcode(version, 'M');
        candidate.addData(payload, 'Byte');
        candidate.make();
        qr = candidate;
        break;
      } catch (err) { /* payload too big for this version - grow it */ }
    }
    if (!qr) {
      qr = qrcode(0, 'M');
      qr.addData(CONTACT.site, 'Byte');
      qr.make();
    }
    qrHost.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 1, scalable: true });
    var svg = qrHost.querySelector('svg');
    if (svg) {
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'QR code containing the contact card for Vipin Singh');
      svg.setAttribute('width', '200');
      svg.setAttribute('height', '200');
      svg.style.display = 'block';
    }
  }

  /* ---------------- Blog category filter ---------------- */
  var filters = document.querySelectorAll('[data-filter]');
  if (filters.length) {
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-filter');
        filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        document.querySelectorAll('[data-category]').forEach(function (card) {
          var show = cat === 'all' || card.getAttribute('data-category') === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---------------- Active nav link on scroll ---------------- */
  var sectionLinks = Array.prototype.filter.call(
    document.querySelectorAll('.nav__links a[href^="#"]'),
    function (a) { return document.querySelector(a.getAttribute('href')); }
  );
  if (sectionLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionLinks.forEach(function (a) { spy.observe(document.querySelector(a.getAttribute('href'))); });
  }

  /* Year stamps */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
