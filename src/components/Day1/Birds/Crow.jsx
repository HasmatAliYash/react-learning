import PropTypes from 'prop-types'

export default function Crow(props) {
  return (
    <>
      <h3>{props.birdName}</h3>
      <p>
        A crow is a bird of the genus Corvus, or more broadly a synonym for all
        of Corvus. Crows are generally black in colour. The word "crow" is used
        as part of the common name of many species. The related term "raven" is
        not pinned scientifically to any certain trait
      </p>
    </>
  );
}

Crow.prototype = {birdName: PropTypes.string.isRequired}
Crow.defaultProps = {
  birdName: 'Croweeeeee'
}
