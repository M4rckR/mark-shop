import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { SizeSelector } from "@/components/product/size-selector/SizeSelector";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { ProductSlideShow,  } from "@/components/product/slideshow/ProductSlideShow";
import { ProductMobileSlideShow } from "@/components/product/slideshow/ProductMobileSlideShow";

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {

  const { slug } = await params;
  const product = initialData.products.find(product => product.slug === slug);

  if(!product){
    notFound()
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-4 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">

        {/* Desktop Slideshow */}
        <ProductSlideShow
        className="hidden md:block"
          images={product.images}
          title={product.title}
        />

        {/* Mobile Slideshow */}
        <ProductMobileSlideShow
          className="block md:hidden"
          images={product.images}
          title={product.title}
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-4 md:col-span-2">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        <p className="mb-5 text-lg">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector 
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={2} />


        {/* Boton de agregar al carrito */}
        <button className="btn-primary mt-5 cursor-pointer">
          Agregar al carrito
        </button>
        <h3 className="mt-5 font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}