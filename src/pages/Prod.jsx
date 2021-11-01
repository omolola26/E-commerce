//import  Anouncement  from '../Component/Anouncement';
import styled from 'styled-components'
// import Navbar from '../Component/Navbar';
// import Footer from '../Component/Footer';
// import Newsletter from '../Component/Newsletter';
import { Add, Remove, SupervisedUserCircle } from '@material-ui/icons';
import { mobile } from '../responsive';


const Container = styled.div``;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding: "10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
flex:1;

`;
const Image = styled.img` 
width:100%;
height:90vh;
object-fit:cover;
${mobile({height: "40vh" })}
 `;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding: "10px" })}
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin: 20px 0px;
width: 420px;
`;
const Price = styled.span`
font-size:40px;
font-weight:100;

`;

const FilterContainer = styled.div`
width:50%;
display:flex;
justify-content: space-between;
margin:30px 0px;
${mobile({width: "100%" })}
`;

const Filter = styled.div`
display:flex;
align-items:center;
${mobile({width:"0px 20px", display:"flex", flexDirection:"wrap", marginLeft:"-70px"})}
`;

// const FilterOne = styled.div``;
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
margin:0px 0px 0px 100px;
`;



const FilterColor = styled.div`
        width:20px;
         height:20px;
         border-radius:50%;
          margin:0px 5px;
           cursor:pointer;
           background-color:${(props)=>props.color};
`;

const FilterSize = styled.select`
margin-left: 10px;
padding:5px;

`;
const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
display:flex;
width:50%;
align-items:center;
justify-content: space-between;
${mobile({width: "100%" })}
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button  = styled.button`
padding:15px;
border: 2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`;


const Prod = () =>     {
    // const mage = "https://www.raramart.com/assets/uploads/products/images/2020-07-17-11-24-25-9e8d6121337d7523c8f788e39d4a5f8c.jpg"
    
    return (
        <Container>
            {/* <Navbar/> 
         <Anouncement/> */}
            <Wrapper>
                <ImgContainer>
                <Image src="https://www.raramart.com/assets/uploads/products/images/2020-07-17-11-24-25-9e8d6121337d7523c8f788e39d4a5f8c.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Raley Jumpsuit</Title>
                        <Desc>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Magni quisquam repellendus consequuntur tenetur autem quaerat, 
                            illum temporibus recusandae a rerum cum dolore facilis 
                            id dignissimos ut harum nemo modi. Fugit.
                            </Desc>
                        <Price>$ 20</Price>
                        <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <SupervisedUserCircle/>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize> 
                        </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                </InfoContainer>
            </Wrapper>
            {/* <Newsletter/>
            <Footer/> */}
        </Container>
    );
}

export default Prod;
