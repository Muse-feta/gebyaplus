"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-zinc-400 mb-12">Last updated: November 24, 2025</p>

          <div className="prose prose-invert max-w-none">
            {/* 1. Acceptance of Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  By accessing and using <strong>Gebya+</strong>, you agree to
                  comply with and be bound by these Terms of Service. Gebya+
                  provides tools that help Ethiopian sellers create online
                  stores, list products, and accept TeleBirr payments.
                </p>
                <p>
                  If you do not agree to these terms, please do not use the
                  platform.
                </p>
              </div>
            </motion.section>

            {/* 2. Store Data & Payments */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                2. Store Data & Payments
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Gebya+ collects only the data necessary to manage your store,
                  process TeleBirr payments, and display your products. We do
                  not sell or share your data for advertising purposes.
                </p>
              </div>
            </motion.section>

            {/* 3. User Accounts */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                3. User Accounts
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  To access Gebya+, you must create a seller account. You are
                  responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keeping your login credentials secure</li>
                  <li>All activity performed under your account</li>
                  <li>Maintaining accurate product and store information</li>
                  <li>Reporting any unauthorized access promptly</li>
                </ul>
              </div>
            </motion.section>

            {/* 4. Platform Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                4. Platform Features
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Gebya+ allows sellers to create stores, list products, manage
                  inventory, and accept payments via TeleBirr. The platform does
                  not manage third-party advertising or external promotions.
                </p>
              </div>
            </motion.section>

            {/* 5. Limitation of Liability */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                5. Limitation of Liability
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>Gebya+ is not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Any payment processing errors beyond our control</li>
                  <li>Technical issues or downtime</li>
                  <li>Indirect losses or damages from using the service</li>
                </ul>
              </div>
            </motion.section>

            {/* 6. Changes to Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                6. Changes to Terms
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                Gebya+ may update these terms periodically. Updates will be
                posted here with the revised date. Continued use after updates
                means you accept the new terms.
              </p>
            </motion.section>

            {/* 7. Contact Us */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                7. Contact Us
              </h2>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <p>
                  <strong>Phone:</strong> +251 985 322 632
                </p>
                <p>
                  <strong>Address:</strong> Addis Ababa, Ethiopia
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday – Friday, 9 AM – 6 PM
                  EAT
                </p>
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
