import { BsArrowClockwise, BsGift, BsSend } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import "./services.css";
const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <div className="ship">
        <MdOutlineLocalShipping/>
        </div>
        <b>Free Shipping</b>
      </div>
      <div className="service-item">
      <div className="gift">
      <BsGift/>
      </div>
        <b>Gift Card</b>
      </div>
      <div className="service-item">
        <BsArrowClockwise/>
        <b>7 Days Return</b>
      </div>
      <div className="service-item">
        <BsSend/>
        <b>Contact Us</b>
      </div>
    </div>
  );
};

export default Services;
