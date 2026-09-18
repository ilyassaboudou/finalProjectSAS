
// fonction ajoute un nouvel apprenant au list 'apprenants'
export function ajouterApprenant(apprenants, ansiFn, prompt) {

    let nomComplet, ville;
    for (; ;) {
        nomComplet = prompt("Nom et prénom : ")
        nomComplet = nomComplet.trim().replace(/\s+/g, ' ')
        if (nomComplet.toLowerCase() === "q") return
        if (NomCorrecte(nomComplet)) break
        console.log(ansiFn(41, "Le nom n'est pas valide !"))
        console.log("(q: quitter)")
    }

    for (; ;) {
        ville = prompt("Ville: ")
        ville = ville.trim().replace(/\s+/g, ' ')
        if (ville.toLowerCase() === "q") return
        if (VilleCorrecte(ville)) break
        console.log(ansiFn(41, "La ville n'est pas valide !"))
        console.log("(q: quitter)")
    }

    let newAppr = { id: apprenants.length + 1, nomComplet: nomComplet, ville: ville, resultats: [] };
    apprenants.push(newAppr);
    console.log(ansiFn(42, `Apprenant "${newAppr.nomComplet}" ajouté avec succès.`))
}

// si le nom n'est pas valid return false si non return true
function NomCorrecte(nom) {
    return nom && nom.length < 30 && /^[a-zA-ZÀ-ÿ\s]+$/.test(nom) && nom.split(/\s+/).length >= 2
}

// si le nom de la ville n'est pas valid return false si non return true
function VilleCorrecte(ville) {
    return ville && ville.length < 20 && /^[a-zA-ZÀ-ÿ\s]+$/.test(ville)
}