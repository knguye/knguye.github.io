import CollectionTW from "../components/CollectionTW";
import Projects from "./Projects";
import cuttingOnions from '../img/stills/cutting-onions/3.png';
import canadianSpies from '../img/stills/canadian-spies/4.png';

const callouts = [
    {
      name: 'Canadian Spies',
      role: 'Liam (Lead)',
      description: 'Two American spies go undercover as Canadians to secure a deal.',
      imageSrc: canadianSpies,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Cutting Onions',
      role: 'Kevin (Lead)',
      description: 'A man tries his hardest not to cry.',
      imageSrc: cuttingOnions,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'https://youtu.be/BaK-D9Bs1RI',
    },
  ]
  

export default function ActingProjects() {
    return (
        <Projects collectionName={"Acting"} callouts={callouts}/>
    )
}