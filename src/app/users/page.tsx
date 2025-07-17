import React from "react";
import { IUser } from "@/interfaces/IUser";
import UserCard from "@/components/UserCard";

const UsersPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/users`);
  const users: IUser[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
      {users.map((user: IUser) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
