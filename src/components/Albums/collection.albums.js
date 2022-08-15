import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ButtonGroup, Carousel } from "react-bootstrap";

const Colletion = () => {
  const [datas, setDatas] = useState([]);
  const [getLimit, setLimit] = useState(3)

  useEffect(() => {
    let isCancel = false;

    if(isCancel === false){
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${getLimit}`,
      }).then((result) => setDatas(result.data));
    }

  //  clean up function disarankan ketika menggunakan use Effect yg di dalamnya ngefetch data pake clean up function
   return () => {isCancel = true};

  }, [getLimit]);

  // function handle ketika button di klik
  const handleLimit = (option) => {
    option === "plus" ? setLimit((prev) => prev + 1 ) : setLimit((back) => back - 1);
    //  if(option === "plus"){
    //   setLimit((prev) => prev + 1);
    //  }
     
    //  if(option === "mines"){
    //    setLimit((back) => back - 1 );
    //  }
  }

  return (
    <React.Fragment>
      <h3>{getLimit} Collections</h3>
      <Carousel>
        {/* maping data start */}

        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                width={600} 
                height={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

        {/* maping data  end */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-3 mb-5">
        <button className="btn btn-outline-primary" onClick={() => handleLimit("plus")}> + </button>
        {
          getLimit > 3 &&
        <button className="btn btn-outline-primary" onClick={() => handleLimit("mines")}> - </button>
        }
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Colletion;
