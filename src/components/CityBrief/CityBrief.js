import React, { useEffect, useState } from "react";
import "./CityBrief.scss";
import { fetchDailyBrief } from "../../store/Slices/DailyBriefSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CityBrief = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dailyBrief = useSelector((state) => state.DailyBrief);
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };
  console.log("DailyBrief", dailyBrief);

  // const [index, setIndex] = useState(0);
  const handleDailyBriefRouting = (id, dailyBriefData) => {
    // Perform the navigation to the individual experience page
    navigate(`/dailyBrief/${id}`, { state: { id, dailyBriefData } });
  };
  useEffect(() => {
    if (!dailyBrief || !dailyBrief.data) {
      dispatch(fetchDailyBrief());
    }
  }, [dailyBrief, dispatch]);

  // useEffect(() => {
  //   if (dailyBrief && dailyBrief.data && dailyBrief.data.data) {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % dailyBrief.data.data.length);
  //     }, 6000);

  //     return () => clearInterval(interval);
  //   }
  // }, [dailyBrief]);

  if (dailyBrief && dailyBrief.isLoading) {
    return <p>Loading...</p>;
  }

  if (dailyBrief && dailyBrief.isError) {
    return <p>Error occurred while fetching dailyBrief.</p>;
  }

  if (
    dailyBrief &&
    dailyBrief.data &&
    dailyBrief.data.data &&
    dailyBrief.data.data.length > 0
  ) {
    const dailyBriefData = dailyBrief.data.data[0];
    console.log("dailyBriefData", dailyBriefData);
    return (
      <div
        className="card CityBrief"
        style={{ marginTop: "9px", height: "241px", borderRadius: "10px" }}
        // onClick={() =>
        //   handleDailyBriefRouting(dailyBriefData.id, dailyBriefData)
        // }
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <img
          className="card-img-top"
          height="100%"
          style={{ borderRadius: "10px" }}
          src={dailyBriefData.backgroundImage}
          alt="Byte Image"
        />
        <div
          className="information"
          style={{
            position: "absolute",
            height: "60%",
            width: "100%",
            bottom: "5px",
          }}
        >
          <div
            className="blurred__citybrief"
            style={
              {
                // marginLeft: "5%",
                // position: "absolute",
                // height: "100%",
                // width: "90%",
                // backgroundColor: "#1D1D1C",
                // filter: "blur(59px)",
                // backgroundBlendMode: "soft-light",
              }
            }
          ></div>
          <span
            className="citybrief__title subheading-24 mx-3"
            style={{ filter: "blur(0px)" }}
          >
            {dailyBriefData.name}
          </span>
          <p
            className="citybrief__fact subbody-10 mx-2"
            style={{
              filter: "blur(0px)",
              fontSize: "100%",
              padding: "5px 10px",
              position: "absolute",
              fontWeight: "bold",
            }}
          >
            {dailyBriefData.title}
            {/* {dailyBriefData.description} */}
            {/* {popup && (
              <div className="popup-city">
                <div className="overlay-city" style={{ marginLeft: "500px" }}>
                  <div className="popup-content-scrollable">
                    <button className="close-popup-city" onClick={togglePopup}>
                      X
                    </button>
                    <div
                      className="article-text-content"
                      dangerouslySetInnerHTML={{
                        __html: dailyBriefData.mainContent,
                      }}
                    />
                  </div>
                </div>
              </div>
            )} */}
          </p>

          {/* <button
            type="button"
            class="btn btn-primary"
           
          >
            Launch demo modal
          </button> */}

          <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class=" modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Daily Brief
                  </h5>
                  <button
                    type="button"
                    class="close  btn-secondary"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  class="modal-body"
                  dangerouslySetInnerHTML={{
                    __html: dailyBriefData.mainContent,
                  }}
                ></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <button type="button" class="btn btn-primary">
                    Save changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null; // Render nothing if the necessary data is not available yet
};

export default CityBrief;
