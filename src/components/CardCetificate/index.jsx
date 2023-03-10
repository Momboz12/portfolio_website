import "./CardCertificate.css"

export default function CardCertificate ({year, name, organization, source}) {
    return (  
        <article className="flex card">
            <figure className="fig-card">
                <img src={source} alt={`${organization} ${name} Title`}/>
            </figure>
            <div className="info-card">
                <h3 className="m-0" translate="no">{name}</h3>
                <div>
                    <small translate="no">{year} · {organization}</small>
                </div>
            </div>
        </article>
    );
}
 