"use client";

import { useEffect, useState } from "react";
import { getUserLocation } from "@/app/utils/location";

const PageSettings = () => {
  const [location, setLocation] = useState<{ lat: number; long: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const loc = await getUserLocation();
      if (loc) {
        setLocation(loc);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  if (!location) {
    return <p>برای مشاهده محتوا، لطفا دسترسی به موقعیت مکانی بدهید.</p>;
  }

  return (
    <div>
      <h1>UI اصلی صفحه محصولات</h1>
      <p>Lat: {location.lat}, Long: {location.long}</p>
    </div>
  );
};

export default PageSettings ;