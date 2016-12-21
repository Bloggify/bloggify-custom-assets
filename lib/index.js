"use strict";

module.exports = (config, bloggify) => {
    config.scripts.concat(config.styles).forEach(c => bloggify.assets.add(c));
    config.server.forEach(c => {
        let file = require(`${bloggify.paths.root}/${c}`);
        if (typeof file === "function") {
            file(bloggify);
        } else if (typeof file.init === "function") {
            file.init(bloggify);
        }
    });
};
