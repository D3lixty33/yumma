import Link from "next/link"
import { AlertCircle, ArrowLeft, RefreshCw, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-6">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/20 blur-2xl rounded-full" />
            <div className="relative bg-destructive/10 p-6 rounded-full">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
        </div>

        {/* Error Card */}
        <Card className="border-2">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-semibold text-balance">Login Failed</CardTitle>
            <CardDescription className="text-base text-pretty">
              We could not sign you in with the credentials provided. Please check your information and try again.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Alert variant="destructive" className="bg-destructive/5 border-destructive/20">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Invalid email or password. Please verify your credentials and try again.
              </AlertDescription>
            </Alert>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                </div>
                <p>Double-check your email address for typos</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                </div>
                <p>Ensure your password is entered correctly</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                </div>
                <p>Check if Caps Lock is enabled</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button asChild className="w-full" size="lg">
              <Link href="/login/sign-in">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>

            <div className="flex gap-2 w-full">
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/login/sign-in">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back to Login
                </Link>
              </Button>

              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/forgot-password">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Reset Password
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Help Text */}
        <p className="text-center text-sm text-muted-foreground">
          Still having trouble?{" "}
          <Link href="/support" className="text-primary hover:underline font-medium">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  )
}
