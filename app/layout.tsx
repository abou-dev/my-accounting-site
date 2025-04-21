import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <head>
        <title>MAC Sénégal</title>
        <meta name="description" content="MAC Sénégal - Expertise comptable et conseil à Dakar" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="bg-gray-100 text-gray-800">
        {/* Header */}
        <header className="bg-sky-800 shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" legacyBehavior>
              <a>
                <Image src="/images/logo2.jpeg" alt="Logo MAC Sénégal" width={150} height={40} />
              </a>
            </Link>
            <nav className='relative font-roboto text-sm bg-blue shadow-lg transform transition-transform duration-300 hover:scale-105'>
  <ul className="flex space-x-6 text-base"> {/* Reduced the text size */}
    <li>
      <Link href="/" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Accueil</a>
      </Link>
    </li>
    
    <li className="relative group z-50"> {/* Ensure high z-index for visibility */}
      <a href="/nos-missions" className="text-white hover:text-blue-800">Nos missions</a>
      <ul className="absolute left-0 mt-2 w-48 bg-blue-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto text-sm shadow-lg z-50">
        <li className="p-1 hover:bg-blue-700"><a href="/mission-comptable">Missions comptables</a></li>
        <li className="p-1 hover:bg-blue-700"><a href="/missions-juridiques">Missions juridiques et fiscales</a></li>
        <li className="p-1 hover:bg-blue-700"><a href="/mission-conseil">Conseil en gestion</a></li>
        <li className="p-1 hover:bg-blue-700"><a href="#">Système d'information</a></li>
      </ul>
    </li>
    
    <li>
      <Link href="/who-are-we" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">A propos</a>
      </Link>
    </li>
    
   
    <li>
      <Link href="/join-us" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Rejoignez-nous</a>
      </Link>
    </li>
    
    <li>
      <Link href="/contact" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Contact us</a>
      </Link>
    </li>
  </ul>
</nav>

          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-300 py-10">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-700">Secteurs d'activité</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Consommation</li>
                <li>Énergie, infrastructures et environnement</li>
                <li>Services financiers</li>
                <li>Santé et sciences de la vie</li>
                <li>Industrie</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700">Notre expertise</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Audit & assurance</li>
                <li>Conseil</li>
              </ul>
            </div>
            <div>
             
                <a href="/join-us" className="font-bold text-gray-700">
                Rejoignez nos équipes
        </a>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li> <a href="/join-us">Candidatures spontanées</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700"><a href="/contact">Nous contacter</a></h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><a href="/contact">Enquiry form</a></li>
                <li>Nos bureaux</li>
                <li>Notre équipe</li>
              </ul>
            </div>
          </div>
          
          <div className="container mx-auto mt-10 text-center">
            <h4 className="font-bold text-gray-700 mb-4">Suivez-nous</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/mac-consulting-sn" className="hover:text-blue-600">
                <img src="/images/linkedin.png" alt="LinkedIn" className="h-6 w-6"/>
              </a>
              <a href="#" className="hover:text-blue-600">
                <img src="/images/twitter.png" alt="X" className="h-6 w-6"/>
              </a>
              <a href="#" className="hover:text-blue-600">
                <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6"/>
              </a>
              <a href="#" className="hover:text-blue-600">
                <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6"/>
              </a>
              <a href="#" className="hover:text-blue-600">
                <img src="/images/youtube.png" alt="YouTube" className="h-6 w-6"/>
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-600">© 2024 MAC Sénégal. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
