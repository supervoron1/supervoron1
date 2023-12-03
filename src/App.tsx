import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div>
          <h3>Цели</h3>
          <div>Структурировать знания по ReactJS</div>
          <div>Научиться использовать продвинутые возможности Redux и Redux-Saga</div>
          <div>Изучить Typescript</div>
        </div>
        <div>
          <h3>Какими технологиями хочу овладеть</h3>
          <div>ReactJS</div>
          <div>Typescript</div>
          <div>Redux + Redux-Saga </div>
          <div>Jest</div>
        </div>
        <div>
          <h3>Какими технологиями уже владею</h3>
          <div>HTML, CSS</div>
          <div>Javascript, VueJs</div>
          <div>PHP, SQL</div>
        </div>
        <div>
          <h3>О себе</h3>
          <div>Меня зовут Дмитрий, в ИТ почти 5 лет.</div>
          <div>Работал как на фронте, так и на бэке (PHP).</div>
          <div>Из последнего - участвовал в написании и запуске проекта для крупного турагентства на Laravel + VueJS, который сейчас в стадии поддержки.</div>
          <div>В данный момент возникла необходимость перенести часть проекта на React. Хочу познать его до мелочей :)</div>
        </div>
      </header>
    </div>
  );
}

export default App;
