import { Item, SortType } from "./table";

export type FilterOption =
  | {
      field: string
      comparison: 'between'
      criteria: [number, number]
    }
  | {
      field: string
      comparison: '=' | '!='
      criteria: number | string
    }
  | {
      field: string
      comparison: '>' | '>=' | '<' | '<='
      criteria: number
    }
  | {
      field: number | string
      comparison: 'in'
      criteria: number[] | string[]
    }
  | {
      field: string
      comparison: (value: any, criteria: string) => boolean
      criteria: string
    }

export type UpdateSortArgument = {
  sortType: SortType | null
  sortBy: string
}


export type ClickRowArgument = Item & {
  isSelected?: boolean
  indexInCurrentPage?: number
}

export type ClientSortOptions = {
  sortBy: string | string[],
  sortDesc: boolean | boolean[],
}
