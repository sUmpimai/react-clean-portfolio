const PortfolioList = (props) => {
  const { items } = props;

    return (
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          {items.map(item => (
            <div className='col' key={item.id}>
              <div className='portfolio-item'>
                <div className='item-thumnail'>
                  <img src={require('../img/'+item.images)} alt='floral'/>
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

export default PortfolioList;