"use client"
import './Skills.css'
export default function SkillsSection() {
  const skillsRow1 = [ "HTML", "CSS","Bootstrap", "JavaScript", "Node.js", "Express", "React", "MongoDB", "Next.Js", "Tailwindcss", "Git"];
  const skillsRow2 = ["HTML", "CSS","Bootstrap", "JavaScript", "Node.js", "Express", "React", "MongoDB", "Next.Js", "Tailwindcss", "Git"];

  return (
    <section className="skills-section">
      {/* Line 1 - moves left */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-left">
          {[...skillsRow1, ...skillsRow1].map((skill, i) => (
            <span key={i} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>

      {/* Line 2 - moves right */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-right">
          {[...skillsRow2, ...skillsRow2].map((skill, i) => (
            <span key={i} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}