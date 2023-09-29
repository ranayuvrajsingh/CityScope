import React, { useState } from "react";

const PaymentDetails = (props) => {

    const [ showDiscountInput, setShowDiscountInput ] = useState(false);

    return (
        <div className="">

            <h2 className="my-5">User Details</h2>
            <div className="row">
                <div className="col-6">
                    <form>

                        <div class="form-group">
                            <label class="mr-sm-2 subheading-14" for="inlineFormCustomSelect">Pay With</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Credit or Debit Card</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        {!showDiscountInput &&
                            <small id="emailHelp" className="form-text subheading-14">Have a discount code? <p onClick={() => { setShowDiscountInput(true) }} style={{ float: "right" }}>Click Here</p></small>
                        }
                        {showDiscountInput &&
                            <div class="form-group mt-2">
                                <label class="mr-sm-2 subheading-14" for="inlineFormCustomSelect">If you have a discount code apply it here</label>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <input type="text" class="form-control" id="exampleInputEmail1" style={{ width: "77%" }} aria-describedby="emailHelp" placeholder="Discount Code" />
                                    <button className="ml-3" type="submit" style={{ width: "22%", float: "right" }}>Apply</button>
                                </div>
                            </div>
                        }
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label class="form-check-label" for="invalidCheck2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </label>
                        </div>
                        <p className="subheading-24 mt-4">Cancellation  Policy</p>
                        <p className="subbody-16">Cancel before 19 Jan for a partial refund. After that, the reservation is non-refundable. Learn more</p>

                        <button className="btn btn-primary mt-4" type="submit" style={{ width: "20%" }} class="btn btn-primary">Book</button>
                    </form>
                </div>
                <div className="col-6">
                    <h3 className="mx-5">Your Booking</h3>

                    <p className="subheading-14 mx-5 mt-3" >Dates <p style={{ float: "right" }}>Edit</p></p>
                    <p className="subbody-14 mx-5">09Jan - 13 Jan</p>
                    <p className="subheading-14 mx-5 mt-3">Guests <p style={{ float: "right" }}>Edit</p></p>
                    <p className="subbody-14 mx-5">1 Guests</p>
                    <div className="mx-5 my-3" style={{ width: "90%", "height": "252px", "backgroundColor": "aqua", "borderRadius": "16px" }}>
                        <div class="card p-1" style={{ "width": "100%", "height": "100%", "borderRadius": "16px" }}>
                            <div class="card-header" style={{ display: "flex", "flexDirection": "row" }}>
                                <h4>Rs 2598 </h4> &nbsp; 4 days experiences
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div>
                                        <h5>Price Breakdown</h5>
                                        <p><span style={{ float: "left" }}>Rs 6669 x 1 guests</span><span style={{ float: "right" }}>Rs 6669</span> </p><br></br>
                                        <p><span style={{ float: "left" }}>Service Fee</span><span style={{ float: "right" }}>Rs 1080</span> </p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div className='justify-content-between' style={{ display: "flex", "flexDirection": "row" }}><p>Total</p><p>7749</p></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default (PaymentDetails);