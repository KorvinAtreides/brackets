module.exports = function check(str, bracketsConfig) {
    let openBr = [];
    let closenBr = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        openBr.push(bracketsConfig[i][0]);
        closenBr.push(bracketsConfig[i][1]);
    }
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (openBr.indexOf(arr[i], 0) != -1) {
            let elRight = closenBr[openBr.indexOf(arr[i], 0)];
            if (arr.indexOf(elRight, i) == -1) {
                //it cant find pair in the rest of array=>
                return false; // => not closed
            }
        }
    }
    let i = 0;
    while (arr.length > 1 && i < arr.length) {
        if (closenBr[openBr.indexOf(arr[i], 0)] == arr[i + 1]) {
            arr.splice(i, 2); //correct branches will be deleted
            i = 0; //and starts searching again
            continue;
        } else if (openBr.indexOf(arr[i + 1], 0) != -1) {
            i++; //the next branch is open => go next to search closed branch
            continue;
        } else {
            //the branch is closed but it is not the pair of arr[i] branch
            return false;
        }
    }
    if (arr.length == 1) {
        //if correct, then length is 0
        return false;
    }
    return true;
};
