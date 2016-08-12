import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

import style from './style.scss';

export default class NavMenu extends React.Component {
  render() {
    const atomicGroups = _.groupBy(this.props.data, (compData) => compData.atomicPart.toLowerCase());
    return(
      <div className={ style.wrapper }>
        <div className={ style.headWrapper }>
          <div className={ style.head }>Plasma</div>
        </div>
        <div className={ style.group }>
          <div className={ style.groupTitle }>ATOMS</div>
          <ol>
            { _.map(atomicGroups.atom, (cd) => {
              return (
                <li className={ style.link }>
                  <Link to={`/plasma/components/#${cd.componentName}`}>
                    { cd.componentName }
                  </Link>
                </li>
              );
            })} 
          </ol>
        </div>
        <div className={ style.group }>
          <div className={ style.groupTitle }>MOLECULES</div>
          <ol>
            { _.map(atomicGroups.molecule, (cd) => {
              return (
                <li className={ style.link }>
                  <Link to={`/plasma/components/#${cd.componentName}`}>
                    { cd.componentName }
                  </Link>
                </li>
              );
            })} 
          </ol>
        </div>
        <div className={ style.group }>
          <div className={ style.groupTitle }>ORGANISMS</div>
          <ol>
            { _.map(atomicGroups.organism, (cd) => {
              return (
                <li className={ style.link }>
                  <Link to={`/plasma/components/#${cd.componentName}`}>
                    { cd.componentName }
                  </Link>
                </li>
              );
            })} 
          </ol>
        </div>
        <div className={ style.group }>
          <div className={ style.groupTitle }>TEMPLATES</div>
          <ol>
            { _.map(atomicGroups.template, (cd) => {
              return (
                <li className={ style.link }>
                  <Link to={`/plasma/components/#${cd.componentName}`}>
                    { cd.componentName }
                  </Link>
                </li>
              );
            })} 
          </ol>
        </div>
        <div className={ style.group }>
          <div className={ style.groupTitle }>PAGES</div>
          <ol>
            { _.map(atomicGroups.page, (cd) => {
              return (
                <li className={ style.link }>
                  <Link to={`/plasma/components/#${cd.componentName}`}>
                    { cd.componentName }
                  </Link>
                </li>
              );
            })} 
          </ol>
        </div>
      </div>
    );
  }
}