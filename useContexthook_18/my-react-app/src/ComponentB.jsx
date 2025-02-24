import ComponentC from "./ComponentC"
import React, {useContext} from "react"

import { UserContext } from "./ComponentA"

function ComponentB(){

    const user1 = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{ `Hi My name is ${user1}`} </h2>
            <ComponentC  />

        </div>
    )

}

export default ComponentB