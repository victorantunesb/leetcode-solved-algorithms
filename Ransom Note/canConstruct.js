/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


/*
Runtime129 ms
Beats
18.45%
Memory46.6 MB
Beats
25.63%
*/


var canConstruct = function(ransomNote, magazine) {
        ransomArr = ransomNote.split("")
        magazineArr = magazine.split("")
        conferenceArr = []
        for(let letterRan of ransomArr){
            for(let index = 0; index < magazineArr.length; index++){
                letterMag = magazineArr[index];
            if(letterRan == letterMag){
                conferenceArr.push(letterRan)
                magazineArr.splice(index,1)
                break;
            }
        }
    }
    if(conferenceArr.toString() == ransomArr.toString()){return true} else {return false}
};