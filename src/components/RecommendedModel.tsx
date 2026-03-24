import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Rocket, Crown, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

interface Tier {
  id: string;
  name: string;
  icon: typeof Star;
  color: string;
  gradient: string;
  entry: string;
  smb: string;
  wl: string;
  bigfish: string;
  support: string;
}

const tiers: Tier[] = [
  {
    id: 'referral',
    name: 'Referral Partner',
    icon: Star,
    color: '#0019FF',
    gradient: 'from-[#0019FF]/20 to-transparent',
    entry: 'Registration + KYC',
    smb: '$300',
    wl: '$1,000 + 10% (12mo)',
    bigfish: '10% rev share 12mo',
    support: 'Self-service portal',
  },
  {
    id: 'growth',
    name: 'Growth Partner',
    icon: Rocket,
    color: '#6152F4',
    gradient: 'from-[#6152F4]/20 to-transparent',
    entry: '5+ clients / $50K ARR',
    smb: '$500',
    wl: '$2,000 + 15% (12mo)',
    bigfish: '15% rev share 24mo',
    support: 'Priority + quarterly reviews',
  },
  {
    id: 'strategic',
    name: 'Strategic Partner',
    icon: Crown,
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/20 to-transparent',
    entry: '15+ clients / $200K ARR',
    smb: '$750',
    wl: '$3,000 + 20% (24mo)',
    bigfish: 'Custom, up to 36mo',
    support: 'Dedicated AM + MDF',
  },
];

const tableRows = [
  { label: 'Entry Requirement', key: 'entry' as const },
  { label: 'SMB Bounty', key: 'smb' as const },
  { label: 'White-Label Bounty', key: 'wl' as const },
  { label: 'BigFish Deal', key: 'bigfish' as const },
  { label: 'Support Level', key: 'support' as const },
];

export default function RecommendedModel() {
  const [activeTier, setActiveTier] = useState<string>('growth');

  return (
    <SectionWrapper id="recommended-model" className="bg-vault-card/30">
      <SectionHeading
        number="04"
        title="Recommended Model"
        subtitle="A three-tier hybrid partner program designed to scale with partner maturity and contribution."
      />

      {/* Tier selector cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {tiers.map((tier, i) => {
          const isActive = activeTier === tier.id;
          const TierIcon = tier.icon;
          return (
            <motion.button
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveTier(tier.id)}
              className={`relative p-6 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                isActive
                  ? 'border-vault-secondary/40 bg-vault-card shadow-lg shadow-vault-secondary/10'
                  : 'border-vault-border bg-vault-card/50 hover:border-vault-border-hover hover:bg-vault-card'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="tierHighlight"
                  className="absolute inset-0 rounded-2xl border-2 border-vault-secondary/40"
                  transition={{ duration: 0.3 }}
                />
              )}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${tier.color}20` }}
              >
                <TierIcon size={20} style={{ color: tier.color }} />
              </div>
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="text-sm text-vault-muted mt-1">{tier.entry}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card overflow-hidden mb-10"
      >
        {/* Table header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-vault-border">
          <div className="text-xs font-semibold text-vault-muted uppercase tracking-wider" />
          {tiers.map(tier => (
            <div
              key={tier.id}
              className={`text-sm font-semibold text-center transition-colors ${
                activeTier === tier.id ? 'text-white' : 'text-vault-muted'
              }`}
            >
              {tier.name}
            </div>
          ))}
        </div>

        {/* Table body */}
        {tableRows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-4 gap-4 px-6 py-4 border-b border-vault-border/30 last:border-b-0 table-row-hover ${
              i % 2 === 0 ? 'bg-white/[0.01]' : ''
            }`}
          >
            <div className="text-sm font-medium text-vault-text">{row.label}</div>
            {tiers.map(tier => (
              <div
                key={tier.id}
                className={`text-sm text-center transition-all duration-200 ${
                  activeTier === tier.id
                    ? 'text-white font-semibold'
                    : 'text-vault-muted'
                }`}
              >
                {tier[row.key]}
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Payment mechanics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-vault-primary/15 flex items-center justify-center">
              <Clock size={18} className="text-vault-primary" />
            </div>
            <h4 className="font-semibold text-white">Payment Split</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-vault-muted">At contract signing</span>
              <span className="text-sm font-bold text-white">30%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-vault-dark overflow-hidden">
              <div className="h-full rounded-full bg-vault-primary" style={{ width: '30%' }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-vault-muted">At activation</span>
              <span className="text-sm font-bold text-white">70%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-vault-dark overflow-hidden">
              <div className="h-full rounded-full bg-vault-secondary" style={{ width: '70%' }} />
            </div>
            <p className="text-xs text-vault-muted mt-2">
              Activation = $10K spend or 100 cards within 60 days
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-vault-secondary/15 flex items-center justify-center">
              <CheckCircle size={18} className="text-vault-secondary" />
            </div>
            <h4 className="font-semibold text-white">BigFish Declining Model</h4>
          </div>
          <div className="space-y-3">
            {[
              { year: 'Year 1', pct: 15, width: '100%' },
              { year: 'Year 2', pct: 10, width: '67%' },
              { year: 'Year 3+', pct: 5, width: '33%' },
            ].map(item => (
              <div key={item.year}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-vault-muted">{item.year}</span>
                  <span className="text-sm font-bold text-white">{item.pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-vault-dark overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-vault-primary to-vault-secondary"
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-red-500/15 flex items-center justify-center">
              <AlertTriangle size={18} className="text-red-400" />
            </div>
            <h4 className="font-semibold text-white">Clawback Policy</h4>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100%-52px)]">
            <div className="text-5xl font-bold text-white mb-2">90</div>
            <div className="text-lg text-vault-muted">day clawback window</div>
            <p className="text-xs text-vault-muted mt-3 text-center">
              Full bounty clawback if referred client churns within 90 days of activation
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
