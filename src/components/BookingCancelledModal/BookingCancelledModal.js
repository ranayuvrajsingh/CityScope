import React from "react";
import bookingcancelledicon from '../../assets/pngs/bookingcancelledicon.png'
import { useNavigate } from "react-router-dom";

const BookingCancelledModal = ({ componentToShow, ...props }) => {
    const navigate = useNavigate();

    return (
        <div className="" style={{marginLeft:"50vh"}} >
        <div class="card" style={{width:"400px", height:"500px", borderRadius:"10px"}}>
  <img src={bookingcancelledicon} className="card-img-top mx-5 my-5" style={{width:"80%"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Oops! Something went wrong</h5>
    <p class="card-text">It looks like something went wrong, your booking was unsuccessful. Go back to the bookings page to complete it.</p>
    <button style={{width:"100%"}} class="btn btn-primary" onClick={()=>{navigate('/experiences/abc')}}>Back to Bookings page</button>
  </div>
</div>
        </div>
    );
    };

export default (BookingCancelledModal);
