import CardCertificates from "../../components/CardCetificate";
import data from "../../services/data/Certificate";
import "./Certification.css"

const EducationalCertificate = () => {
  return (
    <section className="section-card">
      <h2>Certificados academicos</h2>
      <article className="card-home">
      {data.map((certificate) => (
        <CardCertificates
          key={certificate.id}
          year={certificate.year}
          name={certificate.title}
          organization={certificate.organization}
          source={certificate.image}
        />
      ))}
      </article>
    </section>
  );
};

export default EducationalCertificate;
