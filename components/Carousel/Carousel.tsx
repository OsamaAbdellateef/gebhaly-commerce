import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Container } from "@mui/material";
import Link from "next/link";
import styles from './carousel.module.scss';
import Image from "next/image";

const imgs = ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"]
export default function DemoCarousel({ categories }: { categories: string[] }) {

    return (
        <Carousel showThumbs={false}>
            {categories.map((category, index) => <div key={index}>
                <div className={styles["carousel-img-container"]}>
                    <Container>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>
                                <h1 className={styles["carousel-heading"]}  >{category}</h1>
                                <p className={styles["carousel-description"]}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aut incidunt eius accusamus quisquam quas.</p>
                                <Box sx={{ display: "flex" }}>
                                    <Link href={`products/category/${category}`}>
                                        <a className={styles["carousel-btn"]}>
                                            view category products
                                        </a>
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ width: "300px", height: "500px", display: { md: "flex", xs: "none" }, alignItems: "center" }}>
                                <img src={imgs[index]} />
                            </Box>
                        </Box>
                    </Container>
                </div>
            </div>)}

        </Carousel>
    );

}