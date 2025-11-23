import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import SignupPage from './SignupPage'
import { auth } from '@/lib/auth'

type Props = {}

const page = async (props: Props) => {
  const session = await auth.api.getSession({headers: await headers()})
  if(session){
    redirect("/dashboard");
  }
  return <SignupPage/>
}

export default page