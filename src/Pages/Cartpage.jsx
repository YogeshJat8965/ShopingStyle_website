import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/Cartslice";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Cartpage() {
  const { cart } = useSelector((state) => state);
  console.log("cart is = ", cart);
  const [totalItems, settotalItems] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    settotalItems(
      cart.reduce(
        (totalAmount, currentValue) => totalAmount + currentValue.price,
        0
      )
    );
  }, [cart]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dispatch = useDispatch();

  function deleteItem(itemId) {
    dispatch(remove(itemId));
  }

  return (
    <div className="w-full mt-[150px] flex justify-center items-center ">
      <style>
        {`
          /* Styles for screens 800px and above */
          @media (min-width: 800px) {
            .cart-item {
              flex-direction: row;
              justify-content: space-between;
            }

            .cart-item-image {
              max-width: 200px;
              height: auto;
            }

            .checkout-section {
              text-align: left;
            }
          }

          /* Styles for screens 600px to 799px */
          @media (min-width: 600px) and (max-width: 799px) {
            .cart-item {
              flex-direction: row;
              justify-content: space-between;
            }

            .cart-item-image {
              max-width: 150px;
              height: auto;
            }

            .checkout-section {
              text-align: left;
            }
          }

          /* Styles for screens smaller than 600px */
          @media (max-width: 600px) {
            .cart-item {
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 10px;
            }

            .cart-item-image {
              max-width: 80%;
              height: auto;
              margin-bottom: 10px;
            }

            .checkout-section {
              text-align: center;
              margin-top: 20px;
            }

            .checkout-button {
              display: inline-block;
              background-color: #34d399;
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              font-size: 1.2rem;
              cursor: pointer;
              border: none;
            }
          }
        `}
      </style>

      {cart.length > 0 ? (
        <div className="relative w-full max-w-[1150px] flex flex-col items-start ">
          {cart.map((eachitem) => (
            <div
              key={eachitem.id}
              className="cart-item w-full flex gap-4 items-center justify-center mb-10 border-b-2 pb-8 border-black"
            >
              <div className="cart-item-image-container w-[80%] flex justify-center">
                <img
                  src={eachitem.image}
                  className="cart-item-image object-cover"
                  alt={eachitem.title}
                />
              </div>

              <div className="flex flex-col max-w-[300px] cart-item-description">
                <p className="font-bold text-2xl mb-2">{eachitem.title}</p>
                <p className="text-md text-gray-600 mb-4">
                  {eachitem.description.substr(0, 60) + "...."}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-green-600 font-bold text-2xl">
                    {`$ ${eachitem.price}`}
                  </div>
                  <div className="bg-red-200 rounded-full p-2 text-black">
                    <button onClick={() => deleteItem(eachitem.id)}>
                      <MdDelete size={19}></MdDelete>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={`checkout-section ${isMobile ? "w-full" : ""}`}>
            <div>
              <p className="text-green-700 text-2xl font-semibold">YOUR CART</p>
              <h1 className="text-green-700 font-semibold text-[70px]">
                SUMMARY
              </h1>
              <p className="text-2xl font-bold mt-4">{`Total Items: ${cart.length}`}</p>
            </div>
            <div className="mt-4">
              <span className="text-2xl">Total Amount: </span>
              <span className="text-2xl font-bold">{`$${Math.floor(totalItems)}`}</span>
            </div>
            <button className="checkout-button mt-4">Checkout Now</button>
          </div>
        </div>
      ) : (
        <div className="relative left-[0%] top-[300px]">
          <p className="text-3xl font-bold mb-6">Your cart is empty</p>
          <NavLink to={"/"}>
            <button className="border bg-green-500 p-3 px-[74px] rounded-lg text-white text-2xl">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
