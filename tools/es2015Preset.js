const BABEL_ENV = process.env.BABEL_ENV;
console.log("BABEL_ENV:",BABEL_ENV)

module.exports = {
    presets: [
        [
            "env",
            {
                loose: true,
                modules: BABEL_ENV === "es" ? false : "commonjs"
            }
        ]
    ]
};
