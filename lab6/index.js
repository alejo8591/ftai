'use strict';
var User = (function () {
    function User(id, name, email, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hobbies = hobbies;
    }
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    return User;
})();
var user = new User(10, "Ale", "a@co.co", ['yop', 'trep']);
user.setId(25);
console.log(user.getId());
//# sourceMappingURL=index.js.map