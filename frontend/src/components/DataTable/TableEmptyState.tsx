import type { FC } from 'react'
import { Button } from '@bcgov/design-system-react-components'

/** Display the 'clear search' method before the 'clear filter' message if both are applied */
export type NarrowedBy = 'search' | 'filter'

const NARROWED = {
  search: { message: 'No results found. Try a different search.', actionLabel: 'Clear search' },
  filter: { message: 'No data match the filters applied.', actionLabel: 'Clear filters' },
}

/** The empty-table message, also used for the table's screen-reader status. */
export const getEmptyMessage = (narrowedBy: NarrowedBy | null, fallback: string): string =>
  narrowedBy ? NARROWED[narrowedBy].message : fallback

interface TableEmptyStateProps {
  narrowedBy: NarrowedBy | null
  message: string
  onClear: () => void
}

const TableEmptyState: FC<TableEmptyStateProps> = ({ narrowedBy, message, onClear }) => (
  <>
    {getEmptyMessage(narrowedBy, message)}
    {narrowedBy && (
      <Button variant="link" size="small" onPress={onClear}>
        {NARROWED[narrowedBy].actionLabel}
      </Button>
    )}
  </>
)

export default TableEmptyState
