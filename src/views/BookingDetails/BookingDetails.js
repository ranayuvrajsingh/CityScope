import React, { useState } from "react";

import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import UserDetails from "../../components/UserDetails";
import PaymentDetails from "../../components/PaymentDetails";
import ReviewBooking from "../../components/ReviewBooking";
import BookingConfirmationModal from "../../components/BookingConfirmationModal";
import BookingCancelledModal from "../../components/BookingCancelledModal";

const BookingDetails = (props) => {

    const [ componentToShow, setComponentToShow ] = useState(1);
    return (
        <div>
            <TopBar />
            <Sidebar />
            <div className="container" style={{ marginTop: "200px" }}>
                {
                    (componentToShow === 1 || componentToShow === 2 || componentToShow === 3) &&
                
                <div className="justify-content-between" style={{ display: "flex", flexDirection: "row" }}>
                    <p onClick={() => { setComponentToShow(1) }}>1. User details</p>
                    <p onClick={() => { setComponentToShow(2) }}>2. Payment Details</p>
                    <p onClick={() => { setComponentToShow(3) }}>3. Review Booking</p>
                </div>
}
                {componentToShow === 1 &&
                    <div><UserDetails /></div>
                }
                {componentToShow === 2 &&
                    <div><PaymentDetails /></div>
                }
                {componentToShow === 3 &&
                    <div><ReviewBooking componentToShow={setComponentToShow} /></div>
                }
                {componentToShow === 4 &&
                    <div><BookingConfirmationModal /> </div>
                }
                                {componentToShow === 5 &&
                    <div><BookingCancelledModal /> </div>
                }

            </div>
        </div>
    );
};

export default (BookingDetails);
