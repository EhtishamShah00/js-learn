const fs = require("fs");
const cheerio = require("cheerio");

// Read the HTML file
const html = fs.readFileSync("input.html", "utf-8");

// Function to extract data and convert it to JSON
function extractData(html) {
  const $ = cheerio.load(html);

  // Your data extraction logic here
  const title = $("title").text();

  // Example: Extract all paragraphs and remove leading/trailing whitespaces
  const paragraphs = $("p")
    .map((index, element) => $(element).text().trim())
    .get();

  // Create a dynamic JSON object
  const jsonData = {
    title,
    // Add more fields as needed
  };

  // Automatically add extracted paragraphs to the JSON object
  paragraphs.forEach((paragraph, index) => {
    jsonData[`paragraph${index + 1}`] = paragraph;
  });

  return jsonData;
}

// Extract data from HTML
const extractedData = extractData(html);

// Output the data in JSON format
const jsonDataString = JSON.stringify(extractedData, null, 2);
console.log(jsonDataString);

// Save the JSON data to a file
fs.writeFileSync("output.json", jsonDataString, "utf-8");
