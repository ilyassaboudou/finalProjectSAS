// affiche la liste des apprenants triée par nom
export function rechercherParNom(apprenants, calculerProgressionFn, ansiFn, prompt) {

    let text = prompt("Nom à rechercher : ")
    text = text.trim().toLowerCase()

    let res = apprenants.filter((apprenant) => apprenant.nomComplet.toLowerCase().startsWith(text))
    if (res.length == 0) {
        console.log(ansiFn(31, "Aucun apprenant trouvé"))
        return
    }

    let i =0;
    console.log()
    for (let apprenant of res) {
        afficherParId(apprenant, calculerProgressionFn, ansiFn)
        i++;
        if (i != res.length) {
            console.log("------------------------")
        }
    }
}

// fonction permet de chercher les informations d'un apprenant par son id
export function consulterParId(apprenants, calculerProgressionFn, ansiFn, prompt) {
    let id = prompt("Id de l'apprenant : ");
    let apprenant = apprenants.find((a) => Number(a.id) == id);
    if (!apprenant) {
        console.log(ansiFn(31, "Aucun apprenant trouvé avec cet Id."))
        return;
    }
    afficherParId(apprenant, calculerProgressionFn, ansiFn)
}

export function afficherParId(apprenant, calculerProgressionFn, ansiFn) {
    let { exercicesTermines, exercicesProposes, progression, challengesTermines, joursRenseignes, niveau } = calculerProgressionFn(apprenant)
    console.log(`${ansiFn(32, "Id :")} ${apprenant.id}`)
    console.log(`${ansiFn(32, "Nom :")} ${apprenant.nomComplet}`)
    console.log(`${ansiFn(32, "Ville :")} ${apprenant.ville}`)
    console.log(`${ansiFn(32, "Exercices terminés :")} ${exercicesTermines}`)
    console.log(`${ansiFn(32, "Exercices proposés :")} ${exercicesProposes}`)
    console.log(`${ansiFn(32, "Progression :")} ${progression}%`)
    console.log(`${ansiFn(32, "Challenges terminés :")} ${challengesTermines ? "oui" : "non"}`)
    console.log(`${ansiFn(32, "Journées renseignées :")} ${joursRenseignes}`)
    console.log(`${ansiFn(32, "Niveau :")} ${niveau}`)
}