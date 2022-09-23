import { Container, Grid, Typography } from '@mui/material';
import { useProducts } from '../../context/productsContext';
import { Product } from "../../models/models";
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';

export default function ProductsPage() {
    const { products, loadingProducts, productsError } = useProducts();
    if (loadingProducts) {
        return <Spinner />
    }
    return (
        <Container sx={{ marginTop: "5rem" }}>
            <Typography marginY={3} variant='h4' sx={{ fontWeight: "600", textAlign: "center" }} >
                Products Page
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                {products.map((product: Product) => (
                    <Grid item key={product.id} sx={{ justifyContent: "center" }} container spacing={2} xs={12} md={6} lg={4}>
                        <ProductCard key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}