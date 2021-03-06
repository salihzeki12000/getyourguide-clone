import React from 'react';
import PropTypes from 'prop-types';
import './AutoComplete.scss';
import SuggestionsList from './SuggestionsList';

const AutoComplete = ({
  filteredSuggestions,
  activeSuggestion,
  showSuggestions,
  onChange,
  onClick,
  onKeyDown,
  userInput,
  placeHolder,
  simplified,
}) => (
  <div className={`search-input-container${simplified ? ' input-simplified' : ''}`}>
    <label htmlFor="search-input">
      <input
        id="search-input"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        autoComplete="off"
        placeholder={placeHolder}
      />
      <span className="float-search">Paris, Barcelona...</span>
    </label>
    {showSuggestions && userInput && (
      <SuggestionsList
        filteredSuggestions={filteredSuggestions}
        activeSuggestion={activeSuggestion}
        onClick={onClick}
      />
    )}
  </div>
);

AutoComplete.propTypes = {
  userInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  filteredSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSuggestion: PropTypes.number.isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  simplified: PropTypes.bool,
};

AutoComplete.defaultProps = {
  simplified: false,
  placeHolder: null,
};

export default AutoComplete;
