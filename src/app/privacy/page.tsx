import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Orbitry",
  description: "Learn how Orbitry carefully processes, stores, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-1 w-full relative pt-20">

        {/* HEADER SECTION */}
        <section className="px-6 pt-24 sm:pt-32 pb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
            Orbitry Privacy Policy
          </h1>
          <p className="text-gray-500 font-light leading-relaxed max-w-2xl text-lg mb-8">
            Orbitry ("we", "us", or "our") ("the App") provides comprehensive ecommerce functionality ("the Service") to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.
          </p>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Updated on April 20, 2026
          </p>
        </section>

        {/* HERO IMAGE PLACEHOLDER (Inspired by Kaching scroll) */}
        <div className="w-full max-w-4xl mx-auto px-6 mb-24">
          <div className="w-full aspect-[2/1] rounded-[2rem] bg-[#fbf5f0] border border-black/5 flex items-center justify-center relative overflow-hidden shadow-sm">
            {/* Abstract placeholder graphic representing documents/data */}
            <div className="relative w-48 h-64 bg-white rounded-xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 transform rotate-[-2deg]">
              <div className="w-full h-8 bg-emerald-400 rounded-md"></div>
              <div className="w-2/3 h-8 bg-blue-500 rounded-md"></div>
              <div className="flex gap-2 items-center mt-auto">
                <div className="w-8 h-8 rounded-full bg-red-400"></div>
                <div className="h-4 w-16 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT TYPOGRAPHY ENGINE (Centered blocks) */}
        <article className="max-w-3xl mx-auto px-6 pb-32">
          <div className="space-y-12 text-gray-600 leading-relaxed font-light text-base sm:text-lg">
            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">1. Personal Information the App Collects</h2>
              <p className="mb-4">
                When you install the App, we are automatically able to access certain types of information from your Shopify account strictly necessary to operate the application:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-4">
                <li><strong>Store Information:</strong> We collect details such as your shop domain, primary email address, timezone, and installed themes to configure your app settings appropriately.</li>
                <li><strong>Customer Information:</strong> To process storefront functionality and analytics, we temporarily access anonymized session states, order IDs, and basic product parameters. <span className="font-medium text-gray-800">We do not explicitly store PII (Personally Identifiable Information) such as customer names, physical addresses, or credit card numbers.</span></li>
              </ul>
              <p>
                We collect personal information directly from the relevant individual, through your Shopify account, or using technical data files. "Cookies" are data files placed on your device to include an anonymous unique identifier. "Log files" track actions occurring on the Site to help us resolve engineering bugs before they affect your live store.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">2. How Do We Use Your Personal Information?</h2>
              <p className="mb-4">
                We use the personal information we collect from you and your customers primarily to provide and operate the Service. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-500">
                <li>To render dynamic functionality directly on your storefront.</li>
                <li>To communicate with you regarding billing, support updates, and new feature announcements.</li>
                <li>To aggressively monitor internal metrics in order to analyze our customers' experience and optimize the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">3. Sharing Your Personal Information</h2>
              <p className="mb-6">
                Your data is never sold to third parties. We share your Information strictly to help us provide our service, for example, securely storing your configuration rules in our database provider infrastructure, or with analytics providers to help us improve the experience. Finally, we may also share your Information to comply with applicable laws and regulations, or to respond to lawful requests for information we receive.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">4. Shopify Mandatory Webhooks & GDPR</h2>
              <p className="mb-4">
                As a verified Shopify App, we fully comply with all mandatory data handling requests:
              </p>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-1">Customers Data Request</h4>
                  <p className="text-gray-500 text-sm">If a customer requests their data through Shopify, we explicitly outline what anonymized data we have interacted with. Since we do not explicitly store customer PII natively, we rarely have overlapping data for this request.</p>
                </li>
                <li className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-1">Customers Redact</h4>
                  <p className="text-gray-500 text-sm">Upon receiving a customer redaction payload from Shopify, any trace analytics associated with that customer's session are permanently destroyed from our systems within 48 hours.</p>
                </li>
                <li className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-gray-900 font-bold mb-1">Shop Redact</h4>
                  <p className="text-gray-500 text-sm">When you uninstall our App, Shopify triggers a Shop Redact request. Within 48 hours, all store configurations, statistical data, and associated merchant accounts are wiped permanently from our databases.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">5. Data Retention</h2>
              <p>
                When you install the App and utilize the Service, we will maintain the necessary architectural and statistical information required to render the application for our records, unless and until you ask us or Shopify to delete this information.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">6. Changes</h2>
              <p>
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight">7. Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:orbitryteam@gmail.com" className="text-black font-bold underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">orbitryteam@gmail.com</a>.
              </p>
            </section>

          </div>
        </article>

      </main>

      <Footer />
    </div>
  );
}
