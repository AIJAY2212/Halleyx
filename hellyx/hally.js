

function layout() {
    var box = document.getElementById('box');
    box.innerHTML = '<div id="box1" style=" border: 1px solid gray; width: 555px; height: 500px; float: left;"></div><div id="box2" style=" border: 1px solid gray; width: 555px; height: 500px;"></div>';
}

function label() {
    var lform = document.getElementById('lform');
    lform.innerHTML = "<form onsubmit='lform(); return false' style='margin: auto; float:left; border: 1px solid black; width: 300px; height: auto'>  <label for='name'>Name</label>  <input id='name' type='text'><br>  <label for='type'>Type</label><input type='text' name='type' id='type'> <br><input type='submit'>  </form>"
}

function lform() {
    var name = document.getElementById('name').value;
    var type = document.getElementById('type').value;
    var box = document.getElementById('box');
    var lform = document.getElementById('lform');
    box1.innerHTML = '<div class="draggable" id="dragElement" draggable="true">' + name + '</div>';
    // box1.innerHTML='<div id="mydiv" style=" position: absolute;    z-index: 9;    background-color: #f1f1f1;    text-align: center;    border: 1px solid #d3d3d3;">    <div id="mydivheader" style="padding: 10px;    cursor: move;    z-index: 10;    background-color: #2196F3;    color: #fff; ">Click here to move</div>    <p>Move</p>    <p>this</p>    <p>DIV</p>  </div>'
    lform.innerHTML = "";
}

function clear() {
    var box = document.getElementById('box');
    box.innerHTML = "";
}

