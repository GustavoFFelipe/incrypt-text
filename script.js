

const message = document.getElementById('incryptText'); 
const btnToIncrypt = document.getElementById('btn-1');
const btnToUncrypt = document.getElementById('btn-2')
const sideText = document.getElementById('side');

//----------Incrypt function
function incryptBtn(){
    // Change img to message for text crypto text
    function toggle(){
        let btnDisplay = document.getElementById('copyText');
        let showMessage = document.getElementById('any-massage');
        let showSideMessage = document.getElementById('side');

        if(showMessage.style.display === 'block'){
            showMessage.style.display = 'none';
            showSideMessage.style.display = 'block';
            btnDisplay.style.display = 'block'
        } else{
            showMessage.style.display = 'block';
            showSideMessage.style.display = 'none'
            btnDisplay.style.display = 'none';
        }
    };
    toggle();

      // incripty message the
    
    function incrypt(){
            
            if(message.value.length == 0){
                console.log()
            } else {
                sideText.value = message.value.
            replace(/[e|é|è|ê|ể|ë]/g, 'enter').
            replace(/[i|í|ì|î]/g, 'imes').
            replace(/[a|à|á|â|ã|ä|å]/g, 'ai').
            replace(/[o|ó|ò|ô|ö]/g, 'ober').
            replace(/[u|ú|ù|ü]/g, 'ufat').
            replace(/[$|@|!|*|%||¨|{|}|#]/, " ")

            }
            message.value = ''
    } incrypt();
              
    
      
    // Side bar incrypt
    function writeText(){
        //get content of 
        newText = document.getElementById("side");
        //change the content to incrypt text
        newText.innerHTML = sideText.value;
        

    }
    writeText();
}

    btnToIncrypt.addEventListener('click', incryptBtn);



//------------------Uncrypt function----------------------------------------------------
function uncryptBtn(){
    // Change img to message for text crypto text
    function toggle(){
        let btnDisplay = document.getElementById('copyText');
        let showMessage = document.getElementById('any-massage');
        let showSideMessage = document.getElementById('side');

        if(showMessage.style.display === 'block'){
            showMessage.style.display = 'none';
            showSideMessage.style.display = 'block';
            btnDisplay.style.display = 'block'
        } else{
            showMessage.style.display = 'block';
            showSideMessage.style.display = 'none'
            btnDisplay.style.display = 'none';
        }
    };
    toggle();

      // uncripty message the
    
    function uncrypt(){
            
        if(message.value.length == 0){
            console.log()
        } else {
            sideText.value = message.value.
            replace(/enter/g, 'e').
            replace(/imes/g, 'i').
            replace(/ai/g, 'a').
            replace(/ober/g, 'o').
            replace(/ufat/g, 'u').
            replace(/[$|@|!|*|%||¨|{|}|#]/, " ")

        }
        message.value = ''        
    } uncrypt();
              
    
      
    // Side bar incrypt
    function writeText(){
        //get content of 
        newText = document.getElementById("side");
        //change the content to incrypt text
        newText.innerHTML = sideText.value;
        

    }
    writeText();
}

    btnToUncrypt.addEventListener('click', uncryptBtn);

//--------- Copy button function -------

function copyButton(){
    let btn = document.getElementById('copyText');
    let copyText = document.getElementById('side').value;
    if(navigator.clipboard.writeText(copyText)) {
        document.getElementById('copyText').textContent = "Copied"
        btn.style.backgroundColor = '#0A3871'
        btn.style.color = "#fff"
        btn.style.fontWeight = 'bold'
        btn.style.opacity = '.5'
    }
    setInterval(() => {
        document.getElementById('copyText').textContent = "Copy"
        btn.style.backgroundColor = '#fff'
        btn.style.color = "#0A3871"
        btn.style.fontWeight = 'normal'
        btn.style.opacity = '1'
    }, 4000
    );

    console.log(copyText);
}
// #challengeonedecodificador2
  