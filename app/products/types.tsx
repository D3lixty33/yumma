export type InputProps = {
  products: string;
  description: string;
};

export type AddFormProps = {
  children: React.ReactNode;
};

export type Product = {
  id: string
  created_at: number
  product: string
  description : string
  price? : number
}

export interface TableProductsClientProps {
  products: Product[];
}