let num=0;
const value=document.querySelector(".value"); //Para agarrar el valor de la clase value
const btns=document.querySelectorAll(".btn");
var elementoImg = document.getElementById("foto");

 //btn del foreach es otro elemento
btns.forEach((btn) => {
    btn.addEventListener("click", (event)=>{
        const styles=event.currentTarget.classList;
        if(styles.contains("btn-min")){
            num--;
        }else if(styles.contains("btn-pls")){
            num++;
        }else{
            num=0;
        }
        value.textContent=num;

        if(num>0){
            value.style.color="";
            elementoImg.src="img/uwu.jpg";
        }else if(num<0){
            value.style.color="";
            elementoImg.src="img/uwuenojado.jpg";
        }else{
            value.style.color="";
            elementoImg.src="img/uwutimido.jpg";
        }
    });
});