import AWS from 'aws-sdk';
require('dotenv').config();

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
});

const db = new AWS.DynamoDB.DocumentClient();

const ProjectTable = 'Project',
  ExperienceTable = 'Experience';

export { db, ProjectTable, ExperienceTable };
