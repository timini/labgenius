import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./props";
import { ProcessList as ProcessListComponent } from "./component";

export const ProcessList = connect(mapStateToProps, mapDispatchToProps)(
  ProcessListComponent
);

export default ProcessList;
