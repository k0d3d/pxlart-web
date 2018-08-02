import styled, { css } from 'styled-components'


export const StyledBtn = styled.button`
border-radius: 18px;
font-weight: 800;

${props => props.btnhomeherocta && css`
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.4em;
  padding: 1rem 3.5rem;
  color: white;`
}; 
${props => props.btnxs && css`
  padding: 0.175rem 0.55rem;
  font-size: 12px;`};
${props => props.btnblueoutline && css`
  border: solid 1px #2f64ed;
  background-color: #fff;
  border: solid 1px #2f64ed;
  color: #2f64ed;
`}
${props => props.btnred && css`
  background-color: var(--secondarycolor);
  color: white;
  font-family: var(--buttonfont);
  font-weight: 800;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);  
`}

`

export const StyledBtnA = StyledBtn.withComponent('a')

export const StyledBtnBlueOutline = styled(StyledBtn)`
         border: solid 1px #2f64ed;
         background-color: #fff;
         border: solid 1px #2f64ed;
         color: #2f64ed;
         `

export const StyledBtnRed = styled(StyledBtn)`
         background-color: var(--secondarycolor);
         color: white;
         font-family: var(--buttonfont);
         font-weight: 800;
         box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);`