//Write a recursive function called reverse which accepts a string and
//returns a new string in reverse.

//1. Check if string is empty ==> return empty string
//2. Set index = length - 1, base case when index = 0
//3. Get each character of string at index then push to result

function reverse(str) {
  if (str.length === 0) return "";
  let result = [];
  let index = str.length - 1;
  function helper(helperInput) {
    if (helperInput === -1) return;
    result += str[helperInput];
    helper(helperInput - 1);
  }

  helper(index);
  return result;
}

module.exports = reverse;
/* SOLUTION
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
*/
