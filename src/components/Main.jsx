import { motion } from "framer-motion";
import escudo from "../assets/Escudo-capitan.png";

function Main() {
  return (
    <section className="min-h-[70vh] flex items-center px-6 md:px-10 text-white text-center md:text-left">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Imagen animada */}
         <motion.img
          src={escudo}
          alt="Escudo Capitán América"
          className="w-64 mx-auto md:mx-0"
          initial={{ scale: 0, rotate: 180, y: -20 }}
          animate={{ scale: 1, rotate: 0, y: 20 }}  
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        />

        {/* Texto + botón */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            ¿Tienes lo necesario para salvar al mundo? <br className="hidden md:block" />
            Únete a nuestra academia de superhéroes y enfréntate a las amenazas más poderosas
            con tecnología de punta y trabajo en equipo. <strong>¡Haz historia!</strong>
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Únete ahora
          </a>
        </div>

      </div>
    </section>
  );
}

export default Main;


