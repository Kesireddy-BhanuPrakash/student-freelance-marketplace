import { Link } from "react-router-dom";
function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-category">
        {service.category}
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <div className="service-price">
        ₹{service.price}
      </div>

      <div className="service-rating">
        ⭐ {service.rating}
      </div>

      <div className="service-footer">
        <span>{service.student}</span>

       <Link to={`/services/${service.id}`}>
  View Service
</Link>
      </div>
    </div>
  );
}

export default ServiceCard;