import React, { useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTools,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./App.css";

// Placeholder backend function
// Replace this with your real API call / backend integration
const sendToWhatsApp = async (messageData) => {
  console.log("Sending to WhatsApp:", messageData);

  // Example:
  // await fetch("https://your-backend-api.com/send-whatsapp", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(messageData),
  // });

  return Promise.resolve({ success: true });
};

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms & Conditions" },
];

function Navbar() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <FaTools className="logo-icon" />
          <span>PlumbCare</span>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HomeSection() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Professional Plumbing Services You Can Trust</h1>
          <p>
            Expert plumbing solutions for residential and commercial properties across London.
            From emergency repairs to complete installations, our certified team delivers
            quality workmanship with guaranteed results.
          </p>
          <a href="#contact" className="primary-btn">
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "24/7 Emergency Plumbing",
      description:
        "Round-the-clock response for urgent leaks, burst pipes, and blocked drains. We're here when you need us most.",
    },
    {
      title: "Pipe Installation & Repair",
      description:
        "Expert pipe fitting, replacement, and maintenance services using high-quality materials and modern techniques.",
    },
    {
      title: "Drain Cleaning & Unblocking",
      description:
        "Professional drain unclogging and cleaning for kitchens, bathrooms, and outdoor drainage systems.",
    },
    {
      title: "Bathroom & Kitchen Plumbing",
      description:
        "Complete installation and servicing of sinks, taps, toilets, showers, and all fixtures with precision.",
    },
    {
      title: "Water Heater Services",
      description:
        "Expert repair, replacement, and installation of all types of water heater systems for optimal performance.",
    },
    {
      title: "Leak Detection & Repair",
      description:
        "Advanced inspection technology to locate hidden leaks and resolve water pressure issues efficiently.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We handle all kinds of residential and commercial plumbing work.
        </p>

        <div className="card-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section alt-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Your trusted local plumbing experts.
        </p>

        <div className="about-content">
          <p>
            At PlumbCare, we are committed to delivering exceptional plumbing services
            that exceed expectations. With over 15 years of experience serving London and
            surrounding areas, we've built our reputation on quality workmanship, reliability,
            and outstanding customer service.
          </p>

          <p>
            Our team of fully licensed and insured plumbers specializes in residential and
            commercial plumbing projects of all sizes. From routine maintenance to complex
            installations and emergency repairs, we handle every job with precision and care.
            We believe in transparent pricing, clear communication, and building lasting
            relationships with our customers.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("Sending message...");

      await sendToWhatsApp(formData);

      setStatus("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  // London Airport UK location
  // Replace with exact coordinates or your business location if needed
  const googleMapsEmbedUrl =
    "https://www.google.com/maps?q=London%20Airport%20UK&output=embed";

  const googleMapsOpenUrl =
    "https://www.google.com/maps/search/?api=1&query=London+Airport+UK";

  const facebookPageUrl = "https://www.facebook.com/your-company-page";
  const whatsappNumber = "447700900000"; // Replace with your WhatsApp number in international format
  const whatsappDirectUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Reach out for bookings, emergency support, or general inquiries.
        </p>

        <div className="contact-grid">
          <div className="map-card">
            <h3>
              <FaMapMarkerAlt /> Our Location
            </h3>

            <a
              href={googleMapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-wrapper"
              title="Open in Google Maps"
            >
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="London Airport UK Map"
              />
            </a>

            <p className="small-text">
              Click the map to open the location in Google Maps.
            </p>
          </div>

          <div className="form-card">
            <h3>Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="primary-btn">
                Send to WhatsApp
              </button>
            </form>

            {status && <p className="form-status">{status}</p>}

            <div className="contact-icons">
              <a
                href={facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="icon-link"
              >
                <FaFacebookF />
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="icon-link"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="contact-info">
              <p>
                <FaPhoneAlt /> +44 7700 900000
              </p>
              <p>
                <FaEnvelope /> info@plumbcare.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicySection() {
  return (
    <section id="privacy" className="section alt-section">
      <div className="container">
        <h2 className="section-title">Privacy Policy</h2>
        <p>
          We respect your privacy and are committed to protecting your personal
          information. Any details submitted through our contact form will only
          be used to respond to your inquiry and provide our services.
        </p>
      </div>
    </section>
  );
}

function TermsSection() {
  return (
    <section id="terms" className="section">
      <div className="container">
        <h2 className="section-title">Terms & Conditions</h2>
        <p>
          By using our website and services, you agree to our terms regarding
          service requests, pricing, communication, and the responsible use of
          the information provided on this website.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 PlumbCare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <PrivacyPolicySection />
        <TermsSection />
      </main>
      <Footer />
    </>
  );
}