var i=0;
var content='';


function nextMember(value) {
  i=i+value;

 if (i==1){
    content="Hello My name Is george rahul";
  };
  if (i==2){
    content="Hello ";
  };
  if (i==3){
    content=" My ";
  };
  if (i==4){
    content=" name Is george rahul";
  };
  document.getElementById("snippetPara").innerHTML = i+content
}
