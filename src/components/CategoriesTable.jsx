import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Td,
} from '@chakra-ui/react'
import { useCategories } from '../hooks/useCategories'
import { formatDateTime } from '../lib/utils'
import UpdateCategory from './UpdateCategory'
import DeleteCategory from './DeleteCategory'
function CategoriesTable() {
  const {categories}= useCategories()
  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
              <Th>Updated On</Th>
              <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
        {categories?.map((category)=>(
          <Tr key={category.id}>
            <Td>{category.name}</Td>
            <Td>{formatDateTime(new Date(category.updatedOn).toDateString()).dateOnly}</Td>
            <Td>
              <UpdateCategory currentCategory={category}/>
              <DeleteCategory category={category}/>
            </Td>
          </Tr>
        ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Updated On</Th>
              <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>  )
    }



export default CategoriesTable