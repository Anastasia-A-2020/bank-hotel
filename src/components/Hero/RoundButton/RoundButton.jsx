import PropTypes from "prop-types";
import "./RoundButton.scss";

export default function RoundButton({ text, width, height, bg, ...props }) {
  return (
    <button
      type="button"
      className={`button button--rounded w-[${width}] h-[${height}] bg-[${bg}]`}
      {...props}
    >
      {text}
    </button>
  );
}

RoundButton.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
