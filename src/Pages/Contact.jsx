
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    text: "Add practice phone number",
  },
  {
    icon: Mail,
    title: "Email",
    text: "Add practice email address",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Add clinic address",
  },
  {
    icon: Clock,
    title: "Office Hours",
    text: "Add confirmed appointment hours",
  },
];

const inputClass =
  "w-full rounded-xl border border-blue-100 px-4 py-3 outline-none transition focus:border-medical-500 focus:ring-2 focus:ring-blue-100";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="medical-grid bg-blue-50/70 py-16 sm:py-20">
        <div className="container-page">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[3px] text-medical-600"
            >
              Get in Touch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-extrabold text-medical-900 sm:text-5xl"
            >
              Contact & Appointments
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl leading-8 text-slate-600"
            >
              Send an appointment request or contact the practice
              to ask about consultations and services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container-page section-space">
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-extrabold text-medical-900"
            >
              Contact Information
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 leading-7 text-slate-500"
            >
              Replace the sample details below with the doctor's
              real contact information before publishing the website.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-7 space-y-4"
            >
              {contactItems.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    x: 5,
                    boxShadow: "0px 8px 24px rgba(30, 64, 175, 0.08)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5"
                >
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-medical-600"
                  >
                    <Icon size={21} />
                  </motion.span>

                  <div>
                    <h3 className="font-bold text-medical-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Emergency Notice */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="mt-6 rounded-2xl bg-medical-900 p-6 text-slate-800"
            >
              <h3 className="text-lg font-bold text-slate-500">
                Medical Emergency?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                This form is not monitored for emergencies. Contact
                your local emergency service or go to the nearest
                emergency department if immediate care is needed.
              </p>
            </motion.div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8"
          >
            <h2 className="text-2xl font-extrabold text-medical-900">
              Request an Appointment
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Complete the form and review your information before
              sending it to the practice.
            </p>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  key="success-message"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="flex items-center gap-2 font-bold text-green-800"
                    >
                      <CheckCircle2 size={20} />
                      Request prepared successfully
                    </motion.div>

                    <p className="mt-2 text-sm leading-6 text-green-800">
                      This is a demo confirmation only. Your
                      information has not been sent to a doctor.
                      A backend or form service is needed to submit
                      real appointments.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name *
                  </label>

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </motion.div>
              </div>

              {/* Phone and Date */}
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Preferred Date
                  </label>

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="date"
                    name="date"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </motion.div>
              </div>

              {/* Service */}
              <motion.div variants={fadeUp}>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Service *
                </label>

                <motion.select
                  whileFocus={{ scale: 1.005 }}
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} bg-white`}
                >
                  <option value="">Choose a service</option>
                  <option value="Cardiothoracic Surgery">
                    Cardiothoracic Surgery
                  </option>
                  <option value="Vascular Surgery">
                    Vascular Surgery
                  </option>
                  <option value="Pediatric Heart Care">
                    Pediatric Heart Care
                  </option>
                  <option value="Heart Valve Care">
                    Heart Valve Care
                  </option>
                  <option value="Thoracic Care">
                    Thoracic Care
                  </option>
                  <option value="General Consultation">
                    General Consultation
                  </option>
                </motion.select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <motion.textarea
                  whileFocus={{ scale: 1.005 }}
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write a short message..."
                  className={`${inputClass} resize-y`}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-medical-600 px-6 
                py-4 font-bold text-white transition-colors hover:bg-medical-700"
              >
                Submit Appointment Request

                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={17} />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
