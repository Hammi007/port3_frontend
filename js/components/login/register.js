define(['knockout', 'dataService', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let username = ko.observable();
        let password = ko.observable();
        let signedIn = ko.observable();

        let register = () => {
            let user = {
                username: username(),
                password: password()
            };

            ds.register(user, data => {
                console.log(data)
                postman.publish("registeredIn", user)
                postman.publish("changeView", "add-login");
            });
        };




        return {
            username,
            register,
            password,
            signedIn
        };
    };
});