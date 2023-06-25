import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const Rating = ({rating, reviews}) => {
    return ( <div className="rating">
        {rating >= 1 ? (
            <FaStar/>
        ) : rating >= 0.5 ? (
            <FaStar/>
        ) : (
            <FaStar/>
        )}
        {rating >= 2 ? (
            <FaStar/>
        ) : rating >= 1.5 ? (
            <FaStar/>
        ) : (
            <FaStar/>
        )}
        {rating >= 3 ? (
            <FaStar/>
        ) : rating >= 2.5 ? (
            <FaStar/>
        ) : (
            <FaStar/>
        )}
        {rating >= 4 ? (
            <FaStar/>
        ) : rating >= 3.5 ? (
            <FaStar/>
        ) : (
            <FaStar/>
        )}
        {rating >= 5 ? (
            <FaStar/>
        ) : rating >= 4.5 ? (
            <BsStarHalf/>
        ) : (
            <BsStarHalf/>
        )}
        <span>{rating}</span>
        <span>({reviews} reviews)</span>
    </div> );
}
 
export default Rating;