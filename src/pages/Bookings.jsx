import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function Bookings() {
  const bookings = useSelector((state) => state.user.bookings);
  console.log(bookings)

  return (
    <>
      <Navbar />
      <StyledBookings>
        <h3>My Bookings</h3>
        <p>All meetings will be organized through Calendly. We recommend checking it regularly to stay updated.</p>
        <div className="main_container">
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <div className="booking_card" key={booking.id}>
                <div className="card_row">
                  <span className="label">Name:</span>
                  <span>{booking.customer.name}</span>
                </div>
                <div className="card_row">
                  <span className="label">Email:</span>
                  <span>{booking.customer.email}</span>
                </div>
                <div className="card_row">
                  <span className="label">Amount Paid:</span>
                  <span>
                    {(booking.amount_total / 100).toFixed(2)}{" "}
                    {booking.currency?.toUpperCase()}
                  </span>
                </div>
                <div className="card_row">
                  <span className="label">Description:</span>
                  <span>{booking.description}</span>
                </div>
                
                <div className="card_row">
                  <span className="label">Country:</span>
                  <span>{booking.customer.address.country}</span>
                </div>
                <div className="card_row">
                  <span className="label">Booking Date:</span>
                  <span>{new Date(booking.created).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no_bookings"> <h4>No bookings yet.</h4></div>
          )}
        </div>
      </StyledBookings>
      <Footer />
    </>
  );
}

const StyledBookings = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;
  padding-bottom: 4rem;

  p{
    color: orange;
    text-align: center;
    margin-top: 20px;
  }


  .main_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: var(--heading-margin);
  }

  .booking_card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    box-shadow: 0 0 0 1px #f0f0f0;
  }

  .card_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 0.7rem;
    color: #444;
  }

  .label {
    font-weight: 600;
    color: #666;
    flex-shrink: 0;
    min-width: 100px;
  }

  .no_bookings {
    grid-column: 1 / -1;
    
    padding: 4rem 0;
    h4{
        text-align: center;
    }
  }
`;
