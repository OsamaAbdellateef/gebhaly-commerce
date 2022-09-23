import { createContext, useContext, useEffect, useState } from 'react';
import { Cart } from '../models/models';
import useFetch from '../hooks/useFetch';
import { useProducts } from './productsContext';

interface Props {
    children?: React.ReactNode;
    cartItems?: Cart[] | null | undefined
}

const CartContext = createContext<Cart[] | any>(null)

export default function CartContextProvider(props: Props) {

    const { data, loading, error } = useFetch("https://fakestoreapi.com/carts/user/3");
    const { products, productsLoading, productsError } = useProducts();
    const [userCart, setUserCart] = useState<any[]>([]);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const extractCartProducts = (data: any) => {
        let counter = 0;
        let total = 0;
        if (!loading && !productsLoading) {
            let arr = [];
            if (!Array.isArray(data)) {
                data = new Array(data);
            }
            for (let cart of data) {
                let newArr = new Array();
                for (let cartItem of cart.products) {
                    for (let product of products) {
                        if (product.id == cartItem.productId) {
                            product.quantity = cartItem.quantity
                            newArr.push(product);
                            counter += product.quantity;
                            total += product.price * product.quantity;
                        }
                    }
                }
                setQuantity(counter);
                setTotalPrice(total)
                arr.push(newArr)
            }
            setUserCart(arr);
        }
    }


    function addCart() {
        extractCartProducts([{
            userId: 5,
            date: "2020 - 02 - 03",
            products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
        }])
        // setUserCart()
    }



    const handleDeleteCart = async () => {
        setDeleteLoading(true)
        fetch('https://fakestoreapi.com/carts/6', {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => {
                setDeleteLoading(false)
                extractCartProducts(json);
            }).catch(err => {
                console.log(err)
                setDeleteLoading(false)
            });
    }

    useEffect(() => {
        extractCartProducts(data);
    }, [productsLoading, loading, setUserCart]);
    return (
        <CartContext.Provider value={{ cartData: userCart, cartLoading: loading, cartError: error, handleDeleteCart, deleteLoading, quantity, totalPrice, addCart }}>
            {props.children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}
