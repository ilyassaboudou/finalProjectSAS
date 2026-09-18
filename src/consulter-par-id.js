
// fonction permet de chercher les informations d'un apprenant par son id
export function consulterParId(apprenants, calculerProgressionFn, ansiFn, prompt) {
    let id = prompt("Id de l'apprenant : ");

    let apprenant = apprenants.find((a) => Number(a.id) == id);

    if (!apprenant) {
        console.log(ansiFn(31, "Aucun apprenant trouvé avec ce Id."));
        return;
    }

    let { exercicesTermines, exercicesProposes, progression, challengesTermines, joursRenseignes, niveau } = calculerProgressionFn(apprenant);

    console.log(`${ansiFn(32, "\Id :")} ${apprenant.nomComplet}`);
    console.log(`${ansiFn(32, "Ville :")} ${apprenant.ville}`);
    console.log(`${ansiFn(32, "Exercices terminés :")} ${exercicesTermines}`);
    console.log(`${ansiFn(32, "Exercices proposés :")} ${exercicesProposes}`);
    console.log(`${ansiFn(32, "Progression :")} ${progression}%`);
    console.log(`${ansiFn(32, "Challenges terminés :")} ${challengesTermines ? "oui" : "non"}`);
    console.log(`${ansiFn(32, "Journées renseignées :")} ${joursRenseignes}`);
    console.log(`${ansiFn(32, "Niveau :")} ${niveau}`);

}