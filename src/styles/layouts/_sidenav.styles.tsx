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
  margin-top: 0.88em;
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
export const DropDownContainer = styled.div`
  width: auto !important;
  height: auto !important;
`;
export const UL = styled.ul`
  font-size: 1rem;
  height: 1.5em;
  margin-left: 2em;
  margin-bottom: 0.8em;
  color: #696d8c;

  &:hover {
    border-left: 0.06px solid #ecebf5;
    color: black;
    font-weight: 600;
  }
`;
export const LI = styled.li`
  margin-left: 1.5em;
`;

export const TopHeader = styled.div`
  width: inherit;
  height: 4.88em;
  border-bottom: 1px solid #ecebf5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SearchBar = styled.div`
  width: 27.56em;
  height: 3.38em;
  background: #fafafc;
  border-radius: 0.63em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75em 2.5em;
`;
export const SearchIcon = styled.div`
  margin: 0em 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Search = styled.input`
  height: 2.38em;
  margin: 0.9em;
  border: none;
  outline: none;
  background: #fafafc;
  font-weight: 400;
  line-height: 1.81em;
  color: #a3a3c2;
  font-size: 1rem;

  ::placeholder {
    color: #a3a3c2;
    font-weight: 400;
    line-height: 1.81em;
    font-size: 1rem;
  }
`;
export const HeaderAuth = styled.div`
  width: 10.94em;
  height: 3.38em;
  border-radius: 0.63em;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  margin: 59.19em 2.78em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Notification = styled.div`
  width: 2.38em;
  height: 1.13em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Badge = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f25a68;
  font-size: 0.75rem;
  color: #fff;
  border-radius: 0.25em;
`;
export const Authentication = styled.div`
  width: 3.5em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const UserImage = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 100%;
  border: 0.06px solid #6837ef;
`;
export const IconContainer = styled.div`
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #696d8c;
`;
