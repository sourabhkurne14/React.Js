

function ObjinList(){

    const arr = ["RohitB","RohitK","SumitK","AniketS","TusharK"]

    
        return(
            <ul>
                {arr.map((e , index) =>
                <li key={index} >
                    {e}

                </li> ) }
            </ul>
        )
    

}

export default ObjinList