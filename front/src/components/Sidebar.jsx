import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navigation from '../config/navigation';

export default function Sidebar({ isOpen, onToggle }) {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState(
    // Auto-expand category that contains the current route
    navigation.reduce((acc, cat) => {
      const hasActiveView = cat.views.some((v) => location.pathname === v.path);
      acc[cat.category] = hasActiveView || true; // start all expanded
      return acc;
    }, {})
  );

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-lg font-bold shadow-lg shadow-cyan-500/25">
              S
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Simulador
              </h1>
              <p className="text-xs text-slate-400">Vistas de Sistemas</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-88px)]">
          {navigation.map((cat) => (
            <div key={cat.category} className="mb-2">
              {/* Category header */}
              <button
                onClick={() => toggleCategory(cat.category)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200"
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.category}</span>
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedCategories[cat.category] ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Category views */}
              {expandedCategories[cat.category] && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {cat.views.map((view) => (
                    <NavLink
                      key={view.path}
                      to={view.path}
                      onClick={() => {
                        if (window.innerWidth < 1024) onToggle();
                      }}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400 font-medium'
                            : 'text-slate-400 hover:bg-slate-700/30 hover:text-slate-200'
                        }`
                      }
                    >
                      {view.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
