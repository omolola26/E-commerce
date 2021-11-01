import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";

import { Link } from "react-router-dom";

const Container = styled.div`                                                                                                                                                                                                                                
height: 60px;
${mobile({ height: "50px" })} 
}
 `;

 

const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgrey;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  ${mobile({ padding: "10px 0px" })};
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  ${mobile({ display: "none" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color:black;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;


const MenuItem = styled.div`
  font-size: ;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOLI.</Logo>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration: "none", color:"black"}}>
            <MenuItem type="texter">REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{textDecoration: "none", color:"black"}}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
