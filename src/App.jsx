import { Contact } from "./components/contact";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";

function App() {
  return (
    <main className='flex flex-col gap-4 font-manrope'>
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
