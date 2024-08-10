// app/page.tsx
import { motion } from 'framer-motion';
import React, { createContext, useContext } from 'react';

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12">
      <motion.section 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Votre partenaire en comptabilité, audit et conseil</h2>
        <p className="text-gray-700">Nous fournissons des services de comptabilité, d'audit et de conseil adaptés à vos besoins spécifiques.</p>
        <motion.button 
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          Contactez-nous
        </motion.button>
      </motion.section>
      {/* Ajoutez d'autres sections ici */}
    </main>
  );
}
