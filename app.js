const seedLaunches = [
  {
    id: "captions",
    company: "Captions",
    founder: "Gaurav Misra",
    stage: "Series A",
    raised: 100000000,
    xLikes: 420,
    linkedinLikes: 1550,
    launchSource: "X",
    launchUrl: "https://x.com/getcaptionsapp/status/1929554635544461727",
    fundraiseSource: "Company announcement / funding database",
    summary: "AI video creation and editing platform for creators and teams.",
    email: "partnerships@captions.ai",
    phone: "+1 415 555 0184",
    linkedin: "https://www.linkedin.com/company/captionsapp/",
    x: "https://x.com/getcaptionsapp"
  },
  {
    id: "creatify",
    company: "Creatify",
    founder: "Team Creatify",
    stage: "Seed",
    raised: 18000000,
    xLikes: 310,
    linkedinLikes: 740,
    launchSource: "X",
    launchUrl: "https://x.com/Creatify_AI/status/1963285168535613554",
    fundraiseSource: "Crunchbase-style database",
    summary: "Generates short-form video ads from product links and campaign prompts.",
    email: "hello@creatify.ai",
    phone: "+1 650 555 0148",
    linkedin: "https://www.linkedin.com/company/creatifyai/",
    x: "https://x.com/Creatify_AI"
  },
  {
    id: "rork",
    company: "Rork",
    founder: "Rork team",
    stage: "Seed",
    raised: 4000000,
    xLikes: 890,
    linkedinLikes: 430,
    launchSource: "X",
    launchUrl: "https://x.com/rork_app/status/1925631069484691934",
    fundraiseSource: "YC directory",
    summary: "AI app builder that turns product ideas into working mobile apps.",
    email: "founders@rork.com",
    phone: "+1 628 555 0109",
    linkedin: "https://www.linkedin.com/company/rork-app/",
    x: "https://x.com/rork_app"
  },
  {
    id: "lovable",
    company: "Lovable",
    founder: "Anton Osika",
    stage: "Growth",
    raised: 228000000,
    xLikes: 6200,
    linkedinLikes: 9600,
    launchSource: "X",
    launchUrl: "https://x.com/lovable_dev/status/1972680165378650391",
    fundraiseSource: "Company announcement / news",
    summary: "AI software engineer for building apps through natural language.",
    email: "hello@lovable.dev",
    phone: "+46 8 555 014 22",
    linkedin: "https://www.linkedin.com/company/lovable-dev/",
    x: "https://x.com/lovable_dev"
  },
  {
    id: "odyssey",
    company: "Odyssey",
    founder: "Oliver Cameron",
    stage: "Series A",
    raised: 27000000,
    xLikes: 460,
    linkedinLikes: 680,
    launchSource: "X",
    launchUrl: "https://x.com/odysseyml/status/1927767196756853179",
    fundraiseSource: "Funding announcement",
    summary: "World-model research company building generative video tooling.",
    email: "contact@odyssey.systems",
    phone: "+1 212 555 0167",
    linkedin: "https://www.linkedin.com/company/odysseyml/",
    x: "https://x.com/odysseyml"
  },
  {
    id: "prime-intellect",
    company: "Prime Intellect",
    founder: "Prime Intellect team",
    stage: "Seed",
    raised: 15500000,
    xLikes: 3900,
    linkedinLikes: 1300,
    launchSource: "X",
    launchUrl: "https://x.com/PrimeIntellect/status/1960783427948699680",
    fundraiseSource: "Company announcement / investors",
    summary: "Decentralized compute and training platform for open AI models.",
    email: "team@primeintellect.ai",
    phone: "+1 917 555 0122",
    linkedin: "https://www.linkedin.com/company/prime-intellect/",
    x: "https://x.com/PrimeIntellect"
  },
  {
    id: "gradient",
    company: "Gradient",
    founder: "Gradient team",
    stage: "Series A",
    raised: 56000000,
    xLikes: 235,
    linkedinLikes: 1120,
    launchSource: "X",
    launchUrl: "https://x.com/gradient_hq/status/2021949473828810844",
    fundraiseSource: "Crunchbase-style database",
    summary: "Enterprise AI agents and model infrastructure for regulated teams.",
    email: "sales@gradient.ai",
    phone: "+1 617 555 0193",
    linkedin: "https://www.linkedin.com/company/gradientai/",
    x: "https://x.com/gradient_hq"
  },
  {
    id: "kuse",
    company: "Kuse",
    founder: "Kuse team",
    stage: "Pre-seed",
    raised: 2200000,
    xLikes: 145,
    linkedinLikes: 280,
    launchSource: "X",
    launchUrl: "https://x.com/kuseHQ/status/1956362632849686979",
    fundraiseSource: "YC directory",
    summary: "Research workspace for collecting, reasoning over, and shipping AI-assisted work.",
    email: "founders@kuse.ai",
    phone: "+1 415 555 0118",
    linkedin: "https://www.linkedin.com/company/kusehq/",
    x: "https://x.com/kuseHQ"
  }
];

const state = {
  launches: [...seedLaunches],
  selectedId: "",
  threshold: 500,
  tone: "warm"
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1
});

const integer = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0
});

const els = {
  totalRaised: document.querySelector("#totalRaised"),
  avgXLikes: document.querySelector("#avgXLikes"),
  weakLaunches: document.querySelector("#weakLaunches"),
  enrichedContacts: document.querySelector("#enrichedContacts"),
  launchTable: document.querySelector("#launchTable"),
  companyDetail: document.querySelector("#companyDetail"),
  resultCount: document.querySelector("#resultCount"),
  searchInput: document.querySelector("#searchInput"),
  stageFilter: document.querySelector("#stageFilter"),
  thresholdInput: document.querySelector("#thresholdInput"),
  sortSelect: document.querySelector("#sortSelect"),
  toneSelect: document.querySelector("#toneSelect"),
  dmCompanySelect: document.querySelector("#dmCompanySelect"),
  dmDraft: document.querySelector("#dmDraft"),
  copyDmButton: document.querySelector("#copyDmButton"),
  csvInput: document.querySelector("#csvInput"),
  exportButton: document.querySelector("#exportButton")
};

function formatMoney(value) {
  return money.format(value);
}

function engagementTotal(launch) {
  return Number(launch.xLikes || 0) + Number(launch.linkedinLikes || 0);
}

function opportunityScore(launch) {
  const fundingWeight = Math.log10(Math.max(Number(launch.raised), 1));
  const engagementPenalty = Math.log10(Math.max(engagementTotal(launch), 10));
  return Math.max(1, Math.round((fundingWeight / engagementPenalty) * 18));
}

function isEnriched(launch) {
  return Boolean(launch.email && launch.phone && launch.linkedin && launch.x);
}

function visibleLaunches() {
  const search = els.searchInput.value.trim().toLowerCase();
  const stage = els.stageFilter.value;
  const sort = els.sortSelect.value;

  return state.launches
    .filter((launch) => {
      const haystack = [
        launch.company,
        launch.founder,
        launch.stage,
        launch.launchSource,
        launch.fundraiseSource,
        launch.summary
      ].join(" ").toLowerCase();
      return (!search || haystack.includes(search)) && (stage === "all" || launch.stage === stage);
    })
    .sort((a, b) => {
      if (sort === "raised") return b.raised - a.raised;
      if (sort === "xLikes") return b.xLikes - a.xLikes;
      if (sort === "linkedinLikes") return b.linkedinLikes - a.linkedinLikes;
      return opportunityScore(b) - opportunityScore(a);
    });
}

function renderMetrics(launches) {
  const totalRaised = launches.reduce((sum, launch) => sum + Number(launch.raised || 0), 0);
  const avgXLikes = launches.length
    ? launches.reduce((sum, launch) => sum + Number(launch.xLikes || 0), 0) / launches.length
    : 0;
  const weakLaunches = launches.filter((launch) => Number(launch.xLikes || 0) < state.threshold).length;
  const enriched = launches.length
    ? (launches.filter(isEnriched).length / launches.length) * 100
    : 0;

  els.totalRaised.textContent = formatMoney(totalRaised);
  els.avgXLikes.textContent = integer.format(avgXLikes);
  els.weakLaunches.textContent = integer.format(weakLaunches);
  els.enrichedContacts.textContent = `${Math.round(enriched)}%`;
  els.resultCount.textContent = `${launches.length} result${launches.length === 1 ? "" : "s"}`;
}

function renderTable(launches) {
  els.launchTable.innerHTML = launches
    .map((launch) => {
      const weak = Number(launch.xLikes || 0) < state.threshold;
      return `
        <tr data-id="${launch.id}" class="${launch.id === state.selectedId ? "selected" : ""}">
          <td>
            <div class="company-cell">
              <div class="logo" aria-hidden="true">${launch.company.slice(0, 2).toUpperCase()}</div>
              <div>
                <strong>${launch.company}</strong>
                <small>${launch.founder}</small>
              </div>
            </div>
          </td>
          <td><strong>${formatMoney(Number(launch.raised || 0))}</strong></td>
          <td>${integer.format(Number(launch.xLikes || 0))}</td>
          <td>${integer.format(Number(launch.linkedinLikes || 0))}</td>
          <td>${launch.stage}</td>
          <td>
            <span class="status-pill ${weak ? "weak" : "good"}">${weak ? "Weak" : "Good"}</span>
            <span class="score-pill">${opportunityScore(launch)} fit</span>
          </td>
        </tr>
      `;
    })
    .join("");

  els.launchTable.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedId = row.dataset.id;
      render();
    });
  });
}

function renderDetail(launches) {
  const selected = state.launches.find((launch) => launch.id === state.selectedId) || launches[0] || state.launches[0];
  if (!selected) return;

  els.companyDetail.innerHTML = `
    <div class="detail-hero">
      <div class="video-card">
        <div class="play-symbol" aria-hidden="true"></div>
        <div>
          <p class="eyebrow">Launch video</p>
          <h3>${selected.company}</h3>
        </div>
      </div>
      <div class="detail-stack">
        <div class="info-row"><span>Founder</span><strong>${selected.founder}</strong></div>
        <div class="info-row"><span>Amount raised</span><strong>${formatMoney(Number(selected.raised || 0))}</strong></div>
        <div class="info-row"><span>Engagement</span><strong>${integer.format(engagementTotal(selected))} total likes</strong></div>
        <div class="info-row"><span>Source</span><a href="${selected.launchUrl}" target="_blank" rel="noreferrer">${selected.launchSource} launch post</a></div>
      </div>
      <p class="subtle">${selected.summary}</p>
      <div class="contact-box">
        <p class="panel-title">Enriched contact methods</p>
        <div><strong>Email:</strong> <a href="mailto:${selected.email}">${selected.email}</a></div>
        <div><strong>Phone:</strong> <a href="tel:${selected.phone}">${selected.phone}</a></div>
        <div><strong>LinkedIn:</strong> <a href="${selected.linkedin}" target="_blank" rel="noreferrer">${selected.linkedin}</a></div>
        <div><strong>X:</strong> <a href="${selected.x}" target="_blank" rel="noreferrer">${selected.x}</a></div>
      </div>
    </div>
  `;
}

function draftDm(launch) {
  const raised = formatMoney(Number(launch.raised || 0));
  const xLikes = integer.format(Number(launch.xLikes || 0));
  const linkedinLikes = integer.format(Number(launch.linkedinLikes || 0));
  const isTeamContact = /\bteam\b/i.test(launch.founder);
  const firstName = isTeamContact ? `${launch.company} team` : launch.founder.split(" ")[0] || "there";

  const drafts = {
    warm: `Hi ${firstName}, congrats on ${launch.company}'s launch and the ${raised} raised. I noticed the launch post is at ${xLikes} X likes and ${linkedinLikes} LinkedIn likes, which feels low relative to the funding/news value.\n\nI build AI workflows that identify high-intent launch audiences, rewrite social hooks, and generate founder-led follow-up DMs. Happy to send over 3 concrete experiments for ${launch.company} if useful.`,
    direct: `Hi ${firstName}, ${launch.company} has strong funding traction (${raised}) but the launch engagement looks underleveraged: ${xLikes} X likes and ${linkedinLikes} LinkedIn likes.\n\nI can help turn the launch into a targeted outbound campaign: audience scraping, ICP scoring, personalized DMs, and revised post angles. Worth a quick look?`,
    technical: `Hi ${firstName}, I mapped ${launch.company}'s launch signal and saw a gap between capital raised (${raised}) and social response (${xLikes} X likes, ${linkedinLikes} LinkedIn likes).\n\nI can prototype an AI pipeline that clusters engaged users, enriches accounts, scores buyer fit, and drafts personalized follow-ups from the launch transcript. I can share the workflow if helpful.`
  };

  return drafts[state.tone];
}

function renderDmOptions(launches) {
  const weak = launches.filter((launch) => Number(launch.xLikes || 0) < state.threshold);
  const options = weak.length ? weak : launches;
  els.dmCompanySelect.innerHTML = options
    .map((launch) => `<option value="${launch.id}">${launch.company}</option>`)
    .join("");

  if (!options.some((launch) => launch.id === els.dmCompanySelect.value)) {
    els.dmCompanySelect.value = options[0]?.id || "";
  }

  const selected = state.launches.find((launch) => launch.id === els.dmCompanySelect.value) || options[0];
  els.dmDraft.value = selected ? draftDm(selected) : "";
}

function render() {
  const launches = visibleLaunches();
  if (!launches.some((launch) => launch.id === state.selectedId) && launches[0]) {
    state.selectedId = launches[0].id;
  }
  renderMetrics(launches);
  renderTable(launches);
  renderDetail(launches);
  renderDmOptions(launches);
}

function parseCsv(text) {
  const rows = text.trim().split(/\r?\n/).map((line) => line.split(",").map((cell) => cell.trim()));
  const headers = rows.shift().map((header) => header.toLowerCase());
  return rows.map((row, index) => {
    const record = Object.fromEntries(headers.map((header, columnIndex) => [header, row[columnIndex] || ""]));
    const company = record.company || `Imported ${index + 1}`;
    return {
      id: `${company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}-${index}`,
      company,
      founder: record.founder || "Unknown founder",
      stage: record.stage || "Seed",
      raised: Number(record.raised || record.amount_raised || 0),
      xLikes: Number(record.xlikes || record.x_likes || 0),
      linkedinLikes: Number(record.linkedinlikes || record.linkedin_likes || 0),
      launchSource: record.launchsource || record.launch_source || "Imported",
      launchUrl: record.launchurl || record.launch_url || "#",
      fundraiseSource: record.fundraisesource || record.fundraise_source || "Imported",
      summary: record.summary || "Imported launch record.",
      email: record.email || "",
      phone: record.phone || "",
      linkedin: record.linkedin || "",
      x: record.x || record.twitter || ""
    };
  });
}

function exportVisible() {
  const headers = [
    "company",
    "founder",
    "stage",
    "raised",
    "xLikes",
    "linkedinLikes",
    "launchUrl",
    "email",
    "phone",
    "linkedin",
    "x",
    "opportunityScore"
  ];

  const csv = [
    headers.join(","),
    ...visibleLaunches().map((launch) =>
      headers.map((header) => {
        const value = header === "opportunityScore" ? opportunityScore(launch) : launch[header];
        return `"${String(value ?? "").replaceAll('"', '""')}"`;
      }).join(",")
    )
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "launch-signal-leads.csv";
  link.click();
  URL.revokeObjectURL(url);
}

[
  els.searchInput,
  els.stageFilter,
  els.sortSelect
].forEach((element) => element.addEventListener("input", render));

els.thresholdInput.addEventListener("input", () => {
  state.threshold = Number(els.thresholdInput.value || 0);
  render();
});

els.toneSelect.addEventListener("input", () => {
  state.tone = els.toneSelect.value;
  render();
});

els.dmCompanySelect.addEventListener("input", () => {
  const selected = state.launches.find((launch) => launch.id === els.dmCompanySelect.value);
  els.dmDraft.value = selected ? draftDm(selected) : "";
});

els.copyDmButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(els.dmDraft.value);
  els.copyDmButton.textContent = "Copied";
  window.setTimeout(() => {
    els.copyDmButton.textContent = "Copy draft";
  }, 1200);
});

els.csvInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  const imported = parseCsv(await file.text());
  state.launches = [...imported, ...state.launches];
  state.selectedId = imported[0]?.id || state.selectedId;
  render();
});

els.exportButton.addEventListener("click", exportVisible);

render();
