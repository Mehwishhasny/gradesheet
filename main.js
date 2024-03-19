import inquirer from "inquirer";
const percentage = await inquirer.prompt([
    { message: "Enter your percentage:", type: "number", name: "scorePercentage" },
]);
if (percentage.scorePercentage >= 90) {
    console.log("Your percentage is:", percentage.scorePercentage, "%.", "\nYour grade according to the percentage is 'A+'.");
}
else if (percentage.scorePercentage >= 80) {
    console.log("Your percentage is:", percentage.scorePercentage, "%.", "\nYour grade according to the percentage is 'A'.");
}
else if (percentage.scorePercentage >= 70) {
    console.log("Your percentage is:", percentage.scorePercentage, "%.", "\nYour grade according to the percentage is 'B+'.");
}
else if (percentage.scorePercentage >= 50) {
    console.log("Your percentage is:", percentage.scorePercentage, "%.", "\nYour grade according to the percentage is 'B'.");
}
else if (percentage.scorePercentage >= 40) {
    console.log("Your percentage is:", percentage.scorePercentage, "%.", "\nYour grade according to the percentage is 'C'.");
}
else {
    console.log("Your percentage is:", percentage.scorePercentage, "%.", "\nYour grade according to the percentage is 'F'.");
}
