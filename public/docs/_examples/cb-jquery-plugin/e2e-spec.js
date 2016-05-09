describe('Drag and Drop', function () {

  beforeAll(function () {
    browser.get(''); 
  });

  it('should drag hero to assignment', function () {
    
    var allHeroes = element.all(by.css('.hero'));
    expect(allHeroes.count()).toBe(4);
    
    var allAssignments = element.all(by.css('.assignment'));
    expect(allAssignments.count()).toBe(3);
    
    var hero1 = allHeroes.get(0); //Mr. Nice
    var assignment1 = allAssignments.get(0); 
   
    browser.actions()
           .dragAndDrop(hero1, assignment1)
           .perform();    
       
    var assignment = element.all(by.xpath('//div[text()="Help Granny cross the street"]/following-sibling::ul/li[text()="Mr. Nice"]'));
    expect(assignment.count()).toBe(1);
    
    var doneButton = element(by.xpath('//div[@data-hero="Mr. Nice"]/div/button'));   
    
    //Remove Mr. Nice
    doneButton.click().then(function(){
      allHeroes = element.all(by.css('.hero'));
      expect(allHeroes.count()).toBe(3);
    }); 
  });
});
