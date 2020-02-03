import React from 'react';
import useGeolocation from 'react-hook-geolocation';
import { 
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
  Arwes,
  Content,
  Project 
} from 'arwes';

function App() {
  const location = useGeolocation();

  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes animate>
        <SoundsProvider sounds={createSounds()}>
          <Content style={{ margin: 20 }}>
            <Project
                    animate
                    header='Geolocation Tests!'
                >
                    {anim => (
                      <>
                        <p>accuracy: {location.accuracy || 'null'}</p>
                        <p>altitude: {location.altitude || 'null'}</p>
                        <p>altitudeAccuracy: {location.altitudeAccuracy || 'null'}</p>
                        <p>heading: {location.heading || 'null'}</p>
                        <p>latitude: {location.latitude || 'null'}</p>
                        <p>longitude: {location.longitude || 'null'}</p>
                        <p>speed: {location.speed || 'null'}</p>
                        <p>timestamp: {location.timestamp || 'null'}</p>
                        <p>error: {location.error || 'null'}</p>
                      </>
                    )}
              </Project>
            </Content>
        </SoundsProvider>
      </Arwes>
    </ThemeProvider>
  );
}
export default App;
