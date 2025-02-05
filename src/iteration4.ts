//
// Iteration 4 | Type aliases
//

type Book = {
    title: string
    year: number
    genres: string[]
    rating?: number
    author: string
    numberofPages? : number
}


type Movie = {
    title: string
    year: number
    genres: string[]
    rating?: number
    director: string
    durationInMinutes? : number
}

type MusicAlbum = {
    title: string
    year: number
    genres: string[]
    rating?: number
    artist: string
    numberOfTracks? : number
    durationInMinutes? : number
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other'
}

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number{
    return 2025 - mediaItem.year
}