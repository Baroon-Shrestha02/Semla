import React from "react";

import ContactForm from "../Components/ContactComponents/ContactForm";
import ContactVisit from "../Components/ContactComponents/ContactVisit";
import ContactHero from "../Components/ContactComponents/ContactHero";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactVisit />
    </>
  );
}
