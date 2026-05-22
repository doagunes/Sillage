import MemoryForm from "./components/MemoryForm";

function App() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <h1 className="mb-8 text-center text-5xl font-bold text-[#2f2a26]">
          Sillage
        </h1>

        <MemoryForm />
      </div>
    </main>
  );
}

export default App;