import './WorkExperience.css'
import Timeline from '../../components/Timeline'
import dataWorkExperience from '../../services/data/Experience'

export default function WorkExperience(){

    return(
        <section className='section-experience'>
            <h2>Work Experience</h2>
            <div className='content-experience'>
            {dataWorkExperience.map((work) => (
                <Timeline 
                    key={work.id} name={work.title} enterprise={work.enterprise}
                    logo={work.image} startDate={`${work.date.start.month} ${work.date.start.year}`} endDate={`${work.date.end.month} ${work.date.end.year}`}
                    summary={work.summary}
                />
            ))}
            </div>
        </section>
    )
}