import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Wrapper from '../components/Wrapper'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsContextProvider from '../context/productsContext';
import CartContextProvider from '../context/cartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <ProductsContextProvider>
    <CartContextProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </CartContextProvider>
  </ProductsContextProvider>
}

export default MyApp
