import SelectMood from "./components/select-mood";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center w-full md:p-0 p-4">
      <div className="text-center space-y-10">
        <span className="text-6xl">🥭</span>
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-yellow-700">
          غالب اور آم
        </h1>
        <h2 className="text-sm">
          I'll help you choose where to eat 🍲 based on your mood
        </h2>
        <SelectMood />
      </div>
    </main>
  );
}
