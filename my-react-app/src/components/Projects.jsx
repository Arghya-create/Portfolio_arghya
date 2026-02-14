import PROJECTS from "../constants/projects";
import SKILLS from "../constants/skills";
import React, { useState, useEffect } from "react";

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModalProject(null);
    }
    if (modalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalProject]);

  function closeModal() {
    setModalProject(null);
  }

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-layout">
        <div className="projects-main">
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <article key={i} className="project-card">
                <div className="project-visual">{p.title}</div>
                <div className="project-info">
                  <h3 style={{ color: "white", margin: "0 0 6px" }}>
                    {p.title}
                  </h3>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: 12,
                      marginBottom: 8,
                    }}
                  >
                    {p.duration}
                  </div>
                  <p style={{ color: "var(--muted)", margin: "0 0 8px" }}>
                    {p.about}
                  </p>
                </div>
                <div className="project-action">
                  <button
                    className="download-btn"
                    onClick={() => setModalProject(p)}
                  >
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-footer" aria-hidden>
            {PROJECTS.map((p, i) => (
              <button
                key={i}
                className="project-mini-btn"
                onClick={() => setModalProject(p)}
              >
                {p.title} — Details
              </button>
            ))}
          </div>
        </div>

        <aside className="skills-sidebar" aria-label="Skills sidebar">
          <div className="skills-sidebar-inner">
            <h3 style={{ color: "white", marginTop: 0 }}>Skills</h3>
            {SKILLS.map((cat) => (
              <div key={cat.category} className="skill-category">
                <h5 style={{ color: "white", margin: "8px 0" }}>
                  {cat.category}
                </h5>
                <ul className="skills-list">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="skill-item">
                      <div className="skill-top">
                        <span className="skill-chip">{s.name}</span>
                      </div>

                      <div className="skill-progress" aria-hidden>
                        <div
                          className="skill-progress-fill"
                          style={{ width: `${(s.rating / 5) * 100}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {modalProject && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <div className="modal-content">
              <h2 style={{ marginTop: 0 }}>{modalProject.title}</h2>
              <div
                style={{ color: "var(--muted)", fontSize: 13, marginBottom: 8 }}
              >
                {modalProject.duration}
              </div>
              <p style={{ color: "var(--muted)" }}>{modalProject.about}</p>
              <h4>Responsibilities</h4>
              <p style={{ color: "var(--muted)" }}>
                {modalProject.responsibilities}
              </p>
              <h4>Achievements</h4>
              <p style={{ color: "var(--muted)" }}>
                {modalProject.achievements}
              </p>
              <h4>Skills</h4>
              <p style={{ color: "var(--muted)" }}>
                {modalProject.skills.join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
