import React from "react";

import { NavLink } from "react-router-dom";

import { useParams } from "react-router-dom";

//*establecer condiciones de la recibidad de props
export const Header = (props: any) => {
  const handleChangeId = (e: any) => {
    props.setIdCharacter(e.target.value);
  };

/*  const pr = useParams();
  console.log("soy pr ", pr);
*/
  return (
    <header style={{ height: "100px" }}>
      <nav>
        <section>
          <h5>Rick-morty-app</h5>
        </section>
        <section>
          <ul>
            <li>

              <div>
                {props.dataCharacter.map((el:any) => {
                  return(
                    <NavLink to = {`/character/${el.id}`}>
                      visit ${el.name}
                    </NavLink>
                  )
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
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
