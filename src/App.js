import { useState, useEffect } from 'react';
import { fetchData, options } from './utils/projectsData';
import { projects } from './utils/projectsUrls';
import { Box } from '@mui/material'
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import Header from './components/Header'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Title from './components/Title';

function App() {

  const [projectsMeta, setProjectsMeta] = useState([])

  useEffect(() => {
    const projectsData = () => {
      setProjectsMeta([]);
      const openGraphUrl = 'https://og-link-preview.p.rapidapi.com/?url=';
      projects.forEach(async (e) => {
        const data = await fetchData(`${openGraphUrl}${e}`, options);
        setProjectsMeta((prev) => [...prev, { title: data.title, url: data.domain, img: [data.cover || data.favicon], description: data.description }])
      })
    }
    projectsData()
  }, [])

  return (
    <>

      {
        projectsMeta.length >= 5 ?
          <Box className='fade' >
            <Header />
            <Skills />
            <Projects projectsData={projectsMeta} />
            <Experience />
            <Title />
          </Box>
          :
          <Box>
            <LoadingScreen />
          </Box>
      }
    </>
  );
}

export default App