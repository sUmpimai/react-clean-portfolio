import PortfolioList from './PortfolioList';
import projectsData from '../mock.json';

const Portfolio = () => {
    return (
    <section className='portfolio'>
      <div className='container'>
          <h2>My Works.</h2>
      </div>
      <PortfolioList items={projectsData.Projects}/>  
    </section>
    );
}

export default Portfolio;