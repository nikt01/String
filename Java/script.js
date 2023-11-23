
function ucFirst(str) {
    if (!str) {
        return str;
    }
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    
    const lowerStr = str.toLowerCase();

    
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam("Buy Viagra now!")); 
console.log(checkSpam("Click here for XXX Coordinates in mc")); 
console.log(checkSpam("Hello, how are you?")); 

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }


 function extractCurrencyValue(str) {
    return +str.slice(1);
  }
