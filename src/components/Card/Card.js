import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    titleColumn: PropTypes.string,
  }

  render() {
    return (
        <section className={styles.component}>
            
        </section>
    )
  }
}

export default Card;
