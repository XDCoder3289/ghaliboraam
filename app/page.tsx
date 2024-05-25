import SearchRestaurant from "./components/search-restaurant";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center w-full md:p-0 p-4">
      <div className="text-center space-y-8">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-yellow-300">
          Can't decide where to eat?
        </h1>
        <h2 className="text-sm md:w-2/3  mx-auto">
          This app is here to help! Just select your mood and location, and the
          app will find the perfect restaurant based on your mood.
        </h2>
        <SearchRestaurant />
      </div>
    </main>
  );
}
