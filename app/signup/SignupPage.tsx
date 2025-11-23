"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { signInSocial, signUp } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";
export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    setIsLoading(true);
    // Simulate signup process
    const {email, password, name} = formData
    const res = await signUp(email, password, name)
    if(res.user){
      console.log("login succesfullly");
      router.push("/dashboard");
      // router.refresh();
    }else{
      console.log("login failed");
    }
  };

  const handleTikTokSignIn = async () => {
    try {
      setIsLoading(true);
      await signInSocial("tiktok");
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 text-zinc-400 hover:text-[#FF0050] transition-colors duration-200 flex items-center space-x-2"
      >
        <svg
          className="w-5 h-5"
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

      {/* Background gradient replaced with solid black background */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute top-20 right-20 w-72 h-72 bg-[#25F4EE]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF0050]/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-[#FF0050] rounded-xl flex items-center justify-center p-1">
                <div className="text-white font-bold text-lg">E</div>
              </div>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Join EngageX</h1>
          <p className="text-zinc-400">
            Join Ethiopia’s first creator challenge platform and showcase your
            content.
          </p>
        </div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#FF0050] focus:ring-[#FF0050]/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#FF0050] focus:ring-[#FF0050]/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#FF0050] focus:ring-[#FF0050]/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#FF0050] focus:ring-[#FF0050]/20"
                required
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded border-zinc-700 bg-zinc-800 text-[#FF0050] focus:ring-[#FF0050]/20"
                required
              />
              <label htmlFor="terms" className="text-sm text-zinc-300">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-[#FF0050] hover:text-[#FF0050]/80"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#FF0050] hover:text-[#FF0050]/80"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Gradient button replaced with solid TikTok pink background */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF0050] hover:bg-[#FF0050]/90 text-white font-medium py-3 rounded-xl transition-all"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#FF0050] hover:text-[#FF0050]/80 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Social Signup */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-zinc-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleTikTokSignIn}
              variant="outline"
              className="w-full bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-2 text-zinc-300 group-hover:text-black transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M41 17.4c-2.1 1-4.5 1.6-7 1.8v11.2c0 7.3-5.9 13.2-13.2 13.2S7.6 37.7 7.6 30.4c0-5.9 3.9-11 9.3-12.7v7.5c-1.5.9-2.5 2.5-2.5 4.4 0 2.8 2.3 5 5.1 5s5.1-2.2 5.1-5V4h7.8c.4 2.8 1.9 5.3 4.2 7 1.3 1 2.8 1.6 4.4 2V17.4z"
                />
              </svg>
              Continue with TikTok
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
