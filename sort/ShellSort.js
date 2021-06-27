function shellsort(arr){
    let key = Math.floor(arr.length /2)

    while (key > 0) {
        for (let i = 0; i < arr.length - key; i++) {
            let current = i;
            let move = i + key;

            while (current >= 0) {
                if (arr[move] <= arr[current]) {        // 값이 클 경우
                    const temp = arr[current];
                    arr[current] = arr[move];
                    arr[move] = temp;
                }

                move = currentIndex;
                current -= key;
            }
        }
        key = Math.floor(key / 2);
    }
    return arr;
}
let nums = [17,8,20,11,5,12,15,7];
shellsort(nums);

console.log(nums);