import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveDashboard from './pages/ExecutiveDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Migration Business Case Platform is currently modeling complex financial scenarios and optimizing ROI projections. Strategic 6R/7R classification and risk-adjusted TCO simulations will be fully operational once the portfolio assessment engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveDashboard />} />
          <Route path="/tco" element={<Placeholder name="TCO Modeling & Comparison" />} />
          <Route path="/roi" element={<Placeholder name="ROI & NPV Financial Analysis" />} />
          <Route path="/portfolio" element={<Placeholder name="Application Portfolio Assessment" />} />
          <Route path="/strategy" element={<Placeholder name="Migration Strategy (6R/7R) Mapping" />} />
          <Route path="/risk" element={<Placeholder name="Risk & Complexity Scoring" />} />
          <Route path="/scenarios" element={<Placeholder name="Scenario & Sensitivity Simulation" />} />
          <Route path="/finops" element={<Placeholder name="FinOps Strategy & Forecasting" />} />
          <Route path="/reports" element={<Placeholder name="Executive Business Case Reporting" />} />
          <Route path="/compliance" element={<Placeholder name="Regulatory & Governance Review" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Economic Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
