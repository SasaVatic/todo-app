import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "@/components/login";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-14 items-center justify-center p-24">
      {/* <Login /> */}
      <h1 className="text-lg font-semibold md:text-7xl">
        Your daily task tracker
      </h1>
      <Button>
        <Link href="/dashboard">Go Dashboard</Link>
      </Button>
    </main>
  );
}
