import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import CustomerTestimony from "../components/landing/CustomerTestimony";
import ContactForm from "../components/ContactForm";

const Landing = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* How it works */}
            <HowItWorks />

            {/* Why Choose Us? */}
            <WhyChooseUs />

            {/* Customer Testimonies/Reviews */}
            <CustomerTestimony />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Landing;
