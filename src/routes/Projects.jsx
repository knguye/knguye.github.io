import {useEffect, useState} from 'react';
import CollectionTW from "../components/CollectionTW";
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';






export default function Projects(props) {
    //const location = useLocation();
    const [category, setCategory] = useState();
    const location = useSelector((state) => state.status.location);

    useEffect(() => {
        setCategory(location);
    }, [location])

    return (
        <>
            <CollectionTW collectionName={props.collectionName} callouts={props.callouts}></CollectionTW>
        </>
    )
}