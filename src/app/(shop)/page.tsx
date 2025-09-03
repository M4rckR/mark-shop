import { inter, titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <>
      <h1 className={`${inter.className}`}>Hola Mundo</h1>
      <h1 className={`${titleFont.className}`}>Hola Mundo</h1>
    </>
  );
}
