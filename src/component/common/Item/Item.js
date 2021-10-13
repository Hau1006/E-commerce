import React from 'react'

const Item = () => {
    return (
      <div className="container">
          <img style={{width:'100%', height:'50%'}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
          <div className="info_img">
              <div>Ten san pham</div>
              <div> gia san phan</div>
          </div>
          <button type="button" className="order-btn">MUA</button>

      </div>
    )
}

export default Item
