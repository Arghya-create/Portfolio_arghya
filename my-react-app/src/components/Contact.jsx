import React from "react";

const LINKEDIN = "https://www.linkedin.com/in/arghya-dasgupta/";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <p style={{ color: "white", margin: 0 }}>
            I'd love to hear from you — feel free to reach out for
            collaborations or work inquiries.
          </p>
          <p style={{ marginTop: 12 }}>
            <strong style={{ color: "var(--muted)" }}>Email:</strong>{" "}
            <a href="mailto:invinciblearghya@gmail.com">
              invinciblearghya@gmail.com
            </a>
          </p>
          <p>
            <strong style={{ color: "var(--muted)" }}>Location:</strong>{" "}
            Kolkata, India
          </p>
          <div className="socials" style={{ marginTop: 12 }}>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <aside className="profile-card">
          <h3 style={{ color: "white", marginTop: 0 }}>Let's connect</h3>
          <p style={{ color: "var(--muted)" }}>
            Prefer email? Use the address above or hit me on LinkedIn.
          </p>
        </aside>
      </div>
    </section>
  );
}
