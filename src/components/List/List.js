import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    titleColumn: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <Container>
        <div>
          <section className={styles.component}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}

            {/* <div className={styles.columns}>
              {this.state.columns.map(({key, ...columnProps}) => (
                <Column key={key} {...columnProps} />
              ))}
            </div> */}
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn}/>
            </div>
          </section>
        </div>
      </ Container>
    );
  }
}

export default List;
