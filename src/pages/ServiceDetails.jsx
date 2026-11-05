import { useState } from "react";
import { useParams } from "react-router-dom";
import services from "../data/services";

function ServiceDetails() {

  const { id } = useParams();

  const serviceId = Number(id);

  const service = services.find(
    (item) => item.id === serviceId
  );

  // useState goes HERE
  const [hired, setHired] = useState(false);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div className="details-container">

      <div className="details-main">

        <p className="details-category">
          {service.category}
        </p>

        <h1>{service.title}</h1>

        <p className="details-description">
          {service.description}
        </p>

        <div className="details-student">
          <strong>{service.student}</strong>
          <span>⭐ {service.rating}</span>
        </div>

        <hr />

        <h2>About this service</h2>

        <p>
          I will create a professional and responsive solution
          based on your requirements. The project will be
          completed with quality and delivered on time.
        </p>

      </div>

      <div className="details-card">

        <h2>₹{service.price}</h2>

        <p>Starting price</p>

        <button
          className="hire-button"
          onClick={() => setHired(true)}
        >
          {hired ? "Request Sent ✓" : "Hire Student"}
        </button>

        <p className="delivery">
          ✓ Student freelancer
        </p>

        <p className="delivery">
          ✓ Quality work
        </p>

        <p className="delivery">
          ✓ On-time delivery
        </p>

      </div>

    </div>
  );
}

export default ServiceDetails;