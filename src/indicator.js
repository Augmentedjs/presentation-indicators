import { View } from "presentation-view";
import { Dom } from "presentation-dom";
import { INDICATOR_MODE_INDETERMINATE, INDICATOR_MODE_DETERMINATE, INDICATOR_MODE_DEFAULT } from "./modes.js";

const INPROGRESS_STYLE = "inprogress";

/**
 * Progress Indicator class<br/>
 * Renders a progress indicator<br/>
 * Supports a mode option of
 * <ul>
 * <li>INDICATOR_MODE_INDETERMINATE</li>
 * <li>INDICATOR_MODE_DETERMINATE</li>
 * </ul>
 * @params {Object} options Options to pass
 * @extends View
 */
class ProgressIndicator extends View {
  constructor(options) {
    if (!options) {
      options = {};
    }
    super(options);
    if (options.mode && options.mode === INDICATOR_MODE_INDETERMINATE) {
      this._mode = INDICATOR_MODE_INDETERMINATE;
    } else if (options.mode && options.mode === INDICATOR_MODE_DETERMINATE) {
      this._mode = INDICATOR_MODE_DETERMINATE;
    } else {
      this._mode = INDICATOR_MODE_DEFAULT;
    }
    this.template = /*html*/`<div class=""></div>`;
  };

  async render() {
    return await super.render();
  };

  async remove() {
    return await super.remove();
  };

  /**
   * Sets the state to in progress
   */
  setInProgress() {
    Dom.addClass(this.el, INPROGRESS_STYLE);
    const el = Dom.selector(this.el);
    if (el) {
      Dom.addClass(el.childNodes[0], this._mode);
    }
  };

  /**
   * @returns {boolean} true if in progress
   */
  isInprogress() {
    return Dom.containsClass(this.el, INPROGRESS_STYLE);
  };

  /**
   * @returns {boolean} true if complete
   */
  isComplete() {
    return !this.isInprogress();
  };

  /**
   * Sets the state to complete
   */
  setComplete() {
    Dom.removeClass(this.el, INPROGRESS_STYLE);
    const el = Dom.selector(this.el);
    if (el) {
      Dom.removeClass(el.childNodes[0], this._mode);
    }
  };

  /**
   * @property {string} mode The mode style of the Indicator
   */
  get mode() {
    return this._mode;
  };
};

export default ProgressIndicator;
