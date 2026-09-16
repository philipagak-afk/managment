import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";

import { useRealtimeCategories } from "../hooks/useRealtimeCategories";

function CategoriesTable() {
  const { categories } = useRealtimeCategories();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {categories?.map((category) => (
            <Tr key={category.id}>
              <Td>{category.name}</Td>

              <Td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <UpdateCategory currentCategory={category} />

                  <DeleteCategory category={category} />
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CategoriesTable;