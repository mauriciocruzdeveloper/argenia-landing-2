import Navbar from "../../components/Navbar";
import Features from "../../components/Features";
import Faq from "../../components/Faq/Faq";
import Cta from "../../components/Cta";
import Pricing from "../../components/Pricing";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
// import { auth, signOut } from "../../auth/auth";
import { Suspense, use } from "react";
import { signOutAction } from "@/src/actions/actions";
import { auth } from "@/src/auth/auth";


export default function Index() {
  const session = use(auth());

  return (
    <>
      <Navbar
        session={session}
        signOut={signOutAction}
      />
      <Suspense>
        <Hero />
      </Suspense>
      {/* <Features /> */}
      <Faq />
      {/* <Pricing /> */}
      {/* <Cta /> */}
      <Contact />
      <Footer />
    </>
  );
}
