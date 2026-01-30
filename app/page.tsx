"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-inner">
          <a href="#" className="logo">🌿 Father & Son</a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:9544102529" className="nav-cta">
            Call Now
          </a>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Lawn Care & Landscaping in Parkland</h1>
          <p>Family-owned since 2015 • Serving Parkland, Coral Springs & Tamarac</p>
          <div className="hero-buttons">
            <a href="tel:9544102529" className="btn-primary">
              📞 (954) 410-2529
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">🌱</span>
            <h3>Lawn Care</h3>
            <ul>
              <li>Grass Cutting</li>
              <li>Fertilizing</li>
              <li>Red Ant Control</li>
              <li>Weed Control</li>
            </ul>
          </div>
          <div className="service-card">
            <span className="service-icon">✂️</span>
            <h3>Maintenance</h3>
            <ul>
              <li>Hedge Trimming</li>
              <li>Small Tree Removal</li>
              <li>Debris Removal</li>
            </ul>
          </div>
          <div className="service-card">
            <span className="service-icon">🌺</span>
            <h3>Landscaping</h3>
            <ul>
              <li>Flower Beds</li>
              <li>Planting</li>
              <li>Mulching</li>
              <li>Landscape Design</li>
            </ul>
          </div>
          <div className="service-card">
            <span className="service-icon">🌻</span>
            <h3>Add-On Services</h3>
            <ul>
              <li>Annual Flower Installation</li>
              <li>Re-Sodding Lawns</li>
              <li>Custom Requests</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Father & Son</h2>
          <p>
            As the company name suggests, Father & Son Lawn and Landscaping truly began as a father 
            and son maintaining the grounds for homes and businesses in the Parkland, FL area.
          </p>
          <p>
            Our attention to detail and affordable service packages quickly helped us grow solely 
            by word of mouth and smart advertising. By 2015, we had two crews and expanded our 
            coverage to Coral Springs and Tamarac.
          </p>
          <p>
            <strong>Today, our great service keeps over 100 homes in 3 cities looking beautiful.</strong>
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Happy Homes</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Cities Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"I have NEVER been truly satisfied with other lawn care companies I have hired. All workers are always professional and courteous, and I never have to call when the grass needs attention. You are always there on time."</p>
            <span className="testimonial-author">— Jason R., Parkland</span>
          </div>
          <div className="testimonial-card">
            <p>"Alberto and his team installed landscaping that just looks phenomenal with native Florida plants. Their work is always neat - no mess to let people know something had just been done."</p>
            <span className="testimonial-author">— Jamie F., Coral Springs</span>
          </div>
          <div className="testimonial-card">
            <p>"Alberto and his team really take pride in delivering world-class service. Father and Son is an excellent company to work with & they DO great work!"</p>
            <span className="testimonial-author">— Dave M., Tamarac</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get Your Free Estimate</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:9544102529">(954) 410-2529</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Office</strong>
                <span>7953 SW 6th Court<br/>North Lauderdale, FL 33068</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌴</span>
              <div>
                <strong>Service Areas</strong>
                <span>Parkland • Coral Springs • Tamarac</span>
              </div>
            </div>
          </div>
          <a href="tel:9544102529" className="btn-primary btn-large">
            Call Alberto Today for Your FREE Estimate!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Father & Son Lawn and Landscaping, Inc. | All Rights Reserved</p>
        <p>Parkland lawn service, maintenance and landscape design</p>
      </footer>

      {/* Tracking pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />

      <style jsx>{`
        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a {
          color: white;
          text-decoration: underline;
        }

        /* Navigation */
        .nav-container {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #059669;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #059669;
        }
        .nav-cta {
          background: #059669;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.2s;
        }
        .nav-cta:hover {
          background: #047857;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #374151;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 1rem 2rem;
          background: white;
          border-top: 1px solid #e5e7eb;
        }
        .mobile-menu a {
          padding: 0.75rem 0;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #f3f4f6;
        }

        /* Hero */
        .hero {
          padding: 10rem 2rem 6rem;
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #064e3b;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .hero p {
          font-size: 1.25rem;
          color: #047857;
          margin-bottom: 2rem;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: #059669;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.2s;
          display: inline-block;
        }
        .btn-primary:hover {
          background: #047857;
          transform: translateY(-2px);
        }
        .btn-secondary {
          background: white;
          color: #059669;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border: 2px solid #059669;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background: #ecfdf5;
        }
        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.2rem;
        }

        /* Services */
        .services {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .services h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #064e3b;
          margin-bottom: 3rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: #f0fdf4;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(5, 150, 105, 0.15);
        }
        .service-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }
        .service-card h3 {
          color: #064e3b;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-card li {
          color: #374151;
          padding: 0.5rem 0;
          border-bottom: 1px solid #d1fae5;
        }
        .service-card li:last-child {
          border-bottom: none;
        }

        /* About */
        .about {
          background: #064e3b;
          color: white;
          padding: 5rem 2rem;
        }
        .about-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .about h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .about p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #d1fae5;
        }
        .about-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          display: block;
          color: #10b981;
        }
        .stat-label {
          font-size: 1rem;
          color: #a7f3d0;
        }

        /* Testimonials */
        .testimonials {
          padding: 5rem 2rem;
          background: #f9fafb;
        }
        .testimonials h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #064e3b;
          margin-bottom: 3rem;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonial-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .testimonial-card p {
          color: #374151;
          font-style: italic;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .testimonial-author {
          color: #059669;
          font-weight: 600;
        }

        /* Contact */
        .contact {
          padding: 5rem 2rem;
          text-align: center;
        }
        .contact h2 {
          font-size: 2.5rem;
          color: #064e3b;
          margin-bottom: 3rem;
        }
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
          background: #f0fdf4;
          padding: 1.25rem;
          border-radius: 12px;
        }
        .contact-icon {
          font-size: 2rem;
        }
        .contact-item strong {
          display: block;
          color: #064e3b;
          margin-bottom: 0.25rem;
        }
        .contact-item a {
          color: #059669;
          text-decoration: none;
          font-weight: 500;
        }
        .contact-item span {
          color: #374151;
        }

        /* Footer */
        .footer {
          background: #064e3b;
          color: #a7f3d0;
          text-align: center;
          padding: 2rem;
        }
        .footer p {
          margin: 0.25rem 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }
          .nav-container {
            top: 28px;
          }
          .nav-inner {
            padding: 0.75rem 1rem;
          }
          .logo {
            font-size: 1.1rem;
          }
          .nav-links {
            display: none;
          }
          .nav-cta {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-menu {
            display: flex;
          }
          .hero {
            padding: 8rem 1.5rem 4rem;
          }
          .hero h1 {
            font-size: 1.75rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .hero-buttons {
            flex-direction: column;
          }
          .services, .testimonials, .contact {
            padding: 3rem 1.5rem;
          }
          .services h2, .testimonials h2, .contact h2, .about h2 {
            font-size: 1.75rem;
          }
          .about {
            padding: 3rem 1.5rem;
          }
          .about-stats {
            gap: 2rem;
          }
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
