import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import { settings, listData } from '../../data/dataStore';

class Column extends React.Component {
  
  static propTypes = {
    card: PropTypes.node,
  }

  render() {
    // console.log('list', this.props.cards);
    return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <div>
              {this.props.cards.map(({key, ...cardProps}) => (
                <Card  key={key} {...cardProps} />
              ))}
            </div>
            
        </section>
    )
  }
}

export default Column;
