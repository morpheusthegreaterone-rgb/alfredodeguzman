/*
  EDITING GUIDE:
  1. Put certificate PDFs in the "certificates" folder.
  2. Add each certificate to the array below.
  3. Use one of these categories exactly: TESDA, DICT, freeCodeCamp, Cisco, NC Seminar.
  4. Clicking a category card opens ONE large modal with all uploaded PDFs in that category.
*/
const certificates = [
  // ---------- TESDA (5 of 5) ----------
  // TESDA-01 not uploaded yet. Add certificates/TESDA-01-Setting-Up-Computer-Servers.pdf then uncomment:
  //   { title: "Setting Up Computer Servers", organization: "TESDA", category: "TESDA", date: "October 21, 2026", file: "certificates/TESDA-01-Setting-Up-Computer-Servers.pdf", description: "Certificate of completion — TESDA Online Program." },
  { title: "Setting Up Computer Networks", organization: "TESDA", category: "TESDA", date: "October 21, 2026", file: "certificates/TESDA-02-Setting-Up-Computer-Networks.pdf", description: "Certificate of completion — TESDA Online Program." },
  { title: "Maintaining Computer Systems and Networks", organization: "TESDA", category: "TESDA", date: "October 21, 2026", file: "certificates/TESDA-03-Maintaining-Computer-Systems-and-Networks.pdf", description: "Certificate of completion — TESDA Online Program." },
  { title: "Installing and Configuring Computer Systems", organization: "TESDA", category: "TESDA", date: "October 21, 2026", file: "certificates/TESDA-04-Installing-and-Configuring-Computer-Systems.pdf", description: "Certificate of completion — TESDA Online Program." },
  { title: "Introduction to Computer Systems Servicing", organization: "TESDA", category: "TESDA", date: "October 21, 2026", file: "certificates/TESDA-05-Introduction-to-Computer-Systems-Servicing.pdf", description: "Certificate of completion — TESDA Online Program." },

  // ---------- DICT (4 of 4) ----------
  { title: "Agentic Productivity & Collaboration with Gemini for GWS & Gemini Enterprise", organization: "DICT", category: "DICT", date: "September 28, 2026", file: "certificates/DICT-01-Agentic-Productivity-and-Collaboration.pdf", description: "Certificate of participation — Google Cloud / DICT Roadshow 2026." },
  { title: "Tech It to the Next Level: Careers in Emerging Technologies", organization: "DICT Palawan", category: "DICT", date: "July 9, 2026", file: "certificates/DICT-02-Tech-It-to-the-Next-Level.pdf", description: "Certificate of participation for a training held via Zoom." },
  { title: "Principles of Web Development and Introduction to HTML", organization: "DICT Digital Workforce Hub", category: "DICT", date: "October 24, 2026", file: "certificates/dict3.pdf", description: "Certificate of completion — 8-hour training." },
  { title: "Cyber Tanaw: Emerging Cyber Threats and Technologies", organization: "DICT Region 02", category: "DICT", date: "October 9, 2026", file: "certificates/dict4.jpg", description: "Certificate of participation — Cybersecurity Month 2026 webinar-training via Zoom." },

  // ---------- freeCodeCamp (1 of 1) ----------
  { title: "Foundational C# with Microsoft", organization: "freeCodeCamp", category: "freeCodeCamp", date: "October 24, 2026", file: "certificates/freecodecamp.pdf", description: "Developer certification — freeCodeCamp x Microsoft." },

  // ---------- Cisco (1 of 2) ----------
  { title: "Getting Started with Cisco Packet Tracer", organization: "Cisco Networking Academy", category: "Cisco", date: "October 23, 2026", file: "certificates/cisco1.pdf", description: "Certificate of completion — Cisco Networking Academy." },

  // ---------- NC Seminar (4 of 4) ----------
  { title: "Agentic AI", organization: "Northeastern College", category: "NC Seminar", date: "August 27, 2026", file: "certificates/seminar4.jpg", description: "Seminar and workshop — 10th I.T. Week 2026." },
  { title: "Integrating IoT in Capstone Project", organization: "Northeastern College", category: "NC Seminar", date: "August 27, 2026", file: "certificates/seminar3.jpg", description: "Seminar and workshop — 10th I.T. Week 2026." },
  { title: "Programming Fundamentals", organization: "Northeastern College", category: "NC Seminar", date: "August 27, 2026", file: "certificates/seminar2.jpg", description: "Seminar and workshop — 10th I.T. Week 2026." },
  { title: "Video Editing Tips & Tricks", organization: "Northeastern College", category: "NC Seminar", date: "August 27, 2026", file: "certificates/seminar1.jpg", description: "Seminar and workshop — 10th I.T. Week 2026." }
];

const categories = [
  { name: "TESDA", expected: 5, subtitle: "Technical Education and Skills Development Authority" },
  { name: "DICT", expected: 4, subtitle: "Department of Information and Communications Technology" },
  { name: "freeCodeCamp", expected: 1, subtitle: "Web development and programming" },
  { name: "Cisco", expected: 2, subtitle: "Cisco Networking Academy" },
  { name: "NC Seminar", expected: 4, subtitle: "Seminars and learning events" }
];

const grid = document.getElementById("certificateGrid");
const searchInput = document.getElementById("certificateSearch");
const emptyState = document.getElementById("emptyState");
const visibleCount = document.getElementById("visibleCount");
const modal = document.getElementById("certificateModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const openPdf = document.getElementById("openPdf");
const modalSummary = document.getElementById("modalSummary");

function createCategoryCard(category) {
  const items = certificates.filter(item => item.category === category.name);
  const card = document.createElement("article");
  card.className = "certificate-card category-card";
  const art = document.createElement("div");
  art.className = "certificate-art category-art";
  const org = document.createElement("span");
  org.className = "art-org";
  org.textContent = category.name.toUpperCase();
  const badge = document.createElement("span");
  badge.className = "category-big-count";
  badge.textContent = String(category.expected).padStart(2, "0");
  const documentArt = document.createElement("div");
  documentArt.className = "art-document category-document";
  documentArt.innerHTML = '<div class="art-seal"></div><div class="art-line short"></div><div class="art-line"></div><div class="art-line long"></div><div class="art-line"></div><div class="art-line short"></div>';
  art.append(org, badge, documentArt);
  const info = document.createElement("div");
  info.className = "certificate-info";
  const label = document.createElement("span");
  label.className = "certificate-category";
  label.textContent = `${items.length} uploaded · ${category.expected} expected`;
  const title = document.createElement("h3");
  title.textContent = category.name;
  const description = document.createElement("p");
  description.textContent = category.subtitle;
  const view = document.createElement("button");
  view.className = "view-certificate";
  view.type = "button";
  view.innerHTML = `<span>View ${category.name} Certificates</span><span aria-hidden="true">↗</span>`;
  view.disabled = items.length === 0;
  if (!items.length) view.title = "Upload certificates in this category to enable the preview.";
  view.addEventListener("click", () => showCertificateCollection(category, items));
  info.append(label, title, description, view);
  card.append(art, info);
  return card;
}

function renderCertificates() {
  const term = searchInput.value.trim().toLowerCase();
  const matchingCategories = categories.filter(category => {
    const items = certificates.filter(item => item.category === category.name);
    const categoryText = [category.name, category.subtitle, ...items.flatMap(item => [item.title, item.organization, item.date, item.description])].join(" ").toLowerCase();
    return categoryText.includes(term);
  });
  grid.replaceChildren();
  matchingCategories.forEach(category => grid.appendChild(createCategoryCard(category)));
  visibleCount.textContent = certificates.length;
  emptyState.hidden = matchingCategories.length !== 0;
  grid.hidden = matchingCategories.length === 0;
}

function showCertificateCollection(category, items) {
  modalTitle.textContent = `${category.name} Certificates`;
  modalBody.replaceChildren();
  if (!items.length) {
    const message = document.createElement("p");
    message.className = "modal-empty-message";
    message.textContent = `No ${category.name} certificate PDFs have been uploaded yet. Add the files to the certificates folder and register them in script.js.`;
    modalBody.append(message);
    openPdf.href = "#";
    openPdf.style.display = "none";
  } else {
    openPdf.style.display = "inline";
    openPdf.href = items[0].file;
    items.forEach((item, index) => {
      const itemWrap = document.createElement("section");
      itemWrap.className = "modal-certificate-item";
      const heading = document.createElement("div");
      heading.className = "modal-certificate-heading";
      const title = document.createElement("h3");
      title.textContent = `${index + 1}. ${item.title}`;
      const date = document.createElement("span");
      date.textContent = item.date || item.organization;
      heading.append(title, date);
      const isImage = /\.(jpe?g|png|webp|gif)$/i.test(item.file);
      let frame;
      if (isImage) {
        frame = document.createElement("img");
        frame.alt = item.title;
        frame.src = item.file;
        frame.className = "modal-cert-image";
      } else {
        frame = document.createElement("iframe");
        frame.title = item.title;
        frame.src = item.file + "#toolbar=1&navpanes=0&view=FitH";
      }
      frame.loading = "lazy";
      const fallback = document.createElement("a");
      fallback.className = "modal-pdf-link";
      fallback.href = item.file;
      fallback.target = "_blank";
      fallback.rel = "noopener";
      fallback.textContent = "Not showing? Open this certificate in a new tab ↗";
      itemWrap.append(heading, frame, fallback);
      modalBody.append(itemWrap);
    });
  }
  modalSummary.textContent = `${items.length} uploaded certificate${items.length === 1 ? "" : "s"} shown in this modal. ${items.length < category.expected ? `${category.expected - items.length} more expected file(s) can be added later.` : ""}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeCertificate() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalBody.replaceChildren();
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", renderCertificates);
document.getElementById("clearSearch").addEventListener("click", () => { searchInput.value = ""; renderCertificates(); });
document.getElementById("modalClose").addEventListener("click", closeCertificate);
modal.querySelectorAll("[data-close-modal]").forEach(element => element.addEventListener("click", closeCertificate));
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeCertificate(); });
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => { navbar.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
document.querySelectorAll("[data-placeholder-link]").forEach(link => link.addEventListener("click", event => { event.preventDefault(); alert("Replace this sample link with your real social profile URL in index.html."); }));
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
  }), { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => observer.observe(section));
}
document.getElementById("year").textContent = new Date().getFullYear();
renderCertificates();



/* Resume viewer */
const resumeModal = document.getElementById("resumeModal");
const resumeFrame = document.getElementById("resumeFrame");
const resumeModalTitle = document.getElementById("resumeModalTitle");

function openResume(file, title) {
  resumeModalTitle.textContent = title;
  resumeFrame.src = file + "#toolbar=1&navpanes=0&view=FitH";
  resumeModal.classList.add("open");
  resumeModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeResume() {
  resumeModal.classList.remove("open");
  resumeModal.setAttribute("aria-hidden", "true");
  resumeFrame.src = "about:blank";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-resume-view]").forEach(button => {
  button.addEventListener("click", () =>
    openResume(button.dataset.resumeView, button.dataset.title));
});
document.getElementById("resumeClose").addEventListener("click", closeResume);
document.querySelector("[data-close-resume]").addEventListener("click", closeResume);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && resumeModal.classList.contains("open")) closeResume();
});
