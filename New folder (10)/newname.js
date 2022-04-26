function addtheplayers1and2(){
    Pl1=document.getElementById("P1").value;
    Pl2=document.getElementById("P2").value;
    localStorage.setItem("Player1",Pl1);
    localStorage.setItem("Player2",Pl2);
    window.location="nextpage.html";
}