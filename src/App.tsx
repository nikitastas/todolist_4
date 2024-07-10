import './App.css';
import {Button} from './components/Button';
import {Sneakers} from './components/Sneakers';
import {type} from '@testing-library/user-event/dist/type';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const tasks: TaskType[] = [
        { id: 1, title: "HTML&CSS", isDone: true},
        { id: 2, title: "JS", isDone: true},
        { id: 3, title: "ReactJS", isDone: false},
    ]

  return (
    <div className="App">
        <Button onClick={() => {}} color={'red'}>RED button</Button>
        <Button onClick={() => {}}>DEFAULT button</Button>
        <Button onClick={() => {}} disabled={true} color={'secondary'}>DISABLED button</Button>
        <hr/>
        <Sneakers tasks={tasks}>
            <Button onClick={() => {}} color={'red'}>RED button</Button>
            <Button onClick={() => {}}>DEFAULT button</Button>
            <p>asdfasdfasdfasdfasdfasdf</p>
            <p>asdfasdfasdfasdfasdfasdf</p>
            <p>asdfasdfasdfasdfasdfasdf</p>
            <p>asdfasdfasdfasdfasdfasdf</p>
            <input type="text"/>
            <input type="text"/>
            <p>asdfasdfasdfasdfasdfasdf</p>
            <p>asdfasdfasdfasdfasdfasdf</p>
        </Sneakers>
    </div>
  );
}

export default App;
