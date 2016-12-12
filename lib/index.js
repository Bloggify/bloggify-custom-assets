"use strict";

module.exports = (config, bloggify) => {
    config.scripts.concat(config.styles).forEach(c => bloggify.assets.add(c));
};
