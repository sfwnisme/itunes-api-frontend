export interface IMedia {
  trackId: number
  trackName: string
  artistName: string
  trackViewUrl: string
  previewUrl?: string
  artworkUrl600?: string
  artworkUrl100?: string
  artworkUrl60?: string
  artworkUrl30?: string
  releaseDate?: string
  primaryGenreName?: string
  collectionName?: string
  collectionViewUrl?: string
  collectionPrice?: number
  trackPrice?: number
  trackExplicitness?: string
  trackCount?: number
  trackNumber?: number
  trackTimeMillis?: number
  country?: string
}

export type Genre = {
  name: string;
  id: string;
};

export type PodcastEpisode = {
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl600: string;
  episodeUrl: string;
  artistIds: number[];
  genres: Genre[];
  episodeGuid: string;
  releaseDate: string;
  shortDescription: string;
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  kind: string;
  wrapperType: string;
  description: string;
  country: string;
  trackTimeMillis: number;
  artworkUrl60: string;
  trackViewUrl: string;
  contentAdvisoryRating: string;
  collectionViewUrl: string;
  previewUrl: string;
  trackId: number;
  trackName: string;
};
