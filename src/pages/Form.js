import React, { Component } from "react";
import "../styles/Form.css";
import Comment from "../Components/Comment";

class Form extends Component {
  state = {
    comments: "",
    email: "",
    user: "",
    comment: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { email, user, comment } = this.state;
    let doreturn = false;
    e.preventDefault();
    if (email === "" || user === "" || comment === "") return;
    if (this.state.comments.length > 0)
      this.state.comments.forEach((element) => {
        if (element.props.user === user && element.props.comment === comment)
          doreturn = true;
      });
    debugger;
    if (doreturn) {
      alert("jeden użytkownik nie może napisać 2 takich samych komentarzy");
      return;
    }
    let comments = [...this.state.comments];
    comments.push(
      <Comment
        user={user}
        email={email}
        comment={comment}
        key={user + comment}
      />
    );
    this.setState({
      email: "",
      user: "",
      comment: "",
      comments,
    });
  };

  render() {
    const { email, user, comment, comments } = this.state;
    return (
      <div className="form">
        <h2>Co sądzisz o stronie?</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <p>email:</p>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="user">
            <p>Nazwa użytkownika:</p>
            <input
              name="user"
              type="text"
              id="user"
              onChange={this.handleChange}
              value={user}
            />
          </label>
          <label htmlFor="comment">
            <p>Opinia:</p>
            <textarea
              value={comment}
              name="comment"
              id="comment"
              onChange={this.handleChange}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <section>
          <div className="comment-section">
            <h3>Opinie</h3>
            <div className="comments">{comments}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
