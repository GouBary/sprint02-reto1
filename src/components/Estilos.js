import React from 'react';
import styled from 'styled-components';




export default function Estilos() { 

 let colorDeLetras = 'RGB(74,74,73)',
     colorDeFondo = 'RGB(240,239,233)';

const H2=styled.h2`
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 110%;


text-align: justify;
 `;
const Header1=styled.header`
  display: flex;
  background-color: ${colorDeFondo};
  padding: 0rem;
`;
const Boton1=styled.button`
font-family: 'Helvetica';
font-style: normal;
border:0px;
margin:20px;
font-size:16px;
`;
const Boton2=styled.button`
font-family: 'Helvetica';
font-style: normal;
margin:5px;
border-radius:10px;
width:90px;
height:50px;
font-size: 14px;
border: 1px solid #CCCCCC;

&:hover{
    border:0px;
    background-color: RGB(36,178,107);
    color: white;
}

`;
const DivB=styled.div`


padding: 20px 1px 20px;
margin-left: 40vw;


`;
const DivM=styled.div`
display: flex;
background-color: ${colorDeFondo};
width: 100%;
height: 800px;
`;
const DivM1=styled.div`
background-color: ${colorDeFondo};
width:455px;
height: 460px;
margin-left: 300px;
margin-top: 170px;
`;
const P1=styled.p`
font-family: 'Helvetica';
font-style: normal;
font-size: 17px;
line-height: 130%;

`;
const Img1=styled.div`
background-color: negro;
padding-left:145px;
padding-top:25px;


`;
const DivM2=styled.div`

width:1050px;
height: 810px;
margin-left: 120px;
margin-top: 0px;
`;
const DivP=styled.div`
display: flex;
background-color: RGB(250,250,250);
width:100%;
height: 170px;
padding-top: 50px;
padding-left: 340px;

`;
const DivP2=styled.div`


width:100%;
height: 200px;


`;
const P2=styled.p`
font-family: 'Helvetica';
font-style: normal;
font-size: 32px;
padding-left: 750px;
color: #333333;

`;
const P3=styled.p`
font-family: 'Helvetica';
font-style: normal;
font-size: 16px;
padding-left: 850px;

color: #666666;

`;
const DivP21=styled.div`

width: 100%;
height: 60px;
padding-top: 10px;
padding-left: 850px;



`;



    return (
        <div>
        <Header1>
        <Img1>
        <img src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1654550004/logo_e1hg4j.jpg'width="155px"height="50px" />
        </Img1>
            <DivB> 
            <Boton1>Job Search</Boton1>
            <Boton1>About</Boton1>
            <Boton1>Pricing</Boton1>
            <Boton1>Contact</Boton1>
            <Boton2>Log in</Boton2>
            <Boton2>Try it Free</Boton2>
            </DivB>
        </Header1>
        <section>
        <DivM>
            <DivM1>
            <H2>We support your  challenge in new  areas.</H2>
            <P1>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</P1>
            <Boton2 style={{width:"141px"}}>Try it Free</Boton2>
            <Boton2  style={{width:"141px"}}>Explore</Boton2>
            </DivM1>
            <DivM2>
                <img src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1654563005/menu2_fqh6gn.jpg'width="1030px" height="800"/>
            </DivM2>
        </DivM>
        <DivP>
           <img src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1654552298/parte3_rcdufl.jpg'width="1250px"height="120px"/>
        </DivP>
        <DivP2>
            <P2>Search for your area of interest</P2>
            <P3>Search for your area of interest</P3>
            <DivP21>
            <input  type="" placeholder="enginner,Internet and Web Industry"/><Boton2>EXPLORE</Boton2>
            </DivP21>
        </DivP2>
        </section>
        </div>
        
    );
}