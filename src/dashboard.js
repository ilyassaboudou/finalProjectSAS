
// afficher tableau de bord avec les statistiques générales de chaque apprenant
export function afficherTableauDeBord(apprenants, ansiFn, calculerProgression) {
  if (apprenants.length === 0) {
    console.log(ansiFn(42, "Aucun apprenant enregistré !"))
    return;
  }

  let sommeProgressions = 0;
  let nbSolide = 0;
  let nbEnProgression = 0;
  let nbARenforcer = 0;

  for (let apprenant of apprenants) {

    let { progression, niveau } = calculerProgression(apprenant);
    sommeProgressions += progression;

    switch (niveau) {
      case "Solide":
        nbSolide++;
        break;
      case "En progression":
        nbEnProgression++;
        break;
      case "À renforcer":
        nbARenforcer++;
        break;
    }
  }

  console.log(`\n---------- ${ansiFn(33, "TABLEAU DE BORD")} ----------`);
  console.log(`Nombre total d'apprenants : ${apprenants.length}`);
  console.log(`Progression moyenne : ${Math.round(sommeProgressions / apprenants.length)}%`);
  console.log(`Solide : ${nbSolide}`);
  console.log(`En progression : ${nbEnProgression}`);
  console.log(`À renforcer : ${nbARenforcer}`);

  let tableau = []

  // afficher les informations de chaque apprenant
  for (let apprenant of apprenants) {

    let { progression, niveau } = calculerProgression(apprenant);
    let jExists = apprenant.resultats.map((r) => r.jour)
    let jManquants = [1, 2, 3, 4, 5, 6, 7].filter((j) => !jExists.includes(j))
    let challengesManquants = apprenant.resultats.filter((r) => !r.challengeTermine).map((r) => r.jour);
    tableau.push({
      ID: apprenant.id,
      Nom: apprenant.nomComplet,
      Progression: `${progression}%`,
      Niveau: niveau,
      "Jours manquants": jManquants.join(", ") || "Aucun",
      "Challenges manquants": challengesManquants.join(", ") || "Aucun"
    })

  }
  console.table(tableau);
}