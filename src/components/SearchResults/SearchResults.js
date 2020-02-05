import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icons/Icon.js';
import {settings} from '../../data/dataStore';
import {Link} from 'react-router-dom';

const SearchResults = ({id, title, icon, cards}) => (
  <Link to={`/search/${id}`} className={styles.link}>
    <section className={styles.component}>
      <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
      <div>
        {cards.map(({id, ...cardProps}) => (
          <Card  key={id} {...cardProps} />
        ))}
      </div>
    </section>
  </Link>
);

SearchResults.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.node,
};

SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default SearchResults;
