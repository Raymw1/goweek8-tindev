import React from "react";
import { useParams } from "react-router-dom";

export default function Main() {
  const params = useParams();
  return <h1>{params.id}</h1>;
}
