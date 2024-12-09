import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon('postgresql://AI-Form-Builder_owner:etxvWCi0qa3M@ep-frosty-band-a1igekwr.ap-southeast-1.aws.neon.tech/AI-Form-Builder?sslmode=require');
export const db = drizzle(sql,{schema});

