import { aosTextAnimation } from "utils/constants";

const PrivacyPolicy = () => {
  return (
    <main>
      <section className="bg-gray-50 dark:bg-slate-900 py-16 px-4">
        <div className="max-width-container">
          <p className="section-label">Legal</p>
          <h1 className="h2" {...aosTextAnimation()}>Privacy Policy</h1>
          <p className="p max-w-[700px]" {...aosTextAnimation(100)}>
            This policy explains how Merin Entertainment collects, uses, and protects information you share when you visit our website or contact us.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container max-w-[800px] space-y-8">
          <div {...aosTextAnimation()}>
            <h2 className="text-2xl font-semibold mb-3">Information we collect</h2>
            <p className="p">
              When you submit forms or reach out by phone or email, we may collect your name, email address, phone number, company details, and the message content you provide.
            </p>
          </div>
          <div {...aosTextAnimation(100)}>
            <h2 className="text-2xl font-semibold mb-3">How we use your information</h2>
            <p className="p">
              We use contact details to respond to inquiries, discuss services, improve our website experience, and communicate about projects or partnerships when you have requested follow-up.
            </p>
          </div>
          <div {...aosTextAnimation(200)}>
            <h2 className="text-2xl font-semibold mb-3">Sharing of information</h2>
            <p className="p">
              We do not sell your personal information. We may share details with trusted service providers only as needed to operate our website or deliver requested services, or when required by law.
            </p>
          </div>
          <div {...aosTextAnimation(300)}>
            <h2 className="text-2xl font-semibold mb-3">Data security</h2>
            <p className="p">
              We take reasonable steps to protect information submitted through our site. No method of transmission over the internet is fully secure, so please avoid sending sensitive credentials through contact forms.
            </p>
          </div>
          <div {...aosTextAnimation(400)}>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="p">
              For privacy-related questions, contact Merin Entertainment at Basuki Marg, Mid-Baneshwor, Kathmandu, Nepal, or call +977 (1) 9842983111.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
