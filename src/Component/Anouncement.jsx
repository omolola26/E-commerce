import  styled  from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
width:100%;
${mobile({width: "100%" })}
`;


 const Anouncement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Anouncement
