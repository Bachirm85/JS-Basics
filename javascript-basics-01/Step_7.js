function validates() {
    var shoe = document.getElementById("shoe_size").value;
    var year = document.getElementById("year").value;
    var result = ((((parseFloat(shoe) * 2)+5)*50)-year)+1766 ;
  
    alert("The result : " + result);
    
   
}