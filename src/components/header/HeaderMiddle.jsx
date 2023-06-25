import { useContext } from "react";
import { BsBook } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import BookStoreContext from "../../context/bookStorContext";
const HeaderMiddle = () => {
  const { cartInfoLength } = useContext(BookStoreContext);
  return (
      <>
        <div className='header-middle'>
        <div className='header-middle-logo'>
        <b>Book</b>
        <div className="book">
        <BsBook/>
        </div>
        <b>Store</b>
        </div>
        <div className='header-middle-search-box'>
            <input className='header-middle-search-input' type='search' placeholder='Search in book store...'/>
            <div className="search">
            <FiSearch/>
            </div>
        </div>
        <div className='header-middle-cart-wrapper'>
         <RiShoppingCart2Fill/>
        </div>
        </div>
    </>
  );
};

export default HeaderMiddle;
