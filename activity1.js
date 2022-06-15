var score = 0;
function update(){
    score = score + 1;
    document.getElementById('scr').innerHTML="Score:" + score;
}

function save(){
    localStorage.setItem('score', score);
}

function next(){
    window.location = 'https://www.youtube.com/';
}