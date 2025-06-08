// Supabase configuration following TSmart standards
// Using REST API connections (fetch, not SDK) as per TSmart requirements

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export interface SupabaseConfig {
  url: string
  anonKey: string
  serviceRoleKey?: string
}

export const supabaseConfig: SupabaseConfig = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
}

// Base API client following TSmart REST API standards
export class ApiClient {
  private baseUrl: string
  private headers: HeadersInit

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl
    this.headers = {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': `Bearer ${apiKey}`,
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/rest/v1${endpoint}`
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          `API Error: ${response.status} ${response.statusText} - ${
            errorData.message || 'Unknown error'
          }`
        )
      }

      return await response.json()
    } catch (error) {
      console.error('API Request failed:', error)
      throw error
    }
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const searchParams = params ? new URLSearchParams(params).toString() : ''
    const url = searchParams ? `${endpoint}?${searchParams}` : endpoint
    
    return this.request<T>(url, {
      method: 'GET',
    })
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async patch<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    })
  }

  setAuthToken(token: string) {
    this.headers = {
      ...this.headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

// Singleton instance for the application
export const apiClient = new ApiClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Database abstraction layer following TSmart standards
export class DatabaseService {
  private client: ApiClient

  constructor(client: ApiClient) {
    this.client = client
  }

  // Generic CRUD operations
  async findMany<T>(
    table: string,
    options?: {
      select?: string
      where?: Record<string, any>
      orderBy?: string
      limit?: number
      offset?: number
    }
  ): Promise<T[]> {
    const params: Record<string, string> = {}
    
    if (options?.select) {
      params.select = options.select
    }
    
    if (options?.where) {
      Object.entries(options.where).forEach(([key, value]) => {
        params[key] = `eq.${value}`
      })
    }
    
    if (options?.orderBy) {
      params.order = options.orderBy
    }
    
    if (options?.limit) {
      params.limit = options.limit.toString()
    }
    
    if (options?.offset) {
      params.offset = options.offset.toString()
    }

    return this.client.get<T[]>(`/${table}`, params)
  }

  async findById<T>(table: string, id: string, select?: string): Promise<T | null> {
    const params: Record<string, string> = {
      id: `eq.${id}`,
    }
    
    if (select) {
      params.select = select
    }

    const results = await this.client.get<T[]>(`/${table}`, params)
    return results.length > 0 ? results[0] : null
  }

  async create<T>(table: string, data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const payload = {
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const results = await this.client.post<T[]>(`/${table}`, payload)
    return results[0]
  }

  async update<T>(
    table: string,
    id: string,
    data: Partial<Omit<T, 'id' | 'createdAt'>>
  ): Promise<T> {
    const payload = {
      ...data,
      updated_at: new Date().toISOString(),
    }

    const results = await this.client.patch<T[]>(`/${table}?id=eq.${id}`, payload)
    return results[0]
  }

  async delete(table: string, id: string): Promise<void> {
    await this.client.delete(`/${table}?id=eq.${id}`)
  }

  // Advanced query methods
  async count(table: string, where?: Record<string, any>): Promise<number> {
    const params: Record<string, string> = {
      select: 'count',
    }
    
    if (where) {
      Object.entries(where).forEach(([key, value]) => {
        params[key] = `eq.${value}`
      })
    }

    const result = await this.client.get<{ count: number }[]>(`/${table}`, params)
    return result[0]?.count || 0
  }

  async search<T>(
    table: string,
    searchTerm: string,
    searchFields: string[],
    options?: {
      select?: string
      limit?: number
      offset?: number
    }
  ): Promise<T[]> {
    const params: Record<string, string> = {}
    
    if (options?.select) {
      params.select = options.select
    }
    
    // Create OR condition for search across multiple fields
    const searchConditions = searchFields
      .map(field => `${field}.ilike.*${searchTerm}*`)
      .join(',')
    
    params.or = `(${searchConditions})`
    
    if (options?.limit) {
      params.limit = options.limit.toString()
    }
    
    if (options?.offset) {
      params.offset = options.offset.toString()
    }

    return this.client.get<T[]>(`/${table}`, params)
  }
}

// Export singleton database service
export const db = new DatabaseService(apiClient)

