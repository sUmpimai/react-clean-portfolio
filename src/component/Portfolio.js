import PortfolioList from './PortfolioList';
import projectsData from '../mock.json';

const Portfolio = () => {
    return (
    <div className='portfolio container'>
      <h2>My Works.</h2>
      <PortfolioList items={projectsData.Projects}/>  
    </div>
    );
}

export default Portfolio;