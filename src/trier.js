export function trierParNom(apprenants) {

    let cloned = structuredClone(apprenants)
    cloned.sort((a, b) => {
        if (a.nomComplet > b.nomComplet) return 1;
        if (a.nomComplet < b.nomComplet) return -1;
        return 0;
    })

    return cloned
}


export function trierParProgression(apprenants, calculerProgressionFn) {
    return [...apprenants].sort((a, b) =>
        calculerProgressionFn(b).progression - calculerProgressionFn(a).progression
    );
}
