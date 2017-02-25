/**
 * Created by Lidia Khmylko on 1/10/2016
 *
 * Basic statistics functions
 */


function getMean(arr){
    var result;
    var sum = 0;

    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    result = sum / arr.length;
    return result;
}

function getMedian(arr){
    var result;
    arr.sort(function(a, b){
        return a - b;
    });
    //console.log(arr);
    var middleIndex = (arr.length - 1) / 2;
    if (middleIndex === parseInt(middleIndex)){ // uneven length of arr
        result = arr[middleIndex];
    } else { // even length of arr
        result = (arr[parseInt(middleIndex)] + arr[parseInt(middleIndex) + 1]) / 2;
    }
    return result;
}

function getMode(arr){
    var result;
    arr.sort(function(a, b){
        return a - b;
    });
    var counters = {};
    for (var i = 0; i < arr.length; i++){
        if(!counters[arr[i]]){
            counters[arr[i]] = 1;
        } else {
            counters[arr[i]]++;
        }
    }
    var max = 0;

    for (var key in counters){
        if (counters[key] > max){
            max = counters[key];
            result = key;
        }
    }
    return result;
}

function main() {
    var a = parseInt(readLine());
    var b = readLine();

    var nums = b.split(' ');
    for (var i = 0; i < nums.length; i++){
        nums[i] = parseInt(nums[i]);
    }

    if (nums.length !== a){
        console.log("Input format error");
    }

    var mean = getMean(nums);
    console.log(mean);

    var median = getMedian(nums);
    console.log(median);

    var mode = getMode(nums);
    console.log(mode);
}

/////////////// ignore below this line ////////////////////
// For HackerRank testing

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}