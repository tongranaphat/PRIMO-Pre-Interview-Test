# Pre-Interview Test: Array Merger

This repository contains the TypeScript implementation and unit tests for the Array Merge technical assessment. 

## Approach & Time Complexity
Per the requirements, no native `.sort()` functions were used. 

Instead, this solution utilizes a highly efficient **Two-Pointer Approach** to merge the collections in **O(n) linear time**. 
* Because `collection_2` was provided in descending order, it is manually iterated in reverse to match the ascending format.
* The arrays are then merged sequentially using the `mergeTwoAscendings` helper function.

## Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.

## Setup & Execution

**1. Install Dependencies**
Navigate to the project directory and install the required TypeScript and Jest packages:
\`\`\`bash
npm install
\`\`\`

**2. Run the Unit Tests**
The core logic and edge cases are validated using Jest. To execute the test suite, run:
\`\`\`bash
npm run test
\`\`\`