
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
  console.log(`Progression moyenne : ${Math.floor(sommeProgressions / apprenants.length)}%`);
  console.log(`Solide : ${nbSolide}`);
  console.log(`En progression : ${nbEnProgression}`);
  console.log(`À renforcer : ${nbARenforcer}`);
  console.log();

  // afficher les informations de chaque apprenant
  for (let apprenant of apprenants) {

    let { exercicesTermines, exercicesProposes, progression, challengesTermines, joursRenseignes, niveau } = calculerProgression(apprenant);

    let s = joursRenseignes <= 1 ? "" : "s"
    console.log(
      `${ansiFn(36, `#${apprenant.id}`)} ${apprenant.nomComplet}, ` +
      `${progression}% ${niveau}, ` +
      `${joursRenseignes}/7 jour${s} présent${s}, ` +
      `${exercicesTermines}/${exercicesProposes} exercises fait, ` +
      `${challengesTermines} challenges faits`)
  }
}