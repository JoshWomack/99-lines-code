

let friends = ['Ana', 'Henry', 'Bob', 'Ted', 'Joe'];

for (i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");
    let j = 99;
    while (j > 0) {
        let oneLess = j - 1;
        if (j > 2) {
            console.log(j + " lines of code in the file. " + j.toString() + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + oneLess + " lines of code in the file.");
            j--;
        } else if (j == 2) {
            console.log(j + " lines of code in the file. " + j.toString() + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + oneLess + " line of code in the file.");
            j--;
        } else {
            console.log(j + " line of code in the file. " + j.toString() + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.");
            j--;
        }
    }
}