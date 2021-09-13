import { useRef } from 'react';
import './App.css';
import ScrollableBox from './ScrollableBox';
import { ScrollableRef } from './ScrollableBox';



function App() {
  const boxref = useRef<ScrollableRef>(null) 
  

  return (
    <div className="App">
      <p>
        Gerenciando funções imperativas do DOM com useImperativeHandle.
      </p>
      <ScrollableBox ref={boxref} width={120} height={120}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis,
          et repudiandae deleniti amet quasi quidem quo natus omnis quia distinctio ex 
          nesciunt voluptatum porro ut deserunt reiciendis maxime nihil?
        </p>
      </ScrollableBox>
      <button onClick={() => boxref.current?.scrollToBotton()}>
        Descer
      </button>
    </div>
  );
}
export default App;
