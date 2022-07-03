import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actFetchData } from "./reducer/actions";

export default function DetailMovie() {
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const data = useSelector((state) => state.detailMovieReducer.data);
  const dispatch = useDispatch();

  //Lấy id từ url
  const params = useParams();

  useEffect(() => {
    dispatch(actFetchData(params.id));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>*DetailMovie</h1>
      <h3>{data && data.tenPhim}</h3>
    </div>
  );
}
