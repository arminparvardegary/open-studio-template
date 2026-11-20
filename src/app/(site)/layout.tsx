import { CookieBanner } from "@/components/site/CookieBanner";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ThemeController } from "@/components/site/ThemeController";

/** Layout shared by every public page: header, footer, cookie notice. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="page-bg" />
      <Header />
      <main id="top">{children}</main>
      <Footer />
      <ThemeController />
      <CookieBanner />
    </>
  );
}
