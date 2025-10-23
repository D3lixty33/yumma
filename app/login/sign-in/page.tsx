import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center w-full">
      <LoginForm        
       style={{width : '350px'}} 
      />
    </div>
  );
}
