const user = {
    username: null,
    password: null,
    greet: function() {
        if (this.username != null){
        console.log(`Hello, I'm user ${this.username}`);
        }else{
        console.log(`Please assign a username value`)
        }
    },
    updatePassword: function(password){
        this.password = password;
    },
    updaterUsername: function(name){
        this.username = name;
    }
  }
  
user.greet();
user.updaterUsername("Ng");
user.updatePassword("GGG");
user.greet();