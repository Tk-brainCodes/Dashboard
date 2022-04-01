import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  // border: 1px solid black;
  width: 15em;
`;
export const Card = styled.div`
  width: 12.81rem;
  height: 3.75rem;
  background: $main-color;
  border: 0.06em solid #ecebf5;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin-top: 21px;
  line-height: 1.25rem;
`;
export const CardText = styled.div`
  min-width: 100%;
  height: auto !important;
  line-height: 1.2rem;
`;
export const TextStyle = styled.div`
  width: 11.63em;
  margin-top: 10px;
  margin-left: 4.5em;
  font-weight: 400;
  font-size: 0.75rem;
  color: #696d8c;
`;
export const NavList = styled.div`
  display: block;
  height: 1.56em;
`;
export const NavListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 13.8em;
  height: 1.56em;
  margin-bottom: 0.88em;
  cursor: pointer;
  font-size: 1rem;
`;
export const ListIcon = styled.div`
  display: flex;
  width: 10.19em;
  height: 1.5em;
`;
export const ImageIcon = styled.img`
  width: 1.13em;
  height: 1.13em;
`;
export const ListText = styled.div`
  margin-left: 1.13em;
  width: 7.06em;
  color: #696d8c;
  font-size: 1em;

  &:hover {
    color: #6837ef;
  }
`;
export const ListDropdown = styled.div`
  margin-left: 0.7em;
`;
export const DropDownContainer = styled.div``;
export const UL = styled.ul``;
export const LI = styled.li``;
