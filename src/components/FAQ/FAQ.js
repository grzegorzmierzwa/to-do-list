import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, pageContents, pageTiles} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title} image={listData.image}/>
    <h2>{pageTiles.faq}</h2>
    <p>{pageContents.content}</p>
    <p>{pageContents.content}</p>
  </Container>
);

export default FAQ;
    