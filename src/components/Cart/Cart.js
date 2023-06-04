import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const price = useSelector((state) => state.product.price)
  const isShown = useSelector((state) => state.cart.showCart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {isShown && <ul>
        <CartItem
          item={{ title: "Test Item", quantity: quantity, total: quantity * price, price: price }}
        />
      </ul>}
    </Card>
  );
};

export default Cart;
