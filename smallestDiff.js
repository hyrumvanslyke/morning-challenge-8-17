function smallestDif(a1,a2){
    let diffs = []
    for(let i =0; i < a1.length;i++){
        for(let j = 0; j < a2.length; j++){
            if(a2[j] > a1[i]){
                diffs.push(a2[j]-a1[i])
            }else{
                diffs.push(a1[i] - a2[j])
            }
        }
    }
    return Math.min(...diffs)
}
console.log(smallestDif([30,23,54,33,96], [10, 20, 14, 16, 18]))