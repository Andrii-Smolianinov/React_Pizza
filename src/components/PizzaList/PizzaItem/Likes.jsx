import React from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { setIncrementLikes, selectPizzas } from "../../../redux/slices/pizzasSlice";

const Likes = ({ id, likes, isClickLike }) => {
  const dispatch = useDispatch();
  const {items} = useSelector(selectPizzas)
 
  return (
    <div className="absolute bottom-1 left-1 z-10 flex items-center">
      <button type="button" onClick={() => dispatch(setIncrementLikes(id))} className="mr-2 hover:cursor-pointer">
        {isClickLike ? (
          <BsHeartFill size={24} className="fill-white opacity-60" />
        ) : (
          <BsHeart size={24} className="fill-white" />
        )}
      </button>

      <span className="text-cyan-50 text-xl font-medium">{likes}</span>
    </div>
  );
};

export default Likes;
