export default function MissionsComptables() {
    return (
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Nos compétences dans les missions de comptabilités et d ' Audit</h1>
        <p className="text-gray-700 text-center mb-12">
          Le cabinet MAC possède plusieurs références dans les domaines de la comptabilité et de l’audit.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Bloc 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 h-1 w-20 bg-orange-500 -mt-4"></div>
            <h2 className="text-xl font-bold text-orange-600 mb-4">Participations à l'établissement des comptes</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mise en place du plan adapté à l’entreprise</li>
              <li>Surveillance et tenue de comptabilités</li>
              <li>Assistance comptable de toute nature</li>
              <li>Établissement des situations périodiques, des bilans et comptes de résultat</li>
              <li>Consolidations - Établissements des comptes de groupes</li>
              <li>Établissement du tableau de financement</li>
              <li>Appuis et controle des services comptables</li>
            </ul>
          </div>
  
          {/* Bloc 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 h-1 w-20 bg-orange-500 -mt-4"></div>
            <h2 className="text-xl font-bold text-orange-600 mb-4">Révisions, certifications et attestations</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Commissariat aux apports</li>
              <li>Révision avant prise de participation</li>
              <li>Révision des procédures de contrôle interne</li>
              <li>Commissariat aux comptes</li>
              <li>Audit contractuel des comptes</li>
              <li>Compilation des comptes</li>
            </ul>
          </div>
  
          {/* Bloc 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 h-1 w-20 bg-orange-500 -mt-4"></div>
            <h2 className="text-xl font-bold text-orange-600 mb-4">Expertise et conseil</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Appui à la consolidation et à la fusion</li>
              <li>Révision des procédures de contrôle interne</li>
              <li>Évaluation d’entreprises et de titres de sociétés</li>
              <li>Formation et assistance</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  