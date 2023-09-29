// ChannelsFilter.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchChannels } from "../../../store/Slices/ChannelSlice";
import Articles from "../Article"; // Import the Articles component

const ChannelsFilter = () => {
  const dispatch = useDispatch();
  const [channelNames, setChannelNames] = useState([]);

  useEffect(() => {
    dispatch(fetchChannels())
      .then((response) => {
        if (response.payload && response.payload.data) {
          // Extract channel names from the response data and store them in state
          const names = response.payload.data.map((channel) => channel.name);
          setChannelNames(names);
        }
      })
      .catch((error) => {
        // Handle errors here
      });
  }, [dispatch]);

  return (
    <div className="channels-filter">
      {/* Pass channelNames as a prop to the Articles component */}
      <Articles channelNames={channelNames} />
    </div>
  );
};

export default ChannelsFilter;
