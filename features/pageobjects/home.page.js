import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

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
    expect(elem.getText()).toBe("William Clarke")
  }

  //check contents of h4 div contains "Test Automation Engineer"  
  checkSubtitle() {
    const elem = $(`//*[@id="mainheader"]/div/div/h4`);
    expect(elem.getText()).toBe("Test Automation Engineer")
  }

  //check linkedin icons links to my linkedin profile
  checkLinkedInIcon() { 
    const elem = $(`//*[@id="mainheader"]/div/div/a[2]`);
    expect(elem.getAttribute("href")).toBe("https://www.linkedin.com/in/WilliamFClarke")
  }

}

export default new HomePage();
