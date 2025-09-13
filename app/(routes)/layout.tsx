import Sidebar from "../_components/sidebar";

export default function LayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#f4f6fa] h-[100svh]">
      <Sidebar />
      <div className="w-[calc(100%-300px)] overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
