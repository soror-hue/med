function check(answer){
  let result = document.getElementById("result");

  if(answer == "صح"){
    result.innerHTML = "إجابة صحيحة ✅";
  }else{
    result.innerHTML = "إجابة غلط ❌";
  }
}