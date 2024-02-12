// import React from 'react'
// import { Link } from 'react-router-dom'
// import s from './style.module.css'
// import Wrapper from '../UI/Wrapper'

// export default function CategoryItem({ id, image, title }) {

//   const img = `http://localhost:3333/${image}`

//   return (
//     <Wrapper>
//     <Link to={`/categories/${id}`}>
//       <div className={s.categoryItem}>
//         {/* <p>{title }</p> */}
//             <img src={img} alt="" />
//         </div>
//     </Link>
//     </Wrapper>
//   )
// }


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import Wrapper from '../UI/Wrapper'

export default function CategoryItem({ id, image, title }) {
  const [isPressed, setIsPressed] = useState(false);
  const img = `http://localhost:3333/${image}`

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <Wrapper>
      <Link to={`/categories/${id}`}>
        <div className={s.categoryItem}>
          <img 
            src={img} 
            alt="" 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onMouseLeave={handleMouseUp} // Ensure the state is reset even if the mouse leaves the image while pressed
            className={isPressed ? s.pressed : ''}
          />
        </div>
      </Link>
    </Wrapper>
  )
}
