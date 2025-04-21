"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function MissionsJuridiquesEtFiscales() {
  const titleRef = useRef(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(sectionsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  const services = [
    {
      title: "Droit des sociétés",
      items: [
        "Choix de la forme sociale",
        "Droit des sociétés",
        "Assistance à toutes opérations de constitution, augmentation de capital, cession de parts, fusion, transformation, dissolution et liquidation",
      ],
    },
    {
      title: "Droit fiscal",
      items: [
        "Conseil et suivi en matière de législation du travail",
        "Présentation de la nomenclature des impôts et taxes",
        "Assistance aux options fiscales à faire au moment de la création de la société",
        "Assistance du contribuable à l'occasion de vérifications",
        "Participation à l'établissement des déclarations fiscales",
        "Études et consultations sur les problèmes d'ordre fiscal",
      ],
    },
    {
      title: "Droit social",
      items: [
        "Consultation sur les problèmes spécifiques à la sécurité sociale et à la prévoyance sociale",
        "Formation professionnelle continue",
        "Système d'intéressement",
        "Établissement des déclarations de cotisations sociales",
        "Problèmes de licenciement",
        "Étude et rédaction de contrats de travail",
        "Assistance à l'occasion de réclamation et de vérification",
        "Assistance des bulletins de paie et de la comptabilité des salaires",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative h-64">
        <Image
          src="/images/banner.jpg"
          layout="fill"
          objectFit="cover"
          alt="Bannière du cabinet"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 ref={titleRef} className="absolute inset-0 flex items-center justify-center text-4xl text-white font-bold z-10">
          Missions juridiques et fiscales
        </h1>
      </div>
      
      {/* Services Section */}
      <section className="container mx-auto py-12 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">NOS COMPÉTENCES SUR LES MISSIONS JURIDIQUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
            key={index}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-red-600 mb-4">{service.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          
          ))}
        </div>
      </section>
    </div>
  );
}
