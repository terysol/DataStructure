// 탐욕법
// 미래를 생각하지 않고 각 단계에서 가장 최선의 선택을 하는 기법

let activity = [[1,1,3],[2,2,5],[3,4,7],[4,1,8],[5,5,9],[6,8,10],[7,9,11],[8,11,14],[9,13,16]];
function activitySelection(act){
    let result=[];
    let sorted = act.sort((prev,cur)=>{
        return prev[2]-cur[2];          // 끝나는 시간 순으로 정렬
    });
    console.log('sorted : ',sorted);
    let last=0;
    sorted.forEach((item)=>{
        if(last < item[1]){         // 조건 만족 시 결과 집합에 추가
            last=item[2];
            result.push(item);
        }
    });
    console.log('result : ',result);
    return result.map(r=>{          // map을 한 이유는 몇 번째 행동이 선택되었는지 보여주기 위함.
        return r[0]
    });
}

console.log(activitySelection(activity));