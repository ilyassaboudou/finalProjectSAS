import promptSync from "prompt-sync"
import { Menu } from "./src/menu.js"
import { apprenants } from "./src/apprenants.js";
import { ajouterApprenant } from "./src/ajouter-apprenant.js";
import { afficherListeApprenants } from "./src/apprenants.js";
export let prompt = promptSync();

function app() {
  loop:
    for (;;) {
      Menu();
      const choice = prompt("Entrez votre choix : ");

      switch (choice.trim()) {
        case "1": 
          break;
        case "2": 
          afficherListeApprenants()
          break
        case "3": 
          ajouterApprenant(apprenants)
          break
        case "4": 
          break;
        case "5": 
          break;
        case "6": 
          break;
        case "7": 
          break;
        case "8": 
          break;
        case "9": 
          break;
        case "0":
          console.log("\u001b[42mAu revoir! \u001b[0m")
          break loop;
        default:
          console.log("\x1b[31mChoix invalide!\x1b[0m")
      }
    }
}

app();