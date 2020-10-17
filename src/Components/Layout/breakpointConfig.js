export default class Breakpoint {
  constructor(breakpointWidth = 0) {
    this.breakpointWidth = breakpointWidth;
    this.xs = this.breakpointWidth < 617;
    this.sm = this.breakpointWidth >= 617 && this.breakpointWidth < 769
    this.lg = this.breakpointWidth >= 769 && this.breakpointWidth < 1367
    this.xl = this.breakpointWidth >= 1367
    this.isSmAndDown = this.breakpointWidth < 769
    this.isLgAndDown = this.breakpointWidth < 1367
  }
}