'use client'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">MySite</Link>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </header>
  )
}