import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { TrendingUp, Target, Users, PieChart as PieChartIcon } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const cacTargetData = [
  { segment: 'SMB', min: 500, max: 1000, color: '#0019FF' },
  { segment: 'White-label', min: 1500, max: 3000, color: '#6152F4' },
  { segment: 'BigFish', min: 5000, max: 10000, color: '#8B5CF6' },
];

const CacTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string }>; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-vault-card border border-vault-border rounded-xl px-4 py-3 shadow-xl">
      <p className="text-white font-medium text-sm mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-vault-muted text-xs">
          {entry.name}: <span className="text-white font-semibold">${entry.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
};

const kpis = [
  {
    icon: Target,
    label: 'LTV:CAC Target',
    primary: '3:1',
    secondary: 'minimum',
    ideal: '4:1 ideal',
    color: '#0019FF',
  },
  {
    icon: TrendingUp,
    label: 'Revenue Contribution',
    primary: '10-20%',
    secondary: 'of total revenue',
    ideal: 'within 18 months',
    color: '#6152F4',
  },
  {
    icon: PieChartIcon,
    label: 'Partner Revenue Share',
    primary: '60-80%',
    secondary: 'of partner revenue',
    ideal: 'from top 15% of partners',
    color: '#8B5CF6',
  },
  {
    icon: Users,
    label: 'Top Partner Concentration',
    primary: '15%',
    secondary: 'of partners',
    ideal: 'generate majority of revenue',
    color: '#10B981',
  },
];

export default function FinancialImpact() {
  return (
    <SectionWrapper id="financial-impact">
      <SectionHeading
        number="05"
        title="Financial Impact"
        subtitle="Target economics for the partner program, including CAC targets, LTV ratios, and revenue contribution goals."
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {kpis.map((kpi, i) => {
          const KpiIcon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${kpi.color}15` }}
              >
                <KpiIcon size={22} style={{ color: kpi.color }} />
              </div>
              <div className="text-xs text-vault-muted uppercase tracking-wider mb-2">{kpi.label}</div>
              <div className="text-3xl font-bold text-white mb-1">{kpi.primary}</div>
              <div className="text-sm text-vault-muted">{kpi.secondary}</div>
              <div className="text-xs mt-2 font-medium" style={{ color: kpi.color }}>{kpi.ideal}</div>
            </motion.div>
          );
        })}
      </div>

      {/* CAC Target Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-6 mb-10"
      >
        <h3 className="text-lg font-semibold text-white mb-1">Target Partner CAC by Segment</h3>
        <p className="text-sm text-vault-muted mb-6">Min-max acquisition cost targets through partner channel</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cacTargetData} barCategoryGap="25%">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="segment" tick={{ fill: '#9CA3AF', fontSize: 13 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
            <Tooltip content={<CacTooltip />} />
            <Bar dataKey="min" name="Min CAC" radius={[6, 6, 0, 0]}>
              {cacTargetData.map((entry, i) => (
                <Cell key={i} fill={entry.color} fillOpacity={0.6} />
              ))}
            </Bar>
            <Bar dataKey="max" name="Max CAC" radius={[6, 6, 0, 0]}>
              {cacTargetData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bottom metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-6"
        >
          <h4 className="font-semibold text-white mb-4">LTV:CAC Ratio Targets</h4>
          <div className="space-y-4">
            {[
              { label: 'Minimum viable', ratio: '3:1', width: '60%', color: '#F59E0B' },
              { label: 'Target', ratio: '4:1', width: '80%', color: '#10B981' },
              { label: 'Exceptional', ratio: '5:1+', width: '100%', color: '#0019FF' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-vault-muted">{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.ratio}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-vault-dark overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-6"
        >
          <h4 className="font-semibold text-white mb-4">Revenue Contribution Timeline</h4>
          <div className="space-y-4">
            {[
              { month: 'Month 6', pct: '3-5%', width: '15%', status: 'Launch' },
              { month: 'Month 12', pct: '8-12%', width: '50%', status: 'Scale' },
              { month: 'Month 18', pct: '10-20%', width: '85%', status: 'Target' },
              { month: 'Month 24+', pct: '20%+', width: '100%', status: 'Mature' },
            ].map((item, idx) => (
              <div key={item.month}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-vault-muted">{item.month}</span>
                    <span className="pill bg-vault-primary/10 text-vault-primary text-[10px]">{item.status}</span>
                  </div>
                  <span className="text-sm font-bold text-white">{item.pct}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-vault-dark overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                    className="h-full rounded-full bg-gradient-to-r from-vault-primary to-vault-secondary"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
