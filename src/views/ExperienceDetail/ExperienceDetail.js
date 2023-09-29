import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchExperienceById } from "../../store/Slices/ExperienceId";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import ReviewCard from "../../components/ReviewCard";
import MasterClass from "../../components/CalendarSlots/MasterClass";
import SingleEvent from "../../components/CalendarSlots/SingleEvent";
import CityExperience from "../../components/CalendarSlots/CityExperience";
import RecurringEvent from "../../components/CalendarSlots/RecurringEvent";
import "./ExperienceDetail.scss";
import SimilarExperiences from "../../components/SimilarExperiences/SimilarExperiences";
import { DownArrow, UpArrow } from "../../assets/svgs";
import Lottie from "react-lottie"; // Add this import
import loadingAnimation from "../../components/Animation/Animation.json"; // Replace with the path to your Lottie animation JSON file
import footer from "../../components/Footer";
import Login from "../../components/LoginPage/Login";

const ExperienceDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const experience = useSelector((state) => state.ExperienceId);
  const [isLoading, setIsLoading] = useState(true); // State for loading animation
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isIncludedVisible, setIsIncludedVisible] = useState(true);
  const [isNotIncludedVisible, setIsNotIncludedVisible] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [isHostVisible, setIsHostVisible] = useState(true);
  const [isReviewsVisible, setIsReviewsVisible] = useState(true);
  const [isAccessibilityVisible, setIsAccessibilityVisible] = useState(true);
  const [isCancellationPolicyVisible, setIsCancellationPolicyVisible] =
    useState(true);
  const [isFAQVisible, setIsFAQVisible] = useState(true);
  const [isSupportVisible, setIsSupportVisible] = useState(true);
  const [isSimilarExperienceVisible, setIsSimilarExperienceVisible] =
    useState(true);
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch experience by ID
    console.log("Fetching experience by ID:", id);
    dispatch(fetchExperienceById(id))
      .then(() => {
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error occurred while fetching experience:", error);
      });
  }, [dispatch, id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % experience.data.images.length
      );
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component is unmounted
  }, [experience.data]);

  const formatDate = (dateString) => {
    const parsedDate = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return parsedDate.toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    // Render the Lottie animation while loading
    return (
      <div className="loading-animation">
        <Lottie
          options={{
            animationData: loadingAnimation, // Your Lottie animation JSON
            loop: true,
            autoplay: true,
          }}
          height={200} // Set the height and width according to your animation size
          width={200}
        />
      </div>
    );
  }

  if (experience.data) {
    const experienceData = experience.data;
    const formattedDate = formatDate(experienceData.startCsExp);

    if (experience.isLoading) {
      return <p>Loading...</p>;
    }

    if (experience.isError) {
      return <p>Error occurred while fetching experience.</p>;
    }

    if (experience.data) {
      const experienceData = experience.data;
      const bigPhoto = experienceData.images[currentImageIndex];

      const handleShowMorePhotos = () => {
        setShowAllPhotos(true);
      };

      const handleShowLessPhotos = () => {
        setShowAllPhotos(false);
      };

      const handleToggleIncluded = () => {
        setIsIncludedVisible(!isIncludedVisible);
      };

      const handleToggleNotIncluded = () => {
        setIsNotIncludedVisible(!isNotIncludedVisible);
      };

      const handleToggleAbout = () => {
        setIsAboutVisible(!isAboutVisible);
      };

      const handleToggleHost = () => setIsHostVisible(!isHostVisible);
      const handleToggleReviews = () => setIsReviewsVisible(!isReviewsVisible);
      const handleToggleAccessibility = () =>
        setIsAccessibilityVisible(!isAccessibilityVisible);
      const handleToggleCancellationPolicy = () =>
        setIsCancellationPolicyVisible(!isCancellationPolicyVisible);
      const handleToggleFAQ = () => setIsFAQVisible(!isFAQVisible);
      const handleToggleSupport = () => setIsSupportVisible(!isSupportVisible);
      const handleToggleSimilarExperience = () =>
        setIsSimilarExperienceVisible(!isSimilarExperienceVisible);

      // Handlers for next and previous experience
      const goToNextExperience = () =>
        setCurrentExperienceIndex((prevIndex) => (prevIndex + 1) % 3);
      const goToPreviousExperience = () =>
        setCurrentExperienceIndex((prevIndex) => (prevIndex - 1 + 3) % 3);

      return (
        <div className="experience-detail">
          <TopBar />
          <Sidebar />
          <div className="container" style={{ marginTop: "60px" }}>
            <div className="card">
              <img
                src={bigPhoto}
                style={{
                  width: "1110px",
                  maxHeight: "400px",
                  borderRadius: "10px",
                  objectFit: "fit",
                }}
                alt="Experience Banner"
              />
            </div>
            <div className="row exp__details my-5">
              <div className="col-8">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginRight: "5px",
                  }}
                >
                  <h2
                    style={{
                      color: "#533B9A",
                      fontWeight: "650",
                      fontSize: "30px",
                    }}
                  >
                    {experienceData.title}
                  </h2>
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-1px",
                      fontSize: "12px", // Adjust this to change the size of the icons
                    }}
                  >
                    <div style={{ marginRight: "20px" }}> </div>
                    <HeartIcon
                      style={{ marginLeft: "50px", marginRight: "-30%" }}
                    />{" "}
                  </div> */}
                </div>
                <span>
                  Experience | {experienceData.city.name} | 4 days |{" "}
                  {experienceData.classification.name}
                </span>
                <hr
                  style={{
                    marginLeft: "1px",
                    marginTop: "20px",
                    width: "99%",
                  }}
                />
                <b>
                  {" "}
                  <div className="justify-content-between">
                    <span>{formattedDate}</span>
                    <span
                      style={{
                        color: "#533B9A",
                        marginLeft: "42%",
                        textDecoration: "underline",
                        fontSize: "15px",
                        marginTop: "1px",
                      }}
                    >
                      Check availability
                    </span>
                  </div>
                  <span
                    style={{ textDecoration: "underline", marginTop: "55px" }}
                  >
                    {experienceData.venue[2]} |{" "}
                  </span>
                  <span style={{ textDecoration: "underline" }}>
                    (4.9) 69 Reviews
                  </span>
                </b>
                {/*Not Collapsible sections */}
                <div>
                  <h3 style={{ color: "#533B9A", marginTop: "35px" }}>
                    About the experience
                  </h3>
                  {/* Using dangerouslySetInnerHTML to render the HTML content */}
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "28px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: experienceData.longDescription,
                    }}
                  />
                </div>
                <h3 style={{ color: "#533B9A", marginTop: "35px" }}>
                  What's Included
                </h3>
                <div
                  style={{
                    margin: "0%",
                    padding: "0%",
                    fontFamily: "Lato",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "28px",
                  }}
                >
                  {experienceData.whatsIncluded ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: experienceData.whatsIncluded,
                      }}
                    />
                  ) : (
                    <p>No included items found.</p>
                  )}
                </div>
                <h3 style={{ color: "#533B9A", marginTop: "35px" }}>
                  What's Not Included
                </h3>
                <div
                  style={{
                    fontFamily: "Lato",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "28px",
                  }}
                >
                  {experienceData.whatsNotIncluded ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: experienceData.whatsNotIncluded,
                      }}
                    />
                  ) : (
                    <p>No not included items found.</p>
                  )}
                </div>
                )
              </div>
              <div className="col-4" style={{ marginLeft: "0px" }}>
                {experienceData.classification.name === "Masterclass" && (
                  <MasterClass experienceTemp={experienceData} />
                )}
                {experienceData.classification.name === "Single Events" && (
                  <SingleEvent experienceTemp={experienceData} />
                )}
                {experienceData.classification.name === "City Experience" && (
                  <CityExperience experienceTemp={experienceData} />
                )}
                {experienceData.classification.name === "Reccuring Event" && (
                  <RecurringEvent experienceTemp={experienceData} />
                )}
              </div>
            </div>
            <h3 style={{ color: "#533B9A" }}>Host</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginTop: "-1%",

                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "28px",
                }}
              >
                {experienceData.hostDescription}
              </div>
              <img
                src={experienceData.hostImage}
                alt="Host"
                style={{
                  maxWidth: "100px", // or any desired size
                  height: "100px", // make sure this matches the maxWidth for a perfect circle
                  borderRadius: "50%", // makes the image circular
                  marginLeft: "auto", // pushes the image to the right
                  marginTop: "-51px",
                }}
              />
            </div>

            {/* <h3 className="my-5" style={{ color: "#533B9A" }}>
              Reviews
            </h3>
            <div className="row" style={{ marginLeft: "10px" }}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div> */}
            {/*! Collapsible sections */}
            {/* Accessibility Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <h3 style={{ color: "#533B9A" }}>Accessibility</h3>
              <div onClick={handleToggleAccessibility}>
                {isAccessibilityVisible ? <DownArrow /> : <UpArrow />}
              </div>
            </div>
            {isAccessibilityVisible && (
              <div
                style={{
                  // margin: "2%",
                  // padding: "2%",
                  fontFamily: "Lato",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "28px",
                }}
              >
                {experienceData.accessibility}
              </div>
            )}

            {/* Cancellation Policy Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "35px",
              }}
            >
              <h3 style={{ color: "#533B9A" }}>Cancellation Policy</h3>
              <div onClick={handleToggleCancellationPolicy}>
                {isCancellationPolicyVisible ? <DownArrow /> : <UpArrow />}
              </div>
            </div>
            {isCancellationPolicyVisible && (
              <div
                style={{
                  // margin: "2%",
                  // padding: "2%",
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "28px",
                }}
              >
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
              </div>
            )}

            {/* FAQ Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "35px",
              }}
            >
              <h3 style={{ color: "#533B9A" }}>FAQ</h3>
              <div onClick={handleToggleFAQ}>
                {isFAQVisible ? <DownArrow /> : <UpArrow />}
              </div>
            </div>
            {isFAQVisible && (
              <div
                style={{
                  // margin: "2%",
                  // padding: "2%",
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "28px",
                }}
              >
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at ipsum nisl. Sed molestie nec libero id pharetra.
                  Cras eu rhoncus urna
                </li>
              </div>
            )}

            {/* Support Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "35px",
              }}
            >
              <h3 style={{ color: "#533B9A" }}>Support</h3>
              <div onClick={handleToggleSupport}>
                {isSupportVisible ? <DownArrow /> : <UpArrow />}
              </div>
            </div>
            {isSupportVisible && (
              <div>For More queries please contact - 9856372283</div>
            )}

            <div
              className="whats-happening-container"
              style={{ marginTop: "30px", marginLeft: "-10px" }}
            >
              <SimilarExperiences />
            </div>
          </div>
        </div>
      );
    }
  }

  return null;
};

export default ExperienceDetail;
