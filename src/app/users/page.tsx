import React from "react";
import { IUser } from "@/interfaces/IUser";
import UserCard from "@/components/UserCard";

const UsersPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/users`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return (
      <div className="p-5 text-center text-red-500">
        Помилка при завантаженні користувачів.
      </div>
    );
  }

  const users: IUser[] = await res.json();

  if (!users || users.length === 0) {
    return (
      <div className="p-5 text-center text-gray-500">
        Користувачів не знайдено.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
      {users.map((user: IUser) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
