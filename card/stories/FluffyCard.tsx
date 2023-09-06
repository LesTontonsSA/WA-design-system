import React from "react";
import { FluffyCard, type FluffyCardProps } from "../src";

const cardContent: FluffyCardProps = {
    title: "Test title card",
    text: "Test text card",
  };


export const FluffyCards = () => (
    <FluffyCard {...cardContent} >
        <img
          alt="card-image"
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
    </FluffyCard>
  );