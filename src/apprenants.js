// Array où les données seront sauvegardées
export let apprenants = []

// ça va afficher la liste des apprenants
export function afficherListeApprenants() {
  if (apprenants.length == 0) {
    console.log(`\u001b[42mAucun apprenant enregistré!\u001b[0m`)
    return
  }
  for (let a of apprenants) {
    let { progression, niveau } = calculerProgression(a);
    console.log(`\x1b[32m${a.id}. ${a.nomComplet}\x1b[0m — ${a.ville} — ${progression}% — ${niveau}`)
  }
}

// cette fonction fais la calculation de la progression d'un apprenant
function calculerProgression(apprenant) {
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