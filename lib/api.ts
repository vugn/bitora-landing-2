import { siteConfig } from "@/config/site";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = siteConfig.api.baseUrl) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Stats API
  async getStats(): Promise<{
    btoPrice: number;
    validators: number;
    txVolume: number;
    tokensCreated: number;
    posLocations: number;
    marketCap: number;
    countries: number;
  }> {
    return this.request(siteConfig.api.endpoints.stats);
  }

  // Roadmap API
  async getRoadmap(): Promise<any> {
    return this.request(siteConfig.api.endpoints.roadmap);
  }

  // News API
  async getNews(): Promise<any> {
    return this.request(siteConfig.api.endpoints.news);
  }

  // Validators API
  async getValidators(): Promise<any> {
    return this.request(siteConfig.api.endpoints.validators);
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

// Hook for React components
export function useApi() {
  return apiClient;
}
