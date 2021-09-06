
function add_number(num){
    document.querySelector("#result").value += num;
}
function del(){
    document.querySelector("#result").value = "";
}
 function total(){
     document.querySelector("#result").value = eval(document.querySelector("#result").value);
 }
 function del_onedigit(){
     var n =  document.querySelector("#result").value.length;
    document.querySelector("#result").value =  document.querySelector("#result").value.substr(0,n-1);
 }
