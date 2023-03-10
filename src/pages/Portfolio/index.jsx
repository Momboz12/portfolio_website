import useSEO from '../../hooks/useSEO'

export default function Portfolio() {

    useSEO({title: 'Mis Proyectos'});

    return(
        <main className="content-page">
            <h1>Portafolio</h1>
        </main>
    )
}