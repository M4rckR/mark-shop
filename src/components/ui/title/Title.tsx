import { titleFont } from "@/config/fonts";

interface props {
    title: string;
    subtitle?: string;
    className?: string;
}

export const Title = ({ title, subtitle, className }: props) => {
  return (
    <div className={` ${className} mt-3`}>
        <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}>{title}</h1>
        {
          subtitle && (
            <h3 className="font-semibold text-xl mb-10">{subtitle}</h3>
          )
        }
    </div>
  )
}
