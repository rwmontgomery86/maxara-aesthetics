(function () {
  'use strict';

  var DELAY_MS = 4000;
  var STORAGE_KEY = 'mdPopupSeen';

  function isPreviewMode() {
    try {
      return new URLSearchParams(window.location.search).has('mdpreview');
    } catch (_) {
      return false;
    }
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var popup = document.querySelector('.md-popup');
    if (!popup) return;

    var preview = isPreviewMode();

    if (!preview) {
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) return;
      } catch (_) {}
    }

    var dialog = popup.querySelector('.md-popup__dialog');
    var lastFocused = null;
    var keydownHandler = null;

    function getFocusable() {
      return dialog.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
    }

    function trapFocus(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function open() {
      lastFocused = document.activeElement;
      popup.hidden = false;
      void popup.offsetWidth;
      popup.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      keydownHandler = trapFocus;
      document.addEventListener('keydown', keydownHandler);
      var focusable = getFocusable();
      if (focusable.length) focusable[0].focus();
    }

    function close() {
      popup.classList.remove('is-open');
      document.body.style.overflow = '';
      if (keydownHandler) {
        document.removeEventListener('keydown', keydownHandler);
        keydownHandler = null;
      }
      try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (_) {}
      setTimeout(function () {
        popup.hidden = true;
        if (lastFocused && typeof lastFocused.focus === 'function') {
          lastFocused.focus();
        }
      }, 500);
    }

    popup.addEventListener('click', function (e) {
      if (e.target.closest('[data-md-dismiss]')) {
        e.preventDefault();
        close();
      }
    });

    if (preview) {
      open();
    } else {
      setTimeout(open, DELAY_MS);
    }
  });
})();
