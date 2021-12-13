define(['knockout', 'dataService','postman'], (ko, ds, postman) => {
    return function (params) {
        let username = ko.observable();
        let password = ko.observable();

        postman.subscribe("registeredIn", user => {
            ds.login(user, data => {
                console.log(data);
                localStorage.setItem("username", data.username);
                localStorage.setItem("token", data.token);
                postman.publish("changeView", "add-frontpage");
                postman.publish("loggedIn", data)
             });
        });

        let login = () => {
            let user = {
                username: username(),
                password: password()
            };

            localStorage.removeItem("username");
            localStorage.removeItem("token");

            ds.login(user, data => {
                console.log(data);
                localStorage.setItem("username", data.username);
                localStorage.setItem("token", data.token);
                postman.publish("changeView", "add-frontpage");
                postman.publish("loggedIn", data)
             });

        };

        return {
            username,
            password,
            login
        };
    };
});