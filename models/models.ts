export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    quantity?:number
}

interface Rating {
    rate: number;
    count: number;
}

// ----------------
export interface Cart {
    id:       number;
    userId:   number;
    date:     Date;
    products: CartProduct[];
}

interface CartProduct {
    productId: number;
    quantity:  number;
}