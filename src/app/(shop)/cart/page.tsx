import { Title } from "@/components";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-0 md:px-10">
      <div className="max-w-5xl w-full mx-auto bg-red-50">
        <Title title="Carrito de compras" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Carrito */}
            <div className="flex flex-col mt-5">
              <span className="text-xl">Agregar mas items</span>
              <Link href="/" className="underline mb-5">Continua comprando</Link>
            

            {/* Items */}
            {
              productsInCart.map(product => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={"/products/" + product.images[0]}
                    alt={product.title}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px'
                    }}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <QuantitySelector quantity={product.inStock} />

                    <button className="underline mt-3">Eliminar</button>
                  </div>
                </div>
              ))
            }
            </div>
            {/* Resumen */}
            <div className="bg-white rounded-xl shadow-xl p-7">
              <h2 className="text-2xl mb-2">Resumen de orden</h2>

              <div className="grid grid-cols-2">

                <span >No. Produtos:</span>
                <span className="text-right">3 articulos</span>

                <span >Subtotal:</span>
                <span className="text-right">$ 100</span>

                <span >Impuestos (15%):</span>
                <span className="text-right">$ 100</span>

                <span className="mt-5 text-2xl">Total:</span>
                <span className="text-right mt-5 text-2xl">$ 100</span>

              </div>
              
              <Link 
                href="/checkout/address" 
                className="flex btn-primary w-full justify-center mt-5">
                  Proceder al pago
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}