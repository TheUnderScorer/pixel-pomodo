import { css } from '@emotion/react';

export const nesCss = css`
  /*!***************************************************************************\\
    NES.css Framework
    Version: 2.3.0
  
  \\*****************************************************************************/
  /*!
   * Bootstrap Reboot v4.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2018 The Bootstrap Authors
   * Copyright 2011-2018 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
   */

  html {
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),
      auto;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  label {
    cursor: inherit;
  }

  a,
  button {
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .nes-balloon,
  .nes-balloon.is-dark,
  .nes-btn,
  .nes-container.is-rounded,
  .nes-container.is-rounded.is-dark,
  .nes-dialog.is-rounded,
  .nes-dialog.is-rounded.is-dark,
  .nes-progress,
  .nes-progress.is-rounded,
  .nes-table.is-bordered,
  .nes-table.is-dark.is-bordered,
  .nes-input,
  .nes-textarea,
  .nes-select select {
    border-style: solid;
    border-width: 4px;
  }

  /* https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939 */

  .nes-pointer {
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
  }

  .nes-avatar {
    width: 32px;
    height: 32px;
  }

  .nes-avatar.is-rounded {
    border-radius: 50px;
  }

  .nes-avatar.is-small {
    width: 16px;
    height: 16px;
  }

  .nes-avatar.is-small.is-rounded {
    border-radius: 50px;
  }

  .nes-avatar.is-medium {
    width: 48px;
    height: 48px;
  }

  .nes-avatar.is-medium.is-rounded {
    border-radius: 50px;
  }

  .nes-avatar.is-large {
    width: 64px;
    height: 64px;
  }

  .nes-avatar.is-large.is-rounded {
    border-radius: 50px;
  }

  .nes-badge {
    position: relative;
    display: inline-block;
    width: 10.5em;
    height: 1.875em;
    margin: 0.5em;
    font-size: 0.9em;
    white-space: nowrap;
    vertical-align: top;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .nes-badge.is-splited span.is-dark:first-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #212529;
    left: 0;
    box-shadow: 0 0.5em #212529, 0 -0.5em #212529, 0 0 #212529, -0.5em 0 #212529;
  }

  .nes-badge.is-splited span.is-dark:last-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #212529;
    right: 0;
    box-shadow: 0 0.5em #212529, 0 -0.5em #212529, 0.5em 0 #212529, 0 0 #212529;
  }

  .nes-badge.is-icon {
    width: 5.25em;
  }

  .nes-badge.is-icon span.is-dark:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.7em;
    font-size: 0.5em;
    color: #fff;
    text-align: center;
    background-color: #212529;
    position: absolute;
    top: -2.8em;
    left: -2.7em;
    height: 2.7em;
  }

  .nes-badge.is-icon span.is-dark:last-child {
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 6em;
    font-size: 0.88em;
    color: #fff;
    text-align: center;
    background-color: #212529;
    box-shadow: 0 0.5em #212529, 0 -0.5em #212529, 0.5em 0 #212529,
      -0.5em 0 #212529;
  }

  .nes-badge span.is-dark:first-child {
    position: absolute;
    top: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #212529;
    box-shadow: 0 0.5em #212529, 0 -0.5em #212529, 0.5em 0 #212529,
      -0.5em 0 #212529;
  }

  .nes-badge.is-splited span.is-primary:first-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #209cee;
    left: 0;
    box-shadow: 0 0.5em #209cee, 0 -0.5em #209cee, 0 0 #209cee, -0.5em 0 #209cee;
  }

  .nes-badge.is-splited span.is-primary:last-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #209cee;
    right: 0;
    box-shadow: 0 0.5em #209cee, 0 -0.5em #209cee, 0.5em 0 #209cee, 0 0 #209cee;
  }

  .nes-badge.is-icon {
    width: 5.25em;
  }

  .nes-badge.is-icon span.is-primary:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.7em;
    font-size: 0.5em;
    color: #fff;
    text-align: center;
    background-color: #209cee;
    position: absolute;
    top: -2.8em;
    left: -2.7em;
    height: 2.7em;
  }

  .nes-badge.is-icon span.is-primary:last-child {
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 6em;
    font-size: 0.88em;
    color: #fff;
    text-align: center;
    background-color: #209cee;
    box-shadow: 0 0.5em #209cee, 0 -0.5em #209cee, 0.5em 0 #209cee,
      -0.5em 0 #209cee;
  }

  .nes-badge span.is-primary:first-child {
    position: absolute;
    top: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #209cee;
    box-shadow: 0 0.5em #209cee, 0 -0.5em #209cee, 0.5em 0 #209cee,
      -0.5em 0 #209cee;
  }

  .nes-badge.is-splited span.is-success:first-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #92cc41;
    left: 0;
    box-shadow: 0 0.5em #92cc41, 0 -0.5em #92cc41, 0 0 #92cc41, -0.5em 0 #92cc41;
  }

  .nes-badge.is-splited span.is-success:last-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #92cc41;
    right: 0;
    box-shadow: 0 0.5em #92cc41, 0 -0.5em #92cc41, 0.5em 0 #92cc41, 0 0 #92cc41;
  }

  .nes-badge.is-icon {
    width: 5.25em;
  }

  .nes-badge.is-icon span.is-success:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.7em;
    font-size: 0.5em;
    color: #fff;
    text-align: center;
    background-color: #92cc41;
    position: absolute;
    top: -2.8em;
    left: -2.7em;
    height: 2.7em;
  }

  .nes-badge.is-icon span.is-success:last-child {
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 6em;
    font-size: 0.88em;
    color: #fff;
    text-align: center;
    background-color: #92cc41;
    box-shadow: 0 0.5em #92cc41, 0 -0.5em #92cc41, 0.5em 0 #92cc41,
      -0.5em 0 #92cc41;
  }

  .nes-badge span.is-success:first-child {
    position: absolute;
    top: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #92cc41;
    box-shadow: 0 0.5em #92cc41, 0 -0.5em #92cc41, 0.5em 0 #92cc41,
      -0.5em 0 #92cc41;
  }

  .nes-badge.is-splited span.is-warning:first-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #212529;
    text-align: center;
    background-color: #f7d51d;
    left: 0;
    box-shadow: 0 0.5em #f7d51d, 0 -0.5em #f7d51d, 0 0 #f7d51d, -0.5em 0 #f7d51d;
  }

  .nes-badge.is-splited span.is-warning:last-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #212529;
    text-align: center;
    background-color: #f7d51d;
    right: 0;
    box-shadow: 0 0.5em #f7d51d, 0 -0.5em #f7d51d, 0.5em 0 #f7d51d, 0 0 #f7d51d;
  }

  .nes-badge.is-icon {
    width: 5.25em;
  }

  .nes-badge.is-icon span.is-warning:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.7em;
    font-size: 0.5em;
    color: #212529;
    text-align: center;
    background-color: #f7d51d;
    position: absolute;
    top: -2.8em;
    left: -2.7em;
    height: 2.7em;
  }

  .nes-badge.is-icon span.is-warning:last-child {
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 6em;
    font-size: 0.88em;
    color: #212529;
    text-align: center;
    background-color: #f7d51d;
    box-shadow: 0 0.5em #f7d51d, 0 -0.5em #f7d51d, 0.5em 0 #f7d51d,
      -0.5em 0 #f7d51d;
  }

  .nes-badge span.is-warning:first-child {
    position: absolute;
    top: 0;
    width: 100%;
    color: #212529;
    text-align: center;
    background-color: #f7d51d;
    box-shadow: 0 0.5em #f7d51d, 0 -0.5em #f7d51d, 0.5em 0 #f7d51d,
      -0.5em 0 #f7d51d;
  }

  .nes-badge.is-splited span.is-error:first-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #e76e55;
    left: 0;
    box-shadow: 0 0.5em #e76e55, 0 -0.5em #e76e55, 0 0 #e76e55, -0.5em 0 #e76e55;
  }

  .nes-badge.is-splited span.is-error:last-child {
    position: absolute;
    top: 0;
    width: 50%;
    color: #fff;
    text-align: center;
    background-color: #e76e55;
    right: 0;
    box-shadow: 0 0.5em #e76e55, 0 -0.5em #e76e55, 0.5em 0 #e76e55, 0 0 #e76e55;
  }

  .nes-badge.is-icon {
    width: 5.25em;
  }

  .nes-badge.is-icon span.is-error:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.7em;
    font-size: 0.5em;
    color: #fff;
    text-align: center;
    background-color: #e76e55;
    position: absolute;
    top: -2.8em;
    left: -2.7em;
    height: 2.7em;
  }

  .nes-badge.is-icon span.is-error:last-child {
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 6em;
    font-size: 0.88em;
    color: #fff;
    text-align: center;
    background-color: #e76e55;
    box-shadow: 0 0.5em #e76e55, 0 -0.5em #e76e55, 0.5em 0 #e76e55,
      -0.5em 0 #e76e55;
  }

  .nes-badge span.is-error:first-child {
    position: absolute;
    top: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #e76e55;
    box-shadow: 0 0.5em #e76e55, 0 -0.5em #e76e55, 0.5em 0 #e76e55,
      -0.5em 0 #e76e55;
  }

  .nes-balloon {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
    position: relative;
    display: inline-block;
    padding: 1rem 1.5rem;
    margin: 8px;
    margin-bottom: 30px;
    background-color: #fff;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-balloon {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-balloon {
      border-image-repeat: stretch;
    }
  }

  .nes-balloon > :last-child {
    margin-bottom: 0;
  }

  .nes-balloon::before,
  .nes-balloon::after {
    position: absolute;
    content: '';
  }

  .nes-balloon.is-dark {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
    border-image-outset: 0;
    color: #fff;
    background: #212529;
    border-image-outset: 2;
    box-shadow: 0 0 0 8px #212529;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-balloon.is-dark {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-balloon.is-dark {
      border-image-repeat: stretch;
    }
  }

  .nes-balloon.is-dark.from-left::before,
  .nes-balloon.is-dark.from-right::before {
    background-color: #212529;
    border-color: #fff;
  }

  .nes-balloon.is-dark.from-left::after,
  .nes-balloon.is-dark.from-right::after {
    color: #fff;
    background-color: #212529;
  }

  .nes-balloon.is-dark.from-left::before {
    box-shadow: -5px 10px 0 6px #212529;
  }

  .nes-balloon.is-dark.from-left::after {
    box-shadow: -4px 0, 4px 0, -4px 4px #212529, 0 4px, -8px 4px, -4px 8px,
      -8px 8px;
  }

  .nes-balloon.is-dark.from-right::before {
    box-shadow: 5px 10px 0 6px #212529;
  }

  .nes-balloon.is-dark.from-right::after {
    box-shadow: -4px 0, 4px 0, 4px 4px #212529, 0 4px, 8px 4px, 4px 8px, 8px 8px;
  }

  .nes-balloon.from-left::before,
  .nes-balloon.from-left::after {
    left: 2rem;
  }

  .nes-balloon.from-left::before {
    bottom: -14px;
    width: 26px;
    height: 10px;
    background-color: #fff;
    border-right: 4px solid #212529;
    border-left: 4px solid #212529;
  }

  .nes-balloon.from-left::after {
    bottom: -18px;
    width: 18px;
    height: 4px;
    margin-right: 8px;
    color: #212529;
    background-color: #fff;
    box-shadow: -4px 0, 4px 0, -4px 4px #fff, 0 4px, -8px 4px, -4px 8px,
      -8px 8px;
  }

  .nes-balloon.from-right::before,
  .nes-balloon.from-right::after {
    right: 2rem;
  }

  .nes-balloon.from-right::before {
    bottom: -14px;
    width: 26px;
    height: 10px;
    background-color: #fff;
    border-right: 4px solid #212529;
    border-left: 4px solid #212529;
  }

  .nes-balloon.from-right::after {
    bottom: -18px;
    width: 18px;
    height: 4px;
    margin-left: 8px;
    background-color: #fff;
    box-shadow: -4px 0, 4px 0, 4px 4px #fff, 0 4px, 8px 4px, 4px 8px, 8px 8px;
  }

  .nes-btn {
    border-image-slice: 2;
    border-image-width: 2;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
    position: relative;
    display: inline-block;
    padding: 6px 8px;
    margin: 4px;
    text-align: center;
    vertical-align: middle;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #212529;
    background-color: #fff;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-btn {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-btn {
      border-image-repeat: stretch;
    }
  }

  .nes-btn::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #adafbc;
  }

  .nes-btn:hover {
    color: #212529;
    text-decoration: none;
    background-color: #e7e7e7;
  }

  .nes-btn:hover::after {
    box-shadow: inset -6px -6px #adafbc;
  }

  .nes-btn:focus {
    box-shadow: 0 0 0 6px rgba(173, 175, 188, 0.3);
  }

  .nes-btn:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #adafbc;
  }

  .nes-btn:focus {
    outline: 0;
  }

  .nes-btn.is-disabled,
  .nes-btn.is-disabled:hover,
  .nes-btn.is-disabled:focus {
    color: #212529;
    cursor: not-allowed;
    background-color: #d3d3d3;
    box-shadow: inset -4px -4px #adafbc;
    opacity: 0.6;
  }

  .nes-btn.is-primary {
    color: #fff;
    background-color: #209cee;
  }

  .nes-btn.is-primary::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #006bb3;
  }

  .nes-btn.is-primary:hover {
    color: #fff;
    text-decoration: none;
    background-color: #108de0;
  }

  .nes-btn.is-primary:hover::after {
    box-shadow: inset -6px -6px #006bb3;
  }

  .nes-btn.is-primary:focus {
    box-shadow: 0 0 0 6px rgba(0, 107, 179, 0.3);
  }

  .nes-btn.is-primary:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #006bb3;
  }

  .nes-btn.is-success {
    color: #fff;
    background-color: #92cc41;
  }

  .nes-btn.is-success::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #4aa52e;
  }

  .nes-btn.is-success:hover {
    color: #fff;
    text-decoration: none;
    background-color: #76c442;
  }

  .nes-btn.is-success:hover::after {
    box-shadow: inset -6px -6px #4aa52e;
  }

  .nes-btn.is-success:focus {
    box-shadow: 0 0 0 6px rgba(74, 165, 46, 0.3);
  }

  .nes-btn.is-success:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #4aa52e;
  }

  .nes-btn.is-warning {
    color: #212529;
    background-color: #f7d51d;
  }

  .nes-btn.is-warning::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #e59400;
  }

  .nes-btn.is-warning:hover {
    color: #212529;
    text-decoration: none;
    background-color: #f2c409;
  }

  .nes-btn.is-warning:hover::after {
    box-shadow: inset -6px -6px #e59400;
  }

  .nes-btn.is-warning:focus {
    box-shadow: 0 0 0 6px rgba(229, 148, 0, 0.3);
  }

  .nes-btn.is-warning:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #e59400;
  }

  .nes-btn.is-error {
    color: #fff;
    background-color: #e76e55;
  }

  .nes-btn.is-error::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #8c2022;
  }

  .nes-btn.is-error:hover {
    color: #fff;
    text-decoration: none;
    background-color: #ce372b;
  }

  .nes-btn.is-error:hover::after {
    box-shadow: inset -6px -6px #8c2022;
  }

  .nes-btn.is-error:focus {
    box-shadow: 0 0 0 6px rgba(140, 32, 34, 0.3);
  }

  .nes-btn.is-error:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #8c2022;
  }

  .nes-btn input[type='file'] {
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }

  .nes-container {
    position: relative;
    padding: 1.5rem 2rem;
    border-color: black;
    border-style: solid;
    border-width: 4px;
  }

  .nes-container > :last-child {
    margin-bottom: 0;
  }

  .nes-container.is-centered {
    text-align: center;
  }

  .nes-container.is-right {
    text-align: right;
  }

  .nes-container.with-title > .title {
    display: table;
    padding: 0 0.5rem;
    margin: -1.8rem 0 1rem;
    font-size: 1rem;
    background-color: #fff;
  }

  .nes-container.with-title.is-centered > .title {
    margin: -2rem auto 1rem;
  }

  .nes-container.with-title.is-right > .title {
    margin: -2rem 0 1rem auto;
  }

  .nes-container.is-dark {
    position: relative;
    margin: 4px;
    color: #fff;
    background-color: #212529;
    border-color: white;
  }

  .nes-container.is-dark::after {
    position: absolute;
    top: -7.2px;
    right: -7.2px;
    bottom: -7.2px;
    left: -7.2px;
    z-index: -1;
    content: '';
    background-color: #212529;
  }

  .nes-container.is-dark.with-title > .title {
    color: #fff;
    background-color: #212529;
  }

  .nes-container.is-rounded {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
    padding: 1rem 1.5rem;
    margin: 4px;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-container.is-rounded {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-container.is-rounded {
      border-image-repeat: stretch;
    }
  }

  .nes-container.is-rounded.with-title > .title {
    margin-top: -1.5rem;
  }

  .nes-container.is-rounded.with-title.is-centered > .title {
    margin: -1.5rem auto 1rem;
  }

  .nes-container.is-rounded.with-title.is-right > .title {
    margin: -1.5rem 0 1rem auto;
  }

  .nes-container.is-rounded.is-dark {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
    border-image-outset: 0;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-container.is-rounded.is-dark {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-container.is-rounded.is-dark {
      border-image-repeat: stretch;
    }
  }

  .nes-container.is-rounded.is-dark::after {
    content: none;
  }

  .nes-container.is-rounded.is-dark.with-title > .title {
    margin-top: -1.3rem;
  }

  .nes-container.is-rounded.is-dark.with-title.is-centered > .title {
    margin: -1.3rem auto 1rem;
  }

  .nes-container.is-rounded.is-dark.with-title.is-right > .title {
    margin: -1.3rem 0 1rem auto;
  }

  .nes-dialog {
    padding: 1.5rem 2rem;
    border-width: 4px;
  }

  .nes-dialog > .backdrop,
  .nes-dialog::-webkit-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nes-dialog > .backdrop,
  .nes-dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nes-dialog > :last-child {
    margin-bottom: 0;
  }

  .nes-dialog.is-rounded {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-dialog.is-rounded {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-dialog.is-rounded {
      border-image-repeat: stretch;
    }
  }

  .nes-dialog.is-rounded.is-dark {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
    border-image-outset: 0;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-dialog.is-rounded.is-dark {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-dialog.is-rounded.is-dark {
      border-image-repeat: stretch;
    }
  }

  .nes-dialog.is-dark {
    color: #fff;
    background-color: #212529;
    border-color: #fff;
  }

  .nes-dialog.is-dark:not(.is-rounded)::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
    z-index: -1;
    content: '';
    border: 4px solid #212529;
  }

  .nes-list {
    list-style-type: none;
  }

  .nes-list li {
    position: relative;
  }

  .nes-list.is-disc li::before {
    position: absolute;
    top: calc(50% - 8px);
    left: -22px;
    content: '';
    width: 2px;
    height: 2px;
    color: #212529;
    box-shadow: 8px 2px, 10px 2px, 6px 4px, 8px 4px, 10px 4px, 12px 4px, 4px 6px,
      6px 6px, 8px 6px, 10px 6px, 12px 6px, 14px 6px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 14px 8px, 6px 10px, 8px 10px, 10px 10px, 12px 10px,
      8px 12px, 10px 12px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-list.is-disc li::before {
      box-shadow: 8px 2px 0 0.02em, 10px 2px 0 0.02em, 6px 4px 0 0.02em,
        8px 4px 0 0.02em, 10px 4px 0 0.02em, 12px 4px 0 0.02em, 4px 6px 0 0.02em,
        6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em, 12px 6px 0 0.02em,
        14px 6px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 14px 8px 0 0.02em,
        6px 10px 0 0.02em, 8px 10px 0 0.02em, 10px 10px 0 0.02em,
        12px 10px 0 0.02em, 8px 12px 0 0.02em, 10px 12px 0 0.02em;
    }
  }

  .nes-list.is-circle li::before {
    position: absolute;
    top: calc(50% - 8px);
    left: -22px;
    content: '';
    width: 2px;
    height: 2px;
    color: #212529;
    box-shadow: 8px 2px, 10px 2px, 6px 4px, 8px 4px, 10px 4px, 12px 4px, 4px 6px,
      6px 6px, 12px 6px, 14px 6px, 4px 8px, 6px 8px, 12px 8px, 14px 8px,
      6px 10px, 8px 10px, 10px 10px, 12px 10px, 8px 12px, 10px 12px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-list.is-circle li::before {
      box-shadow: 8px 2px 0 0.02em, 10px 2px 0 0.02em, 6px 4px 0 0.02em,
        8px 4px 0 0.02em, 10px 4px 0 0.02em, 12px 4px 0 0.02em, 4px 6px 0 0.02em,
        6px 6px 0 0.02em, 12px 6px 0 0.02em, 14px 6px 0 0.02em, 4px 8px 0 0.02em,
        6px 8px 0 0.02em, 12px 8px 0 0.02em, 14px 8px 0 0.02em,
        6px 10px 0 0.02em, 8px 10px 0 0.02em, 10px 10px 0 0.02em,
        12px 10px 0 0.02em, 8px 12px 0 0.02em, 10px 12px 0 0.02em;
    }
  }

  .nes-progress {
    border-image-slice: 2;
    border-image-width: 2;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
    width: 100%;
    height: 48px;
    margin: 4px;
    color: #212529;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-progress {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-progress {
      border-image-repeat: stretch;
    }
  }

  .nes-progress::-webkit-progress-bar {
    background-color: #fff;
  }

  .nes-progress::-webkit-progress-value {
    background-color: #212529;
  }

  .nes-progress::-moz-progress-bar {
    background-color: #212529;
  }

  .nes-progress::-ms-fill {
    background-color: #212529;
    border: none;
  }

  .nes-progress.is-rounded {
    border-image-slice: 3;
    border-image-width: 3;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-progress.is-rounded {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-progress.is-rounded {
      border-image-repeat: stretch;
    }
  }

  .nes-progress.is-primary::-webkit-progress-bar {
    background-color: #fff;
  }

  .nes-progress.is-primary::-webkit-progress-value {
    background-color: #209cee;
  }

  .nes-progress.is-primary::-moz-progress-bar {
    background-color: #209cee;
  }

  .nes-progress.is-primary::-ms-fill {
    background-color: #209cee;
    border: none;
  }

  .nes-progress.is-success::-webkit-progress-bar {
    background-color: #fff;
  }

  .nes-progress.is-success::-webkit-progress-value {
    background-color: #92cc41;
  }

  .nes-progress.is-success::-moz-progress-bar {
    background-color: #92cc41;
  }

  .nes-progress.is-success::-ms-fill {
    background-color: #92cc41;
    border: none;
  }

  .nes-progress.is-warning::-webkit-progress-bar {
    background-color: #fff;
  }

  .nes-progress.is-warning::-webkit-progress-value {
    background-color: #f7d51d;
  }

  .nes-progress.is-warning::-moz-progress-bar {
    background-color: #f7d51d;
  }

  .nes-progress.is-warning::-ms-fill {
    background-color: #f7d51d;
    border: none;
  }

  .nes-progress.is-error::-webkit-progress-bar {
    background-color: #fff;
  }

  .nes-progress.is-error::-webkit-progress-value {
    background-color: #e76e55;
  }

  .nes-progress.is-error::-moz-progress-bar {
    background-color: #e76e55;
  }

  .nes-progress.is-error::-ms-fill {
    background-color: #e76e55;
    border: none;
  }

  .nes-progress.is-pattern::-webkit-progress-value {
    background-color: #212529;
    background-image: linear-gradient(
        45deg,
        #fff 25%,
        transparent 25%,
        transparent 75%,
        #fff 75%,
        #fff
      ),
      linear-gradient(
        45deg,
        #fff 25%,
        transparent 25%,
        transparent 75%,
        #fff 75%,
        #fff
      );
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
  }

  .nes-progress.is-pattern::-moz-progress-bar {
    background-color: #212529;
    background-image: -moz-linear-gradient(
        45deg,
        #fff 25%,
        transparent 25%,
        transparent 75%,
        #fff 75%,
        #fff
      ),
      -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff
            75%, #fff);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
  }

  .nes-progress.is-pattern::-ms-fill {
    background-color: #212529;
    background-image: linear-gradient(
        45deg,
        #fff 25%,
        transparent 25%,
        transparent 75%,
        #fff 75%,
        #fff
      ),
      linear-gradient(
        45deg,
        #fff 25%,
        transparent 25%,
        transparent 75%,
        #fff 75%,
        #fff
      );
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
    border: none;
  }

  .nes-table-responsive {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .nes-table {
    table-layout: fixed;
    background-color: #fff;
    /***************************************************************************  \\
      This eliminates the gap between the last row in a table and the border, as
      well as hiding the derelict pixels in the bottom right and bottom left of
      the last row of a table
    \\  ***************************************************************************/
  }

  .nes-table tr {
    margin-left: -0.25em;
  }

  .nes-table th,
  .nes-table td {
    position: relative;
    padding: 0.5rem;
    word-wrap: break-word;
    border-color: #212529;
    border-style: solid;
    border-width: 0 0.25em 0.25em 0;
  }

  .nes-table th:last-child,
  .nes-table td:last-child {
    border-right-width: 0;
  }

  .nes-table th::after,
  .nes-table th::before,
  .nes-table td::after,
  .nes-table td::before {
    position: absolute;
    display: block;
    width: 0.25em;
    height: 0.25em;
    content: '';
    background-color: #212529;
  }

  .nes-table th::after,
  .nes-table td::after {
    bottom: -0.25em;
    left: -0.25em;
  }

  .nes-table th::before,
  .nes-table td::before {
    top: -0.25em;
    right: -0.25em;
  }

  .nes-table th:last-child::before,
  .nes-table td:last-child::before {
    top: initial;
    bottom: -0.25em;
  }

  .nes-table.is-centered th {
    text-align: center;
  }

  .nes-table.is-bordered {
    margin: 4px;
    border-spacing: 0;
    border-collapse: separate;
    border-image-slice: 2;
    border-image-width: 2;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-table.is-bordered {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-table.is-bordered {
      border-image-repeat: stretch;
    }
  }

  .nes-table.is-dark {
    color: #fff;
    background-color: #212529;
  }

  .nes-table.is-dark::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }

  .nes-table.is-dark.is-bordered {
    border-image-slice: 2;
    border-image-width: 2;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
    border-image-outset: 0;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-table.is-dark.is-bordered {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-table.is-dark.is-bordered {
      border-image-repeat: stretch;
    }
  }

  .nes-table.is-dark th,
  .nes-table.is-dark td {
    border-color: #fff;
  }

  .nes-table.is-dark th::after,
  .nes-table.is-dark th::before,
  .nes-table.is-dark td::after,
  .nes-table.is-dark td::before {
    display: none;
  }

  .nes-table tbody tr:last-child th,
  .nes-table tbody tr:last-child td,
  .nes-table thead:last-child tr:last-child th,
  .nes-table thead:last-child tr:last-child td {
    border-bottom-width: 0;
  }

  .nes-table tbody tr:last-child th:first-child::after,
  .nes-table tbody tr:last-child th:last-child::before,
  .nes-table tbody tr:last-child td:first-child::after,
  .nes-table tbody tr:last-child td:last-child::before,
  .nes-table thead:last-child tr:last-child th:first-child::after,
  .nes-table thead:last-child tr:last-child th:last-child::before,
  .nes-table thead:last-child tr:last-child td:first-child::after,
  .nes-table thead:last-child tr:last-child td:last-child::before {
    display: none;
  }

  .nes-text.is-primary {
    color: #209cee;
  }

  .nes-text.is-success {
    color: #92cc41;
  }

  .nes-text.is-warning {
    color: #f7d51d;
  }

  .nes-text.is-error {
    color: #e76e55;
  }

  .nes-text.is-disabled {
    color: #d3d3d3;
  }

  .nes-input,
  .nes-textarea {
    border-image-slice: 2 !important;
    border-image-width: 2 !important;
    border-image-repeat: stretch !important;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>') !important;
    border-image-outset: 2 !important;
    background-clip: padding-box;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-input,
    .nes-textarea {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-input,
    .nes-textarea {
      border-image-repeat: stretch;
    }
  }

  .nes-input.is-dark,
  .nes-textarea.is-dark {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>') !important;
  }

  .nes-input.is-success,
  .nes-textarea.is-success {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(146,204,65)" /></svg>');
    outline-color: #76c442;
  }

  .nes-input.is-warning,
  .nes-textarea.is-warning {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(247,213,29)" /></svg>');
    outline-color: #f2c409;
  }

  .nes-input.is-error,
  .nes-textarea.is-error {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(231,110,85)" /></svg>');
    outline-color: #ce372b;
  }

  .nes-field > label {
    display: block;
  }

  .nes-field .nes-input,
  .nes-field .nes-textarea {
    display: block;
  }

  .nes-field.is-inline {
    display: flex;
    align-items: center;
  }

  .nes-field.is-inline > label {
    flex-basis: 0;
    flex-grow: 1;
    margin: 0;
    margin-right: 1.5rem;
    text-align: right;
  }

  .nes-field.is-inline .nes-input,
  .nes-field.is-inline .nes-textarea {
    flex-basis: 0;
    flex-grow: 5;
  }

  @media screen and (max-width: 768px) {
    .nes-field.is-inline {
      display: block;
    }

    .nes-field.is-inline > label {
      margin-bottom: 0.5rem;
      text-align: left;
    }

    .nes-field.is-inline .nes-input {
      max-width: 100%;
    }
  }

  .nes-radio {
    margin-right: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
  }

  .nes-radio + span {
    position: relative;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
  }

  .nes-radio:checked + span::before {
    position: absolute;
    top: -2px;
    left: -20px;
    content: '';
    width: 2px;
    height: 2px;
    color: #212529;
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-radio:checked + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
        4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em, 2px 6px 0 0.02em,
        4px 6px 0 0.02em, 6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em,
        2px 8px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
        4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
        10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
        6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
        4px 14px 0 0.02em;
    }
  }

  .nes-radio:checked:hover + span::before,
  .nes-radio:checked:focus + span::before {
    animation: blink 1s infinite steps(1);
  }

  .nes-radio:checked:focus + span::before {
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-radio:checked:focus + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
        4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em, 2px 6px 0 0.02em,
        4px 6px 0 0.02em, 6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em,
        2px 8px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
        4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
        10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
        6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
        4px 14px 0 0.02em;
    }
  }

  .nes-radio.is-dark + span {
    color: #fff;
  }

  .nes-radio.is-dark + span::before {
    /* stylelint-disable-line no-descending-specificity */
    color: #fff;
  }

  .nes-radio.is-dark:checked + span::before {
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
    color: #fff;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-radio.is-dark:checked + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
        4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em, 2px 6px 0 0.02em,
        4px 6px 0 0.02em, 6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em,
        2px 8px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
        4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
        10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
        6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
        4px 14px 0 0.02em;
    }
  }

  .nes-radio.is-dark:checked:focus + span::before {
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
    color: #fff;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-radio.is-dark:checked:focus + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 2px 4px 0 0.02em,
        4px 4px 0 0.02em, 6px 4px 0 0.02em, 8px 4px 0 0.02em, 2px 6px 0 0.02em,
        4px 6px 0 0.02em, 6px 6px 0 0.02em, 8px 6px 0 0.02em, 10px 6px 0 0.02em,
        2px 8px 0 0.02em, 4px 8px 0 0.02em, 6px 8px 0 0.02em, 8px 8px 0 0.02em,
        10px 8px 0 0.02em, 12px 8px 0 0.02em, 2px 10px 0 0.02em,
        4px 10px 0 0.02em, 6px 10px 0 0.02em, 8px 10px 0 0.02em,
        10px 10px 0 0.02em, 2px 12px 0 0.02em, 4px 12px 0 0.02em,
        6px 12px 0 0.02em, 8px 12px 0 0.02em, 2px 14px 0 0.02em,
        4px 14px 0 0.02em;
    }
  }

  .nes-checkbox {
    margin-left: 28px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
  }

  .nes-checkbox + span {
    position: relative;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
  }

  .nes-checkbox + span::before,
  .nes-checkbox:checked + span::before {
    position: absolute;
    top: -3px;
    left: -28px;
    content: '';
  }

  .nes-checkbox + span::before {
    /* stylelint-disable-line no-descending-specificity */
    width: 2px;
    height: 2px;
    color: #212529;
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      16px 2px, 2px 4px, 16px 4px, 2px 6px, 16px 6px, 2px 8px, 16px 8px,
      2px 10px, 16px 10px, 2px 12px, 16px 12px, 2px 14px, 16px 14px, 2px 16px,
      4px 16px, 6px 16px, 8px 16px, 10px 16px, 12px 16px, 14px 16px, 16px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-checkbox + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 6px 2px 0 0.02em,
        8px 2px 0 0.02em, 10px 2px 0 0.02em, 12px 2px 0 0.02em,
        14px 2px 0 0.02em, 16px 2px 0 0.02em, 2px 4px 0 0.02em,
        16px 4px 0 0.02em, 2px 6px 0 0.02em, 16px 6px 0 0.02em, 2px 8px 0 0.02em,
        16px 8px 0 0.02em, 2px 10px 0 0.02em, 16px 10px 0 0.02em,
        2px 12px 0 0.02em, 16px 12px 0 0.02em, 2px 14px 0 0.02em,
        16px 14px 0 0.02em, 2px 16px 0 0.02em, 4px 16px 0 0.02em,
        6px 16px 0 0.02em, 8px 16px 0 0.02em, 10px 16px 0 0.02em,
        12px 16px 0 0.02em, 14px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-checkbox:focus + span::before {
    /* stylelint-disable-line no-descending-specificity */
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      16px 2px, 2px 4px, 16px 4px, 2px 6px, 16px 6px, 2px 8px, 16px 8px,
      2px 10px, 16px 10px, 2px 12px, 16px 12px, 2px 14px, 16px 14px, 2px 16px,
      4px 16px, 6px 16px, 8px 16px, 10px 16px, 12px 16px, 14px 16px, 16px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-checkbox:focus + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 6px 2px 0 0.02em,
        8px 2px 0 0.02em, 10px 2px 0 0.02em, 12px 2px 0 0.02em,
        14px 2px 0 0.02em, 16px 2px 0 0.02em, 2px 4px 0 0.02em,
        16px 4px 0 0.02em, 2px 6px 0 0.02em, 16px 6px 0 0.02em, 2px 8px 0 0.02em,
        16px 8px 0 0.02em, 2px 10px 0 0.02em, 16px 10px 0 0.02em,
        2px 12px 0 0.02em, 16px 12px 0 0.02em, 2px 14px 0 0.02em,
        16px 14px 0 0.02em, 2px 16px 0 0.02em, 4px 16px 0 0.02em,
        6px 16px 0 0.02em, 8px 16px 0 0.02em, 10px 16px 0 0.02em,
        12px 16px 0 0.02em, 14px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-checkbox:checked + span::before {
    width: 2px;
    height: 2px;
    color: #212529;
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      18px 2px, 20px 2px, 2px 4px, 16px 4px, 18px 4px, 20px 4px, 2px 6px,
      14px 6px, 16px 6px, 2px 8px, 4px 8px, 12px 8px, 14px 8px, 2px 10px,
      4px 10px, 6px 10px, 10px 10px, 12px 10px, 16px 10px, 2px 12px, 6px 12px,
      8px 12px, 10px 12px, 16px 12px, 2px 14px, 8px 14px, 16px 14px, 2px 16px,
      4px 16px, 6px 16px, 8px 16px, 10px 16px, 12px 16px, 14px 16px, 16px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-checkbox:checked + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 6px 2px 0 0.02em,
        8px 2px 0 0.02em, 10px 2px 0 0.02em, 12px 2px 0 0.02em,
        14px 2px 0 0.02em, 18px 2px 0 0.02em, 20px 2px 0 0.02em,
        2px 4px 0 0.02em, 16px 4px 0 0.02em, 18px 4px 0 0.02em,
        20px 4px 0 0.02em, 2px 6px 0 0.02em, 14px 6px 0 0.02em,
        16px 6px 0 0.02em, 2px 8px 0 0.02em, 4px 8px 0 0.02em, 12px 8px 0 0.02em,
        14px 8px 0 0.02em, 2px 10px 0 0.02em, 4px 10px 0 0.02em,
        6px 10px 0 0.02em, 10px 10px 0 0.02em, 12px 10px 0 0.02em,
        16px 10px 0 0.02em, 2px 12px 0 0.02em, 6px 12px 0 0.02em,
        8px 12px 0 0.02em, 10px 12px 0 0.02em, 16px 12px 0 0.02em,
        2px 14px 0 0.02em, 8px 14px 0 0.02em, 16px 14px 0 0.02em,
        2px 16px 0 0.02em, 4px 16px 0 0.02em, 6px 16px 0 0.02em,
        8px 16px 0 0.02em, 10px 16px 0 0.02em, 12px 16px 0 0.02em,
        14px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-checkbox:checked:focus + span::before {
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      18px 2px #212529, 20px 2px #212529, 2px 4px, 16px 4px #212529,
      18px 4px #212529, 20px 4px #212529, 2px 6px #212529, 14px 6px #212529,
      16px 6px #212529, 2px 8px #212529, 4px 8px #212529, 12px 8px #212529,
      14px 8px #212529, 2px 10px, 4px 10px #212529, 6px 10px #212529,
      10px 10px #212529, 12px 10px #212529, 16px 10px, 2px 12px,
      6px 12px #212529, 8px 12px #212529, 10px 12px #212529, 16px 12px, 2px 14px,
      8px 14px #212529, 16px 14px, 2px 16px, 4px 16px, 6px 16px, 8px 16px,
      10px 16px, 12px 16px, 14px 16px, 16px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-checkbox:checked:focus + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 6px 2px 0 0.02em,
        8px 2px 0 0.02em, 10px 2px 0 0.02em, 12px 2px 0 0.02em,
        14px 2px 0 0.02em, 18px 2px 0 0.02em #212529, 20px 2px 0 0.02em #212529,
        2px 4px 0 0.02em, 16px 4px 0 0.02em #212529, 18px 4px 0 0.02em #212529,
        20px 4px 0 0.02em #212529, 2px 6px 0 0.02em #212529,
        14px 6px 0 0.02em #212529, 16px 6px 0 0.02em #212529,
        2px 8px 0 0.02em #212529, 4px 8px 0 0.02em #212529,
        12px 8px 0 0.02em #212529, 14px 8px 0 0.02em #212529, 2px 10px 0 0.02em,
        4px 10px 0 0.02em #212529, 6px 10px 0 0.02em #212529,
        10px 10px 0 0.02em #212529, 12px 10px 0 0.02em #212529,
        16px 10px 0 0.02em, 2px 12px 0 0.02em, 6px 12px 0 0.02em #212529,
        8px 12px 0 0.02em #212529, 10px 12px 0 0.02em #212529,
        16px 12px 0 0.02em, 2px 14px 0 0.02em, 8px 14px 0 0.02em #212529,
        16px 14px 0 0.02em, 2px 16px 0 0.02em, 4px 16px 0 0.02em,
        6px 16px 0 0.02em, 8px 16px 0 0.02em, 10px 16px 0 0.02em,
        12px 16px 0 0.02em, 14px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-checkbox.is-dark + span {
    color: #fff;
  }

  .nes-checkbox.is-dark + span::before {
    /* stylelint-disable-line no-descending-specificity */
    color: #fff;
  }

  .nes-checkbox.is-dark:checked + span::before {
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      18px 2px #fff, 20px 2px #fff, 2px 4px, 16px 4px #fff, 18px 4px #fff,
      20px 4px #fff, 2px 6px #fff, 14px 6px #fff, 16px 6px #fff, 2px 8px #fff,
      4px 8px #fff, 12px 8px #fff, 14px 8px #fff, 2px 10px, 4px 10px #fff,
      6px 10px #fff, 10px 10px #fff, 12px 10px #fff, 16px 10px, 2px 12px,
      6px 12px #fff, 8px 12px #fff, 10px 12px #fff, 16px 12px, 2px 14px,
      8px 14px #fff, 16px 14px, 2px 16px, 4px 16px, 6px 16px, 8px 16px,
      10px 16px, 12px 16px, 14px 16px, 16px 16px;
    color: #fff;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-checkbox.is-dark:checked + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 6px 2px 0 0.02em,
        8px 2px 0 0.02em, 10px 2px 0 0.02em, 12px 2px 0 0.02em,
        14px 2px 0 0.02em, 18px 2px 0 0.02em #fff, 20px 2px 0 0.02em #fff,
        2px 4px 0 0.02em, 16px 4px 0 0.02em #fff, 18px 4px 0 0.02em #fff,
        20px 4px 0 0.02em #fff, 2px 6px 0 0.02em #fff, 14px 6px 0 0.02em #fff,
        16px 6px 0 0.02em #fff, 2px 8px 0 0.02em #fff, 4px 8px 0 0.02em #fff,
        12px 8px 0 0.02em #fff, 14px 8px 0 0.02em #fff, 2px 10px 0 0.02em,
        4px 10px 0 0.02em #fff, 6px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff,
        12px 10px 0 0.02em #fff, 16px 10px 0 0.02em, 2px 12px 0 0.02em,
        6px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff, 10px 12px 0 0.02em #fff,
        16px 12px 0 0.02em, 2px 14px 0 0.02em, 8px 14px 0 0.02em #fff,
        16px 14px 0 0.02em, 2px 16px 0 0.02em, 4px 16px 0 0.02em,
        6px 16px 0 0.02em, 8px 16px 0 0.02em, 10px 16px 0 0.02em,
        12px 16px 0 0.02em, 14px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-checkbox.is-dark:checked:focus + span::before {
    width: 2px;
    height: 2px;
    color: #adafbc;
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      18px 2px #fff, 20px 2px #fff, 2px 4px, 16px 4px #fff, 18px 4px #fff,
      20px 4px #fff, 2px 6px #fff, 14px 6px #fff, 16px 6px #fff, 2px 8px #fff,
      4px 8px #fff, 12px 8px #fff, 14px 8px #fff, 2px 10px, 4px 10px #fff,
      6px 10px #fff, 10px 10px #fff, 12px 10px #fff, 16px 10px, 2px 12px,
      6px 12px #fff, 8px 12px #fff, 10px 12px #fff, 16px 12px, 2px 14px,
      8px 14px #fff, 16px 14px, 2px 16px, 4px 16px, 6px 16px, 8px 16px,
      10px 16px, 12px 16px, 14px 16px, 16px 16px;
    color: #fff;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-checkbox.is-dark:checked:focus + span::before {
      box-shadow: 2px 2px 0 0.02em, 4px 2px 0 0.02em, 6px 2px 0 0.02em,
        8px 2px 0 0.02em, 10px 2px 0 0.02em, 12px 2px 0 0.02em,
        14px 2px 0 0.02em, 18px 2px 0 0.02em #fff, 20px 2px 0 0.02em #fff,
        2px 4px 0 0.02em, 16px 4px 0 0.02em #fff, 18px 4px 0 0.02em #fff,
        20px 4px 0 0.02em #fff, 2px 6px 0 0.02em #fff, 14px 6px 0 0.02em #fff,
        16px 6px 0 0.02em #fff, 2px 8px 0 0.02em #fff, 4px 8px 0 0.02em #fff,
        12px 8px 0 0.02em #fff, 14px 8px 0 0.02em #fff, 2px 10px 0 0.02em,
        4px 10px 0 0.02em #fff, 6px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff,
        12px 10px 0 0.02em #fff, 16px 10px 0 0.02em, 2px 12px 0 0.02em,
        6px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff, 10px 12px 0 0.02em #fff,
        16px 12px 0 0.02em, 2px 14px 0 0.02em, 8px 14px 0 0.02em #fff,
        16px 14px 0 0.02em, 2px 16px 0 0.02em, 4px 16px 0 0.02em,
        6px 16px 0 0.02em, 8px 16px 0 0.02em, 10px 16px 0 0.02em,
        12px 16px 0 0.02em, 14px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-select {
    position: relative;
    width: calc(100% - 8px);
    margin: 4px;
  }

  .nes-select select {
    border-image-slice: 2;
    border-image-width: 2;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
    border-radius: 0;
    outline-color: #e7e7e7;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    .nes-select select {
      border-image-repeat: space;
    }
  }

  @supports (-moz-appearance: meterbar) {
    .nes-select select {
      border-image-repeat: stretch;
    }
  }

  .nes-select select:invalid {
    color: #adafbc;
  }

  .nes-select.is-dark select {
    color: #fff;
    background-color: #212529;
  }

  .nes-select::after {
    width: 3px;
    height: 3px;
    color: #212529;
    box-shadow: 3px 3px, 6px 3px, 9px 3px, 12px 3px, 15px 3px, 18px 3px,
      21px 3px, 3px 6px, 6px 6px, 9px 6px, 12px 6px, 15px 6px, 18px 6px,
      21px 6px, 6px 9px, 9px 9px, 12px 9px, 15px 9px, 18px 9px, 6px 12px,
      9px 12px, 12px 12px, 15px 12px, 18px 12px, 9px 15px, 12px 15px, 15px 15px,
      12px 18px;
    position: absolute;
    top: calc(50% - 11px);
    right: 36px;
    pointer-events: none;
    content: '';
  }

  @supports (-moz-appearance: meterbar) {
    .nes-select::after {
      box-shadow: 3px 3px 0 0.02em, 6px 3px 0 0.02em, 9px 3px 0 0.02em,
        12px 3px 0 0.02em, 15px 3px 0 0.02em, 18px 3px 0 0.02em,
        21px 3px 0 0.02em, 3px 6px 0 0.02em, 6px 6px 0 0.02em, 9px 6px 0 0.02em,
        12px 6px 0 0.02em, 15px 6px 0 0.02em, 18px 6px 0 0.02em,
        21px 6px 0 0.02em, 6px 9px 0 0.02em, 9px 9px 0 0.02em, 12px 9px 0 0.02em,
        15px 9px 0 0.02em, 18px 9px 0 0.02em, 6px 12px 0 0.02em,
        9px 12px 0 0.02em, 12px 12px 0 0.02em, 15px 12px 0 0.02em,
        18px 12px 0 0.02em, 9px 15px 0 0.02em, 12px 15px 0 0.02em,
        15px 15px 0 0.02em, 12px 18px 0 0.02em;
    }
  }

  .nes-select.is-success::after {
    color: #92cc41;
  }

  .nes-select.is-success select {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(146,204,65)" /></svg>');
    outline-color: #76c442;
  }

  .nes-select.is-warning::after {
    color: #f7d51d;
  }

  .nes-select.is-warning select {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(247,213,29)" /></svg>');
    outline-color: #f2c409;
  }

  .nes-select.is-error::after {
    color: #e76e55;
  }

  .nes-select.is-error select {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(231,110,85)" /></svg>');
    outline-color: #ce372b;
  }

  .nes-select.is-dark::after {
    color: #fff;
  }

  .nes-select.is-dark select {
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
    outline-color: #e7e7e7;
  }

  .nes-icon {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    transform: scale(2);
    transform-origin: top left;
  }

  .nes-icon.is-small {
    margin: 0;
    transform: scale(1);
  }

  .nes-icon.is-medium {
    margin-right: 32px;
    margin-bottom: 32px;
    transform: scale(3);
  }

  .nes-icon.is-large {
    margin-right: 48px;
    margin-bottom: 48px;
    transform: scale(4);
  }

  .nes-icon::before {
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    content: '';
    background: transparent;
  }

  .nes-icon.heart::before {
    width: 1px;
    height: 1px;
    color: #f22426;
    box-shadow: 3px 2px #444, 4px 2px #444, 5px 2px #444, 11px 2px #444,
      12px 2px #444, 13px 2px #444, 2px 3px #444, 3px 3px, 4px 3px, 5px 3px,
      6px 3px #444, 10px 3px #444, 11px 3px, 12px 3px, 13px 3px #842300,
      14px 3px #444, 1px 4px #444, 2px 4px, 3px 4px #fff, 4px 4px #fff, 5px 4px,
      6px 4px, 7px 4px #444, 9px 4px #444, 10px 4px, 11px 4px, 12px 4px,
      13px 4px, 14px 4px #842300, 15px 4px #444, 1px 5px #444, 2px 5px,
      3px 5px #fff, 4px 5px, 5px 5px, 6px 5px, 7px 5px, 8px 5px #444, 9px 5px,
      10px 5px, 11px 5px, 12px 5px, 13px 5px, 14px 5px #842300, 15px 5px #444,
      1px 6px #444, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px,
      8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px #842300,
      15px 6px #444, 1px 7px #444, 2px 7px, 3px 7px, 4px 7px, 5px 7px, 6px 7px,
      7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px, 12px 7px, 13px 7px,
      14px 7px #842300, 15px 7px #444, 1px 8px #444, 2px 8px, 3px 8px, 4px 8px,
      5px 8px, 6px 8px, 7px 8px, 8px 8px, 9px 8px, 10px 8px, 11px 8px, 12px 8px,
      13px 8px, 14px 8px #842300, 15px 8px #444, 2px 9px #444, 3px 9px, 4px 9px,
      5px 9px, 6px 9px, 7px 9px, 8px 9px, 9px 9px, 10px 9px, 11px 9px, 12px 9px,
      13px 9px #842300, 14px 9px #444, 3px 10px #444, 4px 10px, 5px 10px,
      6px 10px, 7px 10px, 8px 10px, 9px 10px, 10px 10px, 11px 10px,
      12px 10px #842300, 13px 10px #444, 4px 11px #444, 5px 11px, 6px 11px,
      7px 11px, 8px 11px, 9px 11px, 10px 11px, 11px 11px #842300, 12px 11px #444,
      5px 12px #444, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px #842300,
      11px 12px #444, 6px 13px #444, 7px 13px, 8px 13px, 9px 13px #842300,
      10px 13px #444, 7px 14px #444, 8px 14px #842300, 9px 14px #444,
      8px 15px #444;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.heart::before {
      box-shadow: 3px 2px 0 0.02em #444, 4px 2px 0 0.02em #444,
        5px 2px 0 0.02em #444, 11px 2px 0 0.02em #444, 12px 2px 0 0.02em #444,
        13px 2px 0 0.02em #444, 2px 3px 0 0.02em #444, 3px 3px 0 0.02em,
        4px 3px 0 0.02em, 5px 3px 0 0.02em, 6px 3px 0 0.02em #444,
        10px 3px 0 0.02em #444, 11px 3px 0 0.02em, 12px 3px 0 0.02em,
        13px 3px 0 0.02em #842300, 14px 3px 0 0.02em #444, 1px 4px 0 0.02em #444,
        2px 4px 0 0.02em, 3px 4px 0 0.02em #fff, 4px 4px 0 0.02em #fff,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em #444,
        9px 4px 0 0.02em #444, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em, 13px 4px 0 0.02em, 14px 4px 0 0.02em #842300,
        15px 4px 0 0.02em #444, 1px 5px 0 0.02em #444, 2px 5px 0 0.02em,
        3px 5px 0 0.02em #fff, 4px 5px 0 0.02em, 5px 5px 0 0.02em,
        6px 5px 0 0.02em, 7px 5px 0 0.02em, 8px 5px 0 0.02em #444,
        9px 5px 0 0.02em, 10px 5px 0 0.02em, 11px 5px 0 0.02em,
        12px 5px 0 0.02em, 13px 5px 0 0.02em, 14px 5px 0 0.02em #842300,
        15px 5px 0 0.02em #444, 1px 6px 0 0.02em #444, 2px 6px 0 0.02em,
        3px 6px 0 0.02em, 4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em,
        7px 6px 0 0.02em, 8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em,
        11px 6px 0 0.02em, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em #842300, 15px 6px 0 0.02em #444, 1px 7px 0 0.02em #444,
        2px 7px 0 0.02em, 3px 7px 0 0.02em, 4px 7px 0 0.02em, 5px 7px 0 0.02em,
        6px 7px 0 0.02em, 7px 7px 0 0.02em, 8px 7px 0 0.02em, 9px 7px 0 0.02em,
        10px 7px 0 0.02em, 11px 7px 0 0.02em, 12px 7px 0 0.02em,
        13px 7px 0 0.02em, 14px 7px 0 0.02em #842300, 15px 7px 0 0.02em #444,
        1px 8px 0 0.02em #444, 2px 8px 0 0.02em, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em, 7px 8px 0 0.02em,
        8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em, 11px 8px 0 0.02em,
        12px 8px 0 0.02em, 13px 8px 0 0.02em, 14px 8px 0 0.02em #842300,
        15px 8px 0 0.02em #444, 2px 9px 0 0.02em #444, 3px 9px 0 0.02em,
        4px 9px 0 0.02em, 5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em,
        8px 9px 0 0.02em, 9px 9px 0 0.02em, 10px 9px 0 0.02em, 11px 9px 0 0.02em,
        12px 9px 0 0.02em, 13px 9px 0 0.02em #842300, 14px 9px 0 0.02em #444,
        3px 10px 0 0.02em #444, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em, 7px 10px 0 0.02em, 8px 10px 0 0.02em,
        9px 10px 0 0.02em, 10px 10px 0 0.02em, 11px 10px 0 0.02em,
        12px 10px 0 0.02em #842300, 13px 10px 0 0.02em #444,
        4px 11px 0 0.02em #444, 5px 11px 0 0.02em, 6px 11px 0 0.02em,
        7px 11px 0 0.02em, 8px 11px 0 0.02em, 9px 11px 0 0.02em,
        10px 11px 0 0.02em, 11px 11px 0 0.02em #842300, 12px 11px 0 0.02em #444,
        5px 12px 0 0.02em #444, 6px 12px 0 0.02em, 7px 12px 0 0.02em,
        8px 12px 0 0.02em, 9px 12px 0 0.02em, 10px 12px 0 0.02em #842300,
        11px 12px 0 0.02em #444, 6px 13px 0 0.02em #444, 7px 13px 0 0.02em,
        8px 13px 0 0.02em, 9px 13px 0 0.02em #842300, 10px 13px 0 0.02em #444,
        7px 14px 0 0.02em #444, 8px 14px 0 0.02em #842300,
        9px 14px 0 0.02em #444, 8px 15px 0 0.02em #444;
    }
  }

  .nes-icon.heart.is-half::before {
    width: 1px;
    height: 1px;
    color: #f22426;
    box-shadow: 3px 2px #444, 4px 2px #444, 5px 2px #444, 11px 2px #444,
      12px 2px #444, 13px 2px #444, 2px 3px #444, 3px 3px, 4px 3px, 5px 3px,
      6px 3px #444, 10px 3px #444, 14px 3px #444, 1px 4px #444, 2px 4px,
      3px 4px #fff, 4px 4px #fff, 5px 4px, 6px 4px, 7px 4px #444, 9px 4px #444,
      15px 4px #444, 1px 5px #444, 2px 5px, 3px 5px #fff, 4px 5px, 5px 5px,
      6px 5px, 7px 5px, 8px 5px #444, 15px 5px #444, 1px 6px #444, 2px 6px,
      3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px, 8px 6px, 15px 6px #444,
      1px 7px #444, 2px 7px, 3px 7px, 4px 7px, 5px 7px, 6px 7px, 7px 7px,
      8px 7px, 15px 7px #444, 1px 8px #444, 2px 8px, 3px 8px, 4px 8px, 5px 8px,
      6px 8px, 7px 8px, 8px 8px, 15px 8px #444, 2px 9px #444, 3px 9px, 4px 9px,
      5px 9px, 6px 9px, 7px 9px, 8px 9px, 14px 9px #444, 3px 10px #444, 4px 10px,
      5px 10px, 6px 10px, 7px 10px, 8px 10px, 13px 10px #444, 4px 11px #444,
      5px 11px, 6px 11px, 7px 11px, 8px 11px, 12px 11px #444, 5px 12px #444,
      6px 12px, 7px 12px, 8px 12px, 11px 12px #444, 6px 13px #444, 7px 13px,
      8px 13px, 10px 13px #444, 7px 14px #444, 8px 14px #842300, 9px 14px #444,
      8px 15px #444;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.heart.is-half::before {
      box-shadow: 3px 2px 0 0.02em #444, 4px 2px 0 0.02em #444,
        5px 2px 0 0.02em #444, 11px 2px 0 0.02em #444, 12px 2px 0 0.02em #444,
        13px 2px 0 0.02em #444, 2px 3px 0 0.02em #444, 3px 3px 0 0.02em,
        4px 3px 0 0.02em, 5px 3px 0 0.02em, 6px 3px 0 0.02em #444,
        10px 3px 0 0.02em #444, 14px 3px 0 0.02em #444, 1px 4px 0 0.02em #444,
        2px 4px 0 0.02em, 3px 4px 0 0.02em #fff, 4px 4px 0 0.02em #fff,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em #444,
        9px 4px 0 0.02em #444, 15px 4px 0 0.02em #444, 1px 5px 0 0.02em #444,
        2px 5px 0 0.02em, 3px 5px 0 0.02em #fff, 4px 5px 0 0.02em,
        5px 5px 0 0.02em, 6px 5px 0 0.02em, 7px 5px 0 0.02em,
        8px 5px 0 0.02em #444, 15px 5px 0 0.02em #444, 1px 6px 0 0.02em #444,
        2px 6px 0 0.02em, 3px 6px 0 0.02em, 4px 6px 0 0.02em, 5px 6px 0 0.02em,
        6px 6px 0 0.02em, 7px 6px 0 0.02em, 8px 6px 0 0.02em,
        15px 6px 0 0.02em #444, 1px 7px 0 0.02em #444, 2px 7px 0 0.02em,
        3px 7px 0 0.02em, 4px 7px 0 0.02em, 5px 7px 0 0.02em, 6px 7px 0 0.02em,
        7px 7px 0 0.02em, 8px 7px 0 0.02em, 15px 7px 0 0.02em #444,
        1px 8px 0 0.02em #444, 2px 8px 0 0.02em, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em, 7px 8px 0 0.02em,
        8px 8px 0 0.02em, 15px 8px 0 0.02em #444, 2px 9px 0 0.02em #444,
        3px 9px 0 0.02em, 4px 9px 0 0.02em, 5px 9px 0 0.02em, 6px 9px 0 0.02em,
        7px 9px 0 0.02em, 8px 9px 0 0.02em, 14px 9px 0 0.02em #444,
        3px 10px 0 0.02em #444, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em, 7px 10px 0 0.02em, 8px 10px 0 0.02em,
        13px 10px 0 0.02em #444, 4px 11px 0 0.02em #444, 5px 11px 0 0.02em,
        6px 11px 0 0.02em, 7px 11px 0 0.02em, 8px 11px 0 0.02em,
        12px 11px 0 0.02em #444, 5px 12px 0 0.02em #444, 6px 12px 0 0.02em,
        7px 12px 0 0.02em, 8px 12px 0 0.02em, 11px 12px 0 0.02em #444,
        6px 13px 0 0.02em #444, 7px 13px 0 0.02em, 8px 13px 0 0.02em,
        10px 13px 0 0.02em #444, 7px 14px 0 0.02em #444,
        8px 14px 0 0.02em #842300, 9px 14px 0 0.02em #444,
        8px 15px 0 0.02em #444;
    }
  }

  .nes-icon.heart.is-transparent::before {
    width: 1px;
    height: 1px;
    color: #444;
    box-shadow: 3px 2px, 4px 2px, 5px 2px, 11px 2px, 12px 2px, 13px 2px, 2px 3px,
      6px 3px, 10px 3px, 14px 3px, 1px 4px, 7px 4px, 9px 4px, 15px 4px, 1px 5px,
      8px 5px, 15px 5px, 1px 6px, 15px 6px, 1px 7px, 15px 7px, 1px 8px, 15px 8px,
      2px 9px, 14px 9px, 3px 10px, 13px 10px, 4px 11px, 12px 11px, 5px 12px,
      11px 12px, 6px 13px, 10px 13px, 7px 14px, 9px 14px, 8px 15px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.heart.is-transparent::before {
      box-shadow: 3px 2px 0 0.02em, 4px 2px 0 0.02em, 5px 2px 0 0.02em,
        11px 2px 0 0.02em, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
        2px 3px 0 0.02em, 6px 3px 0 0.02em, 10px 3px 0 0.02em, 14px 3px 0 0.02em,
        1px 4px 0 0.02em, 7px 4px 0 0.02em, 9px 4px 0 0.02em, 15px 4px 0 0.02em,
        1px 5px 0 0.02em, 8px 5px 0 0.02em, 15px 5px 0 0.02em, 1px 6px 0 0.02em,
        15px 6px 0 0.02em, 1px 7px 0 0.02em, 15px 7px 0 0.02em, 1px 8px 0 0.02em,
        15px 8px 0 0.02em, 2px 9px 0 0.02em, 14px 9px 0 0.02em,
        3px 10px 0 0.02em, 13px 10px 0 0.02em, 4px 11px 0 0.02em,
        12px 11px 0 0.02em, 5px 12px 0 0.02em, 11px 12px 0 0.02em,
        6px 13px 0 0.02em, 10px 13px 0 0.02em, 7px 14px 0 0.02em,
        9px 14px 0 0.02em, 8px 15px 0 0.02em;
    }
  }

  .nes-icon.heart.is-empty::before {
    width: 1px;
    height: 1px;
    color: #adafbb;
    box-shadow: 3px 2px, 4px 2px, 5px 2px, 11px 2px, 12px 2px, 13px 2px, 2px 3px,
      6px 3px, 10px 3px, 14px 3px, 1px 4px, 7px 4px, 9px 4px, 15px 4px, 1px 5px,
      8px 5px, 15px 5px, 1px 6px, 15px 6px, 1px 7px, 15px 7px, 1px 8px, 15px 8px,
      2px 9px, 14px 9px, 3px 10px, 13px 10px, 4px 11px, 12px 11px, 5px 12px,
      11px 12px, 6px 13px, 10px 13px, 7px 14px, 9px 14px, 8px 15px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.heart.is-empty::before {
      box-shadow: 3px 2px 0 0.02em, 4px 2px 0 0.02em, 5px 2px 0 0.02em,
        11px 2px 0 0.02em, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
        2px 3px 0 0.02em, 6px 3px 0 0.02em, 10px 3px 0 0.02em, 14px 3px 0 0.02em,
        1px 4px 0 0.02em, 7px 4px 0 0.02em, 9px 4px 0 0.02em, 15px 4px 0 0.02em,
        1px 5px 0 0.02em, 8px 5px 0 0.02em, 15px 5px 0 0.02em, 1px 6px 0 0.02em,
        15px 6px 0 0.02em, 1px 7px 0 0.02em, 15px 7px 0 0.02em, 1px 8px 0 0.02em,
        15px 8px 0 0.02em, 2px 9px 0 0.02em, 14px 9px 0 0.02em,
        3px 10px 0 0.02em, 13px 10px 0 0.02em, 4px 11px 0 0.02em,
        12px 11px 0 0.02em, 5px 12px 0 0.02em, 11px 12px 0 0.02em,
        6px 13px 0 0.02em, 10px 13px 0 0.02em, 7px 14px 0 0.02em,
        9px 14px 0 0.02em, 8px 15px 0 0.02em;
    }
  }

  .nes-icon.star::before {
    width: 1px;
    height: 1px;
    color: #ebe527;
    box-shadow: 8px 1px #444, 7px 2px #444, 8px 2px, 9px 2px #444, 7px 3px #444,
      8px 3px, 9px 3px #444, 6px 4px #444, 7px 4px, 8px 4px, 9px 4px,
      10px 4px #444, 6px 5px #444, 7px 5px #fff, 8px 5px #fff, 9px 5px,
      10px 5px #444, 1px 6px #444, 2px 6px #444, 3px 6px #444, 4px 6px #444,
      5px 6px #444, 6px 6px #444, 7px 6px #fff, 8px 6px, 9px 6px, 10px 6px,
      11px 6px #444, 12px 6px #444, 13px 6px #444, 14px 6px #444, 15px 6px #444,
      1px 7px #444, 2px 7px, 3px 7px, 4px 7px, 5px 7px #fff, 6px 7px #fff,
      7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px, 12px 7px, 13px 7px,
      14px 7px, 15px 7px #444, 2px 8px #444, 3px 8px, 4px 8px, 5px 8px #fff,
      6px 8px, 7px 8px, 8px 8px, 9px 8px, 10px 8px, 11px 8px, 12px 8px,
      13px 8px #f59f54, 14px 8px #444, 3px 9px #444, 4px 9px, 5px 9px, 6px 9px,
      7px 9px, 8px 9px, 9px 9px, 10px 9px, 11px 9px #f59f54, 12px 9px #f59f54,
      13px 9px #444, 4px 10px #444, 5px 10px, 6px 10px, 7px 10px, 8px 10px,
      9px 10px, 10px 10px, 11px 10px, 12px 10px #444, 3px 11px #444, 4px 11px,
      5px 11px, 6px 11px, 7px 11px, 8px 11px #f59f54, 9px 11px, 10px 11px,
      11px 11px, 12px 11px, 13px 11px #444, 3px 12px #444, 4px 12px, 5px 12px,
      6px 12px, 7px 12px #f59f54, 8px 12px #f59f54, 9px 12px #f59f54, 10px 12px,
      11px 12px, 12px 12px, 13px 12px #444, 2px 13px #444, 3px 13px, 4px 13px,
      5px 13px #f59f54, 6px 13px #f59f54, 7px 13px #f59f54, 8px 13px #444,
      9px 13px #f59f54, 10px 13px #f59f54, 11px 13px #f59f54, 12px 13px,
      13px 13px, 14px 13px #444, 2px 14px #444, 3px 14px, 4px 14px #f59f54,
      5px 14px #f59f54, 6px 14px #444, 7px 14px #444, 9px 14px #444,
      10px 14px #444, 11px 14px #f59f54, 12px 14px #f59f54, 13px 14px,
      14px 14px #444, 1px 15px #444, 2px 15px #f59f54, 3px 15px #f59f54,
      4px 15px #444, 5px 15px #444, 11px 15px #444, 12px 15px #444,
      13px 15px #f59f54, 14px 15px #f59f54, 15px 15px #444, 1px 16px #444,
      2px 16px #444, 3px 16px #444, 13px 16px #444, 14px 16px #444,
      15px 16px #444;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.star::before {
      box-shadow: 8px 1px 0 0.02em #444, 7px 2px 0 0.02em #444, 8px 2px 0 0.02em,
        9px 2px 0 0.02em #444, 7px 3px 0 0.02em #444, 8px 3px 0 0.02em,
        9px 3px 0 0.02em #444, 6px 4px 0 0.02em #444, 7px 4px 0 0.02em,
        8px 4px 0 0.02em, 9px 4px 0 0.02em, 10px 4px 0 0.02em #444,
        6px 5px 0 0.02em #444, 7px 5px 0 0.02em #fff, 8px 5px 0 0.02em #fff,
        9px 5px 0 0.02em, 10px 5px 0 0.02em #444, 1px 6px 0 0.02em #444,
        2px 6px 0 0.02em #444, 3px 6px 0 0.02em #444, 4px 6px 0 0.02em #444,
        5px 6px 0 0.02em #444, 6px 6px 0 0.02em #444, 7px 6px 0 0.02em #fff,
        8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em,
        11px 6px 0 0.02em #444, 12px 6px 0 0.02em #444, 13px 6px 0 0.02em #444,
        14px 6px 0 0.02em #444, 15px 6px 0 0.02em #444, 1px 7px 0 0.02em #444,
        2px 7px 0 0.02em, 3px 7px 0 0.02em, 4px 7px 0 0.02em,
        5px 7px 0 0.02em #fff, 6px 7px 0 0.02em #fff, 7px 7px 0 0.02em,
        8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em, 11px 7px 0 0.02em,
        12px 7px 0 0.02em, 13px 7px 0 0.02em, 14px 7px 0 0.02em,
        15px 7px 0 0.02em #444, 2px 8px 0 0.02em #444, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em #fff, 6px 8px 0 0.02em,
        7px 8px 0 0.02em, 8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em,
        11px 8px 0 0.02em, 12px 8px 0 0.02em, 13px 8px 0 0.02em #f59f54,
        14px 8px 0 0.02em #444, 3px 9px 0 0.02em #444, 4px 9px 0 0.02em,
        5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em, 8px 9px 0 0.02em,
        9px 9px 0 0.02em, 10px 9px 0 0.02em, 11px 9px 0 0.02em #f59f54,
        12px 9px 0 0.02em #f59f54, 13px 9px 0 0.02em #444,
        4px 10px 0 0.02em #444, 5px 10px 0 0.02em, 6px 10px 0 0.02em,
        7px 10px 0 0.02em, 8px 10px 0 0.02em, 9px 10px 0 0.02em,
        10px 10px 0 0.02em, 11px 10px 0 0.02em, 12px 10px 0 0.02em #444,
        3px 11px 0 0.02em #444, 4px 11px 0 0.02em, 5px 11px 0 0.02em,
        6px 11px 0 0.02em, 7px 11px 0 0.02em, 8px 11px 0 0.02em #f59f54,
        9px 11px 0 0.02em, 10px 11px 0 0.02em, 11px 11px 0 0.02em,
        12px 11px 0 0.02em, 13px 11px 0 0.02em #444, 3px 12px 0 0.02em #444,
        4px 12px 0 0.02em, 5px 12px 0 0.02em, 6px 12px 0 0.02em,
        7px 12px 0 0.02em #f59f54, 8px 12px 0 0.02em #f59f54,
        9px 12px 0 0.02em #f59f54, 10px 12px 0 0.02em, 11px 12px 0 0.02em,
        12px 12px 0 0.02em, 13px 12px 0 0.02em #444, 2px 13px 0 0.02em #444,
        3px 13px 0 0.02em, 4px 13px 0 0.02em, 5px 13px 0 0.02em #f59f54,
        6px 13px 0 0.02em #f59f54, 7px 13px 0 0.02em #f59f54,
        8px 13px 0 0.02em #444, 9px 13px 0 0.02em #f59f54,
        10px 13px 0 0.02em #f59f54, 11px 13px 0 0.02em #f59f54,
        12px 13px 0 0.02em, 13px 13px 0 0.02em, 14px 13px 0 0.02em #444,
        2px 14px 0 0.02em #444, 3px 14px 0 0.02em, 4px 14px 0 0.02em #f59f54,
        5px 14px 0 0.02em #f59f54, 6px 14px 0 0.02em #444,
        7px 14px 0 0.02em #444, 9px 14px 0 0.02em #444, 10px 14px 0 0.02em #444,
        11px 14px 0 0.02em #f59f54, 12px 14px 0 0.02em #f59f54,
        13px 14px 0 0.02em, 14px 14px 0 0.02em #444, 1px 15px 0 0.02em #444,
        2px 15px 0 0.02em #f59f54, 3px 15px 0 0.02em #f59f54,
        4px 15px 0 0.02em #444, 5px 15px 0 0.02em #444, 11px 15px 0 0.02em #444,
        12px 15px 0 0.02em #444, 13px 15px 0 0.02em #f59f54,
        14px 15px 0 0.02em #f59f54, 15px 15px 0 0.02em #444,
        1px 16px 0 0.02em #444, 2px 16px 0 0.02em #444, 3px 16px 0 0.02em #444,
        13px 16px 0 0.02em #444, 14px 16px 0 0.02em #444,
        15px 16px 0 0.02em #444;
    }
  }

  .nes-icon.star.is-empty::before {
    width: 1px;
    height: 1px;
    color: #adafbb;
    box-shadow: 8px 1px, 7px 2px, 9px 2px, 7px 3px, 9px 3px, 6px 4px, 10px 4px,
      6px 5px, 10px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px,
      11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px, 1px 7px, 15px 7px,
      2px 8px, 14px 8px, 3px 9px, 13px 9px, 4px 10px, 12px 10px, 3px 11px,
      13px 11px, 3px 12px, 13px 12px, 2px 13px, 8px 13px, 14px 13px, 2px 14px,
      6px 14px, 7px 14px, 9px 14px, 10px 14px, 14px 14px, 1px 15px, 4px 15px,
      5px 15px, 11px 15px, 12px 15px, 15px 15px, 1px 16px, 2px 16px, 3px 16px,
      13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.star.is-empty::before {
      box-shadow: 8px 1px 0 0.02em, 7px 2px 0 0.02em, 9px 2px 0 0.02em,
        7px 3px 0 0.02em, 9px 3px 0 0.02em, 6px 4px 0 0.02em, 10px 4px 0 0.02em,
        6px 5px 0 0.02em, 10px 5px 0 0.02em, 1px 6px 0 0.02em, 2px 6px 0 0.02em,
        3px 6px 0 0.02em, 4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em,
        11px 6px 0 0.02em, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em, 15px 6px 0 0.02em, 1px 7px 0 0.02em,
        15px 7px 0 0.02em, 2px 8px 0 0.02em, 14px 8px 0 0.02em, 3px 9px 0 0.02em,
        13px 9px 0 0.02em, 4px 10px 0 0.02em, 12px 10px 0 0.02em,
        3px 11px 0 0.02em, 13px 11px 0 0.02em, 3px 12px 0 0.02em,
        13px 12px 0 0.02em, 2px 13px 0 0.02em, 8px 13px 0 0.02em,
        14px 13px 0 0.02em, 2px 14px 0 0.02em, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 9px 14px 0 0.02em, 10px 14px 0 0.02em,
        14px 14px 0 0.02em, 1px 15px 0 0.02em, 4px 15px 0 0.02em,
        5px 15px 0 0.02em, 11px 15px 0 0.02em, 12px 15px 0 0.02em,
        15px 15px 0 0.02em, 1px 16px 0 0.02em, 2px 16px 0 0.02em,
        3px 16px 0 0.02em, 13px 16px 0 0.02em, 14px 16px 0 0.02em,
        15px 16px 0 0.02em;
    }
  }

  .nes-icon.star.is-half::before {
    width: 1px;
    height: 1px;
    color: #444;
    box-shadow: 8px 1px, 7px 2px, 8px 2px #ebe527, 9px 2px, 7px 3px,
      8px 3px #ebe527, 9px 3px, 6px 4px, 7px 4px #ebe527, 8px 4px #ebe527,
      10px 4px, 6px 5px, 7px 5px #ebe527, 8px 5px #ebe527, 10px 5px, 1px 6px,
      2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px #ebe527,
      8px 6px #ebe527, 11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px, 1px 7px,
      2px 7px #ebe527, 3px 7px #ebe527, 4px 7px #ebe527, 5px 7px #ebe527,
      6px 7px #ebe527, 7px 7px #ebe527, 8px 7px #ebe527, 15px 7px, 2px 8px,
      3px 8px #ebe527, 4px 8px #ebe527, 5px 8px #ebe527, 6px 8px #ebe527,
      7px 8px #ebe527, 8px 8px #ebe527, 14px 8px, 3px 9px, 4px 9px #ebe527,
      5px 9px #ebe527, 6px 9px #ebe527, 7px 9px #ebe527, 8px 9px #ebe527,
      13px 9px, 4px 10px, 5px 10px #ebe527, 6px 10px #ebe527, 7px 10px #ebe527,
      8px 10px #ebe527, 12px 10px, 3px 11px, 4px 11px #ebe527, 5px 11px #ebe527,
      6px 11px #ebe527, 7px 11px #ebe527, 8px 11px #f59f54, 13px 11px, 3px 12px,
      4px 12px #ebe527, 5px 12px #ebe527, 6px 12px #ebe527, 7px 12px #f59f54,
      8px 12px #f59f54, 13px 12px, 2px 13px, 3px 13px #ebe527, 4px 13px #ebe527,
      5px 13px #f59f54, 6px 13px #f59f54, 7px 13px #f59f54, 8px 13px, 14px 13px,
      2px 14px, 3px 14px #ebe527, 4px 14px #f59f54, 5px 14px #f59f54, 6px 14px,
      7px 14px, 9px 14px, 10px 14px, 14px 14px, 1px 15px, 2px 15px #f59f54,
      3px 15px #f59f54, 4px 15px, 5px 15px, 11px 15px, 12px 15px, 15px 15px,
      1px 16px, 2px 16px, 3px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.star.is-half::before {
      box-shadow: 8px 1px 0 0.02em, 7px 2px 0 0.02em, 8px 2px 0 0.02em #ebe527,
        9px 2px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em #ebe527,
        9px 3px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em #ebe527,
        8px 4px 0 0.02em #ebe527, 10px 4px 0 0.02em, 6px 5px 0 0.02em,
        7px 5px 0 0.02em #ebe527, 8px 5px 0 0.02em #ebe527, 10px 5px 0 0.02em,
        1px 6px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em, 4px 6px 0 0.02em,
        5px 6px 0 0.02em, 6px 6px 0 0.02em, 7px 6px 0 0.02em #ebe527,
        8px 6px 0 0.02em #ebe527, 11px 6px 0 0.02em, 12px 6px 0 0.02em,
        13px 6px 0 0.02em, 14px 6px 0 0.02em, 15px 6px 0 0.02em,
        1px 7px 0 0.02em, 2px 7px 0 0.02em #ebe527, 3px 7px 0 0.02em #ebe527,
        4px 7px 0 0.02em #ebe527, 5px 7px 0 0.02em #ebe527,
        6px 7px 0 0.02em #ebe527, 7px 7px 0 0.02em #ebe527,
        8px 7px 0 0.02em #ebe527, 15px 7px 0 0.02em, 2px 8px 0 0.02em,
        3px 8px 0 0.02em #ebe527, 4px 8px 0 0.02em #ebe527,
        5px 8px 0 0.02em #ebe527, 6px 8px 0 0.02em #ebe527,
        7px 8px 0 0.02em #ebe527, 8px 8px 0 0.02em #ebe527, 14px 8px 0 0.02em,
        3px 9px 0 0.02em, 4px 9px 0 0.02em #ebe527, 5px 9px 0 0.02em #ebe527,
        6px 9px 0 0.02em #ebe527, 7px 9px 0 0.02em #ebe527,
        8px 9px 0 0.02em #ebe527, 13px 9px 0 0.02em, 4px 10px 0 0.02em,
        5px 10px 0 0.02em #ebe527, 6px 10px 0 0.02em #ebe527,
        7px 10px 0 0.02em #ebe527, 8px 10px 0 0.02em #ebe527, 12px 10px 0 0.02em,
        3px 11px 0 0.02em, 4px 11px 0 0.02em #ebe527, 5px 11px 0 0.02em #ebe527,
        6px 11px 0 0.02em #ebe527, 7px 11px 0 0.02em #ebe527,
        8px 11px 0 0.02em #f59f54, 13px 11px 0 0.02em, 3px 12px 0 0.02em,
        4px 12px 0 0.02em #ebe527, 5px 12px 0 0.02em #ebe527,
        6px 12px 0 0.02em #ebe527, 7px 12px 0 0.02em #f59f54,
        8px 12px 0 0.02em #f59f54, 13px 12px 0 0.02em, 2px 13px 0 0.02em,
        3px 13px 0 0.02em #ebe527, 4px 13px 0 0.02em #ebe527,
        5px 13px 0 0.02em #f59f54, 6px 13px 0 0.02em #f59f54,
        7px 13px 0 0.02em #f59f54, 8px 13px 0 0.02em, 14px 13px 0 0.02em,
        2px 14px 0 0.02em, 3px 14px 0 0.02em #ebe527, 4px 14px 0 0.02em #f59f54,
        5px 14px 0 0.02em #f59f54, 6px 14px 0 0.02em, 7px 14px 0 0.02em,
        9px 14px 0 0.02em, 10px 14px 0 0.02em, 14px 14px 0 0.02em,
        1px 15px 0 0.02em, 2px 15px 0 0.02em #f59f54, 3px 15px 0 0.02em #f59f54,
        4px 15px 0 0.02em, 5px 15px 0 0.02em, 11px 15px 0 0.02em,
        12px 15px 0 0.02em, 15px 15px 0 0.02em, 1px 16px 0 0.02em,
        2px 16px 0 0.02em, 3px 16px 0 0.02em, 13px 16px 0 0.02em,
        14px 16px 0 0.02em, 15px 16px 0 0.02em;
    }
  }

  .nes-icon.star.is-transparent::before {
    width: 1px;
    height: 1px;
    color: #444;
    box-shadow: 8px 1px, 7px 2px, 9px 2px, 7px 3px, 9px 3px, 6px 4px, 10px 4px,
      6px 5px, 10px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px,
      11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px, 1px 7px, 15px 7px,
      2px 8px, 14px 8px, 3px 9px, 13px 9px, 4px 10px, 12px 10px, 3px 11px,
      13px 11px, 3px 12px, 13px 12px, 2px 13px, 8px 13px, 14px 13px, 2px 14px,
      6px 14px, 7px 14px, 9px 14px, 10px 14px, 14px 14px, 1px 15px, 4px 15px,
      5px 15px, 11px 15px, 12px 15px, 15px 15px, 1px 16px, 2px 16px, 3px 16px,
      13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.star.is-transparent::before {
      box-shadow: 8px 1px 0 0.02em, 7px 2px 0 0.02em, 9px 2px 0 0.02em,
        7px 3px 0 0.02em, 9px 3px 0 0.02em, 6px 4px 0 0.02em, 10px 4px 0 0.02em,
        6px 5px 0 0.02em, 10px 5px 0 0.02em, 1px 6px 0 0.02em, 2px 6px 0 0.02em,
        3px 6px 0 0.02em, 4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em,
        11px 6px 0 0.02em, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em, 15px 6px 0 0.02em, 1px 7px 0 0.02em,
        15px 7px 0 0.02em, 2px 8px 0 0.02em, 14px 8px 0 0.02em, 3px 9px 0 0.02em,
        13px 9px 0 0.02em, 4px 10px 0 0.02em, 12px 10px 0 0.02em,
        3px 11px 0 0.02em, 13px 11px 0 0.02em, 3px 12px 0 0.02em,
        13px 12px 0 0.02em, 2px 13px 0 0.02em, 8px 13px 0 0.02em,
        14px 13px 0 0.02em, 2px 14px 0 0.02em, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 9px 14px 0 0.02em, 10px 14px 0 0.02em,
        14px 14px 0 0.02em, 1px 15px 0 0.02em, 4px 15px 0 0.02em,
        5px 15px 0 0.02em, 11px 15px 0 0.02em, 12px 15px 0 0.02em,
        15px 15px 0 0.02em, 1px 16px 0 0.02em, 2px 16px 0 0.02em,
        3px 16px 0 0.02em, 13px 16px 0 0.02em, 14px 16px 0 0.02em,
        15px 16px 0 0.02em;
    }
  }

  .nes-icon.trophy::before {
    width: 1px;
    height: 1px;
    color: #ebe527;
    box-shadow: 3px 1px #444, 4px 1px #444, 5px 1px #444, 6px 1px #444,
      7px 1px #444, 8px 1px #444, 9px 1px #444, 10px 1px #444, 11px 1px #444,
      12px 1px #444, 13px 1px #444, 3px 2px #444, 4px 2px, 5px 2px, 6px 2px,
      7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px #f59f54,
      13px 2px #444, 1px 3px #444, 2px 3px #444, 3px 3px #444, 4px 3px,
      5px 3px #fff, 6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px,
      12px 3px #f59f54, 13px 3px #444, 14px 3px #444, 15px 3px #444,
      1px 4px #444, 3px 4px #444, 4px 4px, 5px 4px #fff, 6px 4px, 7px 4px,
      8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px #f59f54, 13px 4px #444,
      15px 4px #444, 1px 5px #444, 3px 5px #444, 4px 5px, 5px 5px #fff, 6px 5px,
      7px 5px, 8px 5px, 9px 5px, 10px 5px, 11px 5px, 12px 5px #f59f54,
      13px 5px #444, 15px 5px #444, 2px 6px #444, 3px 6px #444, 4px 6px,
      5px 6px #fff, 6px 6px, 7px 6px, 8px 6px, 9px 6px, 10px 6px, 11px 6px,
      12px 6px #f59f54, 13px 6px #444, 14px 6px #444, 3px 7px #444, 4px 7px,
      5px 7px #fff, 6px 7px, 7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px,
      12px 7px #f59f54, 13px 7px #444, 3px 8px #444, 4px 8px, 5px 8px, 6px 8px,
      7px 8px, 8px 8px, 9px 8px, 10px 8px, 11px 8px, 12px 8px #f59f54,
      13px 8px #444, 4px 9px #444, 5px 9px, 6px 9px, 7px 9px, 8px 9px, 9px 9px,
      10px 9px, 11px 9px #f59f54, 12px 9px #444, 5px 10px #444, 6px 10px,
      7px 10px, 8px 10px, 9px 10px, 10px 10px #f59f54, 11px 10px #444,
      6px 11px #444, 7px 11px, 8px 11px, 9px 11px #f59f54, 10px 11px #444,
      7px 12px #444, 8px 12px, 9px 12px #444, 7px 13px #444, 8px 13px,
      9px 13px #444, 6px 14px #444, 7px 14px #444, 8px 14px, 9px 14px #444,
      10px 14px #444, 5px 15px #444, 6px 15px, 7px 15px, 8px 15px, 9px 15px,
      10px 15px #f59f54, 11px 15px #444, 5px 16px #444, 6px 16px #444,
      7px 16px #444, 8px 16px #444, 9px 16px #444, 10px 16px #444,
      11px 16px #444;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.trophy::before {
      box-shadow: 3px 1px 0 0.02em #444, 4px 1px 0 0.02em #444,
        5px 1px 0 0.02em #444, 6px 1px 0 0.02em #444, 7px 1px 0 0.02em #444,
        8px 1px 0 0.02em #444, 9px 1px 0 0.02em #444, 10px 1px 0 0.02em #444,
        11px 1px 0 0.02em #444, 12px 1px 0 0.02em #444, 13px 1px 0 0.02em #444,
        3px 2px 0 0.02em #444, 4px 2px 0 0.02em, 5px 2px 0 0.02em,
        6px 2px 0 0.02em, 7px 2px 0 0.02em, 8px 2px 0 0.02em, 9px 2px 0 0.02em,
        10px 2px 0 0.02em, 11px 2px 0 0.02em, 12px 2px 0 0.02em #f59f54,
        13px 2px 0 0.02em #444, 1px 3px 0 0.02em #444, 2px 3px 0 0.02em #444,
        3px 3px 0 0.02em #444, 4px 3px 0 0.02em, 5px 3px 0 0.02em #fff,
        6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
        10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em #f59f54,
        13px 3px 0 0.02em #444, 14px 3px 0 0.02em #444, 15px 3px 0 0.02em #444,
        1px 4px 0 0.02em #444, 3px 4px 0 0.02em #444, 4px 4px 0 0.02em,
        5px 4px 0 0.02em #fff, 6px 4px 0 0.02em, 7px 4px 0 0.02em,
        8px 4px 0 0.02em, 9px 4px 0 0.02em, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em #f59f54, 13px 4px 0 0.02em #444,
        15px 4px 0 0.02em #444, 1px 5px 0 0.02em #444, 3px 5px 0 0.02em #444,
        4px 5px 0 0.02em, 5px 5px 0 0.02em #fff, 6px 5px 0 0.02em,
        7px 5px 0 0.02em, 8px 5px 0 0.02em, 9px 5px 0 0.02em, 10px 5px 0 0.02em,
        11px 5px 0 0.02em, 12px 5px 0 0.02em #f59f54, 13px 5px 0 0.02em #444,
        15px 5px 0 0.02em #444, 2px 6px 0 0.02em #444, 3px 6px 0 0.02em #444,
        4px 6px 0 0.02em, 5px 6px 0 0.02em #fff, 6px 6px 0 0.02em,
        7px 6px 0 0.02em, 8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em,
        11px 6px 0 0.02em, 12px 6px 0 0.02em #f59f54, 13px 6px 0 0.02em #444,
        14px 6px 0 0.02em #444, 3px 7px 0 0.02em #444, 4px 7px 0 0.02em,
        5px 7px 0 0.02em #fff, 6px 7px 0 0.02em, 7px 7px 0 0.02em,
        8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em, 11px 7px 0 0.02em,
        12px 7px 0 0.02em #f59f54, 13px 7px 0 0.02em #444, 3px 8px 0 0.02em #444,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em, 7px 8px 0 0.02em,
        8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em, 11px 8px 0 0.02em,
        12px 8px 0 0.02em #f59f54, 13px 8px 0 0.02em #444, 4px 9px 0 0.02em #444,
        5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em, 8px 9px 0 0.02em,
        9px 9px 0 0.02em, 10px 9px 0 0.02em, 11px 9px 0 0.02em #f59f54,
        12px 9px 0 0.02em #444, 5px 10px 0 0.02em #444, 6px 10px 0 0.02em,
        7px 10px 0 0.02em, 8px 10px 0 0.02em, 9px 10px 0 0.02em,
        10px 10px 0 0.02em #f59f54, 11px 10px 0 0.02em #444,
        6px 11px 0 0.02em #444, 7px 11px 0 0.02em, 8px 11px 0 0.02em,
        9px 11px 0 0.02em #f59f54, 10px 11px 0 0.02em #444,
        7px 12px 0 0.02em #444, 8px 12px 0 0.02em, 9px 12px 0 0.02em #444,
        7px 13px 0 0.02em #444, 8px 13px 0 0.02em, 9px 13px 0 0.02em #444,
        6px 14px 0 0.02em #444, 7px 14px 0 0.02em #444, 8px 14px 0 0.02em,
        9px 14px 0 0.02em #444, 10px 14px 0 0.02em #444, 5px 15px 0 0.02em #444,
        6px 15px 0 0.02em, 7px 15px 0 0.02em, 8px 15px 0 0.02em,
        9px 15px 0 0.02em, 10px 15px 0 0.02em #f59f54, 11px 15px 0 0.02em #444,
        5px 16px 0 0.02em #444, 6px 16px 0 0.02em #444, 7px 16px 0 0.02em #444,
        8px 16px 0 0.02em #444, 9px 16px 0 0.02em #444, 10px 16px 0 0.02em #444,
        11px 16px 0 0.02em #444;
    }
  }

  .nes-icon.trophy.is-empty::before {
    width: 1px;
    height: 1px;
    color: #adafbb;
    box-shadow: 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px,
      10px 1px, 11px 1px, 12px 1px, 13px 1px, 3px 2px, 13px 2px, 1px 3px,
      2px 3px, 3px 3px, 13px 3px, 14px 3px, 15px 3px, 1px 4px, 3px 4px, 13px 4px,
      15px 4px, 1px 5px, 3px 5px, 13px 5px, 15px 5px, 2px 6px, 3px 6px, 13px 6px,
      14px 6px, 3px 7px, 13px 7px, 3px 8px, 13px 8px, 4px 9px, 12px 9px,
      5px 10px, 11px 10px, 6px 11px, 10px 11px, 7px 12px, 9px 12px, 7px 13px,
      9px 13px, 6px 14px, 7px 14px, 9px 14px, 10px 14px, 5px 15px, 11px 15px,
      5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.trophy.is-empty::before {
      box-shadow: 3px 1px 0 0.02em, 4px 1px 0 0.02em, 5px 1px 0 0.02em,
        6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em, 9px 1px 0 0.02em,
        10px 1px 0 0.02em, 11px 1px 0 0.02em, 12px 1px 0 0.02em,
        13px 1px 0 0.02em, 3px 2px 0 0.02em, 13px 2px 0 0.02em, 1px 3px 0 0.02em,
        2px 3px 0 0.02em, 3px 3px 0 0.02em, 13px 3px 0 0.02em, 14px 3px 0 0.02em,
        15px 3px 0 0.02em, 1px 4px 0 0.02em, 3px 4px 0 0.02em, 13px 4px 0 0.02em,
        15px 4px 0 0.02em, 1px 5px 0 0.02em, 3px 5px 0 0.02em, 13px 5px 0 0.02em,
        15px 5px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em, 3px 7px 0 0.02em, 13px 7px 0 0.02em, 3px 8px 0 0.02em,
        13px 8px 0 0.02em, 4px 9px 0 0.02em, 12px 9px 0 0.02em,
        5px 10px 0 0.02em, 11px 10px 0 0.02em, 6px 11px 0 0.02em,
        10px 11px 0 0.02em, 7px 12px 0 0.02em, 9px 12px 0 0.02em,
        7px 13px 0 0.02em, 9px 13px 0 0.02em, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 9px 14px 0 0.02em, 10px 14px 0 0.02em,
        5px 15px 0 0.02em, 11px 15px 0 0.02em, 5px 16px 0 0.02em,
        6px 16px 0 0.02em, 7px 16px 0 0.02em, 8px 16px 0 0.02em,
        9px 16px 0 0.02em, 10px 16px 0 0.02em, 11px 16px 0 0.02em;
    }
  }

  .nes-icon.like::before {
    width: 1px;
    height: 1px;
    color: #fff;
    box-shadow: 8px 2px #333, 9px 2px #333, 8px 3px #333, 9px 3px, 10px 3px #333,
      8px 4px #333, 9px 4px, 10px 4px #333, 7px 5px #333, 8px 5px, 9px 5px,
      10px 5px #333, 7px 6px #333, 8px 6px, 9px 6px, 10px 6px #333,
      11px 6px #333, 12px 6px #333, 13px 6px #333, 14px 6px #333, 15px 6px #333,
      6px 7px #333, 7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px, 12px 7px,
      13px 7px, 14px 7px, 15px 7px, 16px 7px #333, 2px 8px #333, 3px 8px #333,
      4px 8px #333, 6px 8px #333, 7px 8px, 8px 8px, 9px 8px, 10px 8px, 11px 8px,
      12px 8px, 13px 8px, 14px 8px, 15px 8px, 16px 8px #333, 1px 9px #333,
      2px 9px #2e77be, 3px 9px #2e77be, 4px 9px #2e77be, 5px 9px #333, 6px 9px,
      7px 9px, 8px 9px, 9px 9px, 10px 9px, 11px 9px, 12px 9px, 13px 9px,
      14px 9px, 15px 9px, 16px 9px #333, 1px 10px #333, 2px 10px #2e77be,
      3px 10px #2e77be, 4px 10px #2e77be, 5px 10px #333, 6px 10px, 7px 10px,
      8px 10px, 9px 10px, 10px 10px, 11px 10px, 12px 10px, 13px 10px, 14px 10px,
      15px 10px #333, 1px 11px #333, 2px 11px #2e77be, 3px 11px #2e77be,
      4px 11px #2e77be, 5px 11px #333, 6px 11px, 7px 11px, 8px 11px, 9px 11px,
      10px 11px, 11px 11px, 12px 11px, 13px 11px, 14px 11px, 15px 11px #333,
      1px 12px #333, 2px 12px #2e77be, 3px 12px #2e77be, 4px 12px #2e77be,
      5px 12px #333, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px,
      11px 12px, 12px 12px, 13px 12px, 14px 12px, 15px 12px #333, 1px 13px #333,
      2px 13px #2e77be, 3px 13px #2e77be, 4px 13px #2e77be, 5px 13px #333,
      6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px, 12px 13px,
      13px 13px, 14px 13px #333, 1px 14px #333, 2px 14px #2e77be,
      3px 14px #2e77be, 4px 14px #2e77be, 5px 14px #333, 6px 14px, 7px 14px,
      8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px, 13px 14px,
      14px 14px #333, 2px 15px #333, 3px 15px #333, 4px 15px #333, 6px 15px #333,
      7px 15px #333, 8px 15px #333, 9px 15px #333, 10px 15px #333,
      11px 15px #333, 12px 15px #333, 13px 15px #333;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.like::before {
      box-shadow: 8px 2px 0 0.02em #333, 9px 2px 0 0.02em #333,
        8px 3px 0 0.02em #333, 9px 3px 0 0.02em, 10px 3px 0 0.02em #333,
        8px 4px 0 0.02em #333, 9px 4px 0 0.02em, 10px 4px 0 0.02em #333,
        7px 5px 0 0.02em #333, 8px 5px 0 0.02em, 9px 5px 0 0.02em,
        10px 5px 0 0.02em #333, 7px 6px 0 0.02em #333, 8px 6px 0 0.02em,
        9px 6px 0 0.02em, 10px 6px 0 0.02em #333, 11px 6px 0 0.02em #333,
        12px 6px 0 0.02em #333, 13px 6px 0 0.02em #333, 14px 6px 0 0.02em #333,
        15px 6px 0 0.02em #333, 6px 7px 0 0.02em #333, 7px 7px 0 0.02em,
        8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em, 11px 7px 0 0.02em,
        12px 7px 0 0.02em, 13px 7px 0 0.02em, 14px 7px 0 0.02em,
        15px 7px 0 0.02em, 16px 7px 0 0.02em #333, 2px 8px 0 0.02em #333,
        3px 8px 0 0.02em #333, 4px 8px 0 0.02em #333, 6px 8px 0 0.02em #333,
        7px 8px 0 0.02em, 8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em,
        11px 8px 0 0.02em, 12px 8px 0 0.02em, 13px 8px 0 0.02em,
        14px 8px 0 0.02em, 15px 8px 0 0.02em, 16px 8px 0 0.02em #333,
        1px 9px 0 0.02em #333, 2px 9px 0 0.02em #2e77be,
        3px 9px 0 0.02em #2e77be, 4px 9px 0 0.02em #2e77be,
        5px 9px 0 0.02em #333, 6px 9px 0 0.02em, 7px 9px 0 0.02em,
        8px 9px 0 0.02em, 9px 9px 0 0.02em, 10px 9px 0 0.02em, 11px 9px 0 0.02em,
        12px 9px 0 0.02em, 13px 9px 0 0.02em, 14px 9px 0 0.02em,
        15px 9px 0 0.02em, 16px 9px 0 0.02em #333, 1px 10px 0 0.02em #333,
        2px 10px 0 0.02em #2e77be, 3px 10px 0 0.02em #2e77be,
        4px 10px 0 0.02em #2e77be, 5px 10px 0 0.02em #333, 6px 10px 0 0.02em,
        7px 10px 0 0.02em, 8px 10px 0 0.02em, 9px 10px 0 0.02em,
        10px 10px 0 0.02em, 11px 10px 0 0.02em, 12px 10px 0 0.02em,
        13px 10px 0 0.02em, 14px 10px 0 0.02em, 15px 10px 0 0.02em #333,
        1px 11px 0 0.02em #333, 2px 11px 0 0.02em #2e77be,
        3px 11px 0 0.02em #2e77be, 4px 11px 0 0.02em #2e77be,
        5px 11px 0 0.02em #333, 6px 11px 0 0.02em, 7px 11px 0 0.02em,
        8px 11px 0 0.02em, 9px 11px 0 0.02em, 10px 11px 0 0.02em,
        11px 11px 0 0.02em, 12px 11px 0 0.02em, 13px 11px 0 0.02em,
        14px 11px 0 0.02em, 15px 11px 0 0.02em #333, 1px 12px 0 0.02em #333,
        2px 12px 0 0.02em #2e77be, 3px 12px 0 0.02em #2e77be,
        4px 12px 0 0.02em #2e77be, 5px 12px 0 0.02em #333, 6px 12px 0 0.02em,
        7px 12px 0 0.02em, 8px 12px 0 0.02em, 9px 12px 0 0.02em,
        10px 12px 0 0.02em, 11px 12px 0 0.02em, 12px 12px 0 0.02em,
        13px 12px 0 0.02em, 14px 12px 0 0.02em, 15px 12px 0 0.02em #333,
        1px 13px 0 0.02em #333, 2px 13px 0 0.02em #2e77be,
        3px 13px 0 0.02em #2e77be, 4px 13px 0 0.02em #2e77be,
        5px 13px 0 0.02em #333, 6px 13px 0 0.02em, 7px 13px 0 0.02em,
        8px 13px 0 0.02em, 9px 13px 0 0.02em, 10px 13px 0 0.02em,
        11px 13px 0 0.02em, 12px 13px 0 0.02em, 13px 13px 0 0.02em,
        14px 13px 0 0.02em #333, 1px 14px 0 0.02em #333,
        2px 14px 0 0.02em #2e77be, 3px 14px 0 0.02em #2e77be,
        4px 14px 0 0.02em #2e77be, 5px 14px 0 0.02em #333, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 8px 14px 0 0.02em, 9px 14px 0 0.02em,
        10px 14px 0 0.02em, 11px 14px 0 0.02em, 12px 14px 0 0.02em,
        13px 14px 0 0.02em, 14px 14px 0 0.02em #333, 2px 15px 0 0.02em #333,
        3px 15px 0 0.02em #333, 4px 15px 0 0.02em #333, 6px 15px 0 0.02em #333,
        7px 15px 0 0.02em #333, 8px 15px 0 0.02em #333, 9px 15px 0 0.02em #333,
        10px 15px 0 0.02em #333, 11px 15px 0 0.02em #333,
        12px 15px 0 0.02em #333, 13px 15px 0 0.02em #333;
    }
  }

  .nes-icon.like.is-empty::before {
    width: 1px;
    height: 1px;
    color: #adafbb;
    box-shadow: 8px 2px, 9px 2px, 8px 3px, 10px 3px, 8px 4px, 10px 4px, 7px 5px,
      10px 5px, 7px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px,
      15px 6px, 6px 7px, 16px 7px, 2px 8px, 3px 8px, 4px 8px, 6px 8px, 16px 8px,
      1px 9px, 5px 9px, 16px 9px, 1px 10px, 5px 10px, 15px 10px, 1px 11px,
      5px 11px, 15px 11px, 1px 12px, 5px 12px, 15px 12px, 1px 13px, 5px 13px,
      14px 13px, 1px 14px, 5px 14px, 14px 14px, 2px 15px, 3px 15px, 4px 15px,
      6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px, 12px 15px,
      13px 15px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.like.is-empty::before {
      box-shadow: 8px 2px 0 0.02em, 9px 2px 0 0.02em, 8px 3px 0 0.02em,
        10px 3px 0 0.02em, 8px 4px 0 0.02em, 10px 4px 0 0.02em, 7px 5px 0 0.02em,
        10px 5px 0 0.02em, 7px 6px 0 0.02em, 10px 6px 0 0.02em,
        11px 6px 0 0.02em, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em, 15px 6px 0 0.02em, 6px 7px 0 0.02em,
        16px 7px 0 0.02em, 2px 8px 0 0.02em, 3px 8px 0 0.02em, 4px 8px 0 0.02em,
        6px 8px 0 0.02em, 16px 8px 0 0.02em, 1px 9px 0 0.02em, 5px 9px 0 0.02em,
        16px 9px 0 0.02em, 1px 10px 0 0.02em, 5px 10px 0 0.02em,
        15px 10px 0 0.02em, 1px 11px 0 0.02em, 5px 11px 0 0.02em,
        15px 11px 0 0.02em, 1px 12px 0 0.02em, 5px 12px 0 0.02em,
        15px 12px 0 0.02em, 1px 13px 0 0.02em, 5px 13px 0 0.02em,
        14px 13px 0 0.02em, 1px 14px 0 0.02em, 5px 14px 0 0.02em,
        14px 14px 0 0.02em, 2px 15px 0 0.02em, 3px 15px 0 0.02em,
        4px 15px 0 0.02em, 6px 15px 0 0.02em, 7px 15px 0 0.02em,
        8px 15px 0 0.02em, 9px 15px 0 0.02em, 10px 15px 0 0.02em,
        11px 15px 0 0.02em, 12px 15px 0 0.02em, 13px 15px 0 0.02em;
    }
  }

  .nes-icon.twitter::before {
    width: 1px;
    height: 1px;
    color: #2c9ceb;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px, 7px 2px, 8px 2px,
      9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px, 15px 2px,
      16px 2px, 1px 3px, 2px 3px #fff, 3px 3px, 4px 3px, 5px 3px, 6px 3px,
      7px 3px, 8px 3px, 9px 3px, 10px 3px #fff, 11px 3px #fff, 12px 3px #fff,
      13px 3px, 14px 3px, 15px 3px, 16px 3px, 1px 4px, 2px 4px #fff,
      3px 4px #fff, 4px 4px #fff, 5px 4px, 6px 4px, 7px 4px, 8px 4px,
      9px 4px #fff, 10px 4px #fff, 11px 4px #fff, 12px 4px #fff, 13px 4px #fff,
      14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px #fff, 3px 5px #fff,
      4px 5px #fff, 5px 5px #fff, 6px 5px #fff, 7px 5px, 8px 5px #fff,
      9px 5px #fff, 10px 5px #fff, 11px 5px #fff, 12px 5px #fff, 13px 5px #fff,
      14px 5px #fff, 15px 5px #fff, 16px 5px, 1px 6px, 2px 6px, 3px 6px #fff,
      4px 6px #fff, 5px 6px #fff, 6px 6px #fff, 7px 6px #fff, 8px 6px #fff,
      9px 6px #fff, 10px 6px #fff, 11px 6px #fff, 12px 6px #fff, 13px 6px #fff,
      14px 6px #fff, 15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff,
      4px 7px #fff, 5px 7px #fff, 6px 7px #fff, 7px 7px #fff, 8px 7px #fff,
      9px 7px #fff, 10px 7px #fff, 11px 7px #fff, 12px 7px #fff, 13px 7px #fff,
      14px 7px #fff, 15px 7px, 16px 7px, 1px 8px, 2px 8px, 3px 8px, 4px 8px #fff,
      5px 8px #fff, 6px 8px #fff, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
      10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff, 14px 8px,
      15px 8px, 16px 8px, 1px 9px, 2px 9px, 3px 9px, 4px 9px #fff, 5px 9px #fff,
      6px 9px #fff, 7px 9px #fff, 8px 9px #fff, 9px 9px #fff, 10px 9px #fff,
      11px 9px #fff, 12px 9px #fff, 13px 9px, 14px 9px, 15px 9px, 16px 9px,
      1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px #fff, 6px 10px #fff,
      7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff,
      11px 10px #fff, 12px 10px #fff, 13px 10px, 14px 10px, 15px 10px, 16px 10px,
      1px 11px, 2px 11px, 3px 11px, 4px 11px, 5px 11px, 6px 11px #fff,
      7px 11px #fff, 8px 11px #fff, 9px 11px #fff, 10px 11px #fff,
      11px 11px #fff, 12px 11px #fff, 13px 11px, 14px 11px, 15px 11px, 16px 11px,
      1px 12px, 2px 12px, 3px 12px, 4px 12px, 5px 12px #fff, 6px 12px #fff,
      7px 12px #fff, 8px 12px #fff, 9px 12px #fff, 10px 12px #fff,
      11px 12px #fff, 12px 12px, 13px 12px, 14px 12px, 15px 12px, 16px 12px,
      1px 13px, 2px 13px, 3px 13px #fff, 4px 13px #fff, 5px 13px #fff,
      6px 13px #fff, 7px 13px #fff, 8px 13px #fff, 9px 13px #fff, 10px 13px,
      11px 13px, 12px 13px, 13px 13px, 14px 13px, 15px 13px, 16px 13px, 1px 14px,
      2px 14px, 3px 14px, 4px 14px #fff, 5px 14px #fff, 6px 14px #fff, 7px 14px,
      8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px, 13px 14px, 14px 14px,
      15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px,
      6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px, 12px 15px,
      13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px, 4px 16px,
      5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px,
      12px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.twitter::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
        8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em, 11px 2px 0 0.02em,
        12px 2px 0 0.02em, 13px 2px 0 0.02em, 14px 2px 0 0.02em,
        15px 2px 0 0.02em, 16px 2px 0 0.02em, 1px 3px 0 0.02em,
        2px 3px 0 0.02em #fff, 3px 3px 0 0.02em, 4px 3px 0 0.02em,
        5px 3px 0 0.02em, 6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em,
        9px 3px 0 0.02em, 10px 3px 0 0.02em #fff, 11px 3px 0 0.02em #fff,
        12px 3px 0 0.02em #fff, 13px 3px 0 0.02em, 14px 3px 0 0.02em,
        15px 3px 0 0.02em, 16px 3px 0 0.02em, 1px 4px 0 0.02em,
        2px 4px 0 0.02em #fff, 3px 4px 0 0.02em #fff, 4px 4px 0 0.02em #fff,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em, 8px 4px 0 0.02em,
        9px 4px 0 0.02em #fff, 10px 4px 0 0.02em #fff, 11px 4px 0 0.02em #fff,
        12px 4px 0 0.02em #fff, 13px 4px 0 0.02em #fff, 14px 4px 0 0.02em,
        15px 4px 0 0.02em, 16px 4px 0 0.02em, 1px 5px 0 0.02em,
        2px 5px 0 0.02em #fff, 3px 5px 0 0.02em #fff, 4px 5px 0 0.02em #fff,
        5px 5px 0 0.02em #fff, 6px 5px 0 0.02em #fff, 7px 5px 0 0.02em,
        8px 5px 0 0.02em #fff, 9px 5px 0 0.02em #fff, 10px 5px 0 0.02em #fff,
        11px 5px 0 0.02em #fff, 12px 5px 0 0.02em #fff, 13px 5px 0 0.02em #fff,
        14px 5px 0 0.02em #fff, 15px 5px 0 0.02em #fff, 16px 5px 0 0.02em,
        1px 6px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em #fff,
        4px 6px 0 0.02em #fff, 5px 6px 0 0.02em #fff, 6px 6px 0 0.02em #fff,
        7px 6px 0 0.02em #fff, 8px 6px 0 0.02em #fff, 9px 6px 0 0.02em #fff,
        10px 6px 0 0.02em #fff, 11px 6px 0 0.02em #fff, 12px 6px 0 0.02em #fff,
        13px 6px 0 0.02em #fff, 14px 6px 0 0.02em #fff, 15px 6px 0 0.02em,
        16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em,
        3px 7px 0 0.02em #fff, 4px 7px 0 0.02em #fff, 5px 7px 0 0.02em #fff,
        6px 7px 0 0.02em #fff, 7px 7px 0 0.02em #fff, 8px 7px 0 0.02em #fff,
        9px 7px 0 0.02em #fff, 10px 7px 0 0.02em #fff, 11px 7px 0 0.02em #fff,
        12px 7px 0 0.02em #fff, 13px 7px 0 0.02em #fff, 14px 7px 0 0.02em #fff,
        15px 7px 0 0.02em, 16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em,
        3px 8px 0 0.02em, 4px 8px 0 0.02em #fff, 5px 8px 0 0.02em #fff,
        6px 8px 0 0.02em #fff, 7px 8px 0 0.02em #fff, 8px 8px 0 0.02em #fff,
        9px 8px 0 0.02em #fff, 10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff,
        12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff, 14px 8px 0 0.02em,
        15px 8px 0 0.02em, 16px 8px 0 0.02em, 1px 9px 0 0.02em, 2px 9px 0 0.02em,
        3px 9px 0 0.02em, 4px 9px 0 0.02em #fff, 5px 9px 0 0.02em #fff,
        6px 9px 0 0.02em #fff, 7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff,
        9px 9px 0 0.02em #fff, 10px 9px 0 0.02em #fff, 11px 9px 0 0.02em #fff,
        12px 9px 0 0.02em #fff, 13px 9px 0 0.02em, 14px 9px 0 0.02em,
        15px 9px 0 0.02em, 16px 9px 0 0.02em, 1px 10px 0 0.02em,
        2px 10px 0 0.02em, 3px 10px 0 0.02em, 4px 10px 0 0.02em,
        5px 10px 0 0.02em #fff, 6px 10px 0 0.02em #fff, 7px 10px 0 0.02em #fff,
        8px 10px 0 0.02em #fff, 9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff,
        11px 10px 0 0.02em #fff, 12px 10px 0 0.02em #fff, 13px 10px 0 0.02em,
        14px 10px 0 0.02em, 15px 10px 0 0.02em, 16px 10px 0 0.02em,
        1px 11px 0 0.02em, 2px 11px 0 0.02em, 3px 11px 0 0.02em,
        4px 11px 0 0.02em, 5px 11px 0 0.02em, 6px 11px 0 0.02em #fff,
        7px 11px 0 0.02em #fff, 8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff,
        10px 11px 0 0.02em #fff, 11px 11px 0 0.02em #fff,
        12px 11px 0 0.02em #fff, 13px 11px 0 0.02em, 14px 11px 0 0.02em,
        15px 11px 0 0.02em, 16px 11px 0 0.02em, 1px 12px 0 0.02em,
        2px 12px 0 0.02em, 3px 12px 0 0.02em, 4px 12px 0 0.02em,
        5px 12px 0 0.02em #fff, 6px 12px 0 0.02em #fff, 7px 12px 0 0.02em #fff,
        8px 12px 0 0.02em #fff, 9px 12px 0 0.02em #fff, 10px 12px 0 0.02em #fff,
        11px 12px 0 0.02em #fff, 12px 12px 0 0.02em, 13px 12px 0 0.02em,
        14px 12px 0 0.02em, 15px 12px 0 0.02em, 16px 12px 0 0.02em,
        1px 13px 0 0.02em, 2px 13px 0 0.02em, 3px 13px 0 0.02em #fff,
        4px 13px 0 0.02em #fff, 5px 13px 0 0.02em #fff, 6px 13px 0 0.02em #fff,
        7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #fff, 9px 13px 0 0.02em #fff,
        10px 13px 0 0.02em, 11px 13px 0 0.02em, 12px 13px 0 0.02em,
        13px 13px 0 0.02em, 14px 13px 0 0.02em, 15px 13px 0 0.02em,
        16px 13px 0 0.02em, 1px 14px 0 0.02em, 2px 14px 0 0.02em,
        3px 14px 0 0.02em, 4px 14px 0 0.02em #fff, 5px 14px 0 0.02em #fff,
        6px 14px 0 0.02em #fff, 7px 14px 0 0.02em, 8px 14px 0 0.02em,
        9px 14px 0 0.02em, 10px 14px 0 0.02em, 11px 14px 0 0.02em,
        12px 14px 0 0.02em, 13px 14px 0 0.02em, 14px 14px 0 0.02em,
        15px 14px 0 0.02em, 16px 14px 0 0.02em, 1px 15px 0 0.02em,
        2px 15px 0 0.02em, 3px 15px 0 0.02em, 4px 15px 0 0.02em,
        5px 15px 0 0.02em, 6px 15px 0 0.02em, 7px 15px 0 0.02em,
        8px 15px 0 0.02em, 9px 15px 0 0.02em, 10px 15px 0 0.02em,
        11px 15px 0 0.02em, 12px 15px 0 0.02em, 13px 15px 0 0.02em,
        14px 15px 0 0.02em, 15px 15px 0 0.02em, 16px 15px 0 0.02em,
        2px 16px 0 0.02em, 3px 16px 0 0.02em, 4px 16px 0 0.02em,
        5px 16px 0 0.02em, 6px 16px 0 0.02em, 7px 16px 0 0.02em,
        8px 16px 0 0.02em, 9px 16px 0 0.02em, 10px 16px 0 0.02em,
        11px 16px 0 0.02em, 12px 16px 0 0.02em, 13px 16px 0 0.02em,
        14px 16px 0 0.02em, 15px 16px 0 0.02em;
    }
  }

  .nes-icon.facebook::before {
    width: 1px;
    height: 1px;
    color: #4566ae;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px, 7px 2px, 8px 2px,
      9px 2px, 10px 2px, 11px 2px #fff, 12px 2px #fff, 13px 2px #fff,
      14px 2px #fff, 15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px,
      5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px #fff, 11px 3px #fff,
      12px 3px #fff, 13px 3px #fff, 14px 3px #fff, 15px 3px, 16px 3px, 1px 4px,
      2px 4px, 3px 4px, 4px 4px, 5px 4px, 6px 4px, 7px 4px, 8px 4px,
      9px 4px #fff, 10px 4px #fff, 11px 4px #fff, 12px 4px #fff, 13px 4px #fff,
      14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px, 4px 5px,
      5px 5px, 6px 5px, 7px 5px, 8px 5px, 9px 5px #fff, 10px 5px #fff,
      11px 5px #fff, 12px 5px, 13px 5px, 14px 5px, 15px 5px, 16px 5px, 1px 6px,
      2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px, 8px 6px,
      9px 6px #fff, 10px 6px #fff, 11px 6px #fff, 12px 6px, 13px 6px, 14px 6px,
      15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px, 4px 7px, 5px 7px, 6px 7px,
      7px 7px, 8px 7px, 9px 7px #fff, 10px 7px #fff, 11px 7px #fff, 12px 7px,
      13px 7px, 14px 7px, 15px 7px, 16px 7px, 1px 8px, 2px 8px, 3px 8px, 4px 8px,
      5px 8px, 6px 8px #fff, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
      10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff, 14px 8px #fff,
      15px 8px, 16px 8px, 1px 9px, 2px 9px, 3px 9px, 4px 9px, 5px 9px,
      6px 9px #fff, 7px 9px #fff, 8px 9px #fff, 9px 9px #fff, 10px 9px #fff,
      11px 9px #fff, 12px 9px #fff, 13px 9px #fff, 14px 9px #fff, 15px 9px,
      16px 9px, 1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px, 6px 10px #fff,
      7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff,
      11px 10px #fff, 12px 10px #fff, 13px 10px #fff, 14px 10px #fff, 15px 10px,
      16px 10px, 1px 11px, 2px 11px, 3px 11px, 4px 11px, 5px 11px, 6px 11px,
      7px 11px, 8px 11px, 9px 11px #fff, 10px 11px #fff, 11px 11px #fff,
      12px 11px, 13px 11px, 14px 11px, 15px 11px, 16px 11px, 1px 12px, 2px 12px,
      3px 12px, 4px 12px, 5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px #fff,
      10px 12px #fff, 11px 12px #fff, 12px 12px, 13px 12px, 14px 12px, 15px 12px,
      16px 12px, 1px 13px, 2px 13px, 3px 13px, 4px 13px, 5px 13px, 6px 13px,
      7px 13px, 8px 13px, 9px 13px #fff, 10px 13px #fff, 11px 13px #fff,
      12px 13px, 13px 13px, 14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px,
      3px 14px, 4px 14px, 5px 14px, 6px 14px, 7px 14px, 8px 14px, 9px 14px #fff,
      10px 14px #fff, 11px 14px #fff, 12px 14px, 13px 14px, 14px 14px, 15px 14px,
      16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px,
      7px 15px, 8px 15px, 9px 15px #fff, 10px 15px #fff, 11px 15px #fff,
      12px 15px, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px,
      4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px #fff,
      10px 16px #fff, 11px 16px #fff, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.facebook::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
        8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em,
        11px 2px 0 0.02em #fff, 12px 2px 0 0.02em #fff, 13px 2px 0 0.02em #fff,
        14px 2px 0 0.02em #fff, 15px 2px 0 0.02em, 16px 2px 0 0.02em,
        1px 3px 0 0.02em, 2px 3px 0 0.02em, 3px 3px 0 0.02em, 4px 3px 0 0.02em,
        5px 3px 0 0.02em, 6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em,
        9px 3px 0 0.02em, 10px 3px 0 0.02em #fff, 11px 3px 0 0.02em #fff,
        12px 3px 0 0.02em #fff, 13px 3px 0 0.02em #fff, 14px 3px 0 0.02em #fff,
        15px 3px 0 0.02em, 16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
        3px 4px 0 0.02em, 4px 4px 0 0.02em, 5px 4px 0 0.02em, 6px 4px 0 0.02em,
        7px 4px 0 0.02em, 8px 4px 0 0.02em, 9px 4px 0 0.02em #fff,
        10px 4px 0 0.02em #fff, 11px 4px 0 0.02em #fff, 12px 4px 0 0.02em #fff,
        13px 4px 0 0.02em #fff, 14px 4px 0 0.02em #fff, 15px 4px 0 0.02em,
        16px 4px 0 0.02em, 1px 5px 0 0.02em, 2px 5px 0 0.02em, 3px 5px 0 0.02em,
        4px 5px 0 0.02em, 5px 5px 0 0.02em, 6px 5px 0 0.02em, 7px 5px 0 0.02em,
        8px 5px 0 0.02em, 9px 5px 0 0.02em #fff, 10px 5px 0 0.02em #fff,
        11px 5px 0 0.02em #fff, 12px 5px 0 0.02em, 13px 5px 0 0.02em,
        14px 5px 0 0.02em, 15px 5px 0 0.02em, 16px 5px 0 0.02em,
        1px 6px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em, 4px 6px 0 0.02em,
        5px 6px 0 0.02em, 6px 6px 0 0.02em, 7px 6px 0 0.02em, 8px 6px 0 0.02em,
        9px 6px 0 0.02em #fff, 10px 6px 0 0.02em #fff, 11px 6px 0 0.02em #fff,
        12px 6px 0 0.02em, 13px 6px 0 0.02em, 14px 6px 0 0.02em,
        15px 6px 0 0.02em, 16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em,
        3px 7px 0 0.02em, 4px 7px 0 0.02em, 5px 7px 0 0.02em, 6px 7px 0 0.02em,
        7px 7px 0 0.02em, 8px 7px 0 0.02em, 9px 7px 0 0.02em #fff,
        10px 7px 0 0.02em #fff, 11px 7px 0 0.02em #fff, 12px 7px 0 0.02em,
        13px 7px 0 0.02em, 14px 7px 0 0.02em, 15px 7px 0 0.02em,
        16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em #fff,
        7px 8px 0 0.02em #fff, 8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff,
        10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff, 12px 8px 0 0.02em #fff,
        13px 8px 0 0.02em #fff, 14px 8px 0 0.02em #fff, 15px 8px 0 0.02em,
        16px 8px 0 0.02em, 1px 9px 0 0.02em, 2px 9px 0 0.02em, 3px 9px 0 0.02em,
        4px 9px 0 0.02em, 5px 9px 0 0.02em, 6px 9px 0 0.02em #fff,
        7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff, 9px 9px 0 0.02em #fff,
        10px 9px 0 0.02em #fff, 11px 9px 0 0.02em #fff, 12px 9px 0 0.02em #fff,
        13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff, 15px 9px 0 0.02em,
        16px 9px 0 0.02em, 1px 10px 0 0.02em, 2px 10px 0 0.02em,
        3px 10px 0 0.02em, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em #fff, 7px 10px 0 0.02em #fff, 8px 10px 0 0.02em #fff,
        9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff, 11px 10px 0 0.02em #fff,
        12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff,
        14px 10px 0 0.02em #fff, 15px 10px 0 0.02em, 16px 10px 0 0.02em,
        1px 11px 0 0.02em, 2px 11px 0 0.02em, 3px 11px 0 0.02em,
        4px 11px 0 0.02em, 5px 11px 0 0.02em, 6px 11px 0 0.02em,
        7px 11px 0 0.02em, 8px 11px 0 0.02em, 9px 11px 0 0.02em #fff,
        10px 11px 0 0.02em #fff, 11px 11px 0 0.02em #fff, 12px 11px 0 0.02em,
        13px 11px 0 0.02em, 14px 11px 0 0.02em, 15px 11px 0 0.02em,
        16px 11px 0 0.02em, 1px 12px 0 0.02em, 2px 12px 0 0.02em,
        3px 12px 0 0.02em, 4px 12px 0 0.02em, 5px 12px 0 0.02em,
        6px 12px 0 0.02em, 7px 12px 0 0.02em, 8px 12px 0 0.02em,
        9px 12px 0 0.02em #fff, 10px 12px 0 0.02em #fff, 11px 12px 0 0.02em #fff,
        12px 12px 0 0.02em, 13px 12px 0 0.02em, 14px 12px 0 0.02em,
        15px 12px 0 0.02em, 16px 12px 0 0.02em, 1px 13px 0 0.02em,
        2px 13px 0 0.02em, 3px 13px 0 0.02em, 4px 13px 0 0.02em,
        5px 13px 0 0.02em, 6px 13px 0 0.02em, 7px 13px 0 0.02em,
        8px 13px 0 0.02em, 9px 13px 0 0.02em #fff, 10px 13px 0 0.02em #fff,
        11px 13px 0 0.02em #fff, 12px 13px 0 0.02em, 13px 13px 0 0.02em,
        14px 13px 0 0.02em, 15px 13px 0 0.02em, 16px 13px 0 0.02em,
        1px 14px 0 0.02em, 2px 14px 0 0.02em, 3px 14px 0 0.02em,
        4px 14px 0 0.02em, 5px 14px 0 0.02em, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 8px 14px 0 0.02em, 9px 14px 0 0.02em #fff,
        10px 14px 0 0.02em #fff, 11px 14px 0 0.02em #fff, 12px 14px 0 0.02em,
        13px 14px 0 0.02em, 14px 14px 0 0.02em, 15px 14px 0 0.02em,
        16px 14px 0 0.02em, 1px 15px 0 0.02em, 2px 15px 0 0.02em,
        3px 15px 0 0.02em, 4px 15px 0 0.02em, 5px 15px 0 0.02em,
        6px 15px 0 0.02em, 7px 15px 0 0.02em, 8px 15px 0 0.02em,
        9px 15px 0 0.02em #fff, 10px 15px 0 0.02em #fff, 11px 15px 0 0.02em #fff,
        12px 15px 0 0.02em, 13px 15px 0 0.02em, 14px 15px 0 0.02em,
        15px 15px 0 0.02em, 16px 15px 0 0.02em, 2px 16px 0 0.02em,
        3px 16px 0 0.02em, 4px 16px 0 0.02em, 5px 16px 0 0.02em,
        6px 16px 0 0.02em, 7px 16px 0 0.02em, 8px 16px 0 0.02em,
        9px 16px 0 0.02em #fff, 10px 16px 0 0.02em #fff, 11px 16px 0 0.02em #fff,
        12px 16px 0 0.02em, 13px 16px 0 0.02em, 14px 16px 0 0.02em,
        15px 16px 0 0.02em;
    }
  }

  .nes-icon.github::before {
    width: 1px;
    height: 1px;
    color: #333;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px #fff, 6px 2px, 7px 2px,
      8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px #fff,
      15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px, 5px 3px #fff,
      6px 3px #fff, 7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px,
      13px 3px #fff, 14px 3px #fff, 15px 3px, 16px 3px, 1px 4px, 2px 4px,
      3px 4px, 4px 4px, 5px 4px #fff, 6px 4px #fff, 7px 4px #fff, 8px 4px #fff,
      9px 4px #fff, 10px 4px #fff, 11px 4px #fff, 12px 4px #fff, 13px 4px #fff,
      14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px, 4px 5px #fff,
      5px 5px #fff, 6px 5px #fff, 7px 5px #fff, 8px 5px #fff, 9px 5px #fff,
      10px 5px #fff, 11px 5px #fff, 12px 5px #fff, 13px 5px #fff, 14px 5px #fff,
      15px 5px #fff, 16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px #fff,
      5px 6px #fff, 6px 6px #fff, 7px 6px #fff, 8px 6px #fff, 9px 6px #fff,
      10px 6px #fff, 11px 6px #fff, 12px 6px #fff, 13px 6px #fff, 14px 6px #fff,
      15px 6px #fff, 16px 6px, 1px 7px, 2px 7px, 3px 7px, 4px 7px #fff,
      5px 7px #fff, 6px 7px #fff, 7px 7px #fff, 8px 7px #fff, 9px 7px #fff,
      10px 7px #fff, 11px 7px #fff, 12px 7px #fff, 13px 7px #fff, 14px 7px #fff,
      15px 7px #fff, 16px 7px, 1px 8px, 2px 8px, 3px 8px, 4px 8px #fff,
      5px 8px #fff, 6px 8px #fff, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
      10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff, 14px 8px #fff,
      15px 8px #fff, 16px 8px, 1px 9px, 2px 9px, 3px 9px, 4px 9px, 5px 9px #fff,
      6px 9px #fff, 7px 9px #fff, 8px 9px #fff, 9px 9px #fff, 10px 9px #fff,
      11px 9px #fff, 12px 9px #fff, 13px 9px #fff, 14px 9px #fff, 15px 9px,
      16px 9px, 1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px, 6px 10px #fff,
      7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff,
      11px 10px #fff, 12px 10px #fff, 13px 10px #fff, 14px 10px, 15px 10px,
      16px 10px, 1px 11px, 2px 11px #fff, 3px 11px #fff, 4px 11px, 5px 11px,
      6px 11px, 7px 11px, 8px 11px #fff, 9px 11px #fff, 10px 11px #fff,
      11px 11px #fff, 12px 11px, 13px 11px, 14px 11px, 15px 11px, 16px 11px,
      1px 12px, 2px 12px, 3px 12px, 4px 12px #fff, 5px 12px, 6px 12px,
      7px 12px #fff, 8px 12px #fff, 9px 12px #fff, 10px 12px #fff,
      11px 12px #fff, 12px 12px #fff, 13px 12px, 14px 12px, 15px 12px, 16px 12px,
      1px 13px, 2px 13px, 3px 13px, 4px 13px, 5px 13px #fff, 6px 13px #fff,
      7px 13px #fff, 8px 13px #fff, 9px 13px #fff, 10px 13px #fff,
      11px 13px #fff, 12px 13px #fff, 13px 13px, 14px 13px, 15px 13px, 16px 13px,
      1px 14px, 2px 14px, 3px 14px, 4px 14px, 5px 14px, 6px 14px, 7px 14px #fff,
      8px 14px #fff, 9px 14px #fff, 10px 14px #fff, 11px 14px #fff,
      12px 14px #fff, 13px 14px, 14px 14px, 15px 14px, 16px 14px, 1px 15px,
      2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px #fff,
      8px 15px #fff, 9px 15px #fff, 10px 15px #fff, 11px 15px #fff,
      12px 15px #fff, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px,
      3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px,
      10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.github::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em #fff, 6px 2px 0 0.02em,
        7px 2px 0 0.02em, 8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em,
        11px 2px 0 0.02em, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
        14px 2px 0 0.02em #fff, 15px 2px 0 0.02em, 16px 2px 0 0.02em,
        1px 3px 0 0.02em, 2px 3px 0 0.02em, 3px 3px 0 0.02em, 4px 3px 0 0.02em,
        5px 3px 0 0.02em #fff, 6px 3px 0 0.02em #fff, 7px 3px 0 0.02em,
        8px 3px 0 0.02em, 9px 3px 0 0.02em, 10px 3px 0 0.02em, 11px 3px 0 0.02em,
        12px 3px 0 0.02em, 13px 3px 0 0.02em #fff, 14px 3px 0 0.02em #fff,
        15px 3px 0 0.02em, 16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
        3px 4px 0 0.02em, 4px 4px 0 0.02em, 5px 4px 0 0.02em #fff,
        6px 4px 0 0.02em #fff, 7px 4px 0 0.02em #fff, 8px 4px 0 0.02em #fff,
        9px 4px 0 0.02em #fff, 10px 4px 0 0.02em #fff, 11px 4px 0 0.02em #fff,
        12px 4px 0 0.02em #fff, 13px 4px 0 0.02em #fff, 14px 4px 0 0.02em #fff,
        15px 4px 0 0.02em, 16px 4px 0 0.02em, 1px 5px 0 0.02em, 2px 5px 0 0.02em,
        3px 5px 0 0.02em, 4px 5px 0 0.02em #fff, 5px 5px 0 0.02em #fff,
        6px 5px 0 0.02em #fff, 7px 5px 0 0.02em #fff, 8px 5px 0 0.02em #fff,
        9px 5px 0 0.02em #fff, 10px 5px 0 0.02em #fff, 11px 5px 0 0.02em #fff,
        12px 5px 0 0.02em #fff, 13px 5px 0 0.02em #fff, 14px 5px 0 0.02em #fff,
        15px 5px 0 0.02em #fff, 16px 5px 0 0.02em, 1px 6px 0 0.02em,
        2px 6px 0 0.02em, 3px 6px 0 0.02em, 4px 6px 0 0.02em #fff,
        5px 6px 0 0.02em #fff, 6px 6px 0 0.02em #fff, 7px 6px 0 0.02em #fff,
        8px 6px 0 0.02em #fff, 9px 6px 0 0.02em #fff, 10px 6px 0 0.02em #fff,
        11px 6px 0 0.02em #fff, 12px 6px 0 0.02em #fff, 13px 6px 0 0.02em #fff,
        14px 6px 0 0.02em #fff, 15px 6px 0 0.02em #fff, 16px 6px 0 0.02em,
        1px 7px 0 0.02em, 2px 7px 0 0.02em, 3px 7px 0 0.02em,
        4px 7px 0 0.02em #fff, 5px 7px 0 0.02em #fff, 6px 7px 0 0.02em #fff,
        7px 7px 0 0.02em #fff, 8px 7px 0 0.02em #fff, 9px 7px 0 0.02em #fff,
        10px 7px 0 0.02em #fff, 11px 7px 0 0.02em #fff, 12px 7px 0 0.02em #fff,
        13px 7px 0 0.02em #fff, 14px 7px 0 0.02em #fff, 15px 7px 0 0.02em #fff,
        16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em, 3px 8px 0 0.02em,
        4px 8px 0 0.02em #fff, 5px 8px 0 0.02em #fff, 6px 8px 0 0.02em #fff,
        7px 8px 0 0.02em #fff, 8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff,
        10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff, 12px 8px 0 0.02em #fff,
        13px 8px 0 0.02em #fff, 14px 8px 0 0.02em #fff, 15px 8px 0 0.02em #fff,
        16px 8px 0 0.02em, 1px 9px 0 0.02em, 2px 9px 0 0.02em, 3px 9px 0 0.02em,
        4px 9px 0 0.02em, 5px 9px 0 0.02em #fff, 6px 9px 0 0.02em #fff,
        7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff, 9px 9px 0 0.02em #fff,
        10px 9px 0 0.02em #fff, 11px 9px 0 0.02em #fff, 12px 9px 0 0.02em #fff,
        13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff, 15px 9px 0 0.02em,
        16px 9px 0 0.02em, 1px 10px 0 0.02em, 2px 10px 0 0.02em,
        3px 10px 0 0.02em, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em #fff, 7px 10px 0 0.02em #fff, 8px 10px 0 0.02em #fff,
        9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff, 11px 10px 0 0.02em #fff,
        12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff, 14px 10px 0 0.02em,
        15px 10px 0 0.02em, 16px 10px 0 0.02em, 1px 11px 0 0.02em,
        2px 11px 0 0.02em #fff, 3px 11px 0 0.02em #fff, 4px 11px 0 0.02em,
        5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em,
        8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff, 10px 11px 0 0.02em #fff,
        11px 11px 0 0.02em #fff, 12px 11px 0 0.02em, 13px 11px 0 0.02em,
        14px 11px 0 0.02em, 15px 11px 0 0.02em, 16px 11px 0 0.02em,
        1px 12px 0 0.02em, 2px 12px 0 0.02em, 3px 12px 0 0.02em,
        4px 12px 0 0.02em #fff, 5px 12px 0 0.02em, 6px 12px 0 0.02em,
        7px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff, 9px 12px 0 0.02em #fff,
        10px 12px 0 0.02em #fff, 11px 12px 0 0.02em #fff,
        12px 12px 0 0.02em #fff, 13px 12px 0 0.02em, 14px 12px 0 0.02em,
        15px 12px 0 0.02em, 16px 12px 0 0.02em, 1px 13px 0 0.02em,
        2px 13px 0 0.02em, 3px 13px 0 0.02em, 4px 13px 0 0.02em,
        5px 13px 0 0.02em #fff, 6px 13px 0 0.02em #fff, 7px 13px 0 0.02em #fff,
        8px 13px 0 0.02em #fff, 9px 13px 0 0.02em #fff, 10px 13px 0 0.02em #fff,
        11px 13px 0 0.02em #fff, 12px 13px 0 0.02em #fff, 13px 13px 0 0.02em,
        14px 13px 0 0.02em, 15px 13px 0 0.02em, 16px 13px 0 0.02em,
        1px 14px 0 0.02em, 2px 14px 0 0.02em, 3px 14px 0 0.02em,
        4px 14px 0 0.02em, 5px 14px 0 0.02em, 6px 14px 0 0.02em,
        7px 14px 0 0.02em #fff, 8px 14px 0 0.02em #fff, 9px 14px 0 0.02em #fff,
        10px 14px 0 0.02em #fff, 11px 14px 0 0.02em #fff,
        12px 14px 0 0.02em #fff, 13px 14px 0 0.02em, 14px 14px 0 0.02em,
        15px 14px 0 0.02em, 16px 14px 0 0.02em, 1px 15px 0 0.02em,
        2px 15px 0 0.02em, 3px 15px 0 0.02em, 4px 15px 0 0.02em,
        5px 15px 0 0.02em, 6px 15px 0 0.02em, 7px 15px 0 0.02em #fff,
        8px 15px 0 0.02em #fff, 9px 15px 0 0.02em #fff, 10px 15px 0 0.02em #fff,
        11px 15px 0 0.02em #fff, 12px 15px 0 0.02em #fff, 13px 15px 0 0.02em,
        14px 15px 0 0.02em, 15px 15px 0 0.02em, 16px 15px 0 0.02em,
        2px 16px 0 0.02em, 3px 16px 0 0.02em, 4px 16px 0 0.02em,
        5px 16px 0 0.02em, 6px 16px 0 0.02em, 7px 16px 0 0.02em,
        8px 16px 0 0.02em, 9px 16px 0 0.02em, 10px 16px 0 0.02em,
        11px 16px 0 0.02em, 12px 16px 0 0.02em, 13px 16px 0 0.02em,
        14px 16px 0 0.02em, 15px 16px 0 0.02em;
    }
  }

  .nes-icon.youtube::before {
    width: 1px;
    height: 1px;
    color: #f00;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px, 7px 2px, 8px 2px,
      9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px, 15px 2px,
      16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px,
      8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px,
      15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px, 4px 4px, 5px 4px, 6px 4px,
      7px 4px #fff, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px, 13px 4px,
      14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px, 4px 5px, 5px 5px,
      6px 5px, 7px 5px #fff, 8px 5px #fff, 9px 5px, 10px 5px, 11px 5px, 12px 5px,
      13px 5px, 14px 5px, 15px 5px, 16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px,
      5px 6px, 6px 6px, 7px 6px #fff, 8px 6px #fff, 9px 6px #fff, 10px 6px,
      11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px, 16px 6px, 1px 7px,
      2px 7px, 3px 7px, 4px 7px, 5px 7px, 6px 7px, 7px 7px #fff, 8px 7px #fff,
      9px 7px #fff, 10px 7px #fff, 11px 7px, 12px 7px, 13px 7px, 14px 7px,
      15px 7px, 16px 7px, 1px 8px, 2px 8px, 3px 8px, 4px 8px, 5px 8px, 6px 8px,
      7px 8px #fff, 8px 8px #fff, 9px 8px #fff, 10px 8px #fff, 11px 8px #fff,
      12px 8px, 13px 8px, 14px 8px, 15px 8px, 16px 8px, 1px 9px, 2px 9px,
      3px 9px, 4px 9px, 5px 9px, 6px 9px, 7px 9px #fff, 8px 9px #fff,
      9px 9px #fff, 10px 9px #fff, 11px 9px, 12px 9px, 13px 9px, 14px 9px,
      15px 9px, 16px 9px, 1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px,
      6px 10px, 7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px,
      11px 10px, 12px 10px, 13px 10px, 14px 10px, 15px 10px, 16px 10px, 1px 11px,
      2px 11px, 3px 11px, 4px 11px, 5px 11px, 6px 11px, 7px 11px #fff,
      8px 11px #fff, 9px 11px, 10px 11px, 11px 11px, 12px 11px, 13px 11px,
      14px 11px, 15px 11px, 16px 11px, 1px 12px, 2px 12px, 3px 12px, 4px 12px,
      5px 12px, 6px 12px, 7px 12px #fff, 8px 12px, 9px 12px, 10px 12px,
      11px 12px, 12px 12px, 13px 12px, 14px 12px, 15px 12px, 16px 12px, 1px 13px,
      2px 13px, 3px 13px, 4px 13px, 5px 13px, 6px 13px, 7px 13px, 8px 13px,
      9px 13px, 10px 13px, 11px 13px, 12px 13px, 13px 13px, 14px 13px, 15px 13px,
      16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px, 5px 14px, 6px 14px,
      7px 14px, 8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px, 13px 14px,
      14px 14px, 15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px,
      5px 15px, 6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px,
      12px 15px, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px,
      4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px,
      11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.youtube::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
        8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em, 11px 2px 0 0.02em,
        12px 2px 0 0.02em, 13px 2px 0 0.02em, 14px 2px 0 0.02em,
        15px 2px 0 0.02em, 16px 2px 0 0.02em, 1px 3px 0 0.02em, 2px 3px 0 0.02em,
        3px 3px 0 0.02em, 4px 3px 0 0.02em, 5px 3px 0 0.02em, 6px 3px 0 0.02em,
        7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em, 10px 3px 0 0.02em,
        11px 3px 0 0.02em, 12px 3px 0 0.02em, 13px 3px 0 0.02em,
        14px 3px 0 0.02em, 15px 3px 0 0.02em, 16px 3px 0 0.02em,
        1px 4px 0 0.02em, 2px 4px 0 0.02em, 3px 4px 0 0.02em, 4px 4px 0 0.02em,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em #fff,
        8px 4px 0 0.02em, 9px 4px 0 0.02em, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em, 13px 4px 0 0.02em, 14px 4px 0 0.02em,
        15px 4px 0 0.02em, 16px 4px 0 0.02em, 1px 5px 0 0.02em, 2px 5px 0 0.02em,
        3px 5px 0 0.02em, 4px 5px 0 0.02em, 5px 5px 0 0.02em, 6px 5px 0 0.02em,
        7px 5px 0 0.02em #fff, 8px 5px 0 0.02em #fff, 9px 5px 0 0.02em,
        10px 5px 0 0.02em, 11px 5px 0 0.02em, 12px 5px 0 0.02em,
        13px 5px 0 0.02em, 14px 5px 0 0.02em, 15px 5px 0 0.02em,
        16px 5px 0 0.02em, 1px 6px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em,
        4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em,
        7px 6px 0 0.02em #fff, 8px 6px 0 0.02em #fff, 9px 6px 0 0.02em #fff,
        10px 6px 0 0.02em, 11px 6px 0 0.02em, 12px 6px 0 0.02em,
        13px 6px 0 0.02em, 14px 6px 0 0.02em, 15px 6px 0 0.02em,
        16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em, 3px 7px 0 0.02em,
        4px 7px 0 0.02em, 5px 7px 0 0.02em, 6px 7px 0 0.02em,
        7px 7px 0 0.02em #fff, 8px 7px 0 0.02em #fff, 9px 7px 0 0.02em #fff,
        10px 7px 0 0.02em #fff, 11px 7px 0 0.02em, 12px 7px 0 0.02em,
        13px 7px 0 0.02em, 14px 7px 0 0.02em, 15px 7px 0 0.02em,
        16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em,
        7px 8px 0 0.02em #fff, 8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff,
        10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff, 12px 8px 0 0.02em,
        13px 8px 0 0.02em, 14px 8px 0 0.02em, 15px 8px 0 0.02em,
        16px 8px 0 0.02em, 1px 9px 0 0.02em, 2px 9px 0 0.02em, 3px 9px 0 0.02em,
        4px 9px 0 0.02em, 5px 9px 0 0.02em, 6px 9px 0 0.02em,
        7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff, 9px 9px 0 0.02em #fff,
        10px 9px 0 0.02em #fff, 11px 9px 0 0.02em, 12px 9px 0 0.02em,
        13px 9px 0 0.02em, 14px 9px 0 0.02em, 15px 9px 0 0.02em,
        16px 9px 0 0.02em, 1px 10px 0 0.02em, 2px 10px 0 0.02em,
        3px 10px 0 0.02em, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em, 7px 10px 0 0.02em #fff, 8px 10px 0 0.02em #fff,
        9px 10px 0 0.02em #fff, 10px 10px 0 0.02em, 11px 10px 0 0.02em,
        12px 10px 0 0.02em, 13px 10px 0 0.02em, 14px 10px 0 0.02em,
        15px 10px 0 0.02em, 16px 10px 0 0.02em, 1px 11px 0 0.02em,
        2px 11px 0 0.02em, 3px 11px 0 0.02em, 4px 11px 0 0.02em,
        5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em #fff,
        8px 11px 0 0.02em #fff, 9px 11px 0 0.02em, 10px 11px 0 0.02em,
        11px 11px 0 0.02em, 12px 11px 0 0.02em, 13px 11px 0 0.02em,
        14px 11px 0 0.02em, 15px 11px 0 0.02em, 16px 11px 0 0.02em,
        1px 12px 0 0.02em, 2px 12px 0 0.02em, 3px 12px 0 0.02em,
        4px 12px 0 0.02em, 5px 12px 0 0.02em, 6px 12px 0 0.02em,
        7px 12px 0 0.02em #fff, 8px 12px 0 0.02em, 9px 12px 0 0.02em,
        10px 12px 0 0.02em, 11px 12px 0 0.02em, 12px 12px 0 0.02em,
        13px 12px 0 0.02em, 14px 12px 0 0.02em, 15px 12px 0 0.02em,
        16px 12px 0 0.02em, 1px 13px 0 0.02em, 2px 13px 0 0.02em,
        3px 13px 0 0.02em, 4px 13px 0 0.02em, 5px 13px 0 0.02em,
        6px 13px 0 0.02em, 7px 13px 0 0.02em, 8px 13px 0 0.02em,
        9px 13px 0 0.02em, 10px 13px 0 0.02em, 11px 13px 0 0.02em,
        12px 13px 0 0.02em, 13px 13px 0 0.02em, 14px 13px 0 0.02em,
        15px 13px 0 0.02em, 16px 13px 0 0.02em, 1px 14px 0 0.02em,
        2px 14px 0 0.02em, 3px 14px 0 0.02em, 4px 14px 0 0.02em,
        5px 14px 0 0.02em, 6px 14px 0 0.02em, 7px 14px 0 0.02em,
        8px 14px 0 0.02em, 9px 14px 0 0.02em, 10px 14px 0 0.02em,
        11px 14px 0 0.02em, 12px 14px 0 0.02em, 13px 14px 0 0.02em,
        14px 14px 0 0.02em, 15px 14px 0 0.02em, 16px 14px 0 0.02em,
        1px 15px 0 0.02em, 2px 15px 0 0.02em, 3px 15px 0 0.02em,
        4px 15px 0 0.02em, 5px 15px 0 0.02em, 6px 15px 0 0.02em,
        7px 15px 0 0.02em, 8px 15px 0 0.02em, 9px 15px 0 0.02em,
        10px 15px 0 0.02em, 11px 15px 0 0.02em, 12px 15px 0 0.02em,
        13px 15px 0 0.02em, 14px 15px 0 0.02em, 15px 15px 0 0.02em,
        16px 15px 0 0.02em, 2px 16px 0 0.02em, 3px 16px 0 0.02em,
        4px 16px 0 0.02em, 5px 16px 0 0.02em, 6px 16px 0 0.02em,
        7px 16px 0 0.02em, 8px 16px 0 0.02em, 9px 16px 0 0.02em,
        10px 16px 0 0.02em, 11px 16px 0 0.02em, 12px 16px 0 0.02em,
        13px 16px 0 0.02em, 14px 16px 0 0.02em, 15px 16px 0 0.02em;
    }
  }

  .nes-icon.close::before {
    width: 1px;
    height: 1px;
    color: #212529;
    box-shadow: 1px 1px, 2px 1px, 3px 1px, 4px 1px, 13px 1px, 14px 1px, 15px 1px,
      16px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 13px 2px, 14px 2px, 15px 2px,
      16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px, 13px 3px, 14px 3px, 15px 3px,
      16px 3px, 1px 4px, 2px 4px, 3px 4px, 4px 4px, 5px 4px, 6px 4px, 7px 4px,
      10px 4px, 11px 4px, 12px 4px, 13px 4px, 14px 4px, 15px 4px, 16px 4px,
      4px 5px, 5px 5px, 6px 5px, 7px 5px, 10px 5px, 11px 5px, 12px 5px, 13px 5px,
      4px 6px, 5px 6px, 6px 6px, 7px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px,
      4px 7px, 5px 7px, 6px 7px, 7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px,
      12px 7px, 13px 7px, 7px 8px, 8px 8px, 9px 8px, 10px 8px, 7px 9px, 8px 9px,
      9px 9px, 10px 9px, 4px 10px, 5px 10px, 6px 10px, 7px 10px, 8px 10px,
      9px 10px, 10px 10px, 11px 10px, 12px 10px, 13px 10px, 4px 11px, 5px 11px,
      6px 11px, 7px 11px, 10px 11px, 11px 11px, 12px 11px, 13px 11px, 4px 12px,
      5px 12px, 6px 12px, 7px 12px, 10px 12px, 11px 12px, 12px 12px, 13px 12px,
      1px 13px, 2px 13px, 3px 13px, 4px 13px, 5px 13px, 6px 13px, 7px 13px,
      10px 13px, 11px 13px, 12px 13px, 13px 13px, 14px 13px, 15px 13px,
      16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px, 13px 14px, 14px 14px,
      15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 13px 15px,
      14px 15px, 15px 15px, 16px 15px, 1px 16px, 2px 16px, 3px 16px, 4px 16px,
      13px 16px, 14px 16px, 15px 16px, 16px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.close::before {
      box-shadow: 1px 1px 0 0.02em, 2px 1px 0 0.02em, 3px 1px 0 0.02em,
        4px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 16px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em,
        3px 2px 0 0.02em, 4px 2px 0 0.02em, 13px 2px 0 0.02em, 14px 2px 0 0.02em,
        15px 2px 0 0.02em, 16px 2px 0 0.02em, 1px 3px 0 0.02em, 2px 3px 0 0.02em,
        3px 3px 0 0.02em, 4px 3px 0 0.02em, 13px 3px 0 0.02em, 14px 3px 0 0.02em,
        15px 3px 0 0.02em, 16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
        3px 4px 0 0.02em, 4px 4px 0 0.02em, 5px 4px 0 0.02em, 6px 4px 0 0.02em,
        7px 4px 0 0.02em, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em, 13px 4px 0 0.02em, 14px 4px 0 0.02em,
        15px 4px 0 0.02em, 16px 4px 0 0.02em, 4px 5px 0 0.02em, 5px 5px 0 0.02em,
        6px 5px 0 0.02em, 7px 5px 0 0.02em, 10px 5px 0 0.02em, 11px 5px 0 0.02em,
        12px 5px 0 0.02em, 13px 5px 0 0.02em, 4px 6px 0 0.02em, 5px 6px 0 0.02em,
        6px 6px 0 0.02em, 7px 6px 0 0.02em, 10px 6px 0 0.02em, 11px 6px 0 0.02em,
        12px 6px 0 0.02em, 13px 6px 0 0.02em, 4px 7px 0 0.02em, 5px 7px 0 0.02em,
        6px 7px 0 0.02em, 7px 7px 0 0.02em, 8px 7px 0 0.02em, 9px 7px 0 0.02em,
        10px 7px 0 0.02em, 11px 7px 0 0.02em, 12px 7px 0 0.02em,
        13px 7px 0 0.02em, 7px 8px 0 0.02em, 8px 8px 0 0.02em, 9px 8px 0 0.02em,
        10px 8px 0 0.02em, 7px 9px 0 0.02em, 8px 9px 0 0.02em, 9px 9px 0 0.02em,
        10px 9px 0 0.02em, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em, 7px 10px 0 0.02em, 8px 10px 0 0.02em,
        9px 10px 0 0.02em, 10px 10px 0 0.02em, 11px 10px 0 0.02em,
        12px 10px 0 0.02em, 13px 10px 0 0.02em, 4px 11px 0 0.02em,
        5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em,
        10px 11px 0 0.02em, 11px 11px 0 0.02em, 12px 11px 0 0.02em,
        13px 11px 0 0.02em, 4px 12px 0 0.02em, 5px 12px 0 0.02em,
        6px 12px 0 0.02em, 7px 12px 0 0.02em, 10px 12px 0 0.02em,
        11px 12px 0 0.02em, 12px 12px 0 0.02em, 13px 12px 0 0.02em,
        1px 13px 0 0.02em, 2px 13px 0 0.02em, 3px 13px 0 0.02em,
        4px 13px 0 0.02em, 5px 13px 0 0.02em, 6px 13px 0 0.02em,
        7px 13px 0 0.02em, 10px 13px 0 0.02em, 11px 13px 0 0.02em,
        12px 13px 0 0.02em, 13px 13px 0 0.02em, 14px 13px 0 0.02em,
        15px 13px 0 0.02em, 16px 13px 0 0.02em, 1px 14px 0 0.02em,
        2px 14px 0 0.02em, 3px 14px 0 0.02em, 4px 14px 0 0.02em,
        13px 14px 0 0.02em, 14px 14px 0 0.02em, 15px 14px 0 0.02em,
        16px 14px 0 0.02em, 1px 15px 0 0.02em, 2px 15px 0 0.02em,
        3px 15px 0 0.02em, 4px 15px 0 0.02em, 13px 15px 0 0.02em,
        14px 15px 0 0.02em, 15px 15px 0 0.02em, 16px 15px 0 0.02em,
        1px 16px 0 0.02em, 2px 16px 0 0.02em, 3px 16px 0 0.02em,
        4px 16px 0 0.02em, 13px 16px 0 0.02em, 14px 16px 0 0.02em,
        15px 16px 0 0.02em, 16px 16px 0 0.02em;
    }
  }

  .nes-icon.google::before {
    width: 1px;
    height: 1px;
    color: #fff;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px #db4437,
      7px 2px #db4437, 8px 2px #db4437, 9px 2px #db4437, 10px 2px #db4437,
      11px 2px #db4437, 12px 2px, 13px 2px, 14px 2px, 15px 2px, 16px 2px,
      1px 3px, 2px 3px, 3px 3px, 4px 3px #db4437, 5px 3px #db4437,
      6px 3px #db4437, 7px 3px #db4437, 8px 3px #db4437, 9px 3px #db4437,
      10px 3px #db4437, 11px 3px #db4437, 12px 3px #db4437, 13px 3px #db4437,
      14px 3px, 15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px #db4437,
      4px 4px #db4437, 5px 4px #db4437, 6px 4px #db4437, 7px 4px #db4437,
      8px 4px #db4437, 9px 4px #db4437, 10px 4px #db4437, 11px 4px #db4437,
      12px 4px #db4437, 13px 4px, 14px 4px, 15px 4px, 16px 4px, 1px 5px,
      2px 5px #db4437, 3px 5px #db4437, 4px 5px #db4437, 5px 5px #db4437,
      6px 5px, 7px 5px, 8px 5px, 9px 5px, 10px 5px, 11px 5px #db4437, 12px 5px,
      13px 5px, 14px 5px, 15px 5px, 16px 5px, 1px 6px #f4b400, 2px 6px #db4437,
      3px 6px #db4437, 4px 6px #db4437, 5px 6px, 6px 6px, 7px 6px, 8px 6px,
      9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px,
      16px 6px, 1px 7px #f4b400, 2px 7px #f4b400, 3px 7px #db4437, 4px 7px,
      5px 7px, 6px 7px, 7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px, 12px 7px,
      13px 7px, 14px 7px, 15px 7px, 16px 7px, 1px 8px #f4b400, 2px 8px #f4b400,
      3px 8px #f4b400, 4px 8px, 5px 8px, 6px 8px, 7px 8px, 8px 8px,
      9px 8px #4285f4, 10px 8px #4285f4, 11px 8px #4285f4, 12px 8px #4285f4,
      13px 8px #4285f4, 14px 8px #4285f4, 15px 8px #4285f4, 16px 8px,
      1px 9px #f4b400, 2px 9px #f4b400, 3px 9px #f4b400, 4px 9px, 5px 9px,
      6px 9px, 7px 9px, 8px 9px, 9px 9px #4285f4, 10px 9px #4285f4,
      11px 9px #4285f4, 12px 9px #4285f4, 13px 9px #4285f4, 14px 9px #4285f4,
      15px 9px #4285f4, 16px 9px, 1px 10px #f4b400, 2px 10px #f4b400,
      3px 10px #f4b400, 4px 10px, 5px 10px, 6px 10px, 7px 10px, 8px 10px,
      9px 10px #4285f4, 10px 10px #4285f4, 11px 10px #4285f4, 12px 10px #4285f4,
      13px 10px #4285f4, 14px 10px #4285f4, 15px 10px #4285f4, 16px 10px,
      1px 11px #f4b400, 2px 11px #f4b400, 3px 11px #0f9d58, 4px 11px, 5px 11px,
      6px 11px, 7px 11px, 8px 11px, 9px 11px, 10px 11px, 11px 11px, 12px 11px,
      13px 11px #4285f4, 14px 11px #4285f4, 15px 11px #4285f4, 16px 11px,
      1px 12px #f4b400, 2px 12px #0f9d58, 3px 12px #0f9d58, 4px 12px #0f9d58,
      5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px, 11px 12px,
      12px 12px #4285f4, 13px 12px #4285f4, 14px 12px #4285f4, 15px 12px #4285f4,
      16px 12px, 1px 13px, 2px 13px #0f9d58, 3px 13px #0f9d58, 4px 13px #0f9d58,
      5px 13px #0f9d58, 6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px,
      11px 13px #0f9d58, 12px 13px #4285f4, 13px 13px #4285f4, 14px 13px #4285f4,
      15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px #0f9d58,
      4px 14px #0f9d58, 5px 14px #0f9d58, 6px 14px #0f9d58, 7px 14px #0f9d58,
      8px 14px #0f9d58, 9px 14px #0f9d58, 10px 14px #0f9d58, 11px 14px #0f9d58,
      12px 14px #0f9d58, 13px 14px #4285f4, 14px 14px #4285f4, 15px 14px,
      16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px #0f9d58,
      5px 15px #0f9d58, 6px 15px #0f9d58, 7px 15px #0f9d58, 8px 15px #0f9d58,
      9px 15px #0f9d58, 10px 15px #0f9d58, 11px 15px #0f9d58, 12px 15px #0f9d58,
      13px 15px #0f9d58, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px,
      4px 16px, 5px 16px, 6px 16px #0f9d58, 7px 16px #0f9d58, 8px 16px #0f9d58,
      9px 16px #0f9d58, 10px 16px #0f9d58, 11px 16px #0f9d58, 12px 16px,
      13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.google::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em, 6px 2px 0 0.02em #db4437,
        7px 2px 0 0.02em #db4437, 8px 2px 0 0.02em #db4437,
        9px 2px 0 0.02em #db4437, 10px 2px 0 0.02em #db4437,
        11px 2px 0 0.02em #db4437, 12px 2px 0 0.02em, 13px 2px 0 0.02em,
        14px 2px 0 0.02em, 15px 2px 0 0.02em, 16px 2px 0 0.02em,
        1px 3px 0 0.02em, 2px 3px 0 0.02em, 3px 3px 0 0.02em,
        4px 3px 0 0.02em #db4437, 5px 3px 0 0.02em #db4437,
        6px 3px 0 0.02em #db4437, 7px 3px 0 0.02em #db4437,
        8px 3px 0 0.02em #db4437, 9px 3px 0 0.02em #db4437,
        10px 3px 0 0.02em #db4437, 11px 3px 0 0.02em #db4437,
        12px 3px 0 0.02em #db4437, 13px 3px 0 0.02em #db4437, 14px 3px 0 0.02em,
        15px 3px 0 0.02em, 16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
        3px 4px 0 0.02em #db4437, 4px 4px 0 0.02em #db4437,
        5px 4px 0 0.02em #db4437, 6px 4px 0 0.02em #db4437,
        7px 4px 0 0.02em #db4437, 8px 4px 0 0.02em #db4437,
        9px 4px 0 0.02em #db4437, 10px 4px 0 0.02em #db4437,
        11px 4px 0 0.02em #db4437, 12px 4px 0 0.02em #db4437, 13px 4px 0 0.02em,
        14px 4px 0 0.02em, 15px 4px 0 0.02em, 16px 4px 0 0.02em,
        1px 5px 0 0.02em, 2px 5px 0 0.02em #db4437, 3px 5px 0 0.02em #db4437,
        4px 5px 0 0.02em #db4437, 5px 5px 0 0.02em #db4437, 6px 5px 0 0.02em,
        7px 5px 0 0.02em, 8px 5px 0 0.02em, 9px 5px 0 0.02em, 10px 5px 0 0.02em,
        11px 5px 0 0.02em #db4437, 12px 5px 0 0.02em, 13px 5px 0 0.02em,
        14px 5px 0 0.02em, 15px 5px 0 0.02em, 16px 5px 0 0.02em,
        1px 6px 0 0.02em #f4b400, 2px 6px 0 0.02em #db4437,
        3px 6px 0 0.02em #db4437, 4px 6px 0 0.02em #db4437, 5px 6px 0 0.02em,
        6px 6px 0 0.02em, 7px 6px 0 0.02em, 8px 6px 0 0.02em, 9px 6px 0 0.02em,
        10px 6px 0 0.02em, 11px 6px 0 0.02em, 12px 6px 0 0.02em,
        13px 6px 0 0.02em, 14px 6px 0 0.02em, 15px 6px 0 0.02em,
        16px 6px 0 0.02em, 1px 7px 0 0.02em #f4b400, 2px 7px 0 0.02em #f4b400,
        3px 7px 0 0.02em #db4437, 4px 7px 0 0.02em, 5px 7px 0 0.02em,
        6px 7px 0 0.02em, 7px 7px 0 0.02em, 8px 7px 0 0.02em, 9px 7px 0 0.02em,
        10px 7px 0 0.02em, 11px 7px 0 0.02em, 12px 7px 0 0.02em,
        13px 7px 0 0.02em, 14px 7px 0 0.02em, 15px 7px 0 0.02em,
        16px 7px 0 0.02em, 1px 8px 0 0.02em #f4b400, 2px 8px 0 0.02em #f4b400,
        3px 8px 0 0.02em #f4b400, 4px 8px 0 0.02em, 5px 8px 0 0.02em,
        6px 8px 0 0.02em, 7px 8px 0 0.02em, 8px 8px 0 0.02em,
        9px 8px 0 0.02em #4285f4, 10px 8px 0 0.02em #4285f4,
        11px 8px 0 0.02em #4285f4, 12px 8px 0 0.02em #4285f4,
        13px 8px 0 0.02em #4285f4, 14px 8px 0 0.02em #4285f4,
        15px 8px 0 0.02em #4285f4, 16px 8px 0 0.02em, 1px 9px 0 0.02em #f4b400,
        2px 9px 0 0.02em #f4b400, 3px 9px 0 0.02em #f4b400, 4px 9px 0 0.02em,
        5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em, 8px 9px 0 0.02em,
        9px 9px 0 0.02em #4285f4, 10px 9px 0 0.02em #4285f4,
        11px 9px 0 0.02em #4285f4, 12px 9px 0 0.02em #4285f4,
        13px 9px 0 0.02em #4285f4, 14px 9px 0 0.02em #4285f4,
        15px 9px 0 0.02em #4285f4, 16px 9px 0 0.02em, 1px 10px 0 0.02em #f4b400,
        2px 10px 0 0.02em #f4b400, 3px 10px 0 0.02em #f4b400, 4px 10px 0 0.02em,
        5px 10px 0 0.02em, 6px 10px 0 0.02em, 7px 10px 0 0.02em,
        8px 10px 0 0.02em, 9px 10px 0 0.02em #4285f4, 10px 10px 0 0.02em #4285f4,
        11px 10px 0 0.02em #4285f4, 12px 10px 0 0.02em #4285f4,
        13px 10px 0 0.02em #4285f4, 14px 10px 0 0.02em #4285f4,
        15px 10px 0 0.02em #4285f4, 16px 10px 0 0.02em,
        1px 11px 0 0.02em #f4b400, 2px 11px 0 0.02em #f4b400,
        3px 11px 0 0.02em #0f9d58, 4px 11px 0 0.02em, 5px 11px 0 0.02em,
        6px 11px 0 0.02em, 7px 11px 0 0.02em, 8px 11px 0 0.02em,
        9px 11px 0 0.02em, 10px 11px 0 0.02em, 11px 11px 0 0.02em,
        12px 11px 0 0.02em, 13px 11px 0 0.02em #4285f4,
        14px 11px 0 0.02em #4285f4, 15px 11px 0 0.02em #4285f4,
        16px 11px 0 0.02em, 1px 12px 0 0.02em #f4b400, 2px 12px 0 0.02em #0f9d58,
        3px 12px 0 0.02em #0f9d58, 4px 12px 0 0.02em #0f9d58, 5px 12px 0 0.02em,
        6px 12px 0 0.02em, 7px 12px 0 0.02em, 8px 12px 0 0.02em,
        9px 12px 0 0.02em, 10px 12px 0 0.02em, 11px 12px 0 0.02em,
        12px 12px 0 0.02em #4285f4, 13px 12px 0 0.02em #4285f4,
        14px 12px 0 0.02em #4285f4, 15px 12px 0 0.02em #4285f4,
        16px 12px 0 0.02em, 1px 13px 0 0.02em, 2px 13px 0 0.02em #0f9d58,
        3px 13px 0 0.02em #0f9d58, 4px 13px 0 0.02em #0f9d58,
        5px 13px 0 0.02em #0f9d58, 6px 13px 0 0.02em, 7px 13px 0 0.02em,
        8px 13px 0 0.02em, 9px 13px 0 0.02em, 10px 13px 0 0.02em,
        11px 13px 0 0.02em #0f9d58, 12px 13px 0 0.02em #4285f4,
        13px 13px 0 0.02em #4285f4, 14px 13px 0 0.02em #4285f4,
        15px 13px 0 0.02em, 16px 13px 0 0.02em, 1px 14px 0 0.02em,
        2px 14px 0 0.02em, 3px 14px 0 0.02em #0f9d58, 4px 14px 0 0.02em #0f9d58,
        5px 14px 0 0.02em #0f9d58, 6px 14px 0 0.02em #0f9d58,
        7px 14px 0 0.02em #0f9d58, 8px 14px 0 0.02em #0f9d58,
        9px 14px 0 0.02em #0f9d58, 10px 14px 0 0.02em #0f9d58,
        11px 14px 0 0.02em #0f9d58, 12px 14px 0 0.02em #0f9d58,
        13px 14px 0 0.02em #4285f4, 14px 14px 0 0.02em #4285f4,
        15px 14px 0 0.02em, 16px 14px 0 0.02em, 1px 15px 0 0.02em,
        2px 15px 0 0.02em, 3px 15px 0 0.02em, 4px 15px 0 0.02em #0f9d58,
        5px 15px 0 0.02em #0f9d58, 6px 15px 0 0.02em #0f9d58,
        7px 15px 0 0.02em #0f9d58, 8px 15px 0 0.02em #0f9d58,
        9px 15px 0 0.02em #0f9d58, 10px 15px 0 0.02em #0f9d58,
        11px 15px 0 0.02em #0f9d58, 12px 15px 0 0.02em #0f9d58,
        13px 15px 0 0.02em #0f9d58, 14px 15px 0 0.02em, 15px 15px 0 0.02em,
        16px 15px 0 0.02em, 2px 16px 0 0.02em, 3px 16px 0 0.02em,
        4px 16px 0 0.02em, 5px 16px 0 0.02em, 6px 16px 0 0.02em #0f9d58,
        7px 16px 0 0.02em #0f9d58, 8px 16px 0 0.02em #0f9d58,
        9px 16px 0 0.02em #0f9d58, 10px 16px 0 0.02em #0f9d58,
        11px 16px 0 0.02em #0f9d58, 12px 16px 0 0.02em, 13px 16px 0 0.02em,
        14px 16px 0 0.02em, 15px 16px 0 0.02em;
    }
  }

  .nes-icon.medium::before {
    width: 1px;
    height: 1px;
    color: #12100e;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px #fff, 3px 2px #fff, 4px 2px #fff, 5px 2px, 6px 2px,
      7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px #fff,
      13px 2px #fff, 14px 2px #fff, 15px 2px #fff, 16px 2px, 1px 3px, 2px 3px,
      3px 3px #fff, 4px 3px #fff, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px,
      10px 3px, 11px 3px, 12px 3px #fff, 13px 3px #fff, 14px 3px #fff, 15px 3px,
      16px 3px, 1px 4px, 2px 4px, 3px 4px #fff, 4px 4px #fff, 5px 4px #fff,
      6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px #fff,
      13px 4px #fff, 14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px,
      3px 5px #fff, 4px 5px #fff, 5px 5px #fff, 6px 5px #fff, 7px 5px, 8px 5px,
      9px 5px, 10px 5px, 11px 5px #fff, 12px 5px #fff, 13px 5px #fff,
      14px 5px #fff, 15px 5px, 16px 5px, 1px 6px, 2px 6px, 3px 6px #fff,
      4px 6px #fff, 5px 6px #fff, 6px 6px #fff, 7px 6px, 8px 6px, 9px 6px,
      10px 6px, 11px 6px #fff, 12px 6px #fff, 13px 6px #fff, 14px 6px #fff,
      15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff, 4px 7px #fff,
      5px 7px #fff, 6px 7px #fff, 7px 7px, 8px 7px, 9px 7px, 10px 7px #fff,
      11px 7px #fff, 12px 7px #fff, 13px 7px #fff, 14px 7px #fff, 15px 7px,
      16px 7px, 1px 8px, 2px 8px, 3px 8px #fff, 4px 8px, 5px 8px #fff,
      6px 8px #fff, 7px 8px #fff, 8px 8px, 9px 8px, 10px 8px #fff, 11px 8px #fff,
      12px 8px #fff, 13px 8px #fff, 14px 8px #fff, 15px 8px, 16px 8px, 1px 9px,
      2px 9px, 3px 9px #fff, 4px 9px, 5px 9px #fff, 6px 9px #fff, 7px 9px #fff,
      8px 9px, 9px 9px #fff, 10px 9px #fff, 11px 9px, 12px 9px #fff,
      13px 9px #fff, 14px 9px #fff, 15px 9px, 16px 9px, 1px 10px, 2px 10px,
      3px 10px #fff, 4px 10px, 5px 10px, 6px 10px #fff, 7px 10px #fff,
      8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px, 12px 10px #fff,
      13px 10px #fff, 14px 10px #fff, 15px 10px, 16px 10px, 1px 11px, 2px 11px,
      3px 11px #fff, 4px 11px, 5px 11px, 6px 11px #fff, 7px 11px #fff,
      8px 11px #fff, 9px 11px #fff, 10px 11px, 11px 11px, 12px 11px #fff,
      13px 11px #fff, 14px 11px #fff, 15px 11px, 16px 11px, 1px 12px, 2px 12px,
      3px 12px #fff, 4px 12px, 5px 12px, 6px 12px, 7px 12px #fff, 8px 12px #fff,
      9px 12px #fff, 10px 12px, 11px 12px, 12px 12px #fff, 13px 12px #fff,
      14px 12px #fff, 15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px #fff,
      4px 13px, 5px 13px, 6px 13px, 7px 13px #fff, 8px 13px #fff, 9px 13px,
      10px 13px, 11px 13px, 12px 13px #fff, 13px 13px #fff, 14px 13px #fff,
      15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px #fff, 4px 14px,
      5px 14px, 6px 14px, 7px 14px, 8px 14px #fff, 9px 14px, 10px 14px,
      11px 14px, 12px 14px #fff, 13px 14px #fff, 14px 14px #fff, 15px 14px,
      16px 14px, 1px 15px, 2px 15px #fff, 3px 15px #fff, 4px 15px #fff, 5px 15px,
      6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px #fff,
      12px 15px #fff, 13px 15px #fff, 14px 15px #fff, 15px 15px #fff, 16px 15px,
      2px 16px, 3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px,
      9px 16px, 10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.medium::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em #fff,
        3px 2px 0 0.02em #fff, 4px 2px 0 0.02em #fff, 5px 2px 0 0.02em,
        6px 2px 0 0.02em, 7px 2px 0 0.02em, 8px 2px 0 0.02em, 9px 2px 0 0.02em,
        10px 2px 0 0.02em, 11px 2px 0 0.02em, 12px 2px 0 0.02em #fff,
        13px 2px 0 0.02em #fff, 14px 2px 0 0.02em #fff, 15px 2px 0 0.02em #fff,
        16px 2px 0 0.02em, 1px 3px 0 0.02em, 2px 3px 0 0.02em,
        3px 3px 0 0.02em #fff, 4px 3px 0 0.02em #fff, 5px 3px 0 0.02em,
        6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
        10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em #fff,
        13px 3px 0 0.02em #fff, 14px 3px 0 0.02em #fff, 15px 3px 0 0.02em,
        16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
        3px 4px 0 0.02em #fff, 4px 4px 0 0.02em #fff, 5px 4px 0 0.02em #fff,
        6px 4px 0 0.02em, 7px 4px 0 0.02em, 8px 4px 0 0.02em, 9px 4px 0 0.02em,
        10px 4px 0 0.02em, 11px 4px 0 0.02em, 12px 4px 0 0.02em #fff,
        13px 4px 0 0.02em #fff, 14px 4px 0 0.02em #fff, 15px 4px 0 0.02em,
        16px 4px 0 0.02em, 1px 5px 0 0.02em, 2px 5px 0 0.02em,
        3px 5px 0 0.02em #fff, 4px 5px 0 0.02em #fff, 5px 5px 0 0.02em #fff,
        6px 5px 0 0.02em #fff, 7px 5px 0 0.02em, 8px 5px 0 0.02em,
        9px 5px 0 0.02em, 10px 5px 0 0.02em, 11px 5px 0 0.02em #fff,
        12px 5px 0 0.02em #fff, 13px 5px 0 0.02em #fff, 14px 5px 0 0.02em #fff,
        15px 5px 0 0.02em, 16px 5px 0 0.02em, 1px 6px 0 0.02em, 2px 6px 0 0.02em,
        3px 6px 0 0.02em #fff, 4px 6px 0 0.02em #fff, 5px 6px 0 0.02em #fff,
        6px 6px 0 0.02em #fff, 7px 6px 0 0.02em, 8px 6px 0 0.02em,
        9px 6px 0 0.02em, 10px 6px 0 0.02em, 11px 6px 0 0.02em #fff,
        12px 6px 0 0.02em #fff, 13px 6px 0 0.02em #fff, 14px 6px 0 0.02em #fff,
        15px 6px 0 0.02em, 16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em,
        3px 7px 0 0.02em #fff, 4px 7px 0 0.02em #fff, 5px 7px 0 0.02em #fff,
        6px 7px 0 0.02em #fff, 7px 7px 0 0.02em, 8px 7px 0 0.02em,
        9px 7px 0 0.02em, 10px 7px 0 0.02em #fff, 11px 7px 0 0.02em #fff,
        12px 7px 0 0.02em #fff, 13px 7px 0 0.02em #fff, 14px 7px 0 0.02em #fff,
        15px 7px 0 0.02em, 16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em,
        3px 8px 0 0.02em #fff, 4px 8px 0 0.02em, 5px 8px 0 0.02em #fff,
        6px 8px 0 0.02em #fff, 7px 8px 0 0.02em #fff, 8px 8px 0 0.02em,
        9px 8px 0 0.02em, 10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff,
        12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff, 14px 8px 0 0.02em #fff,
        15px 8px 0 0.02em, 16px 8px 0 0.02em, 1px 9px 0 0.02em, 2px 9px 0 0.02em,
        3px 9px 0 0.02em #fff, 4px 9px 0 0.02em, 5px 9px 0 0.02em #fff,
        6px 9px 0 0.02em #fff, 7px 9px 0 0.02em #fff, 8px 9px 0 0.02em,
        9px 9px 0 0.02em #fff, 10px 9px 0 0.02em #fff, 11px 9px 0 0.02em,
        12px 9px 0 0.02em #fff, 13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff,
        15px 9px 0 0.02em, 16px 9px 0 0.02em, 1px 10px 0 0.02em,
        2px 10px 0 0.02em, 3px 10px 0 0.02em #fff, 4px 10px 0 0.02em,
        5px 10px 0 0.02em, 6px 10px 0 0.02em #fff, 7px 10px 0 0.02em #fff,
        8px 10px 0 0.02em #fff, 9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff,
        11px 10px 0 0.02em, 12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff,
        14px 10px 0 0.02em #fff, 15px 10px 0 0.02em, 16px 10px 0 0.02em,
        1px 11px 0 0.02em, 2px 11px 0 0.02em, 3px 11px 0 0.02em #fff,
        4px 11px 0 0.02em, 5px 11px 0 0.02em, 6px 11px 0 0.02em #fff,
        7px 11px 0 0.02em #fff, 8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff,
        10px 11px 0 0.02em, 11px 11px 0 0.02em, 12px 11px 0 0.02em #fff,
        13px 11px 0 0.02em #fff, 14px 11px 0 0.02em #fff, 15px 11px 0 0.02em,
        16px 11px 0 0.02em, 1px 12px 0 0.02em, 2px 12px 0 0.02em,
        3px 12px 0 0.02em #fff, 4px 12px 0 0.02em, 5px 12px 0 0.02em,
        6px 12px 0 0.02em, 7px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff,
        9px 12px 0 0.02em #fff, 10px 12px 0 0.02em, 11px 12px 0 0.02em,
        12px 12px 0 0.02em #fff, 13px 12px 0 0.02em #fff,
        14px 12px 0 0.02em #fff, 15px 12px 0 0.02em, 16px 12px 0 0.02em,
        1px 13px 0 0.02em, 2px 13px 0 0.02em, 3px 13px 0 0.02em #fff,
        4px 13px 0 0.02em, 5px 13px 0 0.02em, 6px 13px 0 0.02em,
        7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #fff, 9px 13px 0 0.02em,
        10px 13px 0 0.02em, 11px 13px 0 0.02em, 12px 13px 0 0.02em #fff,
        13px 13px 0 0.02em #fff, 14px 13px 0 0.02em #fff, 15px 13px 0 0.02em,
        16px 13px 0 0.02em, 1px 14px 0 0.02em, 2px 14px 0 0.02em,
        3px 14px 0 0.02em #fff, 4px 14px 0 0.02em, 5px 14px 0 0.02em,
        6px 14px 0 0.02em, 7px 14px 0 0.02em, 8px 14px 0 0.02em #fff,
        9px 14px 0 0.02em, 10px 14px 0 0.02em, 11px 14px 0 0.02em,
        12px 14px 0 0.02em #fff, 13px 14px 0 0.02em #fff,
        14px 14px 0 0.02em #fff, 15px 14px 0 0.02em, 16px 14px 0 0.02em,
        1px 15px 0 0.02em, 2px 15px 0 0.02em #fff, 3px 15px 0 0.02em #fff,
        4px 15px 0 0.02em #fff, 5px 15px 0 0.02em, 6px 15px 0 0.02em,
        7px 15px 0 0.02em, 8px 15px 0 0.02em, 9px 15px 0 0.02em,
        10px 15px 0 0.02em, 11px 15px 0 0.02em #fff, 12px 15px 0 0.02em #fff,
        13px 15px 0 0.02em #fff, 14px 15px 0 0.02em #fff,
        15px 15px 0 0.02em #fff, 16px 15px 0 0.02em, 2px 16px 0 0.02em,
        3px 16px 0 0.02em, 4px 16px 0 0.02em, 5px 16px 0 0.02em,
        6px 16px 0 0.02em, 7px 16px 0 0.02em, 8px 16px 0 0.02em,
        9px 16px 0 0.02em, 10px 16px 0 0.02em, 11px 16px 0 0.02em,
        12px 16px 0 0.02em, 13px 16px 0 0.02em, 14px 16px 0 0.02em,
        15px 16px 0 0.02em;
    }
  }

  .nes-icon.twitch::before {
    width: 1px;
    height: 1px;
    color: #6441a4;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px #fff, 4px 2px #fff, 5px 2px #fff, 6px 2px #fff,
      7px 2px #fff, 8px 2px #fff, 9px 2px #fff, 10px 2px #fff, 11px 2px #fff,
      12px 2px #fff, 13px 2px #fff, 14px 2px #fff, 15px 2px #fff, 16px 2px,
      1px 3px, 2px 3px #fff, 3px 3px #fff, 4px 3px, 5px 3px, 6px 3px, 7px 3px,
      8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px,
      15px 3px #fff, 16px 3px, 1px 4px, 2px 4px #fff, 3px 4px #fff, 4px 4px,
      5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px,
      13px 4px, 14px 4px, 15px 4px #fff, 16px 4px, 1px 5px, 2px 5px #fff,
      3px 5px #fff, 4px 5px, 5px 5px, 6px 5px, 7px 5px, 8px 5px #fff, 9px 5px,
      10px 5px, 11px 5px #fff, 12px 5px, 13px 5px, 14px 5px, 15px 5px #fff,
      16px 5px, 1px 6px, 2px 6px #fff, 3px 6px #fff, 4px 6px, 5px 6px, 6px 6px,
      7px 6px, 8px 6px #fff, 9px 6px, 10px 6px, 11px 6px #fff, 12px 6px,
      13px 6px, 14px 6px, 15px 6px #fff, 16px 6px, 1px 7px, 2px 7px #fff,
      3px 7px #fff, 4px 7px, 5px 7px, 6px 7px, 7px 7px, 8px 7px #fff, 9px 7px,
      10px 7px, 11px 7px #fff, 12px 7px, 13px 7px, 14px 7px, 15px 7px #fff,
      16px 7px, 1px 8px, 2px 8px #fff, 3px 8px #fff, 4px 8px, 5px 8px, 6px 8px,
      7px 8px, 8px 8px #fff, 9px 8px, 10px 8px, 11px 8px #fff, 12px 8px,
      13px 8px, 14px 8px, 15px 8px #fff, 16px 8px, 1px 9px, 2px 9px #fff,
      3px 9px #fff, 4px 9px, 5px 9px, 6px 9px, 7px 9px, 8px 9px, 9px 9px,
      10px 9px, 11px 9px, 12px 9px, 13px 9px, 14px 9px, 15px 9px #fff, 16px 9px,
      1px 10px, 2px 10px #fff, 3px 10px #fff, 4px 10px, 5px 10px, 6px 10px,
      7px 10px, 8px 10px, 9px 10px, 10px 10px, 11px 10px, 12px 10px, 13px 10px,
      14px 10px #fff, 15px 10px #fff, 16px 10px, 1px 11px, 2px 11px #fff,
      3px 11px #fff, 4px 11px, 5px 11px, 6px 11px, 7px 11px, 8px 11px, 9px 11px,
      10px 11px, 11px 11px, 12px 11px, 13px 11px #fff, 14px 11px #fff, 15px 11px,
      16px 11px, 1px 12px, 2px 12px #fff, 3px 12px #fff, 4px 12px #fff,
      5px 12px #fff, 6px 12px, 7px 12px, 8px 12px #fff, 9px 12px #fff,
      10px 12px #fff, 11px 12px #fff, 12px 12px #fff, 13px 12px #fff, 14px 12px,
      15px 12px, 16px 12px, 1px 13px, 2px 13px #fff, 3px 13px #fff,
      4px 13px #fff, 5px 13px #fff, 6px 13px, 7px 13px #fff, 8px 13px #fff,
      9px 13px #fff, 10px 13px #fff, 11px 13px #fff, 12px 13px #fff, 13px 13px,
      14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px,
      5px 14px #fff, 6px 14px #fff, 7px 14px #fff, 8px 14px #fff, 9px 14px,
      10px 14px, 11px 14px, 12px 14px, 13px 14px, 14px 14px, 15px 14px,
      16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px #fff,
      6px 15px #fff, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px,
      12px 15px, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px,
      4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px,
      11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.twitch::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em,
        3px 2px 0 0.02em #fff, 4px 2px 0 0.02em #fff, 5px 2px 0 0.02em #fff,
        6px 2px 0 0.02em #fff, 7px 2px 0 0.02em #fff, 8px 2px 0 0.02em #fff,
        9px 2px 0 0.02em #fff, 10px 2px 0 0.02em #fff, 11px 2px 0 0.02em #fff,
        12px 2px 0 0.02em #fff, 13px 2px 0 0.02em #fff, 14px 2px 0 0.02em #fff,
        15px 2px 0 0.02em #fff, 16px 2px 0 0.02em, 1px 3px 0 0.02em,
        2px 3px 0 0.02em #fff, 3px 3px 0 0.02em #fff, 4px 3px 0 0.02em,
        5px 3px 0 0.02em, 6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em,
        9px 3px 0 0.02em, 10px 3px 0 0.02em, 11px 3px 0 0.02em,
        12px 3px 0 0.02em, 13px 3px 0 0.02em, 14px 3px 0 0.02em,
        15px 3px 0 0.02em #fff, 16px 3px 0 0.02em, 1px 4px 0 0.02em,
        2px 4px 0 0.02em #fff, 3px 4px 0 0.02em #fff, 4px 4px 0 0.02em,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em, 8px 4px 0 0.02em,
        9px 4px 0 0.02em, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em, 13px 4px 0 0.02em, 14px 4px 0 0.02em,
        15px 4px 0 0.02em #fff, 16px 4px 0 0.02em, 1px 5px 0 0.02em,
        2px 5px 0 0.02em #fff, 3px 5px 0 0.02em #fff, 4px 5px 0 0.02em,
        5px 5px 0 0.02em, 6px 5px 0 0.02em, 7px 5px 0 0.02em,
        8px 5px 0 0.02em #fff, 9px 5px 0 0.02em, 10px 5px 0 0.02em,
        11px 5px 0 0.02em #fff, 12px 5px 0 0.02em, 13px 5px 0 0.02em,
        14px 5px 0 0.02em, 15px 5px 0 0.02em #fff, 16px 5px 0 0.02em,
        1px 6px 0 0.02em, 2px 6px 0 0.02em #fff, 3px 6px 0 0.02em #fff,
        4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em, 7px 6px 0 0.02em,
        8px 6px 0 0.02em #fff, 9px 6px 0 0.02em, 10px 6px 0 0.02em,
        11px 6px 0 0.02em #fff, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em, 15px 6px 0 0.02em #fff, 16px 6px 0 0.02em,
        1px 7px 0 0.02em, 2px 7px 0 0.02em #fff, 3px 7px 0 0.02em #fff,
        4px 7px 0 0.02em, 5px 7px 0 0.02em, 6px 7px 0 0.02em, 7px 7px 0 0.02em,
        8px 7px 0 0.02em #fff, 9px 7px 0 0.02em, 10px 7px 0 0.02em,
        11px 7px 0 0.02em #fff, 12px 7px 0 0.02em, 13px 7px 0 0.02em,
        14px 7px 0 0.02em, 15px 7px 0 0.02em #fff, 16px 7px 0 0.02em,
        1px 8px 0 0.02em, 2px 8px 0 0.02em #fff, 3px 8px 0 0.02em #fff,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em, 7px 8px 0 0.02em,
        8px 8px 0 0.02em #fff, 9px 8px 0 0.02em, 10px 8px 0 0.02em,
        11px 8px 0 0.02em #fff, 12px 8px 0 0.02em, 13px 8px 0 0.02em,
        14px 8px 0 0.02em, 15px 8px 0 0.02em #fff, 16px 8px 0 0.02em,
        1px 9px 0 0.02em, 2px 9px 0 0.02em #fff, 3px 9px 0 0.02em #fff,
        4px 9px 0 0.02em, 5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em,
        8px 9px 0 0.02em, 9px 9px 0 0.02em, 10px 9px 0 0.02em, 11px 9px 0 0.02em,
        12px 9px 0 0.02em, 13px 9px 0 0.02em, 14px 9px 0 0.02em,
        15px 9px 0 0.02em #fff, 16px 9px 0 0.02em, 1px 10px 0 0.02em,
        2px 10px 0 0.02em #fff, 3px 10px 0 0.02em #fff, 4px 10px 0 0.02em,
        5px 10px 0 0.02em, 6px 10px 0 0.02em, 7px 10px 0 0.02em,
        8px 10px 0 0.02em, 9px 10px 0 0.02em, 10px 10px 0 0.02em,
        11px 10px 0 0.02em, 12px 10px 0 0.02em, 13px 10px 0 0.02em,
        14px 10px 0 0.02em #fff, 15px 10px 0 0.02em #fff, 16px 10px 0 0.02em,
        1px 11px 0 0.02em, 2px 11px 0 0.02em #fff, 3px 11px 0 0.02em #fff,
        4px 11px 0 0.02em, 5px 11px 0 0.02em, 6px 11px 0 0.02em,
        7px 11px 0 0.02em, 8px 11px 0 0.02em, 9px 11px 0 0.02em,
        10px 11px 0 0.02em, 11px 11px 0 0.02em, 12px 11px 0 0.02em,
        13px 11px 0 0.02em #fff, 14px 11px 0 0.02em #fff, 15px 11px 0 0.02em,
        16px 11px 0 0.02em, 1px 12px 0 0.02em, 2px 12px 0 0.02em #fff,
        3px 12px 0 0.02em #fff, 4px 12px 0 0.02em #fff, 5px 12px 0 0.02em #fff,
        6px 12px 0 0.02em, 7px 12px 0 0.02em, 8px 12px 0 0.02em #fff,
        9px 12px 0 0.02em #fff, 10px 12px 0 0.02em #fff, 11px 12px 0 0.02em #fff,
        12px 12px 0 0.02em #fff, 13px 12px 0 0.02em #fff, 14px 12px 0 0.02em,
        15px 12px 0 0.02em, 16px 12px 0 0.02em, 1px 13px 0 0.02em,
        2px 13px 0 0.02em #fff, 3px 13px 0 0.02em #fff, 4px 13px 0 0.02em #fff,
        5px 13px 0 0.02em #fff, 6px 13px 0 0.02em, 7px 13px 0 0.02em #fff,
        8px 13px 0 0.02em #fff, 9px 13px 0 0.02em #fff, 10px 13px 0 0.02em #fff,
        11px 13px 0 0.02em #fff, 12px 13px 0 0.02em #fff, 13px 13px 0 0.02em,
        14px 13px 0 0.02em, 15px 13px 0 0.02em, 16px 13px 0 0.02em,
        1px 14px 0 0.02em, 2px 14px 0 0.02em, 3px 14px 0 0.02em,
        4px 14px 0 0.02em, 5px 14px 0 0.02em #fff, 6px 14px 0 0.02em #fff,
        7px 14px 0 0.02em #fff, 8px 14px 0 0.02em #fff, 9px 14px 0 0.02em,
        10px 14px 0 0.02em, 11px 14px 0 0.02em, 12px 14px 0 0.02em,
        13px 14px 0 0.02em, 14px 14px 0 0.02em, 15px 14px 0 0.02em,
        16px 14px 0 0.02em, 1px 15px 0 0.02em, 2px 15px 0 0.02em,
        3px 15px 0 0.02em, 4px 15px 0 0.02em, 5px 15px 0 0.02em #fff,
        6px 15px 0 0.02em #fff, 7px 15px 0 0.02em, 8px 15px 0 0.02em,
        9px 15px 0 0.02em, 10px 15px 0 0.02em, 11px 15px 0 0.02em,
        12px 15px 0 0.02em, 13px 15px 0 0.02em, 14px 15px 0 0.02em,
        15px 15px 0 0.02em, 16px 15px 0 0.02em, 2px 16px 0 0.02em,
        3px 16px 0 0.02em, 4px 16px 0 0.02em, 5px 16px 0 0.02em,
        6px 16px 0 0.02em, 7px 16px 0 0.02em, 8px 16px 0 0.02em,
        9px 16px 0 0.02em, 10px 16px 0 0.02em, 11px 16px 0 0.02em,
        12px 16px 0 0.02em, 13px 16px 0 0.02em, 14px 16px 0 0.02em,
        15px 16px 0 0.02em;
    }
  }

  .nes-icon.reddit::before {
    width: 1px;
    height: 1px;
    color: #f40;
    box-shadow: 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px,
      10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 2px 2px, 3px 2px,
      4px 2px, 5px 2px, 6px 2px, 7px 2px, 8px 2px, 9px 2px #fff, 10px 2px #fff,
      11px 2px #fff, 12px 2px, 13px 2px #fff, 14px 2px, 15px 2px, 1px 3px,
      2px 3px, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px #fff,
      9px 3px, 10px 3px, 11px 3px, 12px 3px #fff, 13px 3px #fff, 14px 3px #fff,
      15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px, 4px 4px, 5px 4px, 6px 4px,
      7px 4px, 8px 4px #fff, 9px 4px, 10px 4px, 11px 4px, 12px 4px,
      13px 4px #fff, 14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px,
      4px 5px, 5px 5px, 6px 5px, 7px 5px #fff, 8px 5px #fff, 9px 5px #fff,
      10px 5px #fff, 11px 5px, 12px 5px, 13px 5px, 14px 5px, 15px 5px, 16px 5px,
      1px 6px, 2px 6px #fff, 3px 6px #fff, 4px 6px, 5px 6px #fff, 6px 6px #fff,
      7px 6px #fff, 8px 6px #fff, 9px 6px #fff, 10px 6px #fff, 11px 6px #fff,
      12px 6px #fff, 13px 6px, 14px 6px #fff, 15px 6px #fff, 16px 6px, 1px 7px,
      2px 7px #fff, 3px 7px, 4px 7px #fff, 5px 7px #fff, 6px 7px #fff,
      7px 7px #fff, 8px 7px #fff, 9px 7px #fff, 10px 7px #fff, 11px 7px #fff,
      12px 7px #fff, 13px 7px #fff, 14px 7px, 15px 7px #fff, 16px 7px, 1px 8px,
      2px 8px, 3px 8px #fff, 4px 8px #fff, 5px 8px #fff, 6px 8px, 7px 8px,
      8px 8px #fff, 9px 8px #fff, 10px 8px, 11px 8px, 12px 8px #fff,
      13px 8px #fff, 14px 8px #fff, 15px 8px, 16px 8px, 1px 9px, 2px 9px #fff,
      3px 9px #fff, 4px 9px #fff, 5px 9px #fff, 6px 9px, 7px 9px, 8px 9px #fff,
      9px 9px #fff, 10px 9px, 11px 9px, 12px 9px #fff, 13px 9px #fff,
      14px 9px #fff, 15px 9px #fff, 16px 9px, 1px 10px, 2px 10px #fff,
      3px 10px #fff, 4px 10px #fff, 5px 10px #fff, 6px 10px #fff, 7px 10px #fff,
      8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px #fff,
      12px 10px #fff, 13px 10px #fff, 14px 10px #fff, 15px 10px #fff, 16px 10px,
      1px 11px, 2px 11px #fff, 3px 11px #fff, 4px 11px #fff, 5px 11px #fff,
      6px 11px #fff, 7px 11px #fff, 8px 11px #fff, 9px 11px #fff, 10px 11px #fff,
      11px 11px #fff, 12px 11px #fff, 13px 11px #fff, 14px 11px #fff,
      15px 11px #fff, 16px 11px, 1px 12px, 2px 12px, 3px 12px #fff,
      4px 12px #fff, 5px 12px #fff, 6px 12px, 7px 12px #fff, 8px 12px #fff,
      9px 12px #fff, 10px 12px #fff, 11px 12px, 12px 12px #fff, 13px 12px #fff,
      14px 12px #fff, 15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px,
      4px 13px #fff, 5px 13px #fff, 6px 13px #fff, 7px 13px, 8px 13px, 9px 13px,
      10px 13px, 11px 13px #fff, 12px 13px #fff, 13px 13px #fff, 14px 13px,
      15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px,
      5px 14px #fff, 6px 14px #fff, 7px 14px #fff, 8px 14px #fff, 9px 14px #fff,
      10px 14px #fff, 11px 14px #fff, 12px 14px #fff, 13px 14px, 14px 14px,
      15px 14px, 16px 14px, 2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px,
      7px 15px #fff, 8px 15px #fff, 9px 15px #fff, 10px 15px #fff, 11px 15px,
      12px 15px, 13px 15px, 14px 15px, 15px 15px, 3px 16px, 4px 16px, 5px 16px,
      6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px, 12px 16px,
      13px 16px, 14px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.reddit::before {
      box-shadow: 3px 1px 0 0.02em, 4px 1px 0 0.02em, 5px 1px 0 0.02em,
        6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em, 9px 1px 0 0.02em,
        10px 1px 0 0.02em, 11px 1px 0 0.02em, 12px 1px 0 0.02em,
        13px 1px 0 0.02em, 14px 1px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
        8px 2px 0 0.02em, 9px 2px 0 0.02em #fff, 10px 2px 0 0.02em #fff,
        11px 2px 0 0.02em #fff, 12px 2px 0 0.02em, 13px 2px 0 0.02em #fff,
        14px 2px 0 0.02em, 15px 2px 0 0.02em, 1px 3px 0 0.02em, 2px 3px 0 0.02em,
        3px 3px 0 0.02em, 4px 3px 0 0.02em, 5px 3px 0 0.02em, 6px 3px 0 0.02em,
        7px 3px 0 0.02em, 8px 3px 0 0.02em #fff, 9px 3px 0 0.02em,
        10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em #fff,
        13px 3px 0 0.02em #fff, 14px 3px 0 0.02em #fff, 15px 3px 0 0.02em,
        16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em, 3px 4px 0 0.02em,
        4px 4px 0 0.02em, 5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em,
        8px 4px 0 0.02em #fff, 9px 4px 0 0.02em, 10px 4px 0 0.02em,
        11px 4px 0 0.02em, 12px 4px 0 0.02em, 13px 4px 0 0.02em #fff,
        14px 4px 0 0.02em, 15px 4px 0 0.02em, 16px 4px 0 0.02em,
        1px 5px 0 0.02em, 2px 5px 0 0.02em, 3px 5px 0 0.02em, 4px 5px 0 0.02em,
        5px 5px 0 0.02em, 6px 5px 0 0.02em, 7px 5px 0 0.02em #fff,
        8px 5px 0 0.02em #fff, 9px 5px 0 0.02em #fff, 10px 5px 0 0.02em #fff,
        11px 5px 0 0.02em, 12px 5px 0 0.02em, 13px 5px 0 0.02em,
        14px 5px 0 0.02em, 15px 5px 0 0.02em, 16px 5px 0 0.02em,
        1px 6px 0 0.02em, 2px 6px 0 0.02em #fff, 3px 6px 0 0.02em #fff,
        4px 6px 0 0.02em, 5px 6px 0 0.02em #fff, 6px 6px 0 0.02em #fff,
        7px 6px 0 0.02em #fff, 8px 6px 0 0.02em #fff, 9px 6px 0 0.02em #fff,
        10px 6px 0 0.02em #fff, 11px 6px 0 0.02em #fff, 12px 6px 0 0.02em #fff,
        13px 6px 0 0.02em, 14px 6px 0 0.02em #fff, 15px 6px 0 0.02em #fff,
        16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em #fff,
        3px 7px 0 0.02em, 4px 7px 0 0.02em #fff, 5px 7px 0 0.02em #fff,
        6px 7px 0 0.02em #fff, 7px 7px 0 0.02em #fff, 8px 7px 0 0.02em #fff,
        9px 7px 0 0.02em #fff, 10px 7px 0 0.02em #fff, 11px 7px 0 0.02em #fff,
        12px 7px 0 0.02em #fff, 13px 7px 0 0.02em #fff, 14px 7px 0 0.02em,
        15px 7px 0 0.02em #fff, 16px 7px 0 0.02em, 1px 8px 0 0.02em,
        2px 8px 0 0.02em, 3px 8px 0 0.02em #fff, 4px 8px 0 0.02em #fff,
        5px 8px 0 0.02em #fff, 6px 8px 0 0.02em, 7px 8px 0 0.02em,
        8px 8px 0 0.02em #fff, 9px 8px 0 0.02em #fff, 10px 8px 0 0.02em,
        11px 8px 0 0.02em, 12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff,
        14px 8px 0 0.02em #fff, 15px 8px 0 0.02em, 16px 8px 0 0.02em,
        1px 9px 0 0.02em, 2px 9px 0 0.02em #fff, 3px 9px 0 0.02em #fff,
        4px 9px 0 0.02em #fff, 5px 9px 0 0.02em #fff, 6px 9px 0 0.02em,
        7px 9px 0 0.02em, 8px 9px 0 0.02em #fff, 9px 9px 0 0.02em #fff,
        10px 9px 0 0.02em, 11px 9px 0 0.02em, 12px 9px 0 0.02em #fff,
        13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff, 15px 9px 0 0.02em #fff,
        16px 9px 0 0.02em, 1px 10px 0 0.02em, 2px 10px 0 0.02em #fff,
        3px 10px 0 0.02em #fff, 4px 10px 0 0.02em #fff, 5px 10px 0 0.02em #fff,
        6px 10px 0 0.02em #fff, 7px 10px 0 0.02em #fff, 8px 10px 0 0.02em #fff,
        9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff, 11px 10px 0 0.02em #fff,
        12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff,
        14px 10px 0 0.02em #fff, 15px 10px 0 0.02em #fff, 16px 10px 0 0.02em,
        1px 11px 0 0.02em, 2px 11px 0 0.02em #fff, 3px 11px 0 0.02em #fff,
        4px 11px 0 0.02em #fff, 5px 11px 0 0.02em #fff, 6px 11px 0 0.02em #fff,
        7px 11px 0 0.02em #fff, 8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff,
        10px 11px 0 0.02em #fff, 11px 11px 0 0.02em #fff,
        12px 11px 0 0.02em #fff, 13px 11px 0 0.02em #fff,
        14px 11px 0 0.02em #fff, 15px 11px 0 0.02em #fff, 16px 11px 0 0.02em,
        1px 12px 0 0.02em, 2px 12px 0 0.02em, 3px 12px 0 0.02em #fff,
        4px 12px 0 0.02em #fff, 5px 12px 0 0.02em #fff, 6px 12px 0 0.02em,
        7px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff, 9px 12px 0 0.02em #fff,
        10px 12px 0 0.02em #fff, 11px 12px 0 0.02em, 12px 12px 0 0.02em #fff,
        13px 12px 0 0.02em #fff, 14px 12px 0 0.02em #fff, 15px 12px 0 0.02em,
        16px 12px 0 0.02em, 1px 13px 0 0.02em, 2px 13px 0 0.02em,
        3px 13px 0 0.02em, 4px 13px 0 0.02em #fff, 5px 13px 0 0.02em #fff,
        6px 13px 0 0.02em #fff, 7px 13px 0 0.02em, 8px 13px 0 0.02em,
        9px 13px 0 0.02em, 10px 13px 0 0.02em, 11px 13px 0 0.02em #fff,
        12px 13px 0 0.02em #fff, 13px 13px 0 0.02em #fff, 14px 13px 0 0.02em,
        15px 13px 0 0.02em, 16px 13px 0 0.02em, 1px 14px 0 0.02em,
        2px 14px 0 0.02em, 3px 14px 0 0.02em, 4px 14px 0 0.02em,
        5px 14px 0 0.02em #fff, 6px 14px 0 0.02em #fff, 7px 14px 0 0.02em #fff,
        8px 14px 0 0.02em #fff, 9px 14px 0 0.02em #fff, 10px 14px 0 0.02em #fff,
        11px 14px 0 0.02em #fff, 12px 14px 0 0.02em #fff, 13px 14px 0 0.02em,
        14px 14px 0 0.02em, 15px 14px 0 0.02em, 16px 14px 0 0.02em,
        2px 15px 0 0.02em, 3px 15px 0 0.02em, 4px 15px 0 0.02em,
        5px 15px 0 0.02em, 6px 15px 0 0.02em, 7px 15px 0 0.02em #fff,
        8px 15px 0 0.02em #fff, 9px 15px 0 0.02em #fff, 10px 15px 0 0.02em #fff,
        11px 15px 0 0.02em, 12px 15px 0 0.02em, 13px 15px 0 0.02em,
        14px 15px 0 0.02em, 15px 15px 0 0.02em, 3px 16px 0 0.02em,
        4px 16px 0 0.02em, 5px 16px 0 0.02em, 6px 16px 0 0.02em,
        7px 16px 0 0.02em, 8px 16px 0 0.02em, 9px 16px 0 0.02em,
        10px 16px 0 0.02em, 11px 16px 0 0.02em, 12px 16px 0 0.02em,
        13px 16px 0 0.02em, 14px 16px 0 0.02em;
    }
  }

  .nes-icon.whatsapp::before {
    width: 1px;
    height: 1px;
    color: #00ba37;
    box-shadow: 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
      11px 1px, 12px 1px, 13px 1px, 14px 1px, 3px 2px, 4px 2px, 5px 2px,
      6px 2px #fff, 7px 2px #fff, 8px 2px #fff, 9px 2px #fff, 10px 2px #fff,
      11px 2px #fff, 12px 2px #fff, 13px 2px, 14px 2px, 15px 2px, 2px 3px,
      3px 3px, 4px 3px, 5px 3px #fff, 6px 3px, 7px 3px, 8px 3px, 9px 3px,
      10px 3px, 11px 3px, 12px 3px, 13px 3px #fff, 14px 3px, 15px 3px, 16px 3px,
      2px 4px, 3px 4px, 4px 4px #fff, 5px 4px, 6px 4px, 7px 4px, 8px 4px,
      9px 4px, 10px 4px, 11px 4px, 12px 4px, 13px 4px, 14px 4px #fff, 15px 4px,
      16px 4px, 2px 5px, 3px 5px, 4px 5px #fff, 5px 5px, 6px 5px #fff,
      7px 5px #fff, 8px 5px, 9px 5px, 10px 5px, 11px 5px, 12px 5px, 13px 5px,
      14px 5px #fff, 15px 5px, 16px 5px, 2px 6px, 3px 6px #fff, 4px 6px, 5px 6px,
      6px 6px #fff, 7px 6px #fff, 8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px,
      13px 6px, 14px 6px, 15px 6px #fff, 16px 6px, 2px 7px, 3px 7px #fff,
      4px 7px, 5px 7px, 6px 7px #fff, 7px 7px, 8px 7px, 9px 7px, 10px 7px,
      11px 7px, 12px 7px, 13px 7px, 14px 7px, 15px 7px #fff, 16px 7px, 2px 8px,
      3px 8px #fff, 4px 8px, 5px 8px, 6px 8px, 7px 8px #fff, 8px 8px #fff,
      9px 8px, 10px 8px, 11px 8px, 12px 8px, 13px 8px, 14px 8px, 15px 8px #fff,
      16px 8px, 2px 9px, 3px 9px #fff, 4px 9px, 5px 9px, 6px 9px, 7px 9px,
      8px 9px #fff, 9px 9px #fff, 10px 9px, 11px 9px, 12px 9px, 13px 9px,
      14px 9px, 15px 9px #fff, 16px 9px, 2px 10px, 3px 10px #fff, 4px 10px,
      5px 10px, 6px 10px, 7px 10px, 8px 10px, 9px 10px #fff, 10px 10px,
      11px 10px #fff, 12px 10px #fff, 13px 10px, 14px 10px, 15px 10px #fff,
      16px 10px, 2px 11px, 3px 11px, 4px 11px #fff, 5px 11px, 6px 11px, 7px 11px,
      8px 11px, 9px 11px, 10px 11px #fff, 11px 11px #fff, 12px 11px #fff,
      13px 11px, 14px 11px #fff, 15px 11px, 16px 11px, 2px 12px, 3px 12px,
      4px 12px #fff, 5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px,
      11px 12px, 12px 12px, 13px 12px, 14px 12px #fff, 15px 12px, 16px 12px,
      2px 13px, 3px 13px #fff, 4px 13px, 5px 13px #fff, 6px 13px, 7px 13px,
      8px 13px, 9px 13px, 10px 13px, 11px 13px, 12px 13px, 13px 13px #fff,
      14px 13px, 15px 13px, 16px 13px, 2px 14px, 3px 14px #fff, 4px 14px #fff,
      5px 14px, 6px 14px #fff, 7px 14px #fff, 8px 14px #fff, 9px 14px #fff,
      10px 14px #fff, 11px 14px #fff, 12px 14px #fff, 13px 14px, 14px 14px,
      15px 14px, 3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px,
      9px 15px, 10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.whatsapp::before {
      box-shadow: 4px 1px 0 0.02em, 5px 1px 0 0.02em, 6px 1px 0 0.02em,
        7px 1px 0 0.02em, 8px 1px 0 0.02em, 9px 1px 0 0.02em, 10px 1px 0 0.02em,
        11px 1px 0 0.02em, 12px 1px 0 0.02em, 13px 1px 0 0.02em,
        14px 1px 0 0.02em, 3px 2px 0 0.02em, 4px 2px 0 0.02em, 5px 2px 0 0.02em,
        6px 2px 0 0.02em #fff, 7px 2px 0 0.02em #fff, 8px 2px 0 0.02em #fff,
        9px 2px 0 0.02em #fff, 10px 2px 0 0.02em #fff, 11px 2px 0 0.02em #fff,
        12px 2px 0 0.02em #fff, 13px 2px 0 0.02em, 14px 2px 0 0.02em,
        15px 2px 0 0.02em, 2px 3px 0 0.02em, 3px 3px 0 0.02em, 4px 3px 0 0.02em,
        5px 3px 0 0.02em #fff, 6px 3px 0 0.02em, 7px 3px 0 0.02em,
        8px 3px 0 0.02em, 9px 3px 0 0.02em, 10px 3px 0 0.02em, 11px 3px 0 0.02em,
        12px 3px 0 0.02em, 13px 3px 0 0.02em #fff, 14px 3px 0 0.02em,
        15px 3px 0 0.02em, 16px 3px 0 0.02em, 2px 4px 0 0.02em, 3px 4px 0 0.02em,
        4px 4px 0 0.02em #fff, 5px 4px 0 0.02em, 6px 4px 0 0.02em,
        7px 4px 0 0.02em, 8px 4px 0 0.02em, 9px 4px 0 0.02em, 10px 4px 0 0.02em,
        11px 4px 0 0.02em, 12px 4px 0 0.02em, 13px 4px 0 0.02em,
        14px 4px 0 0.02em #fff, 15px 4px 0 0.02em, 16px 4px 0 0.02em,
        2px 5px 0 0.02em, 3px 5px 0 0.02em, 4px 5px 0 0.02em #fff,
        5px 5px 0 0.02em, 6px 5px 0 0.02em #fff, 7px 5px 0 0.02em #fff,
        8px 5px 0 0.02em, 9px 5px 0 0.02em, 10px 5px 0 0.02em, 11px 5px 0 0.02em,
        12px 5px 0 0.02em, 13px 5px 0 0.02em, 14px 5px 0 0.02em #fff,
        15px 5px 0 0.02em, 16px 5px 0 0.02em, 2px 6px 0 0.02em,
        3px 6px 0 0.02em #fff, 4px 6px 0 0.02em, 5px 6px 0 0.02em,
        6px 6px 0 0.02em #fff, 7px 6px 0 0.02em #fff, 8px 6px 0 0.02em,
        9px 6px 0 0.02em, 10px 6px 0 0.02em, 11px 6px 0 0.02em,
        12px 6px 0 0.02em, 13px 6px 0 0.02em, 14px 6px 0 0.02em,
        15px 6px 0 0.02em #fff, 16px 6px 0 0.02em, 2px 7px 0 0.02em,
        3px 7px 0 0.02em #fff, 4px 7px 0 0.02em, 5px 7px 0 0.02em,
        6px 7px 0 0.02em #fff, 7px 7px 0 0.02em, 8px 7px 0 0.02em,
        9px 7px 0 0.02em, 10px 7px 0 0.02em, 11px 7px 0 0.02em,
        12px 7px 0 0.02em, 13px 7px 0 0.02em, 14px 7px 0 0.02em,
        15px 7px 0 0.02em #fff, 16px 7px 0 0.02em, 2px 8px 0 0.02em,
        3px 8px 0 0.02em #fff, 4px 8px 0 0.02em, 5px 8px 0 0.02em,
        6px 8px 0 0.02em, 7px 8px 0 0.02em #fff, 8px 8px 0 0.02em #fff,
        9px 8px 0 0.02em, 10px 8px 0 0.02em, 11px 8px 0 0.02em,
        12px 8px 0 0.02em, 13px 8px 0 0.02em, 14px 8px 0 0.02em,
        15px 8px 0 0.02em #fff, 16px 8px 0 0.02em, 2px 9px 0 0.02em,
        3px 9px 0 0.02em #fff, 4px 9px 0 0.02em, 5px 9px 0 0.02em,
        6px 9px 0 0.02em, 7px 9px 0 0.02em, 8px 9px 0 0.02em #fff,
        9px 9px 0 0.02em #fff, 10px 9px 0 0.02em, 11px 9px 0 0.02em,
        12px 9px 0 0.02em, 13px 9px 0 0.02em, 14px 9px 0 0.02em,
        15px 9px 0 0.02em #fff, 16px 9px 0 0.02em, 2px 10px 0 0.02em,
        3px 10px 0 0.02em #fff, 4px 10px 0 0.02em, 5px 10px 0 0.02em,
        6px 10px 0 0.02em, 7px 10px 0 0.02em, 8px 10px 0 0.02em,
        9px 10px 0 0.02em #fff, 10px 10px 0 0.02em, 11px 10px 0 0.02em #fff,
        12px 10px 0 0.02em #fff, 13px 10px 0 0.02em, 14px 10px 0 0.02em,
        15px 10px 0 0.02em #fff, 16px 10px 0 0.02em, 2px 11px 0 0.02em,
        3px 11px 0 0.02em, 4px 11px 0 0.02em #fff, 5px 11px 0 0.02em,
        6px 11px 0 0.02em, 7px 11px 0 0.02em, 8px 11px 0 0.02em,
        9px 11px 0 0.02em, 10px 11px 0 0.02em #fff, 11px 11px 0 0.02em #fff,
        12px 11px 0 0.02em #fff, 13px 11px 0 0.02em, 14px 11px 0 0.02em #fff,
        15px 11px 0 0.02em, 16px 11px 0 0.02em, 2px 12px 0 0.02em,
        3px 12px 0 0.02em, 4px 12px 0 0.02em #fff, 5px 12px 0 0.02em,
        6px 12px 0 0.02em, 7px 12px 0 0.02em, 8px 12px 0 0.02em,
        9px 12px 0 0.02em, 10px 12px 0 0.02em, 11px 12px 0 0.02em,
        12px 12px 0 0.02em, 13px 12px 0 0.02em, 14px 12px 0 0.02em #fff,
        15px 12px 0 0.02em, 16px 12px 0 0.02em, 2px 13px 0 0.02em,
        3px 13px 0 0.02em #fff, 4px 13px 0 0.02em, 5px 13px 0 0.02em #fff,
        6px 13px 0 0.02em, 7px 13px 0 0.02em, 8px 13px 0 0.02em,
        9px 13px 0 0.02em, 10px 13px 0 0.02em, 11px 13px 0 0.02em,
        12px 13px 0 0.02em, 13px 13px 0 0.02em #fff, 14px 13px 0 0.02em,
        15px 13px 0 0.02em, 16px 13px 0 0.02em, 2px 14px 0 0.02em,
        3px 14px 0 0.02em #fff, 4px 14px 0 0.02em #fff, 5px 14px 0 0.02em,
        6px 14px 0 0.02em #fff, 7px 14px 0 0.02em #fff, 8px 14px 0 0.02em #fff,
        9px 14px 0 0.02em #fff, 10px 14px 0 0.02em #fff, 11px 14px 0 0.02em #fff,
        12px 14px 0 0.02em #fff, 13px 14px 0 0.02em, 14px 14px 0 0.02em,
        15px 14px 0 0.02em, 3px 15px 0 0.02em, 4px 15px 0 0.02em,
        5px 15px 0 0.02em, 6px 15px 0 0.02em, 7px 15px 0 0.02em,
        8px 15px 0 0.02em, 9px 15px 0 0.02em, 10px 15px 0 0.02em,
        11px 15px 0 0.02em, 12px 15px 0 0.02em, 13px 15px 0 0.02em,
        14px 15px 0 0.02em;
    }
  }

  .nes-icon.gmail::before {
    width: 1px;
    height: 1px;
    color: #eeecec;
    box-shadow: 2px 3px #fd2b2b, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px,
      8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px,
      15px 3px #fd2b2b, 1px 4px #fd2b2b, 2px 4px #fd2b2b, 3px 4px #fd2b2b,
      4px 4px, 5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px,
      12px 4px, 13px 4px, 14px 4px #fd2b2b, 15px 4px #fd2b2b, 16px 4px #fd2b2b,
      1px 5px #fd2b2b, 2px 5px #fd2b2b, 3px 5px #fd2b2b, 4px 5px #fd2b2b,
      5px 5px, 6px 5px, 7px 5px, 8px 5px, 9px 5px, 10px 5px, 11px 5px, 12px 5px,
      13px 5px #fd2b2b, 14px 5px #fd2b2b, 15px 5px #fd2b2b, 16px 5px #fd2b2b,
      1px 6px #fd2b2b, 2px 6px #fd2b2b, 3px 6px, 4px 6px #fd2b2b,
      5px 6px #fd2b2b, 6px 6px, 7px 6px, 8px 6px, 9px 6px, 10px 6px, 11px 6px,
      12px 6px #fd2b2b, 13px 6px #fd2b2b, 14px 6px, 15px 6px #fd2b2b,
      16px 6px #fd2b2b, 1px 7px #fd2b2b, 2px 7px #fd2b2b, 3px 7px, 4px 7px,
      5px 7px #fd2b2b, 6px 7px #fd2b2b, 7px 7px, 8px 7px, 9px 7px, 10px 7px,
      11px 7px #fd2b2b, 12px 7px #fd2b2b, 13px 7px, 14px 7px, 15px 7px #fd2b2b,
      16px 7px #fd2b2b, 1px 8px #fd2b2b, 2px 8px #fd2b2b, 3px 8px, 4px 8px,
      5px 8px, 6px 8px #fd2b2b, 7px 8px #fd2b2b, 8px 8px, 9px 8px,
      10px 8px #fd2b2b, 11px 8px #fd2b2b, 12px 8px, 13px 8px, 14px 8px,
      15px 8px #fd2b2b, 16px 8px #fd2b2b, 1px 9px #fd2b2b, 2px 9px #fd2b2b,
      3px 9px, 4px 9px, 5px 9px, 6px 9px, 7px 9px #fd2b2b, 8px 9px #fd2b2b,
      9px 9px #fd2b2b, 10px 9px #fd2b2b, 11px 9px, 12px 9px, 13px 9px, 14px 9px,
      15px 9px #fd2b2b, 16px 9px #fd2b2b, 1px 10px #fd2b2b, 2px 10px #fd2b2b,
      3px 10px, 4px 10px, 5px 10px, 6px 10px, 7px 10px, 8px 10px #fd2b2b,
      9px 10px #fd2b2b, 10px 10px, 11px 10px, 12px 10px, 13px 10px, 14px 10px,
      15px 10px #fd2b2b, 16px 10px #fd2b2b, 1px 11px #fd2b2b, 2px 11px #fd2b2b,
      3px 11px, 4px 11px, 5px 11px, 6px 11px, 7px 11px, 8px 11px, 9px 11px,
      10px 11px, 11px 11px, 12px 11px, 13px 11px, 14px 11px, 15px 11px #fd2b2b,
      16px 11px #fd2b2b, 1px 12px #fd2b2b, 2px 12px #fd2b2b, 3px 12px, 4px 12px,
      5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px, 11px 12px,
      12px 12px, 13px 12px, 14px 12px, 15px 12px #fd2b2b, 16px 12px #fd2b2b,
      1px 13px #fd2b2b, 2px 13px #fd2b2b, 3px 13px, 4px 13px, 5px 13px, 6px 13px,
      7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px, 12px 13px, 13px 13px,
      14px 13px, 15px 13px #fd2b2b, 16px 13px #fd2b2b, 2px 14px #fd2b2b,
      3px 14px, 4px 14px, 5px 14px, 6px 14px, 7px 14px, 8px 14px, 9px 14px,
      10px 14px, 11px 14px, 12px 14px, 13px 14px, 14px 14px, 15px 14px #fd2b2b;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.gmail::before {
      box-shadow: 2px 3px 0 0.02em #fd2b2b, 3px 3px 0 0.02em, 4px 3px 0 0.02em,
        5px 3px 0 0.02em, 6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em,
        9px 3px 0 0.02em, 10px 3px 0 0.02em, 11px 3px 0 0.02em,
        12px 3px 0 0.02em, 13px 3px 0 0.02em, 14px 3px 0 0.02em,
        15px 3px 0 0.02em #fd2b2b, 1px 4px 0 0.02em #fd2b2b,
        2px 4px 0 0.02em #fd2b2b, 3px 4px 0 0.02em #fd2b2b, 4px 4px 0 0.02em,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em, 8px 4px 0 0.02em,
        9px 4px 0 0.02em, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em, 13px 4px 0 0.02em, 14px 4px 0 0.02em #fd2b2b,
        15px 4px 0 0.02em #fd2b2b, 16px 4px 0 0.02em #fd2b2b,
        1px 5px 0 0.02em #fd2b2b, 2px 5px 0 0.02em #fd2b2b,
        3px 5px 0 0.02em #fd2b2b, 4px 5px 0 0.02em #fd2b2b, 5px 5px 0 0.02em,
        6px 5px 0 0.02em, 7px 5px 0 0.02em, 8px 5px 0 0.02em, 9px 5px 0 0.02em,
        10px 5px 0 0.02em, 11px 5px 0 0.02em, 12px 5px 0 0.02em,
        13px 5px 0 0.02em #fd2b2b, 14px 5px 0 0.02em #fd2b2b,
        15px 5px 0 0.02em #fd2b2b, 16px 5px 0 0.02em #fd2b2b,
        1px 6px 0 0.02em #fd2b2b, 2px 6px 0 0.02em #fd2b2b, 3px 6px 0 0.02em,
        4px 6px 0 0.02em #fd2b2b, 5px 6px 0 0.02em #fd2b2b, 6px 6px 0 0.02em,
        7px 6px 0 0.02em, 8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em,
        11px 6px 0 0.02em, 12px 6px 0 0.02em #fd2b2b, 13px 6px 0 0.02em #fd2b2b,
        14px 6px 0 0.02em, 15px 6px 0 0.02em #fd2b2b, 16px 6px 0 0.02em #fd2b2b,
        1px 7px 0 0.02em #fd2b2b, 2px 7px 0 0.02em #fd2b2b, 3px 7px 0 0.02em,
        4px 7px 0 0.02em, 5px 7px 0 0.02em #fd2b2b, 6px 7px 0 0.02em #fd2b2b,
        7px 7px 0 0.02em, 8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em,
        11px 7px 0 0.02em #fd2b2b, 12px 7px 0 0.02em #fd2b2b, 13px 7px 0 0.02em,
        14px 7px 0 0.02em, 15px 7px 0 0.02em #fd2b2b, 16px 7px 0 0.02em #fd2b2b,
        1px 8px 0 0.02em #fd2b2b, 2px 8px 0 0.02em #fd2b2b, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em #fd2b2b,
        7px 8px 0 0.02em #fd2b2b, 8px 8px 0 0.02em, 9px 8px 0 0.02em,
        10px 8px 0 0.02em #fd2b2b, 11px 8px 0 0.02em #fd2b2b, 12px 8px 0 0.02em,
        13px 8px 0 0.02em, 14px 8px 0 0.02em, 15px 8px 0 0.02em #fd2b2b,
        16px 8px 0 0.02em #fd2b2b, 1px 9px 0 0.02em #fd2b2b,
        2px 9px 0 0.02em #fd2b2b, 3px 9px 0 0.02em, 4px 9px 0 0.02em,
        5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em #fd2b2b,
        8px 9px 0 0.02em #fd2b2b, 9px 9px 0 0.02em #fd2b2b,
        10px 9px 0 0.02em #fd2b2b, 11px 9px 0 0.02em, 12px 9px 0 0.02em,
        13px 9px 0 0.02em, 14px 9px 0 0.02em, 15px 9px 0 0.02em #fd2b2b,
        16px 9px 0 0.02em #fd2b2b, 1px 10px 0 0.02em #fd2b2b,
        2px 10px 0 0.02em #fd2b2b, 3px 10px 0 0.02em, 4px 10px 0 0.02em,
        5px 10px 0 0.02em, 6px 10px 0 0.02em, 7px 10px 0 0.02em,
        8px 10px 0 0.02em #fd2b2b, 9px 10px 0 0.02em #fd2b2b, 10px 10px 0 0.02em,
        11px 10px 0 0.02em, 12px 10px 0 0.02em, 13px 10px 0 0.02em,
        14px 10px 0 0.02em, 15px 10px 0 0.02em #fd2b2b,
        16px 10px 0 0.02em #fd2b2b, 1px 11px 0 0.02em #fd2b2b,
        2px 11px 0 0.02em #fd2b2b, 3px 11px 0 0.02em, 4px 11px 0 0.02em,
        5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em,
        8px 11px 0 0.02em, 9px 11px 0 0.02em, 10px 11px 0 0.02em,
        11px 11px 0 0.02em, 12px 11px 0 0.02em, 13px 11px 0 0.02em,
        14px 11px 0 0.02em, 15px 11px 0 0.02em #fd2b2b,
        16px 11px 0 0.02em #fd2b2b, 1px 12px 0 0.02em #fd2b2b,
        2px 12px 0 0.02em #fd2b2b, 3px 12px 0 0.02em, 4px 12px 0 0.02em,
        5px 12px 0 0.02em, 6px 12px 0 0.02em, 7px 12px 0 0.02em,
        8px 12px 0 0.02em, 9px 12px 0 0.02em, 10px 12px 0 0.02em,
        11px 12px 0 0.02em, 12px 12px 0 0.02em, 13px 12px 0 0.02em,
        14px 12px 0 0.02em, 15px 12px 0 0.02em #fd2b2b,
        16px 12px 0 0.02em #fd2b2b, 1px 13px 0 0.02em #fd2b2b,
        2px 13px 0 0.02em #fd2b2b, 3px 13px 0 0.02em, 4px 13px 0 0.02em,
        5px 13px 0 0.02em, 6px 13px 0 0.02em, 7px 13px 0 0.02em,
        8px 13px 0 0.02em, 9px 13px 0 0.02em, 10px 13px 0 0.02em,
        11px 13px 0 0.02em, 12px 13px 0 0.02em, 13px 13px 0 0.02em,
        14px 13px 0 0.02em, 15px 13px 0 0.02em #fd2b2b,
        16px 13px 0 0.02em #fd2b2b, 2px 14px 0 0.02em #fd2b2b, 3px 14px 0 0.02em,
        4px 14px 0 0.02em, 5px 14px 0 0.02em, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 8px 14px 0 0.02em, 9px 14px 0 0.02em,
        10px 14px 0 0.02em, 11px 14px 0 0.02em, 12px 14px 0 0.02em,
        13px 14px 0 0.02em, 14px 14px 0 0.02em, 15px 14px 0 0.02em #fd2b2b;
    }
  }

  .nes-icon.linkedin::before {
    width: 1px;
    height: 1px;
    color: #2577b9;
    box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px,
      9px 1px, 10px 1px, 11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px,
      1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px, 7px 2px, 8px 2px,
      9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px, 15px 2px,
      16px 2px, 1px 3px, 2px 3px, 3px 3px #fff, 4px 3px #fff, 5px 3px #fff,
      6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px,
      14px 3px, 15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px #fff, 4px 4px #fff,
      5px 4px #fff, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px,
      12px 4px, 13px 4px, 14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px,
      3px 5px #fff, 4px 5px #fff, 5px 5px #fff, 6px 5px, 7px 5px, 8px 5px,
      9px 5px, 10px 5px, 11px 5px, 12px 5px, 13px 5px, 14px 5px, 15px 5px,
      16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px,
      8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px,
      15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff, 4px 7px #fff,
      5px 7px #fff, 6px 7px, 7px 7px #fff, 8px 7px #fff, 9px 7px #fff, 10px 7px,
      11px 7px #fff, 12px 7px #fff, 13px 7px #fff, 14px 7px, 15px 7px, 16px 7px,
      1px 8px, 2px 8px, 3px 8px #fff, 4px 8px #fff, 5px 8px #fff, 6px 8px,
      7px 8px #fff, 8px 8px #fff, 9px 8px #fff, 10px 8px #fff, 11px 8px #fff,
      12px 8px #fff, 13px 8px #fff, 14px 8px #fff, 15px 8px, 16px 8px, 1px 9px,
      2px 9px, 3px 9px #fff, 4px 9px #fff, 5px 9px #fff, 6px 9px, 7px 9px #fff,
      8px 9px #fff, 9px 9px #fff, 10px 9px #fff, 11px 9px #fff, 12px 9px #fff,
      13px 9px #fff, 14px 9px #fff, 15px 9px, 16px 9px, 1px 10px, 2px 10px,
      3px 10px #fff, 4px 10px #fff, 5px 10px #fff, 6px 10px, 7px 10px #fff,
      8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px, 12px 10px #fff,
      13px 10px #fff, 14px 10px #fff, 15px 10px, 16px 10px, 1px 11px, 2px 11px,
      3px 11px #fff, 4px 11px #fff, 5px 11px #fff, 6px 11px, 7px 11px #fff,
      8px 11px #fff, 9px 11px #fff, 10px 11px, 11px 11px, 12px 11px #fff,
      13px 11px #fff, 14px 11px #fff, 15px 11px, 16px 11px, 1px 12px, 2px 12px,
      3px 12px #fff, 4px 12px #fff, 5px 12px #fff, 6px 12px, 7px 12px #fff,
      8px 12px #fff, 9px 12px #fff, 10px 12px, 11px 12px, 12px 12px #fff,
      13px 12px #fff, 14px 12px #fff, 15px 12px, 16px 12px, 1px 13px, 2px 13px,
      3px 13px #fff, 4px 13px #fff, 5px 13px #fff, 6px 13px, 7px 13px #fff,
      8px 13px #fff, 9px 13px #fff, 10px 13px, 11px 13px, 12px 13px #fff,
      13px 13px #fff, 14px 13px #fff, 15px 13px, 16px 13px, 1px 14px, 2px 14px,
      3px 14px #fff, 4px 14px #fff, 5px 14px #fff, 6px 14px, 7px 14px #fff,
      8px 14px #fff, 9px 14px #fff, 10px 14px, 11px 14px, 12px 14px #fff,
      13px 14px #fff, 14px 14px #fff, 15px 14px, 16px 14px, 1px 15px, 2px 15px,
      3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px, 9px 15px,
      10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px, 15px 15px,
      16px 15px, 2px 16px, 3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px,
      8px 16px, 9px 16px, 10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px,
      15px 16px;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.linkedin::before {
      box-shadow: 2px 1px 0 0.02em, 3px 1px 0 0.02em, 4px 1px 0 0.02em,
        5px 1px 0 0.02em, 6px 1px 0 0.02em, 7px 1px 0 0.02em, 8px 1px 0 0.02em,
        9px 1px 0 0.02em, 10px 1px 0 0.02em, 11px 1px 0 0.02em,
        12px 1px 0 0.02em, 13px 1px 0 0.02em, 14px 1px 0 0.02em,
        15px 1px 0 0.02em, 1px 2px 0 0.02em, 2px 2px 0 0.02em, 3px 2px 0 0.02em,
        4px 2px 0 0.02em, 5px 2px 0 0.02em, 6px 2px 0 0.02em, 7px 2px 0 0.02em,
        8px 2px 0 0.02em, 9px 2px 0 0.02em, 10px 2px 0 0.02em, 11px 2px 0 0.02em,
        12px 2px 0 0.02em, 13px 2px 0 0.02em, 14px 2px 0 0.02em,
        15px 2px 0 0.02em, 16px 2px 0 0.02em, 1px 3px 0 0.02em, 2px 3px 0 0.02em,
        3px 3px 0 0.02em #fff, 4px 3px 0 0.02em #fff, 5px 3px 0 0.02em #fff,
        6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
        10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em,
        13px 3px 0 0.02em, 14px 3px 0 0.02em, 15px 3px 0 0.02em,
        16px 3px 0 0.02em, 1px 4px 0 0.02em, 2px 4px 0 0.02em,
        3px 4px 0 0.02em #fff, 4px 4px 0 0.02em #fff, 5px 4px 0 0.02em #fff,
        6px 4px 0 0.02em, 7px 4px 0 0.02em, 8px 4px 0 0.02em, 9px 4px 0 0.02em,
        10px 4px 0 0.02em, 11px 4px 0 0.02em, 12px 4px 0 0.02em,
        13px 4px 0 0.02em, 14px 4px 0 0.02em, 15px 4px 0 0.02em,
        16px 4px 0 0.02em, 1px 5px 0 0.02em, 2px 5px 0 0.02em,
        3px 5px 0 0.02em #fff, 4px 5px 0 0.02em #fff, 5px 5px 0 0.02em #fff,
        6px 5px 0 0.02em, 7px 5px 0 0.02em, 8px 5px 0 0.02em, 9px 5px 0 0.02em,
        10px 5px 0 0.02em, 11px 5px 0 0.02em, 12px 5px 0 0.02em,
        13px 5px 0 0.02em, 14px 5px 0 0.02em, 15px 5px 0 0.02em,
        16px 5px 0 0.02em, 1px 6px 0 0.02em, 2px 6px 0 0.02em, 3px 6px 0 0.02em,
        4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em, 7px 6px 0 0.02em,
        8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em, 11px 6px 0 0.02em,
        12px 6px 0 0.02em, 13px 6px 0 0.02em, 14px 6px 0 0.02em,
        15px 6px 0 0.02em, 16px 6px 0 0.02em, 1px 7px 0 0.02em, 2px 7px 0 0.02em,
        3px 7px 0 0.02em #fff, 4px 7px 0 0.02em #fff, 5px 7px 0 0.02em #fff,
        6px 7px 0 0.02em, 7px 7px 0 0.02em #fff, 8px 7px 0 0.02em #fff,
        9px 7px 0 0.02em #fff, 10px 7px 0 0.02em, 11px 7px 0 0.02em #fff,
        12px 7px 0 0.02em #fff, 13px 7px 0 0.02em #fff, 14px 7px 0 0.02em,
        15px 7px 0 0.02em, 16px 7px 0 0.02em, 1px 8px 0 0.02em, 2px 8px 0 0.02em,
        3px 8px 0 0.02em #fff, 4px 8px 0 0.02em #fff, 5px 8px 0 0.02em #fff,
        6px 8px 0 0.02em, 7px 8px 0 0.02em #fff, 8px 8px 0 0.02em #fff,
        9px 8px 0 0.02em #fff, 10px 8px 0 0.02em #fff, 11px 8px 0 0.02em #fff,
        12px 8px 0 0.02em #fff, 13px 8px 0 0.02em #fff, 14px 8px 0 0.02em #fff,
        15px 8px 0 0.02em, 16px 8px 0 0.02em, 1px 9px 0 0.02em, 2px 9px 0 0.02em,
        3px 9px 0 0.02em #fff, 4px 9px 0 0.02em #fff, 5px 9px 0 0.02em #fff,
        6px 9px 0 0.02em, 7px 9px 0 0.02em #fff, 8px 9px 0 0.02em #fff,
        9px 9px 0 0.02em #fff, 10px 9px 0 0.02em #fff, 11px 9px 0 0.02em #fff,
        12px 9px 0 0.02em #fff, 13px 9px 0 0.02em #fff, 14px 9px 0 0.02em #fff,
        15px 9px 0 0.02em, 16px 9px 0 0.02em, 1px 10px 0 0.02em,
        2px 10px 0 0.02em, 3px 10px 0 0.02em #fff, 4px 10px 0 0.02em #fff,
        5px 10px 0 0.02em #fff, 6px 10px 0 0.02em, 7px 10px 0 0.02em #fff,
        8px 10px 0 0.02em #fff, 9px 10px 0 0.02em #fff, 10px 10px 0 0.02em #fff,
        11px 10px 0 0.02em, 12px 10px 0 0.02em #fff, 13px 10px 0 0.02em #fff,
        14px 10px 0 0.02em #fff, 15px 10px 0 0.02em, 16px 10px 0 0.02em,
        1px 11px 0 0.02em, 2px 11px 0 0.02em, 3px 11px 0 0.02em #fff,
        4px 11px 0 0.02em #fff, 5px 11px 0 0.02em #fff, 6px 11px 0 0.02em,
        7px 11px 0 0.02em #fff, 8px 11px 0 0.02em #fff, 9px 11px 0 0.02em #fff,
        10px 11px 0 0.02em, 11px 11px 0 0.02em, 12px 11px 0 0.02em #fff,
        13px 11px 0 0.02em #fff, 14px 11px 0 0.02em #fff, 15px 11px 0 0.02em,
        16px 11px 0 0.02em, 1px 12px 0 0.02em, 2px 12px 0 0.02em,
        3px 12px 0 0.02em #fff, 4px 12px 0 0.02em #fff, 5px 12px 0 0.02em #fff,
        6px 12px 0 0.02em, 7px 12px 0 0.02em #fff, 8px 12px 0 0.02em #fff,
        9px 12px 0 0.02em #fff, 10px 12px 0 0.02em, 11px 12px 0 0.02em,
        12px 12px 0 0.02em #fff, 13px 12px 0 0.02em #fff,
        14px 12px 0 0.02em #fff, 15px 12px 0 0.02em, 16px 12px 0 0.02em,
        1px 13px 0 0.02em, 2px 13px 0 0.02em, 3px 13px 0 0.02em #fff,
        4px 13px 0 0.02em #fff, 5px 13px 0 0.02em #fff, 6px 13px 0 0.02em,
        7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #fff, 9px 13px 0 0.02em #fff,
        10px 13px 0 0.02em, 11px 13px 0 0.02em, 12px 13px 0 0.02em #fff,
        13px 13px 0 0.02em #fff, 14px 13px 0 0.02em #fff, 15px 13px 0 0.02em,
        16px 13px 0 0.02em, 1px 14px 0 0.02em, 2px 14px 0 0.02em,
        3px 14px 0 0.02em #fff, 4px 14px 0 0.02em #fff, 5px 14px 0 0.02em #fff,
        6px 14px 0 0.02em, 7px 14px 0 0.02em #fff, 8px 14px 0 0.02em #fff,
        9px 14px 0 0.02em #fff, 10px 14px 0 0.02em, 11px 14px 0 0.02em,
        12px 14px 0 0.02em #fff, 13px 14px 0 0.02em #fff,
        14px 14px 0 0.02em #fff, 15px 14px 0 0.02em, 16px 14px 0 0.02em,
        1px 15px 0 0.02em, 2px 15px 0 0.02em, 3px 15px 0 0.02em,
        4px 15px 0 0.02em, 5px 15px 0 0.02em, 6px 15px 0 0.02em,
        7px 15px 0 0.02em, 8px 15px 0 0.02em, 9px 15px 0 0.02em,
        10px 15px 0 0.02em, 11px 15px 0 0.02em, 12px 15px 0 0.02em,
        13px 15px 0 0.02em, 14px 15px 0 0.02em, 15px 15px 0 0.02em,
        16px 15px 0 0.02em, 2px 16px 0 0.02em, 3px 16px 0 0.02em,
        4px 16px 0 0.02em, 5px 16px 0 0.02em, 6px 16px 0 0.02em,
        7px 16px 0 0.02em, 8px 16px 0 0.02em, 9px 16px 0 0.02em,
        10px 16px 0 0.02em, 11px 16px 0 0.02em, 12px 16px 0 0.02em,
        13px 16px 0 0.02em, 14px 16px 0 0.02em, 15px 16px 0 0.02em;
    }
  }

  .nes-icon.instagram::before {
    width: 1px;
    height: 1px;
    color: #fff;
    box-shadow: 3px 1px #8005c8, 4px 1px #8005c8, 5px 1px #8005c8,
      6px 1px #8005c8, 7px 1px #8005c8, 8px 1px #8005c8, 9px 1px #8005c8,
      10px 1px #8005c8, 11px 1px #8005c8, 12px 1px #8005c8, 13px 1px #8005c8,
      14px 1px #8005c8, 2px 2px #8005c8, 3px 2px #8005c8, 4px 2px #8005c8,
      5px 2px #8005c8, 6px 2px #8005c8, 7px 2px #8005c8, 8px 2px #8005c8,
      9px 2px #8005c8, 10px 2px #8005c8, 11px 2px #8005c8, 12px 2px #8005c8,
      13px 2px #8005c8, 14px 2px #8005c8, 15px 2px #8005c8, 1px 3px #8005c8,
      2px 3px #8005c8, 3px 3px #8005c8, 4px 3px, 5px 3px, 6px 3px, 7px 3px,
      8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px #8005c8,
      15px 3px #8005c8, 16px 3px #8005c8, 1px 4px #8005c8, 2px 4px #8005c8,
      3px 4px, 4px 4px, 5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px,
      11px 4px, 12px 4px #8005c8, 13px 4px #8005c8, 14px 4px, 15px 4px #8005c8,
      16px 4px #8005c8, 1px 5px #8005c8, 2px 5px #8005c8, 3px 5px, 4px 5px,
      5px 5px, 6px 5px, 7px 5px, 8px 5px, 9px 5px, 10px 5px, 11px 5px,
      12px 5px #8005c8, 13px 5px #8005c8, 14px 5px, 15px 5px #8005c8,
      16px 5px #8005c8, 1px 6px #8005c8, 2px 6px #8005c8, 3px 6px, 4px 6px,
      5px 6px, 6px 6px, 7px 6px #8005c8, 8px 6px #8005c8, 9px 6px #8005c8,
      10px 6px #8005c8, 11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px #8005c8,
      16px 6px #8005c8, 1px 7px #d40075, 2px 7px #8005c8, 3px 7px, 4px 7px,
      5px 7px, 6px 7px #8005c8, 7px 7px, 8px 7px, 9px 7px, 10px 7px,
      11px 7px #8005c8, 12px 7px, 13px 7px, 14px 7px, 15px 7px #8005c8,
      16px 7px #d40075, 1px 8px #d40075, 2px 8px #d40075, 3px 8px, 4px 8px,
      5px 8px, 6px 8px #8005c8, 7px 8px, 8px 8px, 9px 8px, 10px 8px,
      11px 8px #8005c8, 12px 8px, 13px 8px, 14px 8px, 15px 8px #d40075,
      16px 8px #d40075, 1px 9px #d40075, 2px 9px #d40075, 3px 9px, 4px 9px,
      5px 9px, 6px 9px #d40075, 7px 9px, 8px 9px, 9px 9px, 10px 9px,
      11px 9px #d40075, 12px 9px, 13px 9px, 14px 9px, 15px 9px #d40075,
      16px 9px #d40075, 1px 10px #d40075, 2px 10px #d40075, 3px 10px, 4px 10px,
      5px 10px, 6px 10px #d40075, 7px 10px, 8px 10px, 9px 10px, 10px 10px,
      11px 10px #d40075, 12px 10px, 13px 10px, 14px 10px, 15px 10px #d40075,
      16px 10px #d40075, 1px 11px #e98c25, 2px 11px #e98c25, 3px 11px, 4px 11px,
      5px 11px, 6px 11px, 7px 11px #d40075, 8px 11px #d40075, 9px 11px #d40075,
      10px 11px #d40075, 11px 11px, 12px 11px, 13px 11px, 14px 11px,
      15px 11px #d40075, 16px 11px #d40075, 1px 12px #e98c25, 2px 12px #e98c25,
      3px 12px, 4px 12px, 5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px,
      10px 12px, 11px 12px, 12px 12px, 13px 12px, 14px 12px, 15px 12px #d40075,
      16px 12px #d40075, 1px 13px #e98c25, 2px 13px #e98c25, 3px 13px, 4px 13px,
      5px 13px, 6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px,
      12px 13px, 13px 13px, 14px 13px, 15px 13px #d84646, 16px 13px #d84646,
      1px 14px #e98c25, 2px 14px #e98c25, 3px 14px #e98c25, 4px 14px, 5px 14px,
      6px 14px, 7px 14px, 8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px,
      13px 14px, 14px 14px #d84646, 15px 14px #d84646, 16px 14px #d84646,
      2px 15px #e98c25, 3px 15px #e98c25, 4px 15px #e98c25, 5px 15px #e98c25,
      6px 15px #e98c25, 7px 15px #e98c25, 8px 15px #e98c25, 9px 15px #e98c25,
      10px 15px #d84646, 11px 15px #d84646, 12px 15px #d84646, 13px 15px #d84646,
      14px 15px #d84646, 15px 15px #d84646, 3px 16px #e98c25, 4px 16px #e98c25,
      5px 16px #e98c25, 6px 16px #e98c25, 7px 16px #e98c25, 8px 16px #e98c25,
      9px 16px #d84646, 10px 16px #d84646, 11px 16px #d84646, 12px 16px #d84646,
      13px 16px #d84646, 14px 16px #d84646;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.instagram::before {
      box-shadow: 3px 1px 0 0.02em #8005c8, 4px 1px 0 0.02em #8005c8,
        5px 1px 0 0.02em #8005c8, 6px 1px 0 0.02em #8005c8,
        7px 1px 0 0.02em #8005c8, 8px 1px 0 0.02em #8005c8,
        9px 1px 0 0.02em #8005c8, 10px 1px 0 0.02em #8005c8,
        11px 1px 0 0.02em #8005c8, 12px 1px 0 0.02em #8005c8,
        13px 1px 0 0.02em #8005c8, 14px 1px 0 0.02em #8005c8,
        2px 2px 0 0.02em #8005c8, 3px 2px 0 0.02em #8005c8,
        4px 2px 0 0.02em #8005c8, 5px 2px 0 0.02em #8005c8,
        6px 2px 0 0.02em #8005c8, 7px 2px 0 0.02em #8005c8,
        8px 2px 0 0.02em #8005c8, 9px 2px 0 0.02em #8005c8,
        10px 2px 0 0.02em #8005c8, 11px 2px 0 0.02em #8005c8,
        12px 2px 0 0.02em #8005c8, 13px 2px 0 0.02em #8005c8,
        14px 2px 0 0.02em #8005c8, 15px 2px 0 0.02em #8005c8,
        1px 3px 0 0.02em #8005c8, 2px 3px 0 0.02em #8005c8,
        3px 3px 0 0.02em #8005c8, 4px 3px 0 0.02em, 5px 3px 0 0.02em,
        6px 3px 0 0.02em, 7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em,
        10px 3px 0 0.02em, 11px 3px 0 0.02em, 12px 3px 0 0.02em,
        13px 3px 0 0.02em, 14px 3px 0 0.02em #8005c8, 15px 3px 0 0.02em #8005c8,
        16px 3px 0 0.02em #8005c8, 1px 4px 0 0.02em #8005c8,
        2px 4px 0 0.02em #8005c8, 3px 4px 0 0.02em, 4px 4px 0 0.02em,
        5px 4px 0 0.02em, 6px 4px 0 0.02em, 7px 4px 0 0.02em, 8px 4px 0 0.02em,
        9px 4px 0 0.02em, 10px 4px 0 0.02em, 11px 4px 0 0.02em,
        12px 4px 0 0.02em #8005c8, 13px 4px 0 0.02em #8005c8, 14px 4px 0 0.02em,
        15px 4px 0 0.02em #8005c8, 16px 4px 0 0.02em #8005c8,
        1px 5px 0 0.02em #8005c8, 2px 5px 0 0.02em #8005c8, 3px 5px 0 0.02em,
        4px 5px 0 0.02em, 5px 5px 0 0.02em, 6px 5px 0 0.02em, 7px 5px 0 0.02em,
        8px 5px 0 0.02em, 9px 5px 0 0.02em, 10px 5px 0 0.02em, 11px 5px 0 0.02em,
        12px 5px 0 0.02em #8005c8, 13px 5px 0 0.02em #8005c8, 14px 5px 0 0.02em,
        15px 5px 0 0.02em #8005c8, 16px 5px 0 0.02em #8005c8,
        1px 6px 0 0.02em #8005c8, 2px 6px 0 0.02em #8005c8, 3px 6px 0 0.02em,
        4px 6px 0 0.02em, 5px 6px 0 0.02em, 6px 6px 0 0.02em,
        7px 6px 0 0.02em #8005c8, 8px 6px 0 0.02em #8005c8,
        9px 6px 0 0.02em #8005c8, 10px 6px 0 0.02em #8005c8, 11px 6px 0 0.02em,
        12px 6px 0 0.02em, 13px 6px 0 0.02em, 14px 6px 0 0.02em,
        15px 6px 0 0.02em #8005c8, 16px 6px 0 0.02em #8005c8,
        1px 7px 0 0.02em #d40075, 2px 7px 0 0.02em #8005c8, 3px 7px 0 0.02em,
        4px 7px 0 0.02em, 5px 7px 0 0.02em, 6px 7px 0 0.02em #8005c8,
        7px 7px 0 0.02em, 8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em,
        11px 7px 0 0.02em #8005c8, 12px 7px 0 0.02em, 13px 7px 0 0.02em,
        14px 7px 0 0.02em, 15px 7px 0 0.02em #8005c8, 16px 7px 0 0.02em #d40075,
        1px 8px 0 0.02em #d40075, 2px 8px 0 0.02em #d40075, 3px 8px 0 0.02em,
        4px 8px 0 0.02em, 5px 8px 0 0.02em, 6px 8px 0 0.02em #8005c8,
        7px 8px 0 0.02em, 8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em,
        11px 8px 0 0.02em #8005c8, 12px 8px 0 0.02em, 13px 8px 0 0.02em,
        14px 8px 0 0.02em, 15px 8px 0 0.02em #d40075, 16px 8px 0 0.02em #d40075,
        1px 9px 0 0.02em #d40075, 2px 9px 0 0.02em #d40075, 3px 9px 0 0.02em,
        4px 9px 0 0.02em, 5px 9px 0 0.02em, 6px 9px 0 0.02em #d40075,
        7px 9px 0 0.02em, 8px 9px 0 0.02em, 9px 9px 0 0.02em, 10px 9px 0 0.02em,
        11px 9px 0 0.02em #d40075, 12px 9px 0 0.02em, 13px 9px 0 0.02em,
        14px 9px 0 0.02em, 15px 9px 0 0.02em #d40075, 16px 9px 0 0.02em #d40075,
        1px 10px 0 0.02em #d40075, 2px 10px 0 0.02em #d40075, 3px 10px 0 0.02em,
        4px 10px 0 0.02em, 5px 10px 0 0.02em, 6px 10px 0 0.02em #d40075,
        7px 10px 0 0.02em, 8px 10px 0 0.02em, 9px 10px 0 0.02em,
        10px 10px 0 0.02em, 11px 10px 0 0.02em #d40075, 12px 10px 0 0.02em,
        13px 10px 0 0.02em, 14px 10px 0 0.02em, 15px 10px 0 0.02em #d40075,
        16px 10px 0 0.02em #d40075, 1px 11px 0 0.02em #e98c25,
        2px 11px 0 0.02em #e98c25, 3px 11px 0 0.02em, 4px 11px 0 0.02em,
        5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em #d40075,
        8px 11px 0 0.02em #d40075, 9px 11px 0 0.02em #d40075,
        10px 11px 0 0.02em #d40075, 11px 11px 0 0.02em, 12px 11px 0 0.02em,
        13px 11px 0 0.02em, 14px 11px 0 0.02em, 15px 11px 0 0.02em #d40075,
        16px 11px 0 0.02em #d40075, 1px 12px 0 0.02em #e98c25,
        2px 12px 0 0.02em #e98c25, 3px 12px 0 0.02em, 4px 12px 0 0.02em,
        5px 12px 0 0.02em, 6px 12px 0 0.02em, 7px 12px 0 0.02em,
        8px 12px 0 0.02em, 9px 12px 0 0.02em, 10px 12px 0 0.02em,
        11px 12px 0 0.02em, 12px 12px 0 0.02em, 13px 12px 0 0.02em,
        14px 12px 0 0.02em, 15px 12px 0 0.02em #d40075,
        16px 12px 0 0.02em #d40075, 1px 13px 0 0.02em #e98c25,
        2px 13px 0 0.02em #e98c25, 3px 13px 0 0.02em, 4px 13px 0 0.02em,
        5px 13px 0 0.02em, 6px 13px 0 0.02em, 7px 13px 0 0.02em,
        8px 13px 0 0.02em, 9px 13px 0 0.02em, 10px 13px 0 0.02em,
        11px 13px 0 0.02em, 12px 13px 0 0.02em, 13px 13px 0 0.02em,
        14px 13px 0 0.02em, 15px 13px 0 0.02em #d84646,
        16px 13px 0 0.02em #d84646, 1px 14px 0 0.02em #e98c25,
        2px 14px 0 0.02em #e98c25, 3px 14px 0 0.02em #e98c25, 4px 14px 0 0.02em,
        5px 14px 0 0.02em, 6px 14px 0 0.02em, 7px 14px 0 0.02em,
        8px 14px 0 0.02em, 9px 14px 0 0.02em, 10px 14px 0 0.02em,
        11px 14px 0 0.02em, 12px 14px 0 0.02em, 13px 14px 0 0.02em,
        14px 14px 0 0.02em #d84646, 15px 14px 0 0.02em #d84646,
        16px 14px 0 0.02em #d84646, 2px 15px 0 0.02em #e98c25,
        3px 15px 0 0.02em #e98c25, 4px 15px 0 0.02em #e98c25,
        5px 15px 0 0.02em #e98c25, 6px 15px 0 0.02em #e98c25,
        7px 15px 0 0.02em #e98c25, 8px 15px 0 0.02em #e98c25,
        9px 15px 0 0.02em #e98c25, 10px 15px 0 0.02em #d84646,
        11px 15px 0 0.02em #d84646, 12px 15px 0 0.02em #d84646,
        13px 15px 0 0.02em #d84646, 14px 15px 0 0.02em #d84646,
        15px 15px 0 0.02em #d84646, 3px 16px 0 0.02em #e98c25,
        4px 16px 0 0.02em #e98c25, 5px 16px 0 0.02em #e98c25,
        6px 16px 0 0.02em #e98c25, 7px 16px 0 0.02em #e98c25,
        8px 16px 0 0.02em #e98c25, 9px 16px 0 0.02em #d84646,
        10px 16px 0 0.02em #d84646, 11px 16px 0 0.02em #d84646,
        12px 16px 0 0.02em #d84646, 13px 16px 0 0.02em #d84646,
        14px 16px 0 0.02em #d84646;
    }
  }

  .nes-icon.coin::before {
    width: 1px;
    height: 1px;
    color: #ffc107;
    box-shadow: 6px 1px #060606, 7px 1px #060606, 8px 1px #060606,
      9px 1px #060606, 10px 1px #060606, 11px 1px #060606, 4px 2px #060606,
      5px 2px #060606, 6px 2px #060606, 7px 2px #fff, 8px 2px #fff, 9px 2px #fff,
      10px 2px #060606, 11px 2px #060606, 12px 2px #060606, 13px 2px #060606,
      3px 3px #060606, 4px 3px #060606, 5px 3px #fff, 6px 3px #fff, 7px 3px,
      8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px #060606, 13px 3px #060606,
      3px 4px #060606, 4px 4px #fff, 5px 4px, 6px 4px, 7px 4px #fff,
      8px 4px #fff, 9px 4px #fff, 10px 4px #060606, 11px 4px, 12px 4px,
      13px 4px #060606, 14px 4px #060606, 2px 5px #060606, 3px 5px #060606,
      4px 5px #fff, 5px 5px, 6px 5px, 7px 5px #fff, 8px 5px, 9px 5px,
      10px 5px #060606, 11px 5px, 12px 5px, 13px 5px #060606, 14px 5px #060606,
      2px 6px #060606, 3px 6px #fff, 4px 6px, 5px 6px, 6px 6px, 7px 6px #fff,
      8px 6px, 9px 6px, 10px 6px #060606, 11px 6px, 12px 6px, 13px 6px,
      14px 6px #060606, 15px 6px #060606, 2px 7px #060606, 3px 7px #fff, 4px 7px,
      5px 7px, 6px 7px, 7px 7px #fff, 8px 7px, 9px 7px, 10px 7px #060606,
      11px 7px, 12px 7px, 13px 7px, 14px 7px #060606, 15px 7px #060606,
      2px 8px #060606, 3px 8px #fff, 4px 8px, 5px 8px, 6px 8px, 7px 8px #fff,
      8px 8px, 9px 8px, 10px 8px #060606, 11px 8px, 12px 8px, 13px 8px,
      14px 8px #060606, 15px 8px #060606, 2px 9px #060606, 3px 9px #fff, 4px 9px,
      5px 9px, 6px 9px, 7px 9px #fff, 8px 9px, 9px 9px, 10px 9px #060606,
      11px 9px, 12px 9px, 13px 9px, 14px 9px #060606, 15px 9px #060606,
      2px 10px #060606, 3px 10px #fff, 4px 10px, 5px 10px, 6px 10px,
      7px 10px #fff, 8px 10px, 9px 10px, 10px 10px #060606, 11px 10px, 12px 10px,
      13px 10px, 14px 10px #060606, 15px 10px #060606, 2px 11px #060606,
      3px 11px #fff, 4px 11px, 5px 11px, 6px 11px, 7px 11px #fff, 8px 11px,
      9px 11px, 10px 11px #060606, 11px 11px, 12px 11px, 13px 11px,
      14px 11px #060606, 15px 11px #060606, 2px 12px #060606, 3px 12px #060606,
      4px 12px #fff, 5px 12px, 6px 12px, 7px 12px #fff, 8px 12px, 9px 12px,
      10px 12px #060606, 11px 12px, 12px 12px, 13px 12px #060606,
      14px 12px #060606, 3px 13px #060606, 4px 13px #fff, 5px 13px, 6px 13px,
      7px 13px #fff, 8px 13px #060606, 9px 13px #060606, 10px 13px #060606,
      11px 13px, 12px 13px, 13px 13px #060606, 14px 13px #060606,
      3px 14px #060606, 4px 14px #060606, 5px 14px #fff, 6px 14px, 7px 14px,
      8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px #060606,
      13px 14px #060606, 4px 15px #060606, 5px 15px #060606, 6px 15px #060606,
      7px 15px, 8px 15px, 9px 15px, 10px 15px #060606, 11px 15px #060606,
      12px 15px #060606, 13px 15px #060606, 6px 16px #060606, 7px 16px #060606,
      8px 16px #060606, 9px 16px #060606, 10px 16px #060606, 11px 16px #060606;
  }

  @supports (-moz-appearance: meterbar) {
    .nes-icon.coin::before {
      box-shadow: 6px 1px 0 0.02em #060606, 7px 1px 0 0.02em #060606,
        8px 1px 0 0.02em #060606, 9px 1px 0 0.02em #060606,
        10px 1px 0 0.02em #060606, 11px 1px 0 0.02em #060606,
        4px 2px 0 0.02em #060606, 5px 2px 0 0.02em #060606,
        6px 2px 0 0.02em #060606, 7px 2px 0 0.02em #fff, 8px 2px 0 0.02em #fff,
        9px 2px 0 0.02em #fff, 10px 2px 0 0.02em #060606,
        11px 2px 0 0.02em #060606, 12px 2px 0 0.02em #060606,
        13px 2px 0 0.02em #060606, 3px 3px 0 0.02em #060606,
        4px 3px 0 0.02em #060606, 5px 3px 0 0.02em #fff, 6px 3px 0 0.02em #fff,
        7px 3px 0 0.02em, 8px 3px 0 0.02em, 9px 3px 0 0.02em, 10px 3px 0 0.02em,
        11px 3px 0 0.02em, 12px 3px 0 0.02em #060606, 13px 3px 0 0.02em #060606,
        3px 4px 0 0.02em #060606, 4px 4px 0 0.02em #fff, 5px 4px 0 0.02em,
        6px 4px 0 0.02em, 7px 4px 0 0.02em #fff, 8px 4px 0 0.02em #fff,
        9px 4px 0 0.02em #fff, 10px 4px 0 0.02em #060606, 11px 4px 0 0.02em,
        12px 4px 0 0.02em, 13px 4px 0 0.02em #060606, 14px 4px 0 0.02em #060606,
        2px 5px 0 0.02em #060606, 3px 5px 0 0.02em #060606,
        4px 5px 0 0.02em #fff, 5px 5px 0 0.02em, 6px 5px 0 0.02em,
        7px 5px 0 0.02em #fff, 8px 5px 0 0.02em, 9px 5px 0 0.02em,
        10px 5px 0 0.02em #060606, 11px 5px 0 0.02em, 12px 5px 0 0.02em,
        13px 5px 0 0.02em #060606, 14px 5px 0 0.02em #060606,
        2px 6px 0 0.02em #060606, 3px 6px 0 0.02em #fff, 4px 6px 0 0.02em,
        5px 6px 0 0.02em, 6px 6px 0 0.02em, 7px 6px 0 0.02em #fff,
        8px 6px 0 0.02em, 9px 6px 0 0.02em, 10px 6px 0 0.02em #060606,
        11px 6px 0 0.02em, 12px 6px 0 0.02em, 13px 6px 0 0.02em,
        14px 6px 0 0.02em #060606, 15px 6px 0 0.02em #060606,
        2px 7px 0 0.02em #060606, 3px 7px 0 0.02em #fff, 4px 7px 0 0.02em,
        5px 7px 0 0.02em, 6px 7px 0 0.02em, 7px 7px 0 0.02em #fff,
        8px 7px 0 0.02em, 9px 7px 0 0.02em, 10px 7px 0 0.02em #060606,
        11px 7px 0 0.02em, 12px 7px 0 0.02em, 13px 7px 0 0.02em,
        14px 7px 0 0.02em #060606, 15px 7px 0 0.02em #060606,
        2px 8px 0 0.02em #060606, 3px 8px 0 0.02em #fff, 4px 8px 0 0.02em,
        5px 8px 0 0.02em, 6px 8px 0 0.02em, 7px 8px 0 0.02em #fff,
        8px 8px 0 0.02em, 9px 8px 0 0.02em, 10px 8px 0 0.02em #060606,
        11px 8px 0 0.02em, 12px 8px 0 0.02em, 13px 8px 0 0.02em,
        14px 8px 0 0.02em #060606, 15px 8px 0 0.02em #060606,
        2px 9px 0 0.02em #060606, 3px 9px 0 0.02em #fff, 4px 9px 0 0.02em,
        5px 9px 0 0.02em, 6px 9px 0 0.02em, 7px 9px 0 0.02em #fff,
        8px 9px 0 0.02em, 9px 9px 0 0.02em, 10px 9px 0 0.02em #060606,
        11px 9px 0 0.02em, 12px 9px 0 0.02em, 13px 9px 0 0.02em,
        14px 9px 0 0.02em #060606, 15px 9px 0 0.02em #060606,
        2px 10px 0 0.02em #060606, 3px 10px 0 0.02em #fff, 4px 10px 0 0.02em,
        5px 10px 0 0.02em, 6px 10px 0 0.02em, 7px 10px 0 0.02em #fff,
        8px 10px 0 0.02em, 9px 10px 0 0.02em, 10px 10px 0 0.02em #060606,
        11px 10px 0 0.02em, 12px 10px 0 0.02em, 13px 10px 0 0.02em,
        14px 10px 0 0.02em #060606, 15px 10px 0 0.02em #060606,
        2px 11px 0 0.02em #060606, 3px 11px 0 0.02em #fff, 4px 11px 0 0.02em,
        5px 11px 0 0.02em, 6px 11px 0 0.02em, 7px 11px 0 0.02em #fff,
        8px 11px 0 0.02em, 9px 11px 0 0.02em, 10px 11px 0 0.02em #060606,
        11px 11px 0 0.02em, 12px 11px 0 0.02em, 13px 11px 0 0.02em,
        14px 11px 0 0.02em #060606, 15px 11px 0 0.02em #060606,
        2px 12px 0 0.02em #060606, 3px 12px 0 0.02em #060606,
        4px 12px 0 0.02em #fff, 5px 12px 0 0.02em, 6px 12px 0 0.02em,
        7px 12px 0 0.02em #fff, 8px 12px 0 0.02em, 9px 12px 0 0.02em,
        10px 12px 0 0.02em #060606, 11px 12px 0 0.02em, 12px 12px 0 0.02em,
        13px 12px 0 0.02em #060606, 14px 12px 0 0.02em #060606,
        3px 13px 0 0.02em #060606, 4px 13px 0 0.02em #fff, 5px 13px 0 0.02em,
        6px 13px 0 0.02em, 7px 13px 0 0.02em #fff, 8px 13px 0 0.02em #060606,
        9px 13px 0 0.02em #060606, 10px 13px 0 0.02em #060606,
        11px 13px 0 0.02em, 12px 13px 0 0.02em, 13px 13px 0 0.02em #060606,
        14px 13px 0 0.02em #060606, 3px 14px 0 0.02em #060606,
        4px 14px 0 0.02em #060606, 5px 14px 0 0.02em #fff, 6px 14px 0 0.02em,
        7px 14px 0 0.02em, 8px 14px 0 0.02em, 9px 14px 0 0.02em,
        10px 14px 0 0.02em, 11px 14px 0 0.02em, 12px 14px 0 0.02em #060606,
        13px 14px 0 0.02em #060606, 4px 15px 0 0.02em #060606,
        5px 15px 0 0.02em #060606, 6px 15px 0 0.02em #060606, 7px 15px 0 0.02em,
        8px 15px 0 0.02em, 9px 15px 0 0.02em, 10px 15px 0 0.02em #060606,
        11px 15px 0 0.02em #060606, 12px 15px 0 0.02em #060606,
        13px 15px 0 0.02em #060606, 6px 16px 0 0.02em #060606,
        7px 16px 0 0.02em #060606, 8px 16px 0 0.02em #060606,
        9px 16px 0 0.02em #060606, 10px 16px 0 0.02em #060606,
        11px 16px 0 0.02em #060606;
    }
  }

  .nes-logo {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 40px;
  }

  .nes-logo::before {
    position: absolute;
    top: -4px;
    left: -4px;
    content: '';
    background: transparent;
    width: 4px;
    height: 4px;
    color: #3e3634;
    box-shadow: 28px 4px, 28px 8px, 32px 12px, 4px 16px #c3c3c3,
      8px 16px #c3c3c3, 12px 16px #c3c3c3, 16px 16px #c3c3c3, 20px 16px #c3c3c3,
      24px 16px #c3c3c3, 28px 16px #c3c3c3, 32px 16px #c3c3c3, 36px 16px #c3c3c3,
      40px 16px #c3c3c3, 44px 16px #c3c3c3, 48px 16px #c3c3c3, 52px 16px #c3c3c3,
      56px 16px #c3c3c3, 60px 16px #c3c3c3, 4px 20px #c3c3c3, 8px 20px,
      12px 20px, 16px 20px, 20px 20px, 24px 20px, 28px 20px, 32px 20px,
      36px 20px, 40px 20px, 44px 20px, 48px 20px, 52px 20px, 56px 20px,
      60px 20px #c3c3c3, 4px 24px #c3c3c3, 8px 24px, 12px 24px,
      16px 24px #c3c3c3, 20px 24px, 24px 24px, 28px 24px #787973,
      32px 24px #787973, 36px 24px #787973, 40px 24px, 44px 24px, 48px 24px,
      52px 24px, 56px 24px, 60px 24px #c3c3c3, 4px 28px #c3c3c3, 8px 28px,
      12px 28px #c3c3c3, 16px 28px #c3c3c3, 20px 28px #c3c3c3, 24px 28px,
      28px 28px, 32px 28px, 36px 28px, 40px 28px, 44px 28px, 48px 28px,
      52px 28px, 56px 28px, 60px 28px #c3c3c3, 4px 32px #c3c3c3, 8px 32px,
      12px 32px, 16px 32px #c3c3c3, 20px 32px, 24px 32px, 28px 32px #787973,
      32px 32px #787973, 36px 32px #787973, 40px 32px, 44px 32px #bf1710,
      48px 32px, 52px 32px #bf1710, 56px 32px, 60px 32px #c3c3c3,
      4px 36px #c3c3c3, 8px 36px, 12px 36px, 16px 36px, 20px 36px, 24px 36px,
      28px 36px, 32px 36px, 36px 36px, 40px 36px, 44px 36px, 48px 36px,
      52px 36px, 56px 36px, 60px 36px #c3c3c3, 4px 40px #c3c3c3,
      8px 40px #c3c3c3, 12px 40px #c3c3c3, 16px 40px #c3c3c3, 20px 40px #c3c3c3,
      24px 40px #c3c3c3, 28px 40px #c3c3c3, 32px 40px #c3c3c3, 36px 40px #c3c3c3,
      40px 40px #c3c3c3, 44px 40px #c3c3c3, 48px 40px #c3c3c3, 52px 40px #c3c3c3,
      56px 40px #c3c3c3, 60px 40px #c3c3c3;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-logo::before {
      box-shadow: 28px 4px 0 0.02em, 28px 8px 0 0.02em, 32px 12px 0 0.02em,
        4px 16px 0 0.02em #c3c3c3, 8px 16px 0 0.02em #c3c3c3,
        12px 16px 0 0.02em #c3c3c3, 16px 16px 0 0.02em #c3c3c3,
        20px 16px 0 0.02em #c3c3c3, 24px 16px 0 0.02em #c3c3c3,
        28px 16px 0 0.02em #c3c3c3, 32px 16px 0 0.02em #c3c3c3,
        36px 16px 0 0.02em #c3c3c3, 40px 16px 0 0.02em #c3c3c3,
        44px 16px 0 0.02em #c3c3c3, 48px 16px 0 0.02em #c3c3c3,
        52px 16px 0 0.02em #c3c3c3, 56px 16px 0 0.02em #c3c3c3,
        60px 16px 0 0.02em #c3c3c3, 4px 20px 0 0.02em #c3c3c3, 8px 20px 0 0.02em,
        12px 20px 0 0.02em, 16px 20px 0 0.02em, 20px 20px 0 0.02em,
        24px 20px 0 0.02em, 28px 20px 0 0.02em, 32px 20px 0 0.02em,
        36px 20px 0 0.02em, 40px 20px 0 0.02em, 44px 20px 0 0.02em,
        48px 20px 0 0.02em, 52px 20px 0 0.02em, 56px 20px 0 0.02em,
        60px 20px 0 0.02em #c3c3c3, 4px 24px 0 0.02em #c3c3c3, 8px 24px 0 0.02em,
        12px 24px 0 0.02em, 16px 24px 0 0.02em #c3c3c3, 20px 24px 0 0.02em,
        24px 24px 0 0.02em, 28px 24px 0 0.02em #787973,
        32px 24px 0 0.02em #787973, 36px 24px 0 0.02em #787973,
        40px 24px 0 0.02em, 44px 24px 0 0.02em, 48px 24px 0 0.02em,
        52px 24px 0 0.02em, 56px 24px 0 0.02em, 60px 24px 0 0.02em #c3c3c3,
        4px 28px 0 0.02em #c3c3c3, 8px 28px 0 0.02em, 12px 28px 0 0.02em #c3c3c3,
        16px 28px 0 0.02em #c3c3c3, 20px 28px 0 0.02em #c3c3c3,
        24px 28px 0 0.02em, 28px 28px 0 0.02em, 32px 28px 0 0.02em,
        36px 28px 0 0.02em, 40px 28px 0 0.02em, 44px 28px 0 0.02em,
        48px 28px 0 0.02em, 52px 28px 0 0.02em, 56px 28px 0 0.02em,
        60px 28px 0 0.02em #c3c3c3, 4px 32px 0 0.02em #c3c3c3, 8px 32px 0 0.02em,
        12px 32px 0 0.02em, 16px 32px 0 0.02em #c3c3c3, 20px 32px 0 0.02em,
        24px 32px 0 0.02em, 28px 32px 0 0.02em #787973,
        32px 32px 0 0.02em #787973, 36px 32px 0 0.02em #787973,
        40px 32px 0 0.02em, 44px 32px 0 0.02em #bf1710, 48px 32px 0 0.02em,
        52px 32px 0 0.02em #bf1710, 56px 32px 0 0.02em,
        60px 32px 0 0.02em #c3c3c3, 4px 36px 0 0.02em #c3c3c3, 8px 36px 0 0.02em,
        12px 36px 0 0.02em, 16px 36px 0 0.02em, 20px 36px 0 0.02em,
        24px 36px 0 0.02em, 28px 36px 0 0.02em, 32px 36px 0 0.02em,
        36px 36px 0 0.02em, 40px 36px 0 0.02em, 44px 36px 0 0.02em,
        48px 36px 0 0.02em, 52px 36px 0 0.02em, 56px 36px 0 0.02em,
        60px 36px 0 0.02em #c3c3c3, 4px 40px 0 0.02em #c3c3c3,
        8px 40px 0 0.02em #c3c3c3, 12px 40px 0 0.02em #c3c3c3,
        16px 40px 0 0.02em #c3c3c3, 20px 40px 0 0.02em #c3c3c3,
        24px 40px 0 0.02em #c3c3c3, 28px 40px 0 0.02em #c3c3c3,
        32px 40px 0 0.02em #c3c3c3, 36px 40px 0 0.02em #c3c3c3,
        40px 40px 0 0.02em #c3c3c3, 44px 40px 0 0.02em #c3c3c3,
        48px 40px 0 0.02em #c3c3c3, 52px 40px 0 0.02em #c3c3c3,
        56px 40px 0 0.02em #c3c3c3, 60px 40px 0 0.02em #c3c3c3;
    }
  }

  .nes-jp-logo {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 40px;
  }

  .nes-jp-logo::before {
    position: absolute;
    top: -4px;
    left: -4px;
    content: '';
    background: transparent;
    width: 4px;
    height: 4px;
    color: #871f37;
    box-shadow: 28px 4px #333, 28px 8px #333, 32px 12px #333, 4px 16px, 8px 16px,
      12px 16px, 16px 16px, 20px 16px, 24px 16px, 28px 16px, 32px 16px,
      36px 16px, 40px 16px, 44px 16px, 48px 16px, 52px 16px, 56px 16px,
      60px 16px, 4px 20px, 8px 20px #dfd3b9, 12px 20px #dfd3b9,
      16px 20px #dfd3b9, 20px 20px #dfd3b9, 24px 20px #dfd3b9, 28px 20px,
      32px 20px, 36px 20px, 40px 20px, 44px 20px, 48px 20px, 52px 20px,
      56px 20px, 60px 20px, 4px 24px, 8px 24px #dfd3b9, 12px 24px #dfd3b9,
      16px 24px #333, 20px 24px #dfd3b9, 24px 24px #dfd3b9, 28px 24px, 32px 24px,
      36px 24px, 40px 24px, 44px 24px, 48px 24px, 52px 24px, 56px 24px,
      60px 24px, 4px 28px, 8px 28px #dfd3b9, 12px 28px #333, 16px 28px #333,
      20px 28px #333, 24px 28px #dfd3b9, 28px 28px #dfd3b9, 32px 28px #dfd3b9,
      36px 28px #dfd3b9, 40px 28px #dfd3b9, 44px 28px #dfd3b9, 48px 28px #dfd3b9,
      52px 28px #dfd3b9, 56px 28px #dfd3b9, 60px 28px, 4px 32px,
      8px 32px #dfd3b9, 12px 32px #dfd3b9, 16px 32px #333, 20px 32px #dfd3b9,
      24px 32px #dfd3b9, 28px 32px #333, 32px 32px, 36px 32px #333,
      40px 32px #dfd3b9, 44px 32px #333, 48px 32px #dfd3b9, 52px 32px #333,
      56px 32px #dfd3b9, 60px 32px, 4px 36px, 8px 36px #dfd3b9,
      12px 36px #dfd3b9, 16px 36px #dfd3b9, 20px 36px #dfd3b9, 24px 36px #dfd3b9,
      28px 36px #dfd3b9, 32px 36px #dfd3b9, 36px 36px #dfd3b9, 40px 36px #dfd3b9,
      44px 36px #dfd3b9, 48px 36px #dfd3b9, 52px 36px #dfd3b9, 56px 36px #dfd3b9,
      60px 36px, 4px 40px, 8px 40px, 12px 40px, 16px 40px, 20px 40px, 24px 40px,
      28px 40px, 32px 40px, 36px 40px, 40px 40px, 44px 40px, 48px 40px,
      52px 40px, 56px 40px, 60px 40px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-jp-logo::before {
      box-shadow: 28px 4px 0 0.02em #333, 28px 8px 0 0.02em #333,
        32px 12px 0 0.02em #333, 4px 16px 0 0.02em, 8px 16px 0 0.02em,
        12px 16px 0 0.02em, 16px 16px 0 0.02em, 20px 16px 0 0.02em,
        24px 16px 0 0.02em, 28px 16px 0 0.02em, 32px 16px 0 0.02em,
        36px 16px 0 0.02em, 40px 16px 0 0.02em, 44px 16px 0 0.02em,
        48px 16px 0 0.02em, 52px 16px 0 0.02em, 56px 16px 0 0.02em,
        60px 16px 0 0.02em, 4px 20px 0 0.02em, 8px 20px 0 0.02em #dfd3b9,
        12px 20px 0 0.02em #dfd3b9, 16px 20px 0 0.02em #dfd3b9,
        20px 20px 0 0.02em #dfd3b9, 24px 20px 0 0.02em #dfd3b9,
        28px 20px 0 0.02em, 32px 20px 0 0.02em, 36px 20px 0 0.02em,
        40px 20px 0 0.02em, 44px 20px 0 0.02em, 48px 20px 0 0.02em,
        52px 20px 0 0.02em, 56px 20px 0 0.02em, 60px 20px 0 0.02em,
        4px 24px 0 0.02em, 8px 24px 0 0.02em #dfd3b9, 12px 24px 0 0.02em #dfd3b9,
        16px 24px 0 0.02em #333, 20px 24px 0 0.02em #dfd3b9,
        24px 24px 0 0.02em #dfd3b9, 28px 24px 0 0.02em, 32px 24px 0 0.02em,
        36px 24px 0 0.02em, 40px 24px 0 0.02em, 44px 24px 0 0.02em,
        48px 24px 0 0.02em, 52px 24px 0 0.02em, 56px 24px 0 0.02em,
        60px 24px 0 0.02em, 4px 28px 0 0.02em, 8px 28px 0 0.02em #dfd3b9,
        12px 28px 0 0.02em #333, 16px 28px 0 0.02em #333,
        20px 28px 0 0.02em #333, 24px 28px 0 0.02em #dfd3b9,
        28px 28px 0 0.02em #dfd3b9, 32px 28px 0 0.02em #dfd3b9,
        36px 28px 0 0.02em #dfd3b9, 40px 28px 0 0.02em #dfd3b9,
        44px 28px 0 0.02em #dfd3b9, 48px 28px 0 0.02em #dfd3b9,
        52px 28px 0 0.02em #dfd3b9, 56px 28px 0 0.02em #dfd3b9,
        60px 28px 0 0.02em, 4px 32px 0 0.02em, 8px 32px 0 0.02em #dfd3b9,
        12px 32px 0 0.02em #dfd3b9, 16px 32px 0 0.02em #333,
        20px 32px 0 0.02em #dfd3b9, 24px 32px 0 0.02em #dfd3b9,
        28px 32px 0 0.02em #333, 32px 32px 0 0.02em, 36px 32px 0 0.02em #333,
        40px 32px 0 0.02em #dfd3b9, 44px 32px 0 0.02em #333,
        48px 32px 0 0.02em #dfd3b9, 52px 32px 0 0.02em #333,
        56px 32px 0 0.02em #dfd3b9, 60px 32px 0 0.02em, 4px 36px 0 0.02em,
        8px 36px 0 0.02em #dfd3b9, 12px 36px 0 0.02em #dfd3b9,
        16px 36px 0 0.02em #dfd3b9, 20px 36px 0 0.02em #dfd3b9,
        24px 36px 0 0.02em #dfd3b9, 28px 36px 0 0.02em #dfd3b9,
        32px 36px 0 0.02em #dfd3b9, 36px 36px 0 0.02em #dfd3b9,
        40px 36px 0 0.02em #dfd3b9, 44px 36px 0 0.02em #dfd3b9,
        48px 36px 0 0.02em #dfd3b9, 52px 36px 0 0.02em #dfd3b9,
        56px 36px 0 0.02em #dfd3b9, 60px 36px 0 0.02em, 4px 40px 0 0.02em,
        8px 40px 0 0.02em, 12px 40px 0 0.02em, 16px 40px 0 0.02em,
        20px 40px 0 0.02em, 24px 40px 0 0.02em, 28px 40px 0 0.02em,
        32px 40px 0 0.02em, 36px 40px 0 0.02em, 40px 40px 0 0.02em,
        44px 40px 0 0.02em, 48px 40px 0 0.02em, 52px 40px 0 0.02em,
        56px 40px 0 0.02em, 60px 40px 0 0.02em;
    }
  }

  .snes-logo {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 40px;
  }

  .snes-logo::before {
    position: absolute;
    top: -4px;
    left: -4px;
    content: '';
    background: transparent;
    width: 4px;
    height: 4px;
    color: #d7d7d7;
    box-shadow: 28px 4px #333, 28px 8px #333, 32px 12px #333, 12px 16px #333,
      16px 16px #333, 20px 16px #333, 24px 16px #333, 28px 16px #333,
      32px 16px #333, 36px 16px #333, 40px 16px #333, 44px 16px #333,
      48px 16px #333, 52px 16px #333, 8px 20px #333, 12px 20px, 16px 20px,
      20px 20px, 24px 20px, 28px 20px, 32px 20px, 36px 20px, 40px 20px,
      44px 20px, 48px 20px, 52px 20px, 56px 20px #333, 4px 24px #333, 8px 24px,
      12px 24px, 16px 24px #333, 20px 24px, 24px 24px, 28px 24px, 32px 24px,
      36px 24px, 40px 24px, 44px 24px, 48px 24px #ad6df0, 52px 24px, 56px 24px,
      60px 24px #333, 4px 28px #333, 8px 28px, 12px 28px #333, 16px 28px #333,
      20px 28px #333, 24px 28px, 28px 28px, 32px 28px, 36px 28px, 40px 28px,
      44px 28px #ad6df0, 48px 28px, 52px 28px #8932e5, 56px 28px, 60px 28px #333,
      4px 32px #333, 8px 32px, 12px 32px, 16px 32px #333, 20px 32px, 24px 32px,
      28px 32px #333, 32px 32px, 36px 32px #333, 40px 32px, 44px 32px,
      48px 32px #8932e5, 52px 32px, 56px 32px, 60px 32px #333, 8px 36px #333,
      12px 36px, 16px 36px, 20px 36px, 24px 36px, 28px 36px, 32px 36px,
      36px 36px, 40px 36px, 44px 36px, 48px 36px, 52px 36px, 56px 36px #333,
      12px 40px #333, 16px 40px #333, 20px 40px #333, 24px 40px #333,
      28px 40px #333, 32px 40px #333, 36px 40px #333, 40px 40px #333,
      44px 40px #333, 48px 40px #333, 52px 40px #333;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .snes-logo::before {
      box-shadow: 28px 4px 0 0.02em #333, 28px 8px 0 0.02em #333,
        32px 12px 0 0.02em #333, 12px 16px 0 0.02em #333,
        16px 16px 0 0.02em #333, 20px 16px 0 0.02em #333,
        24px 16px 0 0.02em #333, 28px 16px 0 0.02em #333,
        32px 16px 0 0.02em #333, 36px 16px 0 0.02em #333,
        40px 16px 0 0.02em #333, 44px 16px 0 0.02em #333,
        48px 16px 0 0.02em #333, 52px 16px 0 0.02em #333, 8px 20px 0 0.02em #333,
        12px 20px 0 0.02em, 16px 20px 0 0.02em, 20px 20px 0 0.02em,
        24px 20px 0 0.02em, 28px 20px 0 0.02em, 32px 20px 0 0.02em,
        36px 20px 0 0.02em, 40px 20px 0 0.02em, 44px 20px 0 0.02em,
        48px 20px 0 0.02em, 52px 20px 0 0.02em, 56px 20px 0 0.02em #333,
        4px 24px 0 0.02em #333, 8px 24px 0 0.02em, 12px 24px 0 0.02em,
        16px 24px 0 0.02em #333, 20px 24px 0 0.02em, 24px 24px 0 0.02em,
        28px 24px 0 0.02em, 32px 24px 0 0.02em, 36px 24px 0 0.02em,
        40px 24px 0 0.02em, 44px 24px 0 0.02em, 48px 24px 0 0.02em #ad6df0,
        52px 24px 0 0.02em, 56px 24px 0 0.02em, 60px 24px 0 0.02em #333,
        4px 28px 0 0.02em #333, 8px 28px 0 0.02em, 12px 28px 0 0.02em #333,
        16px 28px 0 0.02em #333, 20px 28px 0 0.02em #333, 24px 28px 0 0.02em,
        28px 28px 0 0.02em, 32px 28px 0 0.02em, 36px 28px 0 0.02em,
        40px 28px 0 0.02em, 44px 28px 0 0.02em #ad6df0, 48px 28px 0 0.02em,
        52px 28px 0 0.02em #8932e5, 56px 28px 0 0.02em, 60px 28px 0 0.02em #333,
        4px 32px 0 0.02em #333, 8px 32px 0 0.02em, 12px 32px 0 0.02em,
        16px 32px 0 0.02em #333, 20px 32px 0 0.02em, 24px 32px 0 0.02em,
        28px 32px 0 0.02em #333, 32px 32px 0 0.02em, 36px 32px 0 0.02em #333,
        40px 32px 0 0.02em, 44px 32px 0 0.02em, 48px 32px 0 0.02em #8932e5,
        52px 32px 0 0.02em, 56px 32px 0 0.02em, 60px 32px 0 0.02em #333,
        8px 36px 0 0.02em #333, 12px 36px 0 0.02em, 16px 36px 0 0.02em,
        20px 36px 0 0.02em, 24px 36px 0 0.02em, 28px 36px 0 0.02em,
        32px 36px 0 0.02em, 36px 36px 0 0.02em, 40px 36px 0 0.02em,
        44px 36px 0 0.02em, 48px 36px 0 0.02em, 52px 36px 0 0.02em,
        56px 36px 0 0.02em #333, 12px 40px 0 0.02em #333,
        16px 40px 0 0.02em #333, 20px 40px 0 0.02em #333,
        24px 40px 0 0.02em #333, 28px 40px 0 0.02em #333,
        32px 40px 0 0.02em #333, 36px 40px 0 0.02em #333,
        40px 40px 0 0.02em #333, 44px 40px 0 0.02em #333,
        48px 40px 0 0.02em #333, 52px 40px 0 0.02em #333;
    }
  }

  .snes-jp-logo {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 40px;
  }

  .snes-jp-logo::before {
    position: absolute;
    top: -4px;
    left: -4px;
    content: '';
    background: transparent;
    width: 4px;
    height: 4px;
    color: #d7d7d7;
    box-shadow: 28px 4px #333, 28px 8px #333, 32px 12px #333, 12px 16px #333,
      16px 16px #333, 20px 16px #333, 24px 16px #333, 28px 16px #333,
      32px 16px #333, 36px 16px #333, 40px 16px #333, 44px 16px #333,
      48px 16px #333, 52px 16px #333, 8px 20px #333, 12px 20px, 16px 20px,
      20px 20px, 24px 20px, 28px 20px, 32px 20px, 36px 20px, 40px 20px,
      44px 20px, 48px 20px, 52px 20px, 56px 20px #333, 4px 24px #333, 8px 24px,
      12px 24px, 16px 24px #333, 20px 24px, 24px 24px, 28px 24px, 32px 24px,
      36px 24px, 40px 24px, 44px 24px, 48px 24px #999cf7, 52px 24px, 56px 24px,
      60px 24px #333, 4px 28px #333, 8px 28px, 12px 28px #333, 16px 28px #333,
      20px 28px #333, 24px 28px, 28px 28px, 32px 28px, 36px 28px, 40px 28px,
      44px 28px #7dbb78, 48px 28px, 52px 28px #f40500, 56px 28px, 60px 28px #333,
      4px 32px #333, 8px 32px, 12px 32px, 16px 32px #333, 20px 32px, 24px 32px,
      28px 32px #333, 32px 32px, 36px 32px #333, 40px 32px, 44px 32px,
      48px 32px #f6f504, 52px 32px, 56px 32px, 60px 32px #333, 8px 36px #333,
      12px 36px, 16px 36px, 20px 36px, 24px 36px, 28px 36px, 32px 36px,
      36px 36px, 40px 36px, 44px 36px, 48px 36px, 52px 36px, 56px 36px #333,
      12px 40px #333, 16px 40px #333, 20px 40px #333, 24px 40px #333,
      28px 40px #333, 32px 40px #333, 36px 40px #333, 40px 40px #333,
      44px 40px #333, 48px 40px #333, 52px 40px #333;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .snes-jp-logo::before {
      box-shadow: 28px 4px 0 0.02em #333, 28px 8px 0 0.02em #333,
        32px 12px 0 0.02em #333, 12px 16px 0 0.02em #333,
        16px 16px 0 0.02em #333, 20px 16px 0 0.02em #333,
        24px 16px 0 0.02em #333, 28px 16px 0 0.02em #333,
        32px 16px 0 0.02em #333, 36px 16px 0 0.02em #333,
        40px 16px 0 0.02em #333, 44px 16px 0 0.02em #333,
        48px 16px 0 0.02em #333, 52px 16px 0 0.02em #333, 8px 20px 0 0.02em #333,
        12px 20px 0 0.02em, 16px 20px 0 0.02em, 20px 20px 0 0.02em,
        24px 20px 0 0.02em, 28px 20px 0 0.02em, 32px 20px 0 0.02em,
        36px 20px 0 0.02em, 40px 20px 0 0.02em, 44px 20px 0 0.02em,
        48px 20px 0 0.02em, 52px 20px 0 0.02em, 56px 20px 0 0.02em #333,
        4px 24px 0 0.02em #333, 8px 24px 0 0.02em, 12px 24px 0 0.02em,
        16px 24px 0 0.02em #333, 20px 24px 0 0.02em, 24px 24px 0 0.02em,
        28px 24px 0 0.02em, 32px 24px 0 0.02em, 36px 24px 0 0.02em,
        40px 24px 0 0.02em, 44px 24px 0 0.02em, 48px 24px 0 0.02em #999cf7,
        52px 24px 0 0.02em, 56px 24px 0 0.02em, 60px 24px 0 0.02em #333,
        4px 28px 0 0.02em #333, 8px 28px 0 0.02em, 12px 28px 0 0.02em #333,
        16px 28px 0 0.02em #333, 20px 28px 0 0.02em #333, 24px 28px 0 0.02em,
        28px 28px 0 0.02em, 32px 28px 0 0.02em, 36px 28px 0 0.02em,
        40px 28px 0 0.02em, 44px 28px 0 0.02em #7dbb78, 48px 28px 0 0.02em,
        52px 28px 0 0.02em #f40500, 56px 28px 0 0.02em, 60px 28px 0 0.02em #333,
        4px 32px 0 0.02em #333, 8px 32px 0 0.02em, 12px 32px 0 0.02em,
        16px 32px 0 0.02em #333, 20px 32px 0 0.02em, 24px 32px 0 0.02em,
        28px 32px 0 0.02em #333, 32px 32px 0 0.02em, 36px 32px 0 0.02em #333,
        40px 32px 0 0.02em, 44px 32px 0 0.02em, 48px 32px 0 0.02em #f6f504,
        52px 32px 0 0.02em, 56px 32px 0 0.02em, 60px 32px 0 0.02em #333,
        8px 36px 0 0.02em #333, 12px 36px 0 0.02em, 16px 36px 0 0.02em,
        20px 36px 0 0.02em, 24px 36px 0 0.02em, 28px 36px 0 0.02em,
        32px 36px 0 0.02em, 36px 36px 0 0.02em, 40px 36px 0 0.02em,
        44px 36px 0 0.02em, 48px 36px 0 0.02em, 52px 36px 0 0.02em,
        56px 36px 0 0.02em #333, 12px 40px 0 0.02em #333,
        16px 40px 0 0.02em #333, 20px 40px 0 0.02em #333,
        24px 40px 0 0.02em #333, 28px 40px 0 0.02em #333,
        32px 40px 0 0.02em #333, 36px 40px 0 0.02em #333,
        40px 40px 0 0.02em #333, 44px 40px 0 0.02em #333,
        48px 40px 0 0.02em #333, 52px 40px 0 0.02em #333;
    }
  }

  .nes-bcrikko {
    position: relative;
    display: inline-block;
    width: 96px;
    height: 96px;
  }

  .nes-bcrikko::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #f9f2d7;
    box-shadow: 12px 6px, 18px 6px, 24px 6px, 30px 6px, 36px 6px, 42px 6px,
      48px 6px, 54px 6px, 60px 6px, 66px 6px, 72px 6px, 78px 6px, 84px 6px,
      90px 6px, 6px 12px, 12px 12px, 18px 12px, 24px 12px, 30px 12px, 36px 12px,
      42px 12px, 48px 12px, 54px 12px, 60px 12px, 66px 12px, 72px 12px,
      78px 12px, 84px 12px, 90px 12px, 96px 12px, 6px 18px, 12px 18px, 18px 18px,
      24px 18px, 30px 18px, 36px 18px, 42px 18px, 48px 18px, 54px 18px,
      60px 18px, 66px 18px, 72px 18px, 78px 18px, 84px 18px, 90px 18px,
      96px 18px, 6px 24px, 12px 24px, 18px 24px, 24px 24px, 30px 24px #333,
      36px 24px #333, 42px 24px, 48px 24px, 54px 24px, 60px 24px, 66px 24px #333,
      72px 24px #333, 78px 24px, 84px 24px, 90px 24px, 96px 24px, 6px 30px,
      12px 30px, 18px 30px, 24px 30px #333, 30px 30px #333, 36px 30px #fff,
      42px 30px #333, 48px 30px, 54px 30px, 60px 30px #333, 66px 30px #333,
      72px 30px #fff, 78px 30px #333, 84px 30px, 90px 30px, 96px 30px, 6px 36px,
      12px 36px, 18px 36px, 24px 36px #333, 30px 36px #333, 36px 36px #333,
      42px 36px #333, 48px 36px, 54px 36px, 60px 36px #333, 66px 36px #333,
      72px 36px #333, 78px 36px #333, 84px 36px, 90px 36px, 96px 36px, 6px 42px,
      12px 42px, 18px 42px, 24px 42px #333, 30px 42px #333, 36px 42px #333,
      42px 42px #333, 48px 42px, 54px 42px, 60px 42px #333, 66px 42px #333,
      72px 42px #333, 78px 42px #333, 84px 42px, 90px 42px, 96px 42px, 6px 48px,
      12px 48px, 18px 48px, 24px 48px #333, 30px 48px #333, 36px 48px #333,
      42px 48px #333, 48px 48px, 54px 48px, 60px 48px #333, 66px 48px #333,
      72px 48px #333, 78px 48px #333, 84px 48px, 90px 48px, 96px 48px, 6px 54px,
      12px 54px, 18px 54px, 24px 54px, 30px 54px #333, 36px 54px #333, 42px 54px,
      48px 54px, 54px 54px, 60px 54px, 66px 54px #333, 72px 54px #333, 78px 54px,
      84px 54px, 90px 54px, 96px 54px, 6px 60px, 12px 60px, 18px 60px, 24px 60px,
      30px 60px, 36px 60px, 42px 60px, 48px 60px, 54px 60px, 60px 60px,
      66px 60px, 72px 60px, 78px 60px, 84px 60px, 90px 60px, 96px 60px, 6px 66px,
      12px 66px, 18px 66px, 24px 66px, 30px 66px, 36px 66px, 42px 66px,
      48px 66px, 54px 66px, 60px 66px, 66px 66px, 72px 66px, 78px 66px,
      84px 66px, 90px 66px, 96px 66px, 6px 72px, 12px 72px, 18px 72px,
      24px 72px #c5090c, 30px 72px, 36px 72px, 42px 72px, 48px 72px, 54px 72px,
      60px 72px, 66px 72px, 72px 72px, 78px 72px #c5090c, 84px 72px, 90px 72px,
      96px 72px, 6px 78px, 12px 78px, 18px 78px, 24px 78px #c5090c, 30px 78px,
      36px 78px, 42px 78px, 48px 78px, 54px 78px, 60px 78px, 66px 78px,
      72px 78px, 78px 78px #c5090c, 84px 78px, 90px 78px, 96px 78px, 6px 84px,
      12px 84px, 18px 84px, 24px 84px, 30px 84px #c5090c, 36px 84px #c5090c,
      42px 84px #c5090c, 48px 84px #c5090c, 54px 84px #c5090c, 60px 84px #c5090c,
      66px 84px #c5090c, 72px 84px #c5090c, 78px 84px, 84px 84px, 90px 84px,
      96px 84px, 6px 90px, 12px 90px, 18px 90px, 24px 90px, 30px 90px, 36px 90px,
      42px 90px, 48px 90px, 54px 90px, 60px 90px, 66px 90px, 72px 90px,
      78px 90px, 84px 90px, 90px 90px, 96px 90px, 12px 96px, 18px 96px,
      24px 96px, 30px 96px, 36px 96px, 42px 96px, 48px 96px, 54px 96px,
      60px 96px, 66px 96px, 72px 96px, 78px 96px, 84px 96px, 90px 96px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-bcrikko::before {
      box-shadow: 12px 6px 0 0.02em, 18px 6px 0 0.02em, 24px 6px 0 0.02em,
        30px 6px 0 0.02em, 36px 6px 0 0.02em, 42px 6px 0 0.02em,
        48px 6px 0 0.02em, 54px 6px 0 0.02em, 60px 6px 0 0.02em,
        66px 6px 0 0.02em, 72px 6px 0 0.02em, 78px 6px 0 0.02em,
        84px 6px 0 0.02em, 90px 6px 0 0.02em, 6px 12px 0 0.02em,
        12px 12px 0 0.02em, 18px 12px 0 0.02em, 24px 12px 0 0.02em,
        30px 12px 0 0.02em, 36px 12px 0 0.02em, 42px 12px 0 0.02em,
        48px 12px 0 0.02em, 54px 12px 0 0.02em, 60px 12px 0 0.02em,
        66px 12px 0 0.02em, 72px 12px 0 0.02em, 78px 12px 0 0.02em,
        84px 12px 0 0.02em, 90px 12px 0 0.02em, 96px 12px 0 0.02em,
        6px 18px 0 0.02em, 12px 18px 0 0.02em, 18px 18px 0 0.02em,
        24px 18px 0 0.02em, 30px 18px 0 0.02em, 36px 18px 0 0.02em,
        42px 18px 0 0.02em, 48px 18px 0 0.02em, 54px 18px 0 0.02em,
        60px 18px 0 0.02em, 66px 18px 0 0.02em, 72px 18px 0 0.02em,
        78px 18px 0 0.02em, 84px 18px 0 0.02em, 90px 18px 0 0.02em,
        96px 18px 0 0.02em, 6px 24px 0 0.02em, 12px 24px 0 0.02em,
        18px 24px 0 0.02em, 24px 24px 0 0.02em, 30px 24px 0 0.02em #333,
        36px 24px 0 0.02em #333, 42px 24px 0 0.02em, 48px 24px 0 0.02em,
        54px 24px 0 0.02em, 60px 24px 0 0.02em, 66px 24px 0 0.02em #333,
        72px 24px 0 0.02em #333, 78px 24px 0 0.02em, 84px 24px 0 0.02em,
        90px 24px 0 0.02em, 96px 24px 0 0.02em, 6px 30px 0 0.02em,
        12px 30px 0 0.02em, 18px 30px 0 0.02em, 24px 30px 0 0.02em #333,
        30px 30px 0 0.02em #333, 36px 30px 0 0.02em #fff,
        42px 30px 0 0.02em #333, 48px 30px 0 0.02em, 54px 30px 0 0.02em,
        60px 30px 0 0.02em #333, 66px 30px 0 0.02em #333,
        72px 30px 0 0.02em #fff, 78px 30px 0 0.02em #333, 84px 30px 0 0.02em,
        90px 30px 0 0.02em, 96px 30px 0 0.02em, 6px 36px 0 0.02em,
        12px 36px 0 0.02em, 18px 36px 0 0.02em, 24px 36px 0 0.02em #333,
        30px 36px 0 0.02em #333, 36px 36px 0 0.02em #333,
        42px 36px 0 0.02em #333, 48px 36px 0 0.02em, 54px 36px 0 0.02em,
        60px 36px 0 0.02em #333, 66px 36px 0 0.02em #333,
        72px 36px 0 0.02em #333, 78px 36px 0 0.02em #333, 84px 36px 0 0.02em,
        90px 36px 0 0.02em, 96px 36px 0 0.02em, 6px 42px 0 0.02em,
        12px 42px 0 0.02em, 18px 42px 0 0.02em, 24px 42px 0 0.02em #333,
        30px 42px 0 0.02em #333, 36px 42px 0 0.02em #333,
        42px 42px 0 0.02em #333, 48px 42px 0 0.02em, 54px 42px 0 0.02em,
        60px 42px 0 0.02em #333, 66px 42px 0 0.02em #333,
        72px 42px 0 0.02em #333, 78px 42px 0 0.02em #333, 84px 42px 0 0.02em,
        90px 42px 0 0.02em, 96px 42px 0 0.02em, 6px 48px 0 0.02em,
        12px 48px 0 0.02em, 18px 48px 0 0.02em, 24px 48px 0 0.02em #333,
        30px 48px 0 0.02em #333, 36px 48px 0 0.02em #333,
        42px 48px 0 0.02em #333, 48px 48px 0 0.02em, 54px 48px 0 0.02em,
        60px 48px 0 0.02em #333, 66px 48px 0 0.02em #333,
        72px 48px 0 0.02em #333, 78px 48px 0 0.02em #333, 84px 48px 0 0.02em,
        90px 48px 0 0.02em, 96px 48px 0 0.02em, 6px 54px 0 0.02em,
        12px 54px 0 0.02em, 18px 54px 0 0.02em, 24px 54px 0 0.02em,
        30px 54px 0 0.02em #333, 36px 54px 0 0.02em #333, 42px 54px 0 0.02em,
        48px 54px 0 0.02em, 54px 54px 0 0.02em, 60px 54px 0 0.02em,
        66px 54px 0 0.02em #333, 72px 54px 0 0.02em #333, 78px 54px 0 0.02em,
        84px 54px 0 0.02em, 90px 54px 0 0.02em, 96px 54px 0 0.02em,
        6px 60px 0 0.02em, 12px 60px 0 0.02em, 18px 60px 0 0.02em,
        24px 60px 0 0.02em, 30px 60px 0 0.02em, 36px 60px 0 0.02em,
        42px 60px 0 0.02em, 48px 60px 0 0.02em, 54px 60px 0 0.02em,
        60px 60px 0 0.02em, 66px 60px 0 0.02em, 72px 60px 0 0.02em,
        78px 60px 0 0.02em, 84px 60px 0 0.02em, 90px 60px 0 0.02em,
        96px 60px 0 0.02em, 6px 66px 0 0.02em, 12px 66px 0 0.02em,
        18px 66px 0 0.02em, 24px 66px 0 0.02em, 30px 66px 0 0.02em,
        36px 66px 0 0.02em, 42px 66px 0 0.02em, 48px 66px 0 0.02em,
        54px 66px 0 0.02em, 60px 66px 0 0.02em, 66px 66px 0 0.02em,
        72px 66px 0 0.02em, 78px 66px 0 0.02em, 84px 66px 0 0.02em,
        90px 66px 0 0.02em, 96px 66px 0 0.02em, 6px 72px 0 0.02em,
        12px 72px 0 0.02em, 18px 72px 0 0.02em, 24px 72px 0 0.02em #c5090c,
        30px 72px 0 0.02em, 36px 72px 0 0.02em, 42px 72px 0 0.02em,
        48px 72px 0 0.02em, 54px 72px 0 0.02em, 60px 72px 0 0.02em,
        66px 72px 0 0.02em, 72px 72px 0 0.02em, 78px 72px 0 0.02em #c5090c,
        84px 72px 0 0.02em, 90px 72px 0 0.02em, 96px 72px 0 0.02em,
        6px 78px 0 0.02em, 12px 78px 0 0.02em, 18px 78px 0 0.02em,
        24px 78px 0 0.02em #c5090c, 30px 78px 0 0.02em, 36px 78px 0 0.02em,
        42px 78px 0 0.02em, 48px 78px 0 0.02em, 54px 78px 0 0.02em,
        60px 78px 0 0.02em, 66px 78px 0 0.02em, 72px 78px 0 0.02em,
        78px 78px 0 0.02em #c5090c, 84px 78px 0 0.02em, 90px 78px 0 0.02em,
        96px 78px 0 0.02em, 6px 84px 0 0.02em, 12px 84px 0 0.02em,
        18px 84px 0 0.02em, 24px 84px 0 0.02em, 30px 84px 0 0.02em #c5090c,
        36px 84px 0 0.02em #c5090c, 42px 84px 0 0.02em #c5090c,
        48px 84px 0 0.02em #c5090c, 54px 84px 0 0.02em #c5090c,
        60px 84px 0 0.02em #c5090c, 66px 84px 0 0.02em #c5090c,
        72px 84px 0 0.02em #c5090c, 78px 84px 0 0.02em, 84px 84px 0 0.02em,
        90px 84px 0 0.02em, 96px 84px 0 0.02em, 6px 90px 0 0.02em,
        12px 90px 0 0.02em, 18px 90px 0 0.02em, 24px 90px 0 0.02em,
        30px 90px 0 0.02em, 36px 90px 0 0.02em, 42px 90px 0 0.02em,
        48px 90px 0 0.02em, 54px 90px 0 0.02em, 60px 90px 0 0.02em,
        66px 90px 0 0.02em, 72px 90px 0 0.02em, 78px 90px 0 0.02em,
        84px 90px 0 0.02em, 90px 90px 0 0.02em, 96px 90px 0 0.02em,
        12px 96px 0 0.02em, 18px 96px 0 0.02em, 24px 96px 0 0.02em,
        30px 96px 0 0.02em, 36px 96px 0 0.02em, 42px 96px 0 0.02em,
        48px 96px 0 0.02em, 54px 96px 0 0.02em, 60px 96px 0 0.02em,
        66px 96px 0 0.02em, 72px 96px 0 0.02em, 78px 96px 0 0.02em,
        84px 96px 0 0.02em, 90px 96px 0 0.02em;
    }
  }

  .nes-ash {
    position: relative;
    display: inline-block;
    width: 84px;
    height: 90px;
  }

  .nes-ash::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #181818;
    box-shadow: 30px 6px, 36px 6px, 42px 6px, 48px 6px, 54px 6px, 60px 6px,
      24px 12px, 30px 12px #ff614e, 36px 12px #ff614e, 42px 12px #ff614e,
      48px 12px #f8f8ff, 54px 12px #f8f8ff, 60px 12px #007f7f, 66px 12px,
      18px 18px, 24px 18px #ff614e, 30px 18px #ff614e, 36px 18px #ff614e,
      42px 18px #ff614e, 48px 18px #f8f8ff, 54px 18px #f8f8ff, 60px 18px #f8f8ff,
      66px 18px #f8f8ff, 72px 18px, 18px 24px, 24px 24px #ff614e,
      30px 24px #ff614e, 36px 24px #ff614e, 42px 24px #ff614e, 48px 24px #f8f8ff,
      54px 24px #f8f8ff, 60px 24px #007f7f, 66px 24px #007f7f, 72px 24px,
      78px 24px, 12px 30px, 18px 30px, 24px 30px, 30px 30px #ff614e,
      36px 30px #ff614e, 42px 30px #ff614e, 48px 30px #ff614e, 54px 30px #ff614e,
      60px 30px #ff614e, 66px 30px #ff614e, 72px 30px #ff614e, 78px 30px #ff614e,
      84px 30px, 12px 36px, 18px 36px, 24px 36px, 30px 36px, 36px 36px,
      42px 36px, 48px 36px, 54px 36px #ff614e, 60px 36px #ff614e,
      66px 36px #ff614e, 72px 36px, 78px 36px, 6px 42px, 12px 42px, 18px 42px,
      24px 42px, 30px 42px, 36px 42px, 42px 42px, 48px 42px #ffe3c5,
      54px 42px #ffe3c5, 60px 42px, 66px 42px #ffe3c5, 72px 42px, 12px 48px,
      18px 48px, 24px 48px #ffe3c5, 30px 48px #ffe3c5, 36px 48px #ffe3c5,
      42px 48px, 48px 48px #ffe3c5, 54px 48px #ffe3c5, 60px 48px,
      66px 48px #ffe3c5, 72px 48px, 18px 54px, 24px 54px #ffe3c5,
      30px 54px #ffe3c5, 36px 54px #ffe3c5, 42px 54px #ffe3c5, 48px 54px #ffe3c5,
      54px 54px #ffe3c5, 60px 54px #ffe3c5, 66px 54px #ffe3c5, 72px 54px,
      12px 60px, 18px 60px #4169e1, 24px 60px, 30px 60px, 36px 60px #ffe3c5,
      42px 60px #ffe3c5, 48px 60px #ffe3c5, 54px 60px #ffe3c5, 60px 60px #ffe3c5,
      66px 60px, 12px 66px, 18px 66px #4169e1, 24px 66px, 30px 66px, 36px 66px,
      42px 66px, 48px 66px, 54px 66px, 60px 66px, 12px 72px, 18px 72px,
      24px 72px #ffe3c5, 30px 72px #ffe3c5, 36px 72px, 42px 72px #4169e1,
      48px 72px #4169e1, 54px 72px, 60px 72px, 66px 72px, 6px 78px,
      12px 78px #007f7f, 18px 78px, 24px 78px #ffe3c5, 30px 78px #ffe3c5,
      36px 78px, 42px 78px #4169e1, 48px 78px, 54px 78px, 60px 78px #007f7f,
      66px 78px #007f7f, 72px 78px, 6px 84px, 12px 84px #007f7f,
      18px 84px #007f7f, 24px 84px, 30px 84px, 36px 84px, 42px 84px, 48px 84px,
      54px 84px #007f7f, 60px 84px #007f7f, 66px 84px, 12px 90px, 18px 90px,
      54px 90px, 60px 90px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-ash::before {
      box-shadow: 30px 6px 0 0.02em, 36px 6px 0 0.02em, 42px 6px 0 0.02em,
        48px 6px 0 0.02em, 54px 6px 0 0.02em, 60px 6px 0 0.02em,
        24px 12px 0 0.02em, 30px 12px 0 0.02em #ff614e,
        36px 12px 0 0.02em #ff614e, 42px 12px 0 0.02em #ff614e,
        48px 12px 0 0.02em #f8f8ff, 54px 12px 0 0.02em #f8f8ff,
        60px 12px 0 0.02em #007f7f, 66px 12px 0 0.02em, 18px 18px 0 0.02em,
        24px 18px 0 0.02em #ff614e, 30px 18px 0 0.02em #ff614e,
        36px 18px 0 0.02em #ff614e, 42px 18px 0 0.02em #ff614e,
        48px 18px 0 0.02em #f8f8ff, 54px 18px 0 0.02em #f8f8ff,
        60px 18px 0 0.02em #f8f8ff, 66px 18px 0 0.02em #f8f8ff,
        72px 18px 0 0.02em, 18px 24px 0 0.02em, 24px 24px 0 0.02em #ff614e,
        30px 24px 0 0.02em #ff614e, 36px 24px 0 0.02em #ff614e,
        42px 24px 0 0.02em #ff614e, 48px 24px 0 0.02em #f8f8ff,
        54px 24px 0 0.02em #f8f8ff, 60px 24px 0 0.02em #007f7f,
        66px 24px 0 0.02em #007f7f, 72px 24px 0 0.02em, 78px 24px 0 0.02em,
        12px 30px 0 0.02em, 18px 30px 0 0.02em, 24px 30px 0 0.02em,
        30px 30px 0 0.02em #ff614e, 36px 30px 0 0.02em #ff614e,
        42px 30px 0 0.02em #ff614e, 48px 30px 0 0.02em #ff614e,
        54px 30px 0 0.02em #ff614e, 60px 30px 0 0.02em #ff614e,
        66px 30px 0 0.02em #ff614e, 72px 30px 0 0.02em #ff614e,
        78px 30px 0 0.02em #ff614e, 84px 30px 0 0.02em, 12px 36px 0 0.02em,
        18px 36px 0 0.02em, 24px 36px 0 0.02em, 30px 36px 0 0.02em,
        36px 36px 0 0.02em, 42px 36px 0 0.02em, 48px 36px 0 0.02em,
        54px 36px 0 0.02em #ff614e, 60px 36px 0 0.02em #ff614e,
        66px 36px 0 0.02em #ff614e, 72px 36px 0 0.02em, 78px 36px 0 0.02em,
        6px 42px 0 0.02em, 12px 42px 0 0.02em, 18px 42px 0 0.02em,
        24px 42px 0 0.02em, 30px 42px 0 0.02em, 36px 42px 0 0.02em,
        42px 42px 0 0.02em, 48px 42px 0 0.02em #ffe3c5,
        54px 42px 0 0.02em #ffe3c5, 60px 42px 0 0.02em,
        66px 42px 0 0.02em #ffe3c5, 72px 42px 0 0.02em, 12px 48px 0 0.02em,
        18px 48px 0 0.02em, 24px 48px 0 0.02em #ffe3c5,
        30px 48px 0 0.02em #ffe3c5, 36px 48px 0 0.02em #ffe3c5,
        42px 48px 0 0.02em, 48px 48px 0 0.02em #ffe3c5,
        54px 48px 0 0.02em #ffe3c5, 60px 48px 0 0.02em,
        66px 48px 0 0.02em #ffe3c5, 72px 48px 0 0.02em, 18px 54px 0 0.02em,
        24px 54px 0 0.02em #ffe3c5, 30px 54px 0 0.02em #ffe3c5,
        36px 54px 0 0.02em #ffe3c5, 42px 54px 0 0.02em #ffe3c5,
        48px 54px 0 0.02em #ffe3c5, 54px 54px 0 0.02em #ffe3c5,
        60px 54px 0 0.02em #ffe3c5, 66px 54px 0 0.02em #ffe3c5,
        72px 54px 0 0.02em, 12px 60px 0 0.02em, 18px 60px 0 0.02em #4169e1,
        24px 60px 0 0.02em, 30px 60px 0 0.02em, 36px 60px 0 0.02em #ffe3c5,
        42px 60px 0 0.02em #ffe3c5, 48px 60px 0 0.02em #ffe3c5,
        54px 60px 0 0.02em #ffe3c5, 60px 60px 0 0.02em #ffe3c5,
        66px 60px 0 0.02em, 12px 66px 0 0.02em, 18px 66px 0 0.02em #4169e1,
        24px 66px 0 0.02em, 30px 66px 0 0.02em, 36px 66px 0 0.02em,
        42px 66px 0 0.02em, 48px 66px 0 0.02em, 54px 66px 0 0.02em,
        60px 66px 0 0.02em, 12px 72px 0 0.02em, 18px 72px 0 0.02em,
        24px 72px 0 0.02em #ffe3c5, 30px 72px 0 0.02em #ffe3c5,
        36px 72px 0 0.02em, 42px 72px 0 0.02em #4169e1,
        48px 72px 0 0.02em #4169e1, 54px 72px 0 0.02em, 60px 72px 0 0.02em,
        66px 72px 0 0.02em, 6px 78px 0 0.02em, 12px 78px 0 0.02em #007f7f,
        18px 78px 0 0.02em, 24px 78px 0 0.02em #ffe3c5,
        30px 78px 0 0.02em #ffe3c5, 36px 78px 0 0.02em,
        42px 78px 0 0.02em #4169e1, 48px 78px 0 0.02em, 54px 78px 0 0.02em,
        60px 78px 0 0.02em #007f7f, 66px 78px 0 0.02em #007f7f,
        72px 78px 0 0.02em, 6px 84px 0 0.02em, 12px 84px 0 0.02em #007f7f,
        18px 84px 0 0.02em #007f7f, 24px 84px 0 0.02em, 30px 84px 0 0.02em,
        36px 84px 0 0.02em, 42px 84px 0 0.02em, 48px 84px 0 0.02em,
        54px 84px 0 0.02em #007f7f, 60px 84px 0 0.02em #007f7f,
        66px 84px 0 0.02em, 12px 90px 0 0.02em, 18px 90px 0 0.02em,
        54px 90px 0 0.02em, 60px 90px 0 0.02em;
    }
  }

  .nes-pokeball {
    position: relative;
    display: inline-block;
    width: 84px;
    height: 84px;
  }

  .nes-pokeball::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #060606;
    box-shadow: 36px 6px, 42px 6px, 48px 6px, 54px 6px, 24px 12px, 30px 12px,
      36px 12px #ff001d, 42px 12px #ff001d, 48px 12px #ff001d, 54px 12px #ff001d,
      60px 12px, 66px 12px, 18px 18px, 24px 18px #fff, 30px 18px #fff,
      36px 18px #ff001d, 42px 18px #ff001d, 48px 18px #ff001d, 54px 18px #ff001d,
      60px 18px #ff001d, 66px 18px #ff001d, 72px 18px, 12px 24px, 18px 24px #fff,
      24px 24px #fff, 30px 24px #ff001d, 36px 24px #ff001d, 42px 24px #ff001d,
      48px 24px #ff001d, 54px 24px #ff001d, 60px 24px #ff001d, 66px 24px #ff001d,
      72px 24px, 78px 24px, 12px 30px, 18px 30px #fff, 24px 30px #ff001d,
      30px 30px #ff001d, 36px 30px #ff001d, 42px 30px #ff001d, 48px 30px #ff001d,
      54px 30px #ff001d, 60px 30px #ff001d, 66px 30px #ff001d, 72px 30px #ff001d,
      78px 30px, 6px 36px, 12px 36px #fff, 18px 36px #ff001d, 24px 36px #ff001d,
      30px 36px #ff001d, 36px 36px #ff001d, 42px 36px #ff001d, 48px 36px #ff001d,
      54px 36px #ff001d, 60px 36px #ff001d, 66px 36px #ff001d, 72px 36px #ff001d,
      78px 36px #ff001d, 84px 36px, 6px 42px, 12px 42px, 18px 42px,
      24px 42px #ff001d, 30px 42px #ff001d, 36px 42px #ff001d, 42px 42px #ff001d,
      48px 42px, 54px 42px, 60px 42px, 66px 42px #ff001d, 72px 42px #ff001d,
      78px 42px #ff001d, 84px 42px, 6px 48px, 12px 48px, 18px 48px, 24px 48px,
      30px 48px #ff001d, 36px 48px #ff001d, 42px 48px, 48px 48px #fff,
      54px 48px #fff, 60px 48px #fff, 66px 48px, 72px 48px #ff001d,
      78px 48px #ff001d, 84px 48px, 6px 54px, 12px 54px #9fa1a1, 18px 54px #fff,
      24px 54px, 30px 54px, 36px 54px, 42px 54px, 48px 54px #fff, 54px 54px #fff,
      60px 54px #fff, 66px 54px, 72px 54px, 78px 54px, 84px 54px, 12px 60px,
      18px 60px #fff, 24px 60px #fff, 30px 60px #fff, 36px 60px, 42px 60px,
      48px 60px #fff, 54px 60px #fff, 60px 60px #fff, 66px 60px, 72px 60px #fff,
      78px 60px, 12px 66px, 18px 66px #fff, 24px 66px #fff, 30px 66px #fff,
      36px 66px #fff, 42px 66px #fff, 48px 66px, 54px 66px, 60px 66px,
      66px 66px #fff, 72px 66px #fff, 78px 66px, 18px 72px, 24px 72px #9fa1a1,
      30px 72px #9fa1a1, 36px 72px #fff, 42px 72px #fff, 48px 72px #fff,
      54px 72px #fff, 60px 72px #fff, 66px 72px #fff, 72px 72px, 24px 78px,
      30px 78px, 36px 78px #9fa1a1, 42px 78px #9fa1a1, 48px 78px #9fa1a1,
      54px 78px #9fa1a1, 60px 78px, 66px 78px, 36px 84px, 42px 84px, 48px 84px,
      54px 84px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-pokeball::before {
      box-shadow: 36px 6px 0 0.02em, 42px 6px 0 0.02em, 48px 6px 0 0.02em,
        54px 6px 0 0.02em, 24px 12px 0 0.02em, 30px 12px 0 0.02em,
        36px 12px 0 0.02em #ff001d, 42px 12px 0 0.02em #ff001d,
        48px 12px 0 0.02em #ff001d, 54px 12px 0 0.02em #ff001d,
        60px 12px 0 0.02em, 66px 12px 0 0.02em, 18px 18px 0 0.02em,
        24px 18px 0 0.02em #fff, 30px 18px 0 0.02em #fff,
        36px 18px 0 0.02em #ff001d, 42px 18px 0 0.02em #ff001d,
        48px 18px 0 0.02em #ff001d, 54px 18px 0 0.02em #ff001d,
        60px 18px 0 0.02em #ff001d, 66px 18px 0 0.02em #ff001d,
        72px 18px 0 0.02em, 12px 24px 0 0.02em, 18px 24px 0 0.02em #fff,
        24px 24px 0 0.02em #fff, 30px 24px 0 0.02em #ff001d,
        36px 24px 0 0.02em #ff001d, 42px 24px 0 0.02em #ff001d,
        48px 24px 0 0.02em #ff001d, 54px 24px 0 0.02em #ff001d,
        60px 24px 0 0.02em #ff001d, 66px 24px 0 0.02em #ff001d,
        72px 24px 0 0.02em, 78px 24px 0 0.02em, 12px 30px 0 0.02em,
        18px 30px 0 0.02em #fff, 24px 30px 0 0.02em #ff001d,
        30px 30px 0 0.02em #ff001d, 36px 30px 0 0.02em #ff001d,
        42px 30px 0 0.02em #ff001d, 48px 30px 0 0.02em #ff001d,
        54px 30px 0 0.02em #ff001d, 60px 30px 0 0.02em #ff001d,
        66px 30px 0 0.02em #ff001d, 72px 30px 0 0.02em #ff001d,
        78px 30px 0 0.02em, 6px 36px 0 0.02em, 12px 36px 0 0.02em #fff,
        18px 36px 0 0.02em #ff001d, 24px 36px 0 0.02em #ff001d,
        30px 36px 0 0.02em #ff001d, 36px 36px 0 0.02em #ff001d,
        42px 36px 0 0.02em #ff001d, 48px 36px 0 0.02em #ff001d,
        54px 36px 0 0.02em #ff001d, 60px 36px 0 0.02em #ff001d,
        66px 36px 0 0.02em #ff001d, 72px 36px 0 0.02em #ff001d,
        78px 36px 0 0.02em #ff001d, 84px 36px 0 0.02em, 6px 42px 0 0.02em,
        12px 42px 0 0.02em, 18px 42px 0 0.02em, 24px 42px 0 0.02em #ff001d,
        30px 42px 0 0.02em #ff001d, 36px 42px 0 0.02em #ff001d,
        42px 42px 0 0.02em #ff001d, 48px 42px 0 0.02em, 54px 42px 0 0.02em,
        60px 42px 0 0.02em, 66px 42px 0 0.02em #ff001d,
        72px 42px 0 0.02em #ff001d, 78px 42px 0 0.02em #ff001d,
        84px 42px 0 0.02em, 6px 48px 0 0.02em, 12px 48px 0 0.02em,
        18px 48px 0 0.02em, 24px 48px 0 0.02em, 30px 48px 0 0.02em #ff001d,
        36px 48px 0 0.02em #ff001d, 42px 48px 0 0.02em, 48px 48px 0 0.02em #fff,
        54px 48px 0 0.02em #fff, 60px 48px 0 0.02em #fff, 66px 48px 0 0.02em,
        72px 48px 0 0.02em #ff001d, 78px 48px 0 0.02em #ff001d,
        84px 48px 0 0.02em, 6px 54px 0 0.02em, 12px 54px 0 0.02em #9fa1a1,
        18px 54px 0 0.02em #fff, 24px 54px 0 0.02em, 30px 54px 0 0.02em,
        36px 54px 0 0.02em, 42px 54px 0 0.02em, 48px 54px 0 0.02em #fff,
        54px 54px 0 0.02em #fff, 60px 54px 0 0.02em #fff, 66px 54px 0 0.02em,
        72px 54px 0 0.02em, 78px 54px 0 0.02em, 84px 54px 0 0.02em,
        12px 60px 0 0.02em, 18px 60px 0 0.02em #fff, 24px 60px 0 0.02em #fff,
        30px 60px 0 0.02em #fff, 36px 60px 0 0.02em, 42px 60px 0 0.02em,
        48px 60px 0 0.02em #fff, 54px 60px 0 0.02em #fff,
        60px 60px 0 0.02em #fff, 66px 60px 0 0.02em, 72px 60px 0 0.02em #fff,
        78px 60px 0 0.02em, 12px 66px 0 0.02em, 18px 66px 0 0.02em #fff,
        24px 66px 0 0.02em #fff, 30px 66px 0 0.02em #fff,
        36px 66px 0 0.02em #fff, 42px 66px 0 0.02em #fff, 48px 66px 0 0.02em,
        54px 66px 0 0.02em, 60px 66px 0 0.02em, 66px 66px 0 0.02em #fff,
        72px 66px 0 0.02em #fff, 78px 66px 0 0.02em, 18px 72px 0 0.02em,
        24px 72px 0 0.02em #9fa1a1, 30px 72px 0 0.02em #9fa1a1,
        36px 72px 0 0.02em #fff, 42px 72px 0 0.02em #fff,
        48px 72px 0 0.02em #fff, 54px 72px 0 0.02em #fff,
        60px 72px 0 0.02em #fff, 66px 72px 0 0.02em #fff, 72px 72px 0 0.02em,
        24px 78px 0 0.02em, 30px 78px 0 0.02em, 36px 78px 0 0.02em #9fa1a1,
        42px 78px 0 0.02em #9fa1a1, 48px 78px 0 0.02em #9fa1a1,
        54px 78px 0 0.02em #9fa1a1, 60px 78px 0 0.02em, 66px 78px 0 0.02em,
        36px 84px 0 0.02em, 42px 84px 0 0.02em, 48px 84px 0 0.02em,
        54px 84px 0 0.02em;
    }
  }

  .nes-bulbasaur {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 102px;
  }

  .nes-bulbasaur::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #000;
    box-shadow: 78px 6px, 84px 6px, 90px 6px, 72px 12px, 78px 12px #8beb46,
      84px 12px #8beb46, 90px 12px #8beb46, 96px 12px, 60px 18px, 66px 18px,
      72px 18px, 78px 18px #8beb46, 84px 18px #8beb46, 90px 18px #8beb46,
      96px 18px, 48px 24px, 54px 24px, 60px 24px #8beb46, 66px 24px #8beb46,
      72px 24px #2d8d22, 78px 24px #8beb46, 84px 24px #8beb46, 90px 24px #2d8d22,
      96px 24px #8beb46, 102px 24px, 108px 24px, 24px 30px, 30px 30px, 42px 30px,
      48px 30px #8beb46, 54px 30px #8beb46, 60px 30px #8beb46, 66px 30px #2d8d22,
      72px 30px #2d8d22, 78px 30px #8beb46, 84px 30px #8beb46, 90px 30px #2d8d22,
      96px 30px #8beb46, 102px 30px #8beb46, 108px 30px #8beb46, 114px 30px,
      18px 36px, 24px 36px #5ceee1, 30px 36px #5ceee1, 36px 36px, 42px 36px,
      48px 36px #8beb46, 54px 36px #8beb46, 60px 36px #2d8d22, 66px 36px #8beb46,
      72px 36px #2d8d22, 78px 36px #8beb46, 84px 36px #8beb46, 90px 36px #8beb46,
      96px 36px #2d8d22, 102px 36px #8beb46, 108px 36px #8beb46,
      114px 36px #8beb46, 120px 36px, 18px 42px, 24px 42px #5ceee1,
      30px 42px #5ceee1, 36px 42px #5ceee1, 42px 42px, 48px 42px,
      54px 42px #2d8d22, 60px 42px #8beb46, 66px 42px #2d8d22, 72px 42px #8beb46,
      78px 42px #8beb46, 84px 42px #8beb46, 90px 42px #8beb46, 96px 42px #8beb46,
      102px 42px #2d8d22, 108px 42px #8beb46, 114px 42px #8beb46, 120px 42px,
      18px 48px, 24px 48px #5ceee1, 30px 48px #5ceee1, 36px 48px #5ceee1,
      42px 48px #5ceee1, 48px 48px #3fc3b5, 54px 48px, 60px 48px #8beb46,
      66px 48px #2d8d22, 72px 48px #8beb46, 78px 48px #8beb46, 84px 48px #8beb46,
      90px 48px #8beb46, 96px 48px #8beb46, 102px 48px #2d8d22,
      108px 48px #8beb46, 114px 48px #8beb46, 120px 48px, 12px 54px,
      18px 54px #5ceee1, 24px 54px #5ceee1, 30px 54px #3fc3b5, 36px 54px #5ceee1,
      42px 54px #3fc3b5, 48px 54px #3fc3b5, 54px 54px #5ceee1, 60px 54px,
      66px 54px, 72px 54px, 78px 54px #8beb46, 84px 54px #8beb46,
      90px 54px #8beb46, 96px 54px #8beb46, 102px 54px #2d8d22,
      108px 54px #8beb46, 114px 54px, 6px 60px, 12px 60px, 18px 60px #3fc3b5,
      24px 60px #5ceee1, 30px 60px #5ceee1, 36px 60px #5ceee1, 42px 60px #5ceee1,
      48px 60px #5ceee1, 54px 60px #5ceee1, 60px 60px #5ceee1, 66px 60px #5ceee1,
      72px 60px, 78px 60px #8beb46, 84px 60px #8beb46, 90px 60px #8beb46,
      96px 60px, 102px 60px, 108px 60px, 114px 60px, 6px 66px, 12px 66px,
      18px 66px #3fc3b5, 24px 66px #5ceee1, 30px 66px #5ceee1, 36px 66px #5ceee1,
      42px 66px #3fc3b5, 48px 66px #5ceee1, 54px 66px #5ceee1, 60px 66px #5ceee1,
      66px 66px, 72px 66px #3fc3b5, 78px 66px, 84px 66px, 90px 66px,
      96px 66px #3fc3b5, 102px 66px #3fc3b5, 108px 66px #3fc3b5, 114px 66px,
      6px 72px, 12px 72px #5ceee1, 18px 72px #5ceee1, 24px 72px #5ceee1,
      30px 72px #5ceee1, 36px 72px #3fc3b5, 42px 72px #5ceee1, 48px 72px,
      54px 72px, 60px 72px #5ceee1, 66px 72px #3fc3b5, 72px 72px #3fc3b5,
      78px 72px #3fc3b5, 84px 72px #3fc3b5, 90px 72px #3fc3b5, 96px 72px,
      102px 72px #3fc3b5, 108px 72px #fdfdf5, 114px 72px, 6px 78px,
      12px 78px #3fc3b5, 18px 78px #5ceee1, 24px 78px #5ceee1, 30px 78px #5ceee1,
      36px 78px #5ceee1, 42px 78px, 48px 78px #ca242a, 54px 78px #fdfdf5,
      60px 78px #fdfdf5, 66px 78px #3fc3b5, 72px 78px #3fc3b5, 78px 78px,
      84px 78px #3fc3b5, 90px 78px #3fc3b5, 96px 78px, 102px 78px, 108px 78px,
      12px 84px, 18px 84px #3fc3b5, 24px 84px #5ceee1, 30px 84px #5ceee1,
      36px 84px #5ceee1, 42px 84px, 48px 84px #ca242a, 54px 84px #fdfdf5,
      60px 84px #5ceee1, 66px 84px #3fc3b5, 72px 84px, 78px 84px #3fc3b5,
      84px 84px #3fc3b5, 90px 84px, 18px 90px, 24px 90px, 30px 90px #3fc3b5,
      36px 90px #3fc3b5, 42px 90px #3fc3b5, 48px 90px #3fc3b5, 54px 90px #3fc3b5,
      60px 90px #3fc3b5, 66px 90px, 72px 90px #3fc3b5, 78px 90px #3fc3b5,
      84px 90px #3fc3b5, 90px 90px, 30px 96px, 36px 96px, 42px 96px, 48px 96px,
      54px 96px, 60px 96px, 66px 96px, 72px 96px #fdfdf5, 78px 96px #3fc3b5,
      84px 96px #fdfdf5, 90px 96px, 72px 102px, 78px 102px, 84px 102px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-bulbasaur::before {
      box-shadow: 78px 6px 0 0.02em, 84px 6px 0 0.02em, 90px 6px 0 0.02em,
        72px 12px 0 0.02em, 78px 12px 0 0.02em #8beb46,
        84px 12px 0 0.02em #8beb46, 90px 12px 0 0.02em #8beb46,
        96px 12px 0 0.02em, 60px 18px 0 0.02em, 66px 18px 0 0.02em,
        72px 18px 0 0.02em, 78px 18px 0 0.02em #8beb46,
        84px 18px 0 0.02em #8beb46, 90px 18px 0 0.02em #8beb46,
        96px 18px 0 0.02em, 48px 24px 0 0.02em, 54px 24px 0 0.02em,
        60px 24px 0 0.02em #8beb46, 66px 24px 0 0.02em #8beb46,
        72px 24px 0 0.02em #2d8d22, 78px 24px 0 0.02em #8beb46,
        84px 24px 0 0.02em #8beb46, 90px 24px 0 0.02em #2d8d22,
        96px 24px 0 0.02em #8beb46, 102px 24px 0 0.02em, 108px 24px 0 0.02em,
        24px 30px 0 0.02em, 30px 30px 0 0.02em, 42px 30px 0 0.02em,
        48px 30px 0 0.02em #8beb46, 54px 30px 0 0.02em #8beb46,
        60px 30px 0 0.02em #8beb46, 66px 30px 0 0.02em #2d8d22,
        72px 30px 0 0.02em #2d8d22, 78px 30px 0 0.02em #8beb46,
        84px 30px 0 0.02em #8beb46, 90px 30px 0 0.02em #2d8d22,
        96px 30px 0 0.02em #8beb46, 102px 30px 0 0.02em #8beb46,
        108px 30px 0 0.02em #8beb46, 114px 30px 0 0.02em, 18px 36px 0 0.02em,
        24px 36px 0 0.02em #5ceee1, 30px 36px 0 0.02em #5ceee1,
        36px 36px 0 0.02em, 42px 36px 0 0.02em, 48px 36px 0 0.02em #8beb46,
        54px 36px 0 0.02em #8beb46, 60px 36px 0 0.02em #2d8d22,
        66px 36px 0 0.02em #8beb46, 72px 36px 0 0.02em #2d8d22,
        78px 36px 0 0.02em #8beb46, 84px 36px 0 0.02em #8beb46,
        90px 36px 0 0.02em #8beb46, 96px 36px 0 0.02em #2d8d22,
        102px 36px 0 0.02em #8beb46, 108px 36px 0 0.02em #8beb46,
        114px 36px 0 0.02em #8beb46, 120px 36px 0 0.02em, 18px 42px 0 0.02em,
        24px 42px 0 0.02em #5ceee1, 30px 42px 0 0.02em #5ceee1,
        36px 42px 0 0.02em #5ceee1, 42px 42px 0 0.02em, 48px 42px 0 0.02em,
        54px 42px 0 0.02em #2d8d22, 60px 42px 0 0.02em #8beb46,
        66px 42px 0 0.02em #2d8d22, 72px 42px 0 0.02em #8beb46,
        78px 42px 0 0.02em #8beb46, 84px 42px 0 0.02em #8beb46,
        90px 42px 0 0.02em #8beb46, 96px 42px 0 0.02em #8beb46,
        102px 42px 0 0.02em #2d8d22, 108px 42px 0 0.02em #8beb46,
        114px 42px 0 0.02em #8beb46, 120px 42px 0 0.02em, 18px 48px 0 0.02em,
        24px 48px 0 0.02em #5ceee1, 30px 48px 0 0.02em #5ceee1,
        36px 48px 0 0.02em #5ceee1, 42px 48px 0 0.02em #5ceee1,
        48px 48px 0 0.02em #3fc3b5, 54px 48px 0 0.02em,
        60px 48px 0 0.02em #8beb46, 66px 48px 0 0.02em #2d8d22,
        72px 48px 0 0.02em #8beb46, 78px 48px 0 0.02em #8beb46,
        84px 48px 0 0.02em #8beb46, 90px 48px 0 0.02em #8beb46,
        96px 48px 0 0.02em #8beb46, 102px 48px 0 0.02em #2d8d22,
        108px 48px 0 0.02em #8beb46, 114px 48px 0 0.02em #8beb46,
        120px 48px 0 0.02em, 12px 54px 0 0.02em, 18px 54px 0 0.02em #5ceee1,
        24px 54px 0 0.02em #5ceee1, 30px 54px 0 0.02em #3fc3b5,
        36px 54px 0 0.02em #5ceee1, 42px 54px 0 0.02em #3fc3b5,
        48px 54px 0 0.02em #3fc3b5, 54px 54px 0 0.02em #5ceee1,
        60px 54px 0 0.02em, 66px 54px 0 0.02em, 72px 54px 0 0.02em,
        78px 54px 0 0.02em #8beb46, 84px 54px 0 0.02em #8beb46,
        90px 54px 0 0.02em #8beb46, 96px 54px 0 0.02em #8beb46,
        102px 54px 0 0.02em #2d8d22, 108px 54px 0 0.02em #8beb46,
        114px 54px 0 0.02em, 6px 60px 0 0.02em, 12px 60px 0 0.02em,
        18px 60px 0 0.02em #3fc3b5, 24px 60px 0 0.02em #5ceee1,
        30px 60px 0 0.02em #5ceee1, 36px 60px 0 0.02em #5ceee1,
        42px 60px 0 0.02em #5ceee1, 48px 60px 0 0.02em #5ceee1,
        54px 60px 0 0.02em #5ceee1, 60px 60px 0 0.02em #5ceee1,
        66px 60px 0 0.02em #5ceee1, 72px 60px 0 0.02em,
        78px 60px 0 0.02em #8beb46, 84px 60px 0 0.02em #8beb46,
        90px 60px 0 0.02em #8beb46, 96px 60px 0 0.02em, 102px 60px 0 0.02em,
        108px 60px 0 0.02em, 114px 60px 0 0.02em, 6px 66px 0 0.02em,
        12px 66px 0 0.02em, 18px 66px 0 0.02em #3fc3b5,
        24px 66px 0 0.02em #5ceee1, 30px 66px 0 0.02em #5ceee1,
        36px 66px 0 0.02em #5ceee1, 42px 66px 0 0.02em #3fc3b5,
        48px 66px 0 0.02em #5ceee1, 54px 66px 0 0.02em #5ceee1,
        60px 66px 0 0.02em #5ceee1, 66px 66px 0 0.02em,
        72px 66px 0 0.02em #3fc3b5, 78px 66px 0 0.02em, 84px 66px 0 0.02em,
        90px 66px 0 0.02em, 96px 66px 0 0.02em #3fc3b5,
        102px 66px 0 0.02em #3fc3b5, 108px 66px 0 0.02em #3fc3b5,
        114px 66px 0 0.02em, 6px 72px 0 0.02em, 12px 72px 0 0.02em #5ceee1,
        18px 72px 0 0.02em #5ceee1, 24px 72px 0 0.02em #5ceee1,
        30px 72px 0 0.02em #5ceee1, 36px 72px 0 0.02em #3fc3b5,
        42px 72px 0 0.02em #5ceee1, 48px 72px 0 0.02em, 54px 72px 0 0.02em,
        60px 72px 0 0.02em #5ceee1, 66px 72px 0 0.02em #3fc3b5,
        72px 72px 0 0.02em #3fc3b5, 78px 72px 0 0.02em #3fc3b5,
        84px 72px 0 0.02em #3fc3b5, 90px 72px 0 0.02em #3fc3b5,
        96px 72px 0 0.02em, 102px 72px 0 0.02em #3fc3b5,
        108px 72px 0 0.02em #fdfdf5, 114px 72px 0 0.02em, 6px 78px 0 0.02em,
        12px 78px 0 0.02em #3fc3b5, 18px 78px 0 0.02em #5ceee1,
        24px 78px 0 0.02em #5ceee1, 30px 78px 0 0.02em #5ceee1,
        36px 78px 0 0.02em #5ceee1, 42px 78px 0 0.02em,
        48px 78px 0 0.02em #ca242a, 54px 78px 0 0.02em #fdfdf5,
        60px 78px 0 0.02em #fdfdf5, 66px 78px 0 0.02em #3fc3b5,
        72px 78px 0 0.02em #3fc3b5, 78px 78px 0 0.02em,
        84px 78px 0 0.02em #3fc3b5, 90px 78px 0 0.02em #3fc3b5,
        96px 78px 0 0.02em, 102px 78px 0 0.02em, 108px 78px 0 0.02em,
        12px 84px 0 0.02em, 18px 84px 0 0.02em #3fc3b5,
        24px 84px 0 0.02em #5ceee1, 30px 84px 0 0.02em #5ceee1,
        36px 84px 0 0.02em #5ceee1, 42px 84px 0 0.02em,
        48px 84px 0 0.02em #ca242a, 54px 84px 0 0.02em #fdfdf5,
        60px 84px 0 0.02em #5ceee1, 66px 84px 0 0.02em #3fc3b5,
        72px 84px 0 0.02em, 78px 84px 0 0.02em #3fc3b5,
        84px 84px 0 0.02em #3fc3b5, 90px 84px 0 0.02em, 18px 90px 0 0.02em,
        24px 90px 0 0.02em, 30px 90px 0 0.02em #3fc3b5,
        36px 90px 0 0.02em #3fc3b5, 42px 90px 0 0.02em #3fc3b5,
        48px 90px 0 0.02em #3fc3b5, 54px 90px 0 0.02em #3fc3b5,
        60px 90px 0 0.02em #3fc3b5, 66px 90px 0 0.02em,
        72px 90px 0 0.02em #3fc3b5, 78px 90px 0 0.02em #3fc3b5,
        84px 90px 0 0.02em #3fc3b5, 90px 90px 0 0.02em, 30px 96px 0 0.02em,
        36px 96px 0 0.02em, 42px 96px 0 0.02em, 48px 96px 0 0.02em,
        54px 96px 0 0.02em, 60px 96px 0 0.02em, 66px 96px 0 0.02em,
        72px 96px 0 0.02em #fdfdf5, 78px 96px 0 0.02em #3fc3b5,
        84px 96px 0 0.02em #fdfdf5, 90px 96px 0 0.02em, 72px 102px 0 0.02em,
        78px 102px 0 0.02em, 84px 102px 0 0.02em;
    }
  }

  .nes-charmander {
    position: relative;
    display: inline-block;
    width: 126px;
    height: 108px;
  }

  .nes-charmander::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #f77702;
    box-shadow: 30px 6px #000202, 36px 6px #000202, 42px 6px #000202,
      48px 6px #000202, 108px 6px #000202, 24px 12px #000202, 30px 12px,
      36px 12px, 42px 12px, 48px 12px, 54px 12px #000202, 102px 12px #000202,
      108px 12px #eb2010, 114px 12px #000202, 18px 18px #000202, 24px 18px,
      30px 18px, 36px 18px, 42px 18px, 48px 18px, 54px 18px, 60px 18px #000202,
      102px 18px #000202, 108px 18px #eb2010, 114px 18px #eb2010,
      120px 18px #000202, 18px 24px #000202, 24px 24px, 30px 24px, 36px 24px,
      42px 24px, 48px 24px, 54px 24px, 60px 24px #000202, 102px 24px #000202,
      108px 24px #eb2010, 114px 24px #eb2010, 120px 24px #000202,
      12px 30px #000202, 18px 30px, 24px 30px, 30px 30px, 36px 30px, 42px 30px,
      48px 30px, 54px 30px, 60px 30px, 66px 30px #000202, 96px 30px #000202,
      102px 30px #eb2010, 108px 30px #eb2010, 114px 30px, 120px 30px #eb2010,
      126px 30px #000202, 6px 36px #000202, 12px 36px, 18px 36px, 24px 36px,
      30px 36px, 36px 36px #fdfcff, 42px 36px #000202, 48px 36px, 54px 36px,
      60px 36px, 66px 36px #000202, 96px 36px #000202, 102px 36px #eb2010,
      108px 36px, 114px 36px #e7d70e, 120px 36px #eb2010, 126px 36px #000202,
      6px 42px #000202, 12px 42px, 18px 42px, 24px 42px, 30px 42px,
      36px 42px #000202, 42px 42px #000202, 48px 42px, 54px 42px, 60px 42px,
      66px 42px, 72px 42px #000202, 96px 42px #000202, 102px 42px #eb2010,
      108px 42px #e5d70a, 114px 42px #e5d70a, 120px 42px #eb2010,
      126px 42px #000202, 6px 48px #000202, 12px 48px, 18px 48px, 24px 48px,
      30px 48px, 36px 48px #000202, 42px 48px #000202, 48px 48px, 54px 48px,
      60px 48px, 66px 48px, 72px 48px #000202, 102px 48px #000202,
      108px 48px #e5d70a, 114px 48px #000202, 120px 48px #000202,
      12px 54px #000202, 18px 54px, 24px 54px, 30px 54px, 36px 54px, 42px 54px,
      48px 54px, 54px 54px, 60px 54px, 66px 54px, 72px 54px, 78px 54px #000202,
      102px 54px #000202, 108px 54px, 114px 54px #000202, 18px 60px #000202,
      24px 60px #000202, 30px 60px, 36px 60px, 42px 60px, 48px 60px, 54px 60px,
      60px 60px, 66px 60px, 72px 60px, 78px 60px, 84px 60px #000202,
      96px 60px #000202, 102px 60px, 108px 60px, 114px 60px #000202,
      30px 66px #000202, 36px 66px #000202, 42px 66px #000202, 48px 66px,
      54px 66px, 60px 66px #000202, 66px 66px, 72px 66px, 78px 66px,
      84px 66px #000202, 90px 66px #000202, 96px 66px, 102px 66px,
      108px 66px #000202, 36px 72px #000202, 42px 72px #e7d70e,
      48px 72px #e5d70a, 54px 72px #000202, 60px 72px, 66px 72px, 72px 72px,
      78px 72px, 84px 72px, 90px 72px #000202, 96px 72px, 102px 72px,
      108px 72px #000202, 36px 78px #000202, 42px 78px #e5d70a,
      48px 78px #e5d70a, 54px 78px #e5d70a, 60px 78px #000202, 66px 78px #000202,
      72px 78px, 78px 78px, 84px 78px, 90px 78px #000202, 96px 78px,
      102px 78px #000202, 30px 84px #000202, 36px 84px #fdfcff,
      42px 84px #000202, 48px 84px #e7d70e, 54px 84px #e5d70a, 60px 84px #e5d70a,
      66px 84px, 72px 84px, 78px 84px, 84px 84px, 90px 84px #000202,
      96px 84px #000202, 36px 90px #000202, 42px 90px #000202, 48px 90px #000202,
      54px 90px #e5d70a, 60px 90px #e5d70a, 66px 90px, 72px 90px, 78px 90px,
      84px 90px #000202, 90px 90px #000202, 54px 96px #000202, 60px 96px #000202,
      66px 96px #000202, 78px 96px #000202, 84px 96px #000202,
      60px 102px #000202, 66px 102px #fdfcff, 78px 102px #fdfcff,
      84px 102px #000202, 66px 108px #000202, 72px 108px #000202,
      78px 108px #000202;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-charmander::before {
      box-shadow: 30px 6px 0 0.02em #000202, 36px 6px 0 0.02em #000202,
        42px 6px 0 0.02em #000202, 48px 6px 0 0.02em #000202,
        108px 6px 0 0.02em #000202, 24px 12px 0 0.02em #000202,
        30px 12px 0 0.02em, 36px 12px 0 0.02em, 42px 12px 0 0.02em,
        48px 12px 0 0.02em, 54px 12px 0 0.02em #000202,
        102px 12px 0 0.02em #000202, 108px 12px 0 0.02em #eb2010,
        114px 12px 0 0.02em #000202, 18px 18px 0 0.02em #000202,
        24px 18px 0 0.02em, 30px 18px 0 0.02em, 36px 18px 0 0.02em,
        42px 18px 0 0.02em, 48px 18px 0 0.02em, 54px 18px 0 0.02em,
        60px 18px 0 0.02em #000202, 102px 18px 0 0.02em #000202,
        108px 18px 0 0.02em #eb2010, 114px 18px 0 0.02em #eb2010,
        120px 18px 0 0.02em #000202, 18px 24px 0 0.02em #000202,
        24px 24px 0 0.02em, 30px 24px 0 0.02em, 36px 24px 0 0.02em,
        42px 24px 0 0.02em, 48px 24px 0 0.02em, 54px 24px 0 0.02em,
        60px 24px 0 0.02em #000202, 102px 24px 0 0.02em #000202,
        108px 24px 0 0.02em #eb2010, 114px 24px 0 0.02em #eb2010,
        120px 24px 0 0.02em #000202, 12px 30px 0 0.02em #000202,
        18px 30px 0 0.02em, 24px 30px 0 0.02em, 30px 30px 0 0.02em,
        36px 30px 0 0.02em, 42px 30px 0 0.02em, 48px 30px 0 0.02em,
        54px 30px 0 0.02em, 60px 30px 0 0.02em, 66px 30px 0 0.02em #000202,
        96px 30px 0 0.02em #000202, 102px 30px 0 0.02em #eb2010,
        108px 30px 0 0.02em #eb2010, 114px 30px 0 0.02em,
        120px 30px 0 0.02em #eb2010, 126px 30px 0 0.02em #000202,
        6px 36px 0 0.02em #000202, 12px 36px 0 0.02em, 18px 36px 0 0.02em,
        24px 36px 0 0.02em, 30px 36px 0 0.02em, 36px 36px 0 0.02em #fdfcff,
        42px 36px 0 0.02em #000202, 48px 36px 0 0.02em, 54px 36px 0 0.02em,
        60px 36px 0 0.02em, 66px 36px 0 0.02em #000202,
        96px 36px 0 0.02em #000202, 102px 36px 0 0.02em #eb2010,
        108px 36px 0 0.02em, 114px 36px 0 0.02em #e7d70e,
        120px 36px 0 0.02em #eb2010, 126px 36px 0 0.02em #000202,
        6px 42px 0 0.02em #000202, 12px 42px 0 0.02em, 18px 42px 0 0.02em,
        24px 42px 0 0.02em, 30px 42px 0 0.02em, 36px 42px 0 0.02em #000202,
        42px 42px 0 0.02em #000202, 48px 42px 0 0.02em, 54px 42px 0 0.02em,
        60px 42px 0 0.02em, 66px 42px 0 0.02em, 72px 42px 0 0.02em #000202,
        96px 42px 0 0.02em #000202, 102px 42px 0 0.02em #eb2010,
        108px 42px 0 0.02em #e5d70a, 114px 42px 0 0.02em #e5d70a,
        120px 42px 0 0.02em #eb2010, 126px 42px 0 0.02em #000202,
        6px 48px 0 0.02em #000202, 12px 48px 0 0.02em, 18px 48px 0 0.02em,
        24px 48px 0 0.02em, 30px 48px 0 0.02em, 36px 48px 0 0.02em #000202,
        42px 48px 0 0.02em #000202, 48px 48px 0 0.02em, 54px 48px 0 0.02em,
        60px 48px 0 0.02em, 66px 48px 0 0.02em, 72px 48px 0 0.02em #000202,
        102px 48px 0 0.02em #000202, 108px 48px 0 0.02em #e5d70a,
        114px 48px 0 0.02em #000202, 120px 48px 0 0.02em #000202,
        12px 54px 0 0.02em #000202, 18px 54px 0 0.02em, 24px 54px 0 0.02em,
        30px 54px 0 0.02em, 36px 54px 0 0.02em, 42px 54px 0 0.02em,
        48px 54px 0 0.02em, 54px 54px 0 0.02em, 60px 54px 0 0.02em,
        66px 54px 0 0.02em, 72px 54px 0 0.02em, 78px 54px 0 0.02em #000202,
        102px 54px 0 0.02em #000202, 108px 54px 0 0.02em,
        114px 54px 0 0.02em #000202, 18px 60px 0 0.02em #000202,
        24px 60px 0 0.02em #000202, 30px 60px 0 0.02em, 36px 60px 0 0.02em,
        42px 60px 0 0.02em, 48px 60px 0 0.02em, 54px 60px 0 0.02em,
        60px 60px 0 0.02em, 66px 60px 0 0.02em, 72px 60px 0 0.02em,
        78px 60px 0 0.02em, 84px 60px 0 0.02em #000202,
        96px 60px 0 0.02em #000202, 102px 60px 0 0.02em, 108px 60px 0 0.02em,
        114px 60px 0 0.02em #000202, 30px 66px 0 0.02em #000202,
        36px 66px 0 0.02em #000202, 42px 66px 0 0.02em #000202,
        48px 66px 0 0.02em, 54px 66px 0 0.02em, 60px 66px 0 0.02em #000202,
        66px 66px 0 0.02em, 72px 66px 0 0.02em, 78px 66px 0 0.02em,
        84px 66px 0 0.02em #000202, 90px 66px 0 0.02em #000202,
        96px 66px 0 0.02em, 102px 66px 0 0.02em, 108px 66px 0 0.02em #000202,
        36px 72px 0 0.02em #000202, 42px 72px 0 0.02em #e7d70e,
        48px 72px 0 0.02em #e5d70a, 54px 72px 0 0.02em #000202,
        60px 72px 0 0.02em, 66px 72px 0 0.02em, 72px 72px 0 0.02em,
        78px 72px 0 0.02em, 84px 72px 0 0.02em, 90px 72px 0 0.02em #000202,
        96px 72px 0 0.02em, 102px 72px 0 0.02em, 108px 72px 0 0.02em #000202,
        36px 78px 0 0.02em #000202, 42px 78px 0 0.02em #e5d70a,
        48px 78px 0 0.02em #e5d70a, 54px 78px 0 0.02em #e5d70a,
        60px 78px 0 0.02em #000202, 66px 78px 0 0.02em #000202,
        72px 78px 0 0.02em, 78px 78px 0 0.02em, 84px 78px 0 0.02em,
        90px 78px 0 0.02em #000202, 96px 78px 0 0.02em,
        102px 78px 0 0.02em #000202, 30px 84px 0 0.02em #000202,
        36px 84px 0 0.02em #fdfcff, 42px 84px 0 0.02em #000202,
        48px 84px 0 0.02em #e7d70e, 54px 84px 0 0.02em #e5d70a,
        60px 84px 0 0.02em #e5d70a, 66px 84px 0 0.02em, 72px 84px 0 0.02em,
        78px 84px 0 0.02em, 84px 84px 0 0.02em, 90px 84px 0 0.02em #000202,
        96px 84px 0 0.02em #000202, 36px 90px 0 0.02em #000202,
        42px 90px 0 0.02em #000202, 48px 90px 0 0.02em #000202,
        54px 90px 0 0.02em #e5d70a, 60px 90px 0 0.02em #e5d70a,
        66px 90px 0 0.02em, 72px 90px 0 0.02em, 78px 90px 0 0.02em,
        84px 90px 0 0.02em #000202, 90px 90px 0 0.02em #000202,
        54px 96px 0 0.02em #000202, 60px 96px 0 0.02em #000202,
        66px 96px 0 0.02em #000202, 78px 96px 0 0.02em #000202,
        84px 96px 0 0.02em #000202, 60px 102px 0 0.02em #000202,
        66px 102px 0 0.02em #fdfcff, 78px 102px 0 0.02em #fdfcff,
        84px 102px 0 0.02em #000202, 66px 108px 0 0.02em #000202,
        72px 108px 0 0.02em #000202, 78px 108px 0 0.02em #000202;
    }
  }

  .nes-squirtle {
    position: relative;
    display: inline-block;
    width: 126px;
    height: 102px;
  }

  .nes-squirtle::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #9cf;
    box-shadow: 24px 6px #000, 30px 6px #000, 36px 6px #000, 42px 6px #000,
      102px 6px #000, 108px 6px #000, 114px 6px #000, 18px 12px #000, 24px 12px,
      30px 12px, 36px 12px, 42px 12px, 48px 12px #000, 54px 12px #000,
      96px 12px #000, 102px 12px, 108px 12px, 114px 12px, 120px 12px #000,
      12px 18px #000, 18px 18px, 24px 18px, 30px 18px, 36px 18px, 42px 18px,
      48px 18px, 54px 18px, 60px 18px #000, 66px 18px #000, 90px 18px #000,
      96px 18px, 102px 18px, 108px 18px, 114px 18px, 120px 18px, 126px 18px #000,
      12px 24px #000, 18px 24px, 24px 24px, 30px 24px, 36px 24px, 42px 24px,
      48px 24px, 54px 24px, 60px 24px #000, 66px 24px #f89934, 72px 24px #000,
      78px 24px #000, 90px 24px #000, 96px 24px, 102px 24px, 108px 24px,
      114px 24px #000, 120px 24px, 126px 24px #000, 6px 30px #000,
      12px 30px #cb6633, 18px 30px, 24px 30px, 30px 30px, 36px 30px, 42px 30px,
      48px 30px, 54px 30px, 60px 30px, 66px 30px #f89934, 72px 30px #f89934,
      78px 30px #f89934, 84px 30px #000, 90px 30px, 96px 30px, 102px 30px,
      108px 30px #000, 114px 30px, 120px 30px, 126px 30px #000, 6px 36px #000,
      12px 36px, 18px 36px, 24px 36px, 30px 36px, 36px 36px #fff, 42px 36px #000,
      48px 36px, 54px 36px, 60px 36px, 66px 36px #fff, 72px 36px #f89934,
      78px 36px #f89934, 84px 36px #f89934, 90px 36px #000, 96px 36px,
      102px 36px, 108px 36px #000, 114px 36px, 120px 36px #000, 6px 42px #000,
      12px 42px, 18px 42px, 24px 42px, 30px 42px, 36px 42px #000,
      42px 42px #cb6633, 48px 42px, 54px 42px, 60px 42px, 66px 42px #fff,
      72px 42px #f89934, 78px 42px #f89934, 84px 42px #f89934, 90px 42px #000,
      96px 42px, 102px 42px #000, 108px 42px #000, 114px 42px #000,
      12px 48px #000, 18px 48px, 24px 48px, 30px 48px, 36px 48px #000,
      42px 48px #cb6633, 48px 48px, 54px 48px, 60px 48px, 66px 48px #000,
      72px 48px #fff, 78px 48px #f89934, 84px 48px #f89934, 90px 48px #f89934,
      96px 48px #000, 102px 48px #000, 18px 54px #000, 24px 54px #000, 30px 54px,
      36px 54px, 42px 54px, 48px 54px, 54px 54px #000, 60px 54px #000, 66px 54px,
      72px 54px, 78px 54px #fff, 84px 54px #f89934, 90px 54px #f89934,
      96px 54px #000, 18px 60px #000, 24px 60px, 30px 60px #000, 36px 60px #000,
      42px 60px #000, 48px 60px #000, 54px 60px, 60px 60px, 66px 60px, 72px 60px,
      78px 60px #fff, 84px 60px #f89934, 90px 60px #f89934, 96px 60px #000,
      24px 66px #000, 30px 66px #000, 36px 66px #ff3, 42px 66px #ff3,
      48px 66px #000, 54px 66px, 60px 66px, 66px 66px, 72px 66px #000,
      78px 66px #fff, 84px 66px #f89934, 90px 66px #f89934, 96px 66px #000,
      36px 72px #000, 42px 72px #ff3, 48px 72px #ff3, 54px 72px #000,
      60px 72px #000, 66px 72px #000, 72px 72px #000, 78px 72px #fff,
      84px 72px #f89934, 90px 72px #f89934, 96px 72px #000, 30px 78px #000,
      36px 78px, 42px 78px #000, 48px 78px #ff3, 54px 78px #ff3, 60px 78px #ff3,
      66px 78px #ff3, 72px 78px #ff3, 78px 78px #000, 84px 78px #fff,
      90px 78px #000, 36px 84px #000, 42px 84px #000, 48px 84px #000,
      54px 84px #000, 60px 84px #ff3, 66px 84px #ff3, 72px 84px, 78px 84px #000,
      84px 84px #fff, 90px 84px #000, 54px 90px #000, 60px 90px #000,
      66px 90px #000, 72px 90px, 78px 90px #000, 84px 90px #000, 60px 96px #000,
      66px 96px, 72px 96px, 78px 96px, 84px 96px #000, 66px 102px #000,
      72px 102px #000, 78px 102px #000;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-squirtle::before {
      box-shadow: 24px 6px 0 0.02em #000, 30px 6px 0 0.02em #000,
        36px 6px 0 0.02em #000, 42px 6px 0 0.02em #000, 102px 6px 0 0.02em #000,
        108px 6px 0 0.02em #000, 114px 6px 0 0.02em #000,
        18px 12px 0 0.02em #000, 24px 12px 0 0.02em, 30px 12px 0 0.02em,
        36px 12px 0 0.02em, 42px 12px 0 0.02em, 48px 12px 0 0.02em #000,
        54px 12px 0 0.02em #000, 96px 12px 0 0.02em #000, 102px 12px 0 0.02em,
        108px 12px 0 0.02em, 114px 12px 0 0.02em, 120px 12px 0 0.02em #000,
        12px 18px 0 0.02em #000, 18px 18px 0 0.02em, 24px 18px 0 0.02em,
        30px 18px 0 0.02em, 36px 18px 0 0.02em, 42px 18px 0 0.02em,
        48px 18px 0 0.02em, 54px 18px 0 0.02em, 60px 18px 0 0.02em #000,
        66px 18px 0 0.02em #000, 90px 18px 0 0.02em #000, 96px 18px 0 0.02em,
        102px 18px 0 0.02em, 108px 18px 0 0.02em, 114px 18px 0 0.02em,
        120px 18px 0 0.02em, 126px 18px 0 0.02em #000, 12px 24px 0 0.02em #000,
        18px 24px 0 0.02em, 24px 24px 0 0.02em, 30px 24px 0 0.02em,
        36px 24px 0 0.02em, 42px 24px 0 0.02em, 48px 24px 0 0.02em,
        54px 24px 0 0.02em, 60px 24px 0 0.02em #000, 66px 24px 0 0.02em #f89934,
        72px 24px 0 0.02em #000, 78px 24px 0 0.02em #000,
        90px 24px 0 0.02em #000, 96px 24px 0 0.02em, 102px 24px 0 0.02em,
        108px 24px 0 0.02em, 114px 24px 0 0.02em #000, 120px 24px 0 0.02em,
        126px 24px 0 0.02em #000, 6px 30px 0 0.02em #000,
        12px 30px 0 0.02em #cb6633, 18px 30px 0 0.02em, 24px 30px 0 0.02em,
        30px 30px 0 0.02em, 36px 30px 0 0.02em, 42px 30px 0 0.02em,
        48px 30px 0 0.02em, 54px 30px 0 0.02em, 60px 30px 0 0.02em,
        66px 30px 0 0.02em #f89934, 72px 30px 0 0.02em #f89934,
        78px 30px 0 0.02em #f89934, 84px 30px 0 0.02em #000, 90px 30px 0 0.02em,
        96px 30px 0 0.02em, 102px 30px 0 0.02em, 108px 30px 0 0.02em #000,
        114px 30px 0 0.02em, 120px 30px 0 0.02em, 126px 30px 0 0.02em #000,
        6px 36px 0 0.02em #000, 12px 36px 0 0.02em, 18px 36px 0 0.02em,
        24px 36px 0 0.02em, 30px 36px 0 0.02em, 36px 36px 0 0.02em #fff,
        42px 36px 0 0.02em #000, 48px 36px 0 0.02em, 54px 36px 0 0.02em,
        60px 36px 0 0.02em, 66px 36px 0 0.02em #fff, 72px 36px 0 0.02em #f89934,
        78px 36px 0 0.02em #f89934, 84px 36px 0 0.02em #f89934,
        90px 36px 0 0.02em #000, 96px 36px 0 0.02em, 102px 36px 0 0.02em,
        108px 36px 0 0.02em #000, 114px 36px 0 0.02em, 120px 36px 0 0.02em #000,
        6px 42px 0 0.02em #000, 12px 42px 0 0.02em, 18px 42px 0 0.02em,
        24px 42px 0 0.02em, 30px 42px 0 0.02em, 36px 42px 0 0.02em #000,
        42px 42px 0 0.02em #cb6633, 48px 42px 0 0.02em, 54px 42px 0 0.02em,
        60px 42px 0 0.02em, 66px 42px 0 0.02em #fff, 72px 42px 0 0.02em #f89934,
        78px 42px 0 0.02em #f89934, 84px 42px 0 0.02em #f89934,
        90px 42px 0 0.02em #000, 96px 42px 0 0.02em, 102px 42px 0 0.02em #000,
        108px 42px 0 0.02em #000, 114px 42px 0 0.02em #000,
        12px 48px 0 0.02em #000, 18px 48px 0 0.02em, 24px 48px 0 0.02em,
        30px 48px 0 0.02em, 36px 48px 0 0.02em #000, 42px 48px 0 0.02em #cb6633,
        48px 48px 0 0.02em, 54px 48px 0 0.02em, 60px 48px 0 0.02em,
        66px 48px 0 0.02em #000, 72px 48px 0 0.02em #fff,
        78px 48px 0 0.02em #f89934, 84px 48px 0 0.02em #f89934,
        90px 48px 0 0.02em #f89934, 96px 48px 0 0.02em #000,
        102px 48px 0 0.02em #000, 18px 54px 0 0.02em #000,
        24px 54px 0 0.02em #000, 30px 54px 0 0.02em, 36px 54px 0 0.02em,
        42px 54px 0 0.02em, 48px 54px 0 0.02em, 54px 54px 0 0.02em #000,
        60px 54px 0 0.02em #000, 66px 54px 0 0.02em, 72px 54px 0 0.02em,
        78px 54px 0 0.02em #fff, 84px 54px 0 0.02em #f89934,
        90px 54px 0 0.02em #f89934, 96px 54px 0 0.02em #000,
        18px 60px 0 0.02em #000, 24px 60px 0 0.02em, 30px 60px 0 0.02em #000,
        36px 60px 0 0.02em #000, 42px 60px 0 0.02em #000,
        48px 60px 0 0.02em #000, 54px 60px 0 0.02em, 60px 60px 0 0.02em,
        66px 60px 0 0.02em, 72px 60px 0 0.02em, 78px 60px 0 0.02em #fff,
        84px 60px 0 0.02em #f89934, 90px 60px 0 0.02em #f89934,
        96px 60px 0 0.02em #000, 24px 66px 0 0.02em #000,
        30px 66px 0 0.02em #000, 36px 66px 0 0.02em #ff3,
        42px 66px 0 0.02em #ff3, 48px 66px 0 0.02em #000, 54px 66px 0 0.02em,
        60px 66px 0 0.02em, 66px 66px 0 0.02em, 72px 66px 0 0.02em #000,
        78px 66px 0 0.02em #fff, 84px 66px 0 0.02em #f89934,
        90px 66px 0 0.02em #f89934, 96px 66px 0 0.02em #000,
        36px 72px 0 0.02em #000, 42px 72px 0 0.02em #ff3,
        48px 72px 0 0.02em #ff3, 54px 72px 0 0.02em #000,
        60px 72px 0 0.02em #000, 66px 72px 0 0.02em #000,
        72px 72px 0 0.02em #000, 78px 72px 0 0.02em #fff,
        84px 72px 0 0.02em #f89934, 90px 72px 0 0.02em #f89934,
        96px 72px 0 0.02em #000, 30px 78px 0 0.02em #000, 36px 78px 0 0.02em,
        42px 78px 0 0.02em #000, 48px 78px 0 0.02em #ff3,
        54px 78px 0 0.02em #ff3, 60px 78px 0 0.02em #ff3,
        66px 78px 0 0.02em #ff3, 72px 78px 0 0.02em #ff3,
        78px 78px 0 0.02em #000, 84px 78px 0 0.02em #fff,
        90px 78px 0 0.02em #000, 36px 84px 0 0.02em #000,
        42px 84px 0 0.02em #000, 48px 84px 0 0.02em #000,
        54px 84px 0 0.02em #000, 60px 84px 0 0.02em #ff3,
        66px 84px 0 0.02em #ff3, 72px 84px 0 0.02em, 78px 84px 0 0.02em #000,
        84px 84px 0 0.02em #fff, 90px 84px 0 0.02em #000,
        54px 90px 0 0.02em #000, 60px 90px 0 0.02em #000,
        66px 90px 0 0.02em #000, 72px 90px 0 0.02em, 78px 90px 0 0.02em #000,
        84px 90px 0 0.02em #000, 60px 96px 0 0.02em #000, 66px 96px 0 0.02em,
        72px 96px 0 0.02em, 78px 96px 0 0.02em, 84px 96px 0 0.02em #000,
        66px 102px 0 0.02em #000, 72px 102px 0 0.02em #000,
        78px 102px 0 0.02em #000;
    }
  }

  .nes-phone {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 126px;
  }

  .nes-phone::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #000;
    box-shadow: 18px 6px, 24px 6px, 30px 6px, 36px 6px, 42px 6px, 48px 6px,
      12px 12px, 18px 12px, 24px 12px #3c4665, 30px 12px #3c4665,
      36px 12px #3c4665, 42px 12px #596985, 48px 12px, 6px 18px, 12px 18px,
      18px 18px #3c4665, 24px 18px #3c4665, 30px 18px #3c4665, 36px 18px #3c4665,
      42px 18px #596985, 48px 18px, 6px 24px, 12px 24px #3c4665,
      18px 24px #3c4665, 24px 24px #3c4665, 30px 24px #3c4665, 36px 24px #3c4665,
      42px 24px #596985, 48px 24px, 6px 30px, 12px 30px #3c4665,
      18px 30px #3c4665, 24px 30px #3c4665, 30px 30px #3c4665, 36px 30px #3c4665,
      42px 30px #596985, 48px 30px, 6px 36px, 12px 36px #3c4665,
      18px 36px #3c4665, 24px 36px #3c4665, 30px 36px #3c4665, 36px 36px #3c4665,
      42px 36px #596985, 48px 36px, 6px 42px, 12px 42px #3c4665,
      18px 42px #3c4665, 24px 42px, 30px 42px, 36px 42px, 42px 42px, 48px 42px,
      6px 48px, 12px 48px #3c4665, 18px 48px #3c4665, 24px 48px, 6px 54px,
      12px 54px #3c4665, 18px 54px #3c4665, 24px 54px, 6px 60px,
      12px 60px #3c4665, 18px 60px #3c4665, 24px 60px, 6px 66px,
      12px 66px #3c4665, 18px 66px #3c4665, 24px 66px, 6px 72px,
      12px 72px #3c4665, 18px 72px #3c4665, 24px 72px, 6px 78px,
      12px 78px #3c4665, 18px 78px #3c4665, 24px 78px, 6px 84px,
      12px 84px #3c4665, 18px 84px #3c4665, 24px 84px, 6px 90px,
      12px 90px #3c4665, 18px 90px #3c4665, 24px 90px, 30px 90px, 36px 90px,
      42px 90px, 48px 90px, 6px 96px, 12px 96px #3c4665, 18px 96px #3c4665,
      24px 96px #3c4665, 30px 96px #3c4665, 36px 96px #3c4665, 42px 96px #596985,
      48px 96px, 6px 102px, 12px 102px #3c4665, 18px 102px #3c4665,
      24px 102px #3c4665, 30px 102px #3c4665, 36px 102px #3c4665,
      42px 102px #596985, 48px 102px, 6px 108px, 12px 108px #3c4665,
      18px 108px #3c4665, 24px 108px #3c4665, 30px 108px #3c4665,
      36px 108px #3c4665, 42px 108px #596985, 48px 108px, 6px 114px, 12px 114px,
      18px 114px #3c4665, 24px 114px #3c4665, 30px 114px #3c4665,
      36px 114px #3c4665, 42px 114px #596985, 48px 114px, 12px 120px, 18px 120px,
      24px 120px #3c4665, 30px 120px #3c4665, 36px 120px #3c4665,
      42px 120px #596985, 48px 120px, 18px 126px, 24px 126px, 30px 126px,
      36px 126px, 42px 126px, 48px 126px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-phone::before {
      box-shadow: 18px 6px 0 0.02em, 24px 6px 0 0.02em, 30px 6px 0 0.02em,
        36px 6px 0 0.02em, 42px 6px 0 0.02em, 48px 6px 0 0.02em,
        12px 12px 0 0.02em, 18px 12px 0 0.02em, 24px 12px 0 0.02em #3c4665,
        30px 12px 0 0.02em #3c4665, 36px 12px 0 0.02em #3c4665,
        42px 12px 0 0.02em #596985, 48px 12px 0 0.02em, 6px 18px 0 0.02em,
        12px 18px 0 0.02em, 18px 18px 0 0.02em #3c4665,
        24px 18px 0 0.02em #3c4665, 30px 18px 0 0.02em #3c4665,
        36px 18px 0 0.02em #3c4665, 42px 18px 0 0.02em #596985,
        48px 18px 0 0.02em, 6px 24px 0 0.02em, 12px 24px 0 0.02em #3c4665,
        18px 24px 0 0.02em #3c4665, 24px 24px 0 0.02em #3c4665,
        30px 24px 0 0.02em #3c4665, 36px 24px 0 0.02em #3c4665,
        42px 24px 0 0.02em #596985, 48px 24px 0 0.02em, 6px 30px 0 0.02em,
        12px 30px 0 0.02em #3c4665, 18px 30px 0 0.02em #3c4665,
        24px 30px 0 0.02em #3c4665, 30px 30px 0 0.02em #3c4665,
        36px 30px 0 0.02em #3c4665, 42px 30px 0 0.02em #596985,
        48px 30px 0 0.02em, 6px 36px 0 0.02em, 12px 36px 0 0.02em #3c4665,
        18px 36px 0 0.02em #3c4665, 24px 36px 0 0.02em #3c4665,
        30px 36px 0 0.02em #3c4665, 36px 36px 0 0.02em #3c4665,
        42px 36px 0 0.02em #596985, 48px 36px 0 0.02em, 6px 42px 0 0.02em,
        12px 42px 0 0.02em #3c4665, 18px 42px 0 0.02em #3c4665,
        24px 42px 0 0.02em, 30px 42px 0 0.02em, 36px 42px 0 0.02em,
        42px 42px 0 0.02em, 48px 42px 0 0.02em, 6px 48px 0 0.02em,
        12px 48px 0 0.02em #3c4665, 18px 48px 0 0.02em #3c4665,
        24px 48px 0 0.02em, 6px 54px 0 0.02em, 12px 54px 0 0.02em #3c4665,
        18px 54px 0 0.02em #3c4665, 24px 54px 0 0.02em, 6px 60px 0 0.02em,
        12px 60px 0 0.02em #3c4665, 18px 60px 0 0.02em #3c4665,
        24px 60px 0 0.02em, 6px 66px 0 0.02em, 12px 66px 0 0.02em #3c4665,
        18px 66px 0 0.02em #3c4665, 24px 66px 0 0.02em, 6px 72px 0 0.02em,
        12px 72px 0 0.02em #3c4665, 18px 72px 0 0.02em #3c4665,
        24px 72px 0 0.02em, 6px 78px 0 0.02em, 12px 78px 0 0.02em #3c4665,
        18px 78px 0 0.02em #3c4665, 24px 78px 0 0.02em, 6px 84px 0 0.02em,
        12px 84px 0 0.02em #3c4665, 18px 84px 0 0.02em #3c4665,
        24px 84px 0 0.02em, 6px 90px 0 0.02em, 12px 90px 0 0.02em #3c4665,
        18px 90px 0 0.02em #3c4665, 24px 90px 0 0.02em, 30px 90px 0 0.02em,
        36px 90px 0 0.02em, 42px 90px 0 0.02em, 48px 90px 0 0.02em,
        6px 96px 0 0.02em, 12px 96px 0 0.02em #3c4665,
        18px 96px 0 0.02em #3c4665, 24px 96px 0 0.02em #3c4665,
        30px 96px 0 0.02em #3c4665, 36px 96px 0 0.02em #3c4665,
        42px 96px 0 0.02em #596985, 48px 96px 0 0.02em, 6px 102px 0 0.02em,
        12px 102px 0 0.02em #3c4665, 18px 102px 0 0.02em #3c4665,
        24px 102px 0 0.02em #3c4665, 30px 102px 0 0.02em #3c4665,
        36px 102px 0 0.02em #3c4665, 42px 102px 0 0.02em #596985,
        48px 102px 0 0.02em, 6px 108px 0 0.02em, 12px 108px 0 0.02em #3c4665,
        18px 108px 0 0.02em #3c4665, 24px 108px 0 0.02em #3c4665,
        30px 108px 0 0.02em #3c4665, 36px 108px 0 0.02em #3c4665,
        42px 108px 0 0.02em #596985, 48px 108px 0 0.02em, 6px 114px 0 0.02em,
        12px 114px 0 0.02em, 18px 114px 0 0.02em #3c4665,
        24px 114px 0 0.02em #3c4665, 30px 114px 0 0.02em #3c4665,
        36px 114px 0 0.02em #3c4665, 42px 114px 0 0.02em #596985,
        48px 114px 0 0.02em, 12px 120px 0 0.02em, 18px 120px 0 0.02em,
        24px 120px 0 0.02em #3c4665, 30px 120px 0 0.02em #3c4665,
        36px 120px 0 0.02em #3c4665, 42px 120px 0 0.02em #596985,
        48px 120px 0 0.02em, 18px 126px 0 0.02em, 24px 126px 0 0.02em,
        30px 126px 0 0.02em, 36px 126px 0 0.02em, 42px 126px 0 0.02em,
        48px 126px 0 0.02em;
    }
  }

  .nes-smartphone {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 162px;
  }

  .nes-smartphone::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #060606;
    box-shadow: 12px 6px, 18px 6px, 24px 6px, 30px 6px, 36px 6px, 42px 6px,
      48px 6px, 54px 6px, 60px 6px, 66px 6px, 72px 6px, 78px 6px, 84px 6px,
      6px 12px, 12px 12px, 18px 12px #fff, 24px 12px #fff, 30px 12px #fff,
      36px 12px #fff, 42px 12px #fff, 48px 12px #fff, 54px 12px #fff,
      60px 12px #fff, 66px 12px #fff, 72px 12px #fff, 78px 12px #fff, 84px 12px,
      90px 12px, 6px 18px, 12px 18px #fff, 18px 18px #fff, 24px 18px #fff,
      30px 18px, 36px 18px, 42px 18px, 48px 18px, 54px 18px, 60px 18px,
      66px 18px, 72px 18px #fff, 78px 18px #fff, 84px 18px #fff, 90px 18px,
      6px 24px, 12px 24px #fff, 18px 24px #fff, 24px 24px #fff, 30px 24px #fff,
      36px 24px #fff, 42px 24px #fff, 48px 24px #fff, 54px 24px #fff,
      60px 24px #fff, 66px 24px #fff, 72px 24px #fff, 78px 24px #fff,
      84px 24px #fff, 90px 24px, 6px 30px, 12px 30px #fff, 18px 30px, 24px 30px,
      30px 30px, 36px 30px, 42px 30px, 48px 30px, 54px 30px, 60px 30px,
      66px 30px, 72px 30px, 78px 30px, 84px 30px #fff, 90px 30px, 6px 36px,
      12px 36px #fff, 18px 36px, 24px 36px, 30px 36px, 36px 36px, 42px 36px,
      48px 36px, 54px 36px, 60px 36px, 66px 36px, 72px 36px, 78px 36px,
      84px 36px #fff, 90px 36px, 6px 42px, 12px 42px #fff, 18px 42px, 24px 42px,
      30px 42px, 36px 42px, 42px 42px, 48px 42px, 54px 42px, 60px 42px,
      66px 42px, 72px 42px, 78px 42px, 84px 42px #fff, 90px 42px, 6px 48px,
      12px 48px #fff, 18px 48px, 24px 48px, 30px 48px, 36px 48px, 42px 48px,
      48px 48px, 54px 48px, 60px 48px, 66px 48px, 72px 48px, 78px 48px,
      84px 48px #fff, 90px 48px, 6px 54px, 12px 54px #fff, 18px 54px, 24px 54px,
      30px 54px, 36px 54px, 42px 54px, 48px 54px, 54px 54px, 60px 54px,
      66px 54px, 72px 54px, 78px 54px, 84px 54px #fff, 90px 54px, 6px 60px,
      12px 60px #fff, 18px 60px, 24px 60px, 30px 60px, 36px 60px, 42px 60px,
      48px 60px, 54px 60px, 60px 60px, 66px 60px, 72px 60px, 78px 60px,
      84px 60px #fff, 90px 60px, 6px 66px, 12px 66px #fff, 18px 66px, 24px 66px,
      30px 66px, 36px 66px, 42px 66px, 48px 66px, 54px 66px, 60px 66px,
      66px 66px, 72px 66px, 78px 66px, 84px 66px #fff, 90px 66px, 6px 72px,
      12px 72px #fff, 18px 72px, 24px 72px, 30px 72px, 36px 72px, 42px 72px,
      48px 72px, 54px 72px, 60px 72px, 66px 72px, 72px 72px, 78px 72px,
      84px 72px #fff, 90px 72px, 6px 78px, 12px 78px #fff, 18px 78px, 24px 78px,
      30px 78px, 36px 78px, 42px 78px, 48px 78px, 54px 78px, 60px 78px,
      66px 78px, 72px 78px, 78px 78px, 84px 78px #fff, 90px 78px, 6px 84px,
      12px 84px #fff, 18px 84px, 24px 84px, 30px 84px, 36px 84px, 42px 84px,
      48px 84px, 54px 84px, 60px 84px, 66px 84px, 72px 84px, 78px 84px,
      84px 84px #fff, 90px 84px, 6px 90px, 12px 90px #fff, 18px 90px, 24px 90px,
      30px 90px, 36px 90px, 42px 90px, 48px 90px, 54px 90px, 60px 90px,
      66px 90px, 72px 90px, 78px 90px, 84px 90px #fff, 90px 90px, 6px 96px,
      12px 96px #fff, 18px 96px, 24px 96px, 30px 96px, 36px 96px, 42px 96px,
      48px 96px, 54px 96px, 60px 96px, 66px 96px, 72px 96px, 78px 96px,
      84px 96px #fff, 90px 96px, 6px 102px, 12px 102px #fff, 18px 102px,
      24px 102px, 30px 102px, 36px 102px, 42px 102px, 48px 102px, 54px 102px,
      60px 102px, 66px 102px, 72px 102px, 78px 102px, 84px 102px #fff,
      90px 102px, 6px 108px, 12px 108px #fff, 18px 108px, 24px 108px, 30px 108px,
      36px 108px, 42px 108px, 48px 108px, 54px 108px, 60px 108px, 66px 108px,
      72px 108px, 78px 108px, 84px 108px #fff, 90px 108px, 6px 114px,
      12px 114px #fff, 18px 114px, 24px 114px, 30px 114px, 36px 114px,
      42px 114px, 48px 114px, 54px 114px, 60px 114px, 66px 114px, 72px 114px,
      78px 114px, 84px 114px #fff, 90px 114px, 6px 120px, 12px 120px #fff,
      18px 120px, 24px 120px, 30px 120px, 36px 120px, 42px 120px, 48px 120px,
      54px 120px, 60px 120px, 66px 120px, 72px 120px, 78px 120px,
      84px 120px #fff, 90px 120px, 6px 126px, 12px 126px #fff, 18px 126px,
      24px 126px, 30px 126px, 36px 126px, 42px 126px, 48px 126px, 54px 126px,
      60px 126px, 66px 126px, 72px 126px, 78px 126px, 84px 126px #fff,
      90px 126px, 6px 132px, 12px 132px #fff, 18px 132px, 24px 132px, 30px 132px,
      36px 132px, 42px 132px, 48px 132px, 54px 132px, 60px 132px, 66px 132px,
      72px 132px, 78px 132px, 84px 132px #fff, 90px 132px, 6px 138px,
      12px 138px #fff, 18px 138px #fff, 24px 138px #fff, 30px 138px #fff,
      36px 138px #fff, 42px 138px #fff, 48px 138px #fff, 54px 138px #fff,
      60px 138px #fff, 66px 138px #fff, 72px 138px #fff, 78px 138px #fff,
      84px 138px #fff, 90px 138px, 6px 144px, 12px 144px #fff, 18px 144px #fff,
      24px 144px #fff, 30px 144px #fff, 36px 144px #fff, 42px 144px #fff,
      48px 144px, 54px 144px, 60px 144px #fff, 66px 144px #fff, 72px 144px #fff,
      78px 144px #fff, 84px 144px #fff, 90px 144px, 6px 150px, 12px 150px #fff,
      18px 150px #fff, 24px 150px #fff, 30px 150px #fff, 36px 150px #fff,
      42px 150px #fff, 48px 150px, 54px 150px, 60px 150px #fff, 66px 150px #fff,
      72px 150px #fff, 78px 150px #fff, 84px 150px #fff, 90px 150px, 6px 156px,
      12px 156px, 18px 156px #fff, 24px 156px #fff, 30px 156px #fff,
      36px 156px #fff, 42px 156px #fff, 48px 156px #fff, 54px 156px #fff,
      60px 156px #fff, 66px 156px #fff, 72px 156px #fff, 78px 156px #fff,
      84px 156px, 90px 156px, 12px 162px, 18px 162px, 24px 162px, 30px 162px,
      36px 162px, 42px 162px, 48px 162px, 54px 162px, 60px 162px, 66px 162px,
      72px 162px, 78px 162px, 84px 162px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-smartphone::before {
      box-shadow: 12px 6px 0 0.02em, 18px 6px 0 0.02em, 24px 6px 0 0.02em,
        30px 6px 0 0.02em, 36px 6px 0 0.02em, 42px 6px 0 0.02em,
        48px 6px 0 0.02em, 54px 6px 0 0.02em, 60px 6px 0 0.02em,
        66px 6px 0 0.02em, 72px 6px 0 0.02em, 78px 6px 0 0.02em,
        84px 6px 0 0.02em, 6px 12px 0 0.02em, 12px 12px 0 0.02em,
        18px 12px 0 0.02em #fff, 24px 12px 0 0.02em #fff,
        30px 12px 0 0.02em #fff, 36px 12px 0 0.02em #fff,
        42px 12px 0 0.02em #fff, 48px 12px 0 0.02em #fff,
        54px 12px 0 0.02em #fff, 60px 12px 0 0.02em #fff,
        66px 12px 0 0.02em #fff, 72px 12px 0 0.02em #fff,
        78px 12px 0 0.02em #fff, 84px 12px 0 0.02em, 90px 12px 0 0.02em,
        6px 18px 0 0.02em, 12px 18px 0 0.02em #fff, 18px 18px 0 0.02em #fff,
        24px 18px 0 0.02em #fff, 30px 18px 0 0.02em, 36px 18px 0 0.02em,
        42px 18px 0 0.02em, 48px 18px 0 0.02em, 54px 18px 0 0.02em,
        60px 18px 0 0.02em, 66px 18px 0 0.02em, 72px 18px 0 0.02em #fff,
        78px 18px 0 0.02em #fff, 84px 18px 0 0.02em #fff, 90px 18px 0 0.02em,
        6px 24px 0 0.02em, 12px 24px 0 0.02em #fff, 18px 24px 0 0.02em #fff,
        24px 24px 0 0.02em #fff, 30px 24px 0 0.02em #fff,
        36px 24px 0 0.02em #fff, 42px 24px 0 0.02em #fff,
        48px 24px 0 0.02em #fff, 54px 24px 0 0.02em #fff,
        60px 24px 0 0.02em #fff, 66px 24px 0 0.02em #fff,
        72px 24px 0 0.02em #fff, 78px 24px 0 0.02em #fff,
        84px 24px 0 0.02em #fff, 90px 24px 0 0.02em, 6px 30px 0 0.02em,
        12px 30px 0 0.02em #fff, 18px 30px 0 0.02em, 24px 30px 0 0.02em,
        30px 30px 0 0.02em, 36px 30px 0 0.02em, 42px 30px 0 0.02em,
        48px 30px 0 0.02em, 54px 30px 0 0.02em, 60px 30px 0 0.02em,
        66px 30px 0 0.02em, 72px 30px 0 0.02em, 78px 30px 0 0.02em,
        84px 30px 0 0.02em #fff, 90px 30px 0 0.02em, 6px 36px 0 0.02em,
        12px 36px 0 0.02em #fff, 18px 36px 0 0.02em, 24px 36px 0 0.02em,
        30px 36px 0 0.02em, 36px 36px 0 0.02em, 42px 36px 0 0.02em,
        48px 36px 0 0.02em, 54px 36px 0 0.02em, 60px 36px 0 0.02em,
        66px 36px 0 0.02em, 72px 36px 0 0.02em, 78px 36px 0 0.02em,
        84px 36px 0 0.02em #fff, 90px 36px 0 0.02em, 6px 42px 0 0.02em,
        12px 42px 0 0.02em #fff, 18px 42px 0 0.02em, 24px 42px 0 0.02em,
        30px 42px 0 0.02em, 36px 42px 0 0.02em, 42px 42px 0 0.02em,
        48px 42px 0 0.02em, 54px 42px 0 0.02em, 60px 42px 0 0.02em,
        66px 42px 0 0.02em, 72px 42px 0 0.02em, 78px 42px 0 0.02em,
        84px 42px 0 0.02em #fff, 90px 42px 0 0.02em, 6px 48px 0 0.02em,
        12px 48px 0 0.02em #fff, 18px 48px 0 0.02em, 24px 48px 0 0.02em,
        30px 48px 0 0.02em, 36px 48px 0 0.02em, 42px 48px 0 0.02em,
        48px 48px 0 0.02em, 54px 48px 0 0.02em, 60px 48px 0 0.02em,
        66px 48px 0 0.02em, 72px 48px 0 0.02em, 78px 48px 0 0.02em,
        84px 48px 0 0.02em #fff, 90px 48px 0 0.02em, 6px 54px 0 0.02em,
        12px 54px 0 0.02em #fff, 18px 54px 0 0.02em, 24px 54px 0 0.02em,
        30px 54px 0 0.02em, 36px 54px 0 0.02em, 42px 54px 0 0.02em,
        48px 54px 0 0.02em, 54px 54px 0 0.02em, 60px 54px 0 0.02em,
        66px 54px 0 0.02em, 72px 54px 0 0.02em, 78px 54px 0 0.02em,
        84px 54px 0 0.02em #fff, 90px 54px 0 0.02em, 6px 60px 0 0.02em,
        12px 60px 0 0.02em #fff, 18px 60px 0 0.02em, 24px 60px 0 0.02em,
        30px 60px 0 0.02em, 36px 60px 0 0.02em, 42px 60px 0 0.02em,
        48px 60px 0 0.02em, 54px 60px 0 0.02em, 60px 60px 0 0.02em,
        66px 60px 0 0.02em, 72px 60px 0 0.02em, 78px 60px 0 0.02em,
        84px 60px 0 0.02em #fff, 90px 60px 0 0.02em, 6px 66px 0 0.02em,
        12px 66px 0 0.02em #fff, 18px 66px 0 0.02em, 24px 66px 0 0.02em,
        30px 66px 0 0.02em, 36px 66px 0 0.02em, 42px 66px 0 0.02em,
        48px 66px 0 0.02em, 54px 66px 0 0.02em, 60px 66px 0 0.02em,
        66px 66px 0 0.02em, 72px 66px 0 0.02em, 78px 66px 0 0.02em,
        84px 66px 0 0.02em #fff, 90px 66px 0 0.02em, 6px 72px 0 0.02em,
        12px 72px 0 0.02em #fff, 18px 72px 0 0.02em, 24px 72px 0 0.02em,
        30px 72px 0 0.02em, 36px 72px 0 0.02em, 42px 72px 0 0.02em,
        48px 72px 0 0.02em, 54px 72px 0 0.02em, 60px 72px 0 0.02em,
        66px 72px 0 0.02em, 72px 72px 0 0.02em, 78px 72px 0 0.02em,
        84px 72px 0 0.02em #fff, 90px 72px 0 0.02em, 6px 78px 0 0.02em,
        12px 78px 0 0.02em #fff, 18px 78px 0 0.02em, 24px 78px 0 0.02em,
        30px 78px 0 0.02em, 36px 78px 0 0.02em, 42px 78px 0 0.02em,
        48px 78px 0 0.02em, 54px 78px 0 0.02em, 60px 78px 0 0.02em,
        66px 78px 0 0.02em, 72px 78px 0 0.02em, 78px 78px 0 0.02em,
        84px 78px 0 0.02em #fff, 90px 78px 0 0.02em, 6px 84px 0 0.02em,
        12px 84px 0 0.02em #fff, 18px 84px 0 0.02em, 24px 84px 0 0.02em,
        30px 84px 0 0.02em, 36px 84px 0 0.02em, 42px 84px 0 0.02em,
        48px 84px 0 0.02em, 54px 84px 0 0.02em, 60px 84px 0 0.02em,
        66px 84px 0 0.02em, 72px 84px 0 0.02em, 78px 84px 0 0.02em,
        84px 84px 0 0.02em #fff, 90px 84px 0 0.02em, 6px 90px 0 0.02em,
        12px 90px 0 0.02em #fff, 18px 90px 0 0.02em, 24px 90px 0 0.02em,
        30px 90px 0 0.02em, 36px 90px 0 0.02em, 42px 90px 0 0.02em,
        48px 90px 0 0.02em, 54px 90px 0 0.02em, 60px 90px 0 0.02em,
        66px 90px 0 0.02em, 72px 90px 0 0.02em, 78px 90px 0 0.02em,
        84px 90px 0 0.02em #fff, 90px 90px 0 0.02em, 6px 96px 0 0.02em,
        12px 96px 0 0.02em #fff, 18px 96px 0 0.02em, 24px 96px 0 0.02em,
        30px 96px 0 0.02em, 36px 96px 0 0.02em, 42px 96px 0 0.02em,
        48px 96px 0 0.02em, 54px 96px 0 0.02em, 60px 96px 0 0.02em,
        66px 96px 0 0.02em, 72px 96px 0 0.02em, 78px 96px 0 0.02em,
        84px 96px 0 0.02em #fff, 90px 96px 0 0.02em, 6px 102px 0 0.02em,
        12px 102px 0 0.02em #fff, 18px 102px 0 0.02em, 24px 102px 0 0.02em,
        30px 102px 0 0.02em, 36px 102px 0 0.02em, 42px 102px 0 0.02em,
        48px 102px 0 0.02em, 54px 102px 0 0.02em, 60px 102px 0 0.02em,
        66px 102px 0 0.02em, 72px 102px 0 0.02em, 78px 102px 0 0.02em,
        84px 102px 0 0.02em #fff, 90px 102px 0 0.02em, 6px 108px 0 0.02em,
        12px 108px 0 0.02em #fff, 18px 108px 0 0.02em, 24px 108px 0 0.02em,
        30px 108px 0 0.02em, 36px 108px 0 0.02em, 42px 108px 0 0.02em,
        48px 108px 0 0.02em, 54px 108px 0 0.02em, 60px 108px 0 0.02em,
        66px 108px 0 0.02em, 72px 108px 0 0.02em, 78px 108px 0 0.02em,
        84px 108px 0 0.02em #fff, 90px 108px 0 0.02em, 6px 114px 0 0.02em,
        12px 114px 0 0.02em #fff, 18px 114px 0 0.02em, 24px 114px 0 0.02em,
        30px 114px 0 0.02em, 36px 114px 0 0.02em, 42px 114px 0 0.02em,
        48px 114px 0 0.02em, 54px 114px 0 0.02em, 60px 114px 0 0.02em,
        66px 114px 0 0.02em, 72px 114px 0 0.02em, 78px 114px 0 0.02em,
        84px 114px 0 0.02em #fff, 90px 114px 0 0.02em, 6px 120px 0 0.02em,
        12px 120px 0 0.02em #fff, 18px 120px 0 0.02em, 24px 120px 0 0.02em,
        30px 120px 0 0.02em, 36px 120px 0 0.02em, 42px 120px 0 0.02em,
        48px 120px 0 0.02em, 54px 120px 0 0.02em, 60px 120px 0 0.02em,
        66px 120px 0 0.02em, 72px 120px 0 0.02em, 78px 120px 0 0.02em,
        84px 120px 0 0.02em #fff, 90px 120px 0 0.02em, 6px 126px 0 0.02em,
        12px 126px 0 0.02em #fff, 18px 126px 0 0.02em, 24px 126px 0 0.02em,
        30px 126px 0 0.02em, 36px 126px 0 0.02em, 42px 126px 0 0.02em,
        48px 126px 0 0.02em, 54px 126px 0 0.02em, 60px 126px 0 0.02em,
        66px 126px 0 0.02em, 72px 126px 0 0.02em, 78px 126px 0 0.02em,
        84px 126px 0 0.02em #fff, 90px 126px 0 0.02em, 6px 132px 0 0.02em,
        12px 132px 0 0.02em #fff, 18px 132px 0 0.02em, 24px 132px 0 0.02em,
        30px 132px 0 0.02em, 36px 132px 0 0.02em, 42px 132px 0 0.02em,
        48px 132px 0 0.02em, 54px 132px 0 0.02em, 60px 132px 0 0.02em,
        66px 132px 0 0.02em, 72px 132px 0 0.02em, 78px 132px 0 0.02em,
        84px 132px 0 0.02em #fff, 90px 132px 0 0.02em, 6px 138px 0 0.02em,
        12px 138px 0 0.02em #fff, 18px 138px 0 0.02em #fff,
        24px 138px 0 0.02em #fff, 30px 138px 0 0.02em #fff,
        36px 138px 0 0.02em #fff, 42px 138px 0 0.02em #fff,
        48px 138px 0 0.02em #fff, 54px 138px 0 0.02em #fff,
        60px 138px 0 0.02em #fff, 66px 138px 0 0.02em #fff,
        72px 138px 0 0.02em #fff, 78px 138px 0 0.02em #fff,
        84px 138px 0 0.02em #fff, 90px 138px 0 0.02em, 6px 144px 0 0.02em,
        12px 144px 0 0.02em #fff, 18px 144px 0 0.02em #fff,
        24px 144px 0 0.02em #fff, 30px 144px 0 0.02em #fff,
        36px 144px 0 0.02em #fff, 42px 144px 0 0.02em #fff, 48px 144px 0 0.02em,
        54px 144px 0 0.02em, 60px 144px 0 0.02em #fff, 66px 144px 0 0.02em #fff,
        72px 144px 0 0.02em #fff, 78px 144px 0 0.02em #fff,
        84px 144px 0 0.02em #fff, 90px 144px 0 0.02em, 6px 150px 0 0.02em,
        12px 150px 0 0.02em #fff, 18px 150px 0 0.02em #fff,
        24px 150px 0 0.02em #fff, 30px 150px 0 0.02em #fff,
        36px 150px 0 0.02em #fff, 42px 150px 0 0.02em #fff, 48px 150px 0 0.02em,
        54px 150px 0 0.02em, 60px 150px 0 0.02em #fff, 66px 150px 0 0.02em #fff,
        72px 150px 0 0.02em #fff, 78px 150px 0 0.02em #fff,
        84px 150px 0 0.02em #fff, 90px 150px 0 0.02em, 6px 156px 0 0.02em,
        12px 156px 0 0.02em, 18px 156px 0 0.02em #fff, 24px 156px 0 0.02em #fff,
        30px 156px 0 0.02em #fff, 36px 156px 0 0.02em #fff,
        42px 156px 0 0.02em #fff, 48px 156px 0 0.02em #fff,
        54px 156px 0 0.02em #fff, 60px 156px 0 0.02em #fff,
        66px 156px 0 0.02em #fff, 72px 156px 0 0.02em #fff,
        78px 156px 0 0.02em #fff, 84px 156px 0 0.02em, 90px 156px 0 0.02em,
        12px 162px 0 0.02em, 18px 162px 0 0.02em, 24px 162px 0 0.02em,
        30px 162px 0 0.02em, 36px 162px 0 0.02em, 42px 162px 0 0.02em,
        48px 162px 0 0.02em, 54px 162px 0 0.02em, 60px 162px 0 0.02em,
        66px 162px 0 0.02em, 72px 162px 0 0.02em, 78px 162px 0 0.02em,
        84px 162px 0 0.02em;
    }
  }

  .nes-mario {
    position: relative;
    display: inline-block;
    width: 84px;
    height: 96px;
  }

  .nes-mario::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #f81c2f;
    box-shadow: 30px 6px, 36px 6px, 42px 6px, 48px 6px, 54px 6px, 24px 12px,
      30px 12px, 36px 12px, 42px 12px, 48px 12px, 54px 12px, 60px 12px,
      66px 12px, 72px 12px, 24px 18px #65352b, 30px 18px #65352b,
      36px 18px #65352b, 42px 18px #ffbb8e, 48px 18px #ffbb8e, 54px 18px #000,
      60px 18px #ffbb8e, 18px 24px #65352b, 24px 24px #ffbb8e, 30px 24px #65352b,
      36px 24px #ffbb8e, 42px 24px #ffbb8e, 48px 24px #ffbb8e, 54px 24px #000,
      60px 24px #ffbb8e, 66px 24px #ffbb8e, 72px 24px #ffbb8e, 18px 30px #65352b,
      24px 30px #ffbb8e, 30px 30px #65352b, 36px 30px #65352b, 42px 30px #ffbb8e,
      48px 30px #ffbb8e, 54px 30px #ffbb8e, 60px 30px #000, 66px 30px #ffbb8e,
      72px 30px #ffbb8e, 78px 30px #ffbb8e, 18px 36px #65352b, 24px 36px #65352b,
      30px 36px #ffbb8e, 36px 36px #ffbb8e, 42px 36px #ffbb8e, 48px 36px #ffbb8e,
      54px 36px #000, 60px 36px #000, 66px 36px #000, 72px 36px #000,
      30px 42px #ffbb8e, 36px 42px #ffbb8e, 42px 42px #ffbb8e, 48px 42px #ffbb8e,
      54px 42px #ffbb8e, 60px 42px #ffbb8e, 66px 42px #ffbb8e, 30px 48px,
      36px 48px #1560ad, 42px 48px, 48px 48px, 54px 48px #1560ad, 18px 54px,
      24px 54px, 30px 54px, 36px 54px #1560ad, 42px 54px, 48px 54px,
      54px 54px #1560ad, 60px 54px, 66px 54px, 72px 54px, 12px 60px, 18px 60px,
      24px 60px, 30px 60px, 36px 60px #1560ad, 42px 60px #1560ad,
      48px 60px #1560ad, 54px 60px #1560ad, 60px 60px, 66px 60px, 72px 60px,
      78px 60px, 12px 66px #aeaeac, 18px 66px #aeaeac, 24px 66px,
      30px 66px #1560ad, 36px 66px #fef102, 42px 66px #1560ad, 48px 66px #1560ad,
      54px 66px #fef102, 60px 66px #1560ad, 66px 66px, 72px 66px #aeaeac,
      78px 66px #aeaeac, 12px 72px #aeaeac, 18px 72px #aeaeac, 24px 72px #aeaeac,
      30px 72px #1560ad, 36px 72px #1560ad, 42px 72px #1560ad, 48px 72px #1560ad,
      54px 72px #1560ad, 60px 72px #1560ad, 66px 72px #aeaeac, 72px 72px #aeaeac,
      78px 72px #aeaeac, 12px 78px #aeaeac, 18px 78px #aeaeac, 24px 78px #1560ad,
      30px 78px #1560ad, 36px 78px #1560ad, 42px 78px #1560ad, 48px 78px #1560ad,
      54px 78px #1560ad, 60px 78px #1560ad, 66px 78px #1560ad, 72px 78px #aeaeac,
      78px 78px #aeaeac, 24px 84px #1560ad, 30px 84px #1560ad, 36px 84px #1560ad,
      54px 84px #1560ad, 60px 84px #1560ad, 66px 84px #1560ad, 18px 90px #65352b,
      24px 90px #65352b, 30px 90px #65352b, 60px 90px #65352b, 66px 90px #65352b,
      72px 90px #65352b, 12px 96px #65352b, 18px 96px #65352b, 24px 96px #65352b,
      30px 96px #65352b, 60px 96px #65352b, 66px 96px #65352b, 72px 96px #65352b,
      78px 96px #65352b;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-mario::before {
      box-shadow: 30px 6px 0 0.02em, 36px 6px 0 0.02em, 42px 6px 0 0.02em,
        48px 6px 0 0.02em, 54px 6px 0 0.02em, 24px 12px 0 0.02em,
        30px 12px 0 0.02em, 36px 12px 0 0.02em, 42px 12px 0 0.02em,
        48px 12px 0 0.02em, 54px 12px 0 0.02em, 60px 12px 0 0.02em,
        66px 12px 0 0.02em, 72px 12px 0 0.02em, 24px 18px 0 0.02em #65352b,
        30px 18px 0 0.02em #65352b, 36px 18px 0 0.02em #65352b,
        42px 18px 0 0.02em #ffbb8e, 48px 18px 0 0.02em #ffbb8e,
        54px 18px 0 0.02em #000, 60px 18px 0 0.02em #ffbb8e,
        18px 24px 0 0.02em #65352b, 24px 24px 0 0.02em #ffbb8e,
        30px 24px 0 0.02em #65352b, 36px 24px 0 0.02em #ffbb8e,
        42px 24px 0 0.02em #ffbb8e, 48px 24px 0 0.02em #ffbb8e,
        54px 24px 0 0.02em #000, 60px 24px 0 0.02em #ffbb8e,
        66px 24px 0 0.02em #ffbb8e, 72px 24px 0 0.02em #ffbb8e,
        18px 30px 0 0.02em #65352b, 24px 30px 0 0.02em #ffbb8e,
        30px 30px 0 0.02em #65352b, 36px 30px 0 0.02em #65352b,
        42px 30px 0 0.02em #ffbb8e, 48px 30px 0 0.02em #ffbb8e,
        54px 30px 0 0.02em #ffbb8e, 60px 30px 0 0.02em #000,
        66px 30px 0 0.02em #ffbb8e, 72px 30px 0 0.02em #ffbb8e,
        78px 30px 0 0.02em #ffbb8e, 18px 36px 0 0.02em #65352b,
        24px 36px 0 0.02em #65352b, 30px 36px 0 0.02em #ffbb8e,
        36px 36px 0 0.02em #ffbb8e, 42px 36px 0 0.02em #ffbb8e,
        48px 36px 0 0.02em #ffbb8e, 54px 36px 0 0.02em #000,
        60px 36px 0 0.02em #000, 66px 36px 0 0.02em #000,
        72px 36px 0 0.02em #000, 30px 42px 0 0.02em #ffbb8e,
        36px 42px 0 0.02em #ffbb8e, 42px 42px 0 0.02em #ffbb8e,
        48px 42px 0 0.02em #ffbb8e, 54px 42px 0 0.02em #ffbb8e,
        60px 42px 0 0.02em #ffbb8e, 66px 42px 0 0.02em #ffbb8e,
        30px 48px 0 0.02em, 36px 48px 0 0.02em #1560ad, 42px 48px 0 0.02em,
        48px 48px 0 0.02em, 54px 48px 0 0.02em #1560ad, 18px 54px 0 0.02em,
        24px 54px 0 0.02em, 30px 54px 0 0.02em, 36px 54px 0 0.02em #1560ad,
        42px 54px 0 0.02em, 48px 54px 0 0.02em, 54px 54px 0 0.02em #1560ad,
        60px 54px 0 0.02em, 66px 54px 0 0.02em, 72px 54px 0 0.02em,
        12px 60px 0 0.02em, 18px 60px 0 0.02em, 24px 60px 0 0.02em,
        30px 60px 0 0.02em, 36px 60px 0 0.02em #1560ad,
        42px 60px 0 0.02em #1560ad, 48px 60px 0 0.02em #1560ad,
        54px 60px 0 0.02em #1560ad, 60px 60px 0 0.02em, 66px 60px 0 0.02em,
        72px 60px 0 0.02em, 78px 60px 0 0.02em, 12px 66px 0 0.02em #aeaeac,
        18px 66px 0 0.02em #aeaeac, 24px 66px 0 0.02em,
        30px 66px 0 0.02em #1560ad, 36px 66px 0 0.02em #fef102,
        42px 66px 0 0.02em #1560ad, 48px 66px 0 0.02em #1560ad,
        54px 66px 0 0.02em #fef102, 60px 66px 0 0.02em #1560ad,
        66px 66px 0 0.02em, 72px 66px 0 0.02em #aeaeac,
        78px 66px 0 0.02em #aeaeac, 12px 72px 0 0.02em #aeaeac,
        18px 72px 0 0.02em #aeaeac, 24px 72px 0 0.02em #aeaeac,
        30px 72px 0 0.02em #1560ad, 36px 72px 0 0.02em #1560ad,
        42px 72px 0 0.02em #1560ad, 48px 72px 0 0.02em #1560ad,
        54px 72px 0 0.02em #1560ad, 60px 72px 0 0.02em #1560ad,
        66px 72px 0 0.02em #aeaeac, 72px 72px 0 0.02em #aeaeac,
        78px 72px 0 0.02em #aeaeac, 12px 78px 0 0.02em #aeaeac,
        18px 78px 0 0.02em #aeaeac, 24px 78px 0 0.02em #1560ad,
        30px 78px 0 0.02em #1560ad, 36px 78px 0 0.02em #1560ad,
        42px 78px 0 0.02em #1560ad, 48px 78px 0 0.02em #1560ad,
        54px 78px 0 0.02em #1560ad, 60px 78px 0 0.02em #1560ad,
        66px 78px 0 0.02em #1560ad, 72px 78px 0 0.02em #aeaeac,
        78px 78px 0 0.02em #aeaeac, 24px 84px 0 0.02em #1560ad,
        30px 84px 0 0.02em #1560ad, 36px 84px 0 0.02em #1560ad,
        54px 84px 0 0.02em #1560ad, 60px 84px 0 0.02em #1560ad,
        66px 84px 0 0.02em #1560ad, 18px 90px 0 0.02em #65352b,
        24px 90px 0 0.02em #65352b, 30px 90px 0 0.02em #65352b,
        60px 90px 0 0.02em #65352b, 66px 90px 0 0.02em #65352b,
        72px 90px 0 0.02em #65352b, 12px 96px 0 0.02em #65352b,
        18px 96px 0 0.02em #65352b, 24px 96px 0 0.02em #65352b,
        30px 96px 0 0.02em #65352b, 60px 96px 0 0.02em #65352b,
        66px 96px 0 0.02em #65352b, 72px 96px 0 0.02em #65352b,
        78px 96px 0 0.02em #65352b;
    }
  }

  .nes-kirby {
    position: relative;
    display: inline-block;
    width: 96px;
    height: 96px;
  }

  .nes-kirby::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #ffaccc;
    box-shadow: 18px 6px #000, 24px 6px #000, 36px 6px #000, 42px 6px #000,
      48px 6px #000, 54px 6px #000, 60px 6px #000, 12px 12px #000, 18px 12px,
      24px 12px, 30px 12px #000, 36px 12px, 42px 12px, 48px 12px, 54px 12px,
      60px 12px, 66px 12px #000, 72px 12px #000, 6px 18px #000, 12px 18px,
      18px 18px, 24px 18px #000, 30px 18px, 36px 18px, 42px 18px, 48px 18px,
      54px 18px, 60px 18px, 66px 18px, 72px 18px, 78px 18px #000, 6px 24px #000,
      12px 24px, 18px 24px, 24px 24px, 30px 24px, 36px 24px, 42px 24px #000,
      48px 24px, 54px 24px #000, 60px 24px, 66px 24px, 72px 24px, 78px 24px,
      84px 24px #000, 6px 30px #000, 12px 30px, 18px 30px, 24px 30px, 30px 30px,
      36px 30px, 42px 30px #000, 48px 30px, 54px 30px #000, 60px 30px, 66px 30px,
      72px 30px, 78px 30px, 84px 30px #000, 6px 36px #000, 12px 36px, 18px 36px,
      24px 36px, 30px 36px, 36px 36px, 42px 36px #000, 48px 36px, 54px 36px #000,
      60px 36px, 66px 36px, 72px 36px, 78px 36px, 84px 36px, 90px 36px #000,
      6px 42px #000, 12px 42px, 18px 42px, 24px 42px, 30px 42px #ff5478,
      36px 42px #ff5478, 42px 42px, 48px 42px, 54px 42px, 60px 42px #ff5478,
      66px 42px #ff5478, 72px 42px, 78px 42px, 84px 42px, 90px 42px,
      96px 42px #000, 6px 48px #000, 12px 48px, 18px 48px, 24px 48px, 30px 48px,
      36px 48px, 42px 48px, 48px 48px #000, 54px 48px, 60px 48px, 66px 48px,
      72px 48px, 78px 48px, 84px 48px, 90px 48px, 96px 48px #000, 12px 54px #000,
      18px 54px, 24px 54px, 30px 54px, 36px 54px, 42px 54px, 48px 54px #000,
      54px 54px, 60px 54px, 66px 54px, 72px 54px, 78px 54px, 84px 54px,
      90px 54px, 96px 54px #000, 12px 60px #000, 18px 60px, 24px 60px, 30px 60px,
      36px 60px, 42px 60px, 48px 60px, 54px 60px, 60px 60px, 66px 60px,
      72px 60px, 78px 60px #000, 84px 60px #000, 90px 60px #000, 12px 66px #000,
      18px 66px, 24px 66px, 30px 66px, 36px 66px, 42px 66px, 48px 66px,
      54px 66px, 60px 66px, 66px 66px, 72px 66px #000, 78px 66px #ff5478,
      84px 66px #ff5478, 90px 66px #ff5478, 96px 66px #000, 18px 72px #000,
      24px 72px, 30px 72px, 36px 72px, 42px 72px, 48px 72px, 54px 72px,
      60px 72px, 66px 72px #000, 72px 72px #ff5478, 78px 72px #ff5478,
      84px 72px #ff5478, 90px 72px #ff5478, 96px 72px #000, 18px 78px #000,
      24px 78px #000, 30px 78px, 36px 78px, 42px 78px, 48px 78px, 54px 78px,
      60px 78px, 66px 78px #000, 72px 78px #ff5478, 78px 78px #ff5478,
      84px 78px #ff5478, 90px 78px #ff5478, 96px 78px #000, 12px 84px #000,
      18px 84px #ff5478, 24px 84px #ff5478, 30px 84px #000, 36px 84px #000,
      42px 84px, 48px 84px, 54px 84px, 60px 84px #000, 66px 84px #ff5478,
      72px 84px #ff5478, 78px 84px #ff5478, 84px 84px #ff5478, 90px 84px #000,
      6px 90px #000, 12px 90px #ff5478, 18px 90px #ff5478, 24px 90px #ff5478,
      30px 90px #ff5478, 36px 90px #ff5478, 42px 90px #000, 48px 90px #000,
      54px 90px #000, 60px 90px #000, 66px 90px #000, 72px 90px #ff5478,
      78px 90px #ff5478, 84px 90px #000, 12px 96px #000, 18px 96px #000,
      24px 96px #000, 30px 96px #000, 36px 96px #000, 42px 96px #000,
      66px 96px #000, 72px 96px #000, 78px 96px #000;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-kirby::before {
      box-shadow: 18px 6px 0 0.02em #000, 24px 6px 0 0.02em #000,
        36px 6px 0 0.02em #000, 42px 6px 0 0.02em #000, 48px 6px 0 0.02em #000,
        54px 6px 0 0.02em #000, 60px 6px 0 0.02em #000, 12px 12px 0 0.02em #000,
        18px 12px 0 0.02em, 24px 12px 0 0.02em, 30px 12px 0 0.02em #000,
        36px 12px 0 0.02em, 42px 12px 0 0.02em, 48px 12px 0 0.02em,
        54px 12px 0 0.02em, 60px 12px 0 0.02em, 66px 12px 0 0.02em #000,
        72px 12px 0 0.02em #000, 6px 18px 0 0.02em #000, 12px 18px 0 0.02em,
        18px 18px 0 0.02em, 24px 18px 0 0.02em #000, 30px 18px 0 0.02em,
        36px 18px 0 0.02em, 42px 18px 0 0.02em, 48px 18px 0 0.02em,
        54px 18px 0 0.02em, 60px 18px 0 0.02em, 66px 18px 0 0.02em,
        72px 18px 0 0.02em, 78px 18px 0 0.02em #000, 6px 24px 0 0.02em #000,
        12px 24px 0 0.02em, 18px 24px 0 0.02em, 24px 24px 0 0.02em,
        30px 24px 0 0.02em, 36px 24px 0 0.02em, 42px 24px 0 0.02em #000,
        48px 24px 0 0.02em, 54px 24px 0 0.02em #000, 60px 24px 0 0.02em,
        66px 24px 0 0.02em, 72px 24px 0 0.02em, 78px 24px 0 0.02em,
        84px 24px 0 0.02em #000, 6px 30px 0 0.02em #000, 12px 30px 0 0.02em,
        18px 30px 0 0.02em, 24px 30px 0 0.02em, 30px 30px 0 0.02em,
        36px 30px 0 0.02em, 42px 30px 0 0.02em #000, 48px 30px 0 0.02em,
        54px 30px 0 0.02em #000, 60px 30px 0 0.02em, 66px 30px 0 0.02em,
        72px 30px 0 0.02em, 78px 30px 0 0.02em, 84px 30px 0 0.02em #000,
        6px 36px 0 0.02em #000, 12px 36px 0 0.02em, 18px 36px 0 0.02em,
        24px 36px 0 0.02em, 30px 36px 0 0.02em, 36px 36px 0 0.02em,
        42px 36px 0 0.02em #000, 48px 36px 0 0.02em, 54px 36px 0 0.02em #000,
        60px 36px 0 0.02em, 66px 36px 0 0.02em, 72px 36px 0 0.02em,
        78px 36px 0 0.02em, 84px 36px 0 0.02em, 90px 36px 0 0.02em #000,
        6px 42px 0 0.02em #000, 12px 42px 0 0.02em, 18px 42px 0 0.02em,
        24px 42px 0 0.02em, 30px 42px 0 0.02em #ff5478,
        36px 42px 0 0.02em #ff5478, 42px 42px 0 0.02em, 48px 42px 0 0.02em,
        54px 42px 0 0.02em, 60px 42px 0 0.02em #ff5478,
        66px 42px 0 0.02em #ff5478, 72px 42px 0 0.02em, 78px 42px 0 0.02em,
        84px 42px 0 0.02em, 90px 42px 0 0.02em, 96px 42px 0 0.02em #000,
        6px 48px 0 0.02em #000, 12px 48px 0 0.02em, 18px 48px 0 0.02em,
        24px 48px 0 0.02em, 30px 48px 0 0.02em, 36px 48px 0 0.02em,
        42px 48px 0 0.02em, 48px 48px 0 0.02em #000, 54px 48px 0 0.02em,
        60px 48px 0 0.02em, 66px 48px 0 0.02em, 72px 48px 0 0.02em,
        78px 48px 0 0.02em, 84px 48px 0 0.02em, 90px 48px 0 0.02em,
        96px 48px 0 0.02em #000, 12px 54px 0 0.02em #000, 18px 54px 0 0.02em,
        24px 54px 0 0.02em, 30px 54px 0 0.02em, 36px 54px 0 0.02em,
        42px 54px 0 0.02em, 48px 54px 0 0.02em #000, 54px 54px 0 0.02em,
        60px 54px 0 0.02em, 66px 54px 0 0.02em, 72px 54px 0 0.02em,
        78px 54px 0 0.02em, 84px 54px 0 0.02em, 90px 54px 0 0.02em,
        96px 54px 0 0.02em #000, 12px 60px 0 0.02em #000, 18px 60px 0 0.02em,
        24px 60px 0 0.02em, 30px 60px 0 0.02em, 36px 60px 0 0.02em,
        42px 60px 0 0.02em, 48px 60px 0 0.02em, 54px 60px 0 0.02em,
        60px 60px 0 0.02em, 66px 60px 0 0.02em, 72px 60px 0 0.02em,
        78px 60px 0 0.02em #000, 84px 60px 0 0.02em #000,
        90px 60px 0 0.02em #000, 12px 66px 0 0.02em #000, 18px 66px 0 0.02em,
        24px 66px 0 0.02em, 30px 66px 0 0.02em, 36px 66px 0 0.02em,
        42px 66px 0 0.02em, 48px 66px 0 0.02em, 54px 66px 0 0.02em,
        60px 66px 0 0.02em, 66px 66px 0 0.02em, 72px 66px 0 0.02em #000,
        78px 66px 0 0.02em #ff5478, 84px 66px 0 0.02em #ff5478,
        90px 66px 0 0.02em #ff5478, 96px 66px 0 0.02em #000,
        18px 72px 0 0.02em #000, 24px 72px 0 0.02em, 30px 72px 0 0.02em,
        36px 72px 0 0.02em, 42px 72px 0 0.02em, 48px 72px 0 0.02em,
        54px 72px 0 0.02em, 60px 72px 0 0.02em, 66px 72px 0 0.02em #000,
        72px 72px 0 0.02em #ff5478, 78px 72px 0 0.02em #ff5478,
        84px 72px 0 0.02em #ff5478, 90px 72px 0 0.02em #ff5478,
        96px 72px 0 0.02em #000, 18px 78px 0 0.02em #000,
        24px 78px 0 0.02em #000, 30px 78px 0 0.02em, 36px 78px 0 0.02em,
        42px 78px 0 0.02em, 48px 78px 0 0.02em, 54px 78px 0 0.02em,
        60px 78px 0 0.02em, 66px 78px 0 0.02em #000, 72px 78px 0 0.02em #ff5478,
        78px 78px 0 0.02em #ff5478, 84px 78px 0 0.02em #ff5478,
        90px 78px 0 0.02em #ff5478, 96px 78px 0 0.02em #000,
        12px 84px 0 0.02em #000, 18px 84px 0 0.02em #ff5478,
        24px 84px 0 0.02em #ff5478, 30px 84px 0 0.02em #000,
        36px 84px 0 0.02em #000, 42px 84px 0 0.02em, 48px 84px 0 0.02em,
        54px 84px 0 0.02em, 60px 84px 0 0.02em #000, 66px 84px 0 0.02em #ff5478,
        72px 84px 0 0.02em #ff5478, 78px 84px 0 0.02em #ff5478,
        84px 84px 0 0.02em #ff5478, 90px 84px 0 0.02em #000,
        6px 90px 0 0.02em #000, 12px 90px 0 0.02em #ff5478,
        18px 90px 0 0.02em #ff5478, 24px 90px 0 0.02em #ff5478,
        30px 90px 0 0.02em #ff5478, 36px 90px 0 0.02em #ff5478,
        42px 90px 0 0.02em #000, 48px 90px 0 0.02em #000,
        54px 90px 0 0.02em #000, 60px 90px 0 0.02em #000,
        66px 90px 0 0.02em #000, 72px 90px 0 0.02em #ff5478,
        78px 90px 0 0.02em #ff5478, 84px 90px 0 0.02em #000,
        12px 96px 0 0.02em #000, 18px 96px 0 0.02em #000,
        24px 96px 0 0.02em #000, 30px 96px 0 0.02em #000,
        36px 96px 0 0.02em #000, 42px 96px 0 0.02em #000,
        66px 96px 0 0.02em #000, 72px 96px 0 0.02em #000,
        78px 96px 0 0.02em #000;
    }
  }

  .nes-octocat {
    position: relative;
    display: inline-block;
    width: 84px;
    height: 90px;
  }

  .nes-octocat::before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: '';
    background: transparent;
    width: 6px;
    height: 6px;
    color: #333;
    box-shadow: 24px 6px, 78px 6px, 24px 12px, 30px 12px, 72px 12px, 78px 12px,
      24px 18px, 30px 18px, 36px 18px, 42px 18px, 48px 18px, 54px 18px,
      60px 18px, 66px 18px, 72px 18px, 78px 18px, 18px 24px, 24px 24px,
      30px 24px, 36px 24px, 42px 24px, 48px 24px, 54px 24px, 60px 24px,
      66px 24px, 72px 24px, 78px 24px, 84px 24px, 18px 30px, 24px 30px,
      30px 30px, 36px 30px, 42px 30px, 48px 30px, 54px 30px, 60px 30px,
      66px 30px, 72px 30px, 78px 30px, 84px 30px, 18px 36px, 24px 36px,
      30px 36px, 36px 36px #ffdec4, 42px 36px #ffdec4, 48px 36px #ffdec4,
      54px 36px #ffdec4, 60px 36px #ffdec4, 66px 36px #ffdec4, 72px 36px,
      78px 36px, 84px 36px, 18px 42px, 24px 42px, 30px 42px #ffdec4,
      36px 42px #cb7066, 42px 42px #ffdec4, 48px 42px #ffdec4, 54px 42px #ffdec4,
      60px 42px #ffdec4, 66px 42px #cb7066, 72px 42px #ffdec4, 78px 42px,
      84px 42px, 18px 48px, 24px 48px, 30px 48px #ffdec4, 36px 48px #cb7066,
      42px 48px #ffdec4, 48px 48px #ffdec4, 54px 48px #ffdec4, 60px 48px #ffdec4,
      66px 48px #cb7066, 72px 48px #ffdec4, 78px 48px, 84px 48px, 24px 54px,
      30px 54px, 36px 54px #ffdec4, 42px 54px #ffdec4, 48px 54px #cb7066,
      54px 54px #cb7066, 60px 54px #ffdec4, 66px 54px #ffdec4, 72px 54px,
      78px 54px, 6px 60px, 12px 60px, 42px 60px, 48px 60px, 54px 60px, 60px 60px,
      18px 66px, 24px 66px, 36px 66px, 42px 66px, 48px 66px, 54px 66px,
      60px 66px, 66px 66px, 24px 72px, 30px 72px, 36px 72px, 42px 72px,
      48px 72px, 54px 72px, 60px 72px, 66px 72px, 36px 78px, 48px 78px,
      54px 78px, 66px 78px, 36px 84px, 48px 84px, 54px 84px, 66px 84px,
      30px 90px, 42px 90px, 60px 90px, 72px 90px;
    transform: rotate(0);
  }

  @supports (-moz-appearance: meterbar) {
    .nes-octocat::before {
      box-shadow: 24px 6px 0 0.02em, 78px 6px 0 0.02em, 24px 12px 0 0.02em,
        30px 12px 0 0.02em, 72px 12px 0 0.02em, 78px 12px 0 0.02em,
        24px 18px 0 0.02em, 30px 18px 0 0.02em, 36px 18px 0 0.02em,
        42px 18px 0 0.02em, 48px 18px 0 0.02em, 54px 18px 0 0.02em,
        60px 18px 0 0.02em, 66px 18px 0 0.02em, 72px 18px 0 0.02em,
        78px 18px 0 0.02em, 18px 24px 0 0.02em, 24px 24px 0 0.02em,
        30px 24px 0 0.02em, 36px 24px 0 0.02em, 42px 24px 0 0.02em,
        48px 24px 0 0.02em, 54px 24px 0 0.02em, 60px 24px 0 0.02em,
        66px 24px 0 0.02em, 72px 24px 0 0.02em, 78px 24px 0 0.02em,
        84px 24px 0 0.02em, 18px 30px 0 0.02em, 24px 30px 0 0.02em,
        30px 30px 0 0.02em, 36px 30px 0 0.02em, 42px 30px 0 0.02em,
        48px 30px 0 0.02em, 54px 30px 0 0.02em, 60px 30px 0 0.02em,
        66px 30px 0 0.02em, 72px 30px 0 0.02em, 78px 30px 0 0.02em,
        84px 30px 0 0.02em, 18px 36px 0 0.02em, 24px 36px 0 0.02em,
        30px 36px 0 0.02em, 36px 36px 0 0.02em #ffdec4,
        42px 36px 0 0.02em #ffdec4, 48px 36px 0 0.02em #ffdec4,
        54px 36px 0 0.02em #ffdec4, 60px 36px 0 0.02em #ffdec4,
        66px 36px 0 0.02em #ffdec4, 72px 36px 0 0.02em, 78px 36px 0 0.02em,
        84px 36px 0 0.02em, 18px 42px 0 0.02em, 24px 42px 0 0.02em,
        30px 42px 0 0.02em #ffdec4, 36px 42px 0 0.02em #cb7066,
        42px 42px 0 0.02em #ffdec4, 48px 42px 0 0.02em #ffdec4,
        54px 42px 0 0.02em #ffdec4, 60px 42px 0 0.02em #ffdec4,
        66px 42px 0 0.02em #cb7066, 72px 42px 0 0.02em #ffdec4,
        78px 42px 0 0.02em, 84px 42px 0 0.02em, 18px 48px 0 0.02em,
        24px 48px 0 0.02em, 30px 48px 0 0.02em #ffdec4,
        36px 48px 0 0.02em #cb7066, 42px 48px 0 0.02em #ffdec4,
        48px 48px 0 0.02em #ffdec4, 54px 48px 0 0.02em #ffdec4,
        60px 48px 0 0.02em #ffdec4, 66px 48px 0 0.02em #cb7066,
        72px 48px 0 0.02em #ffdec4, 78px 48px 0 0.02em, 84px 48px 0 0.02em,
        24px 54px 0 0.02em, 30px 54px 0 0.02em, 36px 54px 0 0.02em #ffdec4,
        42px 54px 0 0.02em #ffdec4, 48px 54px 0 0.02em #cb7066,
        54px 54px 0 0.02em #cb7066, 60px 54px 0 0.02em #ffdec4,
        66px 54px 0 0.02em #ffdec4, 72px 54px 0 0.02em, 78px 54px 0 0.02em,
        6px 60px 0 0.02em, 12px 60px 0 0.02em, 42px 60px 0 0.02em,
        48px 60px 0 0.02em, 54px 60px 0 0.02em, 60px 60px 0 0.02em,
        18px 66px 0 0.02em, 24px 66px 0 0.02em, 36px 66px 0 0.02em,
        42px 66px 0 0.02em, 48px 66px 0 0.02em, 54px 66px 0 0.02em,
        60px 66px 0 0.02em, 66px 66px 0 0.02em, 24px 72px 0 0.02em,
        30px 72px 0 0.02em, 36px 72px 0 0.02em, 42px 72px 0 0.02em,
        48px 72px 0 0.02em, 54px 72px 0 0.02em, 60px 72px 0 0.02em,
        66px 72px 0 0.02em, 36px 78px 0 0.02em, 48px 78px 0 0.02em,
        54px 78px 0 0.02em, 66px 78px 0 0.02em, 36px 84px 0 0.02em,
        48px 84px 0 0.02em, 54px 84px 0 0.02em, 66px 84px 0 0.02em,
        30px 90px 0 0.02em, 42px 90px 0 0.02em, 60px 90px 0 0.02em,
        72px 90px 0 0.02em;
    }
  }

  .nes-octocat.animate::before {
    animation: wave 0.5s infinite steps(1);
  }

  @keyframes wave {
    50% {
      width: 6px;
      height: 6px;
      color: #333;
      box-shadow: 24px 6px, 78px 6px, 24px 12px, 30px 12px, 72px 12px, 78px 12px,
        24px 18px, 30px 18px, 36px 18px, 42px 18px, 48px 18px, 54px 18px,
        60px 18px, 66px 18px, 72px 18px, 78px 18px, 18px 24px, 24px 24px,
        30px 24px, 36px 24px, 42px 24px, 48px 24px, 54px 24px, 60px 24px,
        66px 24px, 72px 24px, 78px 24px, 84px 24px, 18px 30px, 24px 30px,
        30px 30px, 36px 30px, 42px 30px, 48px 30px, 54px 30px, 60px 30px,
        66px 30px, 72px 30px, 78px 30px, 84px 30px, 18px 36px, 24px 36px,
        30px 36px, 36px 36px #ffdec4, 42px 36px #ffdec4, 48px 36px #ffdec4,
        54px 36px #ffdec4, 60px 36px #ffdec4, 66px 36px #ffdec4, 72px 36px,
        78px 36px, 84px 36px, 18px 42px, 24px 42px, 30px 42px #ffdec4,
        36px 42px #ffdec4, 42px 42px #ffdec4, 48px 42px #ffdec4,
        54px 42px #ffdec4, 60px 42px #ffdec4, 66px 42px #ffdec4,
        72px 42px #ffdec4, 78px 42px, 84px 42px, 12px 48px, 18px 48px, 24px 48px,
        30px 48px #ffdec4, 36px 48px #cb7066, 42px 48px #ffdec4,
        48px 48px #ffdec4, 54px 48px #ffdec4, 60px 48px #ffdec4,
        66px 48px #cb7066, 72px 48px #ffdec4, 78px 48px, 84px 48px, 12px 54px,
        24px 54px, 30px 54px, 36px 54px #ffdec4, 42px 54px #ffdec4,
        48px 54px #cb7066, 54px 54px #cb7066, 60px 54px #ffdec4,
        66px 54px #ffdec4, 72px 54px, 78px 54px, 18px 60px, 42px 60px, 48px 60px,
        54px 60px, 60px 60px, 24px 66px, 36px 66px, 42px 66px, 48px 66px,
        54px 66px, 60px 66px, 66px 66px, 24px 72px, 30px 72px, 36px 72px,
        42px 72px, 48px 72px, 54px 72px, 60px 72px, 66px 72px, 36px 78px,
        48px 78px, 54px 78px, 66px 78px, 36px 84px, 48px 84px, 54px 84px,
        66px 84px, 30px 90px, 42px 90px, 60px 90px, 72px 90px;
      @supports (-moz-appearance: meterbar) {
        box-shadow: 24px 6px 0 0.02em, 78px 6px 0 0.02em, 24px 12px 0 0.02em,
          30px 12px 0 0.02em, 72px 12px 0 0.02em, 78px 12px 0 0.02em,
          24px 18px 0 0.02em, 30px 18px 0 0.02em, 36px 18px 0 0.02em,
          42px 18px 0 0.02em, 48px 18px 0 0.02em, 54px 18px 0 0.02em,
          60px 18px 0 0.02em, 66px 18px 0 0.02em, 72px 18px 0 0.02em,
          78px 18px 0 0.02em, 18px 24px 0 0.02em, 24px 24px 0 0.02em,
          30px 24px 0 0.02em, 36px 24px 0 0.02em, 42px 24px 0 0.02em,
          48px 24px 0 0.02em, 54px 24px 0 0.02em, 60px 24px 0 0.02em,
          66px 24px 0 0.02em, 72px 24px 0 0.02em, 78px 24px 0 0.02em,
          84px 24px 0 0.02em, 18px 30px 0 0.02em, 24px 30px 0 0.02em,
          30px 30px 0 0.02em, 36px 30px 0 0.02em, 42px 30px 0 0.02em,
          48px 30px 0 0.02em, 54px 30px 0 0.02em, 60px 30px 0 0.02em,
          66px 30px 0 0.02em, 72px 30px 0 0.02em, 78px 30px 0 0.02em,
          84px 30px 0 0.02em, 18px 36px 0 0.02em, 24px 36px 0 0.02em,
          30px 36px 0 0.02em, 36px 36px 0 0.02em #ffdec4,
          42px 36px 0 0.02em #ffdec4, 48px 36px 0 0.02em #ffdec4,
          54px 36px 0 0.02em #ffdec4, 60px 36px 0 0.02em #ffdec4,
          66px 36px 0 0.02em #ffdec4, 72px 36px 0 0.02em, 78px 36px 0 0.02em,
          84px 36px 0 0.02em, 18px 42px 0 0.02em, 24px 42px 0 0.02em,
          30px 42px 0 0.02em #ffdec4, 36px 42px 0 0.02em #ffdec4,
          42px 42px 0 0.02em #ffdec4, 48px 42px 0 0.02em #ffdec4,
          54px 42px 0 0.02em #ffdec4, 60px 42px 0 0.02em #ffdec4,
          66px 42px 0 0.02em #ffdec4, 72px 42px 0 0.02em #ffdec4,
          78px 42px 0 0.02em, 84px 42px 0 0.02em, 12px 48px 0 0.02em,
          18px 48px 0 0.02em, 24px 48px 0 0.02em, 30px 48px 0 0.02em #ffdec4,
          36px 48px 0 0.02em #cb7066, 42px 48px 0 0.02em #ffdec4,
          48px 48px 0 0.02em #ffdec4, 54px 48px 0 0.02em #ffdec4,
          60px 48px 0 0.02em #ffdec4, 66px 48px 0 0.02em #cb7066,
          72px 48px 0 0.02em #ffdec4, 78px 48px 0 0.02em, 84px 48px 0 0.02em,
          12px 54px 0 0.02em, 24px 54px 0 0.02em, 30px 54px 0 0.02em,
          36px 54px 0 0.02em #ffdec4, 42px 54px 0 0.02em #ffdec4,
          48px 54px 0 0.02em #cb7066, 54px 54px 0 0.02em #cb7066,
          60px 54px 0 0.02em #ffdec4, 66px 54px 0 0.02em #ffdec4,
          72px 54px 0 0.02em, 78px 54px 0 0.02em, 18px 60px 0 0.02em,
          42px 60px 0 0.02em, 48px 60px 0 0.02em, 54px 60px 0 0.02em,
          60px 60px 0 0.02em, 24px 66px 0 0.02em, 36px 66px 0 0.02em,
          42px 66px 0 0.02em, 48px 66px 0 0.02em, 54px 66px 0 0.02em,
          60px 66px 0 0.02em, 66px 66px 0 0.02em, 24px 72px 0 0.02em,
          30px 72px 0 0.02em, 36px 72px 0 0.02em, 42px 72px 0 0.02em,
          48px 72px 0 0.02em, 54px 72px 0 0.02em, 60px 72px 0 0.02em,
          66px 72px 0 0.02em, 36px 78px 0 0.02em, 48px 78px 0 0.02em,
          54px 78px 0 0.02em, 66px 78px 0 0.02em, 36px 84px 0 0.02em,
          48px 84px 0 0.02em, 54px 84px 0 0.02em, 66px 84px 0 0.02em,
          30px 90px 0 0.02em, 42px 90px 0 0.02em, 60px 90px 0 0.02em,
          72px 90px 0 0.02em;
      }
    }
  }
  /*# sourceMappingURL=nes.css.map */
`;
