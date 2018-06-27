import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { isNil } from "ramda";

import { propTypes, defaultProps } from "./props";

export class ProcessList extends PureComponent {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  constructor(props) {
    super(props);
    this.props.init();
  }
  render() {
    return (
      <div>
        {this.props.processes.map(process => {
          console.log(process);
          return (
            <div>
              <h1>
                <Link to={`/processes/${process.id}`}>{process.name}</Link>
              </h1>
              <p>{process.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProcessList;
