import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Students from "./components/Students/Students";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Header />
        <Hero />
        <Students></Students>
        <Footer />
      </div>
    </>
  );
}

export default App;
