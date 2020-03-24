const key = document.querySelector('.key');
let result = document.querySelector('#result');
const operator = ["+","-","*","/"];
key.addEventListener('click',(e)=>{
    if(e.target.tagName === 'SPAN'){
        let lastResult = result.textContent;
        if(e.target.dataset.name === "clear"){
            result.textContent = "0";
        }else if(e.target.dataset.name === "="){
            if(result.textContent.includes("×")||result.textContent.includes("÷")){
                result.textContent = result.textContent.replace("×","*").replace("÷","/")
                result.textContent = eval(result.textContent);
            }else{
                result.textContent = eval(result.textContent);
            }
        }else{
            if(operator.includes(e.target.dataset.name)){
                result.textContent = lastResult + e.target.textContent;
            }else{
                if(lastResult === "0"){
                    if(e.target.textContent != "."){
                        result.textContent = e.target.textContent;
                    }else{
                        result.textContent = lastResult + e.target.textContent;    
                    }
                }else{
                    result.textContent = lastResult + e.target.textContent;
                }
            }
        }
    };
});