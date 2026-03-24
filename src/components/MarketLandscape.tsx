import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, ChevronDown, ChevronUp, Globe, DollarSign, Clock, AlertTriangle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

type CompetitorCategory = 'direct' | 'indirect' | 'large';

interface CompetitorExpanded {
  description: string;
  commission: string;
  paymentTerms: string;
  requirements: string;
  website?: string;
}

interface Competitor {
  name: string;
  category: CompetitorCategory;
  hasProgram: 'yes' | 'partial' | 'no' | 'historical';
  programType: string;
  details: string;
  highlight?: boolean;
  expanded: CompetitorExpanded;
}

const competitors: Competitor[] = [
  {
    name: 'Wallester',
    category: 'direct',
    hasProgram: 'yes',
    programType: 'PPL + RevShare + White-label',
    details: 'Most transparent: PPL \u20AC200, RevShare 20-30%, White-label 5% / 2yr, 1,500+ partners',
    highlight: true,
    expanded: {
      description: 'The most transparent partner program among direct competitors. Offers three distinct models: Pay-Per-Lead (\u20AC200 per qualified lead), Revenue Share (20-30% of monthly fees), and White-Label reseller (5% of client revenue over 2 years). Over 1,500 active partners in their network.',
      commission: 'PPL: \u20AC200/lead | Revenue Share: 20-30% of monthly fees | White-Label: 5% of client revenue for 24 months',
      paymentTerms: 'Monthly payouts, 30-day cycle. PPL paid on lead qualification, RevShare on client payment.',
      requirements: 'Self-service onboarding via partner portal. No minimum volume requirements for PPL tier.',
      website: 'wallester.com/partners',
    },
  },
  {
    name: 'Interlace',
    category: 'direct',
    hasProgram: 'yes',
    programType: 'Partner + Referral',
    details: '$1K-$10K bounties per referral',
    expanded: {
      description: 'B2B-focused partner program with substantial one-time bounties for enterprise referrals. Targets crypto/fintech companies needing card issuing infrastructure in APAC region.',
      commission: 'One-time bounty: $1,000-$10,000 per qualified referral depending on deal size',
      paymentTerms: 'Paid after client activation and first month of processing. 60-day payment cycle.',
      requirements: 'Must be an established fintech/crypto company or consultant. NDA and partner agreement required.',
    },
  },
  {
    name: 'Rain',
    category: 'direct',
    hasProgram: 'yes',
    programType: 'Affiliate rev share',
    details: 'Up to 60% revenue share (affiliate model)',
    expanded: {
      description: 'Aggressive affiliate-style revenue share targeting Web3 influencers and crypto communities. Highest rev share percentage among direct competitors, designed for rapid community-driven growth.',
      commission: 'Up to 60% revenue share on referred client fees. Tiered based on volume.',
      paymentTerms: 'Monthly payouts in USD or crypto. No minimum threshold disclosed.',
      requirements: 'Application-based. Preference for crypto/Web3 community leaders, influencers, and KOLs.',
    },
  },
  {
    name: 'OpenPayd',
    category: 'direct',
    hasProgram: 'partial',
    programType: 'Introducer program',
    details: 'Formal introducer agreement, terms undisclosed',
    expanded: {
      description: 'Structured introducer program for B2B partners. Terms are negotiated individually and not publicly disclosed. Focused on banking and payment infrastructure referrals.',
      commission: 'Individually negotiated. Believed to be revenue share model based on introduced client volume.',
      paymentTerms: 'Custom terms per agreement. Quarterly payouts typical.',
      requirements: 'Must demonstrate ability to introduce enterprise-level clients. Background check and compliance review.',
    },
  },
  {
    name: 'FINCI',
    category: 'direct',
    hasProgram: 'partial',
    programType: 'B2B referral',
    details: 'Formal B2B referral program',
    expanded: {
      description: 'Lithuanian EMI with a B2B referral program targeting European fintech companies. Program focuses on multi-currency account and SEPA referrals.',
      commission: 'Terms not publicly disclosed. Believed to be per-referral bounty model.',
      paymentTerms: 'Not publicly disclosed.',
      requirements: 'Must be a registered European business. Compliance check required.',
    },
  },
  {
    name: 'Reap',
    category: 'direct',
    hasProgram: 'partial',
    programType: 'Credits-based',
    details: 'Credits referral only, max 5 referrals, $1,200 max total',
    expanded: {
      description: 'Very limited credits-based program. Both referrer and referee receive platform credits. Capped at 5 referrals maximum, making it unsuitable as a scalable partnership model.',
      commission: 'Up to $240 in credits per referral. Maximum 5 referrals = $1,200 total lifetime cap.',
      paymentTerms: 'Credits applied immediately to platform balance. Not convertible to cash.',
      requirements: 'Must be an existing Reap client. No formal partner status.',
    },
  },
  {
    name: 'TRIBE',
    category: 'direct',
    hasProgram: 'partial',
    programType: 'Refer-a-friend',
    details: 'Consumer refer-a-friend only, no B2B',
    expanded: {
      description: 'Consumer-focused refer-a-friend program only. No structured B2B partner or reseller program exists despite TRIBE being a BaaS/card issuing platform.',
      commission: 'Small consumer-level rewards. No B2B commission structure.',
      paymentTerms: 'Consumer credits. No cash payouts.',
      requirements: 'Must be an existing end-user. Not applicable for business partnerships.',
    },
  },
  {
    name: 'Wasabicard',
    category: 'direct',
    hasProgram: 'partial',
    programType: 'B2C referral',
    details: '$5/referral, B2C only',
    expanded: {
      description: 'Minimal consumer referral program. $5 per referred user is among the lowest in the industry. No B2B or partner-level program for resellers or integrators.',
      commission: 'Flat $5 per referred end-user who completes KYC and card activation.',
      paymentTerms: 'Credit to platform wallet.',
      requirements: 'Existing cardholder. No formal partner program.',
    },
  },
  {
    name: 'NOAH',
    category: 'direct',
    hasProgram: 'historical',
    programType: 'Historical only',
    details: 'Previously had a program, no longer active',
    expanded: {
      description: 'Previously operated a referral program during growth phase. Program was discontinued — possibly due to strategic pivot or resource reallocation. No current partner acquisition channel.',
      commission: 'N/A — program discontinued.',
      paymentTerms: 'N/A',
      requirements: 'N/A',
    },
  },
  {
    name: 'Monavate',
    category: 'direct',
    hasProgram: 'no',
    programType: 'None',
    details: 'No partner or referral program detected',
    expanded: {
      description: 'No partner, referral, or affiliate program detected across website, documentation, or job listings. Relies entirely on direct sales and industry network.',
      commission: 'N/A',
      paymentTerms: 'N/A',
      requirements: 'N/A',
    },
  },

  {
    name: 'Revolut',
    category: 'indirect',
    hasProgram: 'yes',
    programType: 'Referral + CPA',
    details: '\u00A310-\u00A3100 per referral, max 5 friends; CPA up to \u00A3500',
    expanded: {
      description: 'Dual-track program: consumer referral (capped at 5 friends) and business affiliate CPA model for partners driving Revolut Business sign-ups. Aggressive CPA rates for B2B.',
      commission: 'Consumer: \u00A310-\u00A3100 per friend (varies by campaign). Business CPA: up to \u00A3500 per qualified business account.',
      paymentTerms: 'Consumer rewards instant. Business CPA: Net-30, minimum \u00A3500 threshold.',
      requirements: 'Consumer: existing user. Business CPA: application through affiliate network (Impact.com).',
    },
  },
  {
    name: 'Crypto.com',
    category: 'indirect',
    hasProgram: 'yes',
    programType: 'Tiered referral',
    details: 'Up to $2,000/referral, 50% trading fee share, 12-month window',
    expanded: {
      description: 'Multi-layered referral program with substantial rewards. Combines one-time sign-up bonuses with ongoing trading fee revenue share. 12-month attribution window.',
      commission: 'Up to $2,000 per referral (based on CRO stake). 50% of referred user trading fees for 12 months.',
      paymentTerms: 'Paid in CRO tokens. Monthly settlement for fee share. Bonuses on qualification.',
      requirements: 'Existing user with KYC. Higher tier rewards require CRO staking.',
    },
  },
  {
    name: 'Nexo',
    category: 'indirect',
    hasProgram: 'yes',
    programType: 'Multi-tier',
    details: 'Up to $5,000 in BTC, 10% interest + 0.2% volume, 12 months',
    expanded: {
      description: 'One of the most generous crypto referral programs. Combines BTC rewards with ongoing interest and volume-based commissions. Strong loyalty mechanics through 12-month earning window.',
      commission: 'Up to $5,000 in BTC per referral. 10% of referee interest earnings + 0.2% of exchange volume for 12 months.',
      paymentTerms: 'BTC rewards on qualification. Revenue share paid monthly in NEXO tokens or stablecoins.',
      requirements: 'Existing Nexo user. Referee must deposit minimum $100 and maintain balance for 30 days.',
    },
  },
  {
    name: 'Wirex',
    category: 'indirect',
    hasProgram: 'partial',
    programType: 'CPA referral',
    details: '$10-$30 CPA per referral',
    expanded: {
      description: 'Simple cost-per-acquisition referral model. Lower payouts compared to other crypto platforms. No ongoing revenue share or tiered rewards.',
      commission: '$10-$30 per referred user who completes KYC and makes first transaction.',
      paymentTerms: 'Paid in WXT tokens or platform credit. Monthly settlement.',
      requirements: 'Existing Wirex user. Referee must complete full verification.',
    },
  },

  {
    name: 'Stripe',
    category: 'large',
    hasProgram: 'yes',
    programType: 'Partner \u2192 Verified \u2192 Premier',
    details: 'Three-tier with specializations, technology & consulting tracks',
    highlight: true,
    expanded: {
      description: 'Industry gold standard. Three-tier program (Partner \u2192 Verified \u2192 Premier) with technology and consulting tracks. Includes co-marketing, technical support, and lead sharing. Extensive certification and specialization system.',
      commission: 'Revenue share % varies by tier and deal size. Premier partners get highest rates + co-sell incentives. Referral fees from $500-$5,000+ per activated merchant.',
      paymentTerms: 'Quarterly payouts. Revenue share tracked via Stripe Partner Dashboard.',
      requirements: 'Partner: basic integration. Verified: 10+ clients, certification. Premier: 50+ clients, dedicated relationship.',
      website: 'stripe.com/partners',
    },
  },
  {
    name: 'Airwallex',
    category: 'large',
    hasProgram: 'yes',
    programType: 'Silver/Gold/Platinum',
    details: 'Silver 10% / Gold 15% / Platinum 20% + $200/ref, 3-year rev share',
    expanded: {
      description: 'Closest benchmark to Vault\'s target model. Clear tiered structure with transparent rev share percentages. 3-year revenue share window is among the longest in the industry. Combines referral bounties with ongoing revenue share.',
      commission: 'Silver: 10% rev share + $200/ref. Gold: 15% + $500/ref. Platinum: 20% + $1,000/ref. All rev share for 36 months.',
      paymentTerms: 'Monthly payouts. Net-30 cycle. Minimum $100 threshold.',
      requirements: 'Silver: 3+ referrals/quarter. Gold: 10+ referrals/quarter. Platinum: 25+ or $1M+ referred ARR.',
      website: 'airwallex.com/partners',
    },
  },
  {
    name: 'Adyen',
    category: 'large',
    hasProgram: 'yes',
    programType: 'Revenue-driven',
    details: 'Revenue-driven partner model, tech partner revenue share',
    expanded: {
      description: 'Enterprise-focused with revenue-driven model. Technology partners earn based on the processing volume of integrated merchants. No public tier structure — all terms negotiated.',
      commission: 'Revenue share based on processing volume. Rates individually negotiated. Tech partners earn on ongoing transactions.',
      paymentTerms: 'Quarterly settlement. Enterprise-level invoicing.',
      requirements: 'Must be a technology provider or systems integrator. Minimum client pipeline required.',
    },
  },
  {
    name: 'Marqeta',
    category: 'large',
    hasProgram: 'partial',
    programType: 'Enterprise only',
    details: 'Enterprise-level partnerships only, no SMB program',
    expanded: {
      description: 'Strategic enterprise partnerships only. No self-service or SMB partner program. Focused on large-scale card issuing integrations with major fintechs and banks.',
      commission: 'Custom commercial terms. Typically volume-based pricing discounts rather than referral commissions.',
      paymentTerms: 'Enterprise contract terms. Quarterly or annual settlement.',
      requirements: 'Must be an enterprise-level technology company or financial institution. Minimum processing volume commitments.',
    },
  },
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
        <div>
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
                layout
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

                {/* Expanded details — with REAL additional data */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-vault-card/50 border-t border-vault-border/30">
                        {/* Description */}
                        <p className="text-sm text-vault-text mb-5 leading-relaxed">
                          {comp.expanded.description}
                        </p>

                        {/* Detail grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                              <DollarSign size={16} className="text-green-400" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-vault-muted uppercase tracking-wider mb-1">Commission Structure</div>
                              <p className="text-sm text-vault-text">{comp.expanded.commission}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                              <Clock size={16} className="text-blue-400" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-vault-muted uppercase tracking-wider mb-1">Payment Terms</div>
                              <p className="text-sm text-vault-text">{comp.expanded.paymentTerms}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                              <AlertTriangle size={16} className="text-yellow-400" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-vault-muted uppercase tracking-wider mb-1">Requirements</div>
                              <p className="text-sm text-vault-text">{comp.expanded.requirements}</p>
                            </div>
                          </div>

                          {comp.expanded.website && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-vault-primary/10 flex items-center justify-center shrink-0">
                                <Globe size={16} className="text-vault-primary" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-vault-muted uppercase tracking-wider mb-1">Website</div>
                                <p className="text-sm text-vault-primary">{comp.expanded.website}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
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
