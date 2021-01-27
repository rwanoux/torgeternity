/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadTemplates = async function () {

    // Define template paths to load
    const templatePaths = [

        // ACTOR--stormknights
        "systems/torgeternity/templates/actors/stormknight/main.hbs",
        "systems/torgeternity/templates/actors/stormknight/attributes.hbs",
        "systems/torgeternity/templates/actors/stormknight/skills.hbs",


    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};