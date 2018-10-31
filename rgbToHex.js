function rgb(r, g, b){
  var solution = setValues(r, g, b)
  return solution
}

function setValues(r, g, b){
  var a = setValue(r);
  var q = setValue(g);
  var c = setValue(b);
  var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  return (hex[a[0]] + hex[a[1]] + hex[q[0]] + hex[q[1]] + hex[c[0]] + hex[c[1]]);
}

function setValue(x){
  if (x < 0) return [0, 0];
  if (x > 255) return [15, 15];
  arr = [0, 0];
  while (x > 15){
    arr[0]++;
    x -= 16;
  }
  arr[1] = x;
  return arr;
}

// rgb to hex converter in js
