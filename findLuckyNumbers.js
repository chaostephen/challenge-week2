// Write your code below this line.
function findLuckyNumbers(num){
    result=[]
    for (let i=0;i<num;i++){
        let luckynum=Math.floor(Math.random()*10)+1
        if(result.includes(luckynum)){
            i--
        } else {
            result.push(luckynum)
        }
    }
    return result
}

console.log(findLuckyNumbers(0))