import { notFound } from "next/navigation";

import { ProductGrid } from "@/components";
import { initialData } from "@/seed/seed";
import { titleFont } from "@/config/fonts";


interface Props {
  params: {
    id: string;
  }
}

export default async function CategoryPage({ params }: Props) {

  const { id } = await params;

  const products = initialData.products.filter(product => product.gender === id);

  if(products.length === 0){
    notFound()
  }

  return (
    <div>
      <div className="py-12 space-y-8">
        <h1 className={`${titleFont.className} text-4xl font-bold`}>La ropa que te hace sentir {
          id === 'men' ? 'hombre' : id === 'women' ? 'mujer' : 'niño'
        }</h1>
        {
          id === 'men' && (
            <p>Seleccion para varones</p>
          )
        }
        {
          id === 'women' && (
            <p>Seleccion para mujeres</p>
          )
        }
        {
          id === 'kid' && (
            <p>Seleccion para niños</p>
          )
        }
      </div>
      <ProductGrid products={products}/>
    </div>
  );
}