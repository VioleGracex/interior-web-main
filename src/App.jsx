import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="banner1">
        <Banner />
      </section>
      <section id="banner2">
        <Banner2 />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <Footer />

    </main>
  );
};

export default App;
