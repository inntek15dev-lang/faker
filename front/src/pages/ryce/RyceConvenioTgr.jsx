import { useState } from 'react';

export default function RyceConvenioTgr() {
  const [formData, setFormData] = useState({
    rutEmpresa: '99.999.999-5',
    nombreRazonSocial: 'Empresa Demo N°5',
    documento: 'Convenio Deuda Tributaria',
    fechaEmision: '2026-03-10',
    fechaCheckbox: false,
    esLegible: true,
    esIntegro: true,
    correspondeContratista: false,
    correspondeDocumento: false,
    numCuotas: '18',
    numResolucion: '8072',
    fechaInicio: '2024-05-17',
    fechaVencimiento: '2025-11-30',
    monto: '36.810.754',
    enviarCorreo: false,
    comentario: '',
  });

  const checkboxItems = [
    { key: 'esLegible', label: 'Es legible' },
    { key: 'esIntegro', label: 'Es íntegro' },
    { key: 'correspondeContratista', label: 'Corresponde al contratista' },
    { key: 'correspondeDocumento', label: 'Corresponde al documento' },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Page title */}
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-xl font-bold text-slate-800">RYCE — Convenio Deuda Tributaria</h1>
        <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full font-medium">RYCE</span>
      </div>

      {/* === Main form container === */}
      <div className="bg-[#f0f0f0] border border-[#b0b0b0] rounded shadow-sm p-4 font-[Arial,Helvetica,sans-serif] text-[13px] text-black">

        {/* --- Company info table --- */}
        <table className="w-full border-collapse mb-4">
          <thead>
            <tr>
              <th colSpan={2} className="bg-[#0077b6] text-white text-[12px] font-normal py-1 px-2 text-center border border-[#006199]">
                DATOS EMPRESA
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Rut Empresa', value: formData.rutEmpresa },
              { label: 'Nombre o Razón Social', value: formData.nombreRazonSocial },
              { label: 'Documento', value: formData.documento },
            ].map((row) => (
              <tr key={row.label} className="border border-[#999]">
                <td className="bg-[#e8e8e8] px-3 py-1 font-bold text-[12px] text-[#333] border-r border-[#999] w-[180px]">
                  {row.label}
                </td>
                <td className="px-3 py-1 bg-white text-[12px]">
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
            className="border border-[#ccc] bg-[#ffff99] px-2 py-1 text-[12px] rounded-none outline-none"
          />
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.fechaCheckbox}
              onChange={(e) => handleChange('fechaCheckbox', e.target.checked)}
              className="accent-[#0077b6] w-4 h-4 rounded-none border border-gray-400"
            />
          </label>
        </div>

        {/* Checkboxes list */}
        <div className="space-y-1 mb-4 pl-1">
          {checkboxItems.map((item) => (
            <label key={item.key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData[item.key]}
                onChange={(e) => handleChange(item.key, e.target.checked)}
                className="accent-green-600 w-4 h-4 border border-gray-400"
              />
              <span className="text-[12px]">{item.label}</span>
            </label>
          ))}
        </div>

        {/* --- Inputs Data TGR --- */}
        <div className="mb-4 space-y-3">
          {/* Row 1: Cuotas / Resolución */}
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[12px] font-bold mb-1 text-[#333]">
                N° de Cuotas:
              </label>
              <input
                type="text"
                value={formData.numCuotas}
                onChange={(e) => handleChange('numCuotas', e.target.value)}
                className="w-full border border-[#ccc] bg-white h-7 px-2 text-[14px] text-right rounded-none outline-none focus:bg-[#ffff99]"
                style={{ backgroundColor: formData.numCuotas ? '#ffff99' : 'white' }}
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[12px] font-bold mb-1 text-[#333]">
                N° de Resolución:
              </label>
              <input
                type="text"
                value={formData.numResolucion}
                onChange={(e) => handleChange('numResolucion', e.target.value)}
                className="w-full border border-[#ccc] bg-white h-7 px-2 text-[14px] rounded-none outline-none focus:bg-[#ffff99]"
                style={{ backgroundColor: formData.numResolucion ? '#ffff99' : 'white' }}
              />
            </div>
          </div>

          {/* Row 2: Fecha Inicio / Fecha Vencimiento */}
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[12px] font-bold mb-1 text-[#333]">
                Fecha Inicio:
              </label>
              <input
                type="date"
                value={formData.fechaInicio}
                onChange={(e) => handleChange('fechaInicio', e.target.value)}
                className="w-full border border-[#ccc] bg-white h-7 px-2 text-[13px] rounded-none outline-none focus:bg-[#ffff99]"
                style={{ backgroundColor: formData.fechaInicio ? '#ffff99' : 'white' }}
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-[12px] font-bold mb-1 text-[#333]">
                Fecha Vencimiento:
              </label>
              <input
                type="date"
                value={formData.fechaVencimiento}
                onChange={(e) => handleChange('fechaVencimiento', e.target.value)}
                className="w-full border border-[#ccc] bg-white h-7 px-2 text-[13px] rounded-none outline-none focus:bg-[#ffff99]"
                style={{ backgroundColor: formData.fechaVencimiento ? '#ffff99' : 'white' }}
              />
            </div>
          </div>

          {/* Row 3: Monto */}
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[150px] max-w-[50%]">
              <label className="block text-[12px] font-bold mb-1 text-[#333]">
                Monto:
              </label>
              <input
                type="text"
                value={formData.monto}
                onChange={(e) => handleChange('monto', e.target.value)}
                className="w-full border border-[#ccc] bg-white h-7 px-2 text-[14px] text-right rounded-none outline-none focus:bg-[#ffff99]"
                style={{ backgroundColor: formData.monto ? '#ffff99' : 'white' }}
              />
            </div>
          </div>
        </div>

        {/* --- Convenios Vigentes table --- */}
        <table className="w-full border-collapse mb-4 mt-2">
          <thead>
            <tr>
              <th colSpan={5} className="bg-[#0077b6] text-white text-[12px] font-bold py-1.5 px-2 text-center border border-[#006199]">
                CONVENIOS VIGENTES
              </th>
            </tr>
            <tr className="bg-[#0077b6]">
              {['N°', 'N° DE CUOTAS', 'MONTO', 'FECHA VENCIMIENTO', 'N° de Resolución'].map((h) => (
                <th key={h} className="text-white text-[11px] font-bold py-1 px-2 border border-[#006199] text-center">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-2 text-[12px] text-[#0077b6] font-bold bg-[#f5f5f5] border border-[#ccc]">
                Sin convenios registrados
              </td>
            </tr>
          </tbody>
        </table>

        {/* --- Enviar correo --- */}
        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.enviarCorreo}
            onChange={(e) => handleChange('enviarCorreo', e.target.checked)}
            className="accent-[#333] w-4 h-4 border border-gray-400 rounded-sm"
          />
          <span className="text-[12px]">Enviar correo de notificación para documento rechazado.</span>
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
            className="w-full border border-[#999] bg-white px-2 py-1.5 text-[12px] rounded-none resize-vertical outline-none"
          />
        </div>

        {/* --- Buttons --- */}
        <div className="flex gap-1 justify-center">
          <button className="bg-[#f0f0f0] border border-[#999] px-8 py-1.5 text-[13px] text-black hover:bg-[#e0e0e0] active:bg-[#d0d0d0] cursor-pointer transition-colors shadow-sm w-[150px]">
            Habilitar
          </button>
          <button className="bg-[#f0f0f0] border border-[#999] px-8 py-1.5 text-[13px] text-black hover:bg-[#e0e0e0] active:bg-[#d0d0d0] cursor-pointer transition-colors shadow-sm w-[150px]">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
