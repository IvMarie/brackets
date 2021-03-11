module.exports = function check(str, bracketsConfig) {

  str = str.split('');
  for (let i = 1; i < str.length; i++){
    let a = [str[i-1], str[i]];
  	  for (let x = 0; x < bracketsConfig.length; x++ ) {
        let arr = bracketsConfig[x];
  	    if ((a[0] == arr[0]) && (a[1] == arr[1])) {
          str.splice(i-1 , 2);
          i = 0;
        }
      } 
  }
  return (str && str.length !== 0) ? false : true;
}
