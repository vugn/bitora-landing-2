"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api";
import { siteConfig } from "@/config/site";
import { roadmapData } from "@/config/roadmap";

// Hook for fetching live stats
export function useStats(enableApi: boolean = false) {
  const [stats, setStats] = useState(siteConfig.stats.baseValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enableApi) return;

    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getStats();
        setStats(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch stats");
        // Fallback to default values
        setStats(siteConfig.stats.baseValues);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Optionally refetch periodically
    const interval = setInterval(fetchStats, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [enableApi]);

  return { stats, loading, error };
}

// Hook for fetching roadmap data
export function useRoadmap(enableApi: boolean = false) {
  const [roadmap, setRoadmap] = useState(roadmapData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enableApi) return;

    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getRoadmap();
        setRoadmap(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch roadmap"
        );
        // Fallback to default values
        setRoadmap(roadmapData);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [enableApi]);

  return { roadmap, loading, error };
}

// Hook for general API data fetching
export function useApiData<T>(
  endpoint: string,
  defaultValue: T,
  enableApi: boolean = false
) {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${siteConfig.api.baseUrl}${endpoint}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
      setData(defaultValue);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!enableApi) return;
    fetchData();
  }, [endpoint, enableApi, defaultValue]);

  return { data, loading, error, refetch: fetchData };
}
