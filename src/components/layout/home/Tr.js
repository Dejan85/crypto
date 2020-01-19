import React from "react";
import PropTypes from "prop-types";

const Tr = ({ data, id, name }) => {
  return (
    <tr className="home__tbody--tr">
      <td className="home__tbody--td">{id}</td>
      <td className="home__tbody--td">{name}</td>
      <td className="home__tbody--td">{data && data[4].toFixed(1)}</td>
      <td className="home__tbody--td">{data && data[3]}</td>
      <td className="home__tbody--td">{data && data[2]}</td>
    </tr>
  );
};

Tr.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string
};

export default Tr;
