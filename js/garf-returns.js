
function playGarf(){
    const garf = document.querySelector('.garf');
    document.getElementById('ding').volume = 0.25
    
    let xPos=0;
    let speedX = 3;
    
    let yPos=0;
    let speedY = 3;
    
    let zPos = 200;
    let zSpeed = 3;
    
    new Audio(ding);
    
    const moveGarf = setInterval( function(){
        xPos+=speedX;
        garf.style.left = xPos+"px";
        yPos+=speedY;
        garf.style.top = yPos +"px";
        // zPos+=zSpeed;
        // garf.style.width = zPos +"px";
    
        
        let garfColor = function(){
            let hexColor = "#" + Math.random().toString(16).slice(2,8); 
            garf.style.fill = hexColor;
        }  
        if(xPos + garf.clientWidth >=window.innerWidth ||  xPos <= 0){ 
            speedX = -speedX;
            garfColor();
            document.getElementById('ding').play()
        } 
        if(yPos + garf.clientHeight >= window.innerHeight || yPos <=0){ 
            speedY = -speedY;
            garfColor();
            document.getElementById('ding').play()
        } 
    
    },2000/144) //closing moveGarf
}


