import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Briefcase, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Layers,
  ShieldCheck,
  Calculator,
  Target,
  FlaskConical
} from 'lucide-react';

const tcoComparisonData = [
  { year: 'Year 1', onPrem: 15.0, cloud: 18.5 }, // Cloud higher due to migration double bubble
  { year: 'Year 2', onPrem: 15.5, cloud: 14.2 },
  { year: 'Year 3', onPrem: 16.2, cloud: 12.1 },
  { year: 'Year 4', onPrem: 17.0, cloud: 10.8 },
  { year: 'Year 5', onPrem: 18.1, cloud: 9.5 },
];

const migrationStrategyBreakdown = [
  { name: 'Rehost', value: 45, color: '#10b981' },
  { name: 'Replatform', value: 25, color: '#34d399' },
  { name: 'Refactor', value: 15, color: '#6ee7b7' },
  { name: 'Repurchase', value: 10, color: '#a7f3d0' },
  { name: 'Retain / Retire', value: 5, color: '#ecfdf5' },
];

const KPI_CARDS = [
  { title: 'Total 5-Year TCO', value: '$65.1M', trend: 'vs $80.2M On-Prem', color: 'emerald', icon: Calculator },
  { title: 'Net NPV', value: '$12.4M', trend: 'Strategic Value', color: 'emerald', icon: TrendingUp },
  { title: 'Est. Payback', value: '14 mo', trend: 'Post-Migration', color: 'emerald', icon: Clock },
  { title: 'ROI (5-Year)', value: '42.5%', trend: 'Confidence: High', color: 'emerald', icon: Target },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Migration Business Case Summary</h1>
          <p className="text-slate-400">Institutional cloud transformation modeling, financial justification, and risk assessment.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Export Executive PDF
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Update Simulation
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-emerald-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-emerald-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* TCO Comparison */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">5-Year TCO Comparison (On-Prem vs. Cloud)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tcoComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} label={{ value: '$ Millions', angle: -90, position: 'insideLeft', fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="onPrem" fill="#334155" name="On-Premises TCO" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cloud" fill="#10b981" name="Target Cloud TCO" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strategy Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Migration Strategy Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={migrationStrategyBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {migrationStrategyBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {migrationStrategyBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Portfolio Assessment Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Application Portfolio Assessment</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Full Inventory</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Application Name</th>
                <th className="px-6 py-4 font-semibold">Strategy</th>
                <th className="px-6 py-4 font-semibold">Risk Score</th>
                <th className="px-6 py-4 font-semibold">Est. Cloud Cost</th>
                <th className="px-6 py-4 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Core ERP System', strategy: 'Refactor', risk: 'High', cost: '$450k/yr', complexity: 'Critical' },
                { name: 'Customer Data Lake', strategy: 'Replatform', risk: 'Med', cost: '$120k/yr', complexity: 'Moderate' },
                { name: 'Internal HR Portal', strategy: 'Rehost', risk: 'Low', cost: '$45k/yr', complexity: 'Low' },
                { name: 'Legacy Mainframe Proxy', strategy: 'Retire', risk: 'Low', cost: '$0', complexity: 'N/A' },
              ].map((app, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Layers className="w-5 h-5 text-emerald-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{app.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: APP-2026-X8</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.strategy === 'Refactor' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {app.strategy}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{app.risk}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{app.cost}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs text-slate-500">{app.complexity}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
