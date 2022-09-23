import type { GetStaticProps, NextPage } from 'next';
import Carousel from '../components/Carousel/Carousel';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories").then(res => {
      return res.json();
    }).then(data => {
      setLoading(false);
      setCategories(data)
    }).catch(err => {
      console.log(err);
      setLoading(false)
    })
  }, []);
  if (loading) {
    return <Spinner />
  }
  return (
    <div>
      <Carousel categories={categories} />
    </div>
  )
}
