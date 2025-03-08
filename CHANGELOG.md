# Changelog

Toutes les modifications notables à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Non publié]

### Ajouté

- Configuration initiale du workflow GitHub Actions pour le déploiement automatique sur un VPS
- Documentation pour le déploiement et la configuration

## [0.1.0] - AAAA-MM-JJ

### Ajouté

- Configuration initiale du projet Next.js
- Structure de base de l'application
- Mise en place de Prisma ORM pour la gestion de la base de données
- Implémentation des fonctionnalités de base pour les produits:
  - Récupération des produits
  - Récupération d'un produit par ID
  - Récupération des produits mis en avant
  - Recherche de produits
- Configuration Docker pour le développement local et le déploiement

### Modifié

- N/A

### Corrigé

- N/A

## Comment utiliser ce fichier

### Types de changements

- `Ajouté` pour les nouvelles fonctionnalités.
- `Modifié` pour les changements dans les fonctionnalités existantes.
- `Déprécié` pour les fonctionnalités qui seront bientôt supprimées.
- `Supprimé` pour les fonctionnalités maintenant supprimées.
- `Corrigé` pour les corrections de bugs.
- `Sécurité` en cas de vulnérabilités.

Pour chaque nouvelle version, ajoutez une section au début du fichier avec ce format:

```
## [x.y.z] - AAAA-MM-JJ

### Ajouté
- Description des nouvelles fonctionnalités

### Modifié
- Description des modifications

### Déprécié
- Description des fonctionnalités dépréciées

### Supprimé
- Description des fonctionnalités supprimées

### Corrigé
- Description des bugs corrigés

### Sécurité
- Description des problèmes de sécurité résolus
```

Supprimez les sections qui ne sont pas utilisées dans une version particulière.
