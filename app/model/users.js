// Service that manges the active user
bestCoinApp.factory("activeUser", function (User) {
    var user = null;

    var isLoggedIn = function () {
        return user ? true : false;
    };

    var login = function (loggedInUser) {
        user = loggedInUser;
    };

    var logout = function () {
        user = null;
    };

    var get = function () {
        return user;
    };

    var isParent = function () {
             if (isLoggedIn) {
             if (user.role === "Parent") {
                 return true;
             } else {
                 return false
             }
         }
     }

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get,
        isParent: isParent
    };
});