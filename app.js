
let friends = ['Ana', 'Henry', 'Bob', 'Ted', 'Joe'];

const singButton = document.getElementById('sing-time');

singButton.addEventListener('click', function () {
    for (i = 0; i < friends.length; i++) {
        //Create friend div
        let newDiv = document.createElement('div');
        newDiv.className = 'friend';
        let newH3 = document.createElement('h3');
        newH3.textContent = friends[i];
        newDiv.appendChild(newH3);
        document.body.appendChild(newDiv);
        allDivs = document.getElementsByClassName('friend');
        let j = 99;
        while (j > 0) {
            let currentParagraph = document.createElement('p');
            currentParagraph.className = 'song-p';
            allDivs[i].appendChild(currentParagraph);
            let oneLess = j - 1;
            if (j > 2) {
                currentParagraph.textContent = `${j} lines of code in the file!   ${j} lines of code! ${friends[i]} strikes one out, clears it all out, ${oneLess} lines of code in the file!`;
                j--;
            
            } else if (j == 2) {
                currentParagraph.textContent = `${j} lines of code in the file! ${j} lines of code! ${friends[i]} strikes one out, clears it all out, ${oneLess} line of code in the file!`;
                j--;
       
            } else {
                currentParagraph.textContent = `${j} line of code in the file! ${j} line of code! ${friends[i]} strikes one out, clears it all out, no more lines of code in the file!`;
                j--;
            }
        }
    }
})


