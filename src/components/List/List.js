import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    titleColumn: PropTypes.string,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <div>
        <section className={styles.component}>
          <Hero titleText={this.props.title} image={this.props.image} />
          <div className={styles.description}>
            {this.props.description}
          </div>
          <div className={styles.columns}>
            <Column titleColumn={'Animals'} />
            <Column titleColumn={'Plants'} />
            <Column titleColumn={'Minerals'} />
        </div>
        </section>
      </div>
    )
  }
}

export default List;
