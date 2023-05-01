import styled from "styled-components";

interface IProps {
  size: "default" | "big";
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  z-index: 9;

  ${({ size }) =>
    size == "default"
      ? ` 
  width:350px;     

      
  .info {
    color: var(--white);
  }

  .info.container{
    display: flex;
    gap:12px;
    .img{
     width:35px;
    }
  }

  .title {
    font: var(--ROBOTO-24px);
  }
  .description {
    font: var(--ROBOTO-12px);
  }

  .info.sub-container {
    padding: 10px;

    .link {
      color: var(--red);
      font: var(--ROBOTO-14px_21px-BOLD);
    }
 } `
      : `  
width:500px;     
height:100px; 

gap:20px;

.info {
  color: var(--white);
}

.title {
  font: var(--ROBOTO-100px);
}
.description {
  font: var(--ROBOTO-12px);
}

.info.sub-container {
  padding: 20px;

  .link {
    color: var(--red);
    font: var(--ROBOTO-14px_21px-BOLD);
  }
} `}
`;
