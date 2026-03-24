import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const revShareData = [
  { role: 'Referral Only', min: 10, max: 15 },
  { role: 'Reseller', min: 15, max: 25 },
  { role: 'Tech Partner', min: 20, max: 30 },
  { role: 'White-label', min: 25, max: 40 },
];

const bountyData = [
  { segment: 'SMB', bounty: 1500, label: '$500-$2,500' },
  { segment: 'Mid-market', bounty: 3000, label: '$1K-$5K' },
  { segment: 'Enterprise', bounty: 7500, label: '$5K-$10K+' },
];

const durationData = [
  { name: '12 months', value: 45, color: '#0019FF' },
  { name: '24 months', value: 35, color: '#6152F4' },
  { name: '36+ months', value: 15, color: '#8B5CF6' },
  { name: 'Perpetual', value: 5, color: '#A78BFA' },
];

const cacData = [
  { segment: 'SMB', cac: 1450, color: '#0019FF' },
  { segment: 'White-label', cac: 4900, color: '#6152F4' },
  { segment: 'BigFish', cac: 14800, color: '#8B5CF6' },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string }>; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-vault-card border border-vault-border rounded-xl px-4 py-3 shadow-xl">
      <p className="text-white font-medium text-sm mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-vault-muted text-xs">
          {entry.name}: <span className="text-white font-semibold">{entry.value}%</span>
        </p>
      ))}
    </div>
  );
};

const BountyTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { label: string } }>; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-vault-card border border-vault-border rounded-xl px-4 py-3 shadow-xl">
      <p className="text-white font-medium text-sm mb-1">{label}</p>
      <p className="text-vault-muted text-xs">
        Range: <span className="text-white font-semibold">{payload[0].payload.label}</span>
      </p>
    </div>
  );
};

const CacTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-vault-card border border-vault-border rounded-xl px-4 py-3 shadow-xl">
      <p className="text-white font-medium text-sm mb-1">{label}</p>
      <p className="text-vault-muted text-xs">
        CAC: <span className="text-white font-semibold">${payload[0].value.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default function Benchmarks() {
  return (
    <SectionWrapper id="benchmarks">
      <SectionHeading
        number="03"
        title="Industry Benchmarks"
        subtitle="Revenue share ranges, bounty structures, and customer acquisition costs across the BaaS partner ecosystem."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Share Ranges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-1">Revenue Share by Partner Role</h3>
          <p className="text-sm text-vault-muted mb-6">Min-max ranges, percentage of referred revenue</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revShareData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="role" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="min" name="Min %" fill="#0019FF" radius={[6, 6, 0, 0]} />
              <Bar dataKey="max" name="Max %" fill="#6152F4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* One-time Bounties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-1">One-Time Bounty by Segment</h3>
          <p className="text-sm text-vault-muted mb-6">Median bounty amount per referred client</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={bountyData} barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="segment" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip content={<BountyTooltip />} />
              <Bar dataKey="bounty" fill="url(#bountyGradient)" radius={[6, 6, 0, 0]} />
              <defs>
                <linearGradient id="bountyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6152F4" />
                  <stop offset="100%" stopColor="#0019FF" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Duration Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-1">Revenue Share Duration</h3>
          <p className="text-sm text-vault-muted mb-6">Distribution of rev share agreement lengths</p>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={durationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {durationData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: '#1A1B23',
                  border: '1px solid rgba(97, 82, 244, 0.2)',
                  borderRadius: 12,
                  color: '#fff',
                  fontSize: 12,
                }}
                formatter={(value) => [`${value}%`, 'Share']}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value: string) => <span style={{ color: '#9CA3AF', fontSize: 12 }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* CAC by Segment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-1">CAC by Client Segment</h3>
          <p className="text-sm text-vault-muted mb-6">Industry average customer acquisition cost</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={cacData} barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="segment" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip content={<CacTooltip />} />
              <Bar dataKey="cac" radius={[6, 6, 0, 0]}>
                {cacData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Key insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          { label: 'Standard Rev Share', value: '10-40%', sub: 'Depending on partner role' },
          { label: 'Avg. Duration', value: '12-24mo', sub: 'Industry standard window' },
          { label: 'BigFish CAC', value: '$14,800', sub: 'Highest acquisition cost' },
        ].map(item => (
          <div key={item.label} className="glass-card p-5 text-center pulse-glow">
            <div className="text-xs text-vault-muted uppercase tracking-wider mb-1">{item.label}</div>
            <div className="text-2xl font-bold gradient-text">{item.value}</div>
            <div className="text-xs text-vault-muted mt-1">{item.sub}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
