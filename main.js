let username = ["admin"]
let password = ["admin"]

function check(){
    var log_user = document.getElementById("user").value;
    var log_pwd = document.getElementById("pwd").value; 
    for(var i=0; i < username.length; i++){
        if((log_user == "admin") && (log_pwd == "admin")) window.location = "room_admin.html";
        else if((log_user == username[i]) && (log_pwd == password[i])) window.location = "room_student.html";
        else alert("You account is incorrect!");
    }
}

function show_pwd(opt){
    form.pwd.setAttribute('type', opt? 'text' : 'password');
}