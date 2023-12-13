/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // Regular expression for whole word search
    var regex = new RegExp("\\b" + searchTerm + "\\b", "i");

    // Check if the search term is empty
    if (searchTerm === "") {
        return result;
    }

    // Loop through each book in the scannedTextObj
    scannedTextObj.forEach(book => {
        let isbn = book.ISBN;

        // Loop through each content item in the book
        book.Content.forEach(content => {
            let page = content.Page;
            let line = content.Line;
            let text = content.Text;

            // Check if the searchTerm is in the text
            if (text.includes(searchTerm) && regex.test(text)) {
                // Add the result to the Results array
                result.Results.push({
                    "ISBN": isbn,
                    "Page": page,
                    "Line": line
                });
            }
        });
    });

    return result;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/**
 * MY TESTCASES
 */

// POSITIVE TESTS
// Test 3: Searching for 'and' in the example book where it occurs 2 times
// Assuming 'and' occurs 2 times in the example book
const test3result = findSearchTermInBooks("and", twentyLeaguesIn);
if (test3result.Results.length === 2) {
    console.log("PASS: Test 3 (Multiple Occurrences)");
} else {
    console.log("FAIL: Test 3 (Multiple Occurrences)");
    console.log("Expected 2 results, Received:", test3result.Results.length);
}

// Test 4: Searching for 'Canadian\'s' in the example book where it's present
// Assuming 'Canadian\'s' is in the text
const test4result = findSearchTermInBooks("Canadian\'s", twentyLeaguesIn);
if (test4result.Results.length === 1) {
    console.log("PASS: Test 4 (Special Characters)");
} else {
    console.log("FAIL: Test 4 (Special Characters)");
    console.log("Expected 1 result, Received:", test4result.Results.length);
}

// Test 5: Searching for 'momentum' in the example book where it occurs once
// Assuming 'momentum' occurs 1 time in the example book
const test5result = findSearchTermInBooks("momentum", twentyLeaguesIn);
if (test5result.Results.length === 1) {
    console.log("PASS: Test 5 (Specific Word Occurrence)");
} else {
    console.log("FAIL: Test 5 (Specific Word Occurrence)");
    console.log("Expected 1 result, Received:", test5result.Results.length);
}

// NEGATIVE TESTS 
// Test 6: Searching for 'xyz' which is not in the example book
const test6result = findSearchTermInBooks("xyz", twentyLeaguesIn);
if (test6result.Results.length === 0) {
    console.log("PASS: Test 6 (No Matches)");
} else {
    console.log("FAIL: Test 6 (No Matches)");
    console.log("Expected 0 results, Received:", test6result.Results.length);
}

// Test 7: Searching with an empty search term
const test7result = findSearchTermInBooks("", twentyLeaguesIn);
if (test7result.Results.length === 0) {
    console.log("PASS: Test 7 (Empty Search Term)");
} else {
    console.log("FAIL: Test 7 (Empty Search Term)");
    console.log("Expected 0 results, Received:", test7result.Results.length);
}

// Test 8: Searching for 'th' (partial match) in the example book
// Assuming 'the' is in the text but not 'th'
const test8result = findSearchTermInBooks("th", twentyLeaguesIn);
if (test8result.Results.length === 0) {
    console.log("PASS: Test 8 (Whole Word Search)");
} else {
    console.log("FAIL: Test 8 (Whole Word Search)");
    console.log("Expected 0 results, Received:", test8result.Results.length);
}


// CASE SENSITIVITY TESTS
// Test 9: Searching for 'The' (mixed case) in a text containing 'the'
const test9result = findSearchTermInBooks("The", twentyLeaguesIn);
if (test9result.Results.length === 1) {
    console.log("PASS: Test 9 (Case Sensitivity)");
} else {
    console.log("FAIL: Test 9 (Case Sensitivity)");
    console.log("Expected 1 result, Received:", test9result.Results.length);
}

// Test 10: Searching for 'THE' (all uppercase) in a text containing 'the'
const test10result = findSearchTermInBooks("THE", twentyLeaguesIn);
if (test10result.Results.length === 0) {
    console.log("PASS: Test 10 (Case Sensitivity - All Uppercase)");
} else {
    console.log("FAIL: Test 10 (Case Sensitivity - All Uppercase)");
    console.log("Expected 0 results, Received:", test10result.Results.length);
}

