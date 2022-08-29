const WorkItem = ({items}) => {
    return (
      <div className='row row-cols-1 row-cols-md-2 text-center'>     
          {items.map((item, index) => (
          <div className='col' key={index}>
            <div className='portfolio-item'>
              <div className='item-thumnail'>
                <img src={require('../../assets/img/'+item.images)} alt={item.title}/>
              </div>
              <div className='item-desc'>
                <h4>{item.title}</h4>
                <p>Design, Development</p>
              </div>
            </div>
          </div>
          )
        )}    
      </div>
    )
}

export default WorkItem;