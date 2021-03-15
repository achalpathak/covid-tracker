import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { Typography } from "@material-ui/core";

import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaImage} alt="COVID-19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Typography variant="h6">
          Made with 💖 using{" "}
          <a href="https://www.reactjs.org" target="_blank" rel="noreferrer" >
            ReactJS
          </a>
        </Typography>
      </div>
    );
  }
}

export default App;
