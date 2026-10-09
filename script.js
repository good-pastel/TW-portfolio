const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const caseStudies = {
  reporting: {
    title: 'Technical Reporting & Information Design',
    summary: 'A case-study format for explaining how operational information can be organized into a report that is easier to scan, understand, and act on.',
    sections: [
      ['The challenge', 'Security and operational reporting can contain many metrics, categories, and technical details. Different readers need different levels of detail, and a dense slide can make the key message difficult to find.'],
      ['My approach', 'Start with the audience and the question the report needs to answer. Establish a visual hierarchy, select charts based on the comparison or distribution being communicated, and separate key findings from supporting detail.'],
      ['Contribution areas', 'Report structure and narrative; KPI and chart selection; slide layout and consistency; prioritization of findings; and presentation of follow-up items, depending on the scope of the specific assignment.'],
      ['What this demonstrates', 'Audience-aware communication, visual information hierarchy, technical context, and the ability to turn complex source material into a clear reporting experience.']
    ],
    tags: ['Technical reporting', 'Data visualization', 'PowerPoint', 'Information design'],
    note: 'Professional work may be confidential. No internal screenshots or metrics are included in this preview. Add an approved public sample only if you have permission.'
  },
  documentation: {
    title: 'Cybersecurity Documentation & Operations',
    summary: 'A case study about making technical procedures and operational knowledge consistent, findable, and useful for the teams who rely on them.',
    sections: [
      ['The challenge', 'Operational work often spans multiple platforms, teams, and procedures. Documentation needs to capture the right technical details while remaining practical for its intended readers.'],
      ['My approach', 'Collect source information from technical stakeholders, clarify terminology and sequence, organize content into a consistent structure, and review the result for completeness and usability.'],
      ['Contribution areas', 'SOPs and user guides; troubleshooting documentation; root cause analysis reports; proof-of-concept documentation; inventory and operational reporting; and knowledge-transfer materials.'],
      ['What this demonstrates', 'Technical communication, stakeholder coordination, information architecture, and translating operational context into structured documentation.']
    ],
    tags: ['SOPs & user guides', 'Troubleshooting', 'RCA', 'Knowledge transfer'],
    note: 'This overview describes work categories, not a reproduction of any employer document. Keep platform details and examples at a level approved for public sharing.'
  },
  automation: {
    title: 'Python ETL & Reporting Automation',
    summary: 'A repeatable data workflow that reads source files, validates and transforms records, applies reporting logic, and produces structured outputs.',
    sections: [
      ['The challenge', 'Preparing recurring reports from multiple source files can involve repetitive merging, cleaning, filtering, date handling, and formatting. Manual processing can make a workflow harder to repeat and maintain.'],
      ['My approach', 'Separate configuration, ingestion, transformation, and export responsibilities. Validate expected columns and dates, keep filtering rules explicit, and structure the workflow so the main process can be run consistently.'],
      ['Workflow components', 'Read CSV or ZIP sources; normalize and validate fields; transform records using defined rules; create summaries where required; export structured Excel workbooks; and make errors easier to identify.'],
      ['What this demonstrates', 'Practical Python and Pandas usage, process decomposition, data quality awareness, reporting logic, and the connection between data preparation and technical communication.']
    ],
    tags: ['Python', 'Pandas', 'CSV / ZIP', 'Excel automation'],
    note: 'This is a conceptual description based on the workflow types in the portfolio. Do not add internal source files, business rules, or sample records unless they are safe to publish.'
  }
};

const dialog = document.getElementById('case-dialog');
const dialogContent = document.getElementById('dialog-content');
const closeDialog = document.querySelector('.dialog-close');

function openCase(key) {
  const item = caseStudies[key];
  if (!item || !dialog || !dialogContent) return;
  dialogContent.innerHTML = `
    <div class="dialog-content">
      <h2 id="dialog-title">${item.title}</h2>
      <p class="dialog-summary">${item.summary}</p>
      ${item.sections.map(([heading, body]) => `<section><h3>${heading}</h3><p>${body}</p></section>`).join('')}
      <div class="dialog-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <p class="dialog-note">${item.note}</p>
    </div>`;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

document.querySelectorAll('.case-open').forEach(button => {
  button.addEventListener('click', () => openCase(button.dataset.case));
});
if (closeDialog && dialog) closeDialog.addEventListener('click', () => dialog.close());
if (dialog) {
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const inDialog = rect.top <= event.clientY && event.clientY <= rect.bottom &&
                     rect.left <= event.clientX && event.clientX <= rect.right;
    if (!inDialog) dialog.close();
  });
}

// Highlight the current navigation section as the reader scrolls.
const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(anchor => {
          anchor.classList.toggle('active', anchor.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
