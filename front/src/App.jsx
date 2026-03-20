import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import TgrCertDeuda from './pages/ryce/TgrCertDeuda';
import ContratistaTasas from './pages/ryce/ContratistaTasas';
import ContratistasCertDeudaTgr from './pages/ryce/ContratistasCertDeudaTgr';
import RyceConvenioTgr from './pages/ryce/RyceConvenioTgr';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ryce/tgr-cert-deuda" element={<TgrCertDeuda />} />
          <Route path="/ryce/contratista-tasas" element={<ContratistaTasas />} />
          <Route path="/ryce/contratistas-cert-deuda-tgr" element={<ContratistasCertDeudaTgr />} />
          <Route path="/ryce/convenio-tgr" element={<RyceConvenioTgr />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
