export interface ISchedule {
    id: number;
    url: string;
    name: string;
    season: number;
    number?: number | null;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image?: Image | null;
    summary?: string | null;
    show: Show;
    _links: Links;
  }
  export interface Image {
    medium: string;
    original: string;
  }
  export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres?: (string | null)[] | null;
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    officialSite?: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: NetworkOrWebChannel;
    webChannel?: NetworkOrWebChannel1 | null;
    dvdCountry?: null;
    externals: Externals;
    image?: Image1 | null;
    summary?: string | null;
    updated: number;
    _links: Links1;
  }
  export interface Schedule {
    time: string;
    days?: (string | null)[] | null;
  }
  export interface Rating {
    average?: number | null;
  }
  export interface NetworkOrWebChannel {
    id: number;
    name: string;
    country: Country;
  }
  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }
  export interface NetworkOrWebChannel1 {
    id: number;
    name: string;
    country: Country;
  }
  export interface Externals {
    tvrage?: number | null;
    thetvdb?: number | null;
    imdb?: string | null;
  }
  export interface Image1 {
    medium: string;
    original: string;
  }
  export interface Links1 {
    self: SelfOrPreviousepisodeOrNextepisode;
    previousepisode: SelfOrPreviousepisodeOrNextepisode;
    nextepisode?: SelfOrPreviousepisodeOrNextepisode1 | null;
  }
  export interface SelfOrPreviousepisodeOrNextepisode {
    href: string;
  }
  export interface SelfOrPreviousepisodeOrNextepisode1 {
    href: string;
  }
  export interface Links {
    self: SelfOrPreviousepisodeOrNextepisode;
  }
  