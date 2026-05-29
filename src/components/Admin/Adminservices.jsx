import { useState, useEffect } from "react";
import { server } from "../../../server.js";
import axios from "axios";
import { SERVICE_ICONS } from "../Service_icon.jsx";

const AVATAR_COLORS = [
  { bg: "bg-blue-50", color: "text-blue-700", hex: "#185FA5" },
  { bg: "bg-green-50", color: "text-green-700", hex: "#3B6D11" },
  { bg: "bg-orange-50", color: "text-orange-700", hex: "#854F0B" },
  { bg: "bg-pink-50", color: "text-pink-700", hex: "#993556" },
  { bg: "bg-indigo-50", color: "text-indigo-700", hex: "#534AB7" },
  { bg: "bg-emerald-50", color: "text-emerald-700", hex: "#0F6E56" },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [queries, setQueries] = useState([]);
  const [showQueries, setShowQueries] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    iconId: "code",
  });

  const newQueryCount = queries.filter((q) => q.status === "new").length;
  const selectedIcon = SERVICE_ICONS.find((ic) => ic.id === form.iconId);

  useEffect(() => {
    getQueries();
  }, []);
  useEffect(() => {
    getServicesFromServer();
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!successMsg) return;
    const t = setTimeout(() => setSuccessMsg(false), 2500);
    return () => clearTimeout(t);
  }, [successMsg]);

  const getQueries = async () => {
    try {
      const res = await axios.get(`${server}/query/all_queries`, {
        withCredentials: true,
      });
      setQueries(res.data.queries);
    } catch (err) {
      console.error("Error fetching queries:", err);
    }
  };

  const handleAdd = async () => {
    if (!form.name.trim() || !form.description.trim()) {
      alert("Please fill in the service name and description.");
      return;
    }
    try {
      const res = await axios.post(
        `${server}/services/add_service`,
        {
          name: form.name.trim(),
          description: form.description.trim(),
          iconId: form.iconId,
        },
        { withCredentials: true },
      );
      setServices((prev) => [...prev, res.data.service]);
      setForm({ name: "", description: "", iconId: "code" });
      setSuccessMsg(true);
    } catch (err) {
      console.error("Error adding service:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${server}/services/delete_service/${id}`, {
        withCredentials: true,
      });
      setServices((prev) => prev.filter((svc) => svc._id !== id));
      window.alert("Service deleted successfully.");
    } catch (err) {
      console.error("Error deleting service:", err);
    }
  };
  const handleDeleteQuery = (id) => {
    try {
      const response = axios.delete(`${server}/query/deleteQuery/${id}`,{
        withCredentials:true
      });
       console.log("Querry deleted Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const getServicesFromServer = async () => {
    try {
      const res = await axios.get(`${server}/services/all_services`);
      setServices(res.data.services || []);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${server}/admin/logout`, {
        withCredentials: true,
      });
      if (response.data.success) {
        localStorage.setItem("adminLoggedIn", "false");
        window.location.href = "/admin/login";
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen relative overflow-x-hidden">
      {showQueries && (
        <div
          className="fixed inset-0 bg-black/15 z-10"
          onClick={() => setShowQueries(false)}
        />
      )}

      <div className="flex relative min-h-screen">
        <div className="flex-1 min-w-0 p-5 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5 sm:mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                Admin Panel
              </p>
              <h1 className="text-lg sm:text-xl font-medium text-gray-900 m-0">
                Service Management
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowQueries((v) => !v)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium cursor-pointer transition-colors whitespace-nowrap ${
                  showQueries
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {isMobile
                  ? "Queries"
                  : showQueries
                    ? "Close Queries"
                    : "View Queries"}
                {newQueryCount > 0 && (
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${showQueries ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700"}`}
                  >
                    {newQueryCount} new
                  </span>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-red-200 bg-white text-red-600 text-xs sm:text-sm font-medium cursor-pointer transition-colors hover:bg-red-50 hover:border-red-300 whitespace-nowrap"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                {isMobile ? "" : "Logout"}
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Add Service Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-base font-medium text-gray-900 mb-5">
                Add new service
              </h2>

              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-500 mb-2">
                  Service icon
                </label>
                <div className="grid grid-cols-6 gap-1.5 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  {SERVICE_ICONS.map((icon) => (
                    <button
                      key={icon.id}
                      onClick={() =>
                        setForm((f) => ({ ...f, iconId: icon.id }))
                      }
                      title={icon.label}
                      className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg border transition-all cursor-pointer ${
                        form.iconId === icon.id
                          ? "bg-gray-900 border-gray-900"
                          : "bg-white border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {icon.svg(form.iconId === icon.id ? "#fff" : "#888")}
                      <span
                        className={`text-[9px] font-medium leading-none ${form.iconId === icon.id ? "text-white" : "text-gray-400"}`}
                      >
                        {icon.label}
                      </span>
                    </button>
                  ))}
                </div>
                {selectedIcon && (
                  <div className="flex items-center gap-2 mt-2.5 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="w-7 h-7 bg-blue-100 rounded-md flex items-center justify-center">
                      {selectedIcon.svg("#185FA5")}
                    </div>
                    <span className="text-xs text-blue-700 font-medium">
                      Selected: {selectedIcon.label}
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Service name
                </label>
                <input
                  type="text"
                  placeholder="e.g. UI/UX Design"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none text-gray-900"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Description
                </label>
                <textarea
                  placeholder="Briefly describe what this service includes..."
                  rows={4}
                  value={form.description}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, description: e.target.value }))
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none text-gray-900 resize-y"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg cursor-pointer flex items-center justify-center gap-1.5 hover:bg-gray-800 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Service
              </button>

              {successMsg && (
                <p className="mt-2.5 text-xs text-green-700 text-center">
                  ✓ Service added successfully!
                </p>
              )}
            </div>

            {/* Services List */}
            <div>
              <h2 className="text-base font-medium text-gray-900 mb-3.5">
                Current services{" "}
                <span className="text-sm font-normal text-gray-400">
                  ({services.length})
                </span>
              </h2>
              <div className="flex flex-col gap-2.5">
                {services.length === 0 && (
                  <p className="text-sm text-gray-300 text-center py-8">
                    No services added yet.
                  </p>
                )}
                {services.map((svc, i) => {
                  const ac = AVATAR_COLORS[i % AVATAR_COLORS.length];
                  const icon =
                    SERVICE_ICONS.find((ic) => ic.id === svc.iconId) ||
                    SERVICE_ICONS[1];
                  return (
                    <div
                      key={svc._id}
                      className="bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-3 flex items-start gap-3"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${ac.bg}`}
                      >
                        {icon.svg(ac.hex)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 mb-0.5">
                          {svc?.serviceName}
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                          {svc.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(svc._id)}
                        className="text-black hover:text-red-400 transition-colors pt-2 p-0 bg-transparent border-none cursor-pointer shrink-0"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Queries Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen bg-white border-l border-gray-200 z-20 flex flex-col shadow-xl transition-all duration-300 ${isMobile ? "w-screen" : "w-96"} ${showQueries ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
        >
          <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <h2 className="text-base font-medium text-gray-900 m-0">
                Client Queries
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {queries.length} total · {newQueryCount} new
              </p>
            </div>
            <button
              onClick={() => setShowQueries(false)}
              className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer p-1 flex items-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2.5">
            {queries.length === 0 && (
              <p className="text-sm text-gray-300 text-center py-8">
                No queries yet.
              </p>
            )}
            {queries.map((q, i) => {
              const ac = AVATAR_COLORS[i % AVATAR_COLORS.length];
              return (
                <div
                  key={q._id}
                  className={`border border-gray-100 rounded-lg px-3.5 py-3 bg-white border-l-4 ${q.status === "new" ? "border-l-blue-600" : "border-l-transparent"}`}
                >
                  {/* UPDATED HEADER */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${ac.bg} ${ac.color}`}
                      >
                        {getInitials(q.name)}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium text-gray-900 m-0">
                          {q.name}
                        </p>
                        {q.status === "new" && (
                          <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteQuery(q._id)}
                      className="text-gray-300 hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer p-0"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 m-0 truncate">
                    {q.email}
                  </p>

                  <p className="text-xs text-gray-500 leading-relaxed m-0 mt-2">
                    {q.message}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
