import React from 'react';
import './Home.css';
import News from '../images/news.jpg'
import Mer from '../images/mer.jpg'
import Nutr from '../images/Nutr.jpg'

const Home = () => {
  return (
    <div className="home">

      <header className="home-banner">
        <div className="container">
          <h1 id='ac'>Первая Исламская академия в Кыргызстане!</h1>
          <p id='zna'>
            Знание — это дар, который просветляет душу. В нашем университете мы <br />стремимся передать этот дар, вдохновляя студентов на путь мудрости и <br /> понимания.

          </p>
        </div>
      </header>
        <section className="news">
      <div className="container">
          <h2 style={{ textAlign: 'start', fontSize: '40px' }}>НОВОСТИ</h2>
          <a href=""> <p style={{ textAlign: 'end', color: 'red' }}>Посмотреть все новости</p></a>
          <div className="news-grid">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="news-card">
                <img
                  src={News}
                  alt="News"
                  className="news-image"
                />
                <h3>День открытых дверей</h3>
                <p>
                  Узнайте больше о нашей академии и присоединяйтесь к
                  образовательным программам.
                </p>
                <span className="date">22.06.2023</span>
              </div>
            ))}
          </div>
          <a href="/news" className="view-all">Посмотреть все новости</a>
      </div>
        </section>

      <div className="container">
        <section className="events">
          <h2>МЕРОПРИЯТИЕ</h2>
          <div className="events-grid">
          {[...Array(4)].map((_, index) => (
  <div className="event-card" >
    <img
      src={Mer}
      alt="Event"
      className="event-image"
    />
    <div className="event-content">
      <p>Октябрь 16,  |  10:00 - 12:00</p>
      <h3>Встреча с учеными исламского мира</h3>
      <p>Адрес: Центральный зал, город Ош.</p>
      <p>
      На этой неделе наша академия имела честь принять выдающихся ученых из разных уголков исламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе
      </p>
    </div>
  </div>
))}

          </div>
          <a href="/events" className="view-all">Посмотреть все мероприятия</a>
        </section>
      </div>

      <section className="history">
        <h2>ИСТОРИЯ НАШЕЙ АКАДЕМИИ</h2>
        <p>
          Исламская Академия была основана с целью распространения знаний и
          воспитания духовного роста общества. Мы стремимся подготовить
          лидеров, способных ответить на вызовы времени и сохранить исламские
          ценности.
        </p>
        <a href="/about" className="read-more">Узнать больше</a>
      </section>


      <section className="gallery">
        <h2>ГАЛЕРЕЯ</h2>
        <div className="gallery-grid">
          {[...Array(3)].map((_, index) => (
            <img
              src={Nutr}
              className="gallery-image"
            />
          ))}
        </div>
        <a href="/gallery" className="view-all">Посмотреть все фото</a>
      </section>
    </div>
  );
};

export default Home;



