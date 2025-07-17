import React from "react";

const HomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}`);
  const text = await res.text();

  return (
    <div className="flex justify-center mt-10 ">
      <p className="text-4xl font-bold">{text}</p>
    </div>
  );
};

export default HomePage;
