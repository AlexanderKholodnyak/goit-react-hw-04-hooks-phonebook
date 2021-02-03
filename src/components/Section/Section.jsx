import PropTypes from 'prop-types';
import s from './Section.module.css';
const Section = ({ title, children }) => (
  <div className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
