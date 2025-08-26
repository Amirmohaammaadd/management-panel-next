import { Skeleton } from "@mui/material";

const LoadingChartPage = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-10 px-10 py-10 w-[80%] mx-auto h-fit">
        {/* ------------ A ------------ */}

        {/* ---------- A - 1 --------- */}

        <Skeleton
          variant="rounded"
          height={140}
          className="col-span-2 w-full"
        />

        {/* ---------- A - 2 --------- */}

        <Skeleton
          variant="rounded"
          width={950}
          height={140}
          className="col-span-4"
        />

        {/* ------------ B ------------ */}

        <Skeleton variant="rounded" height={500} className="col-span-2" />

        <Skeleton
          variant="rounded"
          height={500}
          className="col-span-4 !w-full"
        />
      </div>
    </>
  );
};

export default LoadingChartPage;
