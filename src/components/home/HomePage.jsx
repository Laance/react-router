import React from 'react';
 
function HomePage(){
    return(
        <div>
            <h1 class = "text"> Hello! </h1>
            <p> This project was created to learn and demonstrate the features of React. <br/>I chose the film The Lord of the Rings as a theme of a project. <br/>  </p>
            <div className="box">
                <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/the-lord-of-the-rings-trilogy-i104637.jpg" alt="" />
            </div>
        </div>
    )
}

export default HomePage;