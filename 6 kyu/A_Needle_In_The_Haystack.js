/* 
A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")

 */

function findNeedle(haystack)
{
  let flag=0, index=0, msg = '';
  for(let i=0; i<haystack.length; i++)
  {
    if(haystack[i] === 'needle')
    {
      flag = 1;
      index = i;
    }
  }
  if(flag === 1)
  {
    msg = 'found the needle at position '+index;
  }
  return msg;
}