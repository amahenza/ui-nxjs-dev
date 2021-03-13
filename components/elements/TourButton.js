import Link from "next/link";
import { withRouter } from "next/router";

const TourButton = (props) => (
  <Link href={props.path}>
    <div>
      <span className="Label">{props.label}</span>
    </div>
  </Link>
);

export default withRouter(TourButton);
