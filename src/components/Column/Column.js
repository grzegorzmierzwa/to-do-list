import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    titleColumn: PropTypes.string,
  }

  render() {
    return (
      <div>
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.titleColumn}</h3>
        </section>
      </div>
    )
  }
}

export default Column;
