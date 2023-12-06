class User{
    constructor(username){
        this.username = username;
    }
    validate(){
        if (this.username == null){
            console.log("Username cannot be empty");

        
        }
        else { console.log("username received");
    }
}
}
let newUser = new User("hello hello");
newUser.validate();

function display(){
    var  username = document.getElementById("name")
}
