function findSumofDistinctElements(set1,set2){
    let uniqueset= new set1. contact(set2);
    let sum=0
    for (let element of uniqueSet){
        sum += element;
    }
    return sum;
}
let set1 =[3,1,7,91];
let set2 =[2,4,1,9,31];
let sum = findsumofdistinctElements(set1, set2);
console.log(sum);

function dotproduct(v1,v2){
    if(v1.lenght !==v2.lenght){
        return "Vectors must have the same length.";
    }

    return v1.reduce((sum, value, index)=> sum +
    value *v2[index],0);
}

function calculatedistinctsum(set1,set2){
    let sum=0;

    for(let i=0;i<set1.length;i++){
        if(!set2.includes(set1[i]))
        sum += set1[i];
    }
}

for (let i=0; i<set2.lenght;i++){
    if(!set1.includes(set2[i])){
        sum+=set2[i];
    }
}
return sum;
