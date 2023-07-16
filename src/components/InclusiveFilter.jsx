import React from "react";

// Нарушения слуха.
// Нарушения зрения.
// Нарушения речи.
// Нарушения опорно-двигательного аппарата (ОДА).
// Умственная отсталость.
// Задержки психического развития (ЗПР).
// Нарушения поведения и общения.
// Комплексные нарушения психофизического развития.

const inclusiveValue = [
  { name: "Нарушения слуха", value: "hearing" },
  { name: "Нарушения зрения", value: "visual" },
  { name: "Нарушения речи", value: "speech" },
  { name: "Нарушения опорно-двигательного аппарата (ОДА)", value: "movement" },
  { name: "Умственная отсталость", value: "mental" },
  { name: "Задержки психического развития (ЗПР)", value: "retardation" },
  { name: "Нарушения поведения и общения", value: "communication" },
  {
    name: "Комплексные нарушения психофизического развития",
    value: "psychophysical",
  },
];

export default function InclusiveFilter() {
  return (
    <div>
      <form method="get" action="" className="flex flex-col gap-4 my-4">
        <label
          htmlFor="inclusive"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Вид ОВЗ
        </label>
        <select
          name="inclusive"
          id="inclusive"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Все</option>
          {inclusiveValue.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Показать
        </button>
      </form>
    </div>
  );
}
