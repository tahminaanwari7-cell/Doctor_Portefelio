
import { Link } from "react-router-dom";
import img1 from "../assets/doc1.jpg";
import img2 from "../assets/blue.jpg";
import service1 from "../assets/operation.jpg";
import service2 from "../assets/number2.jpg";
import service3 from "../assets/opera2.jpg";
import service4 from "../assets/number3.jpg";
import service5 from "../assets/riting.jpg";
import service6 from "../assets/microscope.jpg";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

/* ================= MOTION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.15,
};

/* ================= DATA ================= */

const services = [
  {
    number: "01",
    title: "Neurological Consultation",
    description:
      "Evaluation and management of conditions affecting the brain, spinal cord, and nervous system.",
    image: service1,
  },
  {
    number: "02",
    title: "Brain Surgery",
    description:
      "Surgical evaluation and treatment planning for selected conditions affecting the brain.",
    image: service2,
  },
  {
    number: "03",
    title: "Spine Surgery",
    description:
      "Assessment and surgical care planning for conditions affecting the spine and spinal cord.",
    image: service3,
  },
  {
    number: "04",
    title: "Stroke & Cerebrovascular Care",
    description:
      "Neurological assessment and treatment planning for stroke and blood vessel conditions of the brain.",
    image: service4,
  },
  {
    number: "05",
    title: "Brain & Spinal Tumors",
    description:
      "Evaluation and management planning for tumors affecting the brain and spinal cord.",
    image: service5,
  },
  {
    number: "06",
    title: "Nerve Disorders",
    description:
      "Assessment of nerve-related conditions and guidance on appropriate treatment options.",
    image: service6,
  },
];

const stats = [
  { value: "12,000+", label: "Patients Served" },
  { value: "7,000+", label: "Surgeries Performed" },
  { value: "24/7", label: "Emergency Support" },
];

const highlights = [
  "Comprehensive neurological evaluation",
  "Clear explanations of diagnosis and treatment options",
  "Personalized care planning for brain and spine conditions",
];

const testimonials = [
  {
    name: "Patient One",
    role: "Illustrative testimonial",
    quote:
      "The doctor explained my neurological concerns clearly and helped me understand the available treatment options.",
  },
  {
    name: "Patient Two",
    role: "Illustrative testimonial",
    quote:
      "I appreciated the professional approach and the time taken to explain my condition and next steps.",
  },
];

/* ================= HOME PAGE ================= */

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden bg-blue-50/70">
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Neurology & Neurosurgery Care
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Leading Neurological &{" "}
              <span className="text-blue-600">Neurosurgical</span> Care
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-8 text-slate-600"
            >
              Providing professional care for neurological conditions
              and surgical disorders affecting the brain, spine, and
              nervous system, with a focus on precision, compassion,
              and patient well-being.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  <CalendarDays size={18} />
                  Book an Appointment
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  Discover My Profile
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" />
                Patient-centered neurological care
              </span>

              <span className="flex items-center gap-2">
                <HeartPulse size={18} className="text-blue-600" />
                Individualized treatment planning
              </span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 rounded-[2rem] bg-blue-200/50 blur-2xl object-fill"
            />

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border-8 border-white bg-white shadow-2xl"
            >
              <img
                src={img1}
                alt="Doctor in a white coat"
                className="h-[360px] w-full object-cover object-top sm:h-[460px]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 pt-24 text-white">
                <p className="text-2xl font-bold">Dr. Khalid Zadran</p>
                <p className="mt-2 text-sm text-blue-100">
                  Neurologist & Neurosurgeon
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:-left-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Stethoscope size={23} />
              </span>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Neurological Consultation
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Care tailored to each patient
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariant}
              whileHover={{ backgroundColor: "#f8fbff" }}
              className="px-5 py-8 text-center"
            >
              <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.4 }}
              src={img2}
              alt="Medical professionals in a hospital"
              loading="lazy"
              className="h-[360px] w-full rounded-3xl object-cover sm:h-[430px]"
            />

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute bottom-5 left-5 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-3xl font-extrabold text-blue-600">
                Brain & Spine Care
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Care with precision and compassion
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[3px] text-blue-600"
            >
              Neurology & Neurosurgery
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl"
            >
              Professional Care With a Personal Touch
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 leading-8 text-slate-600"
            >
              Dr. Khalid Zadran is presented as a neurologist and
              neurosurgeon, focusing on the evaluation and management
              of neurological disorders and surgical conditions
              affecting the brain, spine, and nervous system.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-7 space-y-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={cardVariant}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-600"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ x: 4 }}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Read Full Biography <ArrowRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[3px] text-blue-600"
            >
              Neurology & Neurosurgery
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl"
            >
              Services & Specializations
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 leading-7 text-slate-500"
            >
              Explore neurological consultation and neurosurgical
              services focused on conditions affecting the brain,
              spine, and nervous system. Contact the practice for
              further information.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.number}
                variants={cardVariant}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.5 }}
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm font-bold text-blue-600">
                    {service.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Explore All Services <ArrowRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50/70 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Patient Experiences
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              What Our Patients Say
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Clear communication, respect, and compassion are
              important parts of neurological and neurosurgical care.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-slate-600">
              <Clock3 size={19} className="text-blue-600" />
              Appointment times are confirmed by the practice.
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-4"
          >
            {testimonials.map((review) => (
              <motion.article
                key={review.name}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8"
              >
                <div className="text-3xl font-bold text-blue-600">
                  “
                </div>

                <p className="leading-7 text-slate-600">
                  {review.quote}
                </p>

                <div className="mt-5 border-t border-blue-50 pt-4">
                  <p className="font-bold text-slate-900">
                    {review.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {review.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl bg-blue-950 px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="mx-auto max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-200">
              Take the Next Step
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Questions About Your Neurological Health?
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Contact the practice to request an appointment or
              learn more about neurological consultations and
              neurosurgical services.
            </p>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-7"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-950 transition hover:bg-blue-50"
              >
                Contact the Practice <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
