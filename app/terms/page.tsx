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
                <div className="text-white font-bold text-sm">E</div>
              </div>
              <span className="text-xl font-bold">EngageX</span>
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
          <p className="text-zinc-400 mb-12">
            Last updated: September 27, 2025
          </p>

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
                  By accessing and using <strong>EngageX</strong>, you agree to
                  comply with and be bound by these Terms of Service. EngageX
                  provides tools that help Ethiopian TikTok creators analyze
                  their content performance, track engagement, and gain insights
                  to improve creative strategies.
                </p>
                <p>
                  If you do not agree to these terms, please do not use the
                  platform.
                </p>
              </div>
            </motion.section>

            {/* 2. TikTok Data Usage */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-[#FF0050]">
                2. TikTok Data Usage
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  When you log in with TikTok, EngageX requests limited data
                  from your TikTok account only to display public profile
                  information and provide analytics insights. We use the
                  following TikTok scopes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>user.info.basic</strong> – to access your public
                    TikTok profile information (username, avatar, etc.)
                  </li>
                  <li>
                    <strong>user.info.stats</strong> – to view account
                    statistics (followers, engagement, etc.)
                  </li>
                  <li>
                    <strong>video.list</strong> – to fetch your TikTok videos
                    and engagement data for insight generation
                  </li>
                </ul>
                <p>
                  We do <strong>not</strong> collect, sell, or share TikTok data
                  for advertising or promotional use. Data is used only for
                  displaying creator analytics within EngageX.
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
                  To access insights, you must create an EngageX account and
                  connect your TikTok account. You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keeping your login credentials secure</li>
                  <li>All activity performed under your account</li>
                  <li>Maintaining an authentic TikTok connection</li>
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
                  EngageX provides creators with personalized insights,
                  engagement summaries, and performance analytics. It does not
                  manage advertising, paid campaigns, or direct brand
                  collaborations.
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
                <p>EngageX is not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Any data inaccuracies provided by TikTok</li>
                  <li>Changes in TikTok API or platform policies</li>
                  <li>Downtime or technical issues beyond our control</li>
                  <li>Indirect losses or damages from use of the service</li>
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
                EngageX may update these terms periodically. Updates will be
                posted here with the revised date. Continued use of EngageX
                after updates means you accept the new terms.
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
                <div className="text-white font-bold text-xs">E</div>
              </div>
              <span className="text-zinc-400">
                © 2025 EngageX. All rights reserved.
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
