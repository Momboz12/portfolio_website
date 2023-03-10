import useSEO from '../../hooks/useSEO'
import ContactMe from '../../section/Contact';

export default function Contact() {

    useSEO({title: 'Contacto'});

    return(
        <main className="content-page">
            <ContactMe/>
        </main>
    )
}