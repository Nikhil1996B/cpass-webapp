import styled from 'styled-components';

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const Button = styled.button.attrs(props => ({
    background: props.theme.background || '#fcc537',
    borderRadius: props.theme.borderRadius || '5px',
    btnWidth: props.theme.btnWidth || '87px',
    btnOpacity: props.theme.btnOpacity || '1',
    height: props.theme.height || '31px',
    border: props.theme.border || 'none'
}))`
background: ${props => props.background} 0% 0% no-repeat padding-box;
border-radius: ${props => props.borderRadius};
border: ${props => props.border};
opacity: ${props => props.btnOpacity};
width: ${props => props.btnWidth};
height: ${props => props.height};
img {
    position: ${props => props.theme.img.position};
    width: ${props => props.theme.img.width};
    top: 3px;
    text-align: center;
    opacity: 1;
    left: 4px;
}
span {
    text-align: right;
    font: normal normal bold 14px Gilroy ☞;
    letter-spacing: 0px;
    color: ${props => props.theme.span.color}
    opacity: 1;
}


@media screen and (max-width: ${device.laptop}) { 
    span {
        text-align: right;
        font: normal normal bold 14px Gilroy ☞;
        letter-spacing: 0px;
        color: ${props => props.theme.span.color}
        opacity: 1;
    }
  }
`



