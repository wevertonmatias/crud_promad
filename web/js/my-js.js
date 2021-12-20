$(document).ready(function() {
    $("#loginform-username").inputmask("999.999.999-99", {removeMaskOnSubmit: true})
    $("#signupform-username").inputmask("999.999.999-99", {removeMaskOnSubmit: true})
    $("#user-username").inputmask("999.999.999-99", {removeMaskOnSubmit: true})


    var user_name_old = $("#user-username").val().replace(/[^0-9]/g, "")

    $("#user-username").change(function(user_name){
        $(".user-form").css({"pointer-events": "none","opacity": "50%"})
        $("#loader").css({"display": "block"});
        let user_name_new = user_name.currentTarget.value.replace(/[^0-9]/g, "")
        if(user_name_old != user_name_new){
            $.ajax({
                method: "POST",
                url: "/user/update",
                data: { user_name: user_name_new },
                success: function(result) {
                    if("error" in result){
                        $("#user-username").val(user_name_old);
                        alert(result['error']);
                    }
                    $(".user-form").css({"pointer-events": "all","opacity": "100%"})
                    $("#loader").css({"display": "none"});
                },
                error: function(result) {
                    alert("Erro ao alterar seu cpf consulto a administração");
                    $("#user-username").val(user_name_old);
                }
            });
        }else{
            $(".user-form").css({"pointer-events": "all","opacity": "100%"})
            $("#loader").css({"display": "none"});
        }
    })


});