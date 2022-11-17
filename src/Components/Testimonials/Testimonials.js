import React from 'react'
import './Testimonials.Styled.css'

function Testimonials() {
  return (
    <div className="Testimonials">
       <div className="TestimonialsLeft">
        <h1 className="TestimonialTitle">WHAT ADVENTURES SAY ABOUT US</h1>
        <p className="TestimonialDescription">See and discover what adventurers tell us about their journey with us, we always listen to whatever experience they have to say</p>
        <div className="Testimonial">
            <p className="TestimonialText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nobis maxime ratione expedita ea praesentium dolorum id iste. Doloremque, aperiam rem! Debitis nam excepturi, harum eum pariatur alias eius velit.</p>
            <div className="TestimonialsIcons">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className="TestimonialDetail">
                <div className="TestimonialAuthorDetails">
                    <p className="TestimonialAuthor">Alice Agasta</p>
                    <p className="TestimonialResigination">Entrepreneur</p>
                </div>
                <div className="TestimonialActions">
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            
        </div>
       </div>
       <div className="TestimonialsRight">
        </div> 
    </div>
  )
}

export default Testimonials