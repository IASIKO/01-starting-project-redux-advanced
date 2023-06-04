import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const title = useSelector((state) => state.product.title)
  const price = useSelector((state) => state.product.price)
  const description = useSelector((state) => state.product.description)

  

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title={title}
          price={price}
          description={description}
        />
      </ul>
    </section>
  );
};

export default Products;
