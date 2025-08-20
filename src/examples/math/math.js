function addLargeNumbers(num1Str, num2Str) {
    // Pad the shorter number with leading zeros
    const maxLength = Math.max(num1Str.length, num2Str.length);
    num1Str = num1Str.padStart(maxLength, '0');
    num2Str = num2Str.padStart(maxLength, '0');

    let carry = 0;
    let result = '';

    // Start adding from the least significant digit
    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(num1Str[i], 10);
        const digit2 = parseInt(num2Str[i], 10);
        let sum = digit1 + digit2 + carry;

        // If the sum is more than 9, we have a carry for the next digit
        if (sum > 9) {
            carry = 1;
            sum -= 10; // Subtract 10 to get the last digit of the sum
        } else {
            carry = 0;
        }

        // Add the current digit to the result string
        result = sum.toString() + result;
    }

    // If there's a carry left at the end, add it to the result
    if (carry > 0) {
        result = carry.toString() + result;
    }

    return result;
}

function calculateSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = addLargeNumbers(num1, num2);
    document.getElementById('result').innerText = "The sum is: " + sum;
}