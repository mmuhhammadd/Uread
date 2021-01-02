$(document).ready(function() {
    $('#home').hide();
    $(document).ready(function() {
        $.getJSON("books.json", function(data) {
            $.each(data, function(key, val) {
                $('tbody').append(`<tr><td class='align-middle'><input class='form-control' disabled value='${val.title}'></td>><td class='align-middle'><input class='form-control' disabled value='${val.author}'></td>><td class='align-middle'><input class='form-control' disabled value='${val.date}'></td>><td class='align-middle'><input class='form-control imgsrc' hidden disabled value='${val.image}'><img src='${val.image}'></td><td class='align-middle'><div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-warning edit"><i class="fas fa-xl fa-pen"></i></button><button type="button" hidden class="btn btn-outline-warning save"><i class="fas fa-xl fa-save"></i></button><button type="button" class="btn btn-outline-danger delete"><i class="fas fa-xl fa-trash"></i></button></div></td></tr>`)
            })
            $('.edit').each(function() {
                $(this).click(function() {
                    let affrow = $(this).parent().parent().parent();
                    $(affrow).find('.edit').attr('hidden', 'hidden');
                    $(affrow).find('.save').removeAttr('hidden');
                    $(affrow).find('.imgsrc').removeAttr('hidden');
                    $(affrow).find('.imgsrc').removeAttr('disabled');
                    $(affrow).find('img').attr('hidden', 'hidden');
                    $(affrow).find('input').each(function(key, inp) {
                        $(inp).removeAttr('disabled');
                    })
                })
            })
            $('.save').each(function() {
                $(this).click(function() {
                    let affrow = $(this).parent().parent().parent();
                    let src = $(affrow).find('.imgsrc').val();
                    $(affrow).find('img').attr('src', src);
                    $(affrow).find('img').removeAttr('hidden');
                    $(affrow).find('.imgsrc').attr('hidden', 'hidden');
                    $(affrow).find('.imgsrc').attr('disabled', 'disabled');
                    $(affrow).find('.save').attr('hidden', 'hidden');
                    $(affrow).find('.edit').removeAttr('hidden');
                    $(affrow).find('input').each(function(key, inp) {
                        $(inp).attr('disabled', 'disabled');
                    })
                })
            })
            $('.delete').each(function() {
                $(this).click(function() {
                    $(this).parent().parent().parent().hide(2000);
                })
            })
        })

    })

    $('#add').submit(function(e) {
        e.preventDefault();
        let title = $('#add #title').val();
        let author = $('#add #author').val();
        let year = $('#add #year').val();
        let cover = $('#add #cover').val();
        $('tbody').prepend(`<tr><td class='align-middle'><input class='form-control' disabled value='${title}'></td>><td class='align-middle'><input class='form-control' disabled value='${author}'></td>><td class='align-middle'><input class='form-control' disabled value='${year}'></td>><td class='align-middle'><input class='form-control imgsrc' hidden disabled value='${cover}'><img src='${cover}'></td><td class='align-middle'><div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-warning edit"><i class="fas fa-xl fa-pen"></i></button><button type="button" hidden class="btn btn-outline-warning save"><i class="fas fa-xl fa-save"></i></button><button type="button" class="btn btn-outline-danger delete"><i class="fas fa-xl fa-trash"></i></button></div></td></tr>`);
        $('#add #title').val('');
        $('#add #author').val('');
        $('#add #year').val('');
        $('#add #cover').val('');
        $('#trigger').attr('disabled', 'disabled');
        $('.edit').each(function() {
            $(this).click(function() {
                let affrow = $(this).parent().parent().parent();
                $(affrow).find('.edit').attr('hidden', 'hidden');
                $(affrow).find('.save').removeAttr('hidden');
                $(affrow).find('.imgsrc').removeAttr('hidden');
                $(affrow).find('.imgsrc').removeAttr('disabled');
                $(affrow).find('img').attr('hidden', 'hidden');
                $(affrow).find('input').each(function(key, inp) {
                    $(inp).removeAttr('disabled');
                })
            })
        })
        $('.save').each(function() {
            $(this).click(function() {
                let affrow = $(this).parent().parent().parent();
                let src = $(affrow).find('.imgsrc').val();
                $(affrow).find('img').attr('src', src);
                $(affrow).find('img').removeAttr('hidden');
                $(affrow).find('.imgsrc').attr('hidden', 'hidden');
                $(affrow).find('.imgsrc').attr('disabled', 'disabled');
                $(affrow).find('.save').attr('hidden', 'hidden');
                $(affrow).find('.edit').removeAttr('hidden');
                $(affrow).find('input').each(function(key, inp) {
                    $(inp).attr('disabled', 'disabled');
                })
            })
        })
        $('.delete').each(function() {
            $(this).click(function() {
                $(this).parent().parent().parent().hide(2000);
            })
        })
    })
    $('#trigger').click(function(e) {
        e.preventDefault();
        $('#add').trigger('submit');
    })
    $('#search').submit(function(e) {
        e.preventDefault();
        let key = $('#query').val();
        $('tbody tr').each(function() {
            $(this).hide();
        })
        $(`td input[value*=${key}]`).each(function() {
            $(this).parent().parent().show();
        })
    })

    
    // username validation
    $('#usernamefield').focus(function() {
        $('#pills-profile').removeClass('was-validated');
        $(this).keyup(function(e) {
            let len = parseInt($(this).val().length);
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122)
            {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
            else if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8)
            {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
            else if (e.keyCode < 65 || e.keyCode > 90 && e.keyCode < 97 || e.keyCode > 122)
            {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
            }
            if (len < 8 || len > 20)
            {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
            }
        })
    })
    // password validation
    $('#passwordfield').focus(function() {
        $('#pills-profile').removeClass('was-validated');
        let valu2 = $('#repasswordfield').val();
        $(this).keyup(function(e) {
            let valu1 = $(this).val();
            let len = parseInt($(this).val().length);
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122)
            {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
            else if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8)
            {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
            else if (e.keyCode < 65 || e.keyCode > 90 && e.keyCode < 97 || e.keyCode > 122)
            {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
            }
            if (len < 8 || len > 20)
            {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
            }
            if (valu1 != valu2) {
                $('#repasswordfield').addClass('is-invalid');
                $('#repasswordfield').removeClass('is-valid');
            }
        })
    })
    $('#repasswordfield').focus(function() {
        $('#pills-profile').removeClass('was-validated');
        let val2 = $('#passwordfield').val();
        $(this).keyup(function(e) {
            let val1 = $(this).val();
            if (val1 != val2) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
            }
            else {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
            }
        })
    })
    $('#answerfield').keyup(function() {
        $(this).removeClass('is-invalid');
        $(this).removeClass('is-valid');
    })
    $('#signupsubmit').click(function(e) {
        e.preventDefault();   
            if($('#usernamefield')) {
                let len = parseInt($('#usernamefield').val().length);
                if (len < 1) {
                    $('#usernamefield').addClass('is-invalid');
                    $('#usernamefield').removeClass('is-valid');
                    return;
                }
            }
            if($('#passwordfield')) {
                let len = parseInt($('#passwordfield').val().length);
                if (len < 1) {
                    $('#passwordfield').addClass('is-invalid');
                    $('#passwordfield').removeClass('is-valid');
                    return;
                }
            }
            if($('#repasswordfield')) {
                let len = parseInt($('#repasswordfield').val().length);
                if (len < 1) {
                    $('#repasswordfield').addClass('is-invalid');
                    $('#repasswordfield').removeClass('is-valid');
                    return;
                }
            }
            if($('#securityquestion')) {
                if($('#securityquestion option:selected').val() == "null") {
                    $('#securityquestion').addClass('is-invalid');
                    return;
                }
            }
            if($('#answerfield')) {
                let len = parseInt($('#answerfield').val().length);
                if (len < 1) {
                    $('#answerfield').addClass('is-invalid');
                    $('#answerfield').removeClass('is-valid');
                    return;
                }
            }
            if ($('#pills-profile input').hasClass('is-invalid') || $('#pills-profile select').hasClass('is-invalid')) {
                return;
            }
                var username = $('#usernamefield').val();
                var password = $('#passwordfield').val();
                var secques = $('#securityquestion').val();
                var ansfil = $('#answerfield').val();
    
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('secques', secques);
                localStorage.setItem('ansfil', ansfil);
    
                $('#answerfield').attr('hidden', 'hidden');
                $('.alert-success').removeAttr('hidden');
    
                $('#pills-home').addClass('show active');
                $('#pills-profile').removeClass('show active');
                $('#pills-home-tab').addClass('active');
                $('#pills-profile-tab').removeClass('active');
    
                $('#usernamefield, #passwordfield, #repasswordfield, #answerfield').val('');
                $('#usernamefield, #passwordfield, #repasswordfield, #securityquestion, #answerfield').removeClass('is-valid');
                $('#securityquestion option[value="null"]').prop('selected', true);
    })
    $('#pills-profile-tab').click(function() {
        $('#pills-profile').removeClass('was-validated');
        $('.alert-success').attr('hidden', 'hidden');
    })
    $('#securityquestion').change(function() {
        $('#answerfield').removeAttr('hidden');
        $(this).removeClass('is-invalid');
        $(this).removeClass('is-valid');
    })
    $('#forgot').click(function() {
        $('#secuquest').val(localStorage.getItem('secques'));
    })
    $('#secuansw').keyup(function() {
        if ($(this).val() == localStorage.getItem('ansfil'))
        {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $('#resetpass').removeAttr('hidden');
            $('#resetrepass').removeAttr('hidden');
        }
        else
        {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
            $('#resetpass').attr('hidden', 'hidden');
            $('#resetrepass').attr('hidden', 'hidden');
        }
    })
    $('#resetpass input').focus(function() {
        var val2 = $('#resetrepass input').val();
        $(this).keyup(function(e) {
            let val1 = $(this).val();
            let len = parseInt($(this).val().length);
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122)
            {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('#savereset').removeAttr('disabled');
            }
            else if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8)
            {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('#savereset').removeAttr('disabled');
            }
            else if (e.keyCode < 65 || e.keyCode > 90 && e.keyCode < 97 || e.keyCode > 122)
            {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
                $('#savereset').removeAttr('disabled');
            }
            if (len < 8 || len > 20)
            {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $('#savereset').attr('disabled', 'disabled');
            }
            if (val1 != val2) {
                $('#savereset').attr('disabled', 'disabled');
            }
            if ($('#resetpass input').hasClass('is-invalid') || $('#resetrepass input').hasClass('is-invalid')) {
                $('#savereset').attr('disabled', 'disabled');
                return;
            }
        })
    })
    $('#resetrepass input').focus(function() {
        var val2 = $('#resetpass input').val();
        $(this).keyup(function(e) {
            let val1 = $(this).val();
            if (val1 != val2) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $('#savereset').attr('disabled', 'disabled');
            }
            else if(val1 == val2) {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
                $('#savereset').removeAttr('disabled');
            }
            if ($('#resetpass input').hasClass('is-invalid') || $('#resetrepass input').hasClass('is-invalid')) {
                $('#savereset').attr('disabled', 'disabled');
                return;
            }
        })
    })
    $('#savereset').click(function() {
        localStorage.setItem('password', $('#resetpass input').val());
        $('.alert-info').removeAttr('hidden');
        $('#secuansw').val('');
        $('#secuansw').removeClass('is-valid');
        $('#resetpass input').val('');
        $('#resetrepass input').val('');
        $('#resetpass input').removeClass('is-valid');
        $('#resetrepass input').removeClass('is-valid');
        $('#resetpass').attr('hidden', 'hidden');
        $('#resetrepass').attr('hidden', 'hidden');
    })
    $('#signinuser').keyup(function() {
        $(this).removeClass('is-invalid');
    })
    $('#signinpass').keyup(function() {
        $(this).removeClass('is-invalid');
    })
    $('#signinsubmit').click(function(e){
        e.preventDefault();
        if($('#signinuser')) {
            if($('#signinuser').val() != localStorage.getItem('username'))
            {
                $('#signinuser').addClass('is-invalid');
                return;
            }
        }
        if($('#signinpass')) {
            if($('#signinpass').val() != localStorage.getItem('password'))
            {
                $('#signinpass').addClass('is-invalid');
                return;
            }
        }
        $('#signinuser').val('');
        $('#signinpass').val('');
        $('#welcome').hide();
        $('#home').show();

    })
    $('#logout').click(function(e) {
        e.preventDefault();
        $('#welcome').show();
        $('#home').hide();
    })
    // $('#add #title').keyup('');
    // $('#add #author').val('');
    // $('#add #year').val('');
    // $('#add #cover').val('');
    $('#add input').each(function(key, input) {
        $(input).keyup(function() {
            if($('#add #title').val() != '' && $('#add #author').val() != '' && $('#add #year').val() != '' && $('#add #cover').val() != '') {
                $('#trigger').removeAttr('disabled');
            }
            else {
                $('#trigger').attr('disabled', 'disabled');
            }
        })
    })
})