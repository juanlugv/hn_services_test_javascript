//  Define the function F21 to verify all positions are numbers from 1 to 9 and all different
function F21(A) {
    let seen = {};
  
    for (let i = 0; i < 9; i++) {
      let num = A[i];
  
      // Check if the position is a number between 1 and 9
      if (isNaN(num) || num < 1 || num > 9) {
        return false;
      }
  
      // Check if the position is already seen
      if (seen[num]) {
        return false;
      }
      seen[num] = true;
    }
  
    return true;
  }  