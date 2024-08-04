import { Selection } from '@/enum/table';

export type ClickEventType = 'single' | 'double'

export type MultipleSelectStatus = Selection.ALL_SELECTED | Selection.NONE_SELECTED | Selection.PART_SELECTED

// eslint-disable-next-line max-len
export type EmitsEventName =
  | 'clickRow'
  | 'selectRow'
  | 'deselectRow'
  | 'expandRow'
  | 'updateSort'
  | 'update:itemsSelected'
  | 'update:serverOptions'
  | 'updateFilter'
  | 'updatePageItems'
  | 'updateTotalItems'
  | 'selectAll'
