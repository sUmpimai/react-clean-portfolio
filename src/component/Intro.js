import profilePhoto from '../img/01_img.jpg';

const Intro = () => {
    return (
        <div className='container'>
            <section className='intro'>
                <div className='row mb-5 mt-5'>
                    <div className='col-8'>
                    <h1>Hello<span className='dot'>.</span><br/> I am Jane Doe Lorem</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque</p>
                    </div>
                    <div className='col-4'>
                    <img src={profilePhoto} alt="profile-pic" />
                    </div>
                </div>
            </section>
         </div>
    )
}

export default Intro;