import { Sort } from "@/enum/table";

export type SortType = Sort.ASC | Sort.DESC

export type FilterComparison = '=' | '!=' | '>' | '>=' | '<' | '<=' | 'between' | 'in'

export type Item = Record<string, any>

export type Header = {
  text: string
  value: string
  sortable?: boolean
  fixed?: boolean
  width?: number
}

export type HeaderForRender = {
  text: string,
  value: string,
  sortable?: boolean,
  sortType?: SortType | Sort.NONE,
  fixed?: Boolean,
  width?: number,
}

export type HeaderItemClassNameFunction = (header: Header, columnNumber: number) => string
export type BodyRowClassNameFunction = (item: Item, rowNumber: number) => string
export type BodyItemClassNameFunction = (column: string, rowNumber: number) => string

export type TextDirection = 'center' | 'left' | 'right'
