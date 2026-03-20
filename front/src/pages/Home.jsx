import { Link } from 'react-router-dom';
import navigation from '../config/navigation';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Simulador de Vistas
        </h1>
        <p className="text-slate-500 text-lg">
          Replicas de interfaces de sistemas externos para simulaciones y pruebas.
        </p>
      </div>

      {/* Categories grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {navigation.map((cat) => (
          <div
            key={cat.category}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Category header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-lg font-bold text-white">{cat.category}</h2>
                <span className="ml-auto bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {cat.views.length} {cat.views.length === 1 ? 'vista' : 'vistas'}
                </span>
              </div>
            </div>

            {/* Views list */}
            <div className="p-3">
              {cat.views.map((view) => (
                <Link
                  key={view.path}
                  to={view.path}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-100 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                    {view.name}
                  </span>
                  <svg className="w-4 h-4 ml-auto text-slate-300 group-hover:text-cyan-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
