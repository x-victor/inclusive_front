import React from "react";

const RehabilitationCentersDetail = async ({ params }) => {
  const data = await fetch(
    "http://127.0.0.1:8000/api/v1/helps/rehabilitation_centers/" +
      params.centerId,
    {
      cache: "no-cache",
    }
  );
  const center = await data.json();
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {center.address}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {center.name}
        </h1>

        <div
          className="mt-10 max-w-2xl"
          dangerouslySetInnerHTML={{ __html: center.description }}
        ></div>
      </div>
    </div>
  );
};

export default RehabilitationCentersDetail;
