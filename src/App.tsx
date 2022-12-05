import { useEffect, useState } from 'react';
import './App.css';
import { useGetUser } from './hooks/useGetUsers';

function App() {
  const { isLoading, isError, error, data } = useGetUser(1);
  const [warning, setWarning] = useState<string>('');

  useEffect(() => {
    if (isError) {
      error?.message === '404' && setWarning('404: Cannot request');
    }
  }, [isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <p>{warning !== '' && warning}</p>
      <p>{data?.name}</p>
    </div>
  );
}

export default App;
