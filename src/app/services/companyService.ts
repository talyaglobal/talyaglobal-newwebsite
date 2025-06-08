// Mock company service for static generation
export const companyService = {
  // Get a single company by ID
  async getCompanyById(id: string) {
    // Return mock data for static generation
    return {
      id,
      name: 'Example Company',
      description: 'This is a mock company for static generation',
      industry: 'Technology',
      stage: 'Series A',
      location: 'San Francisco, CA',
      foundedYear: 2020,
      employees: 50,
      website: 'https://example.com',
      logo: '/images/company-logo.png',
      updatedAt: new Date().toISOString(),
    };
  },

  // Get all companies with filtering and pagination
  async getCompanies(filters: any = {}, limit = 10, offset = 0) {
    // Return mock data for static generation
    const mockCompanies = Array(10).fill(0).map((_, i) => ({
      id: `company-${i + 1}`,
      name: `Company ${i + 1}`,
      description: `This is a mock company ${i + 1} for static generation`,
      industry: ['Technology', 'Finance', 'Healthcare', 'E-commerce'][i % 4],
      stage: ['Seed', 'Series A', 'Series B', 'Series C', 'Growth'][i % 5],
      location: ['San Francisco', 'New York', 'London', 'Berlin', 'Singapore'][i % 5],
      foundedYear: 2020 + (i % 5),
      employees: 10 * (i + 1),
      website: `https://example${i + 1}.com`,
      logo: '/images/company-logo.png',
      updatedAt: new Date().toISOString(),
    }));

    // Apply filters
    let filteredCompanies = mockCompanies;
    if (filters.industry) {
      filteredCompanies = filteredCompanies.filter(c => c.industry === filters.industry);
    }
    if (filters.stage) {
      filteredCompanies = filteredCompanies.filter(c => c.stage === filters.stage);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredCompanies = filteredCompanies.filter(
        c => c.name.toLowerCase().includes(searchLower) || 
             c.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply pagination
    const paginatedCompanies = filteredCompanies.slice(offset, offset + limit);

    return {
      data: paginatedCompanies,
      total: filteredCompanies.length,
      limit,
      offset
    };
  },

  // Search companies by query
  async searchCompanies(query: string, limit = 10) {
    const companies = await this.getCompanies({}, 100, 0);
    const searchLower = query.toLowerCase();
    
    const results = companies.data.filter(
      c => c.name.toLowerCase().includes(searchLower) || 
           c.description.toLowerCase().includes(searchLower) ||
           c.industry.toLowerCase().includes(searchLower)
    ).slice(0, limit);

    return {
      data: results,
      total: results.length,
      limit,
      offset: 0
    };
  },
  
  // Create a new company
  async createCompany(data: any) {
    // Return mock data for static generation
    return {
      id: `company-${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },
  
  // Update an existing company
  async updateCompany(id: string, data: any) {
    // Return mock data for static generation
    return {
      id,
      ...data,
      updatedAt: new Date().toISOString(),
    };
  },
  
  // Delete a company
  async deleteCompany(id: string) {
    // Return mock success for static generation
    return { success: true, id };
  }
};
