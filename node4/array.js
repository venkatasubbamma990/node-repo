let arr = [[1,2,3,4,5],[5,6,7],[7,8,9,10]]
let map = new Map();
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(map.has(arr[i][j])){
            map.set(arr[i][j],1+map.get(arr[i][j]))
        }
        else{
            map.set(arr[i][j],1)
        }
    }
}
let ans = []
for(let m of map){
    if(m[1]==1){
        ans.push(m[0])
    }
}
console.log(ans)








/* let ans = [];
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        ans.push(arr[i][j])
    }
}
//console.log(ans)
let map = new Map();
for(i=0;i<ans.length;i++){
    if(map.has(ans[i])){
        map.set(ans[i],1+map.get(ans[i]))
    }
    else{
        map.set(ans[i],1)
    }
}
//console.log(map);
let ansarray = []
for(let m of map){
    if(m[1]==1){
        ansarray.push(m[0])

    }
}
console.log(ansarray) */