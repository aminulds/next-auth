import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {LoginButton} from "@/app/(auth)/_components/login-button";


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-primary">
        <div className="space-y-4 md:space-y-6 text-center">
            <h1 className={cn("text-3xl md:text-5xl font-semibold text-white drop-shadow-md")}>🔐 Next Auth</h1>
            <p className="text-lg text-white">A simple authentication service</p>
            <div>
                <LoginButton>
                    <Button size="lg" variant="secondary">Login</Button>
                </LoginButton>
            </div>
        </div>
    </main>
  );
}
