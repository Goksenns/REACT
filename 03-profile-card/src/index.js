import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill skill="React" emoji="👀" color="#123456" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="javascript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
