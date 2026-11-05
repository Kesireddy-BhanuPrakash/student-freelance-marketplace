import ServiceCard from "./ServiceCard";
import services from "../data/services";
function Services() {

  

  return (
    <section className="services">

      <div className="section-heading">
        <p>EXPLORE</p>
        <h2>Popular Services</h2>
      </div>

      <div className="service-grid">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
  );
}

export default Services;