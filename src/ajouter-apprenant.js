
import { prompt } from "../index.js"

// fonction ajoute un nouvel apprenant au list 'apprenants'
export function ajouterApprenant(apprenants) {
    
    let nomComplet, ville;

    for (;;) {
        nomComplet = prompt("Nom et prénom : ")
        if (nomComplet.toLowerCase() === "q") return
        if (NomCorrecte(nomComplet.trim())) break
        console.log("\x1b[41mLe nom n'est pas valide !\x1b[0m")
        console.log("(q: quitter)")
    }

    for (;;){
        ville = prompt("Ville: ")
        if(ville.toLowerCase() === "q") return
        if (VilleCorrecte(ville.trim())) break
        console.log("\u001b[41mLa ville n'est pas valide !\u001b[0m")
        console.log("(q: quitter)")
    }

    let newAppr = { id: apprenants.length + 1, nomComplet: nomComplet.trim(), ville: ville.trim(), resultats: []};
    apprenants.push(newAppr);
    console.log(`\u001b[42mApprenant "${newAppr.nomComplet}" ajouté avec succès.\u001b[0m`)
}

// si le nom n'est pas valid return false
function NomCorrecte(nom) {
    return nom && nom.length < 30 && /^[a-zA-Z\s]+$/.test(nom) && nom.split(/\s+/).length >= 2 
}

// si le nom de la ville n'est pas valid return false
function VilleCorrecte(ville) {
    return ville && ville.length < 20 && /^[a-zA-Z\s]+$/.test(ville) 
}