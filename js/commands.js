

$("#add-btn").click(function(){
    var add1 = $('#add-input1').val();
    var add2 = $('#add-input2').val();
    console.log(add1);
    console.log(add2);

    var val1 = parseInt($("#" + add1 + "-val").text());
    var val2 = parseInt($("#" + add2 + "-val").text());
    console.log(val1);
    console.log(val2);

    var sum = val1 + val2;
    $("#" + add1 + "-val").hide();
    $("#" + add1 + "-val").text(sum);
    $("#" + add1 + "-val").fadeIn("slow");
});

$("#sub-btn").click(function(){
    var add1 = $('#sub-input1').val();
    var add2 = $('#sub-input2').val();
    console.log(add1);
    console.log(add2);

    var val1 = parseInt($("#" + add1 + "-val").text());
    var val2 = parseInt($("#" + add2 + "-val").text());
    console.log(val1);
    console.log(val2);

    var sum = val1 - val2;
    $("#" + add1 + "-val").hide();
    $("#" + add1 + "-val").text(sum);
    $("#" + add1 + "-val").fadeIn("slow");
});


$("#dec-btn").click(function(){
    var add1 = $('#dec-input1').val();
    console.log(add1);

    var val1 = parseInt($("#" + add1 + "-val").text());
    console.log(val1);

    var sum = val1 - 1;
    $("#" + add1 + "-val").hide();
    $("#" + add1 + "-val").text(sum);
    $("#" + add1 + "-val").fadeIn("slow");
});


$("#inc-btn").click(function(){
    var add1 = $('#inc-input1').val();
    console.log(add1);

    var val1 = parseInt($("#" + add1 + "-val").text());
    console.log(val1);

    var sum = val1 + 1;
    $("#" + add1 + "-val").hide();
    $("#" + add1 + "-val").text(sum);
    $("#" + add1 + "-val").fadeIn("slow");
});

$("#mov-btn").click(function(){
    var add1 = $('#mov-input1').val();
    var add2 = $('#mov-input2').val();
    console.log(add1);
    console.log(add2);

    var val1 = parseInt($("#" + add1 + "-val").text());
    var val2 = parseInt($("#" + add2 + "-val").text());
    console.log(val1);
    console.log(val2);

    $("#" + add1 + "-val").hide();
    $("#" + add1 + "-val").text(val2);
    $("#" + add1 + "-val").fadeIn("slow");
});
