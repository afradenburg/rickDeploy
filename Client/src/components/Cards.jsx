import { CardContainer } from "../styled/cardContainer.Styled";
import Card from "./Card";

export default function Cards({ characters, onClose, isActiveButtons }) {
  return (
    <CardContainer>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={onClose}
          isActiveButtons={isActiveButtons}  
        />
      ))}
    </CardContainer>
  );
}
