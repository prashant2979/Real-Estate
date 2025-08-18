import React from 'react';
import './Testimonial.css';

// Assuming you import your profile images somewhere like this:
import profile_img_1 from '../../assets/profile_img_1.png';
import profile_img_2 from '../../assets/profile_img_2.png';
import profile_img_3 from '../../assets/profile_img_3.png';

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  }
];

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="stars">
      {stars.map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
};

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonialsData.map(({ name, title, image, alt, rating, text }, index) => (
          <div key={index} className="testimonial-card">
            <img src={image} alt={alt} className="profile-img" />
            <StarRating rating={rating} />
            <p className="testimonial-text">"{text}"</p>
            <h3 className="client-name">{name}</h3>
            <p className="client-title">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial