import './Jumbotron.scss';

const Jumbotron = ({title, desc}) => {
    return (
        <div className="bg-random-color vh-100">
            <div className='container'>
                <div className='row intro-text'>
                    <div className='col-8 intro-text-inner animated animatedFadeInUp fadeInUp'>
                        <h1>Hello<span className='dot'>.
                            </span><br/>I am <span className="font-face-logo">Suwimol</span><span className='dot'>.</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Jumbotron;