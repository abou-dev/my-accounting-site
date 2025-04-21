"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function WhoWeAre() {
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const skillsRef = useRef(null);
  const domainRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(historyRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(visionRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(skillsRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.fromTo(domainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
     <div className="relative h-96 mb-12">
        <Image 
          src="/images/banner2.webp" 
          alt="Mission Banner" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="rounded-lg shadow-lg"
        />
        <div 
          ref={bannerRef} 
          className="absolute top-0 right-0 bg-blue-800 text-white p-8 rounded-lg shadow-lg transform translate-y-12 translate-x-12"
        >
          <h1 className="text-4xl font-bold">Qui Sommes Nous?</h1>
        </div>
      </div>

      {/* Section Histoire */}
      <section ref={historyRef} className="mb-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <Image src="/images/expert.jpeg" alt="Our History" width={300} height={300} className="rounded-full shadow-lg" />
          </div>
          <div className="md:w-2/3 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">NÔTRE HISTOIRE</h2>
            <p className="text-gray-700 leading-relaxed">
            MAC Consulting Sénégal est le fruit de l’alliance de compétences complémentaires et d’une vision partagée entre trois aqqociés aux parcours distingués. Fondé par Monsieur Abdouraoufou Ousmaila, un Expert-Comptable Diplômé et Commissaire aux Comptes avec 14 ans d'expérience au sein du cabinet Fiducia au Sénégal, le cabinet s'est rapidement imposé comme un acteur clé dans le domaine de l'expertise comptable et du conseil financier.

À ses côtés, Monsieur Amadou Samb, Expert-Comptable et Commissaire aux Comptes avec plus de 35 ans d'expérience, apporte une expertise inégalée. Reconnu comme expert auprès des cours et tribunaux, Monsieur Samb a consacré sa carrière à accompagner les entreprises dans la gestion de leurs défis financiers les plus complexes, renforçant ainsi la réputation de MAC Consulting Sénégal en matière d'audit et de conseil.

Issa Dairou, candidat à l'examen du Diplôme d’Études Supérieures en Comptabilité et Gestion Financière (DESCOGEF) 2024, complète l'équipe dirigeante. Qualifié et dynamique, il incarne la nouvelle génération de professionnels de la finance, apportant une perspective moderne et innovante aux services offerts par le cabinet.

Ensemble, ces trois associés unissent leurs forces pour offrir à leurs clients des solutions personnalisées et de haute qualité, allant de l'audit comptable et financier à la gestion des procédures administratives, en passant par le renforcement des compétences des équipes dirigeantes.

Chaque étape de notre croissance a été guidée par un engagement constant envers l'excellence et la satisfaction de nos clients. Aujourd'hui, MAC Consulting Sénégal est plus qu'un simple cabinet d'expertise comptable ; c'est un partenaire de confiance pour les entreprises cherchant à optimiser leur gestion financière et à sécuriser leur avenir.

Notre histoire est celle de la passion pour l'excellence comptable, de la synergie entre trois associés reconnus, et d'un engagement indéfectible envers la réussite de nos clients. En regardant vers l'avenir, nous continuons à innover et à nous adapter aux nouvelles réalités du marché, tout en restant fidèles à nos valeurs fondamentales d'intégrité,secret professionnel ,  de rigueur, et de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section ref={visionRef} className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">NOTRE VISION</h2>
            <p className="text-gray-700 leading-relaxed">
            Chez MAC Consulting Sénégal, notre vision est de devenir le partenaire privilégié des entreprises en quête d'excellence comptable et financière. Nous aspirons à être reconnus pour notre capacité à anticiper les besoins de nos clients, à offrir des solutions innovantes et sur-mesure, et à accompagner la croissance durable des entreprises en Afrique et au-delà.

Nous croyons en une approche proactive et éthique de la comptabilité et de l'audit, où chaque décision est guidée par l'intégrité, la rigueur, et un profond engagement envers la réussite de nos clients. Notre objectif est de contribuer activement à l'amélioration continue des pratiques financières, en renforçant les compétences des dirigeants et en soutenant les entreprises dans leurs défis les plus complexes.      La mission du cabinet MAC est d'apporter notre expertise au service du développement des organisations à travers nos missions ci-dessous décrites...
            </p>
            <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">En savoir plus...</a>
          </div>
          <div className="md:w-1/3 md:ml-8 mt-4 md:mt-0 bg-blue-900 p-6 rounded-lg shadow-lg text-center">
      <Image src="/images/logo2.jpeg" alt="MAC Logo" width={100} height={100} className="mx-auto mb-4" />
      <h3 className="text-white text-lg font-semibold mb-2"></h3>
      <p className="text-white mb-4"></p>
      <Image src="/images/hero-image.jpg" alt="Team Photo" width={300} height={200} className="rounded-lg" />
    </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section ref={skillsRef} className="mb-12 bg-blue-800 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">COMPÉTENCES DE L'ÉQUIPE</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Mission comptable</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold"> Mission d'Audit</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Mission Juridique & Fiscale</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Conseils en gestion générale</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Système d'informations</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '79%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Domaine d'Intervention */}
      <section ref={domainRef} className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">DOMAINE D'INTERVENTION</h2>
        <p className="text-gray-700 leading-relaxed">
        MAC Consulting Sénégal offre une gamme complète de services en comptabilité, audit, et conseil . Nos domaines d'intervention incluent :

Expertise Comptable : Gestion comptable, établissement des états financiers, et optimisation fiscale.
Audit et Commissariat aux Comptes : Audits financiers, opérationnels, et d'acquisition, ainsi que certification des comptes.
Conseil : Juridique,fiscale,gestion…
Formation et Renforcement des Capacités : Programmes de formation sur-mesure pour les cadres et dirigeants d'entreprise.
Nos interventions sont guidées par une approche personnalisée, adaptée aux besoins spécifiques de chaque client, afin de garantir des résultats optimaux et durables.
        </p>
        <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">En savoir plus...</a>
      </section>
     
<section className="bg-white py-12 shadow-md mt-8 relative z-20">
 
  <div className="container mx-auto text-center mt-12">
    <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">
      Contactez-nous
    </a>
  </div>
</section>


      <footer className="mt-12 text-center text-gray-600">
        <p>© 2024 MAC Sénégal. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
