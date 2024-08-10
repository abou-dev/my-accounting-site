import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Nom du Cabinet</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/"><a className="hover:text-blue-600">Accueil</a></Link></li>
            <li><Link href="/expertise"><a className="hover:text-blue-600">Expertise Comptable</a></Link></li>
            <li><Link href="/audit"><a className="hover:text-blue-600">Audit</a></Link></li>
            <li><Link href="/conseil"><a className="hover:text-blue-600">Conseil</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-blue-600">Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
