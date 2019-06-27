describe("Given Presentation Indicators", () => {
  let view = null;
  describe("with an instance of ProgressIndicator", () => {
    beforeEach(() => {
      view = new Indicators.ProgressIndicator();
    });

    afterEach(() => {
      view.remove();
      view = null;
    });

    it("is defined", async () => {
      expect(Indicators.ProgressIndicator).to.not.be.undefined;
    });
    it("can create an instance", () => {
      expect(view).to.not.be.undefined;
    });

    it("can set in progress", () => {
      view.setInProgress();
      expect(view.isInprogress()).to.be.true;
    });

    it("can set complete", () => {
      view.setComplete();
      expect(view.isComplete()).to.be.true;
    });
  });

  describe("with an instance of indeterminate ProgressIndicator", () => {
    beforeEach(() => {
      view = new Indicators.ProgressIndicator({ "mode": Indicators.INDICATOR_MODE_INDETERMINATE });
    });

    afterEach(() => {
      view.remove();
      view = null;
    });

    it("is indeterminate", () => {
      expect(view.mode).to.equal(Indicators.INDICATOR_MODE_INDETERMINATE);
    });
  });

  describe("with an instance of determinate ProgressIndicator", () => {
    beforeEach(() => {
      view = new Indicators.ProgressIndicator({ "mode": Indicators.INDICATOR_MODE_DETERMINATE });
    });

    afterEach(() => {
      view.remove();
      view = null;
    });

    it("is determinate", () => {
      expect(view.mode).to.equal(Indicators.INDICATOR_MODE_DETERMINATE);
    });
  });
});
