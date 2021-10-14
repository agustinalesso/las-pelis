export interface IMovieSearch {
    page:          number;
    results:       IMovieResult[];
    total_pages:   number;
    total_results: number;
}

export interface IMovieResult {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface IActorSearch {
    page:          number;
    results:       IActorResult[];
    total_pages:   number;
    total_results: number;
}

export interface IActorResult {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for:            KnownFor[];
    known_for_department: KnownForDepartment;
    name:                 string;
    popularity:           number;
    profile_path:         null | string;
}

export interface KnownFor {
    adult?:            boolean;
    backdrop_path?:    string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    poster_path?:      string;
    release_date?:     Date;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    first_air_date?:   Date;
    name?:             string;
    origin_country?:   OriginCountry[];
    original_name?:    string;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginCountry {
    CA = "CA",
    GB = "GB",
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
    Ko = "ko",
}

export enum KnownForDepartment {
    Acting = "Acting",
    VisualEffects = "Visual Effects",
}
