import {torgeternity} from "./module/config.js";
import torgeternityItem from "./module/torgeternityItem.js"
import torgeternityItemSheet from "./module/sheets/torgeternityItemSheet.js";
import torgeternityActorSheet from "./module/sheets/torgeternityActorSheet.js";

Hooks.once("init", function() {
    console.log("torgeternity | Initializing Torg Eternity System");

    CONFIG.torgeternity = torgeternity;
    CONFIG.Item.entityClass = torgeternityItem;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("torgeternity", torgeternityItemSheet, {makeDefault: true});

    Actors.unregisterSheet("core", ItemSheet);
    Actors.registerSheet("torgeternity", torgeternityActorSheet, {makeDefault: true});
    Handlebars.registerHelper('concat', function() {
        /* Helper function for concatenation. For Localization. */
        var outStr = '';
        for (var arg in arguments) {
            if (typeof arguments[arg] != 'object') {
                outStr += arguments[arg];
            }
        }
        return outStr;
    });    
});