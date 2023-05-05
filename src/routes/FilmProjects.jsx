import Projects from "./Projects"
import cuttingOnions from '../img/stills/cutting-onions/3.png';

const callouts = [
    {
        name: 'Cutting Onions',
        role: 'Kevin (Lead)',
        description: 'A man tries his hardest not to cry.',
        imageSrc: cuttingOnions,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: 'https://youtu.be/BaK-D9Bs1RI',
    },
  ]
  

export default function FilmProjects() {
    return (
        <Projects collectionName={"Films"} callouts={callouts}/>
    )
}