"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(TextPlugin);

export default function RejoignezNous() {
  const formRef = useRef<HTMLFormElement>(null); // Référence pour le formulaire
  const bannerRef = useRef<HTMLDivElement>(null); // Référence pour la bannière
  const formContainerRef = useRef<HTMLDivElement>(null); // Référence pour la div contenant le formulaire

  const sendEmail = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        'service_gf5f12g', // Remplacez par votre ID de service EmailJS
        'template_t2bnzxx', // Remplacez par votre ID de template EmailJS
        formRef.current,
        'A8XcpxkDXf7PKQWOf' // Remplacez par votre clé publique EmailJS
      )
      .then((result) => {
          console.log(result.text);
          alert('Candidature envoyée avec succès !');
      }, (error) => {
          console.log('Failed:', error.text);
          alert('Une erreur est survenue. Veuillez réessayer.');
      });
      e.currentTarget.reset(); // Réinitialiser le formulaire après l'envoi
    } else {
      alert('Formulaire non trouvé. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    if (bannerRef.current && formContainerRef.current) {
      gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
      gsap.fromTo(formContainerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="relative h-96 mb-12">
        <Image 
          src="/images/banner2.webp" 
          alt="Join Banner" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="rounded-lg shadow-lg"
        />
        <div 
          ref={bannerRef} 
          className="absolute top-0 right-0 bg-blue-800 text-white p-8 rounded-lg shadow-lg transform translate-y-12 translate-x-12"
        >
          <h1 className="text-4xl font-bold">Rejoignez Notre équipe</h1>
        </div>
      </div>
      <p className="text-center text-gray-700 mb-12">
        Nous sommes toujours à la recherche de talents pour rejoindre notre équipe. Si vous êtes passionné par la comptabilité, l'audit ou le conseil, nous serions ravis de recevoir votre candidature.
      </p>
      
      <div ref={formContainerRef} className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Envoyez-nous votre CV</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input type="text" id="user_name" name="user_name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="from_email" name="from_email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Télécharger votre CV</label>
            <input type="file" id="cv" name="cv" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optionnel)</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Envoyer la candidature
          </button>
        </form>
      </div>
    </div>
  );
}
