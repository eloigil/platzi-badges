import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import api from "../";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true, error: null });

    try {
      const data = [];
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: true, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
