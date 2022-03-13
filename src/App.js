import { useEffect } from 'react';
import { resizeWidth } from './redux/slice/windowDimensionSlice';
import { useDispatch, useSelector } from 'react-redux';

// components
import Desktop from './components/desktop';
import Mobile from './components/mobile';

const App = () => {
  const updatedWidth = useSelector((state) => state.windowDimension.width);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowResize = () => {
      const resize = dispatch(resizeWidth({ width: window.innerWidth }));
      console.log(resize);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [dispatch]);

  return <> {updatedWidth <= 900 ? <Mobile /> : <Desktop />} </>;
};

export default App;
