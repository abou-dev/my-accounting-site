# my-accounting-site

Site vitrine statique pour le cabinet MAC Consulting Sénégal, spécialisé dans l'expertise comptable, l'audit et le conseil. Le projet est développé en HTML, CSS, JavaScript et utilise le framework Next.js (rendu statique). Il est déployé sur un serveur distant OVH.

---

## 📁 Structure du projet

```bash
my-accounting-site/
├── .git/                          # Dossier Git
├── .next/                         # Dossier généré par Next.js (build)
├── public/                        # Images, favicons, etc.
├── pages/                         # Pages HTML (rendu statique)
├── styles/                        # Fichiers CSS (ex: globals.css)
├── .gitignore                     # Fichiers exclus du repo
├── README.md                      # Ce fichier
├── package.json                   # Dépendances npm & scripts
├── next.config.js                 # Config de Next.js
└── ...
```

---

## ✨ Mise en place du projet (localement)

### 1. Prérequis

- Node.js >= 18.x
- npm >= 9.x
- Git

### 2. Cloner le repo

```bash
git clone https://github.com/abou-dev/my-accounting-site.git
cd my-accounting-site
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer en développement

```bash
npm run dev
```

Accéder au site via `http://localhost:3000`

---

## 🚀 Génération statique et déploiement

Le site est généré statiquement via :

```bash
npm run build
```

Cela crée le dossier `.next` et met les fichiers statiques dans `.next/static`.

Ensuite, pour exporter les fichiers HTML/CSS/JS de manière statique (sans serveur Node), on utilise :

```bash
npm run export
```

Un dossier `out/` sera généré, prêt à être copié sur le serveur OVH ou vers GitHub Pages / Netlify / Vercel.

### ⚡ Déploiement sur OVH

1. Se connecter en FTP ou SSH
2. Aller dans le dossier `/www`
3. Copier les fichiers du dossier `out/`
4. S'assurer que les droits sont corrects :
   ```bash
   chmod -R 755 .
   find . -type f -exec chmod 644 {} \;
   ```
5. Créer un `.htaccess` (si non présent) avec :
   ```apache
   Options -Indexes
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ index.html [QSA,L]
   ```

---

## 📅 Déploiement via GitHub

### 1. Initialiser le dépôt (si ce n'est pas déjà fait)

```bash
git init
git remote add origin https://github.com/abou-dev/my-accounting-site.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 2. GitHub Pages

Si tu veux déployer via GitHub Pages :

1. Génère le site avec `npm run export`
2. Pousse les fichiers du dossier `out/` sur une branche à part (`gh-pages`) ou un repo dédié
3. Active GitHub Pages depuis les paramètres du repo

---

## 🔧 Stack technique

- Next.js (rendu statique)
- Tailwind CSS (via CDN ou build)
- HTML5 / CSS3 / JS Vanilla
- Hosting OVH (mutualisé)

---

## 🚑 Support & contact

Ce site a été conçu pour le cabinet MAC Consulting Sénégal. Pour toute question ou contribution :

- [Email](mailto:macconsultingsenegal@macconsulting.sn)
- [Site](https://macconsulting.sn)
- [LinkedIn](https://www.linkedin.com/company/mac-consulting-sn/)

---

## 📚 Licence

Code publié sous licence MIT.

