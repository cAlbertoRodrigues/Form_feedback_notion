import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-right: 10px; /* Espaçamento entre o rótulo e o contador */
`;

const Slider = styled.input`
  width: 80%;
`;

const ValueDisplay = styled.span`
  font-size: 18px;
`;

export const RatingSlider = ({ onChange, initialValue = 0 }) => {
  const [rating, setRating] = useState(initialValue);

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SliderContainer>
      <LabelContainer>
        <Label htmlFor="rating-slider">Avaliação:</Label>
        <ValueDisplay>{rating}</ValueDisplay>
      </LabelContainer>
      <Slider
        id="rating-slider"
        type="range"
        min="0"
        max="10"
        value={rating}
        onChange={handleSliderChange}
        aria-labelledby="rating-slider"
        aria-valuenow={rating}
        aria-valuemin="0"
        aria-valuemax="10"
      />
    </SliderContainer>
  );
};
