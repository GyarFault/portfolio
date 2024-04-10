//   navber
eval(function (j, b, f, i, h, g) { while (f--) { if (i[f]) { j = j.replace(new RegExp("\\b" + f.toString(b) + "\\b", "g"), i[f]) } } return j }('5 6(){3 0=4.7("a");b(0.1==="2"){0.1+=" 8"}9{0.1="2"}}', 12, 12, "x|className|navber|var|document|function|myFunction|getElementById|responsive|else|mynav|if".split("|")));








function SendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "darksoulofficial365@gmail.com",
        Password: "5A0340442362B81D7DF1936715DE85643937",
        To: "ankurtalukdarcontact@gmail.com",
        From: "darksoulofficial365@gmail.com",
        Subject: "This is the subject",
        Body: "name : " + document.getElementById("name").value + "<br/> email : " + document.getElementById("email").value + "<br/> phone : " + document.getElementById("phone").value + "<br/> message : " + document.getElementById("message").value + "<br/> subject : " + document.getElementById("dog-names").value
    }).then(
        // message => alert(message)
        message => {
            if (message=='OK'){
                swal("Successfull", "Your Data Successfully received", "Success")
            }
        }
    );
}


