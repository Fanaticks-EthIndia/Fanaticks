import CustomModal from "./Modal";

const EventCard = ({ cardData, setCardData }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{cardData.title}</h5>
          <p className="card-text">{cardData.description}</p>
          <p className="card-text">{cardData.date}</p>
          <p className="card-text">{cardData.time}</p>
          <p className="card-text">{cardData.location}</p>
          <p className="card-text">{cardData.price}</p>
          <img src={cardData.image} alt="Event Image" />
            <CustomModal />
        </div>
      </div>
    </>
  );
};

export default EventCard;