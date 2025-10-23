"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { signup } from "@/app/login/actions"

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("[v0] Form submitted")
    }, 2000)
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-muted-foreground">Enter your details below to get started</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="John" required disabled={isLoading} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Doe" required disabled={isLoading} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required disabled={isLoading} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="terms" required disabled={isLoading} />
            <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              I agree to the{" "}
              <Link href="/terms" className="text-foreground underline hover:no-underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-foreground underline hover:no-underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type="submit" formAction={signup} className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link href="/login/sign-in" className="text-foreground font-medium underline hover:no-underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
