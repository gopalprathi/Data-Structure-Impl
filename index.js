function quickSort(list){
    //list = 10,5,15,8
    //pivot = 8;

    let highIndex = list.length-1;
    let pivot = list[highIndex];
    let lowArr = [], highArr = [], sortedArr=[];

    for(let i = 0; i<highIndex; i++){
        if(Number(list[i]) < Number(pivot)){
            lowArr.push(list[i]);
        }else{
            highArr.push(list[i]);
        }
    }

    //lowArr = ["5"]
    //HighArr = ["10","15"]

    if(highIndex != 0){
        if(lowArr.length>1){
            sortedArr.push(...quickSort(lowArr));
        }else{
            sortedArr.push(lowArr[0]);
        }1

        sortedArr.push(pivot);

        if(highArr.length>1){
            sortedArr.push(...quickSort(highArr));
        }else{
            sortedArr.push(...highArr);
        }

        return sortedArr;
    }else{
        return pivot;
    }

    //sortedArr = ["5", "8", "10","15"]
}