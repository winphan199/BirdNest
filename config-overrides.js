const { override, useBabelRc, addPostcssPlugins } = require('customize-cra');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addPostcssPlugins([require('tailwindcss')])
);
