var jam = {
    "packages": [
        {
            "name": "ember",
            "location": "lib/ember",
            "main": "ember-1.0.0.pre.2.min-jam.1.js"
        },
        {
            "name": "handlebars",
            "location": "lib/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "lib/jquery",
            "main": "jquery.js"
        }
    ],
    "version": "0.2.8",
    "shim": {
        "ember": {
            "deps": [
                "handlebars",
                "jquery"
            ],
            "exports": "Em"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}