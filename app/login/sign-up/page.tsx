import { SignupForm } from "@/components/signup-form"
import { SignupHero } from "@/components/signup-hero"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <SignupHero />
      <SignupForm />
    </div>
  )
}
