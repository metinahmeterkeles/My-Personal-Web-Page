import './App.css';
import ImgThumbnail from './components/ImgThumbnail';
import Product from './components/Product';
import { IMAGES } from './data';
import Card from './components/Card';
import ConditionalRendering from './components/ConditionalRendering';
import MultipleImage from './components/MultipleImage';
import Apptwo from './Apptwo';

function App() {
  return (
    <div>
      {/* <Product header="header" className="product" id="1" productName="Computer" />
      <Product header="header" className="product" id="2" productName="Mobile" />
      <Product header="header" className="product" id="3" productName="Macbook" />

      <hr />
      <h3>Şartlı Rendering </h3>

      <ConditionalRendering isActive="true" isLoading="true"/>

      <hr />

      <Card title="Lorem İpsum Dolar" imgSrc="https://picsum.photos/450/250" imgAlt="Card information">
        <p>Lorem.</p>
        <p>Doloribus!</p>
        <p>Repudiandae?</p>
      </Card>
      <Card title="Lorem İpsum Dolar" imgSrc="https://picsum.photos/450/250" imgAlt="Card information">
        <p>2023.</p>
        <p>Doloribus!</p>
        <p>Repudiandae?</p>
      </Card>
      {
        IMAGES.map((item,index) => <ImgThumbnail imgSrc={item} imgAlt={index} key={index}/>)
      } */}
      <hr />
      <Apptwo/>
    </div>
  );
}

export default App;
