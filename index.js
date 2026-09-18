import promptSync from "prompt-sync"
import { apprenants, calculerProgression } from "./src/apprenants.js";
import { ajouterApprenant } from "./src/ajouter-apprenant.js";
import { afficherListeApprenants } from "./src/apprenants.js";
import { consulterParId, afficherParId } from "./src/consulter-par-id.js";
import { ansi, Menu } from "./src/aide.js";
import { ajouterOuModifierResultat } from "./src/ajouter-modifier-res.js";
import { afficherTableauDeBord } from "./src/tableau-board.js";
import { rechercherParNom } from "./src/recherche-nom.js";
import { trierParNom, trierParProgression } from "./src/trier.js";

import fs from "fs"
let prompt = promptSync();

function app() {

  let data_test = fs.readFileSync("./test/apprenants.json", "utf-8")
  apprenants.push(...JSON.parse(data_test))

  loop:
  for (; ;) {
    Menu()
    const choice = prompt("Entrez votre choix : ");

    switch (choice.trim()) {
      case "1":
        afficherTableauDeBord(apprenants, ansi, calculerProgression)
        break;
      case "2":
        afficherListeApprenants(apprenants, ansi)
        break
      case "3":
        ajouterApprenant(apprenants, ansi, prompt)
        break
      case "4":
        ajouterOuModifierResultat(apprenants, ansi, prompt)
        break;
      case "5":
        consulterParId(apprenants, calculerProgression, ansi, prompt)
        break;
      case "6":
        rechercherParNom(apprenants, calculerProgression, ansi, prompt, afficherParId)
        break;
      case "7":
        let s = trierParProgression(apprenants, calculerProgression)
        afficherListeApprenants(s, ansi)
        break;
      case "8":
        let sorted = trierParNom(apprenants)
        afficherListeApprenants(sorted, ansi)
        break;
      case "0":
        console.log(ansi(42, "Au revoir!"))
        break loop;
      default:
        console.log(ansi(31, "Choix invalide!"))
    }
  }
}

app();