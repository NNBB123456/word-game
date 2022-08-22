player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("playername1").innerHTML = player1_name + ":";
document.getElementById("playername2").innerHTML = player2_name + ":";

document.getElementById("playerscore1").innerHTML = player1_score;
document.getElementById("playerscore2").innerHTML = player2_score;

document.getElementById("playerq").innerHTML = "question turn -" + player1_name;
document.getElementById("playera").innerHTML = "answer turn -" + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);


charat1 = word.charAt(1);
console.log(charat1);

length_divide_2 = Math.floor(word.length/2);
charat2 = word.charAt(length_divide_2);
console.log(charat2);

length_minus_2 = word.length-1;
charat3 = word.charAt(length_minus_2);
console.log(charat3);

remove_charat1 = word.replace(charat1,"_");
remove_charat2 = remove_charat1.replace(charat2,"_");
remove_charat3 = remove_charat2.replace(charat3,"_");
console.log(remove_charat3);


question_word = "<h4 id=word_display>Q. "+remove_charat3+"</h4>";
input_box = "<br> answer: <input type=text id=inputcheckbox>";
check = "<br><br> <buton class=btn btn-info onclick=check()>check</button>";
row = question_word + input_box + check;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}