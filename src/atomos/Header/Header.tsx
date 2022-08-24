import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

//!css file
import "../../css/defaultCss/Header.css";

//*establecer condiciones de la recibidad de props
export const Header = (props: any) => {
  const [displayDiv, setDisplayDiv] = useState(false);

  const handleDisplay = (e: any) => {
    setDisplayDiv(!displayDiv);
  };

  const handleClickChangeId = (e: any) => {
    props.setIdCharacter(e.target.id);
    console.log(e.target.id);
  };

  return (
    <header style={{ height: "100px" }}>
      <nav>
        <section>
          <h5>Rick-morty-app</h5>
        </section>
        <section>
          <ul>
            <>
              {/*manejar este div con un toggle para que al hacer click aparezca como un desplegable*/}
              <p onClick={handleDisplay}>see</p>
              <div
                
                className={`${displayDiv ? 'active' : 'inactive'}`}
              >
                Look specific character
                {props.dataCharacter.map((el: any) => {
                  return (
                    <li key={el.id} onClick={handleClickChangeId}>
                      <Link
                        to={`/character/${el.id}`}
                        onClick={handleClickChangeId}
                        id={el.id}
                      >
                        visit {el.name}
                      </Link>
                    </li>
                  );
                })}
              </div>

              {/*
                <select name="" id="" onChange={handleChangeId}>
             <NavLink to={`/character/${props.idCharacter}`}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
             </NavLink>
                </select>*/}
              {/*                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>*/}
            </>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
