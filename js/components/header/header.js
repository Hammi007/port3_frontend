define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let addTitle = () => postman.publish("changeView", "add-title");
        let loginView = () => postman.publish("changeView", "add-login");
        let registerView = () => postman.publish("changeView", "add-register");
        let signedIn = ko.observable();
        let username = ko.observable();

        let genre = ko.observable();

        postman.subscribe("newTitle", title => {
            ds.AddTitle(title, "newTitle");
        });

        postman.subscribe("loggedIn", data => {
            loggedIn(data)
        })

        let loggedIn = () => {
          if (localStorage.token) {
            signedIn(true);
            username(localStorage.getItem("username"))
          } else {
             signedIn(false);
              }
         }

         let logOut = () =>{
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            loggedIn();
         }

         let pageDetails = (data) => {
            postman.publish("pageDetails", data);
            console.log(data)
            postman.publish("changeView", "add-userpage");
        }


        let listGenre = (data, event) => {
            postman.publish("listTitlesByGenre", event.target.id);
            postman.publish("changeView", "list-genre");
            console.log(event.target.id)
            console.log(data);
        }

         window.onload = loggedIn();

        return {
            addTitle,
            loginView,
            signedIn,
            loggedIn,
            logOut,
            username,
            pageDetails,
            registerView,
            listGenre,
            genre
        };
    };
});