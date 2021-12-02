import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Inter', sans-serif;
  }

  button {
      margin-right: 11px;
      border: 0;
      color: ${props => props.theme.colors.tilte};
      cursor: pointer;
      background-color: white;
  }

  input {
    width: 100%;
    height: 50px;
    padding: 14px 16px 0 10px;
    outline: none;
    border: 0;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.subTilte};
    border-bottom: 2px solid #BBB8D9;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: capitalize;
    padding: 0 50px;
    }

    ::-webkit-input-placeholder {
      color: ${props => props.theme.colors.subTilte};
    }
    /* Firefox 19+ */
    ::-moz-placeholder {
      color: ${props => props.theme.colors.subTilte};
    }

`
