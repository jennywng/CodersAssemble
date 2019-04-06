

$("#add-btn").click(function(){
    var $r9_val = $('#r9-val').value;
    var $r8_val = $('#r8-val').value;
    var sum = $r9_val + $r8_val;
    $('#r8-val').hide();
    $('#r8-val').text(sum);
    $('#r8-val').fadeIn("slow");
});