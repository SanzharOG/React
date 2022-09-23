//1
let num = [1, 2, 3, 4, 5];
function square(a){
    let ans = [];
    for (let i = 0; i < a.length; i++) {
        ans[i] = a[i]*a[i];
    }
    return ans;

} 
function ansq(a, callback){
    return callback(a);
}
console.log(ansq(num, square));
//2
let string = 'aba';
function palindrom(s){
    let q = s.split("").reverse().join("");
    return q;

} 
function test(string, callback){
    if (string == callback(string)){
        console.log("Yes");
    }
    else{
        console.log("No");
}
}
console.log(test(string, palindrom));

//3
let s1 = ['ok', 'adq', 'dqdqsd'];
function each(s){
    s = s.split("").reverse().join("");
    console.log(s);
}
for (let i = 0; i < s1.length; i++){
    each(s1[i]);
}

//4
let s2 = ['odwdk', 'aafadq', 'dqwqfdqsd'];
function each1(s){
    let s4 = s.substring(0, 1);
    let s3 = s.substring(1, s.length);
    console.log(s4.toUpperCase() + s3);
}
for (let i = 0; i < s2.length; i++){
    each1(s2[i]);
}

//5
let str = ["assa 123", "sadad 4657", "afs7890"];
function ok(s){
    return s.map(i => i.includes('123')).some(i => i === true);
}

console.log(ok(str));