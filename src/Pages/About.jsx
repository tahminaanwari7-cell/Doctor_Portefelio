import doc1 from "../assets/blue.jpg"
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const approachItems = [
  {
    icon: Stethoscope,
    title: "Clinical Assessment",
    text: "Understanding symptoms and medical history.",
  },
  {
    icon: HeartPulse,
    title: "Patient Focus",
    text: "Considering each patient's individual needs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Supporting informed, careful treatment decisions.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    text: "Ongoing learning and professional development.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="medical-grid bg-blue-50/70 py-16 sm:py-24">
        <div className="container-page">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[3px] text-medical-600"
            >
              About the Doctor
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-medical-900 sm:text-5xl"
            >
              A Professional Approach to Personalized Care
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl leading-8 text-slate-600"
            >
              Learn about the doctor's professional background,
              approach to consultations, and areas of interest.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="container-page section-space">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl"
          >
            <motion.img
              src={doc1}
              alt="Doctor portrait"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-h-[600px] w-full rounded-3xl object-cover object-top"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[3px] text-medical-600"
            >
              Doctor Profile
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold text-medical-900 sm:text-4xl"
            >
              Dr. Khalid Zadran
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 font-semibold text-medical-600"
            >
              Cardiothoracic & Vascular Surgeon
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 leading-8 text-slate-600"
            >
              This portfolio introduces a surgeon dedicated to
              thoughtful consultations, clear patient communication,
              and evidence-based medical decision-making.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 leading-8 text-slate-600"
            >
              Every patient's needs are different. A careful
              assessment and an open discussion help patients
              understand their options and make informed decisions
              with their healthcare team.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-medical-600 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-medical-700"
                >
                  Request a Consultation
                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={17} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Approach to Care */}
      <section className="section-space bg-white">
        <div className="container-page">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold text-medical-900"
            >
              My Approach to Care
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 leading-7 text-slate-500"
            >
              A patient-centered approach built around communication,
              safety, and individualized care.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {approachItems.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 12px 30px rgba(30, 64, 175, 0.10)",
                }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex text-medical-600"
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="mt-5 font-bold text-medical-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="container-page py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -3 }}
          className="rounded-3xl bg-medical-900 p-8 text-white sm:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl font-extrabold text-slate-800"
          >
            Professional Background
          </motion.h2>

          <p className="mt-4 max-w-2xl leading-8 text-slate-500">
            Add the doctor's verified medical degree, university,
            specialist training, licenses, professional memberships,
            and years of experience here.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Replace this placeholder with the doctor's actual credentials.
          </p>
        </motion.div>
      </section>
    </>
  );
}
