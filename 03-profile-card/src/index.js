import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "#C3DCAF",
  },

  {
    skill: "CSS",
    level: "advanced",
    color: "#E84F33",
  },

  {
    skill: "Javascript",
    level: "intermediate",
    color: "#60DAFB",
  },

  {
    skill: "React",
    level: "intermediate",
    color: "#FF3B00",
  },

  {
    skill: "Web Design",
    level: "beginner",
    color: "#2662EA",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="gagdet.jpg" alt="gagdet"></img>;
}
function Intro() {
  return (
    <div>
      <h2>Inspector Gagdet</h2>
      <p>
        Inspector Gadget is an animated superhero science fiction comedy series
        co-created by Andy Heyward, Jean Chalopin and Bruno Bianchi and was
        originally syndicated by DIC Audiovisuel and Lexington Broadcast
        Services Company.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
