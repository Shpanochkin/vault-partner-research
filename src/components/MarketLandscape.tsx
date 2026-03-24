import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

type CompetitorCategory = 'direct' | 'indirect' | 'large';

interface Competitor {
  name: string;
  category: CompetitorCategory;
  hasProgram: 'yes' | 'partial' | 'no' | 'historical';
  programType: string;
  details: string;
  highlight?: boolean;
}

const competitors: Competitor[] = [
  { name: 'Wallester', category: 'direct', hasProgram: 'yes', programType: 'PPL + RevShare + White-label', details: 'Most transparent: PPL \u20AC200, RevShare 20-30%, White-label 5% / 2yr, 1,500+ partners', highlight: true },
  { name: 'Interlace', category: 'direct', hasProgram: 'yes', programType: 'Partner + Referral', details: '$1K-$10K bounties per referral' },
  { name: 'Rain', category: 'direct', hasProgram: 'yes', programType: 'Affiliate rev share', details: 'Up to 60% revenue share (affiliate model)' },
  { name: 'OpenPayd', category: 'direct', hasProgram: 'partial', programType: 'Introducer program', details: 'Formal introducer agreement, terms undisclosed' },
  { name: 'FINCI', category: 'direct', hasProgram: 'partial', programType: 'B2B referral', details: 'Formal B2B referral program' },
  { name: 'Reap', category: 'direct', hasProgram: 'partial', programType: 'Credits-based', details: 'Credits referral only, max 5 referrals, $1,200 max total' },
  { name: 'TRIBE', category: 'direct', hasProgram: 'partial', programType: 'Refer-a-friend', details: 'Consumer refer-a-friend only, no B2B' },
  { name: 'Wasabicard', category: 'direct', hasProgram: 'partial', programType: 'B2C referral', details: '$5/referral, B2C only' },
  { name: 'NOAH', category: 'direct', hasProgram: 'historical', programType: 'Historical only', details: 'Previously had a program, no longer active' },
  { name: 'Monavate', category: 'direct', hasProgram: 'no', programType: 'None', details: 'No partner or referral program detected' },

  { name: 'Revolut', category: 'indirect', hasProgram: 'yes', programType: 'Referral + CPA', details: '\u00A310-\u00A3100 per referral, max 5 friends; CPA up to \u00A3500' },
  { name: 'Crypto.com', category: 'indirect', hasProgram: 'yes', programType: 'Tiered referral', details: 'Up to $2,000/referral, 50% trading fee share, 12-month window' },
  { name: 'Nexo', category: 'indirect', hasProgram: 'yes', programType: 'Multi-tier', details: 'Up to $5,000 in BTC, 10% interest + 0.2% volume, 12 months' },
  { name: 'Wirex', category: 'indirect', hasProgram: 'partial', programType: 'CPA referral', details: '$10-$30 CPA per referral' },

  { name: 'Stripe', category: 'large', hasProgram: 'yes', programType: 'Partner \u2192 Verified \u2192 Premier', details: 'Three-tier with specializations, technology & consulting tracks' },
  { name: 'Airwallex', category: 'large', hasProgram: 'yes', programType: 'Silver/Gold/Platinum', details: 'Silver 10% / Gold 15% / Platinum 20% + $200/ref, 3-year rev share' },
  { name: 'Adyen', category: 'large', hasProgram: 'yes', programType: 'Revenue-driven', details: 'Revenue-driven partner model, tech partner revenue share' },
  { name: 'Marqeta', category: 'large', hasProgram: 'partial', programType: 'Enterprise only', details: 'Enterprise-level partnerships only, no SMB program' },
];

const statusConfig = {
  yes: { icon: Check, color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)', label: 'Active' },
  partial: { icon: Minus, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)', label: 'Limited' },
  no: { icon: X, color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)', label: 'None' },
  historical: { icon: X, color: '#6B7280', bg: 'rgba(107, 114, 128, 0.15)', label: 'Historical' },
};

const categoryLabels: Record<CompetitorCategory, string> = {
  direct: 'Direct Competitors',
  indirect: 'Indirect Competitors',
  large: 'Large Players (Benchmarks)',
};

export default function MarketLandscape() {
  const [activeCategory, setActiveCategory] = useState<CompetitorCategory>('direct');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filtered = competitors.filter(c => c.category === activeCategory);

  return (
    <SectionWrapper id="market-landscape" className="bg-vault-card/30">
      <SectionHeading
        number="02"
        title="Market Landscape"
        subtitle="Interactive competitor matrix showing the current state of partner programs across the BaaS ecosystem."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(categoryLabels) as CompetitorCategory[]).map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setExpandedRow(null); }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-vault-primary to-vault-secondary text-white shadow-lg shadow-vault-primary/20'
                : 'bg-vault-card text-vault-muted border border-vault-border hover:border-vault-border-hover hover:text-white'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Table */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-card overflow-hidden"
      >
        {/* Table header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-vault-border text-xs font-semibold text-vault-muted uppercase tracking-wider">
          <div className="col-span-3">Company</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Program Type</div>
          <div className="col-span-4">Key Details</div>
        </div>

        {/* Table rows */}
        <AnimatePresence mode="wait">
          {filtered.map((comp, i) => {
            const status = statusConfig[comp.hasProgram];
            const StatusIcon = status.icon;
            const isExpanded = expandedRow === comp.name;

            return (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`border-b border-vault-border/50 last:border-b-0 table-row-hover transition-colors ${
                  comp.highlight ? 'bg-vault-primary/5' : ''
                }`}
              >
                {/* Desktop row */}
                <div
                  className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer"
                  onClick={() => setExpandedRow(isExpanded ? null : comp.name)}
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <span className="font-semibold text-white">{comp.name}</span>
                    {comp.highlight && (
                      <span className="pill bg-vault-primary/15 text-vault-primary text-[10px]">
                        Best-in-class
                      </span>
                    )}
                  </div>
                  <div className="col-span-2">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: status.bg, color: status.color }}
                    >
                      <StatusIcon size={12} />
                      {status.label}
                    </span>
                  </div>
                  <div className="col-span-3 text-sm text-vault-text">{comp.programType}</div>
                  <div className="col-span-3 text-sm text-vault-muted">{comp.details}</div>
                  <div className="col-span-1 flex justify-end">
                    {isExpanded ? <ChevronUp size={16} className="text-vault-muted" /> : <ChevronDown size={16} className="text-vault-muted" />}
                  </div>
                </div>

                {/* Mobile card */}
                <div
                  className="md:hidden px-5 py-4 cursor-pointer"
                  onClick={() => setExpandedRow(isExpanded ? null : comp.name)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{comp.name}</span>
                      {comp.highlight && (
                        <span className="pill bg-vault-primary/15 text-vault-primary text-[10px]">
                          Best
                        </span>
                      )}
                    </div>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium"
                      style={{ background: status.bg, color: status.color }}
                    >
                      <StatusIcon size={10} />
                      {status.label}
                    </span>
                  </div>
                  <div className="text-sm text-vault-muted">{comp.programType}</div>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-vault-card/50 border-t border-vault-border/30">
                        <div className="flex items-start gap-2">
                          <ExternalLink size={14} className="text-vault-primary mt-0.5 shrink-0" />
                          <p className="text-sm text-vault-text">{comp.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Summary counts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Total analyzed', value: '20+', color: '#fff' },
          { label: 'Active programs', value: '11', color: '#10B981' },
          { label: 'Limited/partial', value: '6', color: '#F59E0B' },
          { label: 'No program', value: '2', color: '#EF4444' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-4 text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs text-vault-muted">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
