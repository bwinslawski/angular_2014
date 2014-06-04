describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('public/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('friend in friends'));
      var query = element(by.model('filterQuery'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
  });
});
