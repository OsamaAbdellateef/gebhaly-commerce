import { GetStaticProps } from "next";
import useFetch from '../../../hooks/useFetch';
import { useRouter } from "next/router";
import { Container, Typography, Grid } from '@mui/material';
import { Product } from "../../../models/models";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Spinner from '../../../components/Spinner/Spinner';


export default function CategoryDetails() {
    const { query } = useRouter();
    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${query.categoryName}`);
    if (loading) {
        return <Spinner />
    }
    return (
        <Container style={{ marginTop: "7rem" }}>
            <Typography variant="h4" sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                {query.categoryName}
            </Typography>
            <Grid sx={{ justifyContent: "center" }} container spacing={1}>
                {data.map(product => (
                    <Grid key={product.id} item xs={12} md={6} lg={4}>
                        <ProductCard key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


// export function getStaticPaths() {
//     return {
//         paths: [
//             { params: { categoryName: "electronics" } },
//             { params: { categoryName: "jewelery" } },
//             { params: { categoryName: "men's clothing" } },
//             { params: { categoryName: "women's clothing" } },
//         ],
//         fallback: true,
//     };
// }

// export const getStaticProps: GetStaticProps = async (context: any) => {
//     const { params } = context;
//     try {
//         const repsonse = await fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
//         const products = await repsonse.json();

//         return {
//             props: {
//                 products
//             }
//         }
//     } catch (err) {
//         return {
//             props: {
//                 products: []
//             }
//         }
//     }
// }