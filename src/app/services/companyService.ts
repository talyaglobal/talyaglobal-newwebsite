// Mock company service for static generation
export const companyService = {
  async getCompanyById(id: string) {
    // Return mock data for static generation
    return {
      id,
      name: 'Example Company',
      description: 'This is a mock company for static generation',
      // Add other necessary fields
    };
  },
  
  async updateCompany(id: string, data: any) {
    // Return mock data for static generation
    return {
      id,
      ...data,
      updatedAt: new Date().toISOString(),
    };
  },
  
  async deleteCompany(id: string) {
    // Return mock success for static generation
    return { success: true, id };
  }
};
