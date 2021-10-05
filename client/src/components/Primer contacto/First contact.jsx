import "./First contact.css";
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {getThemAll} from "../../actions/getThemAll"
import React from "react";
import { NavLink } from 'react-router-dom';

export default function FirsContact() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getThemAll())
  }, [])
  return (
    <div className="bodys">
    <NavLink exact to="/pokemon" >
      <button className="get" type="submit">Get them all</button>
      </NavLink>
    </div>
  );
}
