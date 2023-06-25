import { AiOutlineArrowRight } from "react-icons/ai";
 const Arrow = ({ handleClick, className }) => {
  return <AiOutlineArrowRight onClick={handleClick} className={className}></AiOutlineArrowRight>;
};


export default Arrow;
