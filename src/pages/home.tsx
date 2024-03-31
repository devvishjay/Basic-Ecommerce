import { useState, useEffect } from "react"
import ProductsGrid from "../components/productGrid/productGrid";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const loadProducts = async () => {
    try {
      const productsLoad = await fetch('https://dummyjson.com/products')
      const productsList = await productsLoad.json();
      setProducts(productsList.products);
      setLoader(false)
    } catch (error) {
      console.log("Error in Products Load function", error)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <main>
      {loader ?
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
        :
        <ProductsGrid products={products} />
      }
    </main>
  )
}

export default Home;