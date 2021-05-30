function HanoiTower(n,a,b,c){
    if(n===1) console.log(`원판 ${n}, ${a} -> ${c}`);
    else{
        HanoiTower(n-1,a,c,b);
        console.log(`원판 ${n}, ${a} -> ${c}`);
        HanoiTower(n-1,b,a,c);
    }
}
let n=4;
HanoiTower(4,'A','B','C');