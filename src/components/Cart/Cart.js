import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  // const quantity = useSelector((state) => state.cart.quantity);
  // const price = useSelector((state) => state.product.price);

  // const showCartItem = quantity === 0;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {/* {!showCartItem && ( */}
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              // title: "Test Item",
              // quantity: quantity,
              // total: quantity * price,
              // price: price,
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      {/* )} */}
    </Card>
  );
};

export default Cart;
