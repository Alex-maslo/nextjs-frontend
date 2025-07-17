export const dynamic = "force-dynamic";

const HomePage = async () => {
  let text = "";

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    text = await res.text();
  } catch (error) {
    console.error("Fetch failed:", error);
    text = "Помилка при отриманні даних";
  }

  return (
    <div className="flex justify-center mt-10 ">
      <p className="text-4xl font-bold">{text}</p>
    </div>
  );
};

export default HomePage;
