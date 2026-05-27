import { useState, useRef, useEffect } from "react";

const DUMMY_SERVICES = [
  { id: 1, name: "UI/UX Design", description: "End-to-end interface design from wireframes to polished prototypes using Figma.", logoPreview: null, logo: null },
  { id: 2, name: "Web Development", description: "Full-stack web apps with React, Node.js and scalable cloud infrastructure.", logoPreview: null, logo: null },
  { id: 3, name: "SEO & Marketing", description: "Organic growth strategies, keyword targeting, and performance analytics.", logoPreview: null, logo: null },
  { id: 4, name: "Brand Identity", description: "Logo design, brand guidelines, color systems, and typography kits.", logoPreview: null, logo: null },
];

const DUMMY_QUERIES = [
  { id: 1, name: "Sara Ahmed", email: "sara.ahmed@gmail.com", service: "Web Development", message: "Can you build a multi-vendor ecommerce platform? Need it ready in 3 months with payment integration.", time: "2h ago", status: "new" },
  { id: 2, name: "Usman Tariq", email: "usman.t@outlook.com", service: "UI/UX Design", message: "Looking for a complete redesign of our mobile banking app. The current UX feels very cluttered.", time: "5h ago", status: "new" },
  { id: 3, name: "Fatima Malik", email: "fatima@startup.pk", service: "Brand Identity", message: "We are launching a fintech startup and need full branding done from scratch. Logo, colors, fonts.", time: "1d ago", status: "read" },
  { id: 4, name: "Bilal Hassan", email: "bilal.h@corp.com", service: "SEO & Marketing", message: "Monthly SEO retainer inquiry — what packages do you offer specifically for SaaS companies?", time: "2d ago", status: "read" },
  { id: 5, name: "Zara Khan", email: "zara.khan@agency.io", service: "Web Development", message: "Need a portfolio website built in Next.js. Clean, fast, minimal design. Budget is flexible.", time: "3d ago", status: "read" },
  { id: 6, name: "Ali Raza", email: "ali.raza@techco.pk", service: "SEO & Marketing", message: "We recently launched a new product line and need a full digital marketing campaign to drive traffic.", time: "4d ago", status: "read" },
];

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

const AVATAR_COLORS = [
  { bg: "#E6F1FB", color: "#185FA5" },
  { bg: "#EAF3DE", color: "#3B6D11" },
  { bg: "#FAEEDA", color: "#854F0B" },
  { bg: "#FBEAF0", color: "#993556" },
  { bg: "#EEEDFE", color: "#534AB7" },
  { bg: "#E1F5EE", color: "#0F6E56" },
];

export default function AdminServices() {
  const [services, setServices] = useState(DUMMY_SERVICES);
  const [queries] = useState(DUMMY_QUERIES);
  const [showQueries, setShowQueries] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [nextId, setNextId] = useState(5);
  const [form, setForm] = useState({ name: "", description: "", logo: null, logoPreview: null });
  const [isMobile, setIsMobile] = useState(false);

  const fileInputRef = useRef();
  const newQueryCount = queries.filter((q) => q.status === "new").length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close drawer when switching to desktop isn't needed, but close on mobile nav is nice
  useEffect(() => {
    if (!isMobile) return;
    // no-op — keep drawer state as-is
  }, [isMobile]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm((f) => ({ ...f, logo: file, logoPreview: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!form.name.trim() || !form.description.trim()) {
      alert("Please fill in the service name and description.");
      return;
    }
    setServices((prev) => [...prev, { id: nextId, name: form.name.trim(), description: form.description.trim(), logo: form.logo, logoPreview: form.logoPreview }]);
    setNextId((n) => n + 1);
    setForm({ name: "", description: "", logo: null, logoPreview: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 2500);
  };

  const handleDelete = (id) => {
    setServices((prev) => prev.filter((svc) => svc.id !== id));
  };

  const drawerWidth = isMobile ? "100vw" : "380px";

  return (
    <div style={s.page}>
      {showQueries && <div style={s.overlay} onClick={() => setShowQueries(false)} />}

      <div style={s.layout}>
        {/* ══ MAIN CONTENT ══ */}
        <div style={{ ...s.main, padding: isMobile ? "1.25rem" : "2rem" }}>

          {/* Header */}
          <div style={{
            ...s.header,
            marginBottom: isMobile ? "1.25rem" : "2rem",
            flexWrap: "wrap",
            gap: isMobile ? 10 : 0,
          }}>
            <div>
              <p style={s.headerLabel}>Admin Panel</p>
              <h1 style={{ ...s.headerTitle, fontSize: isMobile ? 18 : 22 }}>Service Management</h1>
            </div>
            <button
              onClick={() => setShowQueries((v) => !v)}
              style={{
                ...s.queriesBtn,
                background: showQueries ? "#111" : "#fff",
                color: showQueries ? "#fff" : "#111",
                padding: isMobile ? "7px 12px" : "8px 16px",
                fontSize: isMobile ? 12 : 13,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {isMobile ? "Queries" : (showQueries ? "Close Queries" : "View Queries")}
              {newQueryCount > 0 && (
                <span style={{
                  ...s.badge,
                  background: showQueries ? "rgba(255,255,255,0.2)" : "#E6F1FB",
                  color: showQueries ? "#fff" : "#185FA5",
                }}>
                  {newQueryCount} new
                </span>
              )}
            </button>
          </div>

          {/* Grid — 2 col on desktop, 1 col on mobile */}
          <div style={{
            ...s.grid,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1rem" : "1.5rem",
          }}>

            {/* ── Add Service Form ── */}
            <div style={s.card}>
              <h2 style={s.cardTitle}>Add new service</h2>

              <div style={s.fieldGroup}>
                <label style={s.label}>Service logo</label>
                <div style={s.dropZone} onClick={() => fileInputRef.current?.click()}>
                  {form.logoPreview ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <img src={form.logoPreview} alt="preview" style={s.logoImg} />
                      <span style={{ fontSize: 11, color: "#888" }}>{form.logo?.name}</span>
                    </div>
                  ) : (
                    <>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                        <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                      </svg>
                      <p style={{ fontSize: 13, color: "#888", margin: "6px 0 2px" }}>Click to upload logo</p>
                      <p style={{ fontSize: 11, color: "#bbb", margin: 0 }}>PNG, JPG, SVG · Max 2MB</p>
                    </>
                  )}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleLogoChange} />
              </div>

              <div style={s.fieldGroup}>
                <label style={s.label}>Service name</label>
                <input
                  type="text"
                  placeholder="e.g. UI/UX Design"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  style={s.input}
                />
              </div>

              <div style={s.fieldGroup}>
                <label style={s.label}>Description</label>
                <textarea
                  placeholder="Briefly describe what this service includes..."
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  style={s.textarea}
                />
              </div>

              <button style={s.addBtn} onClick={handleAdd}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Service
              </button>

              {successMsg && <p style={s.successMsg}>✓ Service added successfully!</p>}
            </div>

            {/* ── Services List ── */}
            <div>
              <h2 style={{ ...s.cardTitle, marginBottom: "0.875rem" }}>
                Current services{" "}
                <span style={{ fontSize: 13, fontWeight: 400, color: "#888" }}>({services.length})</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {services.length === 0 && (
                  <p style={{ fontSize: 13, color: "#bbb", textAlign: "center", padding: "2rem 0" }}>No services added yet.</p>
                )}
                {services.map((svc, i) => {
                  const ac = AVATAR_COLORS[i % AVATAR_COLORS.length];
                  return (
                    <div key={svc.id} style={s.svcItem}>
                      <div style={{ ...s.svcIcon, background: ac.bg }}>
                        {svc.logoPreview ? (
                          <img src={svc.logoPreview} alt="" style={{ width: 28, height: 28, objectFit: "cover", borderRadius: 4 }} />
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ac.color} strokeWidth="1.8">
                            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                          </svg>
                        )}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 3px", color: "#111" }}>{svc.name}</p>
                        <p style={{ fontSize: 12, color: "#888", margin: 0, lineHeight: 1.5, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                          {svc.description}
                        </p>
                      </div>
                      <button style={s.deleteBtn} onClick={() => handleDelete(svc.id)} title="Remove">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══ QUERIES DRAWER ══ */}
        <div style={{
          ...s.drawer,
          width: drawerWidth,
          transform: showQueries ? "translateX(0)" : "translateX(100%)",
          opacity: showQueries ? 1 : 0,
          pointerEvents: showQueries ? "auto" : "none",
        }}>
          <div style={s.drawerHeader}>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 500, margin: 0, color: "#111" }}>Client Queries</h2>
              <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>{queries.length} total · {newQueryCount} new</p>
            </div>
            <button style={s.closeBtn} onClick={() => setShowQueries(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div style={s.drawerBody}>
            {queries.map((q, i) => {
              const ac = AVATAR_COLORS[i % AVATAR_COLORS.length];
              return (
                <div key={q.id} style={{ ...s.queryCard, borderLeft: q.status === "new" ? "3px solid #185FA5" : "3px solid transparent" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ ...s.avatar, background: ac.bg, color: ac.color }}>
                      {getInitials(q.name)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: "#111" }}>{q.name}</p>
                        {q.status === "new" && <span style={s.newBadge}>New</span>}
                      </div>
                      <p style={{ fontSize: 11, color: "#aaa", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {q.email} · {q.time}
                      </p>
                    </div>
                  </div>
                  <span style={s.servicePill}>{q.service}</span>
                  <p style={{ fontSize: 12, color: "#666", margin: "6px 0 0", lineHeight: 1.6 }}>{q.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f5f5f0",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.15)",
    zIndex: 10,
  },
  layout: {
    display: "flex",
    position: "relative",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    minWidth: 0,
    transition: "margin-right 0.3s ease",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#aaa",
    margin: "0 0 4px",
  },
  headerTitle: {
    fontWeight: 500,
    color: "#111",
    margin: 0,
  },
  queriesBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 8,
    border: "0.5px solid #ccc",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.2s, color 0.2s",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  badge: {
    fontSize: 11,
    fontWeight: 600,
    padding: "2px 8px",
    borderRadius: 20,
  },
  grid: {
    display: "grid",
    alignItems: "start",
  },
  card: {
    background: "#fff",
    border: "0.5px solid #e0e0e0",
    borderRadius: 12,
    padding: "1.5rem",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 500,
    margin: "0 0 1.25rem",
    color: "#111",
  },
  fieldGroup: { marginBottom: "1rem" },
  label: {
    fontSize: 12,
    color: "#666",
    display: "block",
    marginBottom: 6,
    fontWeight: 500,
  },
  dropZone: {
    border: "1.5px dashed #ddd",
    borderRadius: 8,
    padding: "1.25rem",
    textAlign: "center",
    cursor: "pointer",
    background: "#fafafa",
    transition: "border-color 0.15s",
  },
  logoImg: {
    width: 56,
    height: 56,
    objectFit: "cover",
    borderRadius: 8,
    border: "0.5px solid #e0e0e0",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "8px 12px",
    fontSize: 14,
    borderRadius: 8,
    border: "0.5px solid #ddd",
    background: "#fff",
    color: "#111",
    fontFamily: "inherit",
    outline: "none",
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "8px 12px",
    fontSize: 14,
    borderRadius: 8,
    border: "0.5px solid #ddd",
    background: "#fff",
    color: "#111",
    resize: "vertical",
    fontFamily: "inherit",
    outline: "none",
  },
  addBtn: {
    width: "100%",
    padding: "9px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  successMsg: {
    marginTop: 10,
    fontSize: 12,
    color: "#3B6D11",
    textAlign: "center",
  },
  svcItem: {
    background: "#fafafa",
    border: "0.5px solid #e8e8e8",
    borderRadius: 8,
    padding: "12px 14px",
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  svcIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  deleteBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#ccc",
    padding: 0,
    flexShrink: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    transition: "color 0.15s",
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    background: "#fff",
    borderLeft: "0.5px solid #e0e0e0",
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    boxShadow: "-4px 0 24px rgba(0,0,0,0.07)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "1.25rem 1.5rem",
    borderBottom: "0.5px solid #e8e8e8",
  },
  drawerBody: {
    flex: 1,
    overflowY: "auto",
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#888",
    padding: 4,
    display: "flex",
    alignItems: "center",
  },
  queryCard: {
    border: "0.5px solid #e8e8e8",
    borderRadius: 8,
    padding: "12px 14px",
    background: "#fff",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 600,
    flexShrink: 0,
  },
  newBadge: {
    background: "#E6F1FB",
    color: "#185FA5",
    fontSize: 10,
    fontWeight: 600,
    padding: "2px 7px",
    borderRadius: 20,
  },
  servicePill: {
    fontSize: 11,
    background: "#f5f5f0",
    color: "#666",
    padding: "3px 8px",
    borderRadius: 20,
    border: "0.5px solid #e8e8e8",
    display: "inline-block",
  },
};