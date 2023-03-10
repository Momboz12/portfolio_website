import "./Skill.css"

function Skill({name, time, logo}) {
  return (
    <div className="skill-card flex">
        <img src={logo} alt={`${name} logo`} />
        <div className="skill-info flex">
            <h5 className="m-0" translate="no">{name}</h5>
            <small>+{time} Años</small>
        </div>
    </div>
  )
}

export default Skill