"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { FaBook, FaClock, FaList, FaPause, FaPlay } from "react-icons/fa";
import icon from "@/public/assets/1.png";
import { MdMoreVert } from "react-icons/md";
import TabItemComponent from "@/components/chartPage/tabItem";
// import axios from "axios";
// import Cookies from "js-cookie";

const items = [
  { id: 1, num1: 5, num2: 7, icon: <FaBook />, text: "محصولات" },
  { id: 2, num1: 3, num2: 10, icon: <FaList />, text: "جلسات" },
  { id: 3, num1: 16, num2: 24, icon: <FaBook />, text: "پروژه ها" },
];

const newProj = [
  {
    id: 1,
    title: "تاخیر در ارسال سفارش",
    description: "سفارشم با تأخیر زیاد به دستم رسید.",
  },
  {
    id: 2,
    title: "محصول آسیب‌دیده",
    description: "محصولی که دریافت کردم شکسته بود.",
  },
  {
    id: 3,
    title: "پشتیبانی ضعیف",
    description: "چندین بار تماس گرفتم اما پاسخگو نبودید.",
  },
  {
    id: 4,
    title: "مشکل در پرداخت آنلاین",
    description: "مبلغ از حسابم کسر شد اما سفارشم ثبت نشد.",
  },
  {
    id: 5,
    title: "عدم تطابق محصول با تصویر",
    description: "محصولی که دریافت کردم با تصویر داخل سایت تفاوت داشت.",
  },
  {
    id: 6,
    title: "لغو ناگهانی سفارش",
    description: "بدون دلیل سفارشم را لغو کردید.",
  },
  {
    id: 7,
    title: "افزایش بی‌دلیل قیمت",
    description: "قبل از نهایی کردن خرید، قیمت تغییر کرد.",
  },
  {
    id: 8,
    title: "عدم ارسال فاکتور",
    description: "بعد از خرید، فاکتوری دریافت نکردم.",
  },
  {
    id: 9,
    title: "کیفیت پایین محصول",
    description: "کیفیت محصول با آنچه در سایت نوشته شده تفاوت دارد.",
  },
  {
    id: 10,
    title: "عدم پاسخگویی چت آنلاین",
    description: "چندین بار پیام دادم اما کسی پاسخ نداد.",
  },
  {
    id: 11,
    title: "ارسال اشتباه محصول",
    description: "محصولی که سفارش دادم با محصولی که دریافت کردم متفاوت است.",
  },
  {
    id: 12,
    title: "مشکل در اعمال کد تخفیف",
    description: "کد تخفیفم کار نکرد و مبلغ کامل از حسابم کسر شد.",
  },
  {
    id: 13,
    title: "عدم دریافت وجه پس از مرجوعی",
    description: "محصول را مرجوع کردم اما پولم برگشت داده نشد.",
  },
  {
    id: 14,
    title: "خطا در ثبت سفارش",
    description: "در هنگام ثبت سفارش، سیستم خطا داد و موفق نشدم.",
  },
  {
    id: 15,
    title: "عدم رعایت پروتکل‌های بهداشتی",
    description: "بسته‌بندی محصول بدون رعایت نکات بهداشتی بود.",
  },
];

const PageCharts = () => {

  // const token = Cookies.get("token")

  // const getData = async () => {
  //   try {

  //     const res = await axios.get("https://dummyjson.com/auth/me", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         // "Cache-Control": "no-cache"
  //       }
  //     })
  //     return res.data

  //   } catch (error) {

  //     console.log(error);
  //   }
  // }


  //----------- with fetch Api ----------

  // let fetchData = await fetch("https://dummyjson.com/auth/me", {
  //   headers: { Authorization: `Bearer ${cookieStore?.value}` },
  //   cache: "no-store",
  // });

  // let result = await fetchData.json();

  // console.log(result);
  // console.log(Cookies.get("token"));

  //  -------------------------------------

  return (
    <div className="grid grid-cols-6 gap-10 px-10 py-10 w-[80%] mx-auto h-fit">
      {/* ------------ A ------------ */}

      {/* ---------- A - 1 --------- */}

      <div
        className={`col-span-2 bg-[#d896f7] p-5 h-[140px] rounded-xl shadow-lg flex flex-col gap-5`}
      >
        <div className="flex justify-between items-center">
          <Button
            variant="text"
            className="!font-bold IRANSansX-medium !text-black"
          >
            ویرایش
          </Button>

          <div className="flex gap-2 items-center">
            <p className="text-sm !font-bold ">زمان انتخاب شده</p>

            <FaClock className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="p-2 rounded-lg bg-white/30">
              <FaPlay className="text-xl" />
            </div>

            <div className="p-2 rounded-lg bg-white/30">
              <FaPause className=" text-xl" />
            </div>
          </div>
          <h1 className="text-5xl">01:24:12</h1>
        </div>
      </div>
      {/* ---------- A - 2 --------- */}

      <div className="col-span-4 h-[140px] flex justify-evenly bg-white py-5 rounded-xl shadow-md ">
        {items.map((item) => (
          <div
            className="flex justify-center items-center flex-col gap-3"
            key={item.id}
          >
            <div className="bg-blue-200 size-10 rounded-full flex justify-center items-center">
              {item.icon}
            </div>

            <div className="flex justify-center items-center gap-2 ">
              <h1 className="IRANSansX-medium">{item.text}</h1>
              <span className="text-2xl IRANSansX-medium text-slate-300">
                {item.num1} /{" "}
                <span className="text-black IRANSansX-medium">{item.num2}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ------------ B ------------ */}

      {/* ---------- B - 1 --------- */}

      <div className="col-span-2 bg-white p-5 h-[500px] rounded-xl shadow-lg flex flex-col gap-7 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="IRANSansX-medium">تازه ترین پروژه ها</h1>
          <MdMoreVert />
        </div>

        <div
          className="flex-col flex gap-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 scroll-custom"
          dir="ltr"
        >
          {newProj.map((item) => (
            <div
              className="flex gap-3 items-center border-b pb-5 border-slate-200 pr-5 border-w-[80%]"
              key={item.id}
              dir="rtl"
            >
              <Image src={icon} alt="None" width={50} />
              <div className="flex flex-col gap-2">
                <h1 className="IRANSansX-medium">{item.title}</h1>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- B - 2 --------- */}

      <div className="col-span-4 !w-full">
        <TabItemComponent />
      </div>
    </div>
  );
};

export default PageCharts;
