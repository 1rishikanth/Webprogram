$(document).ready(function(){
    const password = $('#txt-box-password');
    $('#eye').click(function(){
        if(password.prop('type')=='password'){
            $(this).addClass('fa-eye-slash');
            password.attr('type','text')
        }
        else
        {
            $(this).removeClass('fa-eye-slash');
            password.attr('type','password');
        }
    });
    $('#fadein').click(function(){
        $('#chk').fadeOut();
    });
});