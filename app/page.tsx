"use client";

import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment, Switch } from "@mui/material";
import { MdOutlineVisibilityOff, MdVisibility } from "react-icons/md";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import img1 from "@/public/assets/img/1.jpg";
import img2 from "@/public/assets/img/1-2.jpg";
import img3 from "@/public/assets/img/1-3.jpg";
import icon from "@/public/assets/1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../app/globals.css";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

const imgData = [
  { image: img1, id: 1 },
  { image: img2, id: 2 },
  { image: img3, id: 3 },
];

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const validationAll = {
  password: {
    required: "رمز عبور الزامی هست",
    maxLength: {
      value: 15,
      message: "15 رقم بیشتر نباشه پلست",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "باید حداقل 8 رقم باشد و شامل حروف و عدد باشد",
    },
  },

  username: {
    required: "نام کاربری الزامی میباشد",
    pattern: {
      value: /^[a-zA-Z0-9_]{3,15}$/,
      message: "باید 3 تا 15 رقم باشد و شامل حروف و عدد باشد",
    },
  },

  email: {
    required: "ایمیل الزامی میباشد",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "ایمیل معتبر نیست",
    },
  },
};

export default function Home() {
  // const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [formData, setFormData] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  // });

  // -------------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: "onChange" });


  //  ---------------- Api call ----------------

  // const onSubmit = async (data: FormValues) => {
  const onSubmit = async () => {
    setLoading(true);

    // setFormData({
    //   email: data.email,
    //   password: data.password,
    //   userName: data.username,
    // });

    const data = JSON.stringify({
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dummyjson.com/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      // withCredentials: true,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);

        // toast.success("کاربر گرامی با موفقییت وارد شدید");
        const { status, data } = response;

        if (status === 200) {
          Cookies.set("token", data?.accessToken, { path: "/", sameSite: "lax" });
        }

        setTimeout(() => {
          // router.replace("/charts")
          setLoading(false);
          reset();
        }, 2000);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.status);

          toast.error("خطا در برقراری ارتباط");
        }
      } finally {
        setLoading(false);
      }
    }

    makeRequest();
  };

  // const infinitLoope = () => {
  //   while (true) {
  //     console.log("hii");

  //   }
  // }

  // infinitLoope()


  // const p = new Promise((resolve, reject) => {
  //   if (true) resolve("its ok")
  //   reject("Not Ok")
  // })

  // p.then((res) => {
  //   console.log(res);

  // }).catch((e) => {
  //   console.log(e);

  // }).finally(() => {
  //   console.log("finally");
  // })



  // const UserData = {
  //   user: "user",
  //   admin: "admin",
  //   hr: "hr",
  //   dev: "dev",
  // } as const

  // type MainUser = {
  //   role: keyof typeof UserData
  //   age: number
  //   name: string
  // }

  // const myObj: MainUser = {
  //   name: "amir",
  //   age: 12,
  //   role: "user"
  // }


  // -------------------------------

  const PasswordShow = () => (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword((prev: boolean) => !prev)}>
        {showPassword ? <MdOutlineVisibilityOff /> : <MdVisibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <>
      <div className="flex justify-center items-center  h-screen bg-[#f6f6f6]">
        <div className="bg-[#ffffff] flex justify-center items-center w-[77svw] h-[85svh] rounded-3xl shadow-xl px-10">
          {/* ------------ A ----------- */}

          <div className="w-1/2 flex flex-col items-center pb-20">
            <div className="w-5/6 gap-14 flex flex-col items-ce mr-30">
              <Image src={icon} alt="none" width={150} className="mr-28" />
              <div className="flex flex-col gap-8 w-2/3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8"
                >
                  {/* -------------------------------------- */}

                  <TextField
                    label="نام کاربری"
                    variant="outlined"
                    {...register("username", validationAll.username)}
                    error={!!errors.username} // !! for make it boolean
                    helperText={errors.username?.message}
                  />

                  {/* -------------------------------------- */}

                  <TextField
                    label="ایمیل"
                    variant="outlined"
                    {...register("email", validationAll.email)}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  // sx={{ bgcolor: "lightblue", borderRadius: 2 }} // سفارشی سازی اینپوت ها
                  />

                  {/* -------------------------------------- */}
                  <div>
                    <TextField
                      className="w-full"
                      type={showPassword ? "Password" : "text"}
                      label="رمز عبور"
                      variant="outlined"
                      slotProps={{
                        input: {
                          endAdornment: <PasswordShow />,
                        },

                        htmlInput: {
                          maxLength: 10,
                        },
                      }}
                      {...register("password", validationAll.password)}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />

                    <div className="flex justify-between">
                      <Button
                        variant="text"
                        color="custom"
                        className="IRANSansX-medium !mt-1 !text-[11px] !font-bold"
                      >
                        رمز عبور خود را فراموش کرده اید؟
                      </Button>

                      <div className="flex gap-2 mt-2">
                        <p className="IRANSansX-medium !mt-1 !text-[11px] !text-black">
                          مرا به خاطر بسپار
                        </p>
                        <Switch color="info" size="small" />
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------- */}

                  <div className="flex flex-col gap-2">
                    <Button
                      type="submit"
                      variant="contained"
                      color="custom"
                      loading={loading}
                      className="IRANSansX-medium"
                      size="large"
                    >
                      تایید
                    </Button>

                    <Link
                      href="#"
                      className="IRANSansX-medium !text-[12px] text-center"
                    >
                      حساب کاربری دارید ؟
                      <Button
                        variant="text"
                        color="custom"
                        className="IRANSansX-medium !text-[12px] !font-bold"
                      >
                        ثبت نام
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* ------------ B ----------- */}
          <div className="w-1/2">
            <Swiper
              spaceBetween={100}
              slidesPerView={1}
              loop={true}
              speed={2000}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              {imgData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Image
                    src={item.image}
                    className="rounded-3xl h-[80svh] w-full"
                    alt="None"
                    priority
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
