import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    // margin-top: 80px;
    height: 940px;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: ${({lightText}) => (lightText ? 'rgb(2, 116, 56)' : '#000')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width:480px){
        font-size: 32px; 
    }
`;

export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    text-align: justify;

    @media screen and (max-width:480px){
        font-size: 16px; 
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    paddin-right:0;
`;

export const Form = styled.form`
    max-width: 440px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    // align-items: center;

    @media screen and (max-width:480px){
        font-size: 16px; 
    }
`

export const Input = styled.input`
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 1rem;
`

export const TextField = styled.textarea`
    height: 150px;
    margin-bottom: 10px;
    resize: none;
    padding: 5px;
    font-size: 1rem;
`
export const Label = styled.label`
    height: 20px;
    color: rgb(2, 116, 56);
    margin-bottom: 10px;
    display: ${({sent}) => (sent ? 'absolute' : 'none')};
`

export const Button = styled.input`
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
    background: rgb(2, 116, 56);
    width: 30%;
    border-radius:20px;
    border: none;
    cursor: pointer;
    display: ${({sent}) => (sent ? 'none' : 'absolute')};

    &:hover {
        color: #fff;
    }
`