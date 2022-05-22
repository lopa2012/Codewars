/* 
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

 */

function findShort(s){
  let arr = s.split(' ');
  let arrLengths = [];
  let wordLength = 0;
  let minLength = 0;
  arr.forEach(word => {
    wordLength = word.length;
    arrLengths.push(wordLength);
  })
  minLength = arrLengths[0];
  for(let i=0; i<arrLengths.length; i++)
  {
    if(arrLengths[i]<minLength)
    {
      minLength = arrLengths[i];
    }
  }
  return minLength;
}
