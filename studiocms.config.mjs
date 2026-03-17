import { defineStudioCMSConfig } from 'studiocms/config';
import md from '@studiocms/md';
import html from '@studiocms/html';

export default defineStudioCMSConfig({
  dbStartPage: false,
  db: {
    dialect: 'libsql',
  },
  plugins: [
    md(),
    html(),
  ],
  dashboard: {
    dashboardEnabled: false,
  },
});
