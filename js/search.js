function search(){
  var sbtn=document.getElementById("schbtn");
  var stxt=document.getElementById("schtxt");  
 sbtn.onclick=function(){
    if(stxt.value==""||stxt.value=="������ؼ���"){
        stxt.value="������ؼ���";
    ����return false;
    }
    window.location.href="/products/search.aspx?para="+stxt.value;
 }
}
search();
function txtonfocus(){
   var stxts=document.getElementById("schtxt");  
  if(stxts.value=="������ؼ���"){
  stxts.value="";
  }
}