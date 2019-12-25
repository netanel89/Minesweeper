import React from "react";
import PropTypes from "prop-types";
import { GridCell } from "./Styled";

// one cell component.
// we use react memo to prevent unnecessary render for each board change.
const Cell = React.memo(
  ({ id, value, isMarked, isRevealed, isMined, onCellClick, onCellMark }) => {
    const onClick = e => {
      e.shiftKey ? onCellMark(id) : onCellClick(id);
    };
    const getValue = () => (isRevealed && value ? value : "");
    return (
      <GridCell
        key={id}
        onClick={onClick}
        isMarked={isMarked}
        isMined={isMined}
        isRevealed={isRevealed}
      >
        <div>{getValue()}</div>
      </GridCell>
    );
  }
);

const noop = () => {};

Cell.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isMarked: PropTypes.bool,
  isRevealed: PropTypes.bool,
  onCellClick: PropTypes.func,
  onCellMark: PropTypes.func
};

Cell.defaultProps = {
  id: "",
  value: "",
  isMarked: false,
  isRevealed: false,
  onCellClick: noop,
  onCellMark: noop
};

export default Cell;
