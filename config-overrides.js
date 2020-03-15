const { useBabelRc, override, addDecoratorsLegacy } = require("customize-cra");
module.exports = override(useBabelRc(), addDecoratorsLegacy());
