/* ==========================================================
   Balaji Patil — Portfolio JS
   ========================================================== */

// ---------- Data ----------
const PROJECTS = [
  {
    id: "farming",
    category: "Precision Agriculture",
    title: "AI Smart Farming Robo Planner",
    image: "assets/project_farming.png",
    problem: "Farmers waste water, labor, and crops because irrigation, pest control, and field routing decisions are made without real-time data or optimal pathfinding.",
    solution: "An AI-powered platform that plans obstacle-aware robot routes with BFS / DFS / A*, schedules irrigation from soil and weather signals, and recommends pest control actions — all rendered into manager-ready PDF reports.",
    impact: "Supports precision agriculture by improving irrigation planning, crop monitoring, and resource optimization across multi-zone farms.",
    techStack: ["Python", "A* / BFS / DFS", "Matplotlib", "NumPy", "Pandas", "ReportLab"],
    techBullets: [
      "Engineered navigation engines using BFS, DFS, and A* pathfinding to calculate optimal obstacle-avoidance routing on farm terrains.",
      "Designed a Smart Irrigation Scheduler that models crop evapotranspiration from soil moisture, temperature, and crop type.",
      "Built a predictive Pest Control recommendation system and Rain Prediction module from environmental analytics.",
      "Integrated Matplotlib visualization modules to render path routes and farm conditions, outputting automated PDF reports."
    ],
    github: "https://github.com/balajipatil2783/AI-SMART-FARMING-ROBO-PLANNER"
  },
  {
    id: "resume",
    category: "Recruitment Automation",
    title: "Automated Resume Ranking & Suggestion System",
    image: "assets/project_resume.png",
    problem: "Recruiters spend hours manually screening hundreds of resumes per role, and candidates rarely get feedback on why they were rejected.",
    solution: "An NLP pipeline that parses resumes, ranks candidates against a job description using TF-IDF + Cosine Similarity, and auto-generates personalized skill-gap feedback for each applicant.",
    impact: "Reduces recruiter screening effort by an order of magnitude and improves hiring efficiency by surfacing the strongest candidates first.",
    techStack: ["Python", "NLTK", "scikit-learn", "TF-IDF", "Cosine Similarity", "PyPDF2"],
    techBullets: [
      "Used NLP techniques (tokenization, lemmatization, stop-word filtering) to parse unstructured PDF and Word resumes.",
      "Developed a skill-matching parser that extracts candidate expertise and compares it against target job requirements.",
      "Programmed candidate scoring using vector space modeling (TF-IDF + Cosine Similarity) for percentage match scores.",
      "Implemented a recommendation engine that generates automated feedback indicating which technologies are missing."
    ],
    github: "https://github.com/balajipatil2783/Automated-Resume-Ranking-and-Suggestion-System"
  },
  {
    id: "forecasting",
    category: "Predictive Analytics",
    title: "IT Resource Demand Forecasting & Optimization",
    image: "assets/project_forecasting.png",
    problem: "IT teams over- or under-provision servers and engineers because they react to load instead of forecasting it — costing money and SLAs.",
    solution: "A predictive analytics platform that forecasts server utilization and network bandwidth, then optimizes workforce scheduling against the predicted demand curve.",
    impact: "Lets IT managers right-size infrastructure and staffing weeks ahead, turning reactive ops into proactive capacity planning.",
    techStack: ["Python", "Pandas", "scikit-learn", "Time Series", "Matplotlib", "NumPy"],
    techBullets: [
      "Built time-series forecasting models on historical server utilization and bandwidth demand.",
      "Modeled 95% confidence intervals for capacity peaks to drive procurement decisions.",
      "Designed a workforce allocation grid that maps engineer hours to forecasted workload per role.",
      "Visualized historical vs. forecast curves and resource heatmaps for executive dashboards."
    ],
    github: "https://github.com/balajipatil2783/IT-Resource-Demand-Forecasting-Optimization-System"
  }
];

const CERTIFICATES = [
  { id: "algomath",  title: "ALGOMATH Datathon 2026 — Winner", issuer: "KL University Hyderabad",  date: "2026",     image: "assets/cert_algomath.jpg",  cls: "algomath" },
  { id: "modern",    title: "Introduction to Modern AI",       issuer: "Cisco Networking Academy", date: "Apr 2026", image: "assets/cert_modern_ai.png", cls: "modern" },
  { id: "apply",     title: "Apply AI: Analyze Customer Reviews", issuer: "Cisco Networking Academy", date: "Apr 2026", image: "assets/cert_apply_ai.png", cls: "apply" }
];

const SKILLS = [
  "Python","Machine Learning","Artificial Intelligence","Data Analytics",
  "NumPy","Pandas","Data Structures & Algorithms","Object-Oriented Programming",
  "Git","GitHub","Java","HTML","CSS","JavaScript"
];

// ---------- Helpers ----------
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

// ---------- Year ----------
$("#year").textContent = new Date().getFullYear();

// ---------- Mobile nav ----------
const navToggle = $("#navToggle");
const navMobile = $("#navMobile");
navToggle.addEventListener("click", () => {
  const open = navMobile.classList.toggle("open");
  navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
$$("#navMobile a").forEach(a => a.addEventListener("click", () => {
  navMobile.classList.remove("open");
  navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

// ---------- Render projects ----------
$("#projectsGrid").innerHTML = PROJECTS.map(p => `
  <article class="glass-panel project-card reveal" data-project="${p.id}">
    <div class="project-frame">
      <img src="${p.image}" alt="${esc(p.title)}" loading="lazy" decoding="async" />
    </div>
    <p class="section-eyebrow">${esc(p.category)}</p>
    <h3>${esc(p.title)}</h3>
    <div class="mini-blocks">
      <div class="mini-block mini-rose"><p class="label">Problem</p><p class="text">${esc(p.problem)}</p></div>
      <div class="mini-block mini-cyan"><p class="label">Solution</p><p class="text">${esc(p.solution)}</p></div>
      <div class="mini-block mini-emerald"><p class="label">Impact</p><p class="text">${esc(p.impact)}</p></div>
    </div>
    <div class="tech-tags">${p.techStack.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="project-actions">
      <button class="btn-sm ghost js-open-project" data-id="${p.id}"><i class="fa-solid fa-circle-info"></i> Details</button>
      <a class="btn-sm primary glow-btn" href="${p.github}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> View on GitHub</a>
    </div>
  </article>
`).join("");

// ---------- Render skills ----------
$("#skillsGrid").innerHTML = SKILLS.map(s => `
  <div class="skill-chip"><span class="dot"></span><span>${esc(s)}</span></div>
`).join("");

// ---------- Render certificates ----------
$("#certsGrid").innerHTML = CERTIFICATES.map(c => `
  <button class="glass-panel cert-card reveal js-open-cert" data-img="${c.image}" data-title="${esc(c.title)}" aria-label="View ${esc(c.title)}">
    <div class="cert-frame ${c.cls}">
      <div class="cert-inner"><img src="${c.image}" alt="${esc(c.title)}" loading="lazy" decoding="async" /></div>
      <div class="cert-zoom-overlay"><span><i class="fa-solid fa-magnifying-glass-plus"></i> Click to Zoom</span></div>
    </div>
    <div class="cert-meta">
      <div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.issuer)} · ${esc(c.date)}</p>
      </div>
      <i class="fa-solid fa-up-right-from-square"></i>
    </div>
  </button>
`).join("");

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

// ---------- Scroll progress ----------
const bar = $("#scrollProgress");
const onScroll = () => {
  const h = document.documentElement;
  const total = h.scrollHeight - h.clientHeight;
  bar.style.width = (total > 0 ? (h.scrollTop / total) * 100 : 0) + "%";
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Stat counters ----------
const animateCounter = (el) => {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals, 10);
  const duration = 1100;
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toFixed(decimals);
  };
  requestAnimationFrame(tick);
};
const statIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); statIO.unobserve(e.target); }
  });
}, { threshold: 0.4 });
$$(".stat-value").forEach(el => statIO.observe(el));

// ---------- Project modal ----------
const projectModal = $("#projectModal");
const openProject = (id) => {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  projectModal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true">
      <div class="modal-head">
        <div>
          <p class="section-eyebrow">${esc(p.category)}</p>
          <h3>${esc(p.title)}</h3>
        </div>
        <button class="close-btn js-close-modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="modal-img-frame"><img src="${p.image}" alt="${esc(p.title)}" /></div>
      <div class="mini-block mini-rose"><p class="label">Problem</p><p class="text">${esc(p.problem)}</p></div>
      <div style="height:0.75rem"></div>
      <div class="mini-block mini-cyan"><p class="label">Solution</p><p class="text">${esc(p.solution)}</p></div>
      <div style="height:0.75rem"></div>
      <div class="mini-block mini-emerald"><p class="label">Real-World Impact</p><p class="text">${esc(p.impact)}</p></div>
      <div style="margin-top:1.5rem">
        <p class="section-eyebrow" style="margin-bottom:0.75rem">Technical Highlights</p>
        <ul class="modal-bullets">
          ${p.techBullets.map(b => `<li><i class="fa-solid fa-chevron-right"></i><span>${esc(b)}</span></li>`).join("")}
        </ul>
      </div>
      <div style="margin-top:1.5rem">
        <p class="section-eyebrow" style="margin-bottom:0.75rem">Technology Stack</p>
        <div class="tech-tags">${p.techStack.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
      <a class="btn-github" href="${p.github}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> View on GitHub</a>
    </div>
  `;
  projectModal.hidden = false;
  document.body.style.overflow = "hidden";
};
const closeModal = () => { projectModal.hidden = true; projectModal.innerHTML = ""; document.body.style.overflow = ""; };
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest(".js-open-project");
  if (openBtn) openProject(openBtn.dataset.id);
  if (e.target.closest(".js-close-modal") || e.target === projectModal) closeModal();
});

// ---------- Cert lightbox ----------
const certLightbox = $("#certLightbox");
const openCert = (url, title) => {
  certLightbox.innerHTML = `
    <div class="lightbox-inner">
      <div class="lightbox-head">
        <span>${esc(title)}</span>
        <button class="close-btn js-close-cert" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <img class="lightbox-img" src="${url}" alt="${esc(title)}" />
    </div>
  `;
  certLightbox.hidden = false;
  document.body.style.overflow = "hidden";
};
const closeCert = () => { certLightbox.hidden = true; certLightbox.innerHTML = ""; document.body.style.overflow = ""; };
document.addEventListener("click", (e) => {
  const certBtn = e.target.closest(".js-open-cert");
  if (certBtn) openCert(certBtn.dataset.img, certBtn.dataset.title);
  const ach = e.target.closest("[data-lightbox]");
  if (ach) openCert(ach.dataset.lightbox, ach.dataset.title);
  if (e.target.closest(".js-close-cert") || e.target === certLightbox) closeCert();
});

// ESC closes
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeCert(); }
});

// Re-observe newly rendered .reveal elements
$$(".reveal").forEach(el => io.observe(el));

// ---------- Particle background ----------
(() => {
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  const COUNT = 60;
  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  const seed = () => {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(99,102,241,0.45)";
      ctx.fill();
    }
    // connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(6,182,212,${0.12 * (1 - d / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  window.addEventListener("resize", () => { resize(); seed(); });
  resize(); seed(); draw();
})();
