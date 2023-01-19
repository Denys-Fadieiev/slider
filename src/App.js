import Slider from './components/Slider';

function App(props) {
  const slides = [
    {
      title: 'Lorem Ipsum is simply dummy',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_1.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum ',
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_2.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum is',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_3.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum is simply dummy',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_4.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_5.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum is simply dummy',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_6.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum is...',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_7.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum is simply dummy',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_8.jpg',
      alt: 'alt',
    },
    {
      title: 'Lorem Ipsum...',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      src: 'https://ukravto.ua/files/avto/brand/Jeep/compass/exterior/190225_JEEP_COMPASS_S_9.jpg',
      alt: 'alt',
    },
  ];



  return (
    <>
      <Slider slides={slides}/>
    </>
  );
}

export default App;
