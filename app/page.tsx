import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-800">
      <div className="space-y-6 text-center text-white">
        <h1 className="text-6xl font-semibold drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-lg">Boilerplate NextAuth</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
