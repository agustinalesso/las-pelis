export interface IActorPeliculas {
    cast: IActorPelicula[];
    crew: IActorPelicula[];
    id:   number;
}

export interface IActorPelicula {
    original_language: OriginalLanguage;
    id:                number;
    poster_path:       null | string;
    video:             boolean;
    vote_average:      number;
    overview:          string;
    release_date:      string;
    vote_count:        number;
    original_title:    string;
    adult:             boolean;
    backdrop_path:     null | string;
    title:             string;
    genre_ids:         number[];
    popularity:        number;
    character?:        string;
    credit_id:         string;
    order?:            number;
    department?:       string;
    job?:              string;
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Hu = "hu",
    Ru = "ru",
}
