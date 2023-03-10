import './Skills.css'
import Skill from '../../components/Skill'
import dataSkill from '../../services/data/Skills'

export default function Skills(){

    return(
        <section className='section-skill'>
            <h2>Habilidades</h2>
            <article className="content-skills">
                {dataSkill.map((skill) => (
                    <Skill key={skill.id} name={skill.name} time={skill.experience} logo={skill.image}/>
                ))}
            </article>
        </section>
    )
}