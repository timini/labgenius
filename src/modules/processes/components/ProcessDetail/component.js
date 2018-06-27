import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { propTypes, defaultProps } from "./props";

export class ProcessDetail extends PureComponent {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.props.init({ id });
    this.next = this.next.bind(this);
    this.updateWell = this.updateWell.bind(this);
  }
  next() {
    const { id } = this.props;
    this.props.next({ id });
  }
  updateWell(event) {
    const { id } = event.target.dataset;
    const { value } = event.target;
    this.props.updateWell({
      id,
      value
    });
  }
  renderWells() {
    const { wells = [] } = this.props.process;
    console.log(wells);
    return (
      <form>
        {wells.map(well => (
          <div key={well}>
            <label for={well}>{well}</label>
            <input
              type="number"
              name={well}
              onChange={this.updateWell}
              data-id={well}
            />
          </div>
        ))}
      </form>
    );
  }
  render() {
    return (
      <div className="cf pa3 mw9 center">
        <h1>{this.props.process.name}</h1>
        <h5>Status: {this.props.status}</h5>
        <p>{this.props.process.description}</p>
        {this.props.requiresData && <h5>Data Required:</h5>}
        {this.props.requiresData && this.renderWells()}
        <button onClick={this.next} disabled={this.props.requiresData && !this.props.wellsComplete}>
          next
        </button>
      </div>
    );
  }
}

export default ProcessDetail;
