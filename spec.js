
describe('Enter GURU99 Name', function() 
{
    it('should add a Name as GURU99', function()
    {
        //const url = 'https://angularjs.org';
        browser.get('https://angularjs.org');
        element(by.model("yourName")).sendKeys("Testing");
        var restest = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(restest.getText()).toEqual('Hello!');      
    });
});