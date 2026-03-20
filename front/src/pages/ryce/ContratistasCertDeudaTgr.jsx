import { useState } from 'react';

export default function ContratistasCertDeudaTgr() {
  const [formData, setFormData] = useState({
    fechaEmisionCert: '2026-03-10',
    fileName: 'Sin archivos seleccionados',
    vigenciaCert: '31-03-2026',
    estadoCert: 'No Cargado',
    numCuotas: '36',
    resolucion: '125-3654',
    fechaVencimientoConvenio: '2026-03-10',
    busqueda: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const InfoIcon = () => (
    <span className="ml-1 inline-flex items-center justify-center w-3.5 h-3.5 bg-[#333] text-white rounded-full text-[10px] font-bold cursor-help align-middle">
      i
    </span>
  );

  return (
    <div className="max-w-6xl mx-auto font-[Arial,Helvetica,sans-serif] text-[13px] text-[#333]">
      
      {/* --- Page Header --- */}
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#333] mb-2">Carga de Documentos Tributarios</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold">Estados de Documentos</span>
          <span className="bg-[#999] text-white px-2 py-0.5 text-[11px] rounded font-bold">No Cargado</span>
          <span className="bg-[#337ab7] text-white px-2 py-0.5 text-[11px] rounded font-bold">Pendiente</span>
          <span className="bg-[#d9534f] text-white px-2 py-0.5 text-[11px] rounded font-bold flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
            Rechazado
          </span>
          <span className="bg-[#5cb85c] text-white px-2 py-0.5 text-[11px] rounded font-bold flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            Aceptado
          </span>
          <span className="bg-[#f0ad4e] text-white px-2 py-0.5 text-[11px] rounded font-bold">Vencido</span>
        </div>
      </div>

      {/* --- Block 1: Certificado de Deuda Tributaria --- */}
      <div className="border-[3px] border-[#008744] bg-[#fafafa] mb-6 shadow-sm">
        <div className="p-4">
          <h2 className="text-[15px] font-bold mb-4">
            1. Certificado de Deuda Tributaria <InfoIcon />
          </h2>

          <div className="flex flex-wrap items-end gap-x-6 gap-y-4 mb-4">
            {/* Fecha Emisión */}
            <div>
              <label className="block text-[12px] font-bold mb-1">Fecha Emisión</label>
              <div className="flex items-center">
                <input
                  type="date"
                  value={formData.fechaEmisionCert}
                  onChange={(e) => handleChange('fechaEmisionCert', e.target.value)}
                  className="border border-[#ccc] bg-[#ffff99] h-[30px] px-2 text-[12px] w-[130px] rounded-l-sm"
                  style={{ outline: 'none' }}
                />
              </div>
            </div>

            {/* Evidencia PDF */}
            <div className="flex-grow max-w-md">
              <label className="block text-[12px] font-bold mb-1">Seleccionar Evidencia en Formato PDF</label>
              <div className="flex items-center">
                <label className="bg-[#ffff99] border border-[#ccc] border-r-0 h-[30px] px-3 flex items-center text-[12px] cursor-pointer hover:bg-[#ffea75] transition-colors rounded-l-sm whitespace-nowrap">
                  Seleccionar archivo
                  <input type="file" className="hidden" />
                </label>
                <div className="border border-[#ccc] bg-white h-[30px] px-3 flex items-center text-[12px] text-[#666] flex-grow min-w-[200px] border-l-0">
                  {formData.fileName}
                </div>
              </div>
            </div>

            {/* Guardar Certificado Btn */}
            <div>
              <button className="bg-[#8cc63f] text-[#000] border border-[#7ab32e] h-[30px] px-4 text-[12px] font-bold hover:bg-[#7bc025] rounded-sm transition-colors string" style={{ backgroundColor: '#5cb85c', color: '#ffeb3b', borderColor: '#4cae4c' }}>
                Guardar Certificado
              </button>
            </div>

            {/* Vigencia */}
            <div>
              <label className="block text-[12px] font-bold mb-1">Vigencia</label>
              <input
                type="text"
                value={formData.vigenciaCert}
                disabled
                className="border border-[#ccc] bg-[#eee] h-[30px] px-2 text-[12px] w-[100px] text-center rounded-sm"
              />
            </div>

            {/* Estado */}
            <div className="text-center font-bold text-[12px]">
              <div className="mb-1">Estado</div>
              <span className="bg-[#999] text-white px-2 py-0.5 text-[11px] rounded inline-block">
                {formData.estadoCert}
              </span>
            </div>

            {/* Documento */}
            <div className="text-center font-bold text-[12px]">
              <div className="mb-1">Documento</div>
              <div className="h-[22px]"></div> {/* Empty space aligned with badge */}
            </div>
          </div>

          <div className="font-bold text-[12px]">
            Comentario
          </div>
        </div>
      </div>

      {/* --- Block 2: Convenio Deuda Tributaria Empresa --- */}
      <div className="border-[3px] border-[#008744] bg-[#fafafa] shadow-sm">
        <div className="p-4">
          <h2 className="text-[15px] font-bold mb-2">
            2. Convenio Deuda Tributaria Empresa <InfoIcon />
          </h2>

          <div className="flex justify-end mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[12px]">Buscar:</span>
              <input
                type="text"
                value={formData.busqueda}
                onChange={(e) => handleChange('busqueda', e.target.value)}
                className="border border-[#ccc] h-[26px] px-2 text-[12px] w-[180px] rounded-sm"
              />
            </div>
          </div>

          <table className="w-full border-collapse bg-white mb-3">
            <thead>
              <tr className="border-b border-t border-[#ddd] bg-[#f9f9f9]">
                <th className="py-2 px-2 text-left text-[11px] font-bold text-[#666] relative cursor-pointer border-r border-[#ddd]">
                  N° <span className="absolute right-1 text-[#ccc] invisible">↕</span>
                </th>
                <th className="py-2 px-2 text-center text-[11px] font-bold text-[#666] border-r border-[#ddd]">
                  N° DE CUOTAS
                </th>
                <th className="py-2 px-2 text-center text-[11px] font-bold text-[#666] border-r border-[#ddd]">
                  RESOLUCIÓN
                </th>
                <th className="py-2 px-2 text-center text-[11px] font-bold text-[#666] border-r border-[#ddd]">
                  FECHA VENCIMIENTO
                </th>
                <th className="py-2 px-2 text-center text-[11px] font-bold text-[#666]">
                  DOC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#ddd]">
                <td className="py-2 px-2 text-center border-r border-[#ddd]">1</td>
                <td className="py-2 px-2 border-r border-[#ddd] text-center">
                  <input
                    type="text"
                    value={formData.numCuotas}
                    onChange={(e) => handleChange('numCuotas', e.target.value)}
                    className="border border-[#ccc] bg-[#ffff99] h-[26px] px-2 text-[12px] w-[80px] text-center rounded-sm"
                    style={{ outline: 'none' }}
                  />
                </td>
                <td className="py-2 px-2 border-r border-[#ddd] text-center">
                  <input
                    type="text"
                    value={formData.resolucion}
                    onChange={(e) => handleChange('resolucion', e.target.value)}
                    className="border border-[#ccc] bg-[#ffff99] h-[26px] px-2 text-[12px] w-[200px] text-center rounded-sm"
                    style={{ outline: 'none' }}
                  />
                </td>
                <td className="py-2 px-2 border-r border-[#ddd] text-center">
                  <div className="flex items-center justify-center">
                    <input
                      type="date"
                      value={formData.fechaVencimientoConvenio}
                      onChange={(e) => handleChange('fechaVencimientoConvenio', e.target.value)}
                      className="border border-[#ccc] bg-[#ffff99] h-[26px] px-2 text-[12px] w-[130px] rounded-sm"
                      style={{ outline: 'none' }}
                    />
                  </div>
                </td>
                <td className="py-2 px-2 text-center text-[#337ab7]">
                  <button className="hover:text-[#23527c] transition-colors">
                    <svg className="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-2 border-b border-[#ddd] pb-3 mb-3">
            <button className="bg-[#5cb85c] text-white border border-[#4cae4c] h-[30px] px-4 text-[12px] font-bold hover:bg-[#449d44] rounded-sm transition-colors">
              Ingresar Convenio
            </button>
          </div>

          <div className="flex justify-between items-center text-[12px] text-[#666]">
            <div>
              Mostrando registros del 1 al 1 de un total de 1 registros
            </div>
            <div className="flex drop-shadow-sm rounded-sm overflow-hidden border border-[#ccc]">
               <button className="bg-white px-3 py-1 hover:bg-[#eee] transition-colors border-r border-[#ccc] text-[#777]">Anterior</button>
               <button className="bg-[#eee] px-3 py-1 border-r border-[#ccc] text-[#333] font-bold">1</button>
               <button className="bg-white px-3 py-1 hover:bg-[#eee] transition-colors text-[#777]">Siguiente</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
