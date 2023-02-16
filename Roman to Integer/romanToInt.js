/**
 * @param {string} 
 * @return {number}
 */
 var romanToInt = function(s) {
    var toInt = 0 
    var romanSwitch = 0
    var oldRoman = ''
    var resultRoman = 0;
    var subtoInt = 0;
    for(let roman of s){
        switch (roman) {
            case 'I':
                romanSwitch = 1
                break;
            case 'V':
                romanSwitch = 5 
                break;
            case 'X':
                romanSwitch = 10
                break;
            case 'L':
                romanSwitch = 50
                break;
            case 'C':
                romanSwitch = 100
                break;
            case 'D':
                romanSwitch = 500
                break;
            case 'M':
                romanSwitch = 1000
                break;
        }

            if ((roman == 'V' && oldRoman == 'I')  || 
                (roman == 'X' && oldRoman == 'I')  || 
                (roman == 'L' && oldRoman == 'X')  ||
                (roman == 'C' && oldRoman == 'X')  ||
                (roman == 'D' && oldRoman == 'C')  ||
                (roman == 'M' && oldRoman == 'C')) {
                    toInt -= oldRomanSwitch         
                    subtoInt = romanSwitch             
                    subtoInt = subtoInt - oldRomanSwitch 
                    toInt += subtoInt                   
                } 
            else {
                    toInt += romanSwitch    
            };   
                    subtoInt = 0
                    oldRoman =  '';
                    oldRoman = roman;
                    oldRomanSwitch = 0;
                    oldRomanSwitch = romanSwitch;
                    resultRoman = 0;
    }

    console.log(toInt)
};