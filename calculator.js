function clicked() {
    const text = event.target.innerHTML;
    document.querySelector('.result').innerHTML += text;
}

const queue = [];

function getRes() {
    const text = document.querySelector('.result').innerHTML;
    let idx = 0;
    for (let i = 0; i < text.length; i++) {
        console.log(text[i])
        if (text[i] == "+" || text[i] == "-" || text[i] == "*" || text[i] == "/") {
            queue.push(Number(text.substring(idx, i)));
            queue.push(text[i]);
            idx = i + 1;
        } else if (i == text.length - 1) {
            queue.push(Number(text.substring(idx, text.length)));
        }
    }
    let answer = queue.shift();
    for (item of queue) {
        const operator = queue.shift();
        const num = queue.shift();
        if(operator=='+'){
            answer+=num;
        } else if (operator == '-') {
            answer-=num;
        } else if (operator == '/') {
            answer/=num;
        } else {
            answer*=num;
        }
        if(queue.length==0) break;
    }
    document.querySelector('.result').innerHTML=answer;
    
}

function deleted() {
    document.querySelector('.result').innerHTML = ' ';
}