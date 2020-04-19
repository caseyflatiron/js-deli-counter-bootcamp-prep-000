function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`
}

function nowServing(lineArray){
  var customer = lineArray[0]
  lineArray.shift()
  return customer
}