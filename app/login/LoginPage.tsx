"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, signInSocial } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    const res = await signIn(email, password);
    if (res.user) {
      console.log(res.user, "login successfullly");
      // router.refresh();
      router.push("/dashboard");
    } else {
      console.log(res, "login failed");
    }
  };

  const handleSocialSignin = async () =>{
    setIsLoading(true);
    try {
      await signInSocial("google");
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false);
    }
  }

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

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#FF0050]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#25F4EE]/5 rounded-full blur-3xl" />

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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-zinc-400">Sign in to your Gebya+ account</p>
        </div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#FF0050] focus:ring-[#FF0050]/20"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  className="rounded border-zinc-700 bg-zinc-800 text-[#FF0050] focus:ring-[#FF0050]/20"
                />
                <span className="text-zinc-300">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm text-[#FF0050] hover:text-[#FF0050]/80"
              >
                Forgot password?
              </Link>
            </div>

            {/* Gradient button replaced with solid TikTok pink background */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF0050] hover:bg-[#FF0050]/90 text-white font-medium py-3 rounded-xl transition-all"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#FF0050] hover:text-[#FF0050]/80 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Social Login */}
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
                       onClick={handleSocialSignin}
                       variant="outline"
                       className="w-full bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all duration-200 group cursor-pointer"
                     >
                       <svg
                         className="w-5 h-5 mr-2 group-hover:text-black transition-colors duration-200"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 533.5 544.3"
                       >
                         <path
                           fill="#4285F4"
                           d="M533.5 278.4c0-17.9-1.6-35.2-4.7-51.9H272v98.2h146.9c-6.3 33.9-25.4 62.7-54 82l87.1 67c50.8-46.9 81.5-116 81.5-195.3z"
                         />
                         <path
                           fill="#34A853"
                           d="M272 544.3c73.2 0 134.6-24.3 179.5-66.3l-87.1-67c-24.2 16.2-55 25.7-92.4 25.7-71 0-131-47.9-152.5-112.4l-89 68.7C57.1 479.5 157.1 544.3 272 544.3z"
                         />
                         <path
                           fill="#FBBC05"
                           d="M119.5 330c-6.7-19.9-10.5-41.2-10.5-63 0-21.8 3.8-43.1 10.5-63l-89-68.7C9 188.6 0 231.3 0 267c0 35.7 9 78.4 30.5 138.7l89-68.7z"
                         />
                         <path
                           fill="#EA4335"
                           d="M272 107.7c38.9 0 73.7 13.4 101.2 39.6l76.1-76.1C406.6 24.1 345.2 0 272 0 157.1 0 57.1 64.8 30.5 166.6l89 68.7C141 155.6 201 107.7 272 107.7z"
                         />
                       </svg>
                       Continue with Google
                     </Button>
                   </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
