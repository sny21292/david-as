document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (toggle) {
    const nav = toggle.closest('.nav');
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
      nav.classList.toggle('nav--open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
        nav.classList.remove('nav--open');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Staggered children animation
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((child, i) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
            requestAnimationFrame(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            });
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    staggerObserver.observe(parent);
  });

  // Active nav link
  const path = window.location.pathname;
  const currentPage = path === '/' ? '/' : path.replace(/\/$/, '');
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Product gallery (if on product page)
  const mainImage = document.querySelector('.product-gallery__main img');
  const thumbs = document.querySelectorAll('.product-gallery__thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const img = thumb.querySelector('img');
      if (mainImage && img) {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
      }
    });
  });

  // Gem Read More toggle
  const gemToggle = document.getElementById('gem-toggle');
  const gemMore = document.getElementById('gem-read-more');
  if (gemToggle && gemMore) {
    gemToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = gemMore.classList.toggle('expanded');
      gemToggle.textContent = isExpanded ? 'Read Less' : 'Read More';
    });
  }

  // Contact form
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = 'var(--color-green)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  // Video modal player
  const videoModal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-player');
  const videoTitle = document.getElementById('video-modal-title');

  if (videoModal && videoPlayer) {
    document.querySelectorAll('.video-card[data-video-src]').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const src = card.getAttribute('data-video-src');
        const title = card.getAttribute('data-video-title') || '';

        videoTitle.textContent = title;
        videoPlayer.setAttribute('src', src);
        videoPlayer.load();
        videoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    function closeVideoModal() {
      videoPlayer.pause();
      videoPlayer.removeAttribute('src');
      videoModal.style.display = 'none';
      document.body.style.overflow = '';
    }

    document.getElementById('video-modal-close').addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', e => {
      if (e.target === videoModal) closeVideoModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && videoModal.style.display !== 'none') closeVideoModal();
    });
  }
});
