export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    thumbnail:string;
    title: string;

  }
  
  export interface ProductDetails {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: [];
    thumbnail:string;
    title: string;

  }
  
  
  export interface ProductCardProps {
    product: Product;
  }
  
  export interface ProductGridProps {
    products: Product[];
  }

  
    
  export interface ProductDetailsProps {
    product: ProductDetails;
  }