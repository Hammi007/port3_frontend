define(['knockout', 'dataService', 'postman'], (ko, ds, postman) => {
    return function (params) {
        let username = ko.observable();
        let password = ko.observable();
        let repeatedPassword = ko.observable();
        let signedIn = ko.observable();
        let error = ko.observable();

        postman.publish("show_footer!", false)

        let tryRegister = () => {
            let user = {
                username: username(),
                password: password(),
            };
            if(password() !== repeatedPassword()){
                error({error:"Passwords do not match"})
                return
            } else {
                ds.register(user, data => {
                    if(data.created_user !== undefined){
                        postman.publish("registeredIn", user)
                        postman.publish("changeView", "add-login");
                    } else {
                        error(data)
                    }
                });
            }
        };




        return {
            username,
            tryRegister,
            password,
            signedIn,
            repeatedPassword,
            error
        };
    };
});