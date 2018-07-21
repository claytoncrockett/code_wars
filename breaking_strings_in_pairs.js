function a(str){
  arr = []
  for(var i = 2; i <= str.length; i+=2){
    arr.push(str.substring(i-2,i))
  }
  (str.length % 2 !== 0) && arr.push(`${str[str.length-1]}_`)
  return arr
}



console.log(a("heyalop"))
//expected['he','ya','lo','p_']