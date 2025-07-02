"use server"

export async function search(query: string) {
  const response = await fetch(`https://itunes.apple.com/search?term=${query}&entity=podcast`)
  const data = await response.json()
  return data
}

export async function getRecentMedia(limit: number = 20) {
  try {
    // Fetch recent podcasts from iTunes API
    const response = await fetch(
      `https://itunes.apple.com/search?term=podcast&media=podcast&entity=podcast&limit=${limit}&sort=recent`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching recent podcasts:', error)
    return { resultCount: 0, results: [] }
  }
}

export async function getTopCharts(limit: number = 20) {
  try {
    // Fetch top podcast charts from iTunes API
    const response = await fetch(
      `https://itunes.apple.com/search?term=top&media=podcast&entity=podcast&limit=${limit}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching top podcast charts:', error)
    return { resultCount: 0, results: [] }
  }
}

export async function getPodcasts(searchTerm: string, limit: number = 20) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=podcast&entity=podcast&limit=${limit}&sort=popularity`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching podcasts for "${searchTerm}":`, error)
    return { resultCount: 0, results: [] }
  }
}

export async function getEpisodes(searchTerm: string, limit: number = 20) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=podcast&entity=podcastEpisode&limit=${limit}&sort=recent`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching episodes for "${searchTerm}":`, error)
    return { resultCount: 0, results: [] }
  }
}