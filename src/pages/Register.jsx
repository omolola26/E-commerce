import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
width:100vw;
height:100vh;
 position:relative;
 display:flex;
 align-items:center;
 justify-content:center;
 background: linear-gradient(rgba(0, 0,0,0.5), rgba(0,0,06,0.5)), url("https://images.pexels.com/photos/8185803/pexels-photo-8185803.jpeg");
 background-size: cover;
 background-position: center;
`;



const Wrapper = styled.div`
position:absolute;
width: 40%;
padding:20px;
background-color:white ;
${mobile({width:"75%"})}
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const  Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`;


const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:rgba(128, 128, 128, 0.589);
color:white;
cursor:pointer;

&:hover{
   background-color:teal; 
}
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                         data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
