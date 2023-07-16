import ProfileTabs from "@/components/ProfileTabs";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Ваш профиль
      </h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Тут вы можете ввести данные о себе, чтобы другие участники платформы
        могли с вами связаться.
      </p>
      <ProfileTabs current="profile" />
    </div>
  );
}
