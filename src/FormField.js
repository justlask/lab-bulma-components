import React, { Component } from 'react'

export default class FormField extends Component {
  render() {
    console.log(this)

    return (
      <div class="field">
        <label class={this.props.label}>{this.props.label}</label>
        <div class="control">
          <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
        </div>
    </div>
    )
  }
}

