
import { useState } from "react";
import { X, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import pic1 from "../assets/riting.jpg";
import pic2 from "../assets/op3.jpg";
import pic3 from "../assets/karzi.jpg";
import pic4 from "../assets/opera2.jpg";
import pic5 from "../assets/images.jpg";
import pic6 from "../assets/doc2.jpg";
import pic7 from "../assets/king.jpg";
import pic8 from "../assets/like1.jpg";

const photos = [
  {
    id: 1,
    title: "Medical Consultation",
    category: "Consultation",
    image: pic1,
  },
  {
    id: 2,
    title: "Clinical Environment",
    category: "Hospital",
    image: pic2,
  },
  {
    id: 3,
    title: "Medical Technology",
    category: "Equipment",
    image: pic3,
  },
  {
    id: 4,
    title: "Patient Care",
    category: "Consultation",
    image: pic4,
  },
  {
    id: 5,
    title: "Clinical Practice",
    category: "Hospital",
    image: pic5,
  },
  {
    id: 6,
    title: "Medical Team",
    category: "Hospital",
    image: pic6,
  },
  {
    id: 7,
    title: "Healthcare Environment",
    category: "Equipment",
    image: pic7,
  },
  {
    id: 8,
    title: "Professional Care",
    category: "Consultation",
    image: pic8,
  },
];

const categories = [
  "All",
  "Consultation",
  "Hospital",
  "Equipment",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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

const photoVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedPhoto, setSelectedPhoto] =
    useState(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter(
          (photo) => photo.category === selectedCategory
        );

  return (
    <section className="container-page section-space">
      {/* Gallery heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        <span className="text-xs font-bold uppercase tracking-[3px] text-medical-600">
          Visual Portfolio
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-medical-900 sm:text-5xl">
          Medical Gallery
        </h1>

        <p className="mt-5 leading-8 text-slate-500">
          A collection of healthcare and clinical environment
          images. Select any image to view it in a larger format.
        </p>
      </motion.div>

      {/* Category filters */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.2 }}
        className="mt-9 flex flex-wrap gap-3"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            variants={fadeUp}
            type="button"
            onClick={() => setSelectedCategory(category)}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            aria-pressed={selectedCategory === category}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-medical-600 text-white"
                : "border border-blue-100 bg-white text-slate-600 hover:bg-blue-50"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Photo grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.button
              layout
              key={photo.id}
              variants={photoVariants}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 15,
                transition: { duration: 0.2 },
              }}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View ${photo.title}`}
              className="group overflow-hidden rounded-2xl border border-blue-100 bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  layout
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.span
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-medical-700 shadow-sm"
                >
                  <Images size={18} />
                </motion.span>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-medical-600">
                  {photo.category}
                </p>

                <h2 className="mt-2 font-bold text-medical-900">
                  {photo.title}
                </h2>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-size image modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            key="gallery-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedPhoto(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setSelectedPhoto(null);
              }
            }}
          >
            <motion.button
              type="button"
              aria-label="Close image"
              onClick={() => setSelectedPhoto(null)}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-5 top-5 z-10 rounded-full bg-white p-3 text-medical-900"
            >
              <X size={22} />
            </motion.button>

            <motion.div
              className="w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <motion.img
                key={selectedPhoto.id}
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="max-h-[78vh] w-full rounded-2xl object-contain"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-center text-lg font-bold text-white"
              >
                {selectedPhoto.title}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
