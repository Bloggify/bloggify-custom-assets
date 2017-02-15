"use strict";

const path = require("path");


/**
 * init
 * Initializes the whole configuration.
 *
 * @param {Object} config The configuration object.
 *
 * - `scripts` (Array): An array of paths to client JavaScript files.
 * - `styles` (Array): An array of paths to CSS files.
 * - `server` (Array): An array of paths to server JavaScript files.
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
