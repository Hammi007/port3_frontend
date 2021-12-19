/// <reference path="lib/jquery/dist/jquery.min.js" />
/// <reference path="lib/knockout/build/output/knockout-latest.debug.js" />


require.config({
    baseUrl: 'js',
    paths: {
        text: "lib/requirejs/text",
        jquery: "lib/jquery/dist/jquery.min",
        knockout: "lib/knockout/build/output/knockout-latest.debug",
        dataService: "services/dataService", postman: "services/postman"
    }
});


// component registration
require(['knockout'], (ko) => {
    
    /*
    ko.components.register("list-title", {
        viewModel: { require: "components/titles/listTitle" },
        template: { require: "text!components/titles/listTitle.html" }
    });
    */

    ko.components.register("vm-header", {
        viewModel: { require: "components/header/header" },
        template: { require: "text!components/header/header.html" }
    });

    ko.components.register("vm-title", {
        viewModel: { require: "components/titles/addTitle" },
        template: { require: "text!components/titles/addTitle.html" }
    });

    ko.components.register("vm-title-details", {
        viewModel: { require: "components/titles/titleDetails" },
        template: { require: "text!components/titles/titleDetails.html" }
    });

    ko.components.register("vm-frontpage", {
        viewModel: { require: "components/frontPage/frontpage" },
        template: { require: "text!components/frontPage/frontpage.html" }
    });

    ko.components.register("vm-frontpage-footer", {
        viewModel: { require: "components/frontPage/footer" },
        template: { require: "text!components/frontPage/footer.html" }
    });

    ko.components.register("vm-login", {
        viewModel: { require: "components/login/login" },
        template: { require: "text!components/login/login.html" }
    });

    ko.components.register("vm-register", {
        viewModel: { require: "components/login/register" },
        template: { require: "text!components/login/register.html" }
    });


    ko.components.register("vm-userpage", {
        viewModel: { require: "components/users/userPage" },
        template: { require: "text!components/users/userPage.html" }
    });

    ko.components.register("vm-list-genre", {
        viewModel: { require: "components/genre/listGenre" },
        template: { require: "text!components/genre/listGenre.html" }
    });

    ko.components.register("vm-search-title-view", {
        viewModel: { require: "components/searched_titles/searched_titles" },
        template: { require: "text!components/searched_titles/searched_titles.html" }
    })
});

function getObject(theObject, needle) {
    var result = {};
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
          result = getObject(theObject[i], needle);
          if(result.$id === needle) {return result}
        }
    }
    else
    {
        for(var prop in theObject) {
            //console.log(prop + ': ' + theObject[prop]);
            //if(prop == 'title') {
                if(theObject.$id === needle) {
                    return theObject;
                //}
                }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
                result = getObject(theObject[prop], needle);
                if(result.$id === needle) {return result}
        }
    }
    return result
}
    
function findObjectByKeyName (obj, key) {
    var result;
    for (var property in obj) {
      if (typeof obj[property] === "object" || obj[property] instanceof Array) {
        // in case it is an object
        result = findObjectByKeyName(obj[property], key);
      }
      if (obj.hasOwnProperty(property)) {
        //console.log(property+ " 123")
        if(obj["$id"]	=== key.$ref){
          //console.log("found")
          return obj; // returns the value
        }
      }
      if (typeof result !== "undefined") {
        return result;
      }
    }
}
require(["knockout", "viewmodel"], function (ko, vm) {
    //console.log(vm.);
    
    ko.applyBindings(vm);

});