import { auth } from '@/lib/auth'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: "EngageX - Dashboard",
  description:
    "Connect brands with Ethiopian TikTok creators through viral challenges. Zero risk, transparent ROI tracking, and fair performance-based payouts.",
}

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
    const session = await auth.api.getSession({headers: await headers()})
    // if(!session){
    //   redirect("/login");
    // }
  return (
    <div>{children}</div>
  )
}

export default layout