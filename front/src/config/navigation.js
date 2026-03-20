/**
 * Configuración de navegación del simulador.
 * Cada categoría contiene un array de vistas con su nombre y ruta.
 */
const navigation = [
  {
    category: 'RYCE',
    icon: '📋',
    views: [
      {
        name: 'TGR Cert Deuda',
        path: '/ryce/tgr-cert-deuda',
      },
      {
        name: 'Contratista TASAS',
        path: '/ryce/contratista-tasas',
      },
      {
        name: 'Contratistas Cert Deuda TGR',
        path: '/ryce/contratistas-cert-deuda-tgr',
      },
      {
        name: 'RYCE Convenio TGR',
        path: '/ryce/convenio-tgr',
      },
    ],
  },
];

export default navigation;
