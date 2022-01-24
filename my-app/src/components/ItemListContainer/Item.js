import "./ItemListContainer.css"
import ItemCount from "./ItemCount"

const Item = ({ product }) => {
     
    return (
      <div className="ItemCard">
        <p>{product.name}</p>
        <p>Precio: {product.price}</p>
        <ItemCount />
      </div>
    );
};

export default Item;
