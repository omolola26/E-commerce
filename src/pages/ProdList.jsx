import styled from "styled-components";
import { mobile } from "../responsive";
// import Navbar from "../Component/Navbar";
// import Anouncement from "../Component/Anouncement";
// import Products from "../Component/Products";
// import Newsletter from "../Component/Newsletter";
// import Footer from "../Component/Footer";

const Container = styled.div``;

const Title = styled.h1`
margin:20px
`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight: "0px"})}
`;
const FilterContainer = styled.div`
display:flex;
justify-content:"space-between;
`;

const Filter = styled.div`
margin:20px;
${mobile({width:"0px 20px", display:"flex",  flexDirection:"column"})}
`;


const Select = styled.select`
padding:10px
margin-right:20px;
${mobile({margin:"10px 0px"})}
`;
const Option = styled.option``;


const ProdList = () => {
    return (
        <Container>
          {/* <Navbar/>
          <Anouncement/> */}
          <Title>Dresses</Title> 
          <FilterContainer>
              <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select>
                      <Option disable selected>
                          Color
                      </Option>
                      <Option>White</Option>
                      <Option>Black</Option>
                      <Option>Blue</Option>
                      <Option>Red</Option>
                      <Option>Green</Option>
                      <Option>Yellow</Option>
                  </Select>
                  <Select>
                      <Option disable selected>
                          Size
                      </Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                      <Option>XXL</Option>
                  </Select>
                  </Filter>
              <Filter><FilterText>Sort  Products:</FilterText>
              <Select>
                      <Option  selected>
                          Newest
                      </Option>
                      <Option>Price (asc)</Option>
                      <Option>Price (desc</Option>
                      </Select>
              </Filter>
          </FilterContainer>
          {/* <Products/>
          <Newsletter/>
          <Footer/> */}
           
        </Container>
    )
}

export default ProdList
