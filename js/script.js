// class User{
//     constructor(username){
//         this.username = username;
//     }
//     validate(){
//         if (this.username == null){
//             console.log("Username cannot be empty");

        
//         }
//         else { console.log("username received");
//     }
// }
// }
// let newUser = new User("hello hello");
// newUser.validate();

// function display(){
//     var  username = document.getElementById("name")
// }


var Box = document.querySelector(".box"),
 Show = document.querySelector(".show"),
Hide = document.querySelector(".hide");

Hide.addEventListener("click",function(){
    Box.classList.add("hide-box");

})

Show.addEventListener("click",function(){
    Box.classList.remove("hide-box");

})