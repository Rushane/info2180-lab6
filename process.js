  function defineWord() {
      /* global fetch */
      /*fetch('request.php?q=definition')
      .then(response => response.text())
      .then(data => {
  
      alert(data)
      }); */
      var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("formid").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "request.php?q=definition", true);
    xhttp.send();
      
  }

  