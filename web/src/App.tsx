
interface ButtonProps{
  text?:string;
}

function Button(props:ButtonProps){
  return(
    <button className="bg-violet-500 p-2">{props.text ?? 'Default'}</button>
  )
}



function App() {
 return(
    <div>
      <h1>Hello World</h1>
      <Button text="Send"/>
      <Button text="OK"/>
      <Button />
    </div>
 )
}

export default App;
