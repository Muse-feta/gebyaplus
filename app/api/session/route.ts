import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export const GET = async () => {
    const session = await auth.api.getSession({headers: await headers()})
    console.log(session)
    return NextResponse.json(session)
}