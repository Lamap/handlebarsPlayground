//require("./main/main.scss"); this does not work with webpack
//require('handlebars/runtime'); does not load the module

document.addEventListener("DOMContentLoaded", function(event) {
    var context = {
        title: "Nice title",
        test: {
            value: "CUCC",
            child: {
                value: "BérBéla"
            }
        }
    }


    var mainTemplateSource   = document.getElementById("main-template").innerHTML;
    var testPartial   = document.getElementById("belso-jeno").innerHTML;
    var testPartialInner   = document.getElementById("leg-belso-jeno").innerHTML;


    var mainTemplate = Handlebars.compile(mainTemplateSource);

    Handlebars.registerPartial("testpartial", testPartial);
    Handlebars.registerPartial("testpartial-inner", testPartialInner);

    var output = mainTemplate(context);

    document.body.insertAdjacentHTML('beforeend', output);
});
