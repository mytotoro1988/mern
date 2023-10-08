"use client";
import Link from "next/link";
import variables from "./variables.module.scss";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <div>
        <Link href="/dashboard#test">Settings</Link>
      </div>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}
