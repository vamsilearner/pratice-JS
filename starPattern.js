let output = "";
function starPattern(NoOfRows) {
  for (let i = 1; i <= NoOfRows; i++) {
    for (let j = NoOfRows; j > i; j--) {
      output += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      output += "*";
    }
    output += "\n";
  }
  return output;
}
console.log(starPattern(5));

// The space complexity is O(n). 
// The only significant storage used by the algorithm is the output string, which grows linearly with n.
// time complexity of the entire function O(n^3) in worst case, if not  time complexity of the entire function O(n^2)