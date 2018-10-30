import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class LoaderComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/loader-component.png',
    name: 'Loader',
    type: 'ui-component',
    componentType: 'loader',
    category: 'Views',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: false
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the loader',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the loader',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...LoaderComponent.properties
    };

    this.state = Object.assign({}, this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div style={{ position: 'relative', height: '100px', width: '100%' }}>
        <div className="loader-container">
          <div className="loader1" />
          <div className="loader2" />
          <div className="loader3" />
        </div>
      </div>
    );
  }
}

export default LoaderComponent;
