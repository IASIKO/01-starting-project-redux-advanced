import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
// import { cartActions } from "../store/cart";
import { uiActions } from "../store/ui";


const CartButton = (props) => {
  const dispatch = useDispatch();
  const badgeQuantity = useSelector((state) => state.cart.quantity)
  

  const cartToggleHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeQuantity}</span>
    </button>
  );
};

export default CartButton;
