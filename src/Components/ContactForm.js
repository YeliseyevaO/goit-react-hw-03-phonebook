import React from "react";
import s from "./ContactForm.module.css";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  inputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
