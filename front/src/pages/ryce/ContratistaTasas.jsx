import { useState } from 'react';

export default function ContratistaTasas() {
  const [formData, setFormData] = useState({
    tasaSiniestralidadTemporal: '',
    tasaSiniestralidadInvMuertes: '',
    indiceAccidentabilidad: '',
    tasaFrecuencia: '',
    tasaGravedad: '',
    dotacion: '',
    hh: '',
    diasPerdidosAccidente: '',
    numIncidentesReposo: '',
    numEnfermedadesProfesionales: '',
    diasPerdidosEnfermedad: '',
    fechaEmision: '',
    mutualidad: '',
    vigencia: '01-04-2026',
    comentario: 'Sin comentario adjunto.',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const InfoIcon = () => (
    <span className="ml-1 inline-flex items-center justify-center w-3.5 h-3.5 bg-cyan-400 text-white rounded-full text-[10px] font-bold cursor-help">
      i
    </span>
  );

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page title */}
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-xl font-bold text-slate-800">Contratista TASAS</h1>
        <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full font-medium">RYCE</span>
      </div>

      {/* === Main Container === */}
      <div className="bg-[#f9f9f9] border border-[#ddd] p-6 font-[Arial,Helvetica,sans-serif] text-[12px] text-[#333]">

        {/* --- Top Section with Green Border --- */}
        <div className="border-[3px] border-[#008744] p-5 mb-5 space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { label: 'Tasa de Siniestralidad por Inc. Temporal', key: 'tasaSiniestralidadTemporal' },
              { label: 'Tasa de Siniestralidad por Inv. y Muertes', key: 'tasaSiniestralidadInvMuertes' },
              { label: 'Indice de Accidentabilidad', key: 'indiceAccidentabilidad' },
              { label: 'Tasa Frecuencia', key: 'tasaFrecuencia' },
              { label: 'Tasa de Gravedad', key: 'tasaGravedad' },
            ].map((item) => (
              <div key={item.key}>
                <label className="block mb-1 font-bold leading-tight">{item.label}</label>
                <input
                  type="text"
                  value={formData[item.key]}
                  onChange={(e) => handleChange(item.key, e.target.value)}
                  className="w-full border border-[#ccc] bg-white h-10 px-2 text-[14px]"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[
              { label: 'Dotación', key: 'dotacion', hasInfo: true },
              { label: 'HH', key: 'hh', hasInfo: true },
              { label: 'Días Perdidos por accidente', key: 'diasPerdidosAccidente' },
              { label: 'Numero de Incidentes con Reposo Médico', key: 'numIncidentesReposo' },
              { label: 'Numero Enfermedades profesionales', key: 'numEnfermedadesProfesionales' },
              { label: 'Días perdidos por Enfermedad Profesional', key: 'diasPerdidosEnfermedad' },
            ].map((item) => (
              <div key={item.key} className={item.key === 'diasPerdidosEnfermedad' ? 'md:col-span-1' : ''}>
                <label className="block mb-1 font-bold leading-tight">
                  {item.label}
                  {item.hasInfo && <InfoIcon />}
                </label>
                <input
                  type="text"
                  value={formData[item.key]}
                  onChange={(e) => handleChange(item.key, e.target.value)}
                  className="w-full border border-[#ccc] bg-white h-10 px-2 text-[14px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end mb-4">

          {/* Fecha emisión */}
          <div>
            <label className="block mb-1 font-bold">Fecha emisión certificado</label>
            <input
              type="date"
              value={formData.fechaEmision}
              onChange={(e) => handleChange('fechaEmision', e.target.value)}
              className="w-full border border-[#ccc] bg-[#ffff99] h-10 px-2 text-[14px]"
              placeholder="dd-mm-aaaa"
            />
          </div>

          {/* Mutualidad */}
          <div>
            <label className="block mb-1 font-bold">Mutualidad</label>
            <select
              value={formData.mutualidad}
              onChange={(e) => handleChange('mutualidad', e.target.value)}
              className="w-full border border-[#ccc] bg-[#ffff99] h-10 px-2 text-[14px] appearance-none"
              style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
            >
              <option value="">Seleccione mutualidad</option>
              <option value="ACHS">ACHS</option>
              <option value="MUTUAL">MUTUAL DE SEGURIDAD</option>
              <option value="IST">IST</option>
              <option value="ISL">ISL</option>
            </select>
          </div>

          {/* Cargar documento */}
          <div className="md:col-span-1">
            <label className="block mb-1 font-bold">Cargar documento</label>
            <div className="flex gap-1 overflow-hidden">
              <label className="bg-[#f0f0f0] border border-[#ccc] px-3 h-10 flex items-center text-[11px] font-bold cursor-pointer hover:bg-slate-200 transition-colors shrink-0">
                Seleccionar archivo
                <input type="file" className="hidden" />
              </label>
              <div className="border border-[#ccc] bg-white h-10 px-2 flex items-center text-[11px] text-[#666] flex-grow truncate min-w-0">
                Sin archivos seleccionados
              </div>
              <button className="bg-[#337ab7] text-white px-3 h-10 font-bold hover:bg-[#286090] shrink-0">
                Guardar
              </button>
              <button className="bg-[#337ab7] text-white px-3 h-10 flex items-center justify-center shrink-0 hover:bg-[#286090]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Vigencia */}
          <div>
            <label className="block mb-1 font-bold">Vigencia</label>
            <input
              type="text"
              value={formData.vigencia}
              disabled
              className="w-full border border-[#ccc] bg-[#eee] h-10 px-3 text-[14px] text-[#555]"
            />
          </div>

        </div>

        {/* Comentario */}
        <div className="text-[13px] text-[#333]">
          <span className="font-bold">Comentario:</span> {formData.comentario}
        </div>

      </div>
    </div>
  );
}
