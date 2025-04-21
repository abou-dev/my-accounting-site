"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function NosMissions() {
  const missionsRef = useRef<(HTMLDivElement | null)[]>(Array.from({ length: 6 }, () => null));
  const bannerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(missionsRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 relative z-10">
        <div className="relative absolute inset-0 h-[70vh] overflow-hidden z-0">

        <Image 
          src="/images/banner3.webp" 
          alt="Mission Banner" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="rounded-lg shadow-lg z-10"
        />
        <div 
          ref={bannerRef} 
          className="absolute top-0 right-0 bg-blue-800 text-white p-8 rounded-lg shadow-lg transform translate-y-12 translate-x-12 z-20"
        >
          <h1 className="text-4xl font-extrabold text-center mb-12 text-white">Nos Missions au Sénégal</h1>
        </div>
      </div>

    
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Missions comptables",
            content: [
              "Expertise-conseil",
              "Participation à l'établissement des comptes",
              "Révisions, Certifications et Attestations",
              "etc ..."
            ],
            bgColor: "bg-blue-100",
            textColor: "text-blue-800",
            linkColor: "text-blue-600"
          },
          {
            title: "Missions juridiques",
            content: [
              "Assistance à toute opération de constitution",
              "Droit des sociétés",
              "etc ..."
            ],
            bgColor: "bg-red-100",
            textColor: "text-red-800",
            linkColor: "text-red-600"
          },
          {
            title: "Missions fiscales",
            content: [
              "Études et consultations sur les problèmes d'ordre fiscal",
              "Participation à l'établissement des déclarations fiscales",
              "etc ..."
            ],
            bgColor: "bg-blue-900",
            textColor: "text-white",
            linkColor: "text-white"
          },
          {
            title: "Missions d'audit",
            content: [
              "Audits spécialisés",
              "Révision des procédures de contrôle interne",
              "Audit contractuel des comptes",
              "etc ..."
            ],
            bgColor: "bg-blue-100",
            textColor: "text-blue-800",
            linkColor: "text-blue-600"
          },
          {
            title: "Système d'information",
            content: [
              "Audit du système d'information de gestion",
              "Conception des applications de gestion",
              "etc ..."
            ],
            bgColor: "bg-red-100",
            textColor: "text-red-800",
            linkColor: "text-red-600"
          },
          {
            title: "Missions de conseil",
            content:[
              "Conseils en gestion (Missions générales)",
              "Elaboration des procédures",
              "Formation aux logiciels métier",
              "etc ..."
            ],
            bgColor: "bg-blue-900",
            textColor: "text-yellow-300",
            linkColor: "text-white"
          }
        ].map((mission, index) => (
          <div
            key={index}
            className={`${mission.bgColor} p-6 rounded-lg shadow-lg`}
            ref={(el) => {
              missionsRef.current[index] = el;
            }}
          >
            <h2 className={`text-xl font-bold mb-4 ${mission.textColor}`}>{mission.title}</h2>
            <ul className={`list-disc list-inside ${mission.textColor}`}>
              {mission.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="/mission-comptable" className={`${mission.linkColor} mt-4 inline-block`}>En savoir plus...</a>
          </div>
        ))}
      </div>
   
      <section className="bg-white py-12 shadow-md mt-8 relative z-20">
        <div className="container mx-auto text-center mt-12">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRVf-Rpc9pmUSRF8WVx7yUj9eSn5gBKv9B1cZiIAed3zg72A/viewform?usp=pp_url&entry.1217822314=ESMT&entry.354754785=aboupetit@live.fr&entry.1283850393=Audit&entry.1255677718=2000000"
                  width="100%" height="600px">Chargement…</iframe>
        </div>
      </section>

    </div>
  );
}
