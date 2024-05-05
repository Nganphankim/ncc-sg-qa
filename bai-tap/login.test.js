const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Login page", function () {
  let driver;

  before(async function () {
    this.timeout(0); 
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Login successful", async function () {
    await driver.get("https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html");

    try {
      // Wait until email input is visible
      await driver.wait(until.elementLocated(By.id("username")), 10000);
      
      // Input email and password
      await driver.findElement(By.id("username")).sendKeys("test1@gmail.com");
      await driver.findElement(By.id("password")).sendKeys("Ncc12345");

      // Click on login button
      await driver.findElement(By.css("#loginForm button")).click();

      // Wait until success message is visible
      await driver.wait(until.elementLocated(By.css("h1")), 10000);
      
      // Get and assert success message
      let successMessage = await driver.findElement(By.css("h1")).getText();
      assert.equal(successMessage, "Hello World");

    } catch (error) {
      console.error("Login fail test case failed", error);
    }
  });
  it("Login fail", async function () {
    await driver.get("https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html");

    try {
      // Wait until email input is visible
      await driver.wait(until.elementLocated(By.id("username")), 10000);
      
      // Input email and password
      await driver.findElement(By.id("username")).sendKeys("test21212121@gmail.com");
      await driver.findElement(By.id("password")).sendKeys("Ncc12345");

      // Click on login button
      await driver.findElement(By.css("#loginForm button")).click();

      // Wait until success message is visible
      await driver.wait(until.elementLocated(By.css("h1")), 10000);
      
      // Get and assert success message
      let errorMessage = await driver.findElement(By.className("alert")).getText();
      assert.equal(errorMessage, "Invalid username or password");
    } catch (error) {
      console.error("Login fail test case failed", error);
    }
  });
  after(async function () {
    if (driver) {
      try {
        await driver.quit();
      } catch (error) {
        console.error("Error quitting WebDriver:", error);
      }
    }
  });
});
