import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./props";
import { ProcessDetail as ProcessDetailComponent } from "./component";

export const ProcessDetail = connect(mapStateToProps, mapDispatchToProps)(
  ProcessDetailComponent
);

export default ProcessDetail;
