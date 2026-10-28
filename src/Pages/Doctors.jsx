
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Doctors() {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85"
          alt="Doctor in a white coat"
          loading="lazy"
          className="h-72 w-full object-cover object-top"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="text-xl font-bold text-medical-900"
        >
          Dr. Effty Rahman
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mt-2 text-sm text-medical-600"
        >
          Cardiothoracic & Vascular Surgeon
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mt-4 text-sm leading-7 text-slate-500"
        >
          Dedicated to personalized care, patient education, and
          evidence-based treatment.
        </motion.p>

        <motion.div
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="mt-5"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-medical-600 transition-colors hover:text-medical-800"
          >
            View profile
            <motion.span
              className="inline-flex"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}
