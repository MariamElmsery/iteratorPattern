export function* range(start:number,end:number,step:number){
    let current=start;
    while(current<end){
        yield current;
        current+=step;
    }
   
}
const myRange=range(1,11,1);
for (const rangeIterator of myRange) {
    console.log(rangeIterator);
    
}
console.log([...range(1,11,1)]);
const x=range(1,11,1)
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

