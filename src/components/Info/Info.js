import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, pageContents, pageTiles} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} image={listData.image}/>
    <h2>{pageTiles.info}</h2>
    <p>{pageContents.content}</p>
  </Container>
);

export default Info;