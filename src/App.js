import './App.module.scss';
import Slider from './components/Slider';

function App(props) {
  const slides = [
    {
      title: 'title',
      description: 'description',
      src: 'https://i.infocar.ua/i/2/5429/107528/1920x.jpg',
      alt: 'alt',
    },
    {
      title: 'title2',
      description: 'description2',
      src: 'https://i.infocar.ua/i/2/5429/107529/1920x.jpg',
      alt: 'alt',
    },
    {
      title: 'title3',
      description: 'description3',
      src: 'https://i.infocar.ua/i/2/5429/107533/1920x.jpg',
      alt: 'alt',
    },
    {
      title: 'title4',
      description: 'description4',
      src: 'https://i.infocar.ua/i/2/5429/107534/1920x.jpg',
      alt: 'alt',
    },
  ];

  return (
    <article>
      <Slider slides={slides}/>
    </article>
  );
}

export default App;
