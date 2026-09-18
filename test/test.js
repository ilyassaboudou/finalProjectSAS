import fs from "fs"
import promptSync from "prompt-sync"
import { calculerProgression, afficherListeApprenants } from "../src/apprenants.js"
import { trierParProgression, trierParNom } from "../src/trier.js"
import { rechercherParNom, consulterParId } from "../src/recherche.js"
import { ajouterApprenant } from "../src/ajouterapprenant.js"
import { ajouterOuModifierResultat } from "../src/resultats.js"
import { afficherTableauDeBord } from "../src/dashboard.js"
import { ansi } from "../src/aide.js"
let data_test = fs.readFileSync("./test/apprenants.json", "utf-8")
let apprenants = JSON.parse(data_test)

let prompt = promptSync()

console.log(calculerProgression(apprenants[0]))

afficherListeApprenants(apprenants, ansi)


let parProgression = trierParProgression(apprenants, calculerProgression)
afficherListeApprenants(parProgression, ansi)

let parNom = trierParNom(apprenants)
afficherListeApprenants(parNom, ansi)

rechercherParNom(apprenants, calculerProgression, ansi, prompt)

consulterParId(apprenants, calculerProgression, ansi, prompt)

ajouterApprenant(apprenants, ansi, prompt)

ajouterOuModifierResultat(apprenants, ansi, prompt)

afficherTableauDeBord(apprenants, ansi, calculerProgression)