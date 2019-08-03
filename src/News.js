import React, { Component } from "react";
import styles from "./News.module.css";
import Image from "./component/Image";
export default class News extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.imageHolder}>
        <Image src={this.props.image} fit="cover"/>
        </div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.content}>{this.props.content}</div>
      </div>
    );
  }
}
