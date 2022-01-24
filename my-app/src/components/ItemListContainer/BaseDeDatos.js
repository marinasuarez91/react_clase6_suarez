export const PRODUCTS = [
    {
        id: 0,
        name: "Jacaranda",
        color: "negro",
        price: "$8200",
    },
    {
        id: 1,
        name: "Jacaranda",
        color: "suela",
        price: "$7900",
    },
    {
        id: 2,
        name: "Andes",
        color: "negro y suela",
        price: "$8200",
    },
    {
        id: 3,
        name: "Selva",
        color: "negro",
        price: "$8350",
    },
    {
        id: 4,
        name: "Selva",
        color: "suela",
        price: "$8350",
    },
    {
        id: 5,
        name: "Selva",
        color: "mostaza",
        price: "$8350",
    },
];

export function getProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PRODUCTS), 2000);
    });
}