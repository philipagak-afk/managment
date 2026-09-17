import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
function CategoriesTable() {
  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
              <Th>Updated On</Th>
              <Th>Stock</Th>
              <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
        
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
              <Th>Update On</Th>
              <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>  )
    }



export default CategoriesTable