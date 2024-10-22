let allBox = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turn0 = true; 

const winpattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

allBox.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;

        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const checkwinner = () =>{
    for (const pattern of winpattern) {
        v1 = allBox[pattern[0]].innerText;
        v2 = allBox[pattern[1]].innerText;
        v3 = allBox[pattern[2]].innerText;

    if(v1 != "" && v2 != "" && v3 != ""){
        if( v1 === v2 && v2 === v3){
            console.log(`Winner is "${v1}" `);
            disablebtn();
        }
    }
    }
}

const disablebtn = ()=>{
    for (const btns of allBox) {
        btns.disabled = true;
    }
}