export interface ShortenedLink {
  id: string;
  longUrl: string;
  shortUrl: string;
  alias: string;
  createdAt: Date;
  clicks: number;
  userId?: string;
}

export interface AnalyticsEvent {
  linkId: string;
  clickedAt: Date;
  referrer?: string;
}