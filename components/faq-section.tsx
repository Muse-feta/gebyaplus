"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

const faqs = [
  {
    question: "How does Gebya+ support sellers?",
    answer:
      "Gebya+ lets sellers create their own online store, list products, and accept TeleBirr payments. It makes selling simple and managing your store easy.",
  },
  {
    question: "Is Gebya+ only for Ethiopian sellers?",
    answer:
      "Yes! Gebya+ is designed specifically for Ethiopian sellers. We understand local payment methods and shopping habits, making it easy to sell online.",
  },
  {
    question: "How do I add my products?",
    answer:
      "Simply create a store, add your product details, images, and prices. Your products will be ready for customers to browse and buy in minutes.",
  },
  {
    question: "What makes Gebya+ different?",
    answer:
      "Gebya+ focuses on simplicity and accessibility. Sellers can set up a store quickly, manage products, and accept payments without needing technical skills.",
  },
  {
    question: "How are orders and payments managed?",
    answer:
      "All orders and TeleBirr payments are tracked in real time, so sellers can easily monitor transactions, manage stock, and fulfill orders efficiently.",
  },
];




  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      <div className="absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full bg-gradient-to-r from-[#FF0050]/20 to-[#25F4EE]/20 opacity-80 blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full bg-gradient-to-r from-[#25F4EE]/20 to-[#FF0050]/20 opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF0050]/40 bg-gradient-to-r from-[#FF0050]/10 to-[#25F4EE]/10 px-3 py-1 uppercase text-white">
            <span>✶</span>
            <span className="text-sm">FAQ</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Questions? We've got{" "}
          <span className="bg-gradient-to-r from-[#FF0050] via-[#25F4EE] to-[#FF0050] bg-clip-text text-transparent">
            answers
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="flex-shrink-0 transition duration-300 text-[#FF0050]" size={24} />
                  ) : (
                    <Plus className="flex-shrink-0 transition duration-300 text-[#FF0050]" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
