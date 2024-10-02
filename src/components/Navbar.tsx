import { SignInButton, SignUpButton } from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo/>
      <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
        <SignInButton/>
        <SignUpButton/>
      </div>
    </nav>
  )
}