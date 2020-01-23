import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator.js';
import Icon from '../Icons/Icon.js';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  render() {
    const {title, icon} = this.props;
    console.log(icon);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span>{this.props.title}</h3>
        {/* <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card  key={key} {...cardProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;
