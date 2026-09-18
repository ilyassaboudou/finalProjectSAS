
export function ansi(code, texte) {
    return `\u001b[${code}m${texte}\u001b[0m`;
}

// affiche le menu principal du program
export function Menu() {
  console.log(`
1. Tableau de bord
2. Liste des apprenants
3. Ajouter un apprenant
4. Consulter par ID
5. Ajouter/modifier un résultat d'une journée
6. Rechercher par nom
7. Filtrer par niveau
8. Trier par progression
9. Trier par nom
0. Quitter
`);
}