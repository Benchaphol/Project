let username = ["admin"]
let password = ["admin"]

//Check password and user in page login.html
function check(){
    let noti_box  = true;
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
    if(noti_box) alert("Your account is incorrent!");
}

// Show password in page login.html
function show_pwd(opt){
    form.pwd.setAttribute('type', opt? 'text' : 'password');
}
/*
//Sign up 
function signup(){
    var regis_name = document.getElementById("ืname").value;
    var regis_birth = document.getElementById("birthday").value;
    var regis_stid = document.getElementById("ืstid").value;
    var regis_pid = document.getElementById("pid").value;
    var regis_phone = document.getElementById("ืphonenumber").value;
}*/