import ProductDetailsView from "../components/productView/productDetailsView";
import { redirect, useLoaderData } from "react-router-dom";
const ProductDetailPage = () => {
  const productData = useLoaderData();

  return (
    <main>
      {!productData ? <p>Loading</p>
      :
       <ProductDetailsView product={productData}/>
      }
    </main>
  )
}

export default ProductDetailPage

export async function loader({params}) {
  try {
   const dataLoad= await fetch(`https://dummyjson.com/products/${params.id}`)
    const loadedData= await dataLoad.json();
    return loadedData;
  } catch (error) {
    console.log("Error in Products Load function", error)
    redirect('/')
  }
  
}