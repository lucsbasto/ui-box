"use client"
import { useAuth } from "@clerk/nextjs";
import { DashboardButton, SignInButton, SignUpButton } from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo/>
      <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
        {!userId ?  (
          <>
            <SignInButton/>
            <SignUpButton/>
          </>
        ): (
        <DashboardButton/>
        )}
        
      </div>
    </nav>
  )
}