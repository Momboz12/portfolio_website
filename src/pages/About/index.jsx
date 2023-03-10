import useSEO from '../../hooks/useSEO'
import EducationalCertificate from '../../section/Certification';
import Skills from '../../section/Skills';
import WorkExperience from '../../section/WorkExperience';
import "../../index.css"

export default function About() {
    useSEO({title: 'Sobre mi'});   
    return(
        <main className="content-page">
            <WorkExperience/>
            <Skills/>
            <EducationalCertificate/>
        </main>
    )
}