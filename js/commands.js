

$("#add-btn").click(function(){
    var $r9_val = parseInt($('#r9-val').text);
    console.log(typeof($r9_val));
    var $r8_val = parseInt($('#r8-val').text);
    console.log(typeof($r8_val));
    var sum = 900;
    $('#r8-val').hide();
    $('#r8-val').text(sum);
    $('#r8-val').fadeIn("slow");
});

$("#sub-btn").click(function(){
    var $r9_val = parseInt($('#r9-val').text);
    console.log(typeof($r9_val));
    var $r8_val = parseInt($('#r8-val').text);
    console.log(typeof($r8_val));
    var sum = 100;
    $('#r9-val').hide();
    $('#r9-val').text(sum);
    $('#r9-val').fadeIn("slow");
});