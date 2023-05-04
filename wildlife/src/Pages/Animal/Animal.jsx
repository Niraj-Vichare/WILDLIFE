import React, { useState } from "react";
import '../Animal/Animal.css'
import axios from "axios";
import Anim from "../../component/Anim/Anim";
function Animal() {
  const [search, setSearch] = useState("");
  const [fetchdata, setdata] = useState([]);
  const FetchData = () => {
    axios
      .get("https://animals-by-api-ninjas.p.rapidapi.com/v1/animals", {
        params: { name: search },
        headers: {
          "X-RapidAPI-Key":
            'key',
          "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
        },
      })
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
    console.log(fetchdata);
  };
  return (
    <div className="animal-div">
      <div className="input-div">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={FetchData} className="search">Search</button>
      </div>
      <div className="data">
        {fetchdata.map((ele, idx) => {
          return (
            <>
              <Anim
                key={idx}
                name={ele.name}
                color={ele.characteristics.color}
                diet={ele.characteristics.diet}
                height={ele.characteristics.height}
                lifeline={ele.characteristics.lifespan}
                habitat={ele.characteristics.habitat}
                group_behavior={ele.characteristics.group_behavior}
                prey={ele.characteristics.prey}
                top_speed={ele.characteristics.top_speed}
                type={ele.characteristics.type}
                origin={ele.characteristics.origin}
                weight={ele.characteristics.weight}
                most_distinctive_feature={ele.characteristics.most_distinctive_feature}
                locations={ele.locations}
                name_of_young={ele.characteristics.name_of_young}
                scientific_name={ele.taxonomy.scientific_name}
                kingdom={ele.taxonomy.kingdom}
                bgcolor={"#65c3f5b5"}
                />
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Animal;
