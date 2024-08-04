import { type PropType } from 'vue';
import type { ClickEventType } from '@/types/events';
import type { FilterOption } from '@/types/actions';
import type {
  BodyItemClassNameFunction,
  BodyRowClassNameFunction,
  Header,
  HeaderItemClassNameFunction,
  Item,
  SortType,
  TextDirection
} from '@/types/table';
import type { ServerOptions } from '@/types/server';
import { Sort } from '@/enum/table';

export interface PropsWithDefault {
  items: Item[],
  headers: Header[]
  alternating?: boolean,
  buttonsPagination?: boolean,
  checkboxColumnWidth?: number,
  currentPage?: number,
  emptyMessage: string,
  expandColumnWidth?: number,
  fixedExpand?: boolean,
  fixedHeader?: boolean
  fixedCheckbox?: boolean
  fixedIndex?: boolean,
  headerTextDirection?: TextDirection,
  bodyTextDirection?: TextDirection,
  hideFooter?: boolean,
  hideRowsPerPage?: boolean,
  hideHeader?: boolean,
  indexColumnWidth?: number,
  loading?: boolean,
  rowsPerPage?: number,
  rowsPerPageMessage?: string,
  searchValue?: string,
  serverOptions?: ServerOptions,
  serverItemsLength?: number,
  showIndex?: boolean,
  itemsSelected?: Item[],
  rowsItems?: number[],
  searchField?: string,
  sortBy?: string | string[],
  sortType?: SortType | SortType[],
  filterOptions?: FilterOption[],
  multiSort?: boolean,
  tableMinHeight?: number,
  tableHeight?: number,
  themeColor?: string,
  tableClassName?: string,
  headerClassName?: string,
  headerItemClassName?: HeaderItemClassNameFunction | string,
  bodyRowClassName?: BodyRowClassNameFunction | string,
  bodyExpandRowClassName?: BodyRowClassNameFunction | string,
  bodyItemClassName?: BodyItemClassNameFunction | string,
  noHover?: boolean,
  borderCell?: boolean,
  mustSort?: boolean,
  rowsOfPageSeparatorMessage?: string,
  clickEventType?: ClickEventType,
  clickRowToExpand?: boolean,
  tableNodeId?: string,
  showIndexSymbol?: string,
  preventContextMenuRow: boolean
}
