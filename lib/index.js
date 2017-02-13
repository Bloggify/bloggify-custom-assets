"use strict";

const path = require("path");


/**
 * @param {Object} config The configuration object.
 *
 * - `scripts` (Array): 
 * - `styles` (Array): The styling configuration.
 * - `server` (Array): The server configuration.
 */

module.exports = (config, bloggify) => {
    config.scripts.concat(config.styles).forEach(c => bloggify.assets.add(path.resolve(bloggify.paths.root, c)));
    config.server.forEach(c => {
        let file = require(`${bloggify.paths.root}/${c}`);
        if (typeof file === "function") {
            file(bloggify);
        } else if (typeof file.init === "function") {
            file.init(bloggify);
        }
    });
};
