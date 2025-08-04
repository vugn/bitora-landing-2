"use client"

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'

interface StatsData {
    btoPrice: number
    validators: number
    txVolume: number
    tokensCreated: number
    posLocations: number
    marketCap: number
    countries: number
}

interface LiveStatsProps {
    data?: Partial<StatsData>
    updateInterval?: number
    enableLiveUpdates?: boolean
}

export function LiveStats({
    data,
    updateInterval = siteConfig.stats.updateInterval,
    enableLiveUpdates = true
}: LiveStatsProps) {
    const [stats, setStats] = useState<StatsData>({
        btoPrice: data?.btoPrice ?? siteConfig.stats.baseValues.btoPrice,
        validators: data?.validators ?? siteConfig.stats.baseValues.validators,
        txVolume: data?.txVolume ?? siteConfig.stats.baseValues.txVolume,
        tokensCreated: data?.tokensCreated ?? siteConfig.stats.baseValues.tokensCreated,
        posLocations: data?.posLocations ?? siteConfig.stats.baseValues.posLocations,
        marketCap: data?.marketCap ?? siteConfig.stats.baseValues.marketCap,
        countries: data?.countries ?? siteConfig.stats.baseValues.countries,
    })

    useEffect(() => {
        if (!enableLiveUpdates) return

        const interval = setInterval(() => {
            setStats(prev => ({
                btoPrice: (data?.btoPrice ?? siteConfig.stats.baseValues.btoPrice) +
                    (Math.random() - 0.5) * siteConfig.stats.variance.btoPrice,
                validators: (data?.validators ?? siteConfig.stats.baseValues.validators) +
                    Math.floor(Math.random() * siteConfig.stats.variance.validators),
                txVolume: (data?.txVolume ?? siteConfig.stats.baseValues.txVolume) +
                    Math.floor(Math.random() * siteConfig.stats.variance.txVolume),
                tokensCreated: (data?.tokensCreated ?? siteConfig.stats.baseValues.tokensCreated) +
                    Math.floor(Math.random() * siteConfig.stats.variance.tokensCreated),
                posLocations: (data?.posLocations ?? siteConfig.stats.baseValues.posLocations) +
                    Math.floor(Math.random() * siteConfig.stats.variance.posLocations),
                marketCap: (data?.marketCap ?? siteConfig.stats.baseValues.marketCap) +
                    Math.floor(Math.random() * siteConfig.stats.variance.marketCap),
                countries: (data?.countries ?? siteConfig.stats.baseValues.countries) +
                    Math.floor(Math.random() * siteConfig.stats.variance.countries),
            }))
        }, updateInterval)

        return () => clearInterval(interval)
    }, [data, updateInterval, enableLiveUpdates])

    const statsConfig = [
        {
            key: 'btoPrice' as keyof StatsData,
            label: 'BTO Price',
            format: (val: number) => `$${val.toFixed(4)}`
        },
        {
            key: 'validators' as keyof StatsData,
            label: 'Validators',
            format: (val: number) => val.toLocaleString()
        },
        {
            key: 'txVolume' as keyof StatsData,
            label: 'TX Volume',
            format: (val: number) => val.toLocaleString()
        },
        {
            key: 'tokensCreated' as keyof StatsData,
            label: 'Tokens Created',
            format: (val: number) => val.toLocaleString()
        },
        {
            key: 'posLocations' as keyof StatsData,
            label: 'POS Locations',
            format: (val: number) => val.toString()
        },
        {
            key: 'marketCap' as keyof StatsData,
            label: 'Market Cap',
            format: (val: number) => `$${(val / 1000000).toFixed(1)}M`
        },
        {
            key: 'countries' as keyof StatsData,
            label: 'Countries',
            format: (val: number) => val.toString()
        },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {statsConfig.map(({ key, label, format }) => (
                <div key={key} className="bg-slate-800/50 border border-gray-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white font-mono">
                        {format(stats[key])}
                    </div>
                    <div className="text-xs text-white">{label}</div>
                </div>
            ))}
        </div>
    )
}
