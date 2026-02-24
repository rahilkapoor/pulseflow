import Link from "next/link";

export default function App() {
  return <>
  Welcome back<br/>
  check out your wardrobe!<br/>
  <Link prefetch={false} href="/almirah">
    Alimirah route
  </Link>
  </>
}