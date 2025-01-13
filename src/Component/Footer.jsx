import PropTypes from "prop-types";

function Footer({ children }) {
  return <footer>{children}</footer>;
}

export default Footer;

Footer.propTypes = {
  children: PropTypes.object,
};
