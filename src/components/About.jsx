import React from 'react'
import NavContainer from '../containers/NavContainer'
import Gallery from './Gallery';
import { calculate_age } from './functions';

const About = () => {
  


  return (
    <div>
        <NavContainer/>
        <section className='about'>
          <div className="about-content">
            <img src='assets/gallery/images/5.png' alt=''/>

            <div className="about-text">
              
            <h1>Temirlan Tassaliyev</h1>
            <h5> WEB-разработчик</h5>
            <h4> информация об этом приложении:</h4>
            <p>Приложение создавалось с нуля лично мной, за исключением совсем малой части верстки, они были взяты с ютюба, исключительно для обучения,весь функционал хендмэйд)).Приложение использует Unsplash API</p>
            <p>Unsplash API - это открытое API для скачивания картинок.Для использования API,сначала нужно отправить post запрос для регистрации, после регистрации вы получите client_ID.С помощью этого client_ID вы уже сможете взаимодействовать с API.искать и скачивать нужные картинки, отправляя get запросы, создавать свои коллекции картинок,оставлять лайки, с помощью post запросов и тд и тп</p>
            <p>Специально применял разные виды компонентов(функциональные и классические компонеты(иногда для реализации функционала, иногда просто показать, что и так тоже могу)) и по разному использовал обычный state react и react-redux также использовал такие npm-библиотеки:</p>
            <ul style={{"color": "white"}}>
              <a href='https://react-bootstrap.netlify.app/docs/getting-started/introduction'><li>react-bootstrap</li></a>(в основном для модалок)
              <a href='https://www.npmjs.com/package/react-reveal'><li>react-reveal</li></a>(для небольшой анимации)
              <a href='https://www.npmjs.com/package/axios'><li>axios</li></a>(для отправки ajax-запросов)
              <a href='https://mui.com/material-ui/getting-started/installation/'><li>material-ui</li></a>(для пагинации)
              <a href='https://www.npmjs.com/package/react-redux'><li>react-redux</li></a>(для альтернативного использования state)
              <a href='https://www.npmjs.com/package/react-router-dom'><li>react-router-dom</li></a>(для перемещения по страницам)
            </ul>
            <h4>Базовая информация:</h4>
            <p>Меня зовут Тасалиев Темирлан, мне {calculate_age(new Date(1995, 12, 12))} лет.родился и вырос в Астане.Закончил бакалавр и магистратуру в  Аграрном университете им. Сакена Сейфуллина.</p>
            <h4>Опыт работы:</h4>
            <p>Работал фотографом в столичном цирке.Жил и работал официантом в США по программе work & travel.После окончания магистратуры  почти год работал в команде разработчиков,frontend разработчиком на ReactJS и backend на dotnet core, но пришлось сделать паузу из-за ситуации с COVID19,после, работал, что-то вроде фрилансера)) фронт на ReactJS и бэк на NodeJS</p>
            <h4>Навыки:</h4>
            <p>Знаю русский, казахский,английский и турецкий,изучал немного испанский</p>
            <p>изучал и использовал: React-redux,html,css,javascript,postgresSQL,ajax запросы(взаимодествие с бэком), работал с git, подключал различные npm-библиотеки, также подключал react-bootstrap, semantic-ui material-ui</p>
            <h4>Хобби и прочее:</h4>
            <p>О себе: общительный,спокойный,ответственный,разнесторонний, очень люблю спорт.играю футбол,баскетбол,воллейбол, профессионально занимался теннисом, люблю изучать иностранные языки и собирать пазлы, кубики рубика и лего)).Был моделью(для барбершопов, на конкурсах и тп)</p>
            <p> Изучаю мобильную разработку на Flutter и не прочь поработать или даже полностью перейти в эту сферу</p>
            <a href='assets/files/CV.pdf' download>
            <button className='about-btn' type='button'>Скачать резюме</button>
            </a>
          </div>
          </div>

        </section>
          <Gallery/>
    </div>
  )
}

export default About