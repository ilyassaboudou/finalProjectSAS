export function ajouterOuModifierResultat(apprenants, ansiFn, prompt) {

    let id = Number(prompt("Id de l'apprenant : "));
    let apprenant = apprenants.find((a) => a.id === id);
    let res = { jour: 0, exercicesTermines: 0, totalExercices: 0, challengeTermine: undefined };

    if (!apprenant) {
        console.log(ansiFn(31, "Aucun apprenant trouvé avec ce Id."));
        return;
    }

    for (; ;) {
        res.jour = prompt("Jour (1 à 7) : ").trim().toLowerCase();
        switch (res.jour) {
            case "q": return;
            default:
                if (!/^[1-7]$/.test(res.jour)) {
                    console.log(ansiFn(31, "Le jour doit être un nombre entre 1 et 7."));
                    continue;
                }
                res.jour = Number(res.jour);
                break;
        }
        break;
    }

    for (; ;) {
        res.totalExercices = prompt("Total d'exercices proposés : ").trim().toLowerCase();
        switch (res.totalExercices) {
            case "q": return;
            default:
                if (!/^\d+$/.test(res.totalExercices)) {
                    console.log(ansiFn(31, "Le total d'exercices doit être un nombre valide."));
                    continue;
                }
                res.totalExercices = Number(res.totalExercices);
                if ( res.totalExercices > 100 || res.totalExercices <= 0 ) {
                    console.log(ansiFn(31, "Nombre des exercises proposé c'est pas valide"));
                    continue;
                }
                break;
        }
        break;
    }

    for (; ;) {
        res.exercicesTermines = prompt("Exercices terminés : ").trim().toLowerCase();
        let msg = ansiFn(31, "Le nombre d'exercices doit être un nombre valide.")
        switch (res.exercicesTermines) {
            case "q": return;
            default:
                if (!/^\d+$/.test(res.exercicesTermines)) {
                    console.log(msg);
                    continue;
                }
                res.exercicesTermines = Number(res.exercicesTermines);
                if (res.exercicesTermines > res.totalExercices) {
                    console.log(ansiFn(31, "Les exercices terminés ne peuvent pas dépasser le total proposé."));
                    continue;
                }
                break;
        }
        break;
    }

    for (; ;) {
        switch (prompt("Challenge terminé (oui/non) : ").trim().toLowerCase()) {
            case "q": return;

            case "oui":
            case "o":
                res.challengeTermine = true;
                break;

            case "non":
            case "n":
                res.challengeTermine = false;
                break;
            default:
                console.log(ansiFn(31, "Répondez par oui ou non."));
                continue;
        }
        break;
    }

    let result = apprenant.resultats.find((r) => r.jour == res.jour)

    if (result) {
        result.exercicesTermines = res.exercicesTermines
        result.totalExercices = res.totalExercices
        result.challengeTermine = res.challengeTermine

        console.log(ansiFn(32, `Résultat du jour ${res.jour} modifié.`))
        return;
    }

    apprenant.resultats.push(res);
    console.log(ansiFn(32, `Résultat du jour ${res.jour} ajouté.`));

}