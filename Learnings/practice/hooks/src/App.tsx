import React from 'react';
import MyTable from './component1/Table';



interface Row {
  id: number;
  name: string;
  age: number;
}

const initialData: Row[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>My Table</h1>
      <MyTable initialData={initialData} />
    </div>
  );
};

export default App;




// import React from 'react';
// import MyForm from './component2/Uasge';


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Form Example</h1>
//       <MyForm />
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import DataFetchingComponent from './component3/Usage';


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Data Fetching Example</h1>
//       <DataFetchingComponent />
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import ToggleComponent from './component4/Usage';


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Toggle Example</h1>
//       <ToggleComponent />
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import WindowSizeComponent from './component5/Usage';


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Window Size Example</h1>
//       <WindowSizeComponent />
//     </div>
//   );
// };

// export default App;
