import PropTypes from "prop-types";
import "./RoundButton.scss";

export default function RoundButton({ text, border, ...props }) {
  return (
    <button
      className={`button ${border && "button--circled"} italic`}
      {...props}
    >
      {text}
    </button>
  );
}

RoundButton.propTypes = {
  text: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

RoundButton.defaultProps = {
  border: false,
};
