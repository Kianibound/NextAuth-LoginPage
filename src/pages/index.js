import Image from "next/image";
import Head from "next/head";

function findRepeatedNumber(numbers) {
  // Create an empty object to store the count of each number
  var count = {};

  // Loop through the array of numbers
  for (var i = 0; i < numbers.length; i++) {
    // Get the current number from the array
    var currentNumber = numbers[i];

    // If we've already seen this number, it's a repeated number, so return it
    if (count[currentNumber] !== undefined) {
      return currentNumber;
    }

    // Otherwise, add the current number to the count object
    count[currentNumber] = 1;
    console.log(count);
  }

  // If we get to the end of the loop without finding a repeated number, return "not found"
  return "not found";
}
var numbers = [1, 2, 3, 4, 2, 5];
var repeatedNumber = findRepeatedNumber(numbers);
console.log(repeatedNumber); // Output: 2

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1 className="text-3xl">Home Page</h1>
      </main>
    </>
  );
}
