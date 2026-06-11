import { motion } from 'framer-motion';
import { ArrowRight, Quote, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SchoolData } from '../../types/school';

interface AboutPreviewSectionProps {
  school: SchoolData;
}

export default function AboutPreviewSection({ school }: AboutPreviewSectionProps) {
  const primary = school.school.primaryColor;
  const secondary = school.school.secondaryColor;

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — about text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: secondary }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: secondary }}>About Us</span>
            </div>
            <h2 className="section-title !mb-8">
              {school.about.aboutTagline}
            </h2>
            <p className="text-content-body leading-relaxed mb-4">
              {school.about.aboutText}
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: secondary }}
            >
              Learn more about us <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — dean's message */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-8 text-content relative overflow-hidden"
              style={{ backgroundColor: primary }}
            >
              {/* bg dots */}
              <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              <Quote size={36} className="opacity-20 text-content-inverted mb-4" />

              <p className="text-content-inverted leading-relaxed text-base italic mb-6">
                "{school.dean.message.slice(0, 360)}{school.dean.message.length > 360 ? '…' : ''}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
                  style={{ backgroundColor: `${secondary}40`, border: `2px solid ${secondary}` }}
                >
                  {school.dean.image
                    ? <img src={school.dean.image} alt={school.dean.name} className="w-full h-full object-cover" />
                    : <UserCircle size={36} className="text-content-subtle" />}
                </div>
                <div>
                  <p className="font-bold text-content-inverted">{school.dean.name}</p>
                  <p className="text-content-inverted text-sm">{school.dean.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
