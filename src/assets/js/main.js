document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  // Mobile menu toggle logic
  function toggleMobileMenu() {
    if (mobileMenu && menuIcon) {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
      } else {
        mobileMenu.classList.add("hidden");
        menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      }
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  // Category filtering logic
  const sections = document.querySelectorAll(".project-section");
  const buttons = {
    all: document.getElementById("filter-btn-all"),
    software: document.getElementById("filter-btn-software"),
    games: document.getElementById("filter-btn-games")
  };

  function filterCategory(category) {
    // Update button styles
    Object.keys(buttons).forEach(key => {
      const btn = buttons[key];
      if (!btn) return;
      
      if (key === category) {
        // Active button styles
        btn.className = "playful-btn px-5 py-2 text-xs font-bold rounded-2xl transition-all duration-300 cursor-pointer ";
        if (category === "software") {
          btn.className += "bg-pink-500 text-white shadow-lg shadow-pink-500/40";
        } else if (category === "games") {
          btn.className += "bg-lime-400 text-slate-950 shadow-lg shadow-lime-500/40";
        } else {
          btn.className += "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/40";
        }
      } else {
        // Inactive button styles
        btn.className = "playful-btn px-5 py-2 text-xs font-bold rounded-2xl transition-all duration-300 cursor-pointer text-slate-400 hover:text-white hover:bg-slate-800/40";
      }
    });

    // Show/hide sections with transitions
    sections.forEach(section => {
      const sectionCategory = section.getAttribute("data-category");
      
      if (category === "all" || sectionCategory === category) {
        section.style.display = "block";
        void section.offsetHeight; // force reflow
        section.classList.remove("is-hidden");
      } else {
        section.classList.add("is-hidden");
        
        // Hide from layout after transition ends
        const handleTransitionEnd = () => {
          if (section.classList.contains("is-hidden")) {
            section.style.display = "none";
          }
          section.removeEventListener("transitionend", handleTransitionEnd);
        };
        section.addEventListener("transitionend", handleTransitionEnd);
      }
    });
  }

  // Bind filter button click events
  Object.keys(buttons).forEach(key => {
    const btn = buttons[key];
    if (btn) {
      btn.addEventListener("click", () => {
        filterCategory(key);
      });
    }
  });

  // Bind header/mobile nav link resets
  // When a nav link is clicked, we reset filter to 'all' so the section is visible
  const navResetLinks = document.querySelectorAll(".nav-reset-link");
  navResetLinks.forEach(link => {
    link.addEventListener("click", () => {
      filterCategory("all");
    });
  });

  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleMobileMenu();
      filterCategory("all");
    });
  });
});

