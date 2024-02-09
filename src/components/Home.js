const Home =()=>{
    const orderNow=()=>{
        window.scrollTo({
            top:1150,
            behavior:'smooth'
        })
    }
    return (
        <section
        className="hero section"
        id="home"
        style={{backgroundImage:`url(./media/bg-hero.jpg)`}}
      >
        <h1 className="hero__title">
            Romanticize your day <br />
            With your Favorite Coffee <br />
            
        </h1>
        <button className='hero__button' onClick={orderNow}>Order Now</button>
      </section>
    );
};
export default Home;