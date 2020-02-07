/* eslint-disable no-console, no-unused-vars */

import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-data-colors-version.js";

export default class RiseDataColors extends RiseElement {

  static get properties() {
    return {
      /**
       * The base color. For example "rgba(235,235,235,1)"
       */
      base: {
        type: String,
        value: ""
      },
      /**
       * The accent color. For example "rgba(125,125,125,1)"
       */
      accent: {
        type: String,
        value: ""
      },
      /**
       * Determines whether to override Branding settings or not
       */
      override: {
        type: Boolean,
        value: false
      }
    };
  }

  // Each item of observers array is a method name followed by
  // a comma-separated list of one or more dependencies.
  static get observers() {
    return [
      "_reset(base, accent, override)"
    ];
  }

  constructor() {
    super();

    this._setVersion( version );
    this._initialStart = true;
  }

  _reset() {
    if ( !this._initialStart ) {
      this._start();
    }
  }

  _sendColorsEvent( eventName, detail ) {
    super._sendEvent( eventName, detail );
  }

  _start() {
    this._sendColorsEvent( RiseDataColors.EVENT_DATA_UPDATE, { base: this.base, accent: this.accent, override: this.override } );
  }

  _handleStart() {
    super._handleStart();

    if (this._initialStart) {
      this._initialStart = false;

      this._start();
    }
  }
}

customElements.define("rise-data-colors", RiseDataColors);
