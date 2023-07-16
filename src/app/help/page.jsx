import React from "react";

import InclusiveFilter from "@/components/InclusiveFilter";

const projects = [
  {
    name: "Центры реабилитации",
    initials: "ЦР",
    href: "/help/rehabilitation_centers",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Клиники",
    initials: "КЛ",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Фонды",
    initials: "ФО",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Статьи",
    initials: "СТ",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HelpPage() {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Разделы обучения</h2>
      <InclusiveFilter />
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-1 sm:gap-6 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} элементов</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
