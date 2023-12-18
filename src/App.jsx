import { Contact } from "./components/contact";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import phone from "./assets/images/image-hero.webp";

function App() {
  return (
    <main className='flex flex-col gap-8'>
      <Hero />
      <div className='absolute bottom-[15rem] left-5 md:max-w-xl'>
        <img src={phone} alt='phone with graph' />
      </div>
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
