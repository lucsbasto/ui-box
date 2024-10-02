import Link from "next/link";

export function SignInButton() {
  return (
    <Link href={'/sign-in'}>
      <button className="max-sm:w-full text-sm border border-sky-500 bg-sky-500 text-white hover:bg-sky-400 hover:text-white p-[8px] px-6  rounded-md">
      Sign In
      </button>
    </Link>
  )
}

export function SignUpButton() {
  return (
    <Link href={'/sign-up'}>
      <button className="max-sm:w-full text-sm border border-sky-500 text-sky-500 hover:bg-sky-100 hover:text-black p-[8px] px-6  rounded-md">
        Sign Up
      </button>
    </Link>
  )
}

export function DashboardButton() {
  return (
    <Link href={'/dashboard'}>
      <button className="max-sm:w-full text-sm border border-sky-500 bg-sky-500 text-white hover:bg-sky-400 hover:text-white p-[8px] px-6  rounded-md">
        Dashboard
      </button>
    </Link>
  )
}