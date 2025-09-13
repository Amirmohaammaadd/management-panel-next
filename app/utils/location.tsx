// import ToastComp from "./location-toast-comp";

// // import toast from "react-hot-toast";
// const isBrowser = typeof window !== "undefined";

// export const getUserLocation = () => {
//   if (isBrowser) {
//     return new Promise<{
//       coords: {
//         latitude: number;
//         longitude: number;
//       };
//     }>((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
//       .then((position) => {
//         return {
//           lat: position.coords.latitude,
//           long: position.coords.longitude,
//         };
//       })
//       .catch(() => {
//         // toast.error("امکان دسترسی به موقعیت مکانی وجود ندارد");
//         // return {
//         //   lat: 35.754,
//         //   long: 51.328,
//         // };
//       });
//   }
// };

// export const userLocation = await getUserLocation();

// -----------------------------------------------

import toast from "react-hot-toast";
const isBrowser = typeof window !== "undefined";

type UserLocation = { lat: number; long: number } | null

export const getUserLocation = (): Promise<UserLocation> => {
  if (!isBrowser) return Promise.resolve(null);

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      () => {
        toast.error("امکان دسترسی به موقعیت مکانی وجود ندارد");
        // resolve({ lat: 35.754, long: 51.328 })
        resolve(null)
      }
    );
  });
};
