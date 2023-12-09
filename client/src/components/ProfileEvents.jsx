import CustomModal from "./Modal";
import { useState } from "react";
import EventCardHolder from "./EventCardHolder";

const ProfileEvents = ({ profileData, setProfileData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cardData, setCardData] = useState(profileData.events);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="profile-events">
        <h2>Manage My Events</h2>
        <div className="profile-events-container">
          <button onClick={openModal}>Create a new Event</button>
          <CustomModal isOpen={isModalOpen} onClose={closeModal}>
            <h1>Upload Event Details</h1>
            <form className="container">
              <div className="col-1">
                <img src="https://example.com/event.jpg" alt="Event Image" />
                <h1>Upload Event Image*</h1>
                <input type="file" />
                <h1>Link Your Anon</h1>
                <h1>Create Event</h1>
              </div>
              <div className="col-2">
                <h1>Event Title*</h1>
                <input type="text" />
                <h1>Event Description*</h1>
                <input type="text" />
                <h1>Event Date*</h1>
                <input type="date" />
                <h1>Event Time*</h1>
                <input type="time" />
                <h1>Event Location*</h1>
                <input type="text" />
                <h1>Event Price*</h1>
                <input type="text" />
                <h1>Event Tags*</h1>
                <input type="text" />
              </div>
              {/* update profile Data state*/}
              {/* <button src="x.com">Submit</button> */}
            </form>
          </CustomModal>
          <EventCardHolder cardData={cardData} setCardData={setCardData} />
        </div>
      </div>
    </>
  );
};

export default ProfileEvents;
