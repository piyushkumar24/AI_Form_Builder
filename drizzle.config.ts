import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: 'configs/schema.ts',
  out: './drizzle',
  dialect:'postgresql',
  dbCredentials: {
    url: 'postgresql://AI-Form-Builder_owner:etxvWCi0qa3M@ep-frosty-band-a1igekwr.ap-southeast-1.aws.neon.tech/AI-Form-Builder?sslmode=require',
  },
});
