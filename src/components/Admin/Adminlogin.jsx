import { useState, useEffect } from "react";

export default function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSubmit = () => {
    setError("");
    if (!form.email.trim() || !form.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    // TODO: POST /api/admin/login { email, password }
    setTimeout(() => {
      setLoading(false);
      if (form.email === "admin@example.com" && form.password === "password") {
        onLogin?.();
      } else {
        setError("Invalid email or password. Try admin@example.com / password");
      }
    }, 1200);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div style={s.page}>
      <div style={s.gridBg} />

      <div style={{
        ...s.wrapper,
        flexDirection: isMobile ? "column" : "row",
        margin: isMobile ? "1rem" : "2rem",
        minHeight: isMobile ? "auto" : 540,
      }}>

        {/* ── Left / Top panel ── */}
        <div style={{
          ...s.leftPanel,
          width: isMobile ? "100%" : 300,
          padding: isMobile ? "1.5rem" : "2rem",
          flexDirection: isMobile ? "row" : "column",
          alignItems: isMobile ? "center" : "stretch",
          justifyContent: isMobile ? "space-between" : "space-between",
          gap: isMobile ? 0 : undefined,
        }}>
          {/* Brand mark — always visible */}
          <div style={s.brandMark}>
            <div style={s.brandIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </div>
            <div>
              <p style={s.brandLabel}>Admin Panel</p>
              <p style={s.brandSub}>Service Management</p>
            </div>
          </div>

          {/* Stats row — inline on mobile, bottom on desktop */}
          {isMobile ? (
            <div style={s.statsMobileRow}>
              {[{ value: "4", label: "Svc" }, { value: "6", label: "Qrs" }, { value: "2", label: "New" }].map((stat) => (
                <div key={stat.label} style={s.statMobile}>
                  <p style={s.statValue}>{stat.value}</p>
                  <p style={s.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div style={s.panelContent}>
                <p style={s.panelEyebrow}>Secure access</p>
                <h2 style={s.panelHeading}>Manage your<br />services &amp; queries</h2>
                <p style={s.panelBody}>
                  Your central hub for adding services, reviewing client queries, and keeping everything running smoothly.
                </p>
              </div>
              <div style={s.statsRow}>
                {[{ value: "4", label: "Services" }, { value: "6", label: "Queries" }, { value: "2", label: "New" }].map((stat) => (
                  <div key={stat.label} style={s.stat}>
                    <p style={s.statValue}>{stat.value}</p>
                    <p style={s.statLabel}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── Right / Bottom form panel ── */}
        <div style={{
          ...s.formPanel,
          padding: isMobile ? "1.75rem 1.25rem" : "2.5rem",
        }}>
          <div style={s.formInner}>
            <div style={s.formHeader}>
              <p style={s.formEyebrow}>Admin Panel</p>
              <h1 style={{ ...s.formTitle, fontSize: isMobile ? 20 : 24 }}>Sign in</h1>
              <p style={s.formSubtitle}>Enter your credentials to continue</p>
            </div>

            {/* Email */}
            <div style={s.fieldGroup}>
              <label style={s.label}>Email address</label>
              <div style={{ position: "relative" }}>
                <span style={{ ...s.inputIcon, color: focused === "email" ? "#111" : "#bbb" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setError(""); }}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onKeyDown={handleKey}
                  style={{
                    ...s.input,
                    paddingLeft: 38,
                    borderColor: focused === "email" ? "#111" : error ? "#c0392b" : "#ddd",
                    boxShadow: focused === "email" ? "0 0 0 3px rgba(17,17,17,0.06)" : "none",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div style={s.fieldGroup}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <label style={s.label}>Password</label>
                <button style={s.forgotLink}>Forgot password?</button>
              </div>
              <div style={{ position: "relative" }}>
                <span style={{ ...s.inputIcon, color: focused === "password" ? "#111" : "#bbb" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => { setForm((f) => ({ ...f, password: e.target.value })); setError(""); }}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  onKeyDown={handleKey}
                  style={{
                    ...s.input,
                    paddingLeft: 38,
                    paddingRight: 42,
                    borderColor: focused === "password" ? "#111" : error ? "#c0392b" : "#ddd",
                    boxShadow: focused === "password" ? "0 0 0 3px rgba(17,17,17,0.06)" : "none",
                  }}
                />
                <button
                  style={s.eyeBtn}
                  onClick={() => setShowPassword((v) => !v)}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={s.errorBox}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              style={{ ...s.submitBtn, opacity: loading ? 0.7 : 1 }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <span style={s.spinner} />
              ) : (
                <>
                  Sign in
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>

            <p style={s.hint}>
              Demo: <span style={{ color: "#111", fontWeight: 500 }}>admin@example.com</span> / <span style={{ color: "#111", fontWeight: 500 }}>password</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

const s = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f5f5f0",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  gridBg: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    pointerEvents: "none",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    maxWidth: 860,
    borderRadius: 16,
    border: "0.5px solid #e0e0e0",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
    position: "relative",
    zIndex: 1,
  },

  /* Left panel */
  leftPanel: {
    flexShrink: 0,
    background: "#111",
    display: "flex",
  },
  brandMark: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  brandIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  brandLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    margin: 0,
  },
  brandSub: {
    fontSize: 13,
    fontWeight: 500,
    color: "#fff",
    margin: "2px 0 0",
  },

  /* Desktop panel content */
  panelContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem 0",
  },
  panelEyebrow: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
    margin: "0 0 12px",
  },
  panelHeading: {
    fontSize: 26,
    fontWeight: 500,
    color: "#fff",
    margin: "0 0 16px",
    lineHeight: 1.3,
  },
  panelBody: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    lineHeight: 1.7,
    margin: 0,
  },

  /* Desktop stats */
  statsRow: {
    display: "flex",
    borderTop: "0.5px solid rgba(255,255,255,0.1)",
    paddingTop: "1.25rem",
  },
  stat: {
    flex: 1,
    textAlign: "center",
  },
  statValue: {
    fontSize: 22,
    fontWeight: 500,
    color: "#fff",
    margin: "0 0 2px",
  },
  statLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.35)",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  /* Mobile stats */
  statsMobileRow: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  statMobile: {
    textAlign: "center",
  },

  /* Form panel */
  formPanel: {
    flex: 1,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formInner: {
    width: "100%",
    maxWidth: 340,
  },
  formHeader: {
    marginBottom: "1.75rem",
  },
  formEyebrow: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#aaa",
    margin: "0 0 6px",
  },
  formTitle: {
    fontWeight: 500,
    color: "#111",
    margin: "0 0 6px",
  },
  formSubtitle: {
    fontSize: 13,
    color: "#888",
    margin: 0,
  },
  fieldGroup: { marginBottom: "1rem" },
  label: {
    fontSize: 12,
    color: "#666",
    display: "block",
    marginBottom: 6,
    fontWeight: 500,
  },
  inputIcon: {
    position: "absolute",
    top: "50%",
    left: 12,
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
    transition: "color 0.15s",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 12px",
    fontSize: 14,
    borderRadius: 8,
    border: "0.5px solid #ddd",
    background: "#fff",
    color: "#111",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  },
  eyeBtn: {
    position: "absolute",
    top: "50%",
    right: 12,
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#bbb",
    padding: 0,
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
  },
  forgotLink: {
    background: "none",
    border: "none",
    fontSize: 12,
    color: "#888",
    cursor: "pointer",
    padding: 0,
    fontFamily: "inherit",
    textDecoration: "underline",
    textUnderlineOffset: 2,
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#fff5f5",
    border: "0.5px solid #fcc",
    borderRadius: 8,
    padding: "8px 12px",
    fontSize: 12,
    color: "#c0392b",
    marginBottom: "1rem",
  },
  submitBtn: {
    width: "100%",
    padding: "10px",
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
    gap: 8,
    transition: "opacity 0.2s",
    marginTop: 4,
  },
  spinner: {
    display: "inline-block",
    width: 16,
    height: 16,
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
  hint: {
    fontSize: 11,
    color: "#bbb",
    textAlign: "center",
    margin: "14px 0 0",
  },
};