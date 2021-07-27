export interface PeliculaDto {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

export interface LandingPageDTO {
    latestMovies: PeliculaDto[];
}