import React, { Fragment } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useNearScreen from "../../Hooks/useNearScreen";

//link para react-icons de material design,
//se pueden usar varios diferentes, esta libreria aguanta resto
//https://react-icons.netlify.app/#/icons/md
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_birds.jpg";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const idLike = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(idLike, false);
  const [show, element] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src}></Img>
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} Likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
