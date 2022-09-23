import styles from './cartCard.module.scss';
import Image from 'next/image';
import { Product } from '../../models/models';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function CartCard({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(product.quantity ? product.quantity : 0);
    const [loading, setLoading] = useState(false);

    const handleUpdateCart = async (operation: "increase" | "decrease") => {
        try {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/carts/3", {
                method: "PUT",
                body: JSON.stringify(
                    {
                        userId: "3",
                        date: "2019 - 12 - 10",
                        products: [{ productId: "3", quantity: operation == "increase" ? quantity + 1 : quantity - 1 }]
                    }
                )
            });
            const data = await res.json();
            if (operation == "increase") {
                setQuantity(q => q + 1);
            } else {
                setQuantity(q => q - 1);
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)

        }

    }


    return (
        <Box marginY={4} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, maxWidth: "300", boxShadow: "0 0 1px #0000004f", borderRadius: "5px", padding: "1rem", margin: "1rem" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image width={200} height={200} src={product.image} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1", padding: "1rem", justifyContent: "space-between" }}>
                <Box sx={{ alignItems: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}>{product.title}</Typography>
                    <Typography marginY={1} variant='h6'>{product.price}$</Typography>
                </Box>
                <Box marginY={2} sx={{ display: "flex", alignItems: "center" }}>
                    <Typography marginRight={1} sx={{ fontWeight: "bold" }} variant='h6'>Quantity:</Typography>
                    <button disabled={quantity == 1 || loading} className={styles["cart-dec"]}
                        onClick={() => {
                            handleUpdateCart("decrease")
                        }} >-</button>
                    <Typography marginX={1} sx={{ fontWeight: "bold" }} variant="body1">{quantity}</Typography>
                    <button disabled={loading} className={styles["cart-inc"]} onClick={() => {
                        handleUpdateCart("increase")
                    }} >+</button>
                </Box>
                {/*
                <Box sx={{ marginLeft: "auto" }}>
                    <Button variant="contained" color="error">
                        Delete Item
                    </Button>
                </Box>
                */}
            </Box>
        </Box>
    )
}