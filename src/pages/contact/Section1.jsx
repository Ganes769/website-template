import { useState } from "react";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section1 = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    mobile: "",
    email: "",
    description: ""
  });

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-width-container px-4">
        <p className="section-label" {...aosTextAnimation()}>Get in touch</p>
        <h2 className="h2 mb-4 max-w-3xl" {...aosTextAnimation(50)}>
          Let&apos;s discuss your next project
        </h2>
        <p className="p mb-14 max-w-2xl" {...aosTextAnimation(100)}>
          Tell us a bit about you, your project, and how best to reach you. We&apos;ll get right back to you.
        </p>

        <div className="flex mobile:flex-col laptop:flex-row gap-12">
          <div className="flex-1" {...aosDivAnimation(150)}>
            <h4 className="text-2xl font-semibold font-display mb-3 text-slate-900 dark:text-white">Contact details</h4>
            <p className="p !text-blue-800 dark:!text-sky-300 mb-8">
              Email us at <strong>merinentertainment@gmail.com</strong> or call the office below.
            </p>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <p className="text-xl font-semibold text-blue-800 dark:text-sky-400 font-display mb-2">Nepal</p>
              <p className="p mb-2">
                Basuki Marg, Mid-Baneshwor (Near Kantipur College of Management and Information Technology), House no.253 Kathmandu, Nepal
              </p>
              <p className="p !text-slate-900 dark:!text-white font-semibold">+977 9842983111</p>
            </div>
          </div>

          <div className="flex-1" {...aosDivAnimation(250)}>
            <form
              action="https://formsubmit.co/32d88121f57fd98c76090104c0966641"
              method="POST"
              className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 laptop:p-8 shadow-sm"
            >
              <label className="mb-1 font-semibold text-slate-800 dark:text-slate-200" htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                value={formState.fullName}
                placeholder="Full name"
                name="fullName"
                onChange={handleChange}
                className="form-input"
                required
              />

              <label className="mb-1 font-semibold text-slate-800 dark:text-slate-200" htmlFor="mobile">Mobile</label>
              <input
                id="mobile"
                type="tel"
                value={formState.mobile}
                placeholder="Mobile"
                name="mobile"
                onChange={handleChange}
                className="form-input"
                required
              />

              <label className="mb-1 font-semibold text-slate-800 dark:text-slate-200" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formState.email}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="form-input"
              />

              <label className="mb-1 font-semibold text-slate-800 dark:text-slate-200" htmlFor="description">Tell us about your project</label>
              <textarea
                id="description"
                rows={7}
                value={formState.description}
                placeholder="Project goals, timeline, or questions…"
                name="description"
                onChange={handleChange}
                className="form-input resize-y"
                required
              />

              <div>
                <input type="submit" value="Send message" className="button-primary cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
