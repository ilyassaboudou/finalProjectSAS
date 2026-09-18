export function rechercherParNom(apprenants, calculerProgressionFn, ansiFn, prompt, afficherParId) {

    let text = prompt("Nom à rechercher : ")
    text = text.trim().toLowerCase()

    let res = apprenants.filter((apprenant) => apprenant.nomComplet.toLowerCase().includes(text))
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