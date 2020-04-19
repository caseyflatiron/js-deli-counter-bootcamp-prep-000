function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`
}

function nowServing(lineArray){
  var customer = lineArray[0]
  if (lineArray.length > 0){
    lineArray.shift()
  return `Currently serving ${customer}.`
  }
  else {
  return "There is nobody waiting to be served!"
}
}


function currentLine(lineArray){
  var countedLine = []
  var count = 0
  if (lineArray.length > 0){
    for (let i = 0, i < lineArray.length, i++){
      countedLine.push(`1. ${lineArray[count]}`)
      count++
  return `The line is currently: ${countedLine.toString()}.`
  }
  else { 
  return "The line is currently empty."
}
}