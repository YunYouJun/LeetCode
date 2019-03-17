/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = '';
  if (strs.length === 0) return str;
  let minL = strs[0].length;
  strs.forEach(item => {
    if (item.length < minL) {
      minL = item.length
    }
  })
  for(let i = minL; i > 0; i--){
    let _str = strs[0].substr(0, i)
    let key = true;
    for(let j = 0; j < strs.length; j++){
      let _strs = strs[j].substr(0, i)
      if(_strs !== _str){
        key = false;
        break;
      }
    }
    if (key) {
      str = _str;
      break;
    }
  }
  return str;
};