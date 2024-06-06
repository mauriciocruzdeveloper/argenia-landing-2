import Navbar from "../../components/Navbar";
import Features from "../../components/Features";
import Faq from "../../components/Faq/Faq";
import Cta from "../../components/Cta";
import Pricing from "../../components/Pricing";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import { auth, signOut } from "../../auth/auth";

export default async function Index() {
  const session = await auth();
  return (
    <>
      <Navbar session={session} signOut={async() => {
        'use server';
        await signOut()
        }}/>
      <Hero />
      {/* <Features /> */}
      <Faq />
      {/* <Pricing /> */}
      {/* <Cta /> */}
      <Contact />
      <Footer />
    </>
  );
}
