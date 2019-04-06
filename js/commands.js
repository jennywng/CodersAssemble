

$("#add-btn").click(function(){
    var $r9_val = parseInt($('#r9-val').text);
    console.log(typeof($r9_val));
    var $r8_val = parseInt($('#r8-val').text);
    console.log(typeof($r8_val));

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
    var $r9_val = parseInt($('#r9-val').text);
    console.log(typeof($r9_val));
    var $r8_val = parseInt($('#r8-val').text);
    console.log(typeof($r8_val));
    var sum = $r9_val - $r8_val;
    console.log(typeof(sum));
    console.log(sum);
    $('#r8-val').hide();
    $('#r8-val').text(sum);
    $('#r8-val').fadeIn("slow");
});



// function push() {
//     var value = document.getElementById("pushvalue").value;
//     document.getElementById("stack1").value = document.getElementById(value).value;
// }
// </script>
// <a class="btn">Pop</a>  <input type="text" placeholder="Register (i.e. RAX)"><br>
// <a class="btn" onclick="mov();">Mov</a>  <input type="text" id="movvalue1" placeholder="To register (i.e. RAX)"> <input type="text" id="movvalue2" placeholder="From register (i.e. RBX)"><br>
// <script>
// function mov() {
//     var value2 = document.getElementById("movvalue2").value;
//     var value1 = document.getElementById("movvalue1").value;
//     document.getElementById(value1).value = document.getElementById(value2).value;
// }
// </script>
// <a class="btn">Add</a>  <input type="text" placeholder="To register (i.e. RAX)"> <input type="text" placeholder="From register (i.e. RBX)"><br>
// <a class="btn">Sub</a>  <input type="text" placeholder="To register (i.e. RAX)"> <input type="text" placeholder="From register (i.e. RBX)"><br>
// <a class="btn" onclick="inc();">Inc</a>  <input type="text" id="incvalue" placeholder="Register (i.e. RAX)"><br>
// <script>
// function inc() {
//     var txt = document.getElementById("incvalue").value;
//     document.getElementById(txt).value++;
// }
