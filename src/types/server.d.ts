import type { SortType } from './table';

export type ServerOptionsComputed = {
  page: number
  rowsPerPage: number
  sortBy: string | string[] | null
  sortType: SortType | SortType[] | null
}

export type ServerOptions = {
  page: number
  rowsPerPage: number
  sortBy?: string | string[]
  sortType?: SortType | SortType[]
}