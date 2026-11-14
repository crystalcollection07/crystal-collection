const categories = [
  {
    name: "Bracelets",
    description: "Layered crystal bracelets with refined colour stories and everyday elegance.",
    glow: "linear-gradient(135deg, rgba(241, 170, 197, 0.68), rgba(152, 206, 228, 0.18))",
    links: [
      { label: "Health Bracelets", href: "categories.html?subcategory=Health%20Bracelets" },
      { label: "Zodiac Bracelets", href: "categories.html?subcategory=Zodiac%20Bracelets" },
      { label: "Gemstone Bracelets", href: "categories.html?subcategory=Gemstone%20Bracelets" }
    ]
  },
  {
    name: "Gemstones",
    description: "Polished stones and statement crystals presented with vibrant detail.",
    glow: "linear-gradient(135deg, rgba(98, 196, 207, 0.68), rgba(255, 213, 168, 0.15))",
    links: [{ label: "View Products", href: "categories.html?category=Gemstones" }]
  },
  {
    name: "Gem Trees",
    description: "Decorative crystal trees crafted to bring movement, texture, and colour.",
    glow: "linear-gradient(135deg, rgba(145, 214, 182, 0.72), rgba(120, 168, 214, 0.18))",
    links: [{ label: "View Products", href: "categories.html?category=Gem%20Trees" }]
  },
  {
    name: "Pyramids",
    description: "Geometric crystal forms with a sculptural presence and premium finish.",
    glow: "linear-gradient(135deg, rgba(241, 190, 104, 0.72), rgba(208, 123, 181, 0.18))",
    links: [{ label: "View Products", href: "categories.html?category=Pyramids" }]
  },
  {
    name: "Crystal Balls",
    description: "Highly polished spheres with luminous colour and striking symmetry.",
    glow: "linear-gradient(135deg, rgba(133, 205, 243, 0.7), rgba(255, 193, 223, 0.18))",
    links: [{ label: "View Products", href: "categories.html?category=Crystal%20Balls" }]
  },
  {
    name: "Navratna Sets",
    description: "Balanced gemstone assortments arranged with ceremonial beauty.",
    glow: "linear-gradient(135deg, rgba(254, 202, 88, 0.75), rgba(120, 132, 224, 0.2))",
    links: [{ label: "View Products", href: "categories.html?category=Navratna%20Sets" }]
  },
  {
    name: "Vastu Items",
    description: "Curated vastu-focused crystal pieces designed for harmonious interiors.",
    glow: "linear-gradient(135deg, rgba(178, 140, 224, 0.72), rgba(241, 200, 137, 0.18))",
    links: [{ label: "View Products", href: "categories.html?category=Vastu%20Items" }]
  }
];

const products = [
  {
    name: "Rose Quartz Harmony Bracelet",
    category: "Bracelets",
    subcategory: "Gemstone Bracelets",
    toneA: "#ffd2e1",
    toneB: "#f4a3c0",
    toneC: "#f8c88a",
    description: "Soft rose gemstone beads with a delicate glow, suited to a refined everyday stack."
  },
  {
    name: "Green Aventurine Balance Bracelet",
    category: "Bracelets",
    subcategory: "Gemstone Bracelets",
    toneA: "#c5f3dd",
    toneB: "#6ac29b",
    toneC: "#94d2bd",
    description: "A fresh green bracelet with natural-looking depth and a polished, premium presentation."
  },
  {
    name: "Aurora Amethyst Cluster",
    category: "Gemstones",
    toneA: "#d6c0ff",
    toneB: "#9c7be8",
    toneC: "#f9d5ff",
    description: "A vivid amethyst-inspired cluster artwork with crystalline peaks and a luminous violet palette."
  },
  {
    name: "Sunlit Citrine Stone",
    category: "Gemstones",
    toneA: "#ffe59a",
    toneB: "#f1ae45",
    toneC: "#ffd6a5",
    description: "Golden citrine tones with a soft glazed finish, styled to feel bright and uplifting."
  },
  {
    name: "Rainbow Chakra Gem Tree",
    category: "Gem Trees",
    toneA: "#ffc6ff",
    toneB: "#72d6c9",
    toneC: "#ffcf56",
    description: "A gem tree composition with multicolour leaves and a sculptural trunk for decorative display."
  },
  {
    name: "Green Flourish Gem Tree",
    category: "Gem Trees",
    toneA: "#d9f7be",
    toneB: "#73c68a",
    toneC: "#92b4f4",
    description: "A cool green palette arranged in a premium gem tree silhouette with airy branching detail."
  },
  {
    name: "Rose Glow Pyramid",
    category: "Pyramids",
    toneA: "#ffd0e0",
    toneB: "#f290b4",
    toneC: "#ffedc2",
    description: "A faceted pyramid illustration with warm rose tones and a soft reflective sheen."
  },
  {
    name: "Ocean Prism Pyramid",
    category: "Pyramids",
    toneA: "#b7ecff",
    toneB: "#63b4d9",
    toneC: "#7fd9c0",
    description: "A cool aqua pyramid form with glassy gradients and a clean geometric presence."
  },
  {
    name: "Moonlight Crystal Ball",
    category: "Crystal Balls",
    toneA: "#d8e8ff",
    toneB: "#8eb2ff",
    toneC: "#ffffff",
    description: "A polished crystal ball with luminous blue highlights and a clean reflective finish."
  },
  {
    name: "Blush Aura Crystal Ball",
    category: "Crystal Balls",
    toneA: "#ffd8ef",
    toneB: "#f19ac1",
    toneC: "#fff2c7",
    description: "A blush-toned sphere that feels soft, airy, and premium in a minimalist setting."
  },
  {
    name: "Classic Navratna Set",
    category: "Navratna Sets",
    toneA: "#ffafcc",
    toneB: "#f9c74f",
    toneC: "#90dbf4",
    description: "A nine-stone inspired arrangement with vibrant gemstone hues and ceremonial balance."
  },
  {
    name: "Temple Navratna Set",
    category: "Navratna Sets",
    toneA: "#ffd166",
    toneB: "#ef476f",
    toneC: "#118ab2",
    description: "A richer gemstone composition with jewel-toned contrast and a premium presentation."
  },
  {
    name: "Lotus Energy Grid",
    category: "Vastu Items",
    toneA: "#f9d8a7",
    toneB: "#f4978e",
    toneC: "#9dd9d2",
    description: "A vastu-inspired lotus layout with layered crystal petals and a calm decorative look."
  },
  {
    name: "Harmony Tortoise Crystal",
    category: "Vastu Items",
    toneA: "#c3f0ca",
    toneB: "#76c893",
    toneC: "#f4d35e",
    description: "A symbolic vastu artwork with rounded gemstone accents and an elegant tabletop feel."
  }
];

const zodiacBracelets = [
  {
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    toneA: "#ef6f61",
    toneB: "#f4b860",
    note: "Often associated with courage, confidence, and fresh beginnings."
  },
  {
    name: "Taurus",
    dates: "Apr 20 - May 20",
    element: "Earth",
    toneA: "#6f9f76",
    toneB: "#d8b56d",
    note: "Often associated with grounding, patience, and steady comfort."
  },
  {
    name: "Gemini",
    dates: "May 21 - Jun 20",
    element: "Air",
    toneA: "#f2c94c",
    toneB: "#7fc8e8",
    note: "Often associated with communication, curiosity, and lightness."
  },
  {
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    toneA: "#b9d7ea",
    toneB: "#f7d6e0",
    note: "Often associated with care, intuition, and emotional softness."
  },
  {
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    toneA: "#f28c38",
    toneB: "#f7cf52",
    note: "Often associated with warmth, expression, and joyful presence."
  },
  {
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    toneA: "#7aa874",
    toneB: "#e5d8bd",
    note: "Often associated with clarity, care, and thoughtful balance."
  },
  {
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    toneA: "#e8b4c8",
    toneB: "#a7c7e7",
    note: "Often associated with harmony, beauty, and peaceful connection."
  },
  {
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    toneA: "#6d3a4d",
    toneB: "#b85c70",
    note: "Often associated with depth, protection, and inner strength."
  },
  {
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    toneA: "#8f6ed5",
    toneB: "#f4a261",
    note: "Often associated with optimism, freedom, and open perspective."
  },
  {
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    toneA: "#5f6f52",
    toneB: "#b7a77b",
    note: "Often associated with discipline, stability, and long-term focus."
  },
  {
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    toneA: "#5aa9e6",
    toneB: "#9bdde5",
    note: "Often associated with originality, openness, and calm insight."
  },
  {
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    toneA: "#8ecae6",
    toneB: "#c9a8e8",
    note: "Often associated with compassion, imagination, and gentle flow."
  }
].map((zodiac) => {
  const slug = zodiac.name.toLowerCase();

  return {
    ...zodiac,
    slug,
    cardImage: `assets/zodiac/${zodiac.name}.jpg`
  };
});

const gemstoneBracelets = [
  ["Amethyst", "Amethyst.jpg"],
  ["Aquamarine", "Aquamarine.jpg"],
  ["Basalt", "BASALT.jpg"],
  ["Black Obsidian", "BLACK OBSEDIAN.jpg"],
  ["Black Sulemani", "BLACK SULEMANI.jpg"],
  ["Calcite", "CALCITE.jpg"],
  ["Carnelian", "CARNELIAN.jpg"],
  ["Chrysocolla", "Chrysocolla.jpg"],
  ["Citrine", "CITRINE.jpg"],
  ["Crystal", "Crystal.jpg"],
  ["Dalmatian Stone", "DALMATION.jpg"],
  ["Evil Eye", "Evil Eye .jpg"],
  ["Fluorite", "FLORITE.jpg"],
  ["Green Aventurine", "GREEN AVENTURINE.jpg"],
  ["Hematite", "hematite.jpg"],
  ["Howlite", "HOWLITE.jpg"],
  ["Larvikite", "LARVIKITE.jpg"],
  ["Lava Stone", "LAVA.jpg"],
  ["Magnet Stone", "Magnet.jpg"],
  ["Mahogany Obsidian", "mahogany.jpg"],
  ["Pyrite", "PYRITE.jpg"],
  ["Red Jasper", "RED JASPER.jpg"],
  ["Red Onyx", "RED ONYX.jpg"],
  ["Red Sulemani", "RED SULEMANI.jpg"],
  ["Rhodonite", "Rhodonite.jpg"],
  ["Rose Quartz", "ROSE QUARTZ.jpg"],
  ["Ruby Zoisite", "RUBY ZOZITE.jpg"],
  ["Serpentine", "SERPENTINE.jpg"],
  ["Seven Chakra & Lava", "seven chakra LARVA.jpg"],
  ["Seven Chakra", "seven chakra.jpg"],
  ["Sodalite", "SODALITE.jpg"],
  ["Tiger", "TIGER.jpg"],
  ["Triple Protection", "TRIPLE PROTECTION.jpg"],
  ["Wealth Creator", "WEALTH CREATOR.jpg"]
].map(([name, filename]) => ({
  name,
  filename,
  image: `assets/gemstone-cards/${filename}`,
  description: `${name} gemstone bracelet. Explore the card image for its traditional crystal associations and intended positive qualities.`
}));

const healthBracelets = [
  "Career Success",
  "Fertility",
  "Sugar Control",
  "Student Success",
  "Thyroid",
  "Back Pain",
  "Weight Loss",
  "Blood Pressure"
];

function setupPageTransition() {
  window.addEventListener("load", () => {
    document.body.classList.add("page-ready");
  });

  document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || link.target === "_blank" || event.metaKey || event.ctrlKey) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = href;
      }, 220);
    });
  });
}

function setupHeaderBehavior() {
  const header = document.querySelector("[data-header]");
  if (!header) {
    return;
  }

  function updateHeader() {
    const atTop = window.scrollY <= 20;
    header.classList.toggle("is-visible", atTop);
    header.classList.toggle("is-hidden", !atTop);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-shown");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

function renderCategories() {
  const grid = document.querySelector("[data-category-grid]");
  if (!grid) {
    return;
  }

  const activeFilter = getProductFilters();
  const backLink = document.querySelector("[data-back-link]");
  if (backLink) {
    backLink.hidden = activeFilter.type === "all";
  }

  if (activeFilter.type !== "all") {
    grid.hidden = true;
    return;
  }

  grid.hidden = false;
  grid.innerHTML = categories
    .map(
      (category) => `
        <article class="category-card reveal">
          <div class="category-glow" style="background:${category.glow}"></div>
          <h2>${category.name}</h2>
          <p>${category.description}</p>
          <div class="card-actions">
            ${category.links
              .map((link) => `<a class="pill-link" href="${link.href}">${link.label}</a>`)
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function updateCatalogueHeading(activeFilter) {
  const heading = document.querySelector(".catalogue-heading");
  if (!heading) {
    return;
  }

  const title = heading.querySelector("h2");
  const copy = heading.querySelector("p:last-child");

  if (activeFilter.type === "subcategory" && activeFilter.value === "Zodiac Bracelets") {
    title.textContent = "Zodiac bracelets";
    copy.textContent =
      "Browse all 12 zodiac bracelet cards in a uniform catalogue grid. Select any sign to open its card and crystal note in a larger readable window.";
    return;
  }

  if (activeFilter.type === "subcategory" && activeFilter.value === "Gemstone Bracelets") {
    title.textContent = "Gemstone bracelets";
    copy.textContent =
      "Browse the gemstone bracelet cards below and select any piece to open a larger readable preview.";
    return;
  }

  if (activeFilter.type === "subcategory" && activeFilter.value === "Health Bracelets") {
    title.textContent = "Health bracelets";
    copy.textContent =
      "Browse the health bracelet categories below. Product images will be added as they become available.";
    return;
  }

  if (activeFilter.type !== "all") {
    title.textContent = activeFilter.value;
    copy.textContent =
      "Browse the selected catalogue items and open any piece for a short description.";
    return;
  }

  title.textContent = "Products inside the catalogue";
  copy.textContent =
    "Filter by category or bracelet subcategory and open any piece for a larger view with a short description.";
}

function getProductFilters() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const subcategory = params.get("subcategory");

  if (subcategory) {
    return { type: "subcategory", value: subcategory };
  }

  if (category) {
    return { type: "category", value: category };
  }

  return { type: "all", value: "All" };
}

function renderProductFilters(activeFilter) {
  const strip = document.querySelector("[data-filter-strip]");
  if (!strip) {
    return;
  }

  const filterItems = [
    { label: "All", type: "all", value: "All" },
    ...categories.map((category) => ({
      label: category.name,
      type: "category",
      value: category.name
    })),
    { label: "Health Bracelets", type: "subcategory", value: "Health Bracelets" },
    { label: "Zodiac Bracelets", type: "subcategory", value: "Zodiac Bracelets" },
    { label: "Gemstone Bracelets", type: "subcategory", value: "Gemstone Bracelets" }
  ];

  strip.innerHTML = filterItems
    .map((filter) => {
      const isActive =
        filter.type === activeFilter.type && filter.value === activeFilter.value;

      return `<button class="filter-chip ${isActive ? "is-active" : ""}" type="button" data-filter-type="${filter.type}" data-filter-value="${filter.value}">${filter.label}</button>`;
    })
    .join("");

  strip.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-chip");
    if (!button) {
      return;
    }

    const type = button.dataset.filterType;
    const value = button.dataset.filterValue;
    const params = new URLSearchParams();

    if (type === "category") {
      params.set("category", value);
    } else if (type === "subcategory") {
      params.set("subcategory", value);
    }

    const url = params.toString() ? `categories.html?${params.toString()}` : "categories.html";
    document.body.classList.add("page-leaving");
    window.setTimeout(() => {
      window.location.href = url;
    }, 180);
  });
}

function filterProducts(activeFilter) {
  if (activeFilter.type === "category") {
    return products.filter((product) => product.category === activeFilter.value);
  }

  if (activeFilter.type === "subcategory") {
    return products.filter((product) => product.subcategory === activeFilter.value);
  }

  return products;
}

function renderProducts() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) {
    return;
  }

  const activeFilter = getProductFilters();
  renderProductFilters(activeFilter);
  updateCatalogueHeading(activeFilter);

  if (activeFilter.type === "subcategory" && activeFilter.value === "Zodiac Bracelets") {
    renderZodiacBracelets(grid);
    return;
  }

  if (activeFilter.type === "subcategory" && activeFilter.value === "Gemstone Bracelets") {
    renderGemstoneBracelets(grid);
    return;
  }

  if (activeFilter.type === "subcategory" && activeFilter.value === "Health Bracelets") {
    renderHealthBracelets(grid);
    return;
  }

  const filteredProducts = filterProducts(activeFilter);

  grid.innerHTML = filteredProducts
    .map(
      (product, index) => `
        <article class="product-card reveal" style="transition-delay:${Math.min(index * 45, 260)}ms">
          <button class="product-button" type="button" data-product-name="${product.name}">
            <div class="product-accent" style="background:linear-gradient(135deg, ${product.toneA}, ${product.toneB} 58%, ${product.toneC});"></div>
            <div class="product-media">
              <div class="product-surface" style="--card-gradient: linear-gradient(135deg, ${product.toneA}, ${product.toneB} 58%, ${product.toneC});"></div>
              <div class="product-media-text">${product.category}</div>
            </div>
            <div class="product-copy">
              <h3>${product.name}</h3>
              <p>${product.subcategory || product.category}</p>
            </div>
          </button>
        </article>
      `
    )
    .join("");
}

function imagePreview(source, label) {
  return `
    <div class="zodiac-image-frame">
      <img src="${source}" alt="${label}" loading="lazy" />
      <span>${label}</span>
    </div>
  `;
}

function renderZodiacBracelets(grid) {
  grid.className = "gemstone-grid zodiac-grid";
  grid.innerHTML = zodiacBracelets
    .map(
      (zodiac, index) => `
        <article class="gemstone-card zodiac-card reveal" style="--zodiac-a:${zodiac.toneA}; --zodiac-b:${zodiac.toneB}; transition-delay:${Math.min(index * 25, 260)}ms">
          <button class="gemstone-button" type="button" data-zodiac-toggle="${zodiac.slug}" aria-label="Open ${zodiac.name} zodiac bracelet">
            <div class="gemstone-image-wrap">
              <img src="${zodiac.cardImage}" alt="${zodiac.name} zodiac bracelet card" loading="lazy" />
            </div>
            <h3>${zodiac.name}</h3>
            <span>${zodiac.element} sign | ${zodiac.dates}</span>
          </button>
        </article>
      `
    )
    .join("");

  setupZodiacExpansion(grid);
}

function setupZodiacImages(scope) {
  scope.querySelectorAll(".zodiac-image-frame img").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest(".zodiac-image-frame").classList.add("is-missing");
      image.remove();
    });
  });

}

function setupZodiacExpansion(scope) {
  scope.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-zodiac-toggle]");
    if (!trigger) {
      return;
    }

    const zodiac = zodiacBracelets.find((item) => item.slug === trigger.dataset.zodiacToggle);
    if (zodiac) {
      openZodiacModal(zodiac, trigger);
    }
  });
}

function renderGemstoneBracelets(grid) {
  grid.className = "gemstone-grid";
  grid.innerHTML = gemstoneBracelets
    .map(
      (stone, index) => `
        <article class="gemstone-card reveal" style="transition-delay:${Math.min(index * 25, 260)}ms">
          <button class="gemstone-button" type="button" data-gemstone-name="${stone.name}">
            <div class="gemstone-image-wrap">
              <img src="${stone.image}" alt="${stone.name} gemstone bracelet" loading="lazy" />
            </div>
            <h3>${stone.name}</h3>
            <span>View bracelet</span>
          </button>
        </article>
      `
    )
    .join("");
}

function renderHealthBracelets(grid) {
  grid.className = "gemstone-grid health-grid";
  grid.innerHTML = healthBracelets
    .map(
      (name, index) => `
        <article class="gemstone-card health-card reveal" style="transition-delay:${Math.min(index * 25, 220)}ms">
          <div class="gemstone-button health-button">
            <div class="gemstone-image-wrap health-image-placeholder" aria-label="Image coming soon">
              <span>Image coming soon</span>
            </div>
            <h3>${name}</h3>
            <span>Health Bracelet</span>
          </div>
        </article>
      `
    )
    .join("");
}

function openZodiacModal(zodiac, trigger) {
  const modal = document.querySelector("[data-modal]");
  if (!modal) {
    return;
  }

  const panel = modal.querySelector(".modal-panel");
  const image = modal.querySelector("[data-modal-image]");
  const title = modal.querySelector("[data-modal-title]");
  const category = modal.querySelector("[data-modal-category]");
  const description = modal.querySelector("[data-modal-description]");

  panel.classList.remove("no-media");
  panel.classList.add("zodiac-modal-panel");
  image.src = zodiac.cardImage;
  image.alt = `${zodiac.name} zodiac bracelet card`;
  image.style.display = "block";
  title.textContent = `${zodiac.name} Zodiac Bracelet`;
  category.textContent = `${zodiac.element} sign | ${zodiac.dates}`;
  description.innerHTML = `<strong>${zodiac.note}</strong>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.dataset.lastTrigger = zodiac.slug;
  modal._lastTrigger = trigger;
}

function setupModal() {
  const modal = document.querySelector("[data-modal]");
  if (!modal) {
    return;
  }

  const image = modal.querySelector("[data-modal-image]");
  const title = modal.querySelector("[data-modal-title]");
  const category = modal.querySelector("[data-modal-category]");
  const description = modal.querySelector("[data-modal-description]");
  let lastTrigger = null;

  function openModal(product, trigger) {
    image.removeAttribute("src");
    image.alt = "";
    modal.querySelector(".modal-panel").classList.remove("zodiac-modal-panel");
    modal.querySelector(".modal-panel").classList.add("no-media");
    title.textContent = product.name;
    category.textContent = product.subcategory || product.category;
    description.textContent = product.description;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lastTrigger = trigger;
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    const returnTrigger = modal._lastTrigger || lastTrigger;
    if (returnTrigger) {
      returnTrigger.focus();
    }
  }

  document.addEventListener("click", (event) => {
    const gemstoneTrigger = event.target.closest("[data-gemstone-name]");
    if (gemstoneTrigger) {
      const gemstone = gemstoneBracelets.find((item) => item.name === gemstoneTrigger.dataset.gemstoneName);
      if (gemstone) {
        openImageModal(gemstone, gemstoneTrigger);
      }
      return;
    }

    const trigger = event.target.closest("[data-product-name]");
    if (!trigger) {
      return;
    }

    const product = products.find((item) => item.name === trigger.dataset.productName);
    if (product) {
      openModal(product, trigger);
    }
  });

  function openImageModal(item, trigger) {
    const panel = modal.querySelector(".modal-panel");
    panel.classList.remove("no-media");
    panel.classList.remove("zodiac-modal-panel");
    panel.classList.add("zodiac-modal-panel");
    image.src = item.image;
    image.alt = `${item.name} gemstone bracelet card`;
    image.style.display = "block";
    title.textContent = item.name;
    category.textContent = "Gemstone Bracelet";
    description.textContent = item.description;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal._lastTrigger = trigger;
  }

  modal.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function setupEnquiryForm() {
  const form = document.querySelector("[data-enquiry-form]");
  if (!form) {
    return;
  }

  const note = form.querySelector("[data-form-note]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const interest = data.get("interest");

    note.textContent = `Thank you, ${name}. Your enquiry about ${interest} is ready to be shared. You can also continue on WhatsApp for a faster reply.`;
    form.reset();
  });
}

setupPageTransition();
renderCategories();
renderProducts();
setupHeaderBehavior();
setupReveals();
setupModal();
setupEnquiryForm();
