let username = ["admin"]
let password = ["admin"]
let noti_box  = true;

//Check password and user in page login.html
function check(){
    var log_user = document.getElementById("user").value;
    var log_pwd = document.getElementById("pwd").value;
    if((log_user == "") &&(log_pwd == "")) noti_box = false;
    for(var i=0; i < username.length; i++){
        if((log_user == "admin") && (log_pwd == "admin")){
            window.location = "room_admin.html";
            noti_box = false;
            break;
        }
        else if((log_user == username[i]) && (log_pwd == password[i])){
            window.location = "room_student.html";
            noti_box = false;
            break;
        }
    }
    if(noti_box) alert("You account is incorrent!");
}

// Show password in page login.html
function show_pwd(opt){
    form.pwd.setAttribute('type', opt? 'text' : 'password');
}