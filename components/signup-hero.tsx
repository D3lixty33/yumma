import { CheckCircle2 } from "lucide-react"

export function SignupHero() {
  const benefits = [
    "Secure and encrypted data protection",
    "Access to premium features and tools",
    "Join thousands of satisfied users",
    "Cancel anytime, no questions asked",
  ]

  return (
    <div className="flex-1 bg-primary text-primary-foreground p-8 lg:p-16 flex flex-col justify-center">
      <div className="max-w-xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
            Start your journey with us today
          </h1>
          <p className="text-lg text-primary-foreground/80 text-pretty leading-relaxed">
            Join our platform and unlock powerful tools designed to help you succeed. Experience seamless collaboration
            and innovation.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-primary-foreground/90 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">Trusted by over 10,000+ users worldwide</p>
        </div>
      </div>
    </div>
  )
}
