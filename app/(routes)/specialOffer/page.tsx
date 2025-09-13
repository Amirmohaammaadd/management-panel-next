"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Button, Drawer, Form, List, Spin, Switch } from "antd";
import axios from "axios";

type FilterData = {
  priceFilter: boolean;
  categoryId: boolean;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
};

// گرفتن دیتا از API
const fetchProducts = async (filters: FilterData) => {
  const params = new URLSearchParams();
  if (filters.priceFilter) params.set("price", "100");
  if (filters.categoryId) params.set("categoryId", "11");

  const url =
    filters.priceFilter || filters.categoryId
      ? `https://api.escuelajs.co/api/v1/products/?${params.toString()}`
      : `https://api.escuelajs.co/api/v1/products`;

  const res = await axios.get(url);
  return res.data as Product[];
};



const PageSpecialOffer = () => {


  // const [form] = Form.useForm<FilterData>();
  // const [openDrawer, setOpenDrawer] = useState(false);

  // const searchParams = useSearchParams();
  // const router = useRouter();

  // // تبدیل searchParams به state فیلتر
  // const getFiltersFromParams = () => {
  //   return {
  //     priceFilter: searchParams.get("price") === "100",
  //     categoryId: searchParams.get("categoryId") === "11",
  //   };
  // };

  // const [filterValue, setFilterValue] = useState(
  //   getFiltersFromParams()
  // );

  // // همگام‌سازی state با URL وقتی URL تغییر کنه
  // useEffect(() => {
  //   setFilterValue(getFiltersFromParams());
  //   form.setFieldsValue(getFiltersFromParams());
  // }, [searchParams]);

  // // کوئری برای گرفتن محصولات
  // const { data: products, isLoading } = useQuery({
  //   queryKey: ["products", filterValue],
  //   queryFn: () => fetchProducts(filterValue),
  //   staleTime: 5000,
  // });

  // // تغییر فیلتر و آپدیت URL
  // const handleFilterChange = (_: any, values: FilterData) => {
  //   setFilterValue(values);

  //   const params = new URLSearchParams();
  //   if (values.priceFilter) params.set("price", "100");
  //   if (values.categoryId) params.set("categoryId", "11");

  //   router.replace("?" + params.toString());
  // };


  const [form] = Form.useForm<FilterData>();
  const [openDrawer, setOpenDrawer] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  // گرفتن فیلترها از searchParams
  const getFiltersFromParams = (): FilterData => ({
    priceFilter: searchParams.get("price") === "100",
    categoryId: searchParams.get("categoryId") === "11",
  });

  // استفاده مستقیم از initialValues برای Form
  const initialFilters = getFiltersFromParams();
  const [filterValue, setFilterValue] = useState<FilterData>(initialFilters);

  useEffect(() => {
    const filters = getFiltersFromParams();
    setFilterValue(filters);
  }, [searchParams]);

  // safe object برای queryKey
  const safeFilterValue = {
    priceFilter: !!filterValue.priceFilter,
    categoryId: !!filterValue.categoryId,
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", safeFilterValue],
    queryFn: () => fetchProducts(safeFilterValue),
    staleTime: 5000,
  });

  // تغییر فیلتر و آپدیت URL
  const handleFilterChange = (_: any, values: FilterData) => {
    const newFilters = {
      priceFilter: !!values.priceFilter,
      categoryId: !!values.categoryId,
    };
    setFilterValue(newFilters);

    const query: string[] = [];
    if (newFilters.priceFilter) query.push("price=100");
    if (newFilters.categoryId) query.push("categoryId=11");

    router.replace(query.length > 0 ? `?${query.join("&")}` : "/user");
  };

  return <>


    <div className="flex flex-col justify-center items-center p-10">
      <Button
        className="mt-5"
        style={{ backgroundColor: "orange", color: "#fff" }}
        onClick={() => setOpenDrawer((prev) => !prev)}
      >
        اعمال فیلترها
      </Button>

      <Drawer
        title="Search Drawer"
        placement="bottom"
        closable
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <Form
          form={form}
          className="flex flex-col justify-center items-center w-full"
          onValuesChange={handleFilterChange}
          initialValues={initialFilters} // فقط این کافی است
        >
          <Form.Item name="priceFilter" label="قیمت دار:">
            <Switch />
          </Form.Item>

          <Form.Item name="categoryId" label="دارای عنوان:">
            <Switch />
          </Form.Item>
        </Form>
      </Drawer>

      <div className="md:w-1/2 mx-auto mt-5">
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <Spin size="large" />
          </div>
        ) : (
          <List
            bordered
            dataSource={products}
            renderItem={(item) => (
              <List.Item>
                {item.title} - ${item.price}
              </List.Item>
            )}
          />
        )}
      </div>
    </div>

  </>;
};

export default PageSpecialOffer;
