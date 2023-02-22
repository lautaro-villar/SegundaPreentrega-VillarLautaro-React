import Item from "./Item";
import { Container, Img } from "@chakra-ui/react";
const ItemList = ({ bikes }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {bikes?.map((bike) => (
          <Item
            key={bike.id}
            id={bike.id}
            name={bike.name}
            description={bike.description}
            price={bike.price}
            stock={bike.stock}
            category={bike.category}
            image= {bike.image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
