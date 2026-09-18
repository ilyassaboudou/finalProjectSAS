// Array où les données seront sauvegardées
export let apprenants = []

// ça va afficher la liste des apprenants
export function afficherListeApprenants(apprens, ansiFn) {
  if (apprens.length == 0) {
    console.log(ansiFn(42, "Aucun apprenant enregistré!"))
    return
  }

  for (let a of apprens) {
    let { progression, niveau } = calculerProgression(a);
    afficherApprenant(a, progression, niveau, ansiFn)
  }
}

// cette fonction fais la calculation de la progression d'un apprenant
export function calculerProgression(apprenant) {
  let exercicesTermines = 0
  let exercicesProposes = 0
  let challengesTermines = 0

  for (let res of apprenant.resultats) {
    exercicesTermines += res.exercicesTermines
    exercicesProposes += res.totalExercices
    if (res.challengeTermine) challengesTermines++
  }

  let progression = exercicesProposes ? Math.round(exercicesTermines / exercicesProposes * 100) : 0
  let joursRenseignes = apprenant.resultats.length
  let niveau = progression >= 80 ? "Solide" : progression >= 50 ? "En progression" : "À renforcer"

  return { exercicesTermines, exercicesProposes, progression, challengesTermines, joursRenseignes, niveau }
}

// afficher les apprenants
export function afficherApprenant(a, progression, niveau, ansiFn) {
  console.log(ansiFn(32, `${a.id}. ${a.nomComplet}`) + `: ${a.ville}, ${progression}%, ${niveau}`)
}