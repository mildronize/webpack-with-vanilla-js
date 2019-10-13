window.$ = window.jQuery = require("jquery");

let hello = (name) => {
    console.log(`Hello ${name}`);
    $("#hello-text").html(`Hello ${name}, see also in 'Console'`);
};

(function(window){

    window.EntryPoint = {
        hello
    }
})(window)