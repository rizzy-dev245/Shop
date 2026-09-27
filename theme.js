// ===== ShopList Shared Theme (Dark Mode) =====

(function () {

  // =========================
  // DARK MODE CSS
  // =========================

  const css = `

    /* ===== BODY ===== */

    body.dark,
    body.dark-mode {
      background: #12151c !important;
      color: #e8e8e8 !important;
    }


    /* ===== CARDS ===== */

    body.dark .card,
    body.dark .item,
    body.dark .stats,
    body.dark .history-card,
    body.dark .photo-box,
    body.dark .bottom-nav,
    body.dark .modal,

    body.dark-mode .card,
    body.dark-mode .item,
    body.dark-mode .stats,
    body.dark-mode .history-card,
    body.dark-mode .photo-box,
    body.dark-mode .bottom-nav,
    body.dark-mode .modal {

      background: #1c2330 !important;

      box-shadow: none !important;
    }


    /* ===== TABS ===== */

    body.dark .tab,
    body.dark-mode .tab {

      background: #1c2330 !important;

      color: #7fb0f5 !important;

      border-color: #2f4a75 !important;
    }


    body.dark .tab.active,
    body.dark-mode .tab.active {

      background: #1E6FEB !important;

      color: #fff !important;
    }


    /* ===== TEXT ===== */

    body.dark .item-name,
    body.dark .info-value,
    body.dark .profile-name,
    body.dark h1,
    body.dark .modal h3,
    body.dark .item-qty,

    body.dark-mode .item-name,
    body.dark-mode .info-value,
    body.dark-mode .profile-name,
    body.dark-mode h1,
    body.dark-mode .modal h3,
    body.dark-mode .item-qty {

      color: #e8e8e8 !important;
    }


    body.dark .info-label,
    body.dark .tagline,
    body.dark .photo-hint,

    body.dark-mode .info-label,
    body.dark-mode .tagline,
    body.dark-mode .photo-hint {

      color: #999 !important;
    }


    body.dark .vision-text,
    body.dark .h-items,

    body.dark-mode .vision-text,
    body.dark-mode .h-items {

      color: #bbb !important;
    }


    body.dark .empty,
    body.dark .modal p,

    body.dark-mode .empty,
    body.dark-mode .modal p {

      color: #888 !important;
    }


    /* ===== FORM INPUTS ===== */

    body.dark .field input,
    body.dark .field select,
    body.dark .modal input,

    body.dark-mode .field input,
    body.dark-mode .field select,
    body.dark-mode .modal input {

      background: #141a24 !important;

      color: #eee !important;

      border-color: #3a4356 !important;
    }


    /* ===== INFORMATION ROW ===== */

    body.dark .info-row,
    body.dark-mode .info-row {

      border-color: #2a3344 !important;
    }


    /* ===== PHOTO ===== */

    body.dark .photo-box,
    body.dark-mode .photo-box {

      border-color: #2f4a75 !important;
    }


    /* ===== PRE-BUDGET NOTE ===== */

    body.dark .prebudget-note,
    body.dark-mode .prebudget-note {

      background: #16263f !important;

      color: #7fb0f5 !important;
    }


    /* ===== AVATAR ===== */

    body.dark .avatar,
    body.dark-mode .avatar {

      background: #16263f !important;

      border-color: #2f4a75 !important;
    }


    /* ===== CHECKBOX ===== */

    body.dark .checkbox,
    body.dark-mode .checkbox {

      background: #141a24 !important;

      border-color: #555 !important;
    }


    /* ===== MENU / CHEVRON ===== */

    body.dark .menu-btn,
    body.dark .chevron,

    body.dark-mode .menu-btn,
    body.dark-mode .chevron {

      color: #777 !important;
    }


    /* ===== PROFILE ===== */

    body.dark .profile-sub,
    body.dark-mode .profile-sub {

      color: #7fb0f5 !important;
    }


    /* ===== SECTION TITLE ===== */

    body.dark .section-title,
    body.dark-mode .section-title {

      color: #777 !important;
    }


    /* ===== CANCEL BUTTON ===== */

    body.dark .btn-cancel,
    body.dark-mode .btn-cancel {

      background: #2a3344 !important;

      color: #ccc !important;
    }


    /* ===== FOOTER ===== */

    body.dark .footer,
    body.dark-mode .footer {

      color: #666 !important;
    }


    /* ===== NO PHOTO ===== */

    body.dark .no-photo,
    body.dark-mode .no-photo {

      background: #16263f !important;
    }


    /* ===== HISTORY DATE ===== */

    body.dark .h-date,
    body.dark-mode .h-date {

      color: #888 !important;
    }


    /* ===== NAVIGATION ===== */

    body.dark .bottom-nav,
    body.dark-mode .bottom-nav {

      border-top-color: #2a3344 !important;
    }


    body.dark .nav-item,
    body.dark-mode .nav-item {

      color: #888 !important;
    }


    body.dark .nav-item.active,
    body.dark-mode .nav-item.active {

      color: #7fb0f5 !important;
    }

  `;


  // =========================
  // INSERT CSS
  // =========================

  const styleEl =
    document.createElement('style');

  styleEl.textContent = css;

  document.head.appendChild(styleEl);


  // =========================
  // APPLY THEME
  // =========================

  function applyTheme() {

    const dark =
      localStorage.getItem('shoplist_dark') === '1';


    if (document.body) {

      /*
       * Add BOTH classes.
       *
       * This makes the theme compatible
       * with old and new pages.
       */

      document.body.classList.toggle(
        'dark',
        dark
      );

      document.body.classList.toggle(
        'dark-mode',
        dark
      );

    }

  }


  // =========================
  // APPLY IMMEDIATELY
  // =========================

  applyTheme();


  // =========================
  // APPLY AFTER DOM LOAD
  // =========================

  document.addEventListener(
    'DOMContentLoaded',
    applyTheme
  );


  // =========================
  // GLOBAL FUNCTION
  // =========================

  window.isDarkMode = function () {

    return (
      localStorage.getItem('shoplist_dark') === '1'
    );

  };


  // =========================
  // TOGGLE DARK MODE
  // =========================

  window.toggleDarkMode = function () {

    const dark =
      localStorage.getItem('shoplist_dark') === '1';


    localStorage.setItem(
      'shoplist_dark',
      dark ? '0' : '1'
    );


    applyTheme();

  };


})();