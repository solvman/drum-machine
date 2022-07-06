import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVolume } from "./VolumeSlice";
import { setMessage } from "../MessageScreen/MessageScreenSlice";

function Volume() {
  const volume = useSelector((state) => state.volume.value);
  const dispatch = useDispatch();

  return (
    <input
      type="range"
      id="volume"
      value={volume}
      onChange={(event) => {
        dispatch(setVolume(event.target.value));
        dispatch(setMessage(`Volume: ${event.target.value}`));
      }}
    ></input>
  );
}

export default Volume;
