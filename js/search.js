function search(){
  var sbtn=document.getElementById("schbtn");
  var stxt=document.getElementById("schtxt");  
 sbtn.onclick=function(){
    if(stxt.value==""||stxt.value=="请输入关键字"){
        stxt.value="请输入关键字";
    　　return false;
    }
    window.location.href="/products/search.aspx?para="+stxt.value;
 }
}
search();
function txtonfocus(){
   var stxts=document.getElementById("schtxt");  
  if(stxts.value=="请输入关键字"){
  stxts.value="";
  }
}