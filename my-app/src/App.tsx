import React from 'react';

function App() {
  return (
    <div>
      <h1>生命周期</h1>
      <Test></Test>
    </div>
  );
}
interface isState{
  count:Number
}
class Test extends React.Component<any,isState>{
  constructor(parameters: object) {
    super(parameters)
    this.state= {
      count : 0 
    }
  }

  render(): React.ReactDOM {
    return (
      <div>
        <div>
          count: {this.state.count}
        </div>
      </div>
    )
  }
}

export default App;

