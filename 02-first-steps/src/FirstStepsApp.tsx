import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch 2', quantity: 3},
    {productName: 'Nintendo Switch 3', quantity: 1},
    {productName: 'Play 6', quantity: 6}
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {itemsInCart.map(({productName, quantity}) => (
                <ItemCounter key={productName} name={productName} quantity={quantity}/>
            ))}
        </>
    );
}
