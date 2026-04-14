import { motion } from 'framer-motion';
import { Layers, Code, Megaphone, Wrench, ArrowRight, Check } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

interface RoadmapItem {
  text: string;
  done?: boolean;
}

const phases = [
  {
    id: 1,
    icon: Layers,
    title: 'Foundation',
    timeline: 'Months 1-3',
    color: '#0019FF',
    items: [
      { text: 'Partner portal with self-service onboarding', done: true },
      { text: 'Lead routing & attribution system', done: true },
      { text: 'CRM integration (Zoho)', done: true },
      { text: 'Basic dashboard & reporting' },
      { text: 'Contract templates & legal framework' },
    ] as RoadmapItem[],
  },
  {
    id: 2,
    icon: Code,
    title: 'Automation',
    timeline: 'Months 4-6',
    color: '#6152F4',
    items: [
      { text: 'Attribution API & tracking SDK' },
      { text: 'Milestone-based payout automation' },
      { text: 'Partner tier auto-progression' },
      { text: 'Advanced analytics & forecasting' },
      { text: 'API documentation & sandbox' },
    ] as RoadmapItem[],
  },
  {
    id: 3,
    icon: Megaphone,
    title: 'Acceleration',
    timeline: 'Months 7-12',
    color: '#8B5CF6',
    items: [
      { text: 'Co-marketing campaigns & content hub' },
      { text: 'Market Development Fund (MDF) for top partners' },
      { text: 'Partner certification program' },
      { text: 'Annual partner summit planning' },
      { text: 'Strategic partner co-selling playbook' },
    ] as RoadmapItem[],
  },
];

const techStack = [
  { name: 'PartnerStack', description: 'Primary PRM platform for partner management, tracking, and payouts', recommended: true },
  { name: 'Impact.com', description: 'Alternative PRM with strong attribution and analytics capabilities', recommended: true },
  { name: 'Zoho CRM', description: 'Lead routing, deal tracking, and partner pipeline management (already in use)', recommended: true },
  { name: 'Custom API', description: 'Attribution SDK and partner-facing integration endpoints', recommended: false },
];

export default function Roadmap() {
  return (
    <SectionWrapper id="roadmap" className="bg-vault-card/30">
      <SectionHeading
        number="06"
        title="Implementation Roadmap"
        subtitle="A phased approach to launching and scaling the partner program over 12 months."
      />

      {/* Phase cards */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-vault-primary via-vault-secondary to-[#8B5CF6] opacity-30" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((phase, i) => {
            const PhaseIcon = phase.icon;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Phase number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: phase.color }}
                  >
                    {phase.id}
                  </div>
                  <div>
                    <div className="text-xs text-vault-muted uppercase tracking-wider">{phase.timeline}</div>
                  </div>
                </div>

                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${phase.color}15` }}
                    >
                      <PhaseIcon size={20} style={{ color: phase.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                        className="flex items-start gap-2.5"
                      >
                        {item.done ? (
                          <Check size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                        ) : (
                          <ArrowRight size={14} style={{ color: phase.color }} className="mt-0.5 shrink-0" />
                        )}
                        <span className={`text-sm leading-relaxed ${item.done ? 'text-vault-muted line-through decoration-vault-muted/40' : 'text-vault-text'}`}>
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 pt-12 border-t border-vault-border/30"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-vault-primary/15 flex items-center justify-center">
            <Wrench size={18} className="text-vault-primary" />
          </div>
          <h3 className="text-lg font-semibold text-white">Recommended Tech Stack</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="shrink-0 mt-0.5">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    tech.recommended ? 'bg-vault-primary' : 'bg-vault-muted/50'
                  }`}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm">{tech.name}</span>
                  {tech.recommended && (
                    <span className="pill bg-vault-primary/10 text-vault-primary text-[10px]">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-xs text-vault-muted mt-1 leading-relaxed">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
