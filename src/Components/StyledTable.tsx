import { useEffect, useMemo, useState } from 'react'
import { useGlobalFilter, useTable, useSortBy } from 'react-table'
import { styled } from 'styled-components'
import type { RootState } from '../utils/store'
import { useSelector } from 'react-redux'

import { COLUMNS } from '../utils/columns'

const Container = styled.div`
  position: relative;
  margin: auto;
`

const Table = styled.table`
  margin: auto;
  min-width: 900px;
`

const Td = styled.td`
  background: white;
  padding: 5px 20px;
`

const SearchInput = styled.input`
  position: absolute;
  top: -40px;
  right: 0;
  width: 200px;
  height: 20px;
  padding: 5px 10px;
  border: 0;
`

export function StyledTable() {
  const columns = useMemo(() => COLUMNS, [])
  const [data, setData] = useState<object[]>([])
  const newData = useSelector((state: RootState) => state.updateData.value)

  useEffect(() => {
    if (newData === undefined) return
    setData(newData)
  }, [newData])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  )
  const { globalFilter } = state
  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={'row' + i}>
                {row.cells.map((cell) => {
                  return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}
