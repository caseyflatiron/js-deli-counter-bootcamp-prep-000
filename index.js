function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are ${lineArray.length + 1} in line.`
}