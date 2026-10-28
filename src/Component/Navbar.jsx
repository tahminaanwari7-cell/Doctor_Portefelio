
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  HeartPulse,
  Phone,
} from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-medical-600"
        : "text-slate-600 hover:text-medical-600"
    }`;

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-md"
    >
      <div className="container-page flex min-h-[78px] items-center justify-between gap-4">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-2"
          >
            <motion.span
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 text-white"
            >
              <HeartPulse size={23} />
            </motion.span>

            <span>
              <span className="block text-lg font-extrabold tracking-tight text-medical-900">
                Dr. Zadran
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[2px] text-slate-500">
                Cardiac Surgeon
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((link) => (
            <motion.div
              key={link.path}
              variants={linkVariants}
              whileHover={{ y: -2 }}
            >
              <NavLink to={link.path} className={linkStyle}>
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop Appointment Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
          >
            <Phone size={16} />
            Book Appointment
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-blue-100 p-2 text-medical-700 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-blue-100 bg-white shadow-lg lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  variants={linkVariants}
                  whileHover={{ x: 4 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-50 text-medical-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                variants={linkVariants}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                >
                  <Phone size={16} />
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
