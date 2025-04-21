"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function MissionsDeConseil() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>(Array(4).fill(null));

  useEffect(() => {
    gsap.fromTo(sectionsRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Missions de conseil</h1>
      
      <p className="text-gray-700 text-center mb-8">
        Nos compétences en mission de conseils couvrent diverses spécialisations, notamment l'organisation, la planification stratégique, la formation, et autres missions à haute valeur ajoutée.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Conseils en gestion (Missions générales)",
            content: [
              "Assistance dans la prévention et le traitement des difficultés de l'entreprise",
              "Contribution à la protection du patrimoine de l'entreprise",
              "Projets d'investissement : coût et rentabilité",
              "Analyse de coûts, de marges, de rentabilité",
              "Mise en place des outils de pilotage de la performance",
              "Tableaux de bord, contrôle budgétaire",
              "Elaboration des procédures"
            ],
            bgColor: "bg-red-100",
            textColor: "text-red-800",
            linkColor: "text-red-600"
          },
          {
            title: "Conseils en finance",
            content: [
              "Formation professionnelle continue",
              "Conception et mises à jour des business plans",
              "Constitution de dossiers de subventions, réduction de droits de mutation",
              "Diagnostic financier",
              "Audit des sinistres et des provisions techniques au niveau des assurances"
            ],
            bgColor: "bg-blue-100",
            textColor: "text-blue-800",
            linkColor: "text-blue-600"
            },
            {
              title: "Relations avec les organismes bancaires et financiers",
              content: [
                "Établissement de plans de trésorerie",
                "Analyse de structure financière",
                "Choix des modes de financement et établissement de dossiers de crédit",
                "Construction de plans de financement à moyen et long terme"
              ],
              bgColor: "bg-blue-900",
              textColor: "text-white",
              linkColor: "text-white"
            },
            {
              title: "Système d'information de gestion",
              content: [
                "Formation aux logiciels métier",
                "Conception des applications de gestion",
                "Audit du système d'information de comptabilité et de gestion"
              ],
              bgColor: "bg-red-100",
              textColor: "text-red-800",
              linkColor: "text-red-600"
            }
          ].map((section, index) => (
            <div
              key={index}
              className={`${section.bgColor} p-6 rounded-lg shadow-lg`}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
            >
              <h2 className={`text-xl font-bold mb-4 ${section.textColor}`}>{section.title}</h2>
              <ul className={`list-disc list-inside ${section.textColor}`}>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
        <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
          Contactez-nous
        </a>
      
        </div>
      </div>
    );
  }
  
