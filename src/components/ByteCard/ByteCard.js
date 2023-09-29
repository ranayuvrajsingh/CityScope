import "./ByteCard.scss";
import React, { useEffect, useState } from "react";
import { CityscopeIcon1, CityscopeIcon2 } from "../../assets/svgs";
import bytelogo from "../../assets/pngs/bytelogo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchBytes } from "../../store/Slices/ByteSlice";

const ByteCard = (props) => {
  const dispatch = useDispatch();
  const bytes = useSelector((state) => state.Byte);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!bytes.data) {
      dispatch(fetchBytes());
    }
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bytes.data.data.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [bytes.data]);

  if (bytes.isLoading) {
    return <p>Loading...</p>;
  }

  if (bytes.isError) {
    return <p>Error occurred while fetching bytes.</p>;
  }

  if (bytes.data && bytes.data.data && bytes.data.data.length > 0) {
    const byteData = bytes.data.data[index];
    return (
      <>
        {/* <button onClick={(e) => dispatch(fetchBytes())}>Fetchbytes</button> */}

        <div className="byte_card" style={{ marginTop: "0px" }}>
          {/* <img
            src={bytelogo}
            style={{ height: "100px", width: "200px" }}
            alt="bytelogo"
          /> */}
          <div
            className="card "
            style={{
              width: "456px",
              height: "652px",
              borderRadius: "10px",
              marginTop: "5%",
            }}
          >
            <img
              className="card-img-top"
              height="100%"
              style={{
                position: "absolute",
                borderRadius: "10px",
                height: "450px",
              }}
              src={byteData.image}
              // style={{ height: "100px", width: "200px" }}
              alt="Byte Image"
              // src="https://s3-alpha-sig.figma.com/img/83af/ca90/63f67b95cdc72ddab32ea08ec9562cd1?Expires=1676851200&Signature=R9gpn6JQowc3vMBK3vrvQS--T58r7PnGgV0ifIm5NsBtQI-uFecQ9Mcgeilt8LRUnTi~T~Uz2L6PF3twcBr7GyMiRgIqhK-IP8Fc0LB0eNqxXHYJD~emd-XVCYreXL88KA65rSRr8OCcc2Rfd-5DWuqGSXbrloYkYjD8M~651yVO7YpkFgADa0rlJrnneezRpAZZc6xR36-N3uMnZHSs2llOKFxnIIDRJAuCLwr9wTfL0O5XlFEzGHDqsuIJOHXLLJE~sRvMVmHvNzDuUu8fQdiJuOsAEs-YJRQfoyxc5zl8TxMfytRx3Ux9vG9Gp03ylnAAz0pkK9Sjm7Tir13o1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              // alt="Card image cap"
            />

            <div
              className="byte_information p-5"
              style={{
                position: "absolute",
                bottom: "1px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <span style={{ position: "absolute", left: "2%", top: "5%" }}>
                <CityscopeIcon1 />
              </span>
              <p
                className="text-left subheading-24"
                style={{ color: "#FFCC29", marginTop: "1%" }}
              >
                {" "}
                {/* {bytes.Byte.data.data &&
                bytes.Byte.data.data.map((e) => <li>{e.title}</li>)} */}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                vehicula nibh. Phasellus metus arcu. Lorem ipsum dolor sit amet, */}
                {byteData.title}
              </p>
              <p
                className="text-left subbody-20"
                style={{ margin: "1%", padding: "1%" }}
              >
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                vehicula nibh. Phasellus metus arcu. Lorem ipsum dolor sit ame.
                Phasellus metus arcm Read More... */}
                {byteData.description}
              </p>
              <span style={{ position: "absolute", right: "5%", bottom: "5%" }}>
                <CityscopeIcon2 />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default ByteCard;

// <span style={{"position":"absolute","left":"2%","top":"5%"}}><CityscopeIcon1 /></span>
// <p className="text-left font-weight-bold" style={{"color":"#FFCC29"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vehicula nibh. Phasellus metus arcu. Lorem ipsum dolor sit amet,</p>
// <p className="text-left font-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vehicula nibh. Phasellus metus arcu. Lorem ipsum dolor sit ame. Phasellus metus arcm Read More...</p>
// <span style={{"position":"absolute","right":"5%","bottom":"5%"}}><CityscopeIcon2 /></span>

//https://cdns-images.dzcdn.net/images/cover/f8a0a2e1ec12c1026cd03208237cd934/500x500.jpg

// //
// <div className='byte'>
// Cityscope Bytes

// <div className='byte-card'>

// <div className='byte-card__image' style={{"--img": "url('https://cdns-images.dzcdn.net/images/cover/f8a0a2e1ec12c1026cd03208237cd934/500x500.jpg')"}}>
//     <div className='byte-information'>
//         <div className='icon1'>
//         <CityscopeIcon1 />
//         </div>
//         <div className='byte-title'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </div>
//         <div className='byte-description'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </div>
//         <div className='icon2'>
//         <CityscopeIcon2 />
//         </div>
//     </div>
// </div>
// </div>
// </div>
