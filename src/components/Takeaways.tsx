import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, DollarSign, Users, Layers } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const takeaways = [
  {
    icon: Zap,
    title: 'First-Mover Advantage',
    description: 'With only 1 of 11 direct competitors offering a transparent partner program, Vault has a clear window to establish market leadership in BaaS partner channel development.',
    color: '#F59E0B',
  },
  {
    icon: TrendingUp,
    title: 'Higher-Quality Clients',
    description: 'Partner-referred clients deliver 16-37% higher LTV and 18-25% lower churn, making the partner channel not just cheaper but strategically superior for client acquisition.',
    color: '#10B981',
  },
  {
    icon: DollarSign,
    title: 'Dramatic CAC Reduction',
    description: 'Partner-driven acquisition can reduce CAC by 30-50% compared to direct sales, with target partner CAC ranging from $500 (SMB) to $10,000 (BigFish) versus significantly higher direct costs.',
    color: '#0019FF',
  },
  {
    icon: Layers,
    title: 'Scalable Three-Tier Model',
    description: 'The recommended Referral / Growth / Strategic partner tiers create a natural progression path that incentivizes partner investment while controlling program economics.',
    color: '#6152F4',
  },
  {
    icon: Users,
    title: 'Pareto Revenue Distribution',
    description: 'Expect the top 15% of partners to generate 60-80% of partner revenue. Structure the program to nurture and retain these high-performers through dedicated support and MDF.',
    color: '#8B5CF6',
  },
  {
    icon: Shield,
    title: 'Built-in Risk Management',
    description: 'The 30/70 payment split, 90-day clawback policy, and declining BigFish rev share (15% to 10% to 5%) protect program economics while remaining competitive.',
    color: '#EF4444',
  },
];

export default function Takeaways() {
  return (
    <SectionWrapper id="takeaways">
      <SectionHeading
        number="07"
        title="Key Takeaways"
        subtitle="The strategic imperative and critical success factors for Vault's partner program."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {takeaways.map((item, i) => {
          const ItemIcon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
              >
                <ItemIcon size={22} style={{ color: item.color }} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-vault-muted leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA / Final statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-vault-primary to-vault-secondary rounded-2xl blur-xl opacity-20" />
          <div className="relative glass-card px-8 py-10 md:px-16 md:py-12 max-w-3xl glow">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Opportunity Is Clear
            </h3>
            <p className="text-vault-text text-base md:text-lg leading-relaxed mb-6">
              A structured, multi-tier partner program is not just a revenue channel — it is a strategic moat. By moving now, Vault can capture partner-driven growth that competitors are failing to unlock.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="pill bg-vault-primary/15 text-vault-primary border border-vault-primary/25">
                10-20% revenue within 18mo
              </span>
              <span className="pill bg-green-500/15 text-green-400 border border-green-500/25">
                30-50% lower CAC
              </span>
              <span className="pill bg-vault-secondary/15 text-vault-secondary border border-vault-secondary/25">
                16-37% higher LTV
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
