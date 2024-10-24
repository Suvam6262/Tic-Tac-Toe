let allBox = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];  // Winning patterns //

let turnX = true;  // For initial value

let winner;

let count  = 0;

const clickCount = ()=>{   // Click count
    count++;
}



allBox.forEach((box) =>{                  //Alternate turn  
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerHTML = "X";
            turnX = false;
        }else{
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;

                                       
        for (const pattern of winningPatterns) {      // Check winner
            let v1 = allBox[pattern[0]].innerText;
            let v2 = allBox[pattern[1]].innerText;
            let v3 = allBox[pattern[2]].innerText;

            if(v1 != "" && v2 != "" && v3 != ""){
                if(v1 === v2 && v2 === v3){
                    document.querySelector(".msg").innerText = `Congrats! Winner is ${v1}`;
                    winner = true;
                    disableBtn();
                }
            }

            if(count === 9 && !winner){
                document.querySelector(".msg").innerText = `Match Draw!`;
            }
            
        }
    })

    
})
                                                //Reload game
let newGame = document.getElementById("reset").addEventListener("click", ()=>{
    location.reload();
})


const disableBtn = () =>{            // Disable Boxes 
    for (const box of allBox) {
        box.disabled = true;
    }
}


const enableBtn = () =>{            // Enable Boxes 
    for (const box of allBox) {
        box.disabled = false;
    }
}



