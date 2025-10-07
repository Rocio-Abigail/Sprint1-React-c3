import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import portada from './assets/portada.Avengers.webp';

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-bottom"
      style={{ backgroundImage: `url(${portada})` }}
    >
      <Header />
      <main className="flex-grow">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

