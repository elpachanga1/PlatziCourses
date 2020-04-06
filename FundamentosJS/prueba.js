console.log("hablame mi prrrro");

function computeJoinPoint(s1, s2) {
  debugger;
  let sequenceS1 = s1;
  let sequenceS2 = s2;

  while (s1 !== s2) {
    const sequences = operateSequences(s1, s2);

    sequenceS1 = sequences[0];
    sequenceS2 = sequences[1];
  }
  return s1;
}

function operateSequences(s1, s2) {
  const digitsS1 = separateDigits(s1);
  const digitsS2 = separateDigits(s2);

  const sumS1 = digitsS1.reduce((a, b) => a + b, 0);
  const sumS2 = digitsS2.reduce((a, b) => a + b, 0);

  const sequenceS1 = s1 + sumS1;
  const sequenceS2 = s2 + sumS2;

  return [sequenceS1, sequenceS2];
}

function separateDigits(number) {
  (output = []), (sNumber = number.toString());

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }

  console.log(output);
  return output;
}

computeJoinPoint(1234, 12);
