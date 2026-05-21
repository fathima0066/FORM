
  function validform() { //fun braket open
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
        
        if (name=="" || email=="") {
          alert ("all fields must be filled ");
          return false;
        }
        alert ("success");
        return true;
        
     } //fun braket close 

