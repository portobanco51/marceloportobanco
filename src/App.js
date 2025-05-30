import { useState, useEffect } from 'react';
import { fetchData, options } from './utils/projectsFetchData';
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
    const projectsData = async () => {
      setProjectsMeta([]);
      const openGraphUrl = 'https://url-metadata-opengraph.p.rapidapi.com/parse?url=';
      const githubUrl = 'https://github.com/portobanco51/';

      const asyncFetchData = async (projectUrl) => {
        const { og } = await fetchData(`${openGraphUrl}${projectUrl}`, options);
        const { title: { content: titleContent }, description: { content: descriptionContent }, image: { content: imageContent }, } = og;

        const repoUrl = titleContent.toLowerCase();
        const titleText = titleContent.replace(/GitHub - [^/]+\/([^:]+): .+$/, "$1");
        const ArrowKeysMenuImg = "https://shorturl.at/T0l0b";

        return {
          title: titleText,
          url: projectUrl || null,
          img: imageContent || ArrowKeysMenuImg,
          description: descriptionContent,
          git: `${githubUrl}${repoUrl.replace(/\s+/g, "")}`
        };
      };

      for (const projectUrl of projects) {
        const projectsMeta = await asyncFetchData(projectUrl);
        setProjectsMeta((prev) => [...prev, projectsMeta]);
      };
    };
    projectsData();
  }, []);

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

export default App