const {Browser, Builder, By, Key} = require("selenium-webdriver");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        driver= await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get ("https://www.selenium.dev/selenium/web/web-form.html");

        //Textarea
        const textArea = await driver.findElement(By.name("my-textarea"));
        await textArea.sendKeys("Anita lava la tina");
        await delay(2000);

        //Dropdown Select
        const dropdownSelect = await driver.findElement(By.name("my-select"));
        await dropdownSelect.sendKeys("Three");
        await delay(2000);

        //Color picker
        const colorPicker = await driver.findElement(By.name("my-colors"));
        await colorPicker.sendKeys("#20A722");
        await delay(2000);

        //Datepicker
        const datePicker = await driver.findElement(By.name("my-date"));
        await datePicker.sendKeys("08/16/1970");
        await datePicker.sendKeys(Key.ENTER);
        await delay(2000);

        //Default Check
        const defaultCheck = await driver.findElement(By.id("my-check-2"));
        await defaultCheck.click();
        await delay(2000);

        //Botón Submit
        const submit = await driver.findElement(By.css('button[type="submit"]'));
        await delay(2000);
        await submit.click();

        //Titulo Form
        const textTitulo = await driver.findElement(By.tagName("H1"));
        const textValueform = await textTitulo.getText();
        console.log(textValueform);
        await delay(2000);

        //mensaje Received
        const textMessage = await driver.findElement(By.id("message"));
        const textValuemessage = await textMessage.getText();
        console.log(textValuemessage);
        await delay(2000);

    } catch (error) {
        console.error(error);
    } finally{
        if (driver) {
            // await driver.quit();
        }
    }

}

start();