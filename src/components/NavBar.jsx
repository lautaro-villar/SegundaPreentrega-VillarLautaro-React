import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="./imagenes/imagen-logo.jpg"
          />
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}> Discos Argentos</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="red"
                  m="5"
                >
                  Discos
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="red"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"reggae"}`}>
                  <MenuItem>Rock reggae</MenuItem>
                </Link>
                <Link to={`/category/${"armonico"}`}>
                  <MenuItem>Rock armonico</MenuItem>
                </Link>
                <Link to={`/category/${"revolucionario"}`}>
                  <MenuItem>Rock revolucionario</MenuItem>
                </Link>

                <Link to={`/category/${"post-punk"}`}>
                  <MenuItem>Rock post punk</MenuItem>
                </Link>

              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
