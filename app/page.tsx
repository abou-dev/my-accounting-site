'use client';

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ChatBot = dynamic(() => import('react-chatbotify').then(m => m.default), {
    ssr: false
  })
 
export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
  }, [])
  // Réfs pour animations
  const textRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // États pour chat et thème nuit
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isNight, setIsNight] = useState(false)

  const flow = {
    start: {
      message:
        "👋 Bonjour ! Je suis **MACBot**. Que puis‑je faire pour vous ?",
      path: 'mainMenu'
    },

    /* ----- MENU PRINCIPAL ----- */
    mainMenu: {
      message: 'Choisissez une option ⤵️',
      options: [
        '🛠️ Découvrir nos services',
        '👥 Qui sommes‑nous ?',
        '📞 Nous contacter',
        '👋 Au revoir'
      ],
      // route dynamiquement selon l'option cliquée
      path: (p: { userInput: string }) => {
        switch (p.userInput) {
          case '🛠️ Découvrir nos services':
            return 'showServices'
          case '👥 Qui sommes‑nous ?':
            return 'showTeam'
          case '📞 Nous contacter':
            return 'showContact'
          case '👋 Au revoir':
            return 'sayGoodbye'
          default:
            return 'mainMenu'
        }
      }
    },

    /* ----- SERVICES ----- */
    showServices: {
      message:
        "Nous proposons :\n• Expertise comptable\n• Audit financier\n• Conseil fiscal\nQue voulez‑vous approfondir ?",
      path: 'askMoreService'
    },
    askMoreService: {
      options: [
        'Expertise comptable',
        'Audit financier',
        'Conseil fiscal',
        '🔙 Retour au menu'
      ],
      path: (p: { userInput: string }) => {
        switch (p.userInput) {
          case 'Expertise comptable':
            return 'detailExpertise'
          case 'Audit financier':
            return 'detailAudit'
          case 'Conseil fiscal':
            return 'detailFiscal'
          default:
            return 'mainMenu'
        }
      }
    },
    detailExpertise: {
      message:
        '🔍 **Expertise comptable** :\nTenue comptable, bilans, déclarations… Autre chose ?',
      path: 'askMoreService'
    },
    detailAudit: {
      message:
        '🔍 **Audit financier** :\nContrôle de la fiabilité de vos états financiers. Autre chose ?',
      path: 'askMoreService'
    },
    detailFiscal: {
      message:
        '🔍 **Conseil fiscal** :\nOptimisation et conformité fiscale. Autre chose ?',
      path: 'askMoreService'
    },

    /* ----- ÉQUIPE ----- */
    showTeam: {
      message:
        "👤 Notre équipe est menée par **M. Ousmaila**, expert‑comptable depuis 14 ans. Souhaitez‑vous ses coordonnées ?",
      options: ['Oui', 'Non'],
      path: (p: { userInput: string }) => (p.userInput === 'Oui' ? 'showContact' : 'mainMenu')
    },

    /* ----- CONTACT ----- */
    showContact: {
      message:
        '📞 Contactez‑nous :\n• **Mail** : macconsultingsenegal@macconsulting.sn\n• **Téléphone** : +221 33 864 66 33\nAutre chose ?',
      path: 'mainMenu'
    },

    /* ----- FIN ----- */
    sayGoodbye: {
      message: "Merci d'avoir utilisé **MACBot** ! Excellente journée 😊",
      end: true
    }
  }

  // Détecte si on est en mode nuit
  useEffect(() => {
    const h = new Date().getHours()
    setIsNight(h >= 18 || h <= 6)
  }, [])

  // Animation du titre et du background
  useEffect(() => {
    if (textRef.current) {
      const texts = ["Management", "Audit", "Consulting", "Cabinet d'expert comptable"]
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 })
      texts.forEach((t, i) =>
        tl.to(textRef.current!, { duration: 2, text: t, delay: i === 0 ? 0 : 1 })
      )
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 10, ease: "power1.inOut", yoyo: true, repeat: -1 }
      )
    }
  }, [])

  const toggleChat = () => setIsChatOpen((o) => !o);

  return (
    <div className={isNight ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      {/* HERO */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <h1 ref={textRef} className="text-4xl font-bold font-serif z-10">
          MAC Sénégal
        </h1>
        <p className="mt-4 text-red-900 font-sans z-10">
          Votre partenaire en expertise comptable et conseil
        </p>
        <div
          ref={imageRef}
          className="absolute inset-0 h-[70vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/banner.jpg')" }}
        />
      </section>

      {/* BOUTON CHAT */}
      <button
        onClick={() => setIsChatOpen((o) => !o)}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg z-50"
      >
        {isChatOpen ? 'Fermer le chat' : 'Chat avec nous'}
      </button>

      {/* FENÊTRE CHAT */}
      <div
        className={`fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl z-40 transition-transform duration-300 ${isChatOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <ChatBot flow={flow} />
      </div>
    


      {/* Presentation Section */}
      <section className="bg-white py-12 shadow-md mt-8 relative z-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-4">MAC CONSULTING Sénégal</h2>
            <p className="text-gray-700 mb-4">
              Monsieur Abdouraoufou Ousmaila est un Expert-Comptable Diplômé et Commissaire aux Comptes, avec 14 ans d'expérience acquise au sein du cabinet Fiducia au Sénégal. Tout au long de sa carrière, il a dirigé de nombreuses missions d'expertise comptable, d'audit, et de conseil, apportant son expertise à divers clients.
            </p>
            <p className="text-gray-700">
              Fort de cette riche expérience, Monsieur Ousmaila a décidé de créer son propre cabinet d'expertise comptable, MAC Consulting Sénégal, afin de continuer à offrir des services de haute qualité en comptabilité et audit.
            </p>
            <p className="text-gray-700 mt-4">
              Monsieur Ousmaila est titulaire du Diplôme d'Expertise Comptable et Financière (DECOFI) et du Diplôme d'Études Supérieures en Comptabilité et Gestion Financière (DESCOGEF) de l'Union Économique et Monétaire Ouest-Africaine (UEMOA) , du Master 2 en Audit et Contrôle de gestion  de L'Université Cheick Anta Diop de Dakar et du diplôme d'état dénommé DSC (Diplôme Supérieur de comptabilité).
            </p>
          </div>
          <div className="md:w-1/3 p-6">
            <Image
              src="/images/expert.jpeg"
              alt="Mr. Abdouraoufou Ousmaila"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <p className="text-center mt-4 text-sm font-semibold">
              M. Abdouraoufou Ousmaila
            </p>
            <p className="text-center text-sm text-gray-600">
              Expert comptable diplômé, M. Abdourafou est l'associé gérant du cabinet MAC
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 shadow-md mt-8 relative z-20">
        <div className="section-container bg-gray-100 py-12 shadow-md">

          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-6 shadow-lg">
            <div className="md:w-1/2 p-4">
            <Image src="/images/service1.jpg" alt="Hand on a calculator" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold text-center text-black mb-4 font-serif">
                CE QUE NOUS FAISONS ?
              </h2>
              <p className="text-gray-700 text-center text-lg">
                Le cabinet MAC intervient spécifiquement dans les missions comptables et audits,
                les missions juridiques et fiscales et missions de conseils.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Remaining Sections */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Notre Localisation</h2>
          <p className="text-gray-700 mb-8">
            Rue de Kaolack, Dakar, Sénégal
          </p>
          <div className="relative w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.308773073359!2d-17.458403999999998!3d14.695122600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec17292831c8eaf%3A0x960ad7390cc73910!2sCabinet%20Fiducia!5e0!3m2!1sfr!2scm!4v1723321185369!5m2!1sfr!2scm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/auhiAmBkvXMeC3bQA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Voir la carte en grand
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div className="bg-white p-6 text-black rounded-lg shadow">
          <Image
            src="/images/service3.jpg"
            width={500}
            height={300}
            alt="Service 3"
            style={{ objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold mt-4">Expertise Comptable</h2>
          <p className="mt-2">
            Bénéficiez de services comptables de qualité.
          </p>
        </div>
        <div className="bg-white p-6 text-black rounded-lg shadow">
          <Image
            src="/images/service1.jpg"
            width={500}
            height={300}
            alt="Service 1"
            style={{ objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold mt-4">Audit Financier</h2>
          <p className="mt-2">
            Nos services d'audit financier garantissent la transparence et la conformité.
          </p>
        </div>
        <div className="bg-white p-6 text-black rounded-lg shadow">
          <Image
            src="/images/service2.jpg"
            width={500}
            height={300}
            alt="Service 2"
            style={{ objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold mt-4">Conseil Fiscal</h2>
          <p className="mt-2">
            Optimisez vos processus fiscaux avec notre expertise.
          </p>
        </div>

      </section>
<section className="bg-white py-12">
  <div className="container mx-auto flex justify-center items-center">
    <div className="h-40 w-64 bg-gray-100 text-black rounded-lg shadow-md flex flex-col items-center justify-center">
      <h3 className="text-4xl font-bold">100%</h3>
      <p className="mt-2 text-lg">Client Satisfait</p>
    </div>
  </div>
</section>




          <div className="text-center mt-16">
            <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
              Contactez-nous
            </a>
          </div>
        </div>

  );
}

