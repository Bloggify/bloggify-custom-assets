"use strict";

const path = require("path");


/**
 * @name bloggify:init
 * @param {Object} config
 *
 * - `scripts` (Array): An array of paths to client JavaScript files.
 * - `styles` (Array): An array of paths to CSS files.
 * - `server` (Array): An array of paths to server JavaScript files.
 */
module.exports = config => {
    config.scripts.concat(config.styles).forEach(c => Bloggify.assets.add(path.resolve(Bloggify.paths.root, c)));
    config.server.forEach(c => {
        let file = require(`${Bloggify.paths.root}/${c}`);
        if (typeof file === "function") {
            file(Bloggify);
        } else if (typeof file.init === "function") {
            file.init(Bloggify);
        }
    });
};
