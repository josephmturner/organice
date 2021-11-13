import React, { PureComponent } from 'react';

import './stylesheet.css';

export default class DrawerActionButtons extends PureComponent {
  // A nasty hack required to get click handling to work properly in Firefox. No idea why its
  // broken in the first place or why this fixes it.
  iconWithFFClickCatcher({ className, onClick, title, disabled, testId = '' }) {
    return (
      <div
        title={title}
        onClick={!disabled ? onClick : undefined}
        className="header-action-drawer__ff-click-catcher-container"
      >
        <div className="header-action-drawer__ff-click-catcher" />
        <i className={className} data-testid={testId} />
      </div>
    );
  }

  render() {
    const {
      onTitleClick,
      onDescriptionClick,
      onTagsClick,
      onPropertiesClick,
      onDeadlineClick,
      onScheduledClick,
      onAddNote,
      activePopupType,
    } = this.props;

    return (
      <div className="header-action-drawer-container">
        <div className="header-action-drawer__row">
          {this.iconWithFFClickCatcher({
            className: 'fas fa-pencil-alt fa-lg',
            onClick: onTitleClick,
            title: 'Edit header title',
            disabled: 'title-editor' === activePopupType,
          })}

          {this.iconWithFFClickCatcher({
            className: 'fas fa-edit fa-lg',
            onClick: onDescriptionClick,
            title: 'Edit header description',
            disabled: 'description-editor' === activePopupType,
            testId: 'edit-header-title',
          })}

          {this.iconWithFFClickCatcher({
            className: 'fas fa-tags fa-lg',
            onClick: onTagsClick,
            title: 'Modify tags',
            disabled: 'tags-editor' === activePopupType,
          })}

          {this.iconWithFFClickCatcher({
            className: 'fas fa-list fa-lg',
            onClick: onPropertiesClick,
            title: 'Modify properties',
            disabled: 'property-list-editor' === activePopupType,
          })}

          {this.iconWithFFClickCatcher({
            className: 'fas fa-calendar-check fa-lg',
            onClick: onDeadlineClick,
            title: 'Set deadline datetime',
            disabled: 'deadline-editor' === activePopupType,
          })}
          {this.iconWithFFClickCatcher({
            className: 'far fa-calendar-times fa-lg',
            onClick: onScheduledClick,
            title: 'Set scheduled datetime',
            disabled: 'scheduled-editor' === activePopupType,
          })}

          {this.iconWithFFClickCatcher({
            className: 'far fa-sticky-note fa-lg',
            onClick: onAddNote,
            title: 'Add a note',
            disabled: 'note-editor' === activePopupType,
          })}
        </div>
      </div>
    );
  }
}
