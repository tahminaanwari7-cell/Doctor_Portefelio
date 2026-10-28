const services = [
  {
    number: "01",
    title: "Neurological Consultation",
    description:
      "Diagnosis and treatment planning for conditions affecting the brain, nerves, and nervous system.",
  },
  {
    number: "02",
    title: "Brain Surgery",
    description:
      "Surgical treatment for selected brain conditions, injuries, and neurological disorders.",
  },
  {
    number: "03",
    title: "Spine & Spinal Cord Care",
    description:
      "Evaluation and treatment of spinal disorders, spinal cord conditions, and nerve compression.",
  },
  {
    number: "04",
    title: "Stroke & Cerebrovascular Care",
    description:
      "Assessment and management of stroke and conditions affecting blood vessels in the brain.",
  },
  {
    number: "05",
    title: "Brain & Spinal Tumors",
    description:
      "Diagnosis, evaluation, and surgical treatment planning for brain and spinal tumors.",
  },
  {
    number: "06",
    title: "Nerve Disorders",
    description:
      "Evaluation and treatment planning for nerve injuries, nerve compression, and related disorders.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-blue-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Medical Expertise
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Services & Specializations
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Explore the neurological and neurosurgical services offered
          by the practice.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl font-bold text-blue-600">
                {service.number}
              </span>

              <h2 className="mt-4 text-xl font-bold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}