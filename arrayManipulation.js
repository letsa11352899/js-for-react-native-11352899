function processArray(arr) {
    return arr.map(num => num % 2 === 0? num ** 2 : num * 3);
   
    function formatArrayStrings(strings, processedNumbers) {
        return strings.map((string, index) => {
          const processedNumber = processedNumbers[index];
          return processedNumber % 2 === 0
            ? string.toUpperCase()
            : string.toLowerCase();
        });
      }
}
