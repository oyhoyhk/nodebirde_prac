const input = parseInt(require('fs').readFileSync('test.txt').toString());

let ans

for(let i=1;i<=input;i++){
    const cal = i.toString().split('').map(el=>parseInt(el)).reduce((acc,cur)=>acc+=cur,0)+i;
    if(cal === input){
        ans=i;
        break;
    }
}

console.log(ans||0);