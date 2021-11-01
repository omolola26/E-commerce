import  styled  from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
flex: 1;
margin:3px;
height:70vh
overflow: hidden;
`;

const  Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
${mobile({ height: "20vh" })}
`;

const Info = styled.div`
position:relative;
width: 100%;
height: 100%;
color:#fff;
// top:0;
// left:0;
`;

const  Button = styled.button`
// margin-top: -350px;
// margin-left:42%;
position:absolute;
z-index:2;
top:-45%;
left:40%;
color:gray;
border:none;
padding:10px;
font-weight:600;
background-color:white;
cursor:pointer;
${mobile({marginTop:"-15%" })}
`;

const Title = styled.h1`
position:absolute;
margin-top: -400px;
margin-left:140px;
color:white;
//margin-bottom:20px;
${mobile({ marginTop: "-100px", marginLeft:"70px"})}
`;


const CategoriesItem = ({ item }) => {
    return (
        <Container>   
    <Image src={item.img} />
    <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
    </Info>
        </Container>
    )
}

export default  CategoriesItem;
