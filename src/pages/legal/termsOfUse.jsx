import { aosTextAnimation } from "utils/constants";

const TermsOfUse = () => {
  return (
    <main>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-width-container">
          <p className="text-blue-600 uppercase font-semibold mb-3">Legal</p>
          <h1 className="h2" {...aosTextAnimation()}>Terms of Use</h1>
          <p className="p max-w-[700px]" {...aosTextAnimation(100)}>
            By using the Merin Entertainment website, you agree to these terms. Please read them carefully before using our services or submitting information.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container max-w-[800px] space-y-8">
          <div {...aosTextAnimation()}>
            <h2 className="text-2xl font-semibold mb-3">Use of the website</h2>
            <p className="p">
              Content on this site is provided for general information about Merin Entertainment and its services. You agree not to misuse the site, attempt unauthorized access, or use content in a way that harms the company or others.
            </p>
          </div>
          <div {...aosTextAnimation(100)}>
            <h2 className="text-2xl font-semibold mb-3">Service descriptions</h2>
            <p className="p">
              Service pages describe offerings in good faith. Final scope, pricing, and deliverables are confirmed through direct discussion and agreement with Merin Entertainment.
            </p>
          </div>
          <div {...aosTextAnimation(200)}>
            <h2 className="text-2xl font-semibold mb-3">Intellectual property</h2>
            <p className="p">
              Logos, text, images, and other materials on this website belong to Merin Entertainment or their respective owners. You may not copy or reuse them without permission.
            </p>
          </div>
          <div {...aosTextAnimation(300)}>
            <h2 className="text-2xl font-semibold mb-3">Limitation of liability</h2>
            <p className="p">
              While we aim to keep information accurate and the site available, we are not liable for damages arising from use of the website or reliance on published content alone.
            </p>
          </div>
          <div {...aosTextAnimation(400)}>
            <h2 className="text-2xl font-semibold mb-3">Changes</h2>
            <p className="p">
              We may update these terms from time to time. Continued use of the site after changes means you accept the revised terms.
            </p>
          </div>
          <div {...aosTextAnimation(500)}>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p className="p">
              Questions about these terms can be sent to Merin Entertainment, Basuki Marg, Mid-Baneshwor, Kathmandu, Nepal, or by calling +977 (1) 9842983111.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfUse;
