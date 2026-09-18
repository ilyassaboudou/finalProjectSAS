
export function ansi(code, texte) {
    return `\u001b[${code}m${texte}\u001b[0m`;
}

// affiche le menu principal du program
export function Menu() {
  console.log(`
1. Tableau de bord
2. Liste des apprenants
3. Ajouter un apprenant
4. Ajouter/modifier un résultat d'une journée
5. Consulter par ID
6. Rechercher par nom
7. Trier par progression
8. Trier par nom
9. Recherche par niveau
0. Quitter
`);
}