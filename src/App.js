import { useState, useEffect } from 'react';
import { fetchData, options } from './utils/projectsData';
import { projects } from './utils/projectsUrls';
import { Box } from '@mui/material'
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import Header from './components/Header'
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './i18n'

function App() {

  const [projectsMeta, setProjectsMeta] = useState([])

  useEffect(() => {
    const projectsData = () => {
      setProjectsMeta([]);
      const openGraphUrl = 'https://og-link-preview.p.rapidapi.com/?url=';
      const githubUrl = 'https://github.com/portobanco51/';
      projects.forEach(async (e) => {
        const data = await fetchData(`${openGraphUrl}${e}`, options);
        const repoUrl = data.title.toLowerCase();
        setProjectsMeta((prev) => [...prev, { title: data.title, url: data.domain, img: [data.cover || data.favicon], description: data.description, git: `${githubUrl}${repoUrl.replace(/\s+/g, '')}` }])
      })
    }
    projectsData()
  }, [])

  return (
    <>
      {
        projectsMeta.length >= 0 ?
          <Box id='top' className='fade' >
            <Header />
            <Skills />
            <Box className='exp-banner' >
              <Projects projectsData={projectsMeta} />
              <Experience />
            </Box>
            <ContactMe />
          </Box>
          :
          <Box className='header'>
            <LoadingScreen />
          </Box>
      }
    </>
  );
}

// OPTIMIZE CSS

export default App