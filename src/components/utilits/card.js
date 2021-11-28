import React, { useEffect, useState } from 'react';
import textPrepare from './textPrepare';

const Card = ({
  name,
  area,
  instruction,
  categoty,
  picture
}) => {
  const [instructionText, setInstructionText] = useState('');
  const [isTextCutted, setIsTextCutted] = useState(false);
  const [isTextOpened, setIsTextOpened] = useState(false);

  const handleTextStateChange = (textState) => {
    setIsTextCutted(textState);
  };

  useEffect(() => {
    setInstructionText(textPrepare(instruction, handleTextStateChange));
  }, [instruction]);

  const instructionTextHandler = () => {
    if (!isTextOpened) {
      setInstructionText(instruction);
      setIsTextOpened(true);
    } else {
      setInstructionText(textPrepare(instruction, handleTextStateChange));
      setIsTextOpened(false);
    }
  };
  
  return (
    <div className="card_front">
      <div className="card_meal-info">
        <span className="card_area">{area}</span>
        <span className="card_category">{categoty}</span>
      </div>
      <div
        className="card_meal-picture"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      />
      <div className="card_meal-text">
        <div className="card_meal-main-text">
          <h2 className="card_heading">{name}</h2>
          <p className="card_instructions">{instructionText}</p>
          {isTextCutted && (
            <span
              role="presentation"
              className="card_more-less-text"
              onClick={instructionTextHandler}
              onKeyDown={instructionTextHandler}
            >
              {isTextOpened ? 'Less' : 'More'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
