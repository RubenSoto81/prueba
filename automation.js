import Page from "./pages";
import Selectors from "../interaccion/automation_selector";
import { browser } from "protractor";

class Automation extends Page {
    open() {
        return super.open("/");
    }

    async searchGoogle() {
        await Selectors.search.click();
        await Selectors.search.addValue();
        await Selectors.selectO.click();
    }

    async selectWiki() {
        await Selectors.wikipedia.click();
    }

    async screen() {
        await Selectors.information.scrollIntoView();
        await browser.saveScreenshot("./wdio.png");
    }
}
export default new Automation();