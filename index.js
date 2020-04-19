function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`
}