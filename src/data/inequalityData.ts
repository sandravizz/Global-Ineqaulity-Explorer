// Import CSV data using Vite's ?raw directive
// @ts-ignore - Vite handles raw imports
import csvString from '../data/data_diff.csv?raw';

// Keep existing DataRow interface for backward compatibility
export interface DataRow {
  year: number;
  country: string;
  middle_40: number;
  bottom_50: number;
  top_10: number;
  top_1: number;
  region: string;
  region2: string;
  shortname: string;
  decade: number;
}

// Fallback sample data (same as before)
const fallbackData: DataRow[] = [
  { year: 1980, country: "US", middle_40: 0.35, bottom_50: 0.21, top_10: 0.33, top_1: 0.10, region: "Americas", region2: "North America", shortname: "United States", decade: 1980 },
  { year: 1990, country: "US", middle_40: 0.31, bottom_50: 0.17, top_10: 0.41, top_1: 0.14, region: "Americas", region2: "North America", shortname: "United States", decade: 1990 },
  { year: 2000, country: "US", middle_40: 0.27, bottom_50: 0.13, top_10: 0.49, top_1: 0.19, region: "Americas", region2: "North America", shortname: "United States", decade: 2000 },
  { year: 2010, country: "US", middle_40: 0.23, bottom_50: 0.11, top_10: 0.55, top_1: 0.23, region: "Americas", region2: "North America", shortname: "United States", decade: 2010 },
  { year: 2020, country: "US", middle_40: 0.21, bottom_50: 0.09, top_10: 0.59, top_1: 0.27, region: "Americas", region2: "North America", shortname: "United States", decade: 2020 },
  { year: 2024, country: "US", middle_40: 0.20, bottom_50: 0.08, top_10: 0.61, top_1: 0.29, region: "Americas", region2: "North America", shortname: "United States", decade: 2020 },
];

// Simple native CSV parser
const parseCsvData = (): DataRow[] => {
  try {
    console.log('Loading CSV data...');
    console.log('CSV string length:', csvString.length);
    
    if (!csvString || csvString.trim() === '') {
      console.warn('CSV string is empty, using fallback dataset');
      return fallbackData;
    }

    // Simple CSV parser
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',').map((h: string) => h.trim());
    
    console.log('CSV headers:', headers);
    console.log('Total CSV lines:', lines.length);
    
    const parsedCsv = lines.slice(1).map((line: string) => {
      const values = line.split(',');
      const row: Record<string, string> = {};
      
      headers.forEach((header: string, index: number) => {
        row[header] = values[index]?.trim() || '';
      });
      
      return row;
    });

    console.log('Parsed CSV rows:', parsedCsv.length);

    if (!parsedCsv || parsedCsv.length === 0) {
      console.warn('CSV parsing returned empty data, using fallback');
      return fallbackData;
    }

    // Map CSV rows to DataRow interface with field transformation
    const mappedData: DataRow[] = parsedCsv.map((row: any, index: number) => {
      try {
         // Validate required fields
         if (!row.year || !row.country || row.middle_40 === undefined || 
             row.bottom_50 === undefined || row.top_10 === undefined || 
             row.top_1 === undefined) {
           console.warn(`Skipping row ${index} due to missing required fields:`, row);
           return null;
         }

         const mappedRow = {
           year: parseInt(row.year),
           country: row.country,
           middle_40: parseFloat(row.middle_40),    // Direct mapping from CSV
           bottom_50: parseFloat(row.bottom_50),    // Direct mapping from CSV
           top_10: parseFloat(row.top_10),         // Direct mapping from CSV
           top_1: parseFloat(row.top_1),           // Direct mapping from CSV
           region: row.region || '',
           region2: row.region2 || '',
           shortname: row.shortname || '',
           decade: parseInt(row.decade),
         };

        // Debug first few rows
        if (index < 5) {
          console.log(`Row ${index}:`, { original: row, mapped: mappedRow });
        }

        return mappedRow;
      } catch (error) {
        console.warn(`Error parsing row ${index}:`, error, row);
        return null;
      }
    }).filter((row: DataRow | null): row is DataRow => row !== null);

    if (mappedData.length === 0) {
      console.warn('No valid data rows after parsing, using fallback');
      return fallbackData;
    }

    // Log unique countries for debugging
    const uniqueCountries = Array.from(new Set(mappedData.map(d => d.country)));
    const uniqueRegions = Array.from(new Set(mappedData.map(d => d.region2)));
    
    console.log(`Successfully loaded ${mappedData.length} data rows from CSV`);
    console.log('Unique countries found:', uniqueCountries.slice(0, 20), `... (${uniqueCountries.length} total)`);
    console.log('Unique regions found:', uniqueRegions);
    
    return mappedData;

  } catch (error) {
    console.error('Error loading CSV data, using fallback:', error);
    return fallbackData;
  }
};

// Export the parsed data (parsed once at import time)
export const inequalityData: DataRow[] = parseCsvData();

// Get unique countries
export const getCountries = (): { code: string; name: string }[] => {
  const uniqueCountries = new Map<string, string>();
  inequalityData.forEach(row => {
    uniqueCountries.set(row.country, row.shortname);
  });
  
  const countryList = Array.from(uniqueCountries.entries())
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
    
  console.log('getCountries() returning:', countryList.length, 'countries');
  console.log('First 10 countries:', countryList.slice(0, 10));
  
  return countryList;
};

// Get unique regions
export const getRegions = (): string[] => {
  const uniqueRegions = new Set<string>();
  inequalityData.forEach(row => {
    uniqueRegions.add(row.region2);
  });
  
  const regionList = Array.from(uniqueRegions).sort();
  console.log('getRegions() returning:', regionList);
  
  return regionList;
};

// Filter data by country or region
export const filterData = (country?: string, region?: string): DataRow[] => {
  console.log('filterData called with:', { country, region });
  
  let filtered = inequalityData;
  
  if (country && country !== 'All') {
    filtered = filtered.filter(row => row.country === country);
    console.log(`Filtered by country ${country}:`, filtered.length, 'rows');
  }
  
  if (region && region !== 'All') {
    filtered = filtered.filter(row => row.region2 === region);
    console.log(`Filtered by region ${region}:`, filtered.length, 'rows');
  }
  
  return filtered;
};

// Calculate growth percentages from base year
export const calculateGrowth = (data: DataRow[], startYear: number = 1980) => {
  const baseData = data.find(row => row.year === startYear);
  if (!baseData) return data;
  
  return data.map(row => ({
    ...row,
    middle_40_growth: ((row.middle_40 - baseData.middle_40) / baseData.middle_40) * 100,
    bottom_50_growth: ((row.bottom_50 - baseData.bottom_50) / baseData.bottom_50) * 100,
    top_10_growth: ((row.top_10 - baseData.top_10) / baseData.top_10) * 100,
    top_1_growth: ((row.top_1 - baseData.top_1) / baseData.top_1) * 100,
  }));
};