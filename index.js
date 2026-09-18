import promptSync from "prompt-sync"
import { apprenants, calculerProgression } from "./src/apprenants.js";
import { ajouterApprenant } from "./src/ajouterapprenant.js";
import { afficherListeApprenants } from "./src/apprenants.js";
import { ansi, Menu } from "./src/aide.js";
import { ajouterOuModifierResultat } from "./src/resultats.js";
import { afficherTableauDeBord } from "./src/dashboard.js";
import { rechercherParNom, consulterParId } from "./src/recherche.js";
import { trierParNom, trierParProgression } from "./src/trier.js";
import fs from "fs"

function app() {

  let data_test = fs.readFileSync("./test/apprenants.json", "utf-8")
  apprenants.push(...JSON.parse(data_test))
  let prompt = promptSync()

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
        rechercherParNom(apprenants, calculerProgression, ansi, prompt)
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