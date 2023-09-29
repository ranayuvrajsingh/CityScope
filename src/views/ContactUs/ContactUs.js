import React from "react";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";

const ContactUs = (props) => {
    return (
        <div>
            <TopBar />
            <Sidebar />
            <div className="container" style={{ marginTop: "200px" }}>
                <div className="row">
                    <div className="col-6">
                        <h1 className="heading-40">Let's Talk</h1>
                        <h3 className="subheading-24">We would love to hear from you!</h3>

                        <p className="body-20 my-5">Got questions? Any feedback? Want to tell us something? Looking for a collaboration? Want to work with us?
                            Do reach out even if you would like to chat.</p>
                    </div>
                    <div className="col-6">
                        <form>
                            <div class="form-group">
                                <label className="subheading-14" for="exampleInputEmail1">Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label className="subheading-14" for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label className="subheading-14" for="exampleInputEmail1">Phone number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone" />
                            </div>
                            <div class="form-group">
                                <label class="mr-sm-2 subheading-14" for="inlineFormCustomSelect">How did you find us?</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Select an option</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label className="subheading-14" for="exampleInputEmail1">Message</label>
                                <textarea type="textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>

                            <button type="submit" style={{width:"100%"}} class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default (ContactUs);