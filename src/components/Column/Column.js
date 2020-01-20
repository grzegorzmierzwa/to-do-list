import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
    state = {
      columns: this.props.cards || [],
    }

  static propTypes = {
    titleColumn: PropTypes.string,
  }

  render() {
    return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <div> 
                <Card text={settings.cardCreatorText} />
            </div>
            
        </section>
    )
  }
}

export default Column;
