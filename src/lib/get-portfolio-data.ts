import { DATA_SOURCE, BLOB_URL } from '../config/data-source';
import type { PortfolioData } from './types';
import localData from '../data/portfolio.json';

/**
 * Fetches portfolio data from configured source.
 * - Local: Returns JSON directly (zero network cost)
 * - Blob: Fetches from Vercel Blob URL at build time
 */
export async function getPortfolioData(): Promise<PortfolioData> {
  if (DATA_SOURCE === 'local') {
    return localData as PortfolioData;
  }

  // Fetch from Vercel Blob
  if (!BLOB_URL) {
    console.warn('PORTFOLIO_BLOB_URL not set, falling back to local data');
    return localData as PortfolioData;
  }

  try {
    const response = await fetch(BLOB_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch from Blob: ${response.status}`);
    }
    return (await response.json()) as PortfolioData;
  } catch (error) {
    console.error('Error fetching from Blob, falling back to local:', error);
    return localData as PortfolioData;
  }
}
