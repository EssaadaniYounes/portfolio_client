import { AuthHeader, SideBar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-[90.6%]">
      <AuthHeader />
      <section className="h-full flex">
        <SideBar />
        <section className="flex-1 overflow-auto">{children}</section>
      </section>
    </main>
  );
}
