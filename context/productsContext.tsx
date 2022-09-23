import { GetStaticProps } from 'next';
import { createContext, useContext } from 'react';
import { Product } from '../models/models';
import useFetch from '../hooks/useFetch';

interface Props {
    children?: React.ReactNode;
    data?: Product[] | null | undefined
}

const ProductsContext = createContext<Product[] | any>(null)

export default function ProductsContextProvider(props: Props) {
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
    return (
        <ProductsContext.Provider value={{ products: data, loadingProducts: loading, errorProducts: error }}>
            {props.children}
        </ProductsContext.Provider>
    )
}
export const useProducts = () => {
    return useContext(ProductsContext)
}
// export const getStaticProps: GetStaticProps = async () => {
//     // getting all products
//     const res = await fetch("https://fakestoreapi.com/products");
//     const products = await res.json();
//     return {
//         props: {
//             products
//         }
//     }
// }

