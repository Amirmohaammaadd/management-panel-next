"use client";

import Image from "next/image";
import not_found from "@/public/assets/not.svg";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center flex-col gap-12">
      <Image src={not_found} alt="none" className="w-1/4" />

      <h1 className="text-2xl IRANSansX-medium text-red-600">
        متاسفانه صفحه مورد نظر یافت نشد
      </h1>

      <Button
        variant="contained"
        className="IRANSansX-medium"
        onClick={() => router.push("/")}
      >
        بازگشت به صفحه اصلی
      </Button>
    </div>
  );
};

export default NotFoundPage;
