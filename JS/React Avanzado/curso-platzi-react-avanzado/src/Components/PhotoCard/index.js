import React from "react";
import { ImgWrapper, Img, Button } from "./styles";

//link para react-icons de material design,
//se pueden usar varios diferentes, esta libreria aguanta resto
//https://react-icons.netlify.app/#/icons/md
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_birds.jpg";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src}></Img>
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size="32px" />
        {likes} Likes!
      </Button>
    </article>
  );
};
