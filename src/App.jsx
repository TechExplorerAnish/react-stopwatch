import Stopwatch from "./components/StopWatch";

function App() {
  return (
    <>
      <h1 className="bg-blue-500 text-white font-mono font-semibold text-center text-2xl">
        stop watch{" "}
      </h1>
      <div className="container flex items-center justify-center  min-h-[calc(100vh-2rem)] ">
        <Stopwatch></Stopwatch>
      </div>
    </>
  );
}
export default App;
