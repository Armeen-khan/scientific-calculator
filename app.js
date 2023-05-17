function getNum(num){
    console.log(num)
    document.getElementById('result').value += num;
}

 function clearScr(){
    document.getElementById('result').value = "";
 }

 function removeNum(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length -1 );
    console.log(res)
  }
   function getAns(){
    if(document.getElementById('result').value.includes("sin")){
        var res = document.getElementById('result').value.replace('sin','');
        let x = Math.sin(res);
        document.getElementById("result").value = x;
    }else if(document.getElementById('result').value.includes("cos")){
        var res = document.getElementById('result').value.replace('cos','');
        let x = Math.cos(res);
        document.getElementById("result").value = x;
    }else{
        document.getElementById('result').value = eval(document.getElementById('result').value)
        console.log(document.getElementById('result').value)
    }
   }
   function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
