document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  // Mobile menu toggle logic
  function toggleMobileMenu() {
    if (mobileMenu && menuIcon) {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        if (menuIcon.tagName.toLowerCase() === "span") {
          menuIcon.textContent = "close";
        } else {
          menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
        }
      } else {
        mobileMenu.classList.add("hidden");
        if (menuIcon.tagName.toLowerCase() === "span") {
          menuIcon.textContent = "menu";
        } else {
          menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
        }
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
    printing: document.getElementById("filter-btn-printing"),
    games: document.getElementById("filter-btn-games")
  };

  function filterCategory(category) {
    // Update button styles
    Object.keys(buttons).forEach((key) => {
      const btn = buttons[key];
      if (!btn) return;
      
      if (key === category) {
        // Active button styles
        btn.className = "px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all duration-150 cursor-pointer ";
        if (category === "software") {
          btn.className += "bg-[#EC4899] text-[#F8FAFC]";
        } else if (category === "games") {
          btn.className += "bg-[#A3E635] text-[#0B0F17]";
        } else if (category === "printing") {
          btn.className += "bg-[#4cd7f6] text-[#0B0F17]";
        } else {
          btn.className += "bg-[#8B5CF6] text-[#F8FAFC]";
        }
      } else {
        // Inactive button styles
        btn.className = "px-4 py-1.5 rounded-full text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-all duration-150 cursor-pointer";
      }
    });

    // Show/hide sections with transitions
    sections.forEach((section) => {
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
  Object.keys(buttons).forEach((key) => {
    const btn = buttons[key];
    if (btn) {
      btn.addEventListener("click", () => {
        filterCategory(key);
      });
    }
  });

  // Bind header/mobile nav link resets
  const navResetLinks = document.querySelectorAll(".nav-reset-link");
  navResetLinks.forEach((link) => {
    link.addEventListener("click", () => {
      filterCategory("all");
    });
  });

  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu();
      filterCategory("all");
    });
  });
});
