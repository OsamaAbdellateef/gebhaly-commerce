import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Product } from '../../models/models';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import styles from './productCard.module.scss';
import { useCart } from '../../context/cartContext';

export default function ProductCard({ product }: { product: Product }) {
    const { addCart } = useCart();
    return (
        <Card sx={{ width: "300px", marginTop: "2rem", height: "450px", cursor: "pointer" }}>
            <Box sx={{ height: "200px", display: "flex", justifyContent: "center" }}>
                <Image src={product.image} height="200" width="200" alt={product.description} />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "1.1rem", fontWeight: "bold", margin: "1rem 0" }}>
                    {product.title.length > 55 ? product.title.substring(0, 55) : product.title}
                </Typography>
                <Typography marginY={1} variant="h6" color="text.secondary" sx={{ textTransform: "capitalize" }}>
                    {product.category}
                </Typography>
                <Typography marginY={1} variant="body1" color="text.secondary" sx={{ textTransform: "capitalize" }}>
                    available quantity: 30
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant='h5' color="text.black" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {product.price}$
                    </Typography>
                    <Box>
                        <IconButton onClick={() => { addCart() }} color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card >
    );
}
