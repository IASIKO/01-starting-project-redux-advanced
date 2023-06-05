// import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
// import product from "../store/product";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book i ever wrote",
  },
];

const Products = (props) => {
  // const title = useSelector((state) => state.product.title);
  // const price = useSelector((state) => state.product.price);
  // const description = useSelector((state) => state.product.description);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            // title={title}
            // price={price}
            // description={description}
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
