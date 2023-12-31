"use client"

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Lists() {
  return (
    <ul className="flex gap-4">
      <a href="/register">Register</a>
      <button onClick={()=> signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </ul>
  )
}
