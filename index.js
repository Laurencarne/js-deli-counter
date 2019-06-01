var katzDeli = []
var otherDeli = []

function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
};

function nowServing(deli) {
  if (deli.length == 0) {
    return `There is nobody waiting to be served!`
  } else {
    let serving = deli.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(deli) {
  if (deli.length == 0) {
    return "The line is currently empty."
  }
  const positionAndName = []
  for (let i = 0; i < deli.length; i++) {
    positionAndName.push(`${i+1}. ${deli[i]}`)
  }
  return `The line is currently: ${positionAndName.join(", ")}`
};
