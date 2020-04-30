module.exports                      = {
    "extends"                       : [
        "eslint:recommended"
    ],
    "env"                           : {
        "es6"                       : true,
        "node"                      : true,
        "mocha"                     : true
    },
    "rules"                         : {
        "comma-style"               : ["error", "last"],
        "indent"                    : ["error", 4],
        "no-tabs"                   : "error",
        "no-eval"                   : ["error", {"allowIndirect": false}],
        "curly"                     : "error",
        "brace-style"               : ["error", "stroustrup"],
        "dot-location"              : ["error", "property"],
        "no-redeclare"              : "off",
        "no-console"                : "error",
        "strict"                    : "error",
        "comma-dangle"              : ["error", "always-multiline"],
        "eol-last"                  : ["error", "always"],
        "no-nested-ternary"         : "error",
        "no-trailing-spaces"        : "error",
        "one-var"                   : ["error", { "const": "never", "let": "always", "var": "always" }],
    }
}