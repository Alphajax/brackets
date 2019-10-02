module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let flag=false;
    let bracket;
    let len = str.length;
    for (let i =0; i< len;i++){
        bracket = str.substring(0,1);
        str = str.replace(bracket,'');
        if(isSame(bracket,bracketsConfig) && flag===false){
            stack.push(bracket);
            flag = true;
        } else if(isSame(bracket,bracketsConfig) && flag===true){
            let br = stack.pop();
            if (!(br === bracket)){
                return false;
            }
            flag=false;
        } else if(!isSame(bracket, bracketsConfig) && isOpening(bracket,bracketsConfig)){
            stack.push(bracket);
        } else if(!isSame(bracket, bracketsConfig) && isClosing(bracket, bracketsConfig)){
            let br = stack.pop();
            if(!isPair(br ,bracket , bracketsConfig)){
                return false;
            }
        }
    }
    return  stack.length===0;

}
function isOpening(bracket, bracketsConfig) {
    for(let i=0;i<bracketsConfig.length; i++){
        if(bracket === bracketsConfig[i][0]){
            return true;
        }
    }
    return false;
}
 function isClosing(bracket, bracketsConfig) {
     for(let i=0;i<bracketsConfig.length; i++){
         if(bracket === bracketsConfig[i][1]){
             return true;
         }
     }
     return false;
 }
 function isPair(bracket1, bracket2, bracketsConfig) {
     for (let i =0;i<bracketsConfig.length;i++){
         if(bracketsConfig[i][0] ===bracket1 && bracketsConfig[i][1]===bracket2 ){
             return true;
         }
     }
     return false;
 }
 function isSame(bracket, bracketsConfig) {
     return isOpening(bracket, bracketsConfig) && isClosing(bracket, bracketsConfig);
  }
