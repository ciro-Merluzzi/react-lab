import styled  from 'styled-components'

const StyledDefaultButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
width: 85px;
height: 30px;
background: linear-gradient(to right, #00E0C2, #00FFFF);
border-radius: 4px;
border-color: #706f7c;
border-style: solid;
border-width: 1px;
font-weight: bold;
font-color: black;

&:hover {
    background: linear-gradient(to right, #0CF795, #0CEDFF);
    font-color: #FFFFFF;
}
`

export const DefaultButton = (props) => {

    return (
        <StyledDefaultButton>{props.text}</StyledDefaultButton>
    )
}

export default DefaultButton