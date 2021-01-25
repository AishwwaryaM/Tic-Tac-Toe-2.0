cur=0;
mat= [[0, 0, 0] , [0, 0, 0], [0, 0, 0 ]];

function newGame(){
    cur=0;
    mat= [[0, 0, 0] , [0, 0, 0], [0, 0, 0 ]];
    for(var k=0;k<9;k++)
    {
        var x = document.getElementsByClassName("slots")[k];
        x.disabled = false;
        x.innerHTML = "";
        x.classList.remove("X");
        x.classList.remove("O");
    }
    document.getElementsByClassName("game")[0].innerHTML = "" ;
}

function check(){
    var finished =0;
    for(var p=0;p<3;p++)
    {
        if(mat[p][0]!=0 && mat[p][0]==mat[p][1] && mat[p][1]==mat[p][2])
        {
            finished =1;
            break;
        }
        if(mat[0][p]!=0 && mat[0][p]==mat[1][p] && mat[1][p]==mat[2][p])
        {
            finished =1;
            break;
        }
    }
    if(mat[0][0]!=0 && mat[0][0]==mat[1][1] && mat[1][1]==mat[2][2])
    {
        finished =1;
    }
    if(mat[0][2]!=0 && mat[0][2]==mat[1][1] && mat[1][1]==mat[2][0])
    {
        finished =1;
    }
    if(finished==1)
    {
        for(var k=0;k<9;k++)
        {
            document.getElementsByClassName("slots")[k].disabled = true;
        }
        document.getElementsByClassName("game")[0].innerHTML = "GAME OVER" ;
    }
}

function mark(event) {
    var x = event.target;
    var loc = x.id;
    var col = loc%3;
    var row = parseInt(loc/3);
    if(cur==0) {
        x.classList.add("X");
        x.disabled = true;
        x.innerHTML = "X";
        cur=1;
        mat[row][col] = 1;
    }
    else {
        x.classList.add("O");
        x.disabled = true;
        x.innerHTML = "O";
        cur=0;
        mat[row][col] = 2;
    }
    check();
}

for(var i=0;i<9;i++){
    var z = document.getElementsByClassName("slots")[i].addEventListener("click", mark);
}

document.getElementById("newgame").addEventListener("click", newGame);
