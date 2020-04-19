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

  var n = 0
  var arrayNew2 =[]
  while (n < array.length){
  arrayNew2.push(`${array[n]}!!!`)
  n++;

function currentLine(lineArray){
  var countedLine = []
  var g = 0
  if (lineArray.length > 0){
  countedLine.push(`1. ${lineArray[g]}`)
  g++
  return `The line is currently: .`
  }
  else { 
  return "The line is currently empty."
}
}