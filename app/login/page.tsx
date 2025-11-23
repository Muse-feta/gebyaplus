import React from 'react'
import LoginPage from './LoginPage'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {}


const page = async (props: Props) => {
  const session = await auth.api.getSession({headers: headers()})
  // console.log(session);

  if(session){
    redirect("/dashboard");
  }
  return <LoginPage/>
}

export default page