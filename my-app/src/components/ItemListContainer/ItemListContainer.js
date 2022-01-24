import { useEffect, useState } from "react";
import { getProductos } from "./BaseDeDatos";
import Item from "./Item";
import "./ItemListContainer.css"


function ItemListContainer () {
    const [products, setProducts] = useState ([])
    const [isLoading, setIsLoading] = useState (false);

    useEffect(() => {
        setIsLoading(true);
        getProductos ()
        .then((result) => setProducts(result))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));

    }, []);

    return (
        <div className="ItemListContainer">
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
            products.map((product) => <Item key={product.id} product={product} />)
            )}
        </div>
    )
}

export default ItemListContainer