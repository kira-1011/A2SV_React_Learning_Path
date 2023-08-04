import { useEffect } from 'react';
import Card from './components/Card';

function App() {

  useEffect(() => {
    document.title = "Profile Card App"
  });

  return (
    <div className="flex justify-center items-center my-auto h-screen">
      <Card/>
    </div>
  );
}

export default App;
