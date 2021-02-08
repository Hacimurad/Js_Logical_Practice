 // Selects
 const colors = document.getElementById('color');
 const boxWidth = document.getElementById('boxW');
 const boxHeight = document.getElementById('boxH');
 const clickBtn = document.getElementById('btn');
 const result = document.getElementById('result');


 //Event
 clickBtn.addEventListener("click",changeResult);


//Functions
function changeResult(){
    result.style.backgroundColor=colors.value;
    result.style.width=boxWidth.value;
    result.style.height=boxHeight.value;
}
