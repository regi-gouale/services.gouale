# Services Gouale

Une application web moderne construite avec Next.js pour gérer des services et produits.

## À propos du projet

Services Gouale est une plateforme qui permet aux organisations de gérer leurs produits et services. L'application est construite avec les technologies modernes et suit les meilleures pratiques de développement.

## Technologies utilisées

- **Frontend**: Next.js 15, React 19, TailwindCSS, Shadcn UI
- **Backend**: Node.js, Prisma ORM
- **Base de données**: PostgreSQL
- **Déploiement**: Docker, GitHub Actions

## Fonctionnalités

- Gestion des produits et services
- Système d'authentification utilisateur
- Interface d'administration pour les organisations
- Recherche et filtrage des produits
- API RESTful sécurisée

## Mise en route

### Prérequis

- Node.js 18+
- Docker et Docker Compose (pour le développement local avec base de données)
- Compte GitHub (pour le déploiement)

### Installation

1. Clonez le dépôt:

```bash
git clone https://github.com/votre-nom/services.gouale.git
cd services.gouale
```

2. Installez les dépendances:

```bash
npm install
```

3. Configurez vos variables d'environnement:

```bash
cp .env.example .env.local
```

4. Lancez la base de données PostgreSQL avec Docker:

```bash
docker compose up -d db
```

5. Exécutez les migrations Prisma:

```bash
npx prisma migrate dev
```

6. Démarrez le serveur de développement:

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Structure du projet

```
/app                    # Routes et composants Next.js
/components             # Composants React réutilisables
/lib                    # Utilitaires et fonctions d'aide
/prisma                 # Schéma et migrations de base de données
/public                 # Fichiers statiques
```

## Déploiement

### Déploiement sur un VPS avec GitHub Actions

Ce projet inclut un workflow GitHub Actions pour le déploiement automatique sur un VPS lorsque des modifications sont poussées sur la branche main.

#### Configuration requise:

1. Ajoutez ces secrets à votre dépôt GitHub:

   - `SSH_PRIVATE_KEY`: Votre clé SSH privée pour se connecter au VPS
   - `VPS_HOST`: Adresse IP ou nom d'hôte de votre VPS
   - `VPS_USERNAME`: Nom d'utilisateur pour la connexion SSH au VPS
   - `DEPLOY_PATH`: Chemin sur le VPS où l'application sera déployée

2. Assurez-vous que Docker et Docker Compose sont installés sur votre VPS

3. Assurez-vous que l'utilisateur VPS a les permissions appropriées pour:

   - Cloner depuis votre dépôt GitHub
   - Exécuter des commandes Docker

4. Configurez vos variables d'environnement sur le VPS en créant un fichier `.env` dans le répertoire de déploiement avec:
   ```
   DATABASE_URL=votre_url_de_base_de_données
   NODE_ENV=production
   APP_PORT=3000  # Ou le port de votre choix
   ```

Le GitHub Action va:

- Se connecter à votre VPS via SSH
- Copier les fichiers nécessaires (docker-compose.yml, Dockerfile)
- Cloner ou mettre à jour le code du dépôt
- Construire et démarrer les conteneurs Docker

## Contribution

Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue pour signaler un bug ou proposer une amélioration.

## Licence

Ce projet est sous licence [MIT](LICENSE).
