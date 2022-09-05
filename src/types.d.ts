export type Character = {
  id: string
  name: string
  status: string
  species: string
  image: string
  location: Location
  gender: string
  origin?: Location
  type: string
  episode: Episode
} 

export type Location = {
  name: string
  id: strin
  type: string
  dimesion: string
  residents: {
    id: string
    name: string
  }
}

export type Episode = {
  name: string
  id: string
}

export type Techonlogy = {
  name: string 
  image: string 
  link: string
}