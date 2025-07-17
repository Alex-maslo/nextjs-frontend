import React from "react";
import { IUser } from "@/interfaces/IUser";

interface UserCardProps {
  user: IUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-red-500">
      <div className="card-body items-center text-center">
        <p>{user.email}</p>
        <p>{user.password}</p>
      </div>
    </div>
  );
};

export default UserCard;
