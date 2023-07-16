import InclusiveFilter from "@/components/InclusiveFilter";
import React from "react";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

function RehabilitationCenter({ center }) {
  return (
    <li
      key={center.email}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <a
        href={`/help/rehabilitation_centers/${center.uuid}`}
        className="flex w-full items-center justify-between space-x-6 p-6"
      >
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {center.name}
            </h3>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            {center.address}
          </p>
        </div>
      </a>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`mailto:${center.email}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Почта
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${center.phone}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

const RehabilitationCentersPage = async () => {
  const data = await fetch(
    "http://127.0.0.1:8000/api/v1/helps/rehabilitation_centers/",
    {
      cache: "no-cache",
    }
  );
  const json = await data.json();
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">
        Реабилитационные центры
      </h2>
      <InclusiveFilter />
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
      >
        {json.map((center) => (
          <RehabilitationCenter key={center.uuid} center={center} />
        ))}
      </ul>
    </div>
  );
};

export default RehabilitationCentersPage;
