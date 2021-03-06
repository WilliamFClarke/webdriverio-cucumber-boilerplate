import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

  get title() {
    return $(`//*[@id="mainheader"]/div/h1`);
  }


  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }


  checkTitle() {
    const elem = $(`//*[@id="mainheader"]/div/h1`);
    expect($(`//*[@id="mainheader"]/div/h1`).getText()).toBe("William Clarke")
  }

}

export default new LoginPage();
