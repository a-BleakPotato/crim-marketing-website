import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SchoolData } from '../../types/school';

interface ProgramsSectionProps {
  school: SchoolData;
}

export default function ProgramsSection({ school }: ProgramsSectionProps) {
  const primary = school.school.primaryColor;
  const secondary = school.school.secondaryColor;

  return (
    <section id="programs" className="section-padding mb-24 bg-gray-50">
      <div className="container-wide text-center">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5" style={{ backgroundColor: secondary }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: secondary }}>
              Academic Program
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: secondary }} />
          </div>
          <h2 className="section-title">Bachelor of Science in Criminology</h2>
          <p className="section-subtitle max-w-2xl mt-8 mx-auto">
            {school.programs[0]?.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {school.programs[0]?.tags?.map((tag) => (
            <span
              key={tag}
              className="text-center text-base font-semibold px-4 py-3 border rounded-full transition-opacity hover:opacity-70"
              style={{ color: primary, borderColor: `${primary}50` }}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
              to="/academics"
              className="inline-flex gap-2 text-sm font-semibold mt-16 transition-opacity hover:opacity-70"
              style={{ color: secondary }}
            >
              View Program Details <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
