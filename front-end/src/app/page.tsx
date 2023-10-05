"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div style={{ height: "100vh" }}>
      <Link
        href={{
          pathname: "/dashboard",
          query: { name: "tes123t11111" },
        }}
      >
        About
      </Link>
      <div style={{ height: 500 }}>
        <Link href="/dashboard#test">Settings</Link>
      </div>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}
