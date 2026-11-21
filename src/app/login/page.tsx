import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = { title: "Sign in" };

/** Demo sign-in screen: the button just opens the dashboard. Plug in your own auth. */
export default function LoginPage() {
  return (
    <div className="login">
      <div className="login__card">
        <Logo />
        <div>
          <h1>Lorem ipsum dolor</h1>
          <p style={{ marginTop: 8 }}>Sit amet consectetur adipiscing elit.</p>
        </div>
        <form className="form" action="/dashboard">
          <div className="field"><label htmlFor="l-mail">Email</label><input className="input" id="l-mail" type="email" placeholder="name@example.com" defaultValue="lorem@example.com" /></div>
          <div className="field"><label htmlFor="l-pass">Password</label><input className="input" id="l-pass" type="password" placeholder="••••••••" defaultValue="loremipsum" /></div>
          <button className="btn btn--accent" type="submit">Sign in</button>
        </form>
        <p style={{ fontSize: 14 }}><Link href="/" style={{ textDecoration: "underline" }}>← Lorem ipsum</Link></p>
      </div>
    </div>
  );
}
