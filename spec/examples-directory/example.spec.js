import { protractor, browser, element } from "protractor";

describe('Enter GURU99 Name', function() 
{
    it('should add a Name as GURU99', function()
    {
        //const url = 'https://angularjs.org';
        browser.get('https://angularjs.org');
        element(by.model("yourName")).sendKeys("Testing");

        var restest = element(by.class("ng-binding"));
        console.log("Hello world!");
        console.log(restest);        
    });
});