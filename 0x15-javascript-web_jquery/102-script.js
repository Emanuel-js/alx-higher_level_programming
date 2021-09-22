$(function () {
    $('INPUT#btn_translate').click(function () {
        const lan = $('INPUT#language_code').val();
        fetch('https://fourtonfish.com/hellosalut/?lang='+lan+'')
            .then(function (response) {
                response.json().then(r => $('DIV#hello').text(response['hello']));
            });
    });
});
