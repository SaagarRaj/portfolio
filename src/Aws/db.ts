import { db, ProjectTable, ExperienceTable } from './db.config';
import { ExperienceItem, ProjectItem } from '@/Shared/Types/types';
require('dotenv').config();

export const getAllProject = async (): Promise<ProjectItem[]> => {
  const params = {
    TableName: ProjectTable,
  };

  try {
    const data = await db.scan(params).promise();
    return data.Items as ProjectItem[];
  } catch (error) {
    console.error('Error fetching ProjectTable:', error);
    throw new Error(`Error fetching projects from DynamoDB: ${error}`);
  }
};

export const putProject = async (project: ProjectItem[]): Promise<void> => {
  const params = {
    TableName: ProjectTable,
    Item: project,
  };

  try {
    await db.put(params).promise();
    console.log('Project added to the table');
  } catch (error) {
    console.error('Error inserting project into DynamoDB:', error);
    throw new Error(`Error inserting project into DynamoDB: ${error}`);
  }
};

export const deleteProject = async (key: { title: string }): Promise<void> => {
  const params = {
    TableName: ProjectTable,
    Key: key,
  };

  try {
    await db.delete(params).promise();
    console.log('Project deleted successfully!');
  } catch (error) {
    console.error('Error deleting project from DynamoDB:', error);
    throw new Error(`Error deleting project from DynamoDB: ${error}`);
  }
};

export const getAllExperience = async (): Promise<ExperienceItem[]> => {
  const params = {
    TableName: ExperienceTable,
  };

  try {
    const data = await db.scan(params).promise();
    return data.Items as ExperienceItem[];
  } catch (error) {
    console.error('Error fetching ProjectTable:', error);
    throw new Error(`Error fetching projects from DynamoDB: ${error}`);
  }
};

export const putExperience = async (
  project: ExperienceItem[],
): Promise<void> => {
  const params = {
    TableName: ExperienceTable,
    Item: project,
  };

  try {
    await db.put(params).promise();
    console.log('Experience added to the table');
  } catch (error) {
    console.error('Error inserting experience into DynamoDB:', error);
    throw new Error(`Error inserting experience into DynamoDB: ${error}`);
  }
};

export const deleteExperience = async (key: {
  title: string;
}): Promise<void> => {
  const params = {
    TableName: ExperienceTable,
    Key: key,
  };

  try {
    await db.delete(params).promise();
    console.log('Experience deleted successfully!');
  } catch (error) {
    console.error('Error deleting Experience from DynamoDB:', error);
    throw new Error(`Error deleting Experience from DynamoDB: ${error}`);
  }
};
