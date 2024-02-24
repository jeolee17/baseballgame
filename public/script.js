



function generateRandomDigit() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var answerNumberArray = [];

    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * numbers.length); // 1~10까지 정수 생성
        answerNumberArray.push(numbers.splice(randomIndex, 1)[0]); // 1~ 10까지 번째
    }

    return {
        answerNumberArray: answerNumberArray,
        answerNumber: answerNumberArray.join('')
    };
}


//answerNumber: 정답 숫자

var answer = generateRandomDigit();

console.log(answer.answerNumber);

var answerDigit1 = answer.answerNumber.charAt(0);
var answerDigit2 = answer.answerNumber.charAt(1);
var answerDigit3 = answer.answerNumber.charAt(2);
var answerDigit4 = answer.answerNumber.charAt(3);

var tryCount = 0;
var strike = 0;
var ball = 0;
var gameHistory = []; // 각 시도 결과를 저장하는 배열
