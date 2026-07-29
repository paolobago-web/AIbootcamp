(function () {
  "use strict";

  var STATS = ["Execution", "Craft", "Communication", "Resilience", "Strategy", "Adaptability"];

  var people = [
    { id:"mara", name:"Mara Okoye", role:"Senior Tech Lead", cls:"Architect-Mage", level:14,
      hp:62, hpMax:100, sp:40, spMax:100,
      stats:{Execution:85,Craft:88,Communication:62,Resilience:58,Strategy:66,Adaptability:71},
      resistances:{Ambiguity:12,"Deadline Pressure":9,"Context-Switching":6,Conflict:10,Repetition:14},
      loadout:[
        {slot:"Primary Focus", name:"Loot Drop Socket Migration", power:18},
        {slot:"Secondary Focus", name:"Platform Reliability", power:14},
        {slot:"Core Toolkit", name:"Systems Architecture", power:17},
        {slot:"Certification", name:"AWS Solutions Architect", power:12},
        {slot:"Support Process", name:"On-call Rotation", power:10}
      ],
      skills:[{name:"System Design",lvl:5},{name:"Mentorship",lvl:2},{name:"Incident Response",lvl:4},{name:"Cross-team Comms",lvl:2},{name:"Roadmapping",lvl:3}],
      roles:{reportsTo:"CTO", directReports:["2 backend engineers","1 SRE"], tenure:"3.4 yrs", orgLabel:"Tech"},
      flavor:"Architect-Mage — turns tangled systems into clean spellwork",
      buffer:38, quest:{title:"Loot Drop socket-service migration", progress:58},
      struggle:"Carrying two workstreams since the QA req went unfilled",
      nextCheckin:{date:"Jul 30", type:"1:1"},
      infractions:[],
      leave:{balance:9, takenYTD:6, upcoming:null},
      coaching:[{skill:"Communication", goal:"Present the Q1 architecture review without over-explaining edge cases", evidence:"Q1 review ran 40 minutes over its slot", due:"Apr 2026", status:"completed", outcome:"Q2 review finished on time; peer feedback improved"}] },

    { id:"priya", name:"Priya Anand", role:"Product Manager", cls:"Tactician", level:9,
      hp:84, hpMax:100, sp:75, spMax:100,
      stats:{Execution:70,Craft:75,Communication:88,Resilience:73,Strategy:78,Adaptability:80},
      resistances:{Ambiguity:17,"Deadline Pressure":10,"Context-Switching":15,Conflict:9,Repetition:7},
      loadout:[
        {slot:"Primary Focus", name:"Loot Drop v2 Reward Spec", power:11},
        {slot:"Secondary Focus", name:"Roadmap Planning", power:10},
        {slot:"Core Toolkit", name:"Product Analytics Suite", power:12},
        {slot:"Certification", name:"None on file", power:0},
        {slot:"Support Process", name:"Backlog Grooming", power:8}
      ],
      skills:[{name:"Spec Writing",lvl:4},{name:"Prioritization",lvl:4},{name:"User Research",lvl:3},{name:"Stakeholder Alignment",lvl:4},{name:"Data Analysis",lvl:3}],
      roles:{reportsTo:"CTO", directReports:[], tenure:"1.9 yrs", orgLabel:"Product"},
      flavor:"Tactician — sequences the plan so nobody's blocked twice",
      buffer:66, quest:{title:"Loot Drop v2 reward-type expansion spec", progress:35},
      struggle:null, nextCheckin:{date:"Aug 4", type:"goal review"},
      infractions:[],
      leave:{balance:14, takenYTD:3, upcoming:null},
      coaching:[] },

    { id:"devon", name:"Devon Cross", role:"Product Governance Lead", cls:"Auditor-Sentinel", level:11,
      hp:45, hpMax:100, sp:30, spMax:100,
      stats:{Execution:60,Craft:90,Communication:58,Resilience:55,Strategy:70,Adaptability:52},
      resistances:{Ambiguity:15,"Deadline Pressure":7,"Context-Switching":9,Conflict:8,Repetition:12},
      loadout:[
        {slot:"Primary Focus", name:"Loot Drop Governance Audit", power:16},
        {slot:"Secondary Focus", name:"Admin Panel Review", power:11},
        {slot:"Core Toolkit", name:"Code Audit Playbook", power:15},
        {slot:"Certification", name:"Security Compliance Cert", power:13},
        {slot:"Support Process", name:"Escalation Protocol", power:6}
      ],
      skills:[{name:"Root-cause Analysis",lvl:5},{name:"Technical Writing",lvl:4},{name:"Cross-team Escalation",lvl:2},{name:"Threat Modeling",lvl:3},{name:"Stakeholder Comms",lvl:2}],
      roles:{reportsTo:"COO", directReports:[], tenure:"2.1 yrs", orgLabel:"Product Gov."},
      flavor:"Auditor-Sentinel — finds the one path nobody tested",
      buffer:21, quest:{title:"Reconcile winner-selection logic — claim-order vs. secure random draw (Go socket service)", progress:70},
      struggle:"Waiting on Platform Eng for socket-service repo access, 6 days",
      nextCheckin:{date:"Jul 31", type:"blocker review"},
      infractions:[],
      leave:{balance:11, takenYTD:5, upcoming:null},
      coaching:[{skill:"Communication", goal:"Escalate cross-team blockers within 48h instead of waiting them out", evidence:"Socket-service access request sat 4 days before Devon flagged it", due:"Aug 8", status:"active"}] },

    { id:"renata", name:"Renata Silva", role:"Governance Team Lead", cls:"Warden", level:13,
      hp:71, hpMax:100, sp:58, spMax:100,
      stats:{Execution:68,Craft:80,Communication:74,Resilience:84,Strategy:72,Adaptability:63},
      resistances:{Ambiguity:14,"Deadline Pressure":13,"Context-Switching":10,Conflict:15,Repetition:9},
      loadout:[
        {slot:"Primary Focus", name:"Q3 Compliance Sweep", power:14},
        {slot:"Secondary Focus", name:"Policy Framework", power:12},
        {slot:"Core Toolkit", name:"Audit Checklist Suite", power:13},
        {slot:"Certification", name:"GRC Practitioner", power:11},
        {slot:"Support Process", name:"Incident Log Review", power:9}
      ],
      skills:[{name:"Policy Design",lvl:4},{name:"Cross-functional Coordination",lvl:4},{name:"Risk Assessment",lvl:5},{name:"Coaching",lvl:3},{name:"Negotiation",lvl:2}],
      roles:{reportsTo:"COO", directReports:["Aisha Bello (HR)","Tomas Varga (Finance)","Elin Kask (Legal)"], tenure:"4.0 yrs", orgLabel:"Governance"},
      flavor:"Warden — keeps the walls standing so everyone else can build",
      buffer:55, quest:{title:"Q3 compliance audit sweep — HR, Finance, Legal", progress:44},
      struggle:null, nextCheckin:{date:"Aug 6", type:"1:1"},
      infractions:[],
      leave:{balance:6, takenYTD:12, upcoming:null},
      coaching:[] },

    { id:"sana", name:"Sana Rocha", role:"Business Operations Lead", cls:"Ranger", level:8,
      hp:58, hpMax:100, sp:33, spMax:100,
      stats:{Execution:74,Craft:66,Communication:69,Resilience:57,Strategy:55,Adaptability:72},
      resistances:{Ambiguity:10,"Deadline Pressure":6,"Context-Switching":13,Conflict:7,Repetition:8},
      loadout:[
        {slot:"Primary Focus", name:"Vendor Contract Renewals", power:10},
        {slot:"Secondary Focus", name:"Logistics Coverage", power:9},
        {slot:"Core Toolkit", name:"Contract Tracker", power:8},
        {slot:"Certification", name:"None on file", power:0},
        {slot:"Support Process", name:"Renewal Reminders", power:6}
      ],
      skills:[{name:"Vendor Negotiation",lvl:3},{name:"Process Design",lvl:2},{name:"Contract Review",lvl:2},{name:"Prioritization",lvl:2},{name:"Time Management",lvl:2}],
      roles:{reportsTo:"COO", directReports:[], tenure:"1.3 yrs", orgLabel:"Biz Ops"},
      flavor:"Ranger — covers more ground than the headcount suggests",
      buffer:24, quest:{title:"Vendor contract renewals — logistics", progress:20},
      struggle:"Renewal backlog growing faster than she can review it",
      nextCheckin:{date:"Aug 1", type:"1:1"},
      infractions:[{date:"Jun 12", note:"Missed a vendor renewal deadline — verbal reminder given, no repeat since", severity:"low"}],
      leave:{balance:4, takenYTD:3, upcoming:{start:"Aug 4", end:"Aug 8"}},
      coaching:[] },

    { id:"jonah", name:"Jonah Reyes", role:"Creative Director", cls:"Bard", level:10,
      hp:88, hpMax:100, sp:70, spMax:100,
      stats:{Execution:79,Craft:84,Communication:90,Resilience:68,Strategy:74,Adaptability:77},
      resistances:{Ambiguity:16,"Deadline Pressure":11,"Context-Switching":14,Conflict:12,Repetition:6},
      loadout:[
        {slot:"Primary Focus", name:"Loot Drop Launch Campaign", power:15},
        {slot:"Secondary Focus", name:"Brand Refresh", power:10},
        {slot:"Core Toolkit", name:"Creative Pipeline Suite", power:13},
        {slot:"Certification", name:"None on file", power:0},
        {slot:"Support Process", name:"Creator Relations", power:11}
      ],
      skills:[{name:"Storytelling",lvl:5},{name:"Art Direction",lvl:4},{name:"Campaign Strategy",lvl:3},{name:"Cross-team Pitching",lvl:4},{name:"Budget Planning",lvl:2}],
      roles:{reportsTo:"CTO", directReports:["2 designers","1 copywriter"], tenure:"2.8 yrs", orgLabel:"Creative"},
      flavor:"Bard — turns a feature list into a reason to care",
      buffer:62, quest:{title:"Loot Drop launch campaign — creator kit", progress:66},
      struggle:null, nextCheckin:{date:"Aug 5", type:"goal review"},
      infractions:[],
      leave:{balance:12, takenYTD:4, upcoming:null},
      coaching:[] },

    { id:"aisha", name:"Aisha Bello", role:"People & Talent Lead", cls:"Cleric", level:12,
      hp:80, hpMax:100, sp:62, spMax:100,
      stats:{Execution:66,Craft:78,Communication:92,Resilience:80,Strategy:61,Adaptability:68},
      resistances:{Ambiguity:11,"Deadline Pressure":12,"Context-Switching":9,Conflict:17,Repetition:10},
      loadout:[
        {slot:"Primary Focus", name:"Onboarding Skill-Tree Refresh", power:12},
        {slot:"Secondary Focus", name:"Talent Pipeline", power:10},
        {slot:"Core Toolkit", name:"HRIS Platform", power:14},
        {slot:"Certification", name:"SHRM-CP", power:13},
        {slot:"Support Process", name:"Exit Interview Protocol", power:8}
      ],
      skills:[{name:"Conflict Mediation",lvl:5},{name:"Coaching",lvl:4},{name:"Talent Sourcing",lvl:3},{name:"Employment Law Basics",lvl:3},{name:"Onboarding Design",lvl:4}],
      roles:{reportsTo:"Renata Silva", directReports:["1 recruiter","1 HR generalist"], tenure:"3.6 yrs", orgLabel:"HR"},
      flavor:"Cleric — the team's HP bar stays green because of her",
      buffer:58, quest:{title:"Refresh onboarding skill-tree templates", progress:51},
      struggle:null, nextCheckin:{date:"Jul 30", type:"1:1"},
      infractions:[],
      leave:{balance:8, takenYTD:8, upcoming:null},
      coaching:[{skill:"Strategy", goal:"Bring a phased staffing plan, not just a headcount ask, to review", evidence:"Q4 headcount request lacked a phasing plan and got sent back", due:"Feb 2026", status:"completed", outcome:"Q1 headcount plan approved on first pass"}] },

    { id:"tomas", name:"Tomas Varga", role:"Finance Lead", cls:"Alchemist", level:15,
      hp:67, hpMax:100, sp:51, spMax:100,
      stats:{Execution:62,Craft:89,Communication:54,Resilience:76,Strategy:80,Adaptability:50},
      resistances:{Ambiguity:9,"Deadline Pressure":14,"Context-Switching":7,Conflict:6,Repetition:15},
      loadout:[
        {slot:"Primary Focus", name:"Q4 Runway Model", power:14},
        {slot:"Secondary Focus", name:"Payroll Ops", power:16},
        {slot:"Core Toolkit", name:"Financial Modeling Suite", power:17},
        {slot:"Certification", name:"CFA Level II", power:15},
        {slot:"Support Process", name:"Expense Approval Queue", power:9}
      ],
      skills:[{name:"Financial Modeling",lvl:5},{name:"Forecasting",lvl:5},{name:"Board Reporting",lvl:3},{name:"Cross-team Budgeting",lvl:2},{name:"Vendor Cost Analysis",lvl:3}],
      roles:{reportsTo:"Renata Silva", directReports:["1 AP/AR analyst"], tenure:"4.7 yrs", orgLabel:"Finance"},
      flavor:"Alchemist — transmutes spreadsheets into runway",
      buffer:47, quest:{title:"Runway model refresh for Q4", progress:30},
      struggle:null, nextCheckin:{date:"Aug 3", type:"finance snapshot"},
      infractions:[],
      leave:{balance:15, takenYTD:1, upcoming:null},
      coaching:[{skill:"Communication", goal:"Share the Q4 model draft with COO before it's finished, not after", evidence:"Q2 model surprised the leadership review by 2 weeks", due:"Aug 3", status:"active"}] },

    { id:"elin", name:"Elin Kask", role:"Legal Lead", cls:"Loremaster", level:16,
      hp:39, hpMax:100, sp:22, spMax:100,
      stats:{Execution:52,Craft:94,Communication:60,Resilience:66,Strategy:77,Adaptability:44},
      resistances:{Ambiguity:13,"Deadline Pressure":5,"Context-Switching":8,Conflict:11,Repetition:18},
      loadout:[
        {slot:"Primary Focus", name:"NDA Backlog Clearance", power:11},
        {slot:"Secondary Focus", name:"Partnership Agreements", power:13},
        {slot:"Core Toolkit", name:"Contract Repository", power:16},
        {slot:"Certification", name:"Bar Admission", power:18},
        {slot:"Support Process", name:"Paralegal Support", power:0}
      ],
      skills:[{name:"Contract Drafting",lvl:5},{name:"Risk Flagging",lvl:5},{name:"IP Strategy",lvl:4},{name:"Negotiation",lvl:3},{name:"Regulatory Research",lvl:4}],
      roles:{reportsTo:"Renata Silva", directReports:[], tenure:"5.2 yrs", orgLabel:"Legal"},
      flavor:"Loremaster — keeper of every clause anyone's ever signed",
      buffer:14, quest:{title:"NDA backlog clearance", progress:22},
      struggle:"NDA queue at 31 open, no paralegal support since April",
      nextCheckin:{date:"Jul 30", type:"blocker review"},
      infractions:[],
      leave:{balance:3, takenYTD:2, upcoming:null},
      coaching:[] }
  ];

  var peopleById = {};
  var nextCoachingId = 1;
  people.forEach(function (p) {
    peopleById[p.id] = p;
    p.morale = Math.round(p.stats.Resilience / 10);
    p.coaching.forEach(function (c) { c.id = nextCoachingId++; });
  });

  function severity(p) {
    if (p.struggle && p.hp < 50) return 3;
    if (p.struggle || p.hp < 65) return 2;
    return 1;
  }
  var ranked = people.slice().sort(function (a, b) { return severity(b) - severity(a) || a.hp - b.hp; });
  var activeParty = ranked.slice(0, 5);
  var reserve = ranked.slice(5);

  var selectedId = activeParty[0].id;
  var activeTab = "attributes";
  var completingQuestId = null;          // Feature B — coaching quest currently showing its "confirm completion" form
  var personalRecordRevealed = {};       // Feature C — { personId: true } once the sealed section has been clicked open

  function icon(id) { return '<svg><use href="#' + id + '"></use></svg>'; }
  function hpClass(pct) { return pct < 50 ? "crit" : pct < 65 ? "warn" : ""; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  function parseCheckinDate(str) { return new Date("2026 " + str); }
  function lowestStat(p) { var low = null; STATS.forEach(function (k) { if (!low || p.stats[k] < p.stats[low]) low = k; }); return low; }
  function highestStat(p) { var high = null; STATS.forEach(function (k) { if (!high || p.stats[k] > p.stats[high]) high = k; }); return high; }
  function avgStat(p) { return STATS.reduce(function (s, k) { return s + p.stats[k]; }, 0) / STATS.length; }

  /* ---------- Party rail ---------- */
  function renderRail() {
    document.getElementById("activeCount").textContent = activeParty.length + " / 5";
    document.getElementById("reserveCount").textContent = reserve.length + " on bench";

    document.getElementById("slotList").innerHTML = activeParty.map(function (p, i) {
      var hpPct = Math.round(p.hp / p.hpMax * 100), spPct = Math.round(p.sp / p.spMax * 100);
      return '<button class="slot-card' + (p.id === selectedId ? " selected" : "") + '" data-select="' + p.id + '">' +
        '<span class="slot-num">' + (i + 1) + '</span>' +
        '<span class="portrait">' + initials(p.name) + '</span>' +
        '<span class="slot-meta">' +
          '<span class="slot-name-row"><span class="slot-name">' + p.name + '</span><span class="slot-lv">Lv ' + p.level + '</span></span>' +
          '<span class="mini-bars">' +
            '<span class="mini-track"><span class="mini-fill hp ' + hpClass(hpPct) + '" style="width:' + hpPct + '%"></span></span>' +
            '<span class="mini-track"><span class="mini-fill sp" style="width:' + spPct + '%"></span></span>' +
          '</span>' +
        '</span>' +
        '</button>';
    }).join("");

    document.getElementById("reserveTiles").innerHTML = reserve.map(function (p) {
      return '<button class="roster-tile' + (p.id === selectedId ? " selected" : "") + '" data-select="' + p.id + '">' +
        '<span class="portrait">' + initials(p.name) + '</span>' +
        '<span class="rname">' + p.name.split(" ")[0] + '</span>' +
        '<span class="rrole">' + p.role + '</span>' +
        '</button>';
    }).join("");
  }

  function initials(name) { return name.split(" ").map(function (w) { return w[0]; }).join(""); }

  /* ---------- People KPIs + Spotlight ---------- */
  function renderPeopleKPIs() {
    var activeCoaching = people.reduce(function (n, p) { return n + p.coaching.filter(function (c) { return c.status !== "completed"; }).length; }, 0);
    var openInfractions = people.reduce(function (n, p) { return n + p.infractions.length; }, 0);
    var needsAttention = people.filter(function (p) { return severity(p) > 1; }).length;
    var kpis = [
      { label: "Headcount", value: String(people.length), delta: "stable", tone: "flat" },
      { label: "Needs Attention", value: String(needsAttention), delta: needsAttention > 3 ? "elevated" : "normal", tone: needsAttention > 3 ? "warning" : "good" },
      { label: "Coaching Quests Active", value: String(activeCoaching), delta: "tracked", tone: "good" },
      { label: "Open Infractions", value: String(openInfractions), delta: openInfractions > 0 ? "review" : "clean", tone: openInfractions > 0 ? "warning" : "good" }
    ];
    document.getElementById("peopleKpiRow").innerHTML = kpis.map(function (k) {
      return '<div class="kpi"><div class="label">' + k.label + '</div><div class="value-row"><span class="value">' + k.value + '</span><span class="delta ' + k.tone + '">' + k.delta + '</span></div></div>';
    }).join("");
  }

  function renderSpotlight() {
    var pool = reserve.length ? reserve : people;
    var best = pool.slice().sort(function (a, b) { return avgStat(b) - avgStat(a); })[0];
    var bestKey = highestStat(best);
    document.getElementById("recognizePanel").innerHTML =
      '<div class="panel-head"><h3>Recognize</h3><div class="hint">Steady + highest composite score</div></div>' +
      '<div class="detail-header" style="align-items:center;">' +
        '<span class="portrait" style="width:44px;height:44px;font-size:14px;">' + initials(best.name) + '</span>' +
        '<span class="detail-id"><span class="detail-name" style="font-size:15px;">' + best.name + '</span><span class="detail-role">' + best.role + '</span></span>' +
      '</div>' +
      '<p style="font-size:12.5px;color:var(--text-secondary);margin:10px 0 0;">Leading the roster on ' + bestKey + ' (' + best.stats[bestKey] + ') while holding steady status — worth calling out this cycle.</p>';

    var counts = {};
    people.forEach(function (p) { var l = lowestStat(p); counts[l] = (counts[l] || 0) + 1; });
    var topGap = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })[0];
    document.getElementById("coachPriorityPanel").innerHTML =
      '<div class="panel-head"><h3>Team Coaching Priority</h3><div class="hint">Org-wide growth edge</div></div>' +
      '<p style="font-size:12.5px;color:var(--text-secondary);">' + counts[topGap] + ' of ' + people.length + ' team members show <strong style="color:var(--accent-strong);">' + topGap + '</strong> as their lowest attribute — the highest-leverage skill to build coaching templates around this quarter.</p>';
  }

  /* ---------- Radar chart ---------- */
  function buildRadar(stats) {
    var keys = STATS, n = keys.length, cx = 100, cy = 100, R = 74;
    var rings = [0.33, 0.66, 1].map(function (f) {
      var pts = keys.map(function (_, i) {
        var a = (-90 + i * 360 / n) * Math.PI / 180;
        return (cx + Math.cos(a) * R * f) + "," + (cy + Math.sin(a) * R * f);
      }).join(" ");
      return '<polygon points="' + pts + '" fill="none" stroke="var(--border)" stroke-width="1" />';
    }).join("");
    var axes = keys.map(function (_, i) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" stroke="var(--border)" stroke-width="1" />';
    }).join("");
    var dataPts = keys.map(function (k, i) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var v = stats[k] / 100;
      return (cx + Math.cos(a) * R * v) + "," + (cy + Math.sin(a) * R * v);
    });
    var dots = keys.map(function (k, i) {
      var a = (-90 + i * 360 / n) * Math.PI / 180;
      var v = stats[k] / 100;
      var x = cx + Math.cos(a) * R * v, y = cy + Math.sin(a) * R * v;
      return '<circle cx="' + x + '" cy="' + y + '" r="3" fill="var(--accent-strong)" />';
    }).join("");

    return '<svg viewBox="0 0 200 200" width="200" height="200">' + rings + axes +
      '<polygon points="' + dataPts.join(" ") + '" fill="var(--accent)" fill-opacity="0.28" stroke="var(--accent)" stroke-width="2" />' +
      dots + '</svg>';
  }

  /* ---------- Detail panel ---------- */
  var TAB_LABELS = { attributes: "Attributes", loadout: "Loadout", skills: "Skills & Coaching", roles: "Dossier" };
  var TAB_ORDER = ["attributes", "loadout", "skills", "roles"];

  function cycleTab(dir) {
    var idx = TAB_ORDER.indexOf(activeTab);
    idx = (idx + dir + TAB_ORDER.length) % TAB_ORDER.length;
    activeTab = TAB_ORDER[idx];
    renderDetail();
  }

  /* ---- Feature C: gated Personal Record section (lives inside the Dossier tab) ---- */
  function renderPersonalRecordSection(p) {
    var revealed = !!personalRecordRevealed[p.id];
    var pr = p.personalRecord || {};

    if (!revealed) {
      return '<div class="panel" style="margin-top:14px;border-style:dashed;">' +
        '<div class="subpanel-title">' + icon("ic-lock") + ' &nbsp;Personal Record</div>' +
        '<p style="font-size:12px;color:var(--text-muted);margin:0 0 10px;">Legal name, date of birth, working style, zodiac sign, MBTI type — self-reported at onboarding, for coaching context only.</p>' +
        '<button type="button" class="submit-btn" data-reveal="' + p.id + '" style="background:var(--surface-raised);color:var(--accent-strong);border:1px solid var(--border);">Reveal Personal Record</button>' +
        '</div>';
    }

    return '<div class="panel" style="margin-top:14px;border-style:dashed;">' +
      '<div class="subpanel-title">' + icon("ic-unlock") + ' &nbsp;Personal Record</div>' +
      '<p style="font-size:11.5px;color:var(--warning);margin:0 0 12px;">Not used in employment, compensation, or promotion decisions. Self-reported and optional — see the PRD’s Privacy &amp; Compliance section before this ever touches real employee data.</p>' +
      '<form class="coach-form" id="personalRecordForm" data-person="' + p.id + '">' +
        '<div class="field"><label for="prLegalName">Legal name</label><input id="prLegalName" type="text" value="' + esc(pr.legalName) + '" placeholder="Optional" /></div>' +
        '<div class="field"><label for="prDob">Date of birth</label><input id="prDob" type="date" value="' + esc(pr.dob) + '" /></div>' +
        '<div class="field"><label for="prComm">Communication preference</label><input id="prComm" type="text" value="' + esc(pr.commPref) + '" placeholder="e.g. Direct, in writing first" /></div>' +
        '<div class="field"><label for="prFeedback">Feedback preference</label><input id="prFeedback" type="text" value="' + esc(pr.feedbackPref) + '" placeholder="e.g. Specific examples, 1:1 not group" /></div>' +
        '<div class="field"><label for="prStress">Stress response</label><input id="prStress" type="text" value="' + esc(pr.stressResponse) + '" placeholder="e.g. Goes quiet, needs space before problem-solving" /></div>' +
        '<div class="field"><label for="prMotivators">Motivators</label><input id="prMotivators" type="text" value="' + esc(pr.motivators) + '" placeholder="e.g. Ownership, learning new systems" /></div>' +
        '<div class="field"><label for="prZodiac">Zodiac sign <em>(optional, informational only)</em></label><input id="prZodiac" type="text" value="' + esc(pr.zodiac) + '" /></div>' +
        '<div class="field"><label for="prMbti">MBTI type <em>(optional, self-reported only)</em></label><input id="prMbti" type="text" value="' + esc(pr.mbti) + '" placeholder="e.g. INFJ" /></div>' +
        '<button type="submit" class="submit-btn">Save Personal Record</button>' +
      '</form>' +
      (pr.savedAt ? '<p style="font-size:10.5px;color:var(--text-muted);margin-top:8px;">Last saved ' + new Date(pr.savedAt).toLocaleString() + '</p>' : '') +
      '</div>';
  }

  function renderDetail() {
    var p = peopleById[selectedId];
    var hpPct = Math.round(p.hp / p.hpMax * 100), spPct = Math.round(p.sp / p.spMax * 100);

    var header =
      '<div class="detail-header">' +
        '<span class="detail-portrait">' + initials(p.name) + '</span>' +
        '<span class="detail-id">' +
          '<span class="detail-name">' + p.name + '</span>' +
          '<span class="detail-role">' + p.role + ' · ' + p.cls + '</span>' +
          '<span class="detail-flavor">' + p.flavor + '</span>' +
        '</span>' +
        '<span class="detail-lv">LV ' + p.level + '</span>' +
      '</div>' +
      '<div class="status-bar-row">' +
        '<div class="status-bar"><div class="status-bar-label"><span>Capacity (HP)</span><span>' + p.hp + '/' + p.hpMax + '</span></div>' +
          '<div class="bar-track"><div class="bar-fill mini-fill hp ' + hpClass(hpPct) + '" style="width:' + hpPct + '%"></div></div></div>' +
        '<div class="status-bar"><div class="status-bar-label"><span>Focus (SP)</span><span>' + p.sp + '/' + p.spMax + '</span></div>' +
          '<div class="bar-track"><div class="bar-fill mini-fill sp" style="width:' + spPct + '%"></div></div></div>' +
      '</div>';

    var tabNav = '<div class="tab-nav">' +
      '<button class="shoulder-btn" id="tabPrev">◀ L</button>' +
      '<div class="tab-bar" role="tablist" aria-label="Character sheet sections">' + TAB_ORDER.map(function (t) {
        return '<button class="tab-btn' + (t === activeTab ? " active" : "") + '" data-tab="' + t + '" role="tab" aria-selected="' + (t === activeTab) + '">' + TAB_LABELS[t] + '</button>';
      }).join("") + '</div>' +
      '<button class="shoulder-btn" id="tabNext">R ▶</button>' +
      '</div>';

    var body = "";
    if (activeTab === "attributes") {
      var lowK = lowestStat(p);
      var attrRows = STATS.map(function (k) {
        return '<div class="attr-row"><span class="aname"' + (k === lowK ? ' style="color:var(--warning);font-weight:700;"' : '') + '>' + k + (k === lowK ? " — growth edge" : "") + '</span><span class="aval">' + p.stats[k] + '</span></div>';
      }).join("");
      var resRows = Object.keys(p.resistances).map(function (k) { return '<div class="attr-row"><span class="aname">' + k + '</span><span class="aval">' + p.resistances[k] + '</span></div>'; }).join("");
      var legend = STATS.map(function (k) { return '<div class="radar-legend-item"><span>' + k + '</span><b>' + p.stats[k] + '</b></div>'; }).join("");
      body = '<div class="tab-content">' +
        '<div><div class="subpanel-title">Attributes</div><div class="attr-list">' + attrRows + '</div>' +
          '<div class="subpanel-title" style="margin-top:14px;">Resistances</div><div class="attr-list">' + resRows + '</div></div>' +
        '<div class="radar-wrap"><div class="subpanel-title" style="align-self:flex-start;">Stat Web</div>' + buildRadar(p.stats) +
          '<div class="radar-legend">' + legend + '</div></div>' +
      '</div>';
    } else if (activeTab === "loadout") {
      var iconMap = { "Primary Focus": "ic-sword", "Secondary Focus": "ic-sword", "Core Toolkit": "ic-gear", "Certification": "ic-medal", "Support Process": "ic-shieldeq" };
      var rows = p.loadout.map(function (l) {
        return '<div class="loadout-row"><span class="loadout-icon">' + icon(iconMap[l.slot] || "ic-gear") + '</span>' +
          '<span class="loadout-text"><span class="loadout-slot">' + l.slot + '</span>' +
          '<span class="loadout-name' + (l.power === 0 ? " empty" : "") + '">' + l.name + '</span></span>' +
          '<span class="loadout-power">' + (l.power === 0 ? "—" : l.power) + '</span></div>';
      }).join("");
      body = '<div class="tab-content single"><div><div class="subpanel-title">Equipped Loadout</div>' +
        '<div class="loadout-list">' + rows + '</div>' +
        '<div class="buffer-line"><span>Deadline Buffer</span><b>' + p.buffer + '%</b></div></div></div>';
    } else if (activeTab === "skills") {
      var skillTiles = p.skills.map(function (s) {
        var pips = "";
        for (var i = 0; i < 5; i++) pips += '<span class="pip' + (i < s.lvl ? " filled" : "") + '"></span>';
        return '<div class="skill-tile"><span class="skill-name">' + s.name + '</span><span class="pip-row">' + pips + '</span></div>';
      }).join("");
      var activeCoaching = p.coaching.filter(function (c) { return c.status !== "completed"; });
      var pastCoaching = p.coaching.filter(function (c) { return c.status === "completed"; });
      var coachRows = activeCoaching.length ? activeCoaching.map(function (c) {
        var completeUi = completingQuestId === c.id
          ? '<form class="coach-form" data-complete-form="' + c.id + '" style="margin-top:8px;">' +
              '<div class="field"><label for="outcome-' + c.id + '">Outcome — required to close this out</label>' +
              '<textarea id="outcome-' + c.id + '" required placeholder="What changed / evidence it worked"></textarea></div>' +
              '<button type="submit" class="submit-btn">Confirm Completion</button>' +
              ' <button type="button" class="shoulder-btn" data-cancel-complete="1">Cancel</button>' +
            '</form>'
          : '<button type="button" class="shoulder-btn" data-start-complete="' + c.id + '" style="margin-top:6px;">Mark Complete</button>';
        return '<div class="coach-item"><div class="head"><span>' + esc(c.skill) + '</span><span class="due">Due ' + esc(c.due) + '</span></div>' +
          '<div class="evidence"><strong>Target:</strong> ' + esc(c.goal) + '</div><div class="evidence"><strong>Evidence:</strong> ' + esc(c.evidence) + '</div>' +
          completeUi + '</div>';
      }).join("") : '<div class="coach-empty">No active coaching quests.</div>';
      var historyRows = pastCoaching.length ? pastCoaching.map(function (c) {
        return '<div class="coach-item" style="opacity:0.75;"><div class="head"><span>✓ ' + esc(c.skill) + '</span><span class="due">Closed ' + esc(c.due) + '</span></div>' +
          '<div class="evidence"><strong>Target:</strong> ' + esc(c.goal) + '</div><div class="evidence"><strong>Outcome:</strong> ' + esc(c.outcome) + '</div></div>';
      }).join("") : '<div class="coach-empty">No closed coaching quests yet.</div>';
      var statOptions = STATS.map(function (k) { return '<option value="' + k + '"' + (k === lowestStat(p) ? " selected" : "") + '>' + k + ' — ' + p.stats[k] + '</option>'; }).join("");
      body = '<div class="tab-content"><div><div class="subpanel-title">Skill Tree</div><div class="skills-grid">' + skillTiles + '</div></div>' +
        '<div><div class="subpanel-title">Active Coaching</div><div class="coach-list">' + coachRows + '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Coaching History</div><div class="coach-list">' + historyRows + '</div>' +
        '<form class="coach-form" id="coachForm">' +
          '<div class="field"><label for="skillSel">Skill focus</label><select id="skillSel">' + statOptions + '</select></div>' +
          '<div class="field"><label for="goalInput">Coaching target</label><input id="goalInput" type="text" placeholder="e.g. Flag blockers within 48 hours" required /></div>' +
          '<div class="field"><label for="evInput">Evidence</label><textarea id="evInput" placeholder="What you observed that prompted this" required></textarea></div>' +
          '<div class="field"><label for="dueInput">Check back by</label><input id="dueInput" type="text" placeholder="e.g. Aug 12" required /></div>' +
          '<button type="submit" class="submit-btn">Assign Coaching Quest</button>' +
        '</form></div></div>';
    } else if (activeTab === "roles") {
      var reports = p.roles.directReports.length ? p.roles.directReports.map(function (d) { return '<span class="plain-chip">' + d + '</span>'; }).join("") : '<span class="plain-chip">No direct reports</span>';
      var leaveRow = p.leave.upcoming
        ? '<div class="kv-row"><span class="k">Upcoming leave</span><span class="v">' + p.leave.upcoming.start + '–' + p.leave.upcoming.end + '</span></div>'
        : '<div class="kv-row"><span class="k">Upcoming leave</span><span class="v">None scheduled</span></div>';
      var infractionRows = p.infractions.length
        ? p.infractions.map(function (inf) {
            return '<div class="list-row"><span class="stripe ' + (inf.severity === "low" ? "warning" : "critical") + '"></span>' +
              '<span class="body"><span class="title">' + inf.date + '</span><span class="sub">' + inf.note + '</span></span></div>';
          }).join("")
        : '<div class="coach-empty">No infractions on record.</div>';
      body = '<div class="tab-content"><div>' +
        '<div class="subpanel-title">Role Sheet</div>' +
        '<div class="roles-kv">' +
        '<div class="kv-row"><span class="k">Reports to</span><span class="v">' + p.roles.reportsTo + '</span></div>' +
        '<div class="kv-row"><span class="k">Tenure</span><span class="v">' + p.roles.tenure + '</span></div>' +
        '<div class="kv-row"><span class="k">Morale (LP)</span><span class="v">' + p.morale + ' / 10</span></div>' +
        '<div class="kv-row"><span class="k">Next check-in</span><span class="v">' + p.nextCheckin.date + ' · ' + p.nextCheckin.type + '</span></div>' +
        '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Direct Reports</div><div class="chip-list">' + reports + '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Active Quest</div>' +
        '<div class="loadout-row" style="border-bottom:none;"><span class="loadout-icon">' + icon("ic-target") + '</span>' +
        '<span class="loadout-text"><span class="loadout-name">' + p.quest.title + '</span></span></div>' +
        '<div class="bar-track"><div class="bar-fill mini-fill sp" style="width:' + p.quest.progress + '%"></div></div>' +
        (p.struggle ? '<div class="detail-flavor" style="color:var(--warning);margin-top:8px;">⚠ ' + p.struggle + '</div>' : '') +
        '</div>' +
        '<div>' +
        '<div class="subpanel-title">Leave</div>' +
        '<div class="roles-kv">' +
        '<div class="kv-row"><span class="k">Balance</span><span class="v">' + p.leave.balance + ' days</span></div>' +
        '<div class="kv-row"><span class="k">Taken YTD</span><span class="v">' + p.leave.takenYTD + ' days</span></div>' +
        leaveRow +
        '</div>' +
        '<div class="subpanel-title" style="margin-top:12px;">Infractions</div>' +
        '<div class="list-rows">' + infractionRows + '</div>' +
        '</div></div>' +
        renderPersonalRecordSection(p);
    }

    document.getElementById("detailPanel").innerHTML = header + tabNav + body;

    document.getElementById("tabPrev").addEventListener("click", function () { cycleTab(-1); });
    document.getElementById("tabNext").addEventListener("click", function () { cycleTab(1); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-tab]"), function (btn) {
      btn.addEventListener("click", function () { activeTab = btn.getAttribute("data-tab"); renderDetail(); });
    });

    var form = document.getElementById("coachForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var skill = document.getElementById("skillSel").value;
        var goal = document.getElementById("goalInput").value.trim();
        var ev = document.getElementById("evInput").value.trim();
        var due = document.getElementById("dueInput").value.trim();
        if (!goal || !ev || !due) return;
        p.coaching.unshift({ id: nextCoachingId++, skill: skill, goal: goal, evidence: ev, due: due, status: "active" });
        renderDetail();
        renderPeopleKPIs();
      });
    }

    // --- Feature B: Mark Complete wiring ---
    Array.prototype.forEach.call(document.querySelectorAll("[data-start-complete]"), function (btn) {
      btn.addEventListener("click", function () { completingQuestId = Number(btn.getAttribute("data-start-complete")); renderDetail(); });
    });
    var cancelBtn = document.querySelector("[data-cancel-complete]");
    if (cancelBtn) cancelBtn.addEventListener("click", function () { completingQuestId = null; renderDetail(); });
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
        renderDetail();
        renderPeopleKPIs();
      });
    });

    // --- Feature C: Personal Record wiring ---
    Array.prototype.forEach.call(document.querySelectorAll("[data-reveal]"), function (btn) {
      btn.addEventListener("click", function () { personalRecordRevealed[btn.getAttribute("data-reveal")] = true; renderDetail(); });
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
        renderDetail();
      });
    }
  }

  document.addEventListener("click", function (e) {
    var sel = e.target.closest("[data-select]");
    if (sel) { selectedId = sel.getAttribute("data-select"); activeTab = "attributes"; completingQuestId = null; renderRail(); renderDetail(); }
  });

  /* ---------- Mode switch ---------- */
  document.getElementById("tabPartyBtn").addEventListener("click", function () { setMode("party"); });
  document.getElementById("tabOpsBtn").addEventListener("click", function () { setMode("ops"); });
  function setMode(mode) {
    var isParty = mode === "party";
    document.getElementById("partyView").hidden = !isParty;
    document.getElementById("opsView").hidden = isParty;
    document.getElementById("tabPartyBtn").classList.toggle("active", isParty);
    document.getElementById("tabPartyBtn").setAttribute("aria-selected", String(isParty));
    document.getElementById("tabOpsBtn").classList.toggle("active", !isParty);
    document.getElementById("tabOpsBtn").setAttribute("aria-selected", String(!isParty));
    document.body.classList.toggle("ops-active", !isParty);
  }

  /* ================= OPS DATA + RENDER ================= */
  var plMonths = [
    { m: "Feb", rev: 195, exp: 210 },
    { m: "Mar", rev: 205, exp: 215 },
    { m: "Apr", rev: 215, exp: 218 },
    { m: "May", rev: 230, exp: 224 },
    { m: "Jun", rev: 248, exp: 230 },
    { m: "Jul", rev: 260, exp: 232 }
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
    { type: "meeting", date: "Jul 30", title: "1:1 — Aisha Bello", sub: "Onboarding template refresh sync" },
    { type: "meeting", date: "Jul 31", title: "Blocker review — Devon Cross", sub: "Socket-service repo access escalation" },
    { type: "work", date: "Jul 28", title: "NDA backlog: 3 cleared", sub: "Elin Kask — queue down to 31" },
    { type: "work", date: "Jul 26", title: "Creator kit assets delivered", sub: "Jonah Reyes — Loot Drop launch campaign" },
    { type: "meeting", date: "Aug 1", title: "1:1 — Sana Rocha", sub: "Vendor renewal backlog" },
    { type: "work", date: "Jul 24", title: "Q3 HR audit pass complete", sub: "Renata Silva — compliance sweep, 1 of 3 legs done" },
    { type: "meeting", date: "Aug 3", title: "Finance snapshot — Tomas Varga", sub: "Q4 runway model review" },
    { type: "work", date: "Jul 23", title: "Loot Drop socket migration — staging deploy", sub: "Mara Okoye — pending Devon's audit sign-off" },
    { type: "meeting", date: "Aug 4", title: "Goal review — Priya Anand", sub: "Loot Drop v2 reward-type spec" }
  ];
  var complianceItems = [
    { title: "Winner-selection logic discrepancy (Loot Drop)", sub: "Owner: Devon Cross · claim-order vs. secure random draw", sev: "critical", tag: "Open" },
    { title: "NDA backlog", sub: "Owner: Elin Kask · 31 open, no paralegal support", sev: "critical", tag: "Open" },
    { title: "Q3 compliance sweep — HR / Finance / Legal", sub: "Owner: Renata Silva · in progress", sev: "warning", tag: "44%" },
    { title: "SOC 2 Type II renewal", sub: "Owner: Renata Silva · evidence window opens Aug 10", sev: "good", tag: "On track" }
  ];
  var approvals = [
    { title: "PTO request — Sana Rocha", sub: "Aug 4–8", sev: "warning", tag: "Pending" },
    { title: "Expense report — Jonah Reyes", sub: "$2,340 · campaign spend", sev: "warning", tag: "Pending" },
    { title: "NDA countersignature — Elin Kask", sub: "Partnership agreement", sev: "critical", tag: "Pending" },
    { title: "Payroll adjustment — Tomas Varga", sub: "Q3 bonus accrual correction", sev: "warning", tag: "Pending" }
  ];
  var docs = [
    { title: "Vendor MSA — CloudHost Inc.", sub: "Renews Aug 15", sev: "warning", tag: "16d" },
    { title: "SOC 2 Type II certification", sub: "Expires Sep 1", sev: "warning", tag: "33d" },
    { title: "Streamer Partnership Agreement — Creator Guild", sub: "Renews Aug 20", sev: "good", tag: "21d" },
    { title: "D&O Insurance Policy", sub: "Renews Oct 3", sev: "good", tag: "65d" }
  ];

  function renderOpsKPIs() {
    var last = plMonths[plMonths.length - 1], prev = plMonths[plMonths.length - 2];
    var netLast = last.rev - last.exp, netPrev = prev.rev - prev.exp;
    var kpis = [
      { label: "MRR", value: "$" + last.rev + "K", delta: "+" + Math.round((last.rev-prev.rev)/prev.rev*100) + "% MoM", tone: "good" },
      { label: "Net (Rev − Exp)", value: (netLast >= 0 ? "+$" : "−$") + Math.abs(netLast) + "K", delta: netLast > netPrev ? "widening" : "narrowing", tone: netLast >= 0 ? "good" : "warning" },
      { label: "Cash Runway", value: "14 mo", delta: "flat", tone: "flat" },
      { label: "Open Compliance Flags", value: String(complianceItems.filter(function(c){return c.sev!=="good";}).length), delta: "review", tone: "warning" }
    ];
    document.getElementById("opsKpiRow").innerHTML = kpis.map(function (k) {
      return '<div class="kpi"><div class="label">' + k.label + '</div><div class="value-row"><span class="value">' + k.value + '</span><span class="delta ' + k.tone + '">' + k.delta + '</span></div></div>';
    }).join("");
  }

  function renderPLChart() {
    var w = 560, h = 200, padL = 30, padB = 24, padT = 10;
    var max = Math.max.apply(null, plMonths.map(function (d) { return Math.max(d.rev, d.exp); }));
    var scale = (h - padT - padB) / (max * 1.1);
    var groupW = (w - padL) / plMonths.length;
    var barW = 16;
    var bars = plMonths.map(function (d, i) {
      var gx = padL + i * groupW + groupW / 2;
      var revH = d.rev * scale, expH = d.exp * scale;
      var x1 = gx - barW - 2, x2 = gx + 2;
      var y1 = h - padB - revH, y2 = h - padB - expH;
      return '<g>' +
        '<rect x="' + x1 + '" y="' + y1 + '" width="' + barW + '" height="' + revH + '" rx="3" fill="var(--accent)"><title>' + d.m + ' Revenue: $' + d.rev + 'K</title></rect>' +
        '<rect x="' + x2 + '" y="' + y2 + '" width="' + barW + '" height="' + expH + '" rx="3" fill="#5c7ea3"><title>' + d.m + ' Expenses: $' + d.exp + 'K</title></rect>' +
        '<text x="' + gx + '" y="' + (h - 6) + '" text-anchor="middle" fill="var(--text-muted)" font-size="10" font-family="var(--font-data)">' + d.m + '</text>' +
        '</g>';
    }).join("");
    var baseline = '<line x1="' + padL + '" y1="' + (h - padB) + '" x2="' + w + '" y2="' + (h - padB) + '" stroke="var(--border)" stroke-width="1"/>';
    document.getElementById("plChart").innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="min-width:480px;">' + baseline + bars + '</svg>';
  }

  function renderExpenseBars() {
    var total = expenseCats.reduce(function (s, c) { return s + c.value; }, 0);
    document.getElementById("expenseTotalHint").textContent = "$" + total + "K total";
    var max = Math.max.apply(null, expenseCats.map(function (c) { return c.value; }));
    var sortedCats = expenseCats.slice().sort(function (a, b) { return b.value - a.value; });
    document.getElementById("expenseBars").innerHTML = sortedCats.map(function (c, i) {
      var pct = Math.round(c.value / max * 100);
      var lightness = 78 - i * 10;
      return '<div class="seq-row"><div class="seq-label-row"><span class="n">' + c.name + '</span><span class="v">$' + c.value + 'K</span></div>' +
        '<div class="seq-track"><div class="seq-fill" style="width:' + pct + '%;background:hsl(42,60%,' + lightness + '%)"></div></div></div>';
    }).join("");
  }

  function renderSubscriptions() {
    var total = subscriptions.reduce(function (s, x) { return s + x.monthly; }, 0);
    document.getElementById("subsTotalHint").textContent = "$" + total.toFixed(1) + "K/mo · " + subscriptions.length + " tools";
    var sorted = subscriptions.slice().sort(function (a, b) { return b.monthly - a.monthly; });
    document.getElementById("subsList").innerHTML = sorted.map(function (s) {
      return '<div class="list-row"><span class="stripe good"></span><span class="body"><span class="title">' + s.tool + '</span><span class="sub">' + s.category + ' · renews ' + s.renews + '</span></span>' +
        '<span class="tag good">$' + s.monthly.toFixed(2) + 'K</span></div>';
    }).join("");
  }

  function renderActivityFeed() {
    var typeMeta = { meeting: { sev: "warning", tag: "Meeting" }, work: { sev: "good", tag: "Work" } };
    var sorted = activityFeed.slice().sort(function (a, b) { return parseCheckinDate(a.date) - parseCheckinDate(b.date); });
    document.getElementById("activityFeed").innerHTML = sorted.map(function (a) {
      var m = typeMeta[a.type];
      return '<div class="list-row"><span class="stripe ' + m.sev + '"></span><span class="body"><span class="title">' + a.title + '</span><span class="sub">' + a.date + ' · ' + a.sub + '</span></span><span class="tag ' + m.sev + '">' + m.tag + '</span></div>';
    }).join("");
  }

  function renderListPanel(elId, items) {
    document.getElementById(elId).innerHTML = items.map(function (it) {
      return '<div class="list-row"><span class="stripe ' + it.sev + '"></span><span class="body"><span class="title">' + it.title + '</span><span class="sub">' + it.sub + '</span></span><span class="tag ' + it.sev + '">' + it.tag + '</span></div>';
    }).join("");
  }

  function renderGoals() {
    var goals = people.map(function (p) { return { title: p.quest.title, owner: p.name, progress: p.quest.progress }; })
      .sort(function (a, b) { return a.progress - b.progress; }).slice(0, 5);
    document.getElementById("goalList").innerHTML = goals.map(function (g) {
      return '<div class="goal-row"><div class="goal-top"><span>' + g.title + '</span><span class="owner">' + g.progress + '%</span></div>' +
        '<div class="owner">' + g.owner + '</div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + g.progress + '%;height:100%;border-radius:4px;background:var(--accent);"></div></div></div>';
    }).join("");
  }

  function renderReportTiles() {
    var attendance = "96%", turnover = "4.2%", skillGaps = people.reduce(function (n, p) { return n + Object.values(p.stats).filter(function (v) { return v < 60; }).length; }, 0);
    var payrollCat = expenseCats.filter(function (c) { return c.name === "Payroll"; })[0];
    var payroll = "$" + payrollCat.value + "K";
    var tiles = [
      { label: "Attendance (30d)", value: attendance },
      { label: "Turnover (TTM)", value: turnover },
      { label: "Skill Gaps Flagged", value: String(skillGaps) },
      { label: "Payroll (Jul)", value: payroll }
    ];
    document.getElementById("reportTiles").innerHTML = tiles.map(function (t) {
      return '<div class="report-tile"><span class="rt-label">' + t.label + '</span><span class="rt-value">' + t.value + '</span></div>';
    }).join("");
  }

  function renderOrgMini() {
    // Derived live from each person's roles.reportsTo/orgLabel so this chart can never drift from the roster data.
    var branches = ["CTO", "COO"];
    var cols = branches.map(function (branch) {
      var directs = people.filter(function (p) { return p.roles.reportsTo === branch; });
      var leaves = directs.map(function (p) {
        return '<span class="org-leaf">' + esc(p.name.split(" ")[0]) + ' — ' + esc(p.roles.orgLabel) + '</span>';
      }).join("");
      var subLeaves = directs.map(function (lead) {
        return people.filter(function (p) { return p.roles.reportsTo === lead.name; }).map(function (p) {
          return '<span class="org-leaf sub">↳ ' + esc(p.name.split(" ")[0]) + ' — ' + esc(p.roles.orgLabel) + '</span>';
        }).join("");
      }).join("");
      return '<div class="org-col"><div class="org-node">' + branch + '</div><div class="org-leaf-group">' + leaves + subLeaves + '</div></div>';
    }).join("");
    document.getElementById("orgMini").innerHTML = '<div class="org-node">CEO</div><div class="org-branches">' + cols + '</div>';
  }

  renderOpsKPIs();
  renderPLChart();
  renderExpenseBars();
  renderSubscriptions();
  renderActivityFeed();
  document.getElementById("complianceCountHint").textContent = complianceItems.length + " tracked";
  renderListPanel("complianceList", complianceItems);
  renderListPanel("approvalList", approvals);
  renderGoals();
  renderListPanel("docList", docs);
  renderReportTiles();
  renderOrgMini();

  renderPeopleKPIs();
  renderSpotlight();
  renderRail();
  renderDetail();
})();
