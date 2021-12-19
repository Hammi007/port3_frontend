define(['knockout', 'dataService','postman'], (ko, ds, postman) => {
    return function (params) {
        let username = ko.observable();
        let password = ko.observable();
        let error = ko.observable();

        postman.subscribe("registeredIn", user => {
             ds.login(user, data => {
                localStorage.setItem("username", data.username);
                localStorage.setItem("token", data.token);
                 postman.publish("changeView", "vm-frontpage");
                 postman.publish("loggedIn", data)
              });
        });
        postman.publish("show_footer!", false)
        let login = () => {
            let user = {
                username: username(),
                password: password()
            };

            localStorage.removeItem("username");
            localStorage.removeItem("token");

            ds.login(user, data => {
                if(data.token !== undefined){
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("token", data.token);
                    postman.publish("changeView", "vm-frontpage");
                    postman.publish("loggedIn", data)
                } else {
                error(data)
            }
             });

        };

        return {
            username,
            password,
            login,
            error
        };
    };
});