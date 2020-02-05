import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icons/Icon';
import {settings, pageTiles} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.search.icon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>{pageTiles.home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{pageTiles.info}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{pageTiles.faq}</NavLink> 
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;