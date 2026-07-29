(function () {
  "use strict";

  var ATTRS = ["Execution", "Craft", "Communication", "Strategy", "Adaptability", "Resilience"];

  var NAV = [
    { id: "overview", label: "Overview", icon: "ic-overview" },
    { id: "people", label: "People", icon: "ic-people" },
    { id: "work", label: "Work", icon: "ic-work" },
    { id: "coaching", label: "Coaching", icon: "ic-coaching" },
    { id: "finance", label: "Finance", icon: "ic-finance" },
    { id: "reports", label: "Reports", icon: "ic-reports" },
    { id: "codex", label: "Codex", icon: "ic-codex" },
    { id: "settings", label: "Settings", icon: "ic-settings" }
  ];

  /* ================= PEOPLE DATA ================= */
  var people = [
    { id:"mara", name:"Mara Okoye", title:"Senior Tech Lead", department:"Engineering",
      capacity:62, capacityMax:100, focus:40, focusMax:100,
      attributes:{Execution:85,Craft:88,Communication:62,Strategy:66,Adaptability:71,Resilience:58},
      skills:{
        "Technical Execution":[{name:"System Design",rating:5},{name:"Incident Response",rating:4},{name:"Roadmapping",rating:3}],
        "Leadership":[{name:"Mentorship",rating:2},{name:"Cross-team Communication",rating:2}]
      },
      project:{ name:"Loot Drop Socket-Service Migration", priority:"High", progress:58,
        objective:"Move real-time reward delivery onto the new socket service without downtime.",
        timeline:"Aug 2026", dependency:"QA engineering role still unfilled" },
      blocker:"Carrying two workstreams since the QA req went unfilled",
      nextCheckin:{date:"Jul 30", type:"1:1"},
      infractions:[], leave:{balance:9, takenYTD:6, upcoming:null},
      reportsTo:"CTO", directReports:["2 backend engineers","1 SRE"], tenureYears:3.4, tenure:"3.4 yrs", orgLabel:"Engineering",
      coaching:[{id:1, skill:"Cross-team Communication", category:"Leadership", goal:"Present the Q1 architecture review without over-explaining edge cases", evidence:"Q1 review ran 40 minutes over its slot", due:"Apr 2026", status:"completed", outcome:"Q2 review finished on time; peer feedback improved"}] },

    { id:"priya", name:"Priya Anand", title:"Product Manager", department:"Product",
      capacity:84, capacityMax:100, focus:75, focusMax:100,
      attributes:{Execution:70,Craft:75,Communication:88,Strategy:78,Adaptability:80,Resilience:73},
      skills:{
        "Strategic Thinking":[{name:"Prioritization",rating:4},{name:"Data Analysis",rating:3},{name:"User Research",rating:3}],
        "Communication":[{name:"Stakeholder Alignment",rating:4},{name:"Spec Writing",rating:4}]
      },
      project:{ name:"Loot Drop v2 Reward-Type Expansion", priority:"Medium", progress:35,
        objective:"Define spec for new reward types ahead of the Q4 roadmap.",
        timeline:"Sep 2026", dependency:null },
      blocker:null,
      nextCheckin:{date:"Aug 4", type:"goal review"},
      infractions:[], leave:{balance:14, takenYTD:3, upcoming:null},
      reportsTo:"CTO", directReports:[], tenureYears:1.9, tenure:"1.9 yrs", orgLabel:"Product",
      coaching:[] },

    { id:"devon", name:"Devon Cross", title:"Product Governance Lead", department:"Product Governance",
      capacity:45, capacityMax:100, focus:30, focusMax:100,
      attributes:{Execution:60,Craft:90,Communication:58,Strategy:70,Adaptability:52,Resilience:55},
      skills:{
        "Technical Execution":[{name:"Root-cause Analysis",rating:5},{name:"Threat Modeling",rating:3}],
        "Communication":[{name:"Technical Writing",rating:4},{name:"Stakeholder Comms",rating:2},{name:"Cross-team Escalation",rating:2}]
      },
      project:{ name:"Loot Drop Governance Audit — Winner-Selection Logic", priority:"High", progress:70,
        objective:"Reconcile claim-order vs. secure random draw discrepancy before next release.",
        timeline:"Aug 2026", dependency:"Waiting on Platform Engineering for socket-service repo access" },
      blocker:"Waiting on Platform Eng for socket-service repo access, 6 days",
      nextCheckin:{date:"Jul 31", type:"blocker review"},
      infractions:[], leave:{balance:11, takenYTD:5, upcoming:null},
      reportsTo:"COO", directReports:[], tenureYears:2.1, tenure:"2.1 yrs", orgLabel:"Product Gov.",
      coaching:[{id:2, skill:"Cross-team Escalation", category:"Communication", goal:"Escalate cross-team blockers within 48h instead of waiting them out", evidence:"Socket-service access request sat 4 days before Devon flagged it", due:"Aug 8", status:"active"}] },

    { id:"renata", name:"Renata Silva", title:"Governance Team Lead", department:"Governance",
      capacity:71, capacityMax:100, focus:58, focusMax:100,
      attributes:{Execution:68,Craft:80,Communication:74,Strategy:72,Adaptability:63,Resilience:84},
      skills:{
        "Leadership":[{name:"Cross-functional Coordination",rating:4},{name:"Coaching",rating:3},{name:"Negotiation",rating:2}],
        "Strategic Thinking":[{name:"Policy Design",rating:4},{name:"Risk Assessment",rating:5}]
      },
      project:{ name:"Q3 Compliance Audit Sweep", priority:"Medium", progress:44,
        objective:"Complete compliance review across HR, Finance, and Legal.",
        timeline:"Sep 2026", dependency:null },
      blocker:null,
      nextCheckin:{date:"Aug 6", type:"1:1"},
      infractions:[], leave:{balance:6, takenYTD:12, upcoming:null},
      reportsTo:"COO", directReports:["Aisha Bello (HR)","Tomas Varga (Finance)","Elin Kask (Legal)"], tenureYears:4.0, tenure:"4.0 yrs", orgLabel:"Governance",
      coaching:[] },

    { id:"sana", name:"Sana Rocha", title:"Business Operations Lead", department:"Business Operations",
      capacity:58, capacityMax:100, focus:33, focusMax:100,
      attributes:{Execution:74,Craft:66,Communication:69,Strategy:55,Adaptability:72,Resilience:57},
      skills:{
        "Communication":[{name:"Vendor Negotiation",rating:3},{name:"Prioritization",rating:2}],
        "Craft & Domain":[{name:"Process Design",rating:2},{name:"Contract Review",rating:2},{name:"Time Management",rating:2}]
      },
      project:{ name:"Vendor Contract Renewals", priority:"High", progress:20,
        objective:"Clear the vendor renewal backlog before Q3 close.",
        timeline:"Aug 2026", dependency:"Backlog outpacing current review capacity" },
      blocker:"Renewal backlog growing faster than she can review it",
      nextCheckin:{date:"Aug 1", type:"1:1"},
      infractions:[{date:"Jun 12", note:"Missed a vendor renewal deadline — verbal reminder given, no repeat since", severity:"low"}],
      leave:{balance:4, takenYTD:3, upcoming:{start:"Aug 4", end:"Aug 8"}},
      reportsTo:"COO", directReports:[], tenureYears:1.3, tenure:"1.3 yrs", orgLabel:"Business Ops",
      coaching:[] },

    { id:"jonah", name:"Jonah Reyes", title:"Creative Director", department:"Creative",
      capacity:88, capacityMax:100, focus:70, focusMax:100,
      attributes:{Execution:79,Craft:84,Communication:90,Strategy:74,Adaptability:77,Resilience:68},
      skills:{
        "Communication":[{name:"Storytelling",rating:5},{name:"Cross-team Pitching",rating:4},{name:"Presentation",rating:4}],
        "Craft & Domain":[{name:"Art Direction",rating:4},{name:"Campaign Strategy",rating:3}]
      },
      project:{ name:"Loot Drop Launch Campaign — Creator Kit", priority:"Low", progress:66,
        objective:"Deliver creator marketing assets ahead of public launch.",
        timeline:"Aug 2026", dependency:null },
      blocker:null,
      nextCheckin:{date:"Aug 5", type:"goal review"},
      infractions:[], leave:{balance:12, takenYTD:4, upcoming:null},
      reportsTo:"CTO", directReports:["2 designers","1 copywriter"], tenureYears:2.8, tenure:"2.8 yrs", orgLabel:"Creative",
      coaching:[] },

    { id:"aisha", name:"Aisha Bello", title:"People & Talent Lead", department:"People & Talent",
      capacity:80, capacityMax:100, focus:62, focusMax:100,
      attributes:{Execution:66,Craft:78,Communication:92,Strategy:61,Adaptability:68,Resilience:80},
      skills:{
        "Communication":[{name:"Conflict Resolution",rating:5},{name:"Coaching",rating:4},{name:"Active Listening",rating:4}],
        "Craft & Domain":[{name:"Talent Sourcing",rating:3},{name:"Onboarding Design",rating:4}]
      },
      project:{ name:"Onboarding Program Refresh", priority:"Low", progress:51,
        objective:"Modernize onboarding materials and manager coaching templates.",
        timeline:"Sep 2026", dependency:null },
      blocker:null,
      nextCheckin:{date:"Jul 30", type:"1:1"},
      infractions:[], leave:{balance:8, takenYTD:8, upcoming:null},
      reportsTo:"Renata Silva", directReports:["1 recruiter","1 HR generalist"], tenureYears:3.6, tenure:"3.6 yrs", orgLabel:"People & Talent",
      coaching:[{id:3, skill:"Strategic Thinking", category:"Strategic Thinking", goal:"Bring a phased staffing plan, not just a headcount ask, to review", evidence:"Q4 headcount request lacked a phasing plan and got sent back", due:"Feb 2026", status:"completed", outcome:"Q1 headcount plan approved on first pass"}] },

    { id:"tomas", name:"Tomas Varga", title:"Finance Lead", department:"Finance",
      capacity:67, capacityMax:100, focus:51, focusMax:100,
      attributes:{Execution:62,Craft:89,Communication:54,Strategy:80,Adaptability:50,Resilience:76},
      skills:{
        "Strategic Thinking":[{name:"Financial Modeling",rating:5},{name:"Forecasting",rating:5},{name:"Board Reporting",rating:3}],
        "Craft & Domain":[{name:"Vendor Cost Analysis",rating:3}]
      },
      project:{ name:"Q4 Runway Model Refresh", priority:"Medium", progress:30,
        objective:"Update the financial model ahead of Q4 board review.",
        timeline:"Oct 2026", dependency:null },
      blocker:null,
      nextCheckin:{date:"Aug 3", type:"finance snapshot"},
      infractions:[], leave:{balance:15, takenYTD:1, upcoming:null},
      reportsTo:"Renata Silva", directReports:["1 AP/AR analyst"], tenureYears:4.7, tenure:"4.7 yrs", orgLabel:"Finance",
      coaching:[{id:4, skill:"Board Reporting", category:"Strategic Thinking", goal:"Share the Q4 model draft with COO before it's finished, not after", evidence:"Q2 model surprised the leadership review by 2 weeks", due:"Aug 3", status:"active"}] },

    { id:"elin", name:"Elin Kask", title:"Legal Lead", department:"Legal",
      capacity:39, capacityMax:100, focus:22, focusMax:100,
      attributes:{Execution:52,Craft:94,Communication:60,Strategy:77,Adaptability:44,Resilience:66},
      skills:{
        "Craft & Domain":[{name:"Contract Drafting",rating:5},{name:"Risk Flagging",rating:5},{name:"Regulatory Research",rating:4}],
        "Strategic Thinking":[{name:"IP Strategy",rating:4},{name:"Negotiation",rating:3}]
      },
      project:{ name:"NDA Backlog Clearance", priority:"High", progress:22,
        objective:"Clear the outstanding NDA queue and restore normal turnaround time.",
        timeline:"Aug 2026", dependency:"No paralegal support since April" },
      blocker:"NDA queue at 31 open, no paralegal support since April",
      nextCheckin:{date:"Jul 30", type:"blocker review"},
      infractions:[], leave:{balance:3, takenYTD:2, upcoming:null},
      reportsTo:"Renata Silva", directReports:[], tenureYears:5.2, tenure:"5.2 yrs", orgLabel:"Legal",
      coaching:[] }
  ];

  var peopleById = {};
  var nextCoachingId = 5;
  people.forEach(function (p) {
    peopleById[p.id] = p;
    p.morale = Math.round(p.attributes.Resilience / 10);
  });

  function riskLevel(p) {
    if (p.blocker && p.capacity < 50) return "High";
    if (p.blocker || p.capacity < 65) return "Medium";
    return "Low";
  }
  function riskWeight(level) { return level === "High" ? 3 : level === "Medium" ? 2 : 1; }
  function loyaltyLevel(years) { return years >= 4 ? "High" : years >= 2 ? "Steady" : "Building"; }

  var ranked = people.slice().sort(function (a, b) { return riskWeight(riskLevel(b)) - riskWeight(riskLevel(a)) || a.capacity - b.capacity; });
  var attentionGroup = ranked.slice(0, 5);
  var steadyGroup = ranked.slice(5);

  var selectedId = attentionGroup[0].id;
  var activeTab = "attributes";
  var completingQuestId = null;
  var personalRecordRevealed = {};
  var currentView = "overview";

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function icon(id) { return '<svg><use href="#' + id + '"></use></svg>'; }
  function initials(name) { return name.split(" ").map(function (w) { return w[0]; }).join(""); }
  function capacityClass(pct) { return pct < 50 ? "risk" : pct < 65 ? "warn" : ""; }
  function parseCheckinDate(str) { return new Date("2026 " + str); }

  function lowestAttr(p) { var low = null; ATTRS.forEach(function (k) { if (!low || p.attributes[k] < p.attributes[low]) low = k; }); return low; }
  function highestAttr(p) { var high = null; ATTRS.forEach(function (k) { if (!high || p.attributes[k] > p.attributes[high]) high = k; }); return high; }
  function avgAttr(p) { return ATTRS.reduce(function (s, k) { return s + p.attributes[k]; }, 0) / ATTRS.length; }

  function flattenSkills(p) {
    var out = [];
    Object.keys(p.skills).forEach(function (cat) {
      p.skills[cat].forEach(function (s) { out.push({ category: cat, name: s.name, rating: s.rating }); });
    });
    return out;
  }
  function lowestSkill(p) {
    var flat = flattenSkills(p), low = null;
    flat.forEach(function (s) { if (!low || s.rating < low.rating) low = s; });
    return low;
  }

  /* ================= COMMAND BAR / NAVIGATION ================= */
  function renderCommandBar() {
    document.getElementById("commandBar").innerHTML = NAV.map(function (n) {
      return '<button class="cmd-btn' + (n.id === currentView ? " active" : "") + '" data-nav="' + n.id + '">' + icon(n.icon) + '<span>' + n.label + '</span></button>';
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"), function (btn) {
      btn.addEventListener("click", function () { switchView(btn.getAttribute("data-nav")); });
    });
  }

  function switchView(view) {
    currentView = view;
    NAV.forEach(function (n) {
      document.getElementById("view-" + n.id).hidden = n.id !== view;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"), function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-nav") === view);
    });
  }

  /* ================= SHARED: RECOGNITION + COACHING PRIORITY ================= */
  function recognitionCandidate() {
    var pool = steadyGroup.length ? steadyGroup : people;
    return pool.slice().sort(function (a, b) { return avgAttr(b) - avgAttr(a); })[0];
  }
  function renderRecognitionInto(elId) {
    var best = recognitionCandidate();
    var bestKey = highestAttr(best);
    document.getElementById(elId).innerHTML =
      '<div class="frame-head"><h3>' + icon("ic-star") + ' &nbsp;Recognition</h3><div class="hint">Steady, highest composite score</div></div>' +
      '<div class="recognition-card">' +
        '<span class="portrait gold">' + initials(best.name) + '</span>' +
        '<div><div style="font-weight:800;font-size:15px;">' + esc(best.name) + '</div><div style="font-size:12px;color:var(--text-secondary);">' + esc(best.title) + ' · ' + esc(best.department) + '</div></div>' +
      '</div>' +
      '<p class="recognition-copy">Leading the roster on ' + bestKey + ' (' + best.attributes[bestKey] + ') while holding steady. Worth calling out this cycle — a shout-out here reinforces the behavior, not just the outcome.</p>';
  }

  function coachingPriorityData() {
    var counts = {};
    people.forEach(function (p) { var l = lowestAttr(p); counts[l] = (counts[l] || 0) + 1; });
    var topKey = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })[0];
    return { topKey: topKey, count: counts[topKey] };
  }
  function renderCoachingPriorityInto(elId) {
    var d = coachingPriorityData();
    document.getElementById(elId).innerHTML =
      '<div class="frame-head"><h3>Team Coaching Priority</h3><div class="hint">Org-wide growth edge</div></div>' +
      '<p style="font-size:12.5px;color:var(--text-secondary);">' + d.count + ' of ' + people.length + ' team members show <strong style="color:var(--lavender);">' + d.topKey + '</strong> as their lowest attribute — the highest-leverage area to build coaching plans around this quarter.</p>';
  }

  /* ================= RADAR ================= */
  function buildRadar(attrs) {
    var keys = ATTRS, n = keys.length, cx = 100, cy = 100, R = 74;
    var rings = [0.33, 0.66, 1].map(function (f) {
      var pts = keys.map(function (_, i) {
        var a = (-90 + i * 360 / n) * Math.PI / 180;
        return (cx + Math.cos(a) * R * f) + "," + (cy + Math.sin(a) * R * f);
      }).join(" ");
      return '<polygon points="' + pts + '" fill="none" stroke="var(--border-neutral)" stroke-width="1" />';
    }).join("");
    var axes = keys.map(function (_, i) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" stroke="var(--border-neutral)" stroke-width="1" />';
    }).join("");
    var dataPts = keys.map(function (k, i) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var v = attrs[k] / 100;
      return (cx + Math.cos(a) * R * v) + "," + (cy + Math.sin(a) * R * v);
    });
    var dots = keys.map(function (k, i) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var v = attrs[k] / 100;
      var x = cx + Math.cos(a) * R * v, y = cy + Math.sin(a) * R * v;
      return '<circle cx="' + x + '" cy="' + y + '" r="3" fill="var(--cyan-strong)" />';
    }).join("");
    return '<svg viewBox="0 0 200 200" width="200" height="200">' + rings + axes +
      '<polygon points="' + dataPts.join(" ") + '" fill="var(--cyan)" fill-opacity="0.24" stroke="var(--cyan)" stroke-width="2" />' +
      dots + '</svg>';
  }

  /* ================= PEOPLE SECTION ================= */
  function renderRoster() {
    document.getElementById("peopleActiveCount").textContent = attentionGroup.length + " / " + people.length;
    document.getElementById("peopleBenchCount").textContent = steadyGroup.length + " steady";

    document.getElementById("peopleActiveList").innerHTML = attentionGroup.map(function (p) {
      var pct = Math.round(p.capacity / p.capacityMax * 100), fpct = Math.round(p.focus / p.focusMax * 100);
      var risk = riskLevel(p);
      return '<button class="roster-card' + (p.id === selectedId ? " selected" : "") + '" data-select="' + p.id + '">' +
        '<span class="portrait">' + initials(p.name) + '</span>' +
        '<span class="roster-meta">' +
          '<span class="roster-name-row"><span class="roster-name">' + esc(p.name) + '</span><span class="risk-chip ' + risk + '">' + risk + '</span></span>' +
          '<span class="roster-bars">' +
            '<span class="mini-track"><span class="mini-fill cap ' + capacityClass(pct) + '" style="width:' + pct + '%"></span></span>' +
            '<span class="mini-track"><span class="mini-fill focus" style="width:' + fpct + '%"></span></span>' +
          '</span>' +
        '</span>' +
        '</button>';
    }).join("");

    document.getElementById("peopleBenchTiles").innerHTML = steadyGroup.map(function (p) {
      return '<button class="bench-tile' + (p.id === selectedId ? " selected" : "") + '" data-select="' + p.id + '">' +
        '<span class="portrait">' + initials(p.name) + '</span>' +
        '<span class="bname">' + esc(p.name.split(" ")[0]) + '</span>' +
        '<span class="btitle">' + esc(p.title) + '</span>' +
        '</button>';
    }).join("");
  }

  var PROFILE_TAB_LABELS = { attributes: "Attributes", skills: "Skills", work: "Work", coaching: "Coaching", record: "Record" };
  var PROFILE_TAB_ORDER = ["attributes", "skills", "work", "coaching", "record"];

  function cycleTab(dir) {
    var idx = PROFILE_TAB_ORDER.indexOf(activeTab);
    idx = (idx + dir + PROFILE_TAB_ORDER.length) % PROFILE_TAB_ORDER.length;
    activeTab = PROFILE_TAB_ORDER[idx];
    renderProfile();
  }

  function renderSealedRecord(p) {
    var revealed = !!personalRecordRevealed[p.id];
    var pr = p.personalRecord || {};
    if (!revealed) {
      return '<div class="frame sealed">' +
        '<div class="subpanel-title">' + icon("ic-lock") + ' &nbsp;Personal Record</div>' +
        '<p style="font-size:12px;color:var(--text-muted);margin:0 0 10px;">Legal name, date of birth, working style, zodiac sign, MBTI type — self-reported at onboarding, for coaching context only.</p>' +
        '<button type="button" class="btn-quiet" data-reveal="' + p.id + '">Reveal Personal Record</button>' +
        '</div>';
    }
    return '<div class="frame sealed">' +
      '<div class="subpanel-title">' + icon("ic-unlock") + ' &nbsp;Personal Record</div>' +
      '<p class="sealed-notice">Not used in employment, compensation, or promotion decisions. Self-reported and optional.</p>' +
      '<form class="coach-form" id="personalRecordForm" data-person="' + p.id + '">' +
        '<div class="field"><label for="prLegalName">Legal name</label><input id="prLegalName" type="text" value="' + esc(pr.legalName) + '" placeholder="Optional" /></div>' +
        '<div class="field"><label for="prDob">Date of birth</label><input id="prDob" type="date" value="' + esc(pr.dob) + '" /></div>' +
        '<div class="field"><label for="prComm">Communication preference</label><input id="prComm" type="text" value="' + esc(pr.commPref) + '" placeholder="e.g. Direct, in writing first" /></div>' +
        '<div class="field"><label for="prFeedback">Feedback preference</label><input id="prFeedback" type="text" value="' + esc(pr.feedbackPref) + '" placeholder="e.g. Specific examples, 1:1 not group" /></div>' +
        '<div class="field"><label for="prStress">Stress response</label><input id="prStress" type="text" value="' + esc(pr.stressResponse) + '" placeholder="e.g. Goes quiet, needs space before problem-solving" /></div>' +
        '<div class="field"><label for="prMotivators">Motivators</label><input id="prMotivators" type="text" value="' + esc(pr.motivators) + '" placeholder="e.g. Ownership, learning new systems" /></div>' +
        '<div class="field"><label for="prZodiac">Zodiac sign <em>(optional, informational only)</em></label><input id="prZodiac" type="text" value="' + esc(pr.zodiac) + '" /></div>' +
        '<div class="field"><label for="prMbti">MBTI type <em>(optional, self-reported only)</em></label><input id="prMbti" type="text" value="' + esc(pr.mbti) + '" placeholder="e.g. INFJ" /></div>' +
        '<button type="submit" class="btn-primary">Save Personal Record</button>' +
      '</form>' +
      (pr.savedAt ? '<p style="font-size:10.5px;color:var(--text-muted);margin-top:8px;">Last saved ' + new Date(pr.savedAt).toLocaleString() + '</p>' : '') +
      '</div>';
  }

  function renderProfile() {
    var p = peopleById[selectedId];
    var pct = Math.round(p.capacity / p.capacityMax * 100), fpct = Math.round(p.focus / p.focusMax * 100);
    var risk = riskLevel(p);

    var header =
      '<div class="profile-header">' +
        '<span class="profile-portrait">' + initials(p.name) + '</span>' +
        '<span class="profile-id">' +
          '<span class="profile-name">' + esc(p.name) + '</span>' +
          '<span class="profile-title">' + esc(p.title) + '</span>' +
          '<span class="profile-dept">' + esc(p.department) + '</span>' +
        '</span>' +
        '<span class="profile-risk risk-chip ' + risk + '" style="font-size:10.5px;padding:4px 10px;">' + risk + ' Risk</span>' +
      '</div>' +
      '<div class="status-row">' +
        '<div class="status-cell"><div class="status-label"><span>Capacity</span><span>' + p.capacity + '%</span></div><div class="bar-track"><div class="bar-fill mini-fill cap ' + capacityClass(pct) + '" style="width:' + pct + '%"></div></div></div>' +
        '<div class="status-cell"><div class="status-label"><span>Focus</span><span>' + p.focus + '%</span></div><div class="bar-track"><div class="bar-fill mini-fill focus" style="width:' + fpct + '%"></div></div></div>' +
        '<div class="status-cell"><div class="status-label"><span>Morale</span><span>' + p.morale + '/10</span></div><div class="bar-track"><div class="bar-fill success" style="width:' + (p.morale*10) + '%"></div></div></div>' +
        '<div class="status-cell"><div class="status-label"><span>Loyalty</span><span>' + loyaltyLevel(p.tenureYears) + '</span></div><div class="bar-track"><div class="bar-fill gold" style="width:' + Math.min(100, p.tenureYears/6*100) + '%"></div></div></div>' +
      '</div>';

    var tabNav = '<div class="tab-nav">' +
      '<button class="btn-quiet" id="tabPrev" style="padding:6px 10px;font-size:10px;">◀</button>' +
      '<div class="tab-bar" role="tablist" aria-label="Profile sections">' + PROFILE_TAB_ORDER.map(function (t) {
        return '<button class="tab-btn' + (t === activeTab ? " active" : "") + '" data-tab="' + t + '" role="tab" aria-selected="' + (t === activeTab) + '">' + PROFILE_TAB_LABELS[t] + '</button>';
      }).join("") + '</div>' +
      '<button class="btn-quiet" id="tabNext" style="padding:6px 10px;font-size:10px;">▶</button>' +
      '</div>';

    var body = "";
    if (activeTab === "attributes") {
      var lowK = lowestAttr(p);
      var attrRows = ATTRS.map(function (k) {
        return '<div class="attr-row"><span class="aname"' + (k === lowK ? ' style="color:var(--lavender);font-weight:700;"' : '') + '>' + k + (k === lowK ? " — growth edge" : "") + '</span><span class="aval">' + p.attributes[k] + '</span></div>';
      }).join("");
      var legend = ATTRS.map(function (k) { return '<div class="radar-legend-item"><span>' + k + '</span><b>' + p.attributes[k] + '</b></div>'; }).join("");
      body = '<div class="tab-content">' +
        '<div><div class="subpanel-title">Attributes</div><div class="attr-list">' + attrRows + '</div></div>' +
        '<div class="radar-wrap"><div class="subpanel-title" style="align-self:flex-start;">Attribute Web</div>' + buildRadar(p.attributes) +
          '<div class="radar-legend">' + legend + '</div></div>' +
      '</div>';
    } else if (activeTab === "skills") {
      var cats = Object.keys(p.skills).map(function (cat) {
        var rows = p.skills[cat].map(function (s) {
          var dots = "";
          for (var i = 0; i < 5; i++) dots += '<span class="dot' + (i < s.rating ? " filled" : "") + '"></span>';
          return '<div class="skill-row"><span class="sname">' + esc(s.name) + '</span><span class="dot-row">' + dots + '</span></div>';
        }).join("");
        return '<div class="skill-category"><div class="skill-cat-title">' + esc(cat) + '</div>' + rows + '</div>';
      }).join("");
      body = '<div class="tab-content single"><div>' + cats + '</div></div>';
    } else if (activeTab === "work") {
      var pr = p.project;
      body = '<div class="tab-content single"><div class="project-card">' +
        '<div class="project-top"><span class="project-name">' + icon("ic-target") + ' ' + esc(pr.name) + '</span><span class="priority-chip ' + pr.priority + '">' + pr.priority + '</span></div>' +
        '<div class="project-objective">' + esc(pr.objective) + '</div>' +
        '<div class="bar-track"><div class="bar-fill gold" style="width:' + pr.progress + '%"></div></div>' +
        '<div class="project-meta-row"><span>Owner: <b>' + esc(p.name) + '</b></span><span>Progress: <b>' + pr.progress + '%</b></span><span>Timeline: <b>' + esc(pr.timeline) + '</b></span></div>' +
        (pr.dependency ? '<div class="dependency-note">⚠ Dependency: ' + esc(pr.dependency) + '</div>' : '<div class="empty-note">No open dependencies.</div>') +
        '</div></div>';
    } else if (activeTab === "coaching") {
      var activeCoaching = p.coaching.filter(function (c) { return c.status !== "completed"; });
      var pastCoaching = p.coaching.filter(function (c) { return c.status === "completed"; });
      var coachRows = activeCoaching.length ? activeCoaching.map(function (c) {
        var completeUi = completingQuestId === c.id
          ? '<form class="coach-form" data-complete-form="' + c.id + '" style="margin-top:8px;">' +
              '<div class="field"><label for="outcome-' + c.id + '">Outcome — required to close this out</label>' +
              '<textarea id="outcome-' + c.id + '" required placeholder="What changed / evidence it worked"></textarea></div>' +
              '<button type="submit" class="btn-primary">Confirm Completion</button>' +
              ' <button type="button" class="btn-quiet" data-cancel-complete="1">Cancel</button>' +
            '</form>'
          : '<button type="button" class="btn-quiet" data-start-complete="' + c.id + '" style="margin-top:6px;">Mark Complete</button>';
        return '<div class="coach-item"><div class="head"><span>' + esc(c.skill) + '</span><span class="due">Due ' + esc(c.due) + '</span></div>' +
          '<div class="evidence"><strong>Target:</strong> ' + esc(c.goal) + '</div><div class="evidence"><strong>Evidence:</strong> ' + esc(c.evidence) + '</div>' +
          completeUi + '</div>';
      }).join("") : '<div class="empty-note">No active coaching plans.</div>';
      var historyRows = pastCoaching.length ? pastCoaching.map(function (c) {
        return '<div class="coach-item" style="opacity:0.75;"><div class="head"><span>✓ ' + esc(c.skill) + '</span><span class="due">Closed ' + esc(c.due) + '</span></div>' +
          '<div class="evidence"><strong>Target:</strong> ' + esc(c.goal) + '</div><div class="evidence"><strong>Outcome:</strong> ' + esc(c.outcome) + '</div></div>';
      }).join("") : '<div class="empty-note">No closed coaching plans yet.</div>';
      var lowSkill = lowestSkill(p);
      var flat = flattenSkills(p);
      var skillOptions = flat.map(function (s) {
        return '<option value="' + esc(s.name) + '" data-cat="' + esc(s.category) + '"' + (lowSkill && s.name === lowSkill.name ? " selected" : "") + '>' + esc(s.name) + ' — ' + s.rating + '/5 (' + esc(s.category) + ')</option>';
      }).join("");
      body = '<div class="tab-content"><div><div class="subpanel-title">Active Coaching</div><div class="coach-list">' + coachRows + '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Coaching History</div><div class="coach-list">' + historyRows + '</div></div>' +
        '<div><div class="subpanel-title">Assign a Coaching Plan</div>' +
        '<form class="coach-form" id="coachForm">' +
          '<div class="field"><label for="skillSel">Skill focus</label><select id="skillSel">' + skillOptions + '</select></div>' +
          '<div class="field"><label for="goalInput">Coaching target</label><input id="goalInput" type="text" placeholder="e.g. Flag blockers within 48 hours" required /></div>' +
          '<div class="field"><label for="evInput">Evidence</label><textarea id="evInput" placeholder="What you observed that prompted this" required></textarea></div>' +
          '<div class="field"><label for="dueInput">Check back by</label><input id="dueInput" type="text" placeholder="e.g. Aug 12" required /></div>' +
          '<button type="submit" class="btn-primary">Assign Coaching Plan</button>' +
        '</form></div></div>';
    } else if (activeTab === "record") {
      var reports = p.directReports.length ? p.directReports.map(function (d) { return '<span class="plain-chip">' + esc(d) + '</span>'; }).join("") : '<span class="plain-chip">No direct reports</span>';
      var leaveRow = p.leave.upcoming
        ? '<div class="kv-row"><span class="k">Upcoming leave</span><span class="v">' + p.leave.upcoming.start + '–' + p.leave.upcoming.end + '</span></div>'
        : '<div class="kv-row"><span class="k">Upcoming leave</span><span class="v">None scheduled</span></div>';
      var infractionRows = p.infractions.length
        ? p.infractions.map(function (inf) {
            return '<div class="list-row"><span class="stripe ' + (inf.severity === "low" ? "warning" : "danger") + '"></span>' +
              '<span class="body"><span class="title">' + inf.date + '</span><span class="sub">' + inf.note + '</span></span></div>';
          }).join("")
        : '<div class="empty-note">No infractions on record.</div>';
      body = '<div class="tab-content"><div>' +
        '<div class="subpanel-title">Role Record</div>' +
        '<div class="record-kv">' +
        '<div class="kv-row"><span class="k">Reports to</span><span class="v">' + esc(p.reportsTo) + '</span></div>' +
        '<div class="kv-row"><span class="k">Tenure</span><span class="v">' + esc(p.tenure) + '</span></div>' +
        '<div class="kv-row"><span class="k">Next check-in</span><span class="v">' + p.nextCheckin.date + ' · ' + p.nextCheckin.type + '</span></div>' +
        '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Direct Reports</div><div class="chip-list">' + reports + '</div>' +
        '</div>' +
        '<div>' +
        '<div class="subpanel-title">Leave</div>' +
        '<div class="record-kv">' +
        '<div class="kv-row"><span class="k">Balance</span><span class="v">' + p.leave.balance + ' days</span></div>' +
        '<div class="kv-row"><span class="k">Taken YTD</span><span class="v">' + p.leave.takenYTD + ' days</span></div>' +
        leaveRow +
        '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Infractions</div>' +
        '<div class="list-rows">' + infractionRows + '</div>' +
        '</div></div>' +
        renderSealedRecord(p);
    }

    document.getElementById("profilePanel").innerHTML = header + tabNav + body;

    document.getElementById("tabPrev").addEventListener("click", function () { cycleTab(-1); });
    document.getElementById("tabNext").addEventListener("click", function () { cycleTab(1); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-tab]"), function (btn) {
      btn.addEventListener("click", function () { activeTab = btn.getAttribute("data-tab"); renderProfile(); });
    });

    var form = document.getElementById("coachForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var sel = document.getElementById("skillSel");
        var skill = sel.value;
        var category = sel.options[sel.selectedIndex].getAttribute("data-cat");
        var goal = document.getElementById("goalInput").value.trim();
        var ev = document.getElementById("evInput").value.trim();
        var due = document.getElementById("dueInput").value.trim();
        if (!goal || !ev || !due) return;
        p.coaching.unshift({ id: nextCoachingId++, skill: skill, category: category, goal: goal, evidence: ev, due: due, status: "active" });
        renderProfile();
        renderOverview();
      });
    }

    Array.prototype.forEach.call(document.querySelectorAll("[data-start-complete]"), function (btn) {
      btn.addEventListener("click", function () { completingQuestId = Number(btn.getAttribute("data-start-complete")); renderProfile(); });
    });
    var cancelBtn = document.querySelector("[data-cancel-complete]");
    if (cancelBtn) cancelBtn.addEventListener("click", function () { completingQuestId = null; renderProfile(); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-complete-form]"), function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var id = Number(f.getAttribute("data-complete-form"));
        var outcomeEl = document.getElementById("outcome-" + id);
        var outcome = outcomeEl.value.trim();
        if (!outcome) return;
        var quest = p.coaching.filter(function (c) { return c.id === id; })[0];
        quest.status = "completed";
        quest.completedAt = new Date().toISOString();
        quest.outcome = outcome;
        completingQuestId = null;
        renderProfile();
        renderOverview();
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-reveal]"), function (btn) {
      btn.addEventListener("click", function () { personalRecordRevealed[btn.getAttribute("data-reveal")] = true; renderProfile(); });
    });
    var prForm = document.getElementById("personalRecordForm");
    if (prForm) {
      prForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var pid = prForm.getAttribute("data-person");
        var person = peopleById[pid];
        person.personalRecord = {
          legalName: document.getElementById("prLegalName").value.trim(),
          dob: document.getElementById("prDob").value,
          commPref: document.getElementById("prComm").value.trim(),
          feedbackPref: document.getElementById("prFeedback").value.trim(),
          stressResponse: document.getElementById("prStress").value.trim(),
          motivators: document.getElementById("prMotivators").value.trim(),
          zodiac: document.getElementById("prZodiac").value.trim(),
          mbti: document.getElementById("prMbti").value.trim(),
          savedAt: Date.now()
        };
        renderProfile();
      });
    }
  }

  document.addEventListener("click", function (e) {
    var sel = e.target.closest("[data-select]");
    if (sel) { selectedId = sel.getAttribute("data-select"); activeTab = "attributes"; completingQuestId = null; renderRoster(); renderProfile(); }
  });

  /* ================= OVERVIEW ================= */
  function renderOverview() {
    var activeCoaching = people.reduce(function (n, p) { return n + p.coaching.filter(function (c) { return c.status !== "completed"; }).length; }, 0);
    var openInfractions = people.reduce(function (n, p) { return n + p.infractions.length; }, 0);
    var needsAttention = people.filter(function (p) { return riskLevel(p) !== "Low"; }).length;
    var kpis = [
      { label: "Headcount", value: String(people.length), delta: "stable", tone: "flat" },
      { label: "Needs Attention", value: String(needsAttention), delta: needsAttention > 3 ? "elevated" : "normal", tone: needsAttention > 3 ? "warning" : "good" },
      { label: "Coaching Active", value: String(activeCoaching), delta: "tracked", tone: "good" },
      { label: "Open Infractions", value: String(openInfractions), delta: openInfractions > 0 ? "review" : "clean", tone: openInfractions > 0 ? "warning" : "good" }
    ];
    document.getElementById("ovKpiRow").innerHTML = kpis.map(function (k) {
      return '<div class="kpi-tile"><div class="label">' + k.label + '</div><div class="value-row"><span class="value">' + k.value + '</span><span class="delta ' + k.tone + '">' + k.delta + '</span></div></div>';
    }).join("");

    renderRecognitionInto("ovRecognition");
    renderCoachingPriorityInto("ovCoachingPriority");

    var attn = people.filter(function (p) { return riskLevel(p) !== "Low"; });
    document.getElementById("ovAttentionList").innerHTML = attn.length ? attn.map(function (p) {
      var risk = riskLevel(p);
      return '<div class="list-row"><span class="stripe ' + (risk === "High" ? "danger" : "warning") + '"></span>' +
        '<span class="body"><span class="title">' + esc(p.name) + '</span><span class="sub">' + esc(p.title) + (p.blocker ? " — " + esc(p.blocker) : "") + '</span></span>' +
        '<span class="tag ' + (risk === "High" ? "danger" : "warning") + '">' + risk + '</span></div>';
    }).join("") : '<div class="empty-note">Nobody flagged right now.</div>';

    document.getElementById("ovAlertsList").innerHTML = complianceItems.map(function (c) {
      return '<div class="list-row"><span class="stripe ' + c.sev + '"></span><span class="body"><span class="title">' + c.title + '</span><span class="sub">' + c.sub + '</span></span><span class="tag ' + c.sev + '">' + c.tag + '</span></div>';
    }).join("");

    var last = plMonths[plMonths.length - 1];
    document.getElementById("ovQuickIntel").innerHTML =
      '<div class="kv-row"><span class="k">Team at risk</span><span class="v">' + needsAttention + ' of ' + people.length + '</span></div>' +
      '<div class="kv-row"><span class="k">Active missions</span><span class="v">' + people.length + '</span></div>' +
      '<div class="kv-row"><span class="k">MRR</span><span class="v">$' + last.rev + 'K</span></div>' +
      '<div class="kv-row"><span class="k">Cash runway</span><span class="v">14 mo</span></div>';

    document.getElementById("ovNotifCount").textContent = notifications.length + " recent";
    document.getElementById("ovNotifications").innerHTML = notifications.map(function (nf) {
      return '<div class="list-row"><span class="stripe ' + nf.sev + '"></span><span class="body"><span class="title">' + nf.title + '</span><span class="sub">' + nf.body + '</span></span></div>';
    }).join("");
  }

  /* ================= WORK ================= */
  var PRIORITY_WEIGHT = { High: 3, Medium: 2, Low: 1 };
  function renderWork() {
    var high = people.filter(function (p) { return p.project.priority === "High"; }).length;
    var avgProgress = Math.round(people.reduce(function (s, p) { return s + p.project.progress; }, 0) / people.length);
    var kpis = [
      { label: "Active Missions", value: String(people.length), tone: "flat", delta: "org-wide" },
      { label: "High Priority", value: String(high), tone: high > 2 ? "warning" : "good", delta: high > 2 ? "elevated" : "normal" },
      { label: "Avg. Progress", value: avgProgress + "%", tone: "good", delta: "tracked" },
      { label: "Open Compliance Flags", value: String(complianceItems.filter(function (c) { return c.sev !== "good"; }).length), tone: "warning", delta: "review" }
    ];
    document.getElementById("workKpiRow").innerHTML = kpis.map(function (k) {
      return '<div class="kpi-tile"><div class="label">' + k.label + '</div><div class="value-row"><span class="value">' + k.value + '</span><span class="delta ' + k.tone + '">' + k.delta + '</span></div></div>';
    }).join("");

    var sorted = people.slice().sort(function (a, b) { return PRIORITY_WEIGHT[b.project.priority] - PRIORITY_WEIGHT[a.project.priority]; });
    document.getElementById("workProjectList").innerHTML = sorted.map(function (p) {
      var pr = p.project;
      return '<div class="project-card" style="border-top:1px solid var(--border-neutral);padding-top:12px;">' +
        '<div class="project-top"><span class="project-name">' + icon("ic-target") + ' ' + esc(pr.name) + '</span><span class="priority-chip ' + pr.priority + '">' + pr.priority + '</span></div>' +
        '<div class="project-objective">' + esc(pr.objective) + '</div>' +
        '<div class="bar-track"><div class="bar-fill gold" style="width:' + pr.progress + '%"></div></div>' +
        '<div class="project-meta-row"><span>Owner: <b>' + esc(p.name) + '</b></span><span>Progress: <b>' + pr.progress + '%</b></span><span>Timeline: <b>' + esc(pr.timeline) + '</b></span></div>' +
        (pr.dependency ? '<div class="dependency-note">⚠ Dependency: ' + esc(pr.dependency) + '</div>' : '') +
        '</div>';
    }).join("");

    var sortedActivity = activityFeed.slice().sort(function (a, b) { return parseCheckinDate(a.date) - parseCheckinDate(b.date); });
    var typeMeta = { meeting: { sev: "warning", tag: "Meeting" }, work: { sev: "good", tag: "Work" } };
    document.getElementById("workActivity").innerHTML = sortedActivity.map(function (a) {
      var m = typeMeta[a.type];
      return '<div class="list-row"><span class="stripe ' + m.sev + '"></span><span class="body"><span class="title">' + a.title + '</span><span class="sub">' + a.date + ' · ' + a.sub + '</span></span><span class="tag ' + m.sev + '">' + m.tag + '</span></div>';
    }).join("");

    document.getElementById("workComplianceHint").textContent = complianceItems.length + " tracked";
    document.getElementById("workCompliance").innerHTML = complianceItems.map(function (c) {
      return '<div class="list-row"><span class="stripe ' + c.sev + '"></span><span class="body"><span class="title">' + c.title + '</span><span class="sub">' + c.sub + '</span></span><span class="tag ' + c.sev + '">' + c.tag + '</span></div>';
    }).join("");
  }

  /* ================= COACHING (org-wide) ================= */
  function renderCoaching() {
    renderRecognitionInto("coachRecognition");
    renderCoachingPriorityInto("coachPriority");

    var allActive = [], allHistory = [];
    people.forEach(function (p) {
      p.coaching.forEach(function (c) {
        var row = { p: p, c: c };
        if (c.status === "completed") allHistory.push(row); else allActive.push(row);
      });
    });

    document.getElementById("coachActiveHint").textContent = allActive.length + " open";
    document.getElementById("coachActiveList").innerHTML = allActive.length ? allActive.map(function (r) {
      return '<div class="coach-item"><div class="head"><span>' + esc(r.p.name) + ' — ' + esc(r.c.skill) + '</span><span class="due">Due ' + esc(r.c.due) + '</span></div>' +
        '<div class="evidence"><strong>Target:</strong> ' + esc(r.c.goal) + '</div><div class="evidence"><strong>Evidence:</strong> ' + esc(r.c.evidence) + '</div></div>';
    }).join("") : '<div class="empty-note">No active coaching plans anywhere in the org right now.</div>';

    document.getElementById("coachHistoryList").innerHTML = allHistory.length ? allHistory.map(function (r) {
      return '<div class="coach-item" style="opacity:0.8;"><div class="head"><span>✓ ' + esc(r.p.name) + ' — ' + esc(r.c.skill) + '</span><span class="due">Closed ' + esc(r.c.due) + '</span></div>' +
        '<div class="evidence"><strong>Outcome:</strong> ' + esc(r.c.outcome) + '</div></div>';
    }).join("") : '<div class="empty-note">Nothing closed out yet.</div>';
  }

  /* ================= FINANCE DATA + RENDER ================= */
  var plMonths = [
    { m: "Feb", rev: 195, exp: 210 }, { m: "Mar", rev: 205, exp: 215 }, { m: "Apr", rev: 215, exp: 218 },
    { m: "May", rev: 230, exp: 224 }, { m: "Jun", rev: 248, exp: 230 }, { m: "Jul", rev: 260, exp: 232 }
  ];
  var subscriptions = [
    { tool: "AWS", category: "Infrastructure", monthly: 8.4, renews: "Monthly" },
    { tool: "Datadog", category: "Observability", monthly: 2.1, renews: "Monthly" },
    { tool: "Segment", category: "Analytics", monthly: 1.65, renews: "Monthly" },
    { tool: "Twilio", category: "Notifications", monthly: 1.24, renews: "Monthly" },
    { tool: "Zendesk", category: "Support", monthly: 0.89, renews: "Sep 2026" },
    { tool: "GitHub + CI", category: "Dev tooling", monthly: 0.76, renews: "Nov 2026" },
    { tool: "Google Workspace", category: "Productivity", monthly: 0.56, renews: "Monthly" },
    { tool: "Cloudflare", category: "Infrastructure", monthly: 0.48, renews: "Monthly" },
    { tool: "Slack", category: "Productivity", monthly: 0.41, renews: "Feb 2027" },
    { tool: "Figma", category: "Design", monthly: 0.34, renews: "Nov 2026" },
    { tool: "LaunchDarkly", category: "Dev tooling", monthly: 0.31, renews: "Monthly" },
    { tool: "PagerDuty", category: "Observability", monthly: 0.22, renews: "Monthly" },
    { tool: "Notion", category: "Productivity", monthly: 0.18, renews: "Monthly" }
  ];
  var toolsInfraTotal = Math.round(subscriptions.reduce(function (s, x) { return s + x.monthly; }, 0));
  var expenseCats = [
    { name: "Payroll", value: 232 - (34 + toolsInfraTotal + 15 + 13) },
    { name: "Marketing", value: 34 },
    { name: "Tools & Infra", value: toolsInfraTotal },
    { name: "Legal & Compliance", value: 15 },
    { name: "Ops & Logistics", value: 13 }
  ];
  var activityFeed = [
    { type: "meeting", date: "Jul 30", title: "1:1 — Mara Okoye", sub: "Capacity check-in, socket migration status" },
    { type: "meeting", date: "Jul 30", title: "1:1 — Aisha Bello", sub: "Onboarding refresh sync" },
    { type: "meeting", date: "Jul 31", title: "Blocker review — Devon Cross", sub: "Socket-service repo access escalation" },
    { type: "work", date: "Jul 28", title: "NDA backlog: 3 cleared", sub: "Elin Kask — queue down to 31" },
    { type: "work", date: "Jul 26", title: "Creator kit assets delivered", sub: "Jonah Reyes — launch campaign" },
    { type: "meeting", date: "Aug 1", title: "1:1 — Sana Rocha", sub: "Vendor renewal backlog" },
    { type: "work", date: "Jul 24", title: "Q3 HR audit pass complete", sub: "Renata Silva — compliance sweep, 1 of 3 legs done" },
    { type: "meeting", date: "Aug 3", title: "Finance snapshot — Tomas Varga", sub: "Q4 runway model review" },
    { type: "work", date: "Jul 23", title: "Socket migration — staging deploy", sub: "Mara Okoye — pending Devon's audit sign-off" },
    { type: "meeting", date: "Aug 4", title: "Goal review — Priya Anand", sub: "Reward-type expansion spec" }
  ];
  var complianceItems = [
    { title: "Winner-selection logic discrepancy (Loot Drop)", sub: "Owner: Devon Cross · claim-order vs. secure random draw", sev: "danger", tag: "Open" },
    { title: "NDA backlog", sub: "Owner: Elin Kask · 31 open, no paralegal support", sev: "danger", tag: "Open" },
    { title: "Q3 compliance sweep — HR / Finance / Legal", sub: "Owner: Renata Silva · in progress", sev: "warning", tag: "44%" },
    { title: "SOC 2 Type II renewal", sub: "Owner: Renata Silva · evidence window opens Aug 10", sev: "good", tag: "On track" }
  ];
  var docs = [
    { title: "Vendor MSA — CloudHost Inc.", sub: "Renews Aug 15", sev: "warning", tag: "16d" },
    { title: "SOC 2 Type II certification", sub: "Expires Sep 1", sev: "warning", tag: "33d" },
    { title: "Streamer Partnership Agreement — Creator Guild", sub: "Renews Aug 20", sev: "good", tag: "21d" },
    { title: "D&O Insurance Policy", sub: "Renews Oct 3", sev: "good", tag: "65d" }
  ];
  var notifications = [
    { title: "Recognition Added", body: "Jonah Reyes recognized for leadership.", sev: "good" },
    { title: "Coaching Updated", body: "Adaptability coaching assigned.", sev: "info" },
    { title: "Performance Alert", body: "Capacity exceeded for three consecutive weeks.", sev: "danger" },
    { title: "Compliance Review", body: "One infraction requires attention.", sev: "warning" }
  ];

  function renderFinance() {
    var last = plMonths[plMonths.length - 1], prev = plMonths[plMonths.length - 2];
    var netLast = last.rev - last.exp, netPrev = prev.rev - prev.exp;
    var burn = Math.max(0, last.exp - last.rev);
    var kpis = [
      { label: "MRR", value: "$" + last.rev + "K", tone: "good", delta: "+" + Math.round((last.rev-prev.rev)/prev.rev*100) + "% MoM" },
      { label: "Net Income", value: (netLast >= 0 ? "+$" : "−$") + Math.abs(netLast) + "K", tone: netLast >= 0 ? "good" : "warning", delta: netLast > netPrev ? "widening" : "narrowing" },
      { label: "Burn Rate", value: burn === 0 ? "Profitable" : "$" + burn + "K/mo", tone: burn === 0 ? "good" : "warning", delta: burn === 0 ? "at breakeven" : "monitor" },
      { label: "Cash Runway", value: "14 mo", tone: "flat", delta: "flat" }
    ];
    document.getElementById("financeKpiRow").innerHTML = kpis.map(function (k) {
      return '<div class="kpi-tile"><div class="label">' + k.label + '</div><div class="value-row"><span class="value">' + k.value + '</span><span class="delta ' + k.tone + '">' + k.delta + '</span></div></div>';
    }).join("");

    var w = 560, h = 200, padL = 30, padB = 24, padT = 10;
    var max = Math.max.apply(null, plMonths.map(function (d) { return Math.max(d.rev, d.exp); }));
    var scale = (h - padT - padB) / (max * 1.1);
    var groupW = (w - padL) / plMonths.length, barW = 16;
    var bars = plMonths.map(function (d, i) {
      var gx = padL + i * groupW + groupW / 2;
      var revH = d.rev * scale, expH = d.exp * scale;
      var x1 = gx - barW - 2, x2 = gx + 2;
      var y1 = h - padB - revH, y2 = h - padB - expH;
      return '<g>' +
        '<rect x="' + x1 + '" y="' + y1 + '" width="' + barW + '" height="' + revH + '" rx="3" fill="var(--gold)"><title>' + d.m + ' Revenue: $' + d.rev + 'K</title></rect>' +
        '<rect x="' + x2 + '" y="' + y2 + '" width="' + barW + '" height="' + expH + '" rx="3" fill="var(--cyan)"><title>' + d.m + ' Expenses: $' + d.exp + 'K</title></rect>' +
        '<text x="' + gx + '" y="' + (h - 6) + '" text-anchor="middle" fill="var(--text-muted)" font-size="10" font-family="var(--font-data)">' + d.m + '</text>' +
        '</g>';
    }).join("");
    var baseline = '<line x1="' + padL + '" y1="' + (h - padB) + '" x2="' + w + '" y2="' + (h - padB) + '" stroke="var(--border-neutral)" stroke-width="1"/>';
    document.getElementById("financeChart").innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="min-width:480px;">' + baseline + bars + '</svg>';

    var total = expenseCats.reduce(function (s, c) { return s + c.value; }, 0);
    document.getElementById("financeExpenseHint").textContent = "$" + total + "K total";
    var maxCat = Math.max.apply(null, expenseCats.map(function (c) { return c.value; }));
    var sortedCats = expenseCats.slice().sort(function (a, b) { return b.value - a.value; });
    document.getElementById("financeExpenseBars").innerHTML = sortedCats.map(function (c, i) {
      var pct = Math.round(c.value / maxCat * 100);
      var lightness = 72 - i * 9;
      return '<div class="seq-row"><div class="seq-label-row"><span class="n">' + c.name + '</span><span class="v">$' + c.value + 'K</span></div>' +
        '<div class="seq-track"><div class="seq-fill" style="width:' + pct + '%;background:hsl(38,70%,' + lightness + '%)"></div></div></div>';
    }).join("");

    var subsTotal = subscriptions.reduce(function (s, x) { return s + x.monthly; }, 0);
    document.getElementById("financeSubsHint").textContent = "$" + subsTotal.toFixed(1) + "K/mo · " + subscriptions.length + " tools";
    var sortedSubs = subscriptions.slice().sort(function (a, b) { return b.monthly - a.monthly; });
    document.getElementById("financeSubsList").innerHTML = sortedSubs.map(function (s) {
      return '<div class="list-row"><span class="stripe good"></span><span class="body"><span class="title">' + s.tool + '</span><span class="sub">' + s.category + ' · renews ' + s.renews + '</span></span>' +
        '<span class="tag good">$' + s.monthly.toFixed(2) + 'K</span></div>';
    }).join("");
  }

  /* ================= REPORTS ================= */
  function renderReports() {
    var skillGaps = people.reduce(function (n, p) { return n + Object.values(p.attributes).filter(function (v) { return v < 60; }).length; }, 0);
    var payrollCat = expenseCats.filter(function (c) { return c.name === "Payroll"; })[0];
    var tiles = [
      { label: "Attendance (30d)", value: "96%" },
      { label: "Turnover (TTM)", value: "4.2%" },
      { label: "Skill Gaps Flagged", value: String(skillGaps) },
      { label: "Payroll (Jul)", value: "$" + payrollCat.value + "K" }
    ];
    document.getElementById("reportsTiles").innerHTML = tiles.map(function (t) {
      return '<div class="kpi-tile"><div class="label">' + t.label + '</div><div class="value-row"><span class="value">' + t.value + '</span></div></div>';
    }).join("");

    var branches = ["CTO", "COO"];
    var cols = branches.map(function (branch) {
      var directs = people.filter(function (p) { return p.reportsTo === branch; });
      var leaves = directs.map(function (p) { return '<span class="org-leaf">' + esc(p.name.split(" ")[0]) + ' — ' + esc(p.orgLabel) + '</span>'; }).join("");
      var subLeaves = directs.map(function (lead) {
        return people.filter(function (p) { return p.reportsTo === lead.name; }).map(function (p) {
          return '<span class="org-leaf sub">↳ ' + esc(p.name.split(" ")[0]) + ' — ' + esc(p.orgLabel) + '</span>';
        }).join("");
      }).join("");
      return '<div class="org-col"><div class="org-node">' + branch + '</div><div class="org-leaf-group">' + leaves + subLeaves + '</div></div>';
    }).join("");
    document.getElementById("reportsOrgMini").innerHTML = '<div class="org-node">CEO</div><div class="org-branches">' + cols + '</div>';

    var goals = people.map(function (p) { return { title: p.project.name, owner: p.name, progress: p.project.progress }; })
      .sort(function (a, b) { return a.progress - b.progress; }).slice(0, 5);
    document.getElementById("reportsGoals").innerHTML = goals.map(function (g) {
      return '<div style="padding:8px 0;border-bottom:1px solid var(--border-neutral);"><div style="display:flex;justify-content:space-between;font-size:12.5px;"><span>' + esc(g.title) + '</span><span style="color:var(--text-muted);font-size:11px;">' + g.progress + '%</span></div>' +
        '<div style="font-size:11px;color:var(--text-muted);margin-bottom:5px;">' + esc(g.owner) + '</div>' +
        '<div class="bar-track"><div class="bar-fill gold" style="width:' + g.progress + '%"></div></div></div>';
    }).join("");

    document.getElementById("reportsDocs").innerHTML = docs.map(function (d) {
      return '<div class="list-row"><span class="stripe ' + d.sev + '"></span><span class="body"><span class="title">' + d.title + '</span><span class="sub">' + d.sub + '</span></span><span class="tag ' + d.sev + '">' + d.tag + '</span></div>';
    }).join("");
  }

  /* ================= CODEX ================= */
  function renderCodex() {
    var statusDefs = [
      { term: "Capacity", def: "Workload availability right now — how much room someone has before they're overcommitted." },
      { term: "Focus", def: "Current mental bandwidth. Low focus alongside high capacity usually means context-switching, not laziness." },
      { term: "Morale", def: "Engagement, derived from Resilience trends. A leading indicator, not a performance score." },
      { term: "Risk", def: "Retention or performance concern, computed from an active blocker plus low capacity. Not a judgment — a prompt to check in." },
      { term: "Loyalty", def: "Long-term organizational health, informed by tenure. 'Building' isn't a negative — it just means the relationship is newer." }
    ];
    document.getElementById("codexStatus").innerHTML = statusDefs.map(function (d) {
      return '<div class="codex-entry"><div class="codex-term">' + d.term + '</div><div class="codex-def">' + d.def + '</div></div>';
    }).join("");

    var attrDefs = [
      { term: "Execution", def: "Gets committed work done, reliably and on time." },
      { term: "Craft", def: "Depth and quality of the work itself." },
      { term: "Communication", def: "Clarity with others — up, down, and across teams." },
      { term: "Strategy", def: "Sees the bigger picture and sequences work toward it." },
      { term: "Adaptability", def: "Handles ambiguity and change without losing footing." },
      { term: "Resilience", def: "Recovers from setbacks and sustains performance under pressure." }
    ];
    document.getElementById("codexAttributes").innerHTML = attrDefs.map(function (d) {
      return '<div class="codex-entry"><div class="codex-term">' + d.term + '</div><div class="codex-def">' + d.def + '</div></div>';
    }).join("");

    var skillCats = ["Technical Execution", "Strategic Thinking", "Leadership", "Communication", "Craft & Domain"];
    var skillDefs = {
      "Technical Execution": "Hands-on delivery skills specific to a discipline — system design, incident response, and the like.",
      "Strategic Thinking": "Prioritization, forecasting, and policy-level judgment.",
      "Leadership": "Coordinating, mentoring, and coaching other people.",
      "Communication": "Named communication sub-skills — active listening, negotiation, presentation, storytelling.",
      "Craft & Domain": "Deep, role-specific expertise — contract drafting, art direction, financial modeling."
    };
    document.getElementById("codexSkills").innerHTML = '<div class="grid-2">' + skillCats.map(function (c) {
      return '<div class="codex-entry"><div class="codex-term">' + c + '</div><div class="codex-def">' + skillDefs[c] + '</div></div>';
    }).join("") + '</div>';
  }

  /* ================= INIT ================= */
  renderCommandBar();
  switchView("overview");
  renderOverview();
  renderRoster();
  renderProfile();
  renderWork();
  renderCoaching();
  renderFinance();
  renderReports();
  renderCodex();
})();
