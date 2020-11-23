import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ href, ...props }: any) => <Link to={href} {...props} />;
export default RouterLink;
