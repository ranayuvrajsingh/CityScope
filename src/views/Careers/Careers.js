import React, { useEffect } from 'react';
import TopBar from '../../components/TopBar';
import Sidebar from '../../components/Sidebar';
import LocationIcon from '../../assets/svgs/LocationIcon.svg'
import SearchIcon from '../../assets/svgs/SearchIcon.svg'

const Careers = (props) => {

    useEffect(() => {
        console.log('this is Careers');
    }, []);

    return (
        <div>
            <TopBar />
            <Sidebar />

            <div className="container" style={{ marginTop: "200px", width: "auto" }}>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className='heading-48'>Join The Cityscope Family</h1>
                        <p className='body-24 my-5'>CityScope is a hyperlocal information & commerce platform bridging the gap between truly local and richly bespoke. Search, discover, share; a daily connection, an exchange of ideas and relationships.</p>
                    </div>
                    <div className='col-6'>
                        <img src="https://s3-alpha-sig.figma.com/img/0fa3/5513/46c4d8584711dd8484fc04a95014994f?Expires=1678060800&Signature=XfKZ6i-xtdEQ3~h4CxasJRTOTwf9VXv8UH8UhLpDjGjzWoG6R6gw1kOuL2clrHrhLDeCxIxO1zDxtfZ84D~DyD6ufSvd3UoFKrc0e1rMVs4h~QRl~FJyiPPvgTyO8s6~Ul4uvXRCH9r1jp4e3RZZtTYd6H7d7PbZipPZDx11wcnBJrg2xuZLaEdLAoSKb9n3VovJUkIrM5YZRTGUbgFt~5L9jUPblGyRere5wI3kxDJvlixhd~RlteVoIAynn7-sRvuuzG5U2R2Ic8RjDAFyRqhaHUYYEQ9hVDphwfJjm6G6WFmZaLAeuL0~9~0qh1xKO2tNxpfiGNDQeWj~dJoKnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            style={{ width: "100%", height: "100%" }} />
                    </div>
                    {/* <div className='container mx-2' style={{ "backgroundColor": "black", "justifyContent": "space-around", marginTop: "250px", "position": "absolute", "width": "50%", "height": "10%" }}>
                        <div className='row my-2 p-1' style={{ "justifyContent": "space-between" }}>

                            <div className='col-4' style={{display:"flex","flexDirection":"row"}}>
                                <img className='my-2' src={SearchIcon} width="30" height="30" alt="" />

                                <form className="form-inline">
                                    <input className="form-control p-2 mb-5" type="search" style={{backgroundColor:"black"}} placeholder="Search Something" aria-label="Search" />
                                </form>
                            </div>
                            <div className='col-4' style={{display:"flex","flexDirection":"row"}}>
                                <img className='my-2' src={LocationIcon} width="30" height="30" alt="" />
                                <a className="nav-link dropdown-toggle align-middle" style={{ "color": "#575757" }} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Location
                                </a>
                            </div>

                            <div className='col-4 mb-5'><button className='btn btn-primary' style={{ "width": "100%", "height": "120%" }}>Search</button></div>
                        </div>
                    </div> */}
                </div>
                {/* <iframe onL src="https://Careers.super.site" style={{height:"100%",width:"100%"}}></iframe> */}
                <iframe className='my-5' src="https://analog.kekahire.com/api/embedjobs/a9994760-417f-4f58-bdd8-bc5fe38812c2" frameborder="0" height="1500px" width="100%" scrolling='no' ></iframe>
            </div>

        </div>

    );
};

export default (Careers);