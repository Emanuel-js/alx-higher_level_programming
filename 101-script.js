$(document).ready(function () {
    let id = 0;
    
    $('DIV#add_item').click(function () {
        $('UL.my_list').append('<li id=' +"id_"+id + '>Item</li>');
        id++;
     });
    $('DIV#remove_item').click(function () {
        console.log(id);
        $('li').remove('#' +"id_"+id + '');
        id--;
        if (id < 0) id = 0;
    });
    $('DIV#clear_list').click(function () {
        $('li').remove();
    });
});
