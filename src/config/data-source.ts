/**
 * Data Source Configuration
 *
 * Switch between local JSON and Vercel Blob storage.
 * - 'local': Reads from src/data/portfolio.json (default, fastest)
 * - 'blob': Fetches from Vercel Blob at build time (for CMS-like updates)
 */

export type DataSource = 'local' | 'blob';

export const DATA_SOURCE: DataSource = 'local';

// Vercel Blob URL (set in environment variables when using blob)
export const BLOB_URL = import.meta.env.PORTFOLIO_BLOB_URL || '';
