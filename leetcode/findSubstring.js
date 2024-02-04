var findSubstring = function(s, words) {
  let wordsMap = {};
  let wordsMapCopy = {};
  let wordLength = words[0].length;
  let subStrLen = words[0].length*words.length;
  let maxLen = s.length-subStrLen;
  let res = [];
  words.forEach((word) => {
    wordsMap.hasOwnProperty(word) ? wordsMap[word] = wordsMap[word] + 1 : wordsMap[word] = 1;
  });
  let check = (str) => {
      wordsMapCopy = JSON.parse(JSON.stringify(wordsMap));
      for(let i=0; i<subStrLen;i = i+wordLength) {
          let chunk = str.substring(i, i + wordLength)
          if(!wordsMapCopy.hasOwnProperty(chunk) || wordsMapCopy[chunk] === 0) {
              return false;
          } else {
            wordsMapCopy[chunk] = wordsMapCopy[chunk] - 1;
          }
      }
      return true;
  }
  for(let i=0; i<maxLen; i++) {
      let str = s.substring(i,i+(words[0].length * words.length));
      if(check(str)) {
          res.push(i);
      }
  }
  return res;
};

console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","word"]));