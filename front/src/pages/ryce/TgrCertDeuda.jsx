import { useState } from 'react';

export default function TgrCertDeuda() {
  const [formData, setFormData] = useState({
    rutEmpresa: '8.309.647-0',
    nombreRazonSocial: 'SIMÓN PEDRO LÓPEZ SÁNCHEZ',
    documento: 'Certificado Deuda Tributaria',
    fechaEmision: '2026-03-07',
    fechaCheckbox: true,
    esLegible: true,
    esIntegro: true,
    correspondeContratista: true,
    correspondeDocumento: true,
    correspondeFechaEmision: true,
    deudaMorosa: '437.557',
    deudaNoVencida: '0',
    enviarCorreo: false,
    comentario: '',
  });

  const checkboxItems = [
    { key: 'esLegible', label: 'Es legible' },
    { key: 'esIntegro', label: 'Es íntegro' },
    { key: 'correspondeContratista', label: 'Corresponde al contratista' },
    { key: 'correspondeDocumento', label: 'Corresponde al documento' },
    { key: 'correspondeFechaEmision', label: 'Corresponde fecha emisión' },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Page title */}
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-xl font-bold text-slate-800">TGR — Certificado Deuda Tributaria</h1>
        <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full font-medium">RYCE</span>
      </div>

      {/* === Main form container === */}
      <div className="bg-[#f0f0f0] border border-[#b0b0b0] rounded shadow-sm p-4 font-[Arial,Helvetica,sans-serif] text-[13px] text-black">

        {/* --- Company info table --- */}
        <table className="w-full border-collapse mb-4">
          <tbody>
            {[
              { label: 'Rut Empresa', value: formData.rutEmpresa },
              { label: 'Nombre o Razón Social', value: formData.nombreRazonSocial },
              { label: 'Documento', value: formData.documento },
            ].map((row) => (
              <tr key={row.label} className="border border-[#999]">
                <td className="bg-[#e8e8e8] px-3 py-1.5 font-bold text-[12px] text-[#333] border-r border-[#999] w-[180px]">
                  {row.label}
                </td>
                <td className="px-3 py-1.5 bg-white text-[12px]">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* --- Criterios de evaluación --- */}
        <h2 className="text-[15px] font-bold text-black mb-3">Criterios de evaluación</h2>

        <p className="text-[12px] text-[#555] mb-2">Seleccione si corresponde</p>

        {/* Fecha emisión */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="bg-[#ffff99] border border-[#ccc] px-2 py-1 text-[12px] font-bold">
            Fecha Emisión:
          </span>
          <input
            type="date"
            value={formData.fechaEmision}
            onChange={(e) => handleChange('fechaEmision', e.target.value)}
            className="border border-[#999] bg-white px-2 py-1 text-[12px] rounded-none"
          />
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.fechaCheckbox}
              onChange={(e) => handleChange('fechaCheckbox', e.target.checked)}
              className="accent-[#0077b6] w-4 h-4"
            />
          </label>
        </div>

        {/* Checkboxes list */}
        <div className="space-y-1 mb-4">
          {checkboxItems.map((item) => (
            <label key={item.key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData[item.key]}
                onChange={(e) => handleChange(item.key, e.target.checked)}
                className="accent-green-600 w-4 h-4"
              />
              <span className="text-[12px]">{item.label}</span>
            </label>
          ))}
        </div>

        {/* --- Convenios Vigentes table --- */}
        <table className="w-full border-collapse mb-4">
          <thead>
            <tr>
              <th colSpan={4} className="bg-[#0077b6] text-white text-[12px] font-bold py-1.5 px-2 text-center border border-[#006199]">
                CONVENIOS VIGENTES
              </th>
            </tr>
            <tr className="bg-[#0077b6]">
              {['N°', 'N° DE CUOTAS', 'FECHA VENCIMIENTO', 'DOC'].map((h) => (
                <th key={h} className="text-white text-[11px] font-bold py-1 px-2 border border-[#006199] text-center">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-center py-2 text-[12px] text-[#666] bg-white border border-[#ccc] italic">
                Sin convenios registrados
              </td>
            </tr>
          </tbody>
        </table>

        {/* --- Deuda morosa / Deuda no vencida --- */}
        <div className="flex gap-4 mb-4 flex-wrap">
          {/* Deuda morosa */}
          <div className="flex-1 min-w-[180px]">
            <label className="block text-[12px] font-bold text-red-600 mb-1">
              Deuda morosa:
            </label>
            <input
              type="text"
              value={formData.deudaMorosa}
              onChange={(e) => handleChange('deudaMorosa', e.target.value)}
              className="w-full border border-[#999] bg-[#ffeb3b] px-3 py-2 text-[14px] text-center font-bold rounded-none"
            />
          </div>
          {/* Deuda no vencida */}
          <div className="flex-1 min-w-[180px]">
            <label className="block text-[12px] font-bold text-red-600 mb-1">
              Deuda no vencida:
            </label>
            <input
              type="text"
              value={formData.deudaNoVencida}
              onChange={(e) => handleChange('deudaNoVencida', e.target.value)}
              className="w-full border border-[#999] bg-[#ffeb3b] px-3 py-2 text-[14px] text-center font-bold rounded-none"
            />
          </div>
        </div>

        {/* --- Enviar correo --- */}
        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.enviarCorreo}
            onChange={(e) => handleChange('enviarCorreo', e.target.checked)}
            className="accent-[#333] w-4 h-4"
          />
          <span className="text-[12px] font-bold">Enviar correo de notificación para documento rechazado.</span>
        </label>

        {/* --- Comentario --- */}
        <div className="mb-4">
          <label className="block text-[12px] text-[#555] mb-1">
            Ingrese un comentario del documento (Opcional)
          </label>
          <textarea
            value={formData.comentario}
            onChange={(e) => handleChange('comentario', e.target.value)}
            rows={4}
            className="w-full border border-[#999] bg-white px-2 py-1.5 text-[12px] rounded-none resize-vertical"
          />
        </div>

        {/* --- Buttons --- */}
        <div className="flex gap-4 justify-center">
          <button className="bg-[#e0e0e0] border border-[#999] px-8 py-2 text-[13px] font-bold text-black hover:bg-[#d0d0d0] active:bg-[#c0c0c0] cursor-pointer transition-colors">
            Habilitar
          </button>
          <button className="bg-[#e0e0e0] border border-[#999] px-8 py-2 text-[13px] font-bold text-black hover:bg-[#d0d0d0] active:bg-[#c0c0c0] cursor-pointer transition-colors">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
