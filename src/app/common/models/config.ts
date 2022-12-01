export interface IAppConfigResponse {
  images: {
    backdrop_sizes: string[]
    base_url: string
    logo_sizes: string[]
    poster_sizes: string[]
    profile_sizes: string[]
    secure_base_url: string
    still_sizes: string[]
  }
  change_keys: string[]
}
