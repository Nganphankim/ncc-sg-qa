const { By, Builder, until } = require("selenium-webdriver");
const assert = require("assert");
const { describe, it, before, after } = require("mocha");

describe("Register page", function () {
  let driver;

  before(async function () {
    this.timeout(0);
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Register successful", async function () {
    await driver.get("https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/register.html");

    try {
      // Wait until email input is visible
      await driver.wait(until.elementLocated(By.id("email")), 10000);
      
      // Input email and password
      await driver.findElement(By.id("email")).sendKeys("test1vvv@gmail.com");
      await driver.findElement(By.id("password")).sendKeys("Ncc12345");

      // Click on register button
      await driver.findElement(By.css("#registerForm button")).click();

      // Wait until success message is visible
      await driver.wait(until.elementLocated(By.className("alert")), 10000);
      
      // Get and assert success message
      let successMessage = await driver.findElement(By.className("alert")).getText();
      assert.equal(successMessage, "Registration successful");
    } catch (error) {
      console.error("Register successful test case failed", error);
    }
  });

  it("Register fail", async function () {
    await driver.get("https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/register.html");

    try {
      // Wait until email input is visible
      await driver.wait(until.elementLocated(By.id("email")), 10000);
      
      // Input existing email and password
      await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
      await driver.findElement(By.id("password")).sendKeys("Ncc12345");

      // Click on register button
      await driver.findElement(By.css("#registerForm button")).click();

      // Wait until error message is visible
      await driver.wait(until.elementLocated(By.className("alert")), 10000);
      
      // Get and assert error message
      let errorMessage = await driver.findElement(By.className("alert")).getText();
      assert.equal(errorMessage, "Username already exists");
    } catch (error) {
      console.error("Register fail test case failed", error);
    }
  });

//   after(async function () {
//     await driver.quit();
//   });
// });
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
