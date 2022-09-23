import { Container, Typography, Grid, Box, Button } from "@mui/material";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/CartCard/CartCard";
import Spinner from "../../components/Spinner/Spinner";
export default function Cart() {
  console.log("compponent is pre-rendered")
  const { cartData, cartLoading, handleDeleteCart, deleteLoading, quantity, totalPrice } = useCart();
  if (cartLoading || deleteLoading) {
    return <Spinner />
  }
  return (
    <Container sx={{ marginTop: "5rem" }}>
      <Typography sx={{ fontWeight: "bold" }} variant="h4">
        Cart
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={12} lg={9}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {cartData?.map((cart: any) => (
                <Box key={Math.random()} sx={{ margin: "2rem 0", display: "flex", flexDirection: "column", boxShadow: "0 0 5px rgba(0, 0, 0, 0.292)" }}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>{
                    cart.map((product: any) => (
                      <Grid key={Math.random()}>
                        <Grid item xs={12}>
                          <CartCard product={product} />
                        </Grid>
                      </Grid>
                    ))
                  }
                  </Box>
                  <Box sx={{ margin: "1rem", marginLeft: "auto" }}>
                    <Button onClick={() => {
                      handleDeleteCart()
                    }}
                      variant="contained" color="error">
                      Delete Cart
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>

          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              display: "felx",
              flexDirection: "column",
              boxShadow: "0 0 10px #0000004f",
              padding: "1rem",
              borderRadius: "5px",
            }}
            marginTop={4}
          >
            <Typography variant="h6">Checkout</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <Typography variant="h6">items</Typography>
              <Typography variant="h6">{quantity}</Typography>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
              marginY={1}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                total price
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                {Number(localStorage.getItem("total")).toFixed(2)}$
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>


    </Container>
  );
}
