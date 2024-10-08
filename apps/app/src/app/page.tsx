import { HydrateClient } from "~/trpc/server";
import { AuthShowcase } from "../components/auth-showcase";

export default function HomePage() {
  return (
    <HydrateClient>
      <main className="container h-screen py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Welcome to <span className="text-primary">Mott.ai</span>
          </h1>
          <AuthShowcase />
        </div>
      </main>
    </HydrateClient>
  );
}
