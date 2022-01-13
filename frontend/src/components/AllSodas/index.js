import React, { useEffect } from "react";
import { getAllSodas } from "../../store/soda";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

const AllSodas = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSodas());
  }, [dispatch]);
  const sodas = useSelector((state) => state.soda);
  const sodaArray = Object.values(sodas);
  console.log(sodaArray);

  if (sessionUser) {
    return (
      <>
        <div className="grid-container">
          {isLoaded &&
            sodaArray.map((soda) => (
              <NavLink className="sodas" to={`/edit/${soda?.id}`}>
                <div className="soda-card" key={`${soda?.id}`}>
                  <h4 className="soda-card-h">{soda?.name}</h4>
                  <p className="soda-card-b">{soda?.body}</p>
                  <p>TESTING</p>
                </div>
              </NavLink>
            ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/error-user" />
      </>
    );
  }
};

export default AllSodas;
