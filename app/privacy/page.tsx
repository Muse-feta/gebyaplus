"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FF0050] rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-sm">G</div>
              </div>
              <span className="text-xl font-bold">Gebya+</span>
            </Link>
            <Link
              href="/"
              className="text-zinc-400 hover:text-[#FF0050] transition-colors duration-200 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-zinc-400 mb-12">Last updated: November 24, 2025</p>

          <div className="prose prose-invert max-w-none">
            {/* Data Collection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                Information We Collect
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Gebya+ collects only the information necessary to operate your
                  online store, process TeleBirr payments, and display your
                  products. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Seller account information (name, email, password)</li>
                  <li>Product listings, prices, and inventory data</li>
                  <li>Payment transaction details for TeleBirr</li>
                  <li>Support and contact information</li>
                </ul>
                <p>
                  We do not sell or share your data for advertising purposes.
                </p>
              </div>
            </motion.section>

            {/* How We Use Data */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                How We Use Your Data
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>Your data is used solely for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Creating and managing your online store</li>
                  <li>Processing payments securely through TeleBirr</li>
                  <li>Displaying your products to customers</li>
                  <li>Providing customer support and communications</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Storage and Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                Data Storage and Security
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>We follow strict practices to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure authentication and password protection</li>
                  <li>Encryption of sensitive data in transit</li>
                  <li>Limited internal access to your data</li>
                  <li>Regular monitoring for security risks</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                Your Rights
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  You may request deletion or correction of your account and
                  store data at any time by contacting us. You can also manage
                  your account and payment preferences through your Gebya+
                  account settings.
                </p>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                Contact Us
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>Questions about privacy or your store? Reach out to us:</p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <p>
                    <strong>Phone:</strong> +251 985 322 632
                  </p>
                  <p>
                    <strong>Address:</strong> Addis Ababa, Ethiopia
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#FF0050] rounded-md flex items-center justify-center">
                <div className="text-white font-bold text-xs">G</div>
              </div>
              <span className="text-zinc-400">
                © 2025 Gebya+. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-zinc-400 hover:text-[#FF0050] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-zinc-400 hover:text-[#FF0050] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
