import React, { useEffect, useRef } from 'react'
import SKILLS from '../constants/skills'

export default function Home() {
  const sectionRef = useRef(null)
  const firefliesRef = useRef(null)

  const fireflies = useRef(
    Array.from({ length: 18 }).map(() => {
      return {
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 100}%`,
        dur: `${4 + Math.random() * 6}s`,
        delay: `${Math.random() * 5}s`,
        size: `${4 + Math.random() * 6}px`,
      }
    })
  ).current

  useEffect(() => {
    const target = sectionRef.current
    const node = firefliesRef.current
    if (!target || !node) return

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e.isIntersecting) node.classList.remove('fade-out')
        else node.classList.add('fade-out')
      },
      { threshold: 0.2 }
    )

    obs.observe(target)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      <div className="fireflies" ref={firefliesRef} aria-hidden>
          {fireflies.map((f, i) => (
            <span
              key={i}
              className="firefly"
              style={{
                left: f.left,
                top: f.top,
                width: f.size,
                height: f.size,
                animationDuration: f.dur,
                animationDelay: f.delay,
              }}
            />
          ))}
        </div>
      <section id="home" className="hero" >
        
        <div className="hero-inner">
          <h1 className="hero-title">Hi — Arghya Dasgupta Here</h1>
          <p className="hero-sub">
            Get to know more about me
          </p>
          <div className="hero-ctas">
            <a href="/projects" className="cta">
              See my work
            </a>
            <a href="#about" className="cta cta-secondary">
              Get to know me
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="bio">
            <h3>
              Hello — I'm Arghya. I build modern, accessible and delightful web
              applications. I focus on front-end engineering, design systems and
              interactions. I enjoy turning complex problems into simple,
              beautiful and intuitive user experiences.
            </h3>

            <p>
              I have experience with Angular, React, JavaScript, CSS, Python, Node and modern tooling.
              I love collaborating with designers and backend engineers to ship
              products that people enjoy using.My core expertise lies in
              front-end engineering, where I specialize in Angular and React to
              build scalable, high-quality digital products. I hold a Master of
              Technology in Software Engineering from BITS Pilani, and a Bachelor of Technology in Computer
              Science.
            </p>

            <p>
              Beyond technical execution, I am a proven leader with hands-on
              experience managing teams of approximately 10 developers,
              overseeing task allocation, code reviews, and sprint delivery. I
              bridge the gap between design and development by collaborating
              directly with clients and UX teams to translate Figma designs into
              pixel-perfect interfaces. Additionally, I am an advocate for
              modern development practices, serving as an AI Lead to train teams
              on prompt engineering and AI-assisted workflows to accelerate
              delivery.
            </p>

            <a
              className="download-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume (PDF)
            </a>
            {/* skills moved to Projects sidebar */}
          </div>

          <aside className="profile-card">
            <div
              style={{
                height: 120,
                width: 120,
                margin: "0 auto",
                borderRadius: 12,
                background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/picture.jpeg"
                alt="Arghya"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h3 style={{ marginTop: 12, color: "white" }}>Arghya Dasgupta</h3>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>
              Frontend Developer
            </p>

            <div style={{ marginTop: 12 }}>
              <object
                className="resume-embed"
                data="/resume.pdf"
                type="application/pdf"
              >
                <p>
                  Resume preview not available.{" "}
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    Open resume
                  </a>
                </p>
              </object>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
