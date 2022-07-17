const colorTheme = document.querySelector('#color-theme');
const content = document.querySelector('.content');

function changeColorTheme(){
  switch(colorTheme.value){
    case "default":content.style.backgroundColor = "#ffffff",
                  colorTheme.style.border = "1px solid #ffffff";
    break;
    case "peach":content.style.backgroundColor = "#F1BF98", 
                 colorTheme.style.backgroundColor = "#F1BF98",
                 colorTheme.style.border = "1px solid #F1BF98";
    break;
    case "nyanza":content.style.backgroundColor = "#E1F4CB", 
                  colorTheme.style.backgroundColor = "#E1F4CB",
                  colorTheme.style.border = "1px solid #E1F4CB";
    break;
    case "laurelGreen":content.style.backgroundColor = "#BACBA9", 
                       colorTheme.style.backgroundColor = "#BACBA9",
                       colorTheme.style.border = "1px solid #BACBA9";
    break;
    case "nickel":content.style.backgroundColor = "#717568",
                  colorTheme.style.backgroundColor = "#717568",
                  colorTheme.style.border = "1px solid #717568";
    break;
    case "riffelGreen":content.style.backgroundColor = "#3F4739",
                       colorTheme.style.backgroundColor = "#3F4739",
                       colorTheme.style.border = "1px solid #3F4739";
    break;
  }

}
  
  