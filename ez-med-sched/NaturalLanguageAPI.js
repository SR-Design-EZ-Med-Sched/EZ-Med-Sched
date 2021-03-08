import React, { Component } from 'react';

// Imports the Google Cloud client library
const language = require('@google-cloud/language');
require('dotenv').config();

//Credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Creates a client
const client = new language.LanguageServiceClient({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = "Mark Marzke hydrOXYzine HCL 25 MG TABLET TAKE 1-2 TABLETS BY MOUTH EVERY 8 HOURS AS NEEDED";

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Classifies text in the document
const [classification] = async () => await client.classifyText({document});
console.log('Categories:');
classification.categories.forEach(category => {
  console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
});

class NLClassifications extends Component {
  render() {
    return classification;
  }
}

export default NLClassifications;