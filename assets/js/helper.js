export const myfetch = async(url, options = null) => {
    let response;

    //prøv dette
    try {
        if (!options) {
            //Henter data fra api og sætter det til at vente
            response = await fetch(url);
        } else {
            response = await fetch(url, options);
        }
        //Finder daten fra json og sætter den til at vente
        const result = await response.json();
        //Viser result
        return result;
    }

    //Giver fejlmeddeling
    catch (err) {
        console.error(`Fejl i myfech: ${err}`)
    }
}