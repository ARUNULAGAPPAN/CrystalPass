function generate()
{
   var a=document.getElementById("len").value;
   var a1=Number(a);
   const lower="abcdefghijklmnopqrstuvwxyz";
   const digit="0123456789";
   var avail=lower+digit;
   const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const spe="@#!$%^&*~=+_-";
   var cust=document.getElementById("cus").value;
   var pass="";
   
   // Get checkbox states
   var cap = document.getElementById("cap").checked;
   var dig = document.getElementById("dig").checked;
   var speChecked = document.getElementById("spe").checked;

   if(cap)
   {
      pass+=upper[Math.floor(Math.random()*upper.length)];
      avail+=upper;
   }
   if(speChecked)
   {
      pass+=spe[Math.floor(Math.random()*spe.length)];
      avail+=spe;
   }
   if(dig)
   {
      pass+=digit[Math.floor(Math.random()*digit.length)];
   }
   var pl=pass.length;
   var cl=cust.length;
   if(pl+cl>a1)
   {
       document.getElementById("pass").innerHTML="Error:the given custom string too long to be included kindly retry";
       return 0;
   }
   var re=a1-(pl+cl);
   var rand="";
   for( let i=0;i<re;i++)
   {
      rand+=avail[Math.floor(Math.random()*avail.length)];

   }
   var arr=[rand,pass,cust];
   arr.sort(()=>Math.random()-0.5);
   var joined=arr.join("");
   document.getElementById("pass").innerHTML=joined;
}

function copyPassword()
{
  const passEl = document.getElementById("pass");
  const passwordText = passEl.innerText || passEl.textContent;

  if (!passwordText || passwordText.startsWith("Error")) {
    alert("No valid password to copy! Please generate one first.");
    return;
  }

  navigator.clipboard.writeText(passwordText).then(() => {
    alert("Password copied to clipboard!");
  }).catch(() => {
    alert("Failed to copy password.");
  });
}
