import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator.js';

class List extends React.Component {
  // state = {
  //   columns: this.props.columns || [],
  // }

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    titleColumn: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  // addColumn(title){
  //   this.setState(state => (
  //     {
  //       columns: [
  //         ...state.columns,
  //         {
  //           key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
  //           title,
  //           icon: 'list-alt',
  //           cards: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, image, description, columns} = this.props;
    return (
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
          {/* <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div> */}
        </section>
      </div>
    );
  }
}

export default List;
