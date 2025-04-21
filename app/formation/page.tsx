"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Formation() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(
      sectionsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 font-sans">
      <h1 className=""></h1>
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
          <h1 className="text-4xl font-extrabold text-center mb-12 text-white">CATALOGUE DE FORMATION</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
  ref={(el) => {
    if (el) sectionsRef.current.push(el);
  }}
  className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600"
>
  <h2 className="text-2xl font-semibold text-orange-600 mb-4">Audit et contrôle de gestion</h2>
  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>Audit interne et les travaux de fin d’exercice (Revue comptable, juridique et fiscale)</li>
            <li>Audit et contrôle interne dans le secteur public</li>
            <li>Méthodologie de conduite d’une mission d’audit</li>
            <li>Conduite efficace d’une mission d’audit interne des achats</li>
            <li>Auditeur face aux difficultés de reconnaissance des produits d’exploitation</li>
          </ul>
        </div>
        <div
  ref={(el) => {
    if (el) sectionsRef.current.push(el);
  }} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Comment travailler, collaborer et coordonner avec ses auditeurs externes (commissaires aux comptes) dans l’intérêt et profit de l’entreprise</li>
            <li>Audit énergétique et tableau de bord de maîtrise de la consommation d’énergie au sein de l’entreprise</li>
            <li>Audit des états financiers selon l'OHADA</li>
            <li>L'audit qualité interne selon la norme ISO19011:2022</li>
            <li>Place et rôle du contrôleur et Auditeur interne dans la gouvernance de l’entreprise</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div
  ref={(el) => {
    if (el) sectionsRef.current.push(el);
  }} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Finance, comptabilité et fiscalité</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Mise en œuvre de la loi organique relative aux lois de finances (LOLF)</li>
            <li>La gestion axée sur les résultats (GAR): le management de la performance</li>
            <li>La préparation, la programmation et l’exécution budgétaire axée sur le résultats(CDMT, budget-programmé)</li>
            <li>Audit et contrôle de gestion des finances publiques</li>
            <li>Gestion de dette publique</li>
          </ul>
        </div>
        <div
  ref={(el) => {
    if (el) sectionsRef.current.push(el);
  }}className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Outils de gestion financière et budgétaire</li>
            <li>Prévisions macroéconomiques et cadrage budgétaire</li>
            <li>La gestion, le suivi et l’analyse des budgets</li>
            <li>Évaluation du système de gestion des finances publiques</li>
            <li>Budget et comptabilité des établissements publics et introduction aux normes IPSAS</li>
            <li>Contrôle, Audit et évaluation de la dépense publique</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div
  ref={(el) => {
    if (el) sectionsRef.current.push(el);
  }}className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Passation des marchés</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>La passation et exécution des marchés: les réformes de la banque mondiale et de la BAD</li>
            <li>Marchés publics: prévention et gestion des réclamations et des litiges</li>
            <li>La gestion des risques liés aux marchés publics</li>
            <li>Passation des marchés publics: Audit et contrôle</li>
          </ul>
        </div>
        <div
  ref={(el) => {
    if (el) sectionsRef.current.push(el);
  }}className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Qualité et normes en marchés publics</li>
            <li>Exécution des marchés publics: suivi des contrats</li>
            <li>Gouvernance, management de projets et marchés publics</li>
            <li>Tableau de bord en achat public</li>
            <li>Préparation et utilisation pratique des contrats</li>
            <li>Management des partenariats public privé (PPP)</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-16">
        <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
          Contactez-nous
        </a>
      </div>
    </div>
  );
}
