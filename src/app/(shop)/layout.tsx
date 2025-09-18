import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />

      <div className="container mx-auto max-w-8xl px-4">
       {children}
      </div>
      </main>
  );
}