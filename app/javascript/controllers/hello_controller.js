import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus")
  }

  greet() {
    console.log("Greet: ", this.element)
  }
}
